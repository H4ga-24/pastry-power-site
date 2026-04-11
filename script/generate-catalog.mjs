// scripts/generate-catalog.js
// Génère src/data/catalog.js à partir des fichiers recettes et technologie.
//
// UTILISATION (depuis la racine du projet) :
//   node scripts/generate-catalog.js
//
// À relancer à chaque fois que vous ajoutez ou supprimez une recette.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');
const recipesDir = join(root, 'src/data/recipes');
const techDir = join(root, 'src/pages/technologie');

// 1. CORRECTION DES ACCENTS : Lecture directe et propre en UTF-8
function readFileSafe(filePath) {
  return readFileSync(filePath, 'utf8');
}

// 2. CORRECTION DES APOSTROPHES : Extraction robuste (gère les ", les ', et les ` multi-lignes)
function extractString(content, field) {
  // Essai avec guillemets doubles : description: "texte avec l'apostrophe"
  const doubleMatch = content.match(new RegExp(field + ':\\s*"((?:[^"\\\\]|\\\\.)*)"'));
  if (doubleMatch) return doubleMatch[1].replace(/\\"/g, '"');

  // Essai avec guillemets simples : description: 'texte'
  const singleMatch = content.match(new RegExp(field + ":\\s*'((?:[^'\\\\]|\\\\.)*)'"));
  if (singleMatch) return singleMatch[1].replace(/\\'/g, "'");

  // Essai avec template literals : description: `texte multi-lignes`
  const templateMatch = content.match(new RegExp(field + "\\s*`([\\s\\S]*?)`"));
  if (templateMatch) return templateMatch[1];

  return null;
}

function extractBool(content, field) {
  const match = content.match(new RegExp(`${field}:\\s*(true|false)`));
  return match ? match[1] === 'true' : false;
}

function extractArray(content, field) {
  const match = content.match(new RegExp(`${field}:\\s*\\[([^\\]]+)\\]`));
  if (!match) return [];
  const items = match[1].match(/["'`](.*?)["'`]/g);
  return items ? items.map(s => s.replace(/["'`]/g, '')) : [];
}

// --- Recettes ---

const recipes = [];

if (existsSync(recipesDir)) {
  const files = readdirSync(recipesDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

  for (const file of files) {
    const content = readFileSafe(join(recipesDir, file));
    const fileName = file.replace(/\.(js|jsx)$/, '');
    const formattedId = fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const title = extractString(content, 'title');
    if (!title) {
      console.warn(`⚠️  Titre introuvable dans ${file}, ignoré.`);
      continue;
    }

    const id = extractString(content, 'id') || formattedId;

    recipes.push({
      id,
      title,
      category: extractString(content, 'category') || 'Pâtisserie',
      subCategory: extractArray(content, 'subCategory'),
      image: extractString(content, 'image') || null,
      description: extractString(content, 'description') || 'Découvrez cette recette.',
      isVip: extractBool(content, 'isVip'),
      isTech: false,
      moduleFile: file,
    });
  }
}

// --- Pages technologie ---

const techItems = [];

if (existsSync(techDir)) {
  const files = readdirSync(techDir).filter(f => f.endsWith('.jsx'));

  for (const file of files) {
    const content = readFileSafe(join(techDir, file));
    const fileName = file.replace(/\.jsx$/, '');
    const formattedId = fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    const title = extractString(content, 'title') || fileName;
    const category = extractString(content, 'category') || 'Technologie';
    const image = extractString(content, 'image') || null;
    const isVip = extractBool(content, 'isVip') || content.includes('isVip: true');

    techItems.push({
      id: formattedId,
      title,
      category,
      subCategory: [],
      image: image || 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=60&w=800',
      description: 'Comprendre les fondamentaux.',
      isVip,
      isTech: true,
      moduleFile: file,
    });
  }
}

// --- Écriture du fichier ---

const allItems = [...recipes, ...techItems];

const output = `// ⚠️  FICHIER AUTO-GÉNÉRÉ — ne pas modifier manuellement.
// Pour régénérer : node scripts/generate-catalog.js

export const catalog = ${JSON.stringify(allItems, null, 2)};
`;

writeFileSync(join(root, 'src/data/catalog.js'), '\ufeff' + output, 'utf8');
console.log(`✅ catalog.js généré : ${recipes.length} recettes + ${techItems.length} pages technologie`);