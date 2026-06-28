#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
======================================================================
  PASTRY POWER — Générateur d'images IA pour les recettes
======================================================================

Ce script lit ton catalogue de recettes, génère pour chacune une image
de pâtisserie sur FOND BLANC (photo studio, style catalogue pro) via
l'API Google Gemini / Imagen, COMPRESSE l'image en WebP léger, la sauve
en local dans ton projet, puis met à jour le champ "image" des recettes.

→ Résout le problème de droits d'auteur (images générées = à toi).
→ Cohérence visuelle : même style fond blanc sur toutes les recettes.
→ Images WebP optimisées (~100-300 Ko) = site rapide.
→ Ne touche QUE les recettes dont l'image est externe (http...).
   Les recettes ayant déjà une image locale (/images/...) sont ignorées.

----------------------------------------------------------------------
  UTILISATION
----------------------------------------------------------------------
  1. Installer les dépendances :
        pip install google-genai pillow

  2. Mettre ta clé API (obtenue sur https://aistudio.google.com/apikey)
     dans la variable d'environnement GEMINI_API_KEY, ou directement
     ci-dessous dans API_KEY.

  3. Lancer un TEST (5 images seulement) :
        python generate_images.py --test

  4. Vérifier les images générées dans public/images/recipes/
     Si le rendu te plaît, lancer le COMPLET avec mise à jour des fichiers :
        python generate_images.py --update-files

  Options utiles :
     --test            génère seulement 5 images
     --limit N         génère N images max
     --update-files    met à jour les fichiers recette .js (champ image)
     --model fast      Imagen 4 Fast (le moins cher, ~0,02$/img)
     --model nano      Nano Banana (Gemini, défaut)
     --model imagen    Imagen 4 qualité standard
     --all             traite aussi les recettes ayant déjà une image locale
     --quality N       qualité WebP 1-100 (défaut 82)
     --max-size N      redimensionne à N px max sur le grand côté (défaut 1200)
     --keep-png        garde aussi le PNG original (sinon supprimé après WebP)
======================================================================
"""

import os
import sys
import re
import json
import time
import argparse
from pathlib import Path
from io import BytesIO

# ----------------------------------------------------------------------
# CONFIGURATION — à adapter si besoin
# ----------------------------------------------------------------------

# Ta clé API Google AI Studio. Laisse vide pour utiliser la variable
# d'environnement GEMINI_API_KEY (recommandé).
API_KEY = "AQ.Ab8RN6Ir1MJHF-njdHrlWuNAlW7LfovX_RQp_pHd0b9ppbUh6w"

# Chemin racine du projet (là où se trouve le dossier src/).
PROJECT_ROOT = Path(__file__).resolve().parent

# Emplacement du catalogue et des fichiers recettes
CATALOG_PATH = PROJECT_ROOT / "src" / "data" / "catalog.js"
RECIPES_DIR = PROJECT_ROOT / "src" / "data" / "recipes"

# Où sauver les images générées (dans public/ pour être servies par le site)
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "recipes"

# Le chemin web qui sera écrit dans le champ image: des recettes
WEB_PATH_PREFIX = "/images/recipes"

# Style visuel COMMUN à toutes les images (garantit la cohérence)
STYLE_SUFFIX = (
    "professional food photography, centered on a clean pure white seamless background, "
    "soft even studio lighting, sharp focus, high resolution, appetizing, "
    "no text, no watermark, no logo, no hands, no props, minimalist product shot"
)

# Modèles disponibles
MODELS = {
    "fast": "imagen-4.0-fast-generate-001",   # le moins cher, ~0,02$/image
    "nano": "gemini-2.5-flash-image",          # Nano Banana, polyvalent
    "imagen": "imagen-4.0-generate-001",       # Imagen 4 qualité standard
}

# Réglages compression WebP par défaut
DEFAULT_WEBP_QUALITY = 82      # 1-100 ; 80-85 = très bon compromis qualité/poids
DEFAULT_MAX_SIZE = 1200        # px max sur le grand côté (suffisant pour le web)

# ----------------------------------------------------------------------
# CONSTRUCTION DU PROMPT — la fidélité vient d'ici
# ----------------------------------------------------------------------

def build_prompt(recipe):
    """Construit un prompt précis à partir du titre + description de la recette."""
    title = recipe.get("title", "").strip()
    desc = recipe.get("description", "").strip()
    category = recipe.get("category", "").strip()

    clean_title = re.sub(r"^(Le |La |L'|Les |Un |Une )", "", title, flags=re.IGNORECASE)

    subject = f"A classic French {category.lower()} : {clean_title}."
    if desc:
        subject += f" {desc}"

    return f"{subject} {STYLE_SUFFIX}"


# ----------------------------------------------------------------------
# LECTURE DU CATALOGUE
# ----------------------------------------------------------------------

def load_catalog():
    """Extrait le tableau JSON depuis catalog.js."""
    if not CATALOG_PATH.exists():
        sys.exit(f"❌ Catalogue introuvable : {CATALOG_PATH}\n"
                 f"   Vérifie que tu lances le script depuis la racine du projet.")

    text = CATALOG_PATH.read_text(encoding="utf-8")
    match = re.search(r"export\s+const\s+catalog\s*=\s*(\[.*\])\s*;?\s*$",
                      text, re.DOTALL)
    if not match:
        sys.exit("❌ Impossible de parser catalog.js (format inattendu).")

    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError as e:
        sys.exit(f"❌ Erreur de parsing JSON du catalogue : {e}")


def needs_new_image(recipe, process_all=False):
    """True si la recette doit recevoir une nouvelle image."""
    if recipe.get("isTech"):
        return False
    img = recipe.get("image", "")
    if process_all:
        return True
    return img.startswith("http")


# ----------------------------------------------------------------------
# GÉNÉRATION D'IMAGE VIA L'API
# ----------------------------------------------------------------------

def get_client():
    key = API_KEY or os.environ.get("GEMINI_API_KEY", "")
    if not key:
        sys.exit("❌ Aucune clé API trouvée.\n"
                 "   → Mets ta clé dans la variable API_KEY en haut du script,\n"
                 "   → ou définis la variable d'environnement GEMINI_API_KEY.\n"
                 "   Obtiens une clé sur : https://aistudio.google.com/apikey")
    try:
        from google import genai
    except ImportError:
        sys.exit("❌ Le SDK google-genai n'est pas installé.\n"
                 "   Lance : pip install google-genai pillow")
    return genai.Client(api_key=key)


def generate_image_bytes(client, model_name, prompt):
    """Génère une image et retourne ses bytes bruts (ou None)."""
    from google.genai import types

    if model_name.startswith("imagen"):
        resp = client.models.generate_images(
            model=model_name,
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="1:1",
            ),
        )
        if not resp.generated_images:
            return None
        return resp.generated_images[0].image.image_bytes
    else:
        resp = client.models.generate_content(
            model=model_name,
            contents=prompt,
        )
        for part in resp.candidates[0].content.parts:
            if getattr(part, "inline_data", None) is not None:
                return part.inline_data.data
        return None


# ----------------------------------------------------------------------
# COMPRESSION WEBP
# ----------------------------------------------------------------------

def save_as_webp(img_bytes, out_path, quality, max_size, keep_png=False):
    """Convertit les bytes en WebP optimisé. Retourne la taille finale en Ko."""
    from PIL import Image

    img = Image.open(BytesIO(img_bytes))

    # Convertit en RGB (WebP n'aime pas certains modes ; fond blanc pour transparence)
    if img.mode in ("RGBA", "LA", "P"):
        background = Image.new("RGB", img.size, (255, 255, 255))
        img = img.convert("RGBA")
        background.paste(img, mask=img.split()[-1])
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Redimensionne si plus grand que max_size (garde les proportions)
    if max_size and max(img.size) > max_size:
        img.thumbnail((max_size, max_size), Image.LANCZOS)

    # Option : garder le PNG original
    if keep_png:
        png_path = out_path.with_suffix(".png")
        png_path.write_bytes(img_bytes)

    # Sauve en WebP optimisé
    img.save(out_path, "WEBP", quality=quality, method=6)
    return out_path.stat().st_size / 1024  # en Ko


# ----------------------------------------------------------------------
# MISE À JOUR DES FICHIERS RECETTE
# ----------------------------------------------------------------------

def update_recipe_file(module_file, new_web_path):
    """Remplace le champ image: dans le fichier recette .js correspondant."""
    path = RECIPES_DIR / module_file
    if not path.exists():
        print(f"      ⚠️  Fichier recette introuvable : {module_file}")
        return False
    content = path.read_text(encoding="utf-8")
    new_content, n = re.subn(
        r'(image:\s*)([\'"]).*?\2',
        rf'\g<1>"{new_web_path}"',
        content,
        count=1,
    )
    if n == 0:
        print(f"      ⚠️  Champ image: non trouvé dans {module_file}")
        return False
    path.write_text(new_content, encoding="utf-8")
    return True


# ----------------------------------------------------------------------
# PROGRAMME PRINCIPAL
# ----------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Générateur d'images IA Pastry Power")
    parser.add_argument("--test", action="store_true", help="Mode test : 5 images")
    parser.add_argument("--limit", type=int, default=None, help="Nombre max d'images")
    parser.add_argument("--update-files", action="store_true",
                        help="Met à jour le champ image: des fichiers recette .js")
    parser.add_argument("--model", choices=list(MODELS.keys()), default="nano",
                        help="Modèle : fast, nano (défaut), imagen")
    parser.add_argument("--all", action="store_true",
                        help="Traite aussi les recettes ayant déjà une image locale")
    parser.add_argument("--quality", type=int, default=DEFAULT_WEBP_QUALITY,
                        help=f"Qualité WebP 1-100 (défaut {DEFAULT_WEBP_QUALITY})")
    parser.add_argument("--max-size", type=int, default=DEFAULT_MAX_SIZE,
                        help=f"Taille max px grand côté (défaut {DEFAULT_MAX_SIZE})")
    parser.add_argument("--keep-png", action="store_true",
                        help="Garde aussi le PNG original")
    args = parser.parse_args()

    model_name = MODELS[args.model]
    limit = 5 if args.test else args.limit

    print("=" * 60)
    print("  PASTRY POWER — Génération d'images IA (+ WebP)")
    print("=" * 60)
    print(f"  Modèle       : {model_name}")
    print(f"  Sortie       : {OUTPUT_DIR}")
    print(f"  Format       : WebP (qualité {args.quality}, max {args.max_size}px)")
    print(f"  MAJ fichiers : {'OUI' if args.update_files else 'NON (images seules)'}")
    if limit:
        print(f"  Limite       : {limit} images")
    print("=" * 60)

    # Vérifie Pillow tôt
    try:
        import PIL  # noqa
    except ImportError:
        sys.exit("❌ Pillow n'est pas installé.\n   Lance : pip install pillow")

    catalog = load_catalog()
    targets = [r for r in catalog if needs_new_image(r, process_all=args.all)]

    print(f"  {len(targets)} recette(s) à traiter (sur {len(catalog)} au total).\n")

    if not targets:
        print("✅ Rien à faire — aucune image externe à remplacer.")
        return

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    client = get_client()

    done, skipped, errors, total_kb = 0, 0, 0, 0.0
    for i, recipe in enumerate(targets):
        if limit and done >= limit:
            break

        rid = recipe["id"]
        out_path = OUTPUT_DIR / f"{rid}.webp"
        web_path = f"{WEB_PATH_PREFIX}/{rid}.webp"

        # Reprise : si l'image existe déjà, on saute
        if out_path.exists():
            print(f"  [{i+1}] ⏭️  {rid} (déjà générée)")
            skipped += 1
            if args.update_files:
                update_recipe_file(recipe["moduleFile"], web_path)
            continue

        prompt = build_prompt(recipe)
        print(f"  [{i+1}] 🎨 {rid} ...", end=" ", flush=True)

        try:
            raw = generate_image_bytes(client, model_name, prompt)
            if raw:
                size_kb = save_as_webp(raw, out_path, args.quality,
                                       args.max_size, args.keep_png)
                total_kb += size_kb
                done += 1
                print(f"✅ ({size_kb:.0f} Ko)")
                if args.update_files:
                    update_recipe_file(recipe["moduleFile"], web_path)
            else:
                errors += 1
                print("❌ (pas d'image retournée)")
        except Exception as e:
            errors += 1
            print(f"❌ {e}")
            time.sleep(2)

        time.sleep(1)  # pause anti rate-limit

    print("\n" + "=" * 60)
    print(f"  Terminé : {done} générée(s), {skipped} ignorée(s), {errors} erreur(s)")
    if done:
        print(f"  Poids moyen : {total_kb/done:.0f} Ko/image")
    print(f"  Images dans : {OUTPUT_DIR}")
    if not args.update_files:
        print("  ℹ️  Les fichiers recette n'ont PAS été modifiés.")
        print("     Relance avec --update-files quand le rendu te convient.")
    print("=" * 60)


if __name__ == "__main__":
    main()
