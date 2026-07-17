"""
link_images.py — PastryPower
Met à jour le champ `image:` dans chaque fichier recette JS (.js/.jsx)
pour pointer vers l'image locale si elle existe dans public/images/recipes/.

Lancer depuis la racine du projet :
    python link_images.py
"""

import re
from pathlib import Path

PROJECT_ROOT = Path(r"C:\Users\littl\Desktop\PastryPower-Dev")
RECIPES_DIR  = PROJECT_ROOT / "src" / "data" / "recipes"
IMG_DIR      = PROJECT_ROOT / "public" / "images" / "recipes"

updated = []
skipped = []

for js_file in sorted(RECIPES_DIR.glob("*.js")) :
    recipe_id = js_file.stem
    img_path  = IMG_DIR / f"{recipe_id}.png"
    if not img_path.exists():
        skipped.append(recipe_id)
        continue

    local_url = f"/images/recipes/{recipe_id}.png"
    content   = js_file.read_text(encoding="utf-8")

    new_content = re.sub(
        r'(image\s*:\s*")[^"]*(")',
        rf'\g<1>{local_url}\g<2>',
        content,
        count=1
    )

    if new_content != content:
        js_file.write_text(new_content, encoding="utf-8")
        updated.append(recipe_id)
    else:
        skipped.append(recipe_id)

# Gérer aussi les .jsx
for jsx_file in sorted(RECIPES_DIR.glob("*.jsx")):
    recipe_id = jsx_file.stem.replace("_", "-")
    img_path  = IMG_DIR / f"{recipe_id}.png"
    if not img_path.exists():
        skipped.append(jsx_file.stem)
        continue

    local_url = f"/images/recipes/{recipe_id}.png"
    content   = jsx_file.read_text(encoding="utf-8")
    new_content = re.sub(
        r'(image\s*:\s*")[^"]*(")',
        rf'\g<1>{local_url}\g<2>',
        content,
        count=1
    )
    if new_content != content:
        jsx_file.write_text(new_content, encoding="utf-8")
        updated.append(jsx_file.stem)
    else:
        skipped.append(jsx_file.stem)

print(f"\n✅ {len(updated)} fichiers mis à jour :")
for r in updated:
    print(f"   • {r}")
print(f"\n⏭️  {len(skipped)} sans image locale (ignorés)")
