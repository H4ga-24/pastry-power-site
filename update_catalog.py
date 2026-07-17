"""
update_catalog.py — PastryPower
Met à jour le champ image: dans catalog.js pour toutes les recettes
qui ont une image locale dans public/images/recipes/.
"""

import re
import json
from pathlib import Path

PROJECT_ROOT = Path(r"C:\Users\littl\Desktop\PastryPower-Dev")
CATALOG_FILE = PROJECT_ROOT / "src" / "data" / "catalog.js"
IMG_DIR      = PROJECT_ROOT / "public" / "images" / "recipes"

# Lire le catalog.js
content = CATALOG_FILE.read_text(encoding="utf-8")

updated = 0
skipped = 0

def replace_image(match):
    global updated, skipped
    block = match.group(0)
    id_match = re.search(r'"id"\s*:\s*"([^"]+)"', block)
    if not id_match:
        skipped += 1
        return block

    recipe_id = id_match.group(1)
    img_path = IMG_DIR / f"{recipe_id}.png"

    if not img_path.exists():
        skipped += 1
        return block

    local_url = f"/images/recipes/{recipe_id}.png"

    new_block = re.sub(
        r'("image"\s*:\s*)"[^"]*"',
        rf'\1"{local_url}"',
        block,
        count=1
    )

    if new_block != block:
        updated += 1
    else:
        skipped += 1

    return new_block

new_content = re.sub(
    r'\{[^{}]*"id"\s*:[^{}]*\}',
    replace_image,
    content,
    flags=re.DOTALL
)

CATALOG_FILE.write_text(new_content, encoding="utf-8")

print(f"\n✅ {updated} entrées du catalog mises à jour")
print(f"⏭️  {skipped} entrées ignorées (pas d'image locale)")
