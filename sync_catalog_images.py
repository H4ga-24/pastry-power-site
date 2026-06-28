"""
sync_catalog_images.py — PastryPower
Met à jour catalog.js avec les chemins locaux des images déjà générées.
Les vignettes dans les listes de recettes seront ainsi à jour.

Lancer depuis la racine du projet :
    python sync_catalog_images.py
"""

import re, json
from pathlib import Path

PROJECT_ROOT = Path(r"C:\Users\littl\Desktop\PastryPower-Dev")
CATALOG_PATH = PROJECT_ROOT / "src" / "data" / "catalog.js"
IMG_RECIPES  = PROJECT_ROOT / "public" / "images" / "recipes"
IMG_ROOT     = PROJECT_ROOT / "public" / "images"

def find_local_image(rid):
    """Retourne le chemin web local si une image existe, sinon None."""
    for ext in [".webp", ".png", ".jpg", ".jpeg"]:
        if (IMG_RECIPES / f"{rid}{ext}").exists():
            return f"/images/recipes/{rid}{ext}"
    for ext in [".webp", ".png", ".jpg", ".jpeg"]:
        if (IMG_ROOT / f"{rid}{ext}").exists():
            return f"/images/{rid}{ext}"
    return None

# ── Lecture du catalogue ──────────────────────────────────────────────────────
raw = CATALOG_PATH.read_text(encoding="utf-8")
m   = re.search(r"export\s+const\s+catalog\s*=\s*(\[.*\])\s*;?\s*$", raw, re.DOTALL)
if not m:
    raise SystemExit("❌ Impossible de parser catalog.js")

catalog = json.loads(m.group(1))

# ── Mise à jour ───────────────────────────────────────────────────────────────
updated  = []
skipped  = []
no_local = []

for recipe in catalog:
    rid = recipe.get("id", "")
    if recipe.get("isTech"):
        continue

    current_img = recipe.get("image", "")
    local_path  = find_local_image(rid)

    if local_path is None:
        no_local.append(rid)
        continue

    if current_img == local_path:
        skipped.append(rid)
        continue

    # Remplace le champ image dans le texte brut du fichier
    pattern     = rf'("id"\s*:\s*"{re.escape(rid)}"[^}}]{{0,300}}?"image"\s*:\s*")[^"]*(")'
    replacement = rf'\g<1>{local_path}\g<2>'
    new_raw, n  = re.subn(pattern, raw, replacement, flags=re.DOTALL)

    # re.subn args order fix
    new_raw, n  = re.subn(pattern, replacement, raw, flags=re.DOTALL)

    if n > 0:
        raw = new_raw
        recipe["image"] = local_path
        updated.append(rid)

# ── Sauvegarde ────────────────────────────────────────────────────────────────
CATALOG_PATH.write_text(raw, encoding="utf-8")

print(f"\n{'='*55}")
print(f"  SYNC IMAGES CATALOG.JS")
print(f"{'='*55}")
print(f"  ✅ Mis à jour  : {len(updated)}")
print(f"  ⏭️  Déjà OK    : {len(skipped)}")
print(f"  ❌ Sans local  : {len(no_local)}")
print(f"{'='*55}\n")

if updated:
    print("Recettes mises à jour :")
    for r in updated:
        print(f"  • {r}")
    print()

if no_local:
    print("Recettes sans image locale (à générer) :")
    for r in no_local:
        print(f"  • {r}")
    print()