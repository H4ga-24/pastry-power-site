/**
 * Post-build prerender script.
 * Run AFTER `vite build`. Generates dist/recipe/{slug}/index.html for each recipe.
 *
 * How it works:
 *   - Recipe data files are plain JS objects → importable directly by Node.js
 *   - React uses createRoot (not hydrateRoot) → it replaces #root content, no hydration check
 *   - So: we inject static HTML into #root at build time; Google reads it, React replaces it at runtime
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITE = 'https://pastrypower.fr'

console.log('⚙️  Prerender démarré…')

// --- Load catalog (plain ES module, no browser deps) ---
const { catalog } = await import(pathToFileURL(join(ROOT, 'src/data/catalog.js')))

// --- Read the Vite-built HTML template ---
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

// --- Helpers ---
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// --- Static footer injected into EVERY prerendered page ---
// (crawler-facing only: React remplace #root au chargement, donc pas besoin de styles)
const FOOTER_HTML = `<footer>
  <nav aria-label="Pied de page"><ul>
      <li><a href="/patisserie">Toutes les Recettes</a></li>
      <li><a href="/technologie">Technologie Culinaire</a></li>
      <li><a href="/a-propos">Qui suis-je ?</a></li>
      <li><a href="/mentions-legales">Mentions Légales</a></li>
      <li><a href="/politique-confidentialite">Politique de Confidentialité</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul></nav>
  <p>&copy; ${new Date().getFullYear()} Pastry Power. Tous droits réservés. Fait avec passion en Normandie.</p>
</footer>`

// Injecte body + footer dans #root, + title/meta/canonical (+ extra head éventuel) dans le template
function renderPage({ title, desc, canonical, bodyHTML, extraHead = [] }) {
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace('</head>', [
      `  <meta name="description" content="${esc(desc)}">`,
      `  <link rel="canonical" href="${canonical}">`,
      ...extraHead,
      '</head>',
    ].join('\n'))
    .replace('<div id="root"></div>', `<div id="root">${bodyHTML}${FOOTER_HTML}</div>`)
}

function buildJsonLd(recipe, entry) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title || entry.title,
    description: recipe.description || entry.description || '',
    image: recipe.image || entry.image || '',
    recipeCategory: entry.category || '',
    recipeYield: recipe.baseServings ? `${recipe.baseServings} portions` : '',
    recipeIngredient: (recipe.ingredients || []).map(ing => {
      const qty = ing.amount ? `${ing.amount}${ing.unit ? ' ' + ing.unit : ''}` : ''
      return qty ? `${qty} ${ing.name}`.trim() : ing.name
    }),
    recipeInstructions: (recipe.steps || []).map((step, i) => ({
      '@type': 'HowToStep',
      name: String(step.title || `Étape ${i + 1}`),
      text: String(step.text || step),
    })),
  })
}

function buildBodyHTML(recipe) {
  const title = esc(recipe.title)
  const desc = esc(recipe.description)

  const ingredientsHTML = (recipe.ingredients || [])
    .map(ing => {
      const qty = ing.amount ? `${esc(ing.amount)}${ing.unit ? ' ' + esc(ing.unit) : ''}` : ''
      return `<li>${qty ? `<strong>${qty}</strong> ` : ''}${esc(ing.name)}</li>`
    })
    .join('\n        ')

  const stepsHTML = (recipe.steps || [])
    .map((step, i) => {
      const t = esc(step.title || `Étape ${i + 1}`)
      const txt = esc(step.text || String(step))
      return `<li><strong>${t}</strong> — ${txt}</li>`
    })
    .join('\n        ')

  const advicesRaw = recipe.advices ?? recipe.advice ?? []
  const advicesList = Array.isArray(advicesRaw) ? advicesRaw : [advicesRaw].filter(Boolean)
  const advicesHTML = advicesList
    .map(a => `<li>${esc(String(a))}</li>`)
    .join('\n        ')

  return `<article>
  <h1>${title}</h1>
  <p>${desc}</p>
  ${ingredientsHTML ? `<h2>Ingrédients</h2><ul>\n        ${ingredientsHTML}\n      </ul>` : ''}
  ${stepsHTML ? `<h2>Préparation</h2><ol>\n        ${stepsHTML}\n      </ol>` : ''}
  ${advicesHTML ? `<h2>Conseils du Chef</h2><ul>\n        ${advicesHTML}\n      </ul>` : ''}
</article>`
}

// --- Category mapping (URL slug → catalog category label) ---
const CATEGORIES = [
  { slug: 'patisserie',   label: 'Pâtisserie',   key: 'Pâtisserie' },
  { slug: 'confiserie',   label: 'Confiserie',   key: 'Confiserie' },
  { slug: 'chocolaterie', label: 'Chocolaterie', key: 'Chocolaterie' },
  { slug: 'cuisine',      label: 'Cuisine',      key: 'Cuisine' },
  { slug: 'alternative',  label: 'Alternative',  key: 'Alternative' },
]

// --- Legal / info pages (statique, pour que Google trouve la privacy policy) ---
const LEGAL_PAGES = [
  {
    slug: 'a-propos',
    title: 'Qui suis-je ? | Pastry Power',
    desc: 'Pastry Power : la référence technique pour les passionnés de pâtisserie, créée avec passion en Normandie.',
    h1: 'Qui suis-je ?',
    body: `<p>Pastry Power est un site de référence dédié à la pâtisserie, la confiserie, la chocolaterie et la technologie culinaire. On y trouve des centaines de fiches techniques détaillées, des recettes professionnelles et des explications sur la chimie des ingrédients.</p>
  <p>Le projet est né d'une passion pour le savoir-faire pâtissier et de l'envie de le rendre accessible. Chaque recette est pensée comme une fiche technique claire : ingrédients, étapes et conseils du chef.</p>`,
  },
  {
    slug: 'mentions-legales',
    title: 'Mentions Légales | Pastry Power',
    desc: 'Mentions légales du site Pastry Power : éditeur, hébergeur et propriété intellectuelle.',
    h1: 'Mentions Légales',
    body: `<p>Les présentes mentions légales précisent l'identité de l'éditeur du site, son hébergeur et les conditions d'utilisation.</p>
  <p>Éditeur du site : Pastry Power. Contact : pastrypower76@gmail.com. L'ensemble du contenu (textes, recettes, images) est protégé par le droit de la propriété intellectuelle et ne peut être reproduit sans autorisation.</p>`,
  },
  {
    slug: 'politique-confidentialite',
    title: 'Politique de Confidentialité | Pastry Power',
    desc: 'Politique de confidentialité de Pastry Power : cookies, cookies publicitaires (Google AdSense), mesure d\'audience et droits RGPD.',
    h1: 'Politique de Confidentialité',
    body: `<p>Cette politique décrit comment Pastry Power traite vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>
  <p>Le site utilise des cookies, dont des cookies de mesure d'audience et des cookies publicitaires (Google AdSense) permettant d'afficher des annonces. Votre consentement est recueilli via notre bandeau de consentement avant tout dépôt de cookie non essentiel, et vous pouvez le modifier ou le retirer à tout moment.</p>
  <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, écrivez à pastrypower76@gmail.com.</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact | Pastry Power',
    desc: 'Contactez Pastry Power : question, remarque ou collaboration.',
    h1: 'Contact',
    body: `<p>Une question, une remarque ou une demande de collaboration ? Écrivez-nous.</p>
  <p>Email : <a href="mailto:pastrypower76@gmail.com">pastrypower76@gmail.com</a>. Retrouvez-nous aussi sur Instagram, YouTube, TikTok et Dailymotion.</p>`,
  },
]

// --- Generate Homepage ---
;(function generateHomepage() {
  const title = 'Pastry Power — Recettes de Pâtisserie Professionnelles'
  const desc = 'Découvrez des centaines de recettes de pâtisserie, confiserie, chocolaterie et cuisine. Fiches techniques détaillées, conseils de chef et savoir-faire professionnel.'
  const canonical = SITE

  const categoryLinks = CATEGORIES
    .map(c => `<li><a href="/${c.slug}">${esc(c.label)}</a></li>`)
    .join('\n      ')

  const bodyHTML = `<main>
  <h1>Pastry Power — Recettes de Pâtisserie &amp; Cuisine</h1>
  <p>${esc(desc)}</p>
  <nav aria-label="Catégories"><ul>
      ${categoryLinks}
    </ul></nav>
</main>`

  const page = renderPage({ title, desc, canonical, bodyHTML })
  writeFileSync(join(DIST, 'index.html'), page, 'utf-8')
  console.log('  ✓ Homepage / générée')
})()

// --- Generate Category Pages ---
for (const cat of CATEGORIES) {
  const recipes = catalog.filter(e => !e.isTech && e.category === cat.key)

  const recipesHTML = recipes
    .map(r => `<li><a href="/recipe/${r.id}">${esc(r.title)}</a>${r.description ? ` — ${esc(r.description.slice(0, 120))}` : ''}</li>`)
    .join('\n      ')

  const bodyHTML = `<main>
  <h1>${esc(cat.label)} — Recettes Pastry Power</h1>
  <p>Retrouvez toutes nos recettes de ${esc(cat.label.toLowerCase())} : fiches techniques détaillées et conseils professionnels.</p>
  <ul>
      ${recipesHTML || '<li>Aucune recette disponible pour le moment.</li>'}
  </ul>
</main>`

  const title = `${cat.label} | Pastry Power`
  const desc = `Toutes nos recettes de ${cat.label.toLowerCase()} : ${recipes.length} fiche${recipes.length !== 1 ? 's' : ''} technique${recipes.length !== 1 ? 's' : ''} avec ingrédients, étapes détaillées et conseils de chef.`
  const canonical = `${SITE}/${cat.slug}`

  const page = renderPage({ title, desc, canonical, bodyHTML })

  const outDir = join(DIST, cat.slug)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), page, 'utf-8')
  console.log(`  ✓ Catégorie /${cat.slug} générée (${recipes.length} recettes)`)
}

// --- Generate Legal / Info Pages ---
for (const p of LEGAL_PAGES) {
  const bodyHTML = `<main>
  <h1>${esc(p.h1)}</h1>
  ${p.body}
</main>`
  const canonical = `${SITE}/${p.slug}`
  const page = renderPage({ title: p.title, desc: p.desc, canonical, bodyHTML })

  const outDir = join(DIST, p.slug)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), page, 'utf-8')
  console.log(`  ✓ Page /${p.slug} générée`)
}

// --- Main loop (recipe pages) ---
let done = 0
let skipped = 0
let errors = 0

for (const entry of catalog) {
  // Skip tech pages and JSX recipe files (React components, not plain data objects)
  if (entry.isTech || entry.moduleFile?.endsWith('.jsx')) { skipped++; continue }

  try {
    const modPath = pathToFileURL(join(ROOT, 'src/data/recipes', entry.moduleFile))
    const mod = await import(modPath)
    const recipe = mod.recipeData ?? mod.default ?? null

    if (!recipe || typeof recipe !== 'object') {
      console.warn(`  ⚠  ${entry.id}: export inattendu, ignoré`)
      skipped++
      continue
    }

    const title = String(recipe.title || entry.title || entry.id)
    const description = String(recipe.description || entry.description || '').replace(/\n/g, ' ').slice(0, 160)
    const canonical = `${SITE}/recipe/${entry.id}`

    const jsonLd = buildJsonLd(recipe, entry)
    const bodyHTML = buildBodyHTML(recipe)

    const page = renderPage({
      title: `${title} | Pastry Power`,
      desc: description,
      canonical,
      bodyHTML,
      extraHead: [`  <script type="application/ld+json">${jsonLd}</script>`],
    })

    const outDir = join(DIST, 'recipe', entry.id)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), page, 'utf-8')
    done++
  } catch (err) {
    console.error(`  ✗ ${entry.id}: ${err.message}`)
    errors++
  }
}

console.log(`✅ Prerender terminé : ${done} pages générées, ${skipped} ignorées, ${errors} erreurs.`)
