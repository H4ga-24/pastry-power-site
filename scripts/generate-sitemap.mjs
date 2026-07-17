// scripts/generate-sitemap.mjs
// Génère public/sitemap.xml à partir de src/data/catalog.js + des pages fixes du site.
//
// UTILISATION (depuis la racine du projet) :
//   node scripts/generate-sitemap.mjs
//
// À relancer à chaque fois que vous ajoutez/supprimez une recette,
// idéalement juste après avoir relancé generate-catalog.mjs.

import { writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = resolve(__dirname, '..')
const SITE = 'https://pastrypower.fr'
const today = new Date().toISOString().slice(0, 10)

console.log('⚙️  Génération du sitemap…')

const { catalog } = await import(pathToFileURL(join(root, 'src/data/catalog.js')))

// --- Catégories principales (fixes) ---
const CATEGORIES = [
  { slug: 'patisserie',   priority: '0.8' },
  { slug: 'technologie',  priority: '0.8' },
  { slug: 'confiserie',   priority: '0.8' },
  { slug: 'chocolaterie', priority: '0.8' },
  { slug: 'cuisine',      priority: '0.8' },
  { slug: 'alternative',  priority: '0.8' },
]

// --- Sous-catégories (fixes, car les slugs ne correspondent pas 1:1 aux tags du catalog) ---
const SUBCATEGORIES = [
  'patisserie/biscuit', 'patisserie/pate', 'patisserie/creme', 'patisserie/glacage',
  'patisserie/mousse', 'patisserie/insert', 'patisserie/cremeux', 'patisserie/petit-four',
  'patisserie/voyage', 'patisserie/cake-sale', 'patisserie/choux', 'patisserie/tarte',
  'patisserie/entremets', 'patisserie/regional',
  'technologie/farine', 'technologie/sucre', 'technologie/gras', 'technologie/oeuf',
  'technologie/gelifiant', 'technologie/levure', 'technologie/tech-chocolat',
  'confiserie/macaron', 'confiserie/confiserie-diverse',
  'cuisine/traiteur', 'cuisine/sauce',
  'alternative/sans-gluten', 'alternative/sans-sucre', 'alternative/vegetal',
]

// --- Pages légales / info (fixes) ---
const LEGAL_PAGES = ['a-propos', 'mentions-legales', 'politique-confidentialite', 'contact']

const url = (loc, priority, changefreq = 'weekly') =>
  `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`

const lines = []
lines.push('<?xml version="1.0" encoding="UTF-8"?>')
lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
lines.push('')
lines.push('  <!-- Page principale -->')
lines.push(url(`${SITE}/`, '1.0'))
lines.push('')
lines.push('  <!-- Catégories -->')
for (const c of CATEGORIES) lines.push(url(`${SITE}/${c.slug}`, c.priority))
lines.push('')
lines.push('  <!-- Sous-catégories -->')
for (const s of SUBCATEGORIES) lines.push(url(`${SITE}/${s}`, '0.7'))
lines.push('')
lines.push('  <!-- Pages légales -->')
for (const p of LEGAL_PAGES) lines.push(url(`${SITE}/${p}`, '0.3', 'monthly'))
lines.push('')
lines.push('  <!-- Recettes (non-VIP) -->')

let count = 0
for (const entry of catalog) {
  if (entry.isVip) continue // les recettes VIP ne sont pas indexées (paywall)
  lines.push(url(`${SITE}/recipe/${entry.id}`, '0.6'))
  count++
}

lines.push('')
lines.push('</urlset>')
lines.push('')

writeFileSync(join(root, 'public/sitemap.xml'), lines.join('\n'), 'utf-8')
console.log(`✅ sitemap.xml généré : ${count} recettes + ${CATEGORIES.length} catégories + ${SUBCATEGORIES.length} sous-catégories + ${LEGAL_PAGES.length} pages légales.`)
