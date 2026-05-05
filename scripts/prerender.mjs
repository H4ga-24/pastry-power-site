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

// --- Main loop ---
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

    const page = template
      // 1. Inject recipe title
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)} | Pastry Power</title>`)
      // 2. Inject meta description + canonical + JSON-LD just before </head>
      .replace('</head>', [
        `  <meta name="description" content="${description.replace(/"/g, '&quot;')}">`,
        `  <link rel="canonical" href="${canonical}">`,
        `  <script type="application/ld+json">${jsonLd}</script>`,
        '</head>',
      ].join('\n'))
      // 3. Inject recipe HTML inside #root (React will replace it on load)
      .replace('<div id="root"></div>', `<div id="root">${bodyHTML}</div>`)

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
