#!/usr/bin/env python3
"""
scan_editorial.py
-----------------
Inventaire éditorial OBJECTIF du catalogue PastryPower, pensé pour le motif
"contenu de faible valeur" d'AdSense. Il ne juge pas la qualité d'une fiche :
il te donne les faits pour décider toi-même.

Il répond à 3 questions :
  1. Quelles recettes n'ont PAS d'image locale (ou pointent encore vers une
     URL externe hotlinkée) ?  -> le vrai blocage connu + risque légal
  2. Quelles fiches ont une description trop courte / manquante ?
  3. Où sont les GRAPPES de recettes quasi-identiques (ex : 40x "Mousse …")
     -> c'est ce motif "en série" que la MàJ scaled-content de Google flague.

Aucune dépendance externe (stdlib uniquement).

Usage (depuis la racine du projet) :
    python scan_editorial.py
    python scan_editorial.py --root "C:\\Users\\littl\\Desktop\\PastryPower-Dev"
    python scan_editorial.py --min-cluster 4 --min-desc 60
"""

import argparse
import csv
import re
import sys
from collections import defaultdict
from pathlib import Path

STOPWORDS = {"le", "la", "les", "l", "au", "aux", "à", "de", "des", "du", "un",
             "une", "et", "en", "d", "pour"}


def parse_catalog(catalog_path):
    """Extrait les objets recette de catalog.js (même approche regex que tes
    scripts generate-catalog / image-sync existants)."""
    text = catalog_path.read_text(encoding="utf-8-sig")
    entries = []
    for block in re.findall(r"\{[^{}]*?\"id\"\s*:[^{}]*?\}", text, re.DOTALL):
        def field(name):
            m = re.search(rf'"{name}"\s*:\s*"([^"]*)"', block)
            return m.group(1) if m else ""

        def boolfield(name):
            m = re.search(rf'"{name}"\s*:\s*(true|false)', block)
            return m.group(1) == "true" if m else False

        entries.append({
            "id": field("id"),
            "title": field("title"),
            "description": field("description"),
            "category": field("category"),
            "image": field("image"),
            "isVip": boolfield("isVip"),
            "isTech": boolfield("isTech"),
        })
    return entries


def first_significant_word(title):
    for w in re.findall(r"[A-Za-zÀ-ÿ']+", title.lower()):
        if w not in STOPWORDS and len(w) > 1:
            return w.capitalize()
    return title.strip() or "?"


def main():
    ap = argparse.ArgumentParser(description="Inventaire éditorial PastryPower (pré-AdSense)")
    ap.add_argument("--root", default=".", help="racine du projet")
    ap.add_argument("--min-desc", type=int, default=50,
                    help="longueur mini attendue d'une description")
    ap.add_argument("--min-cluster", type=int, default=5,
                    help="taille mini d'une grappe pour être signalée")
    ap.add_argument("--csv", default="scan_editorial.csv")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    catalog = root / "src" / "data" / "catalog.js"
    img_dir = root / "public" / "images" / "recipes"

    if not catalog.exists():
        print(f"✗ catalog.js introuvable : {catalog}\n"
              f"  Lance le script depuis la racine du projet, ou passe --root.")
        sys.exit(2)

    entries = parse_catalog(catalog)
    recipes = [e for e in entries if not e["isTech"] and e["id"]]
    print(f"→ {len(entries)} entrées lues ({len(recipes)} recettes hors techno)\n")

    no_image, remote_image, thin_desc = [], [], []

    for e in recipes:
        img = e["image"].strip()
        local = img_dir / f"{e['id']}.png"
        if img.startswith("http"):
            remote_image.append(e)          # hotlink externe = risque légal + "low effort"
        elif not img or not local.exists():
            no_image.append(e)              # pas d'image du tout
        if len(e["description"].strip()) < args.min_desc:
            thin_desc.append(e)

    # --- grappes par premier mot significatif du titre ---
    families = defaultdict(list)
    for e in recipes:
        families[first_significant_word(e["title"])].append(e)
    clusters = {k: v for k, v in families.items() if len(v) >= args.min_cluster}

    # ---------- rapport ----------
    def block(title, items, fields=("id", "title")):
        print(f"\n{title} ({len(items)})")
        for e in sorted(items, key=lambda x: x["id"])[:40]:
            print("   - " + " | ".join(str(e[f]) for f in fields))
        if len(items) > 40:
            print(f"   … +{len(items) - 40} autres (voir CSV)")

    print("=" * 60)
    print("IMAGES")
    print("=" * 60)
    block("🔴 Sans image locale", no_image)
    block("🟠 Image externe hotlinkée (à remplacer)", remote_image, ("id", "image"))

    print("\n" + "=" * 60)
    print("DESCRIPTIONS")
    print("=" * 60)
    block(f"🟠 Description < {args.min_desc} car.", thin_desc,
          ("id", "description"))

    print("\n" + "=" * 60)
    print("GRAPPES DE RECETTES SIMILAIRES  (motif 'scaled content')")
    print("=" * 60)
    if not clusters:
        print("  Aucune grappe au-dessus du seuil.")
    for name, items in sorted(clusters.items(), key=lambda kv: -len(kv[1])):
        print(f"\n  « {name} … » : {len(items)} recettes")
        print("     ex : " + ", ".join(e["title"] for e in items[:6])
              + (" …" if len(items) > 6 else ""))

    print("\n" + "=" * 60)
    print("RÉSUMÉ")
    print("=" * 60)
    print(f"  Recettes totales        : {len(recipes)}")
    print(f"  🔴 sans image           : {len(no_image)}")
    print(f"  🟠 image hotlinkée       : {len(remote_image)}")
    print(f"  🟠 description courte    : {len(thin_desc)}")
    print(f"  grappes ≥ {args.min_cluster}            : {len(clusters)} "
          f"(soit {sum(len(v) for v in clusters.values())} recettes)")

    with open(args.csv, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["id", "title", "category", "isVip", "image",
                    "desc_len", "no_image", "remote_image", "family"])
        for e in recipes:
            fam = first_significant_word(e["title"])
            w.writerow([
                e["id"], e["title"], e["category"], e["isVip"], e["image"],
                len(e["description"].strip()),
                e in no_image, e in remote_image,
                fam if len(families[fam]) >= args.min_cluster else "",
            ])
    print(f"\n📄 Détail complet : {args.csv}")


if __name__ == "__main__":
    main()
