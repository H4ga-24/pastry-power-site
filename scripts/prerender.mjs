/**
 * Prérendu statique — lancé APRÈS `vite build` (voir "build" dans package.json).
 *
 * Pour chaque page publique du site, écrit un fichier dist/<chemin>/index.html qui contient
 * le vrai contenu en HTML (lisible sans JavaScript par Google / AdSense), avec ses propres
 * balises : <title>, description, URL canonique, Open Graph et données structurées.
 * React démarre ensuite normalement et remplace ce contenu par l'application (createRoot).
 *
 * Ce script génère aussi :
 *   - dist/sitemap.xml  (uniquement les pages réellement générées et indexables)
 *   - dist/404.html     (vraie page 404 : Vercel la sert avec le code HTTP 404)
 *   - dist/spa.html     (coquille de l'application pour les pages privées : connexion, VIP, forum)
 *
 * Toute erreur fait échouer le build : Vercel garde alors la version en ligne précédente.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { createServer } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITE = 'https://pastrypower.fr'
// Auteur affiché dans les données structurées : la marque (le nom du créateur reste sur la page « Qui suis-je ? »).
const AUTHOR = { name: 'Pastry Power', url: `${SITE}/a-propos` }
const TODAY = new Date().toISOString().slice(0, 10)

// Mêmes seuils que le paywall de l'application (src/components/RecipeLayout.jsx)
const PREVIEW_STEPS = 2
const PREVIEW_INGREDIENTS = 5

console.log('⚙️  Prérendu démarré…')

const load = (rel) => import(pathToFileURL(join(ROOT, rel)))
const { catalog } = await load('src/data/catalog.js')
const hubs = await load('src/data/hubs.js')
const { recipeNotes } = await load('src/data/recipeNotes.js')
const {
  HUBS, HUB_ORDER, getHubItems, getSectionItems, getVisibleSections, isHubMode, itemUrl,
  getRelatedItems, getBreadcrumb, getFeaturedItems,
} = hubs

// Coquille HTML produite par Vite (avant toute injection)
const template = readFileSync(join(DIST, 'index.html'), 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  console.error('✗ dist/index.html a déjà été prérendu : lance `npm run build` (et pas ce script seul).')
  process.exit(1)
}

// Rendu serveur des pages écrites en composants React (technologie, pages légales, tableaux)
const vite = await createServer({
  root: ROOT,
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  // react-helmet-async est publié en CommonJS : on le fait passer par Vite pour l'importer proprement.
  ssr: { noExternal: ['react-helmet-async'] },
})
const { renderComponent } = await vite.ssrLoadModule('/scripts/ssr-render.jsx')

const sitemap = []   // { loc, priority, changefreq }
const written = []   // chemins générés (contrôle final)
let errors = 0

// ───────────────────────────── Helpers ─────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const clean = (str) => String(str ?? '').replace(/\s+/g, ' ').trim()
const absolute = (url) => (url && url.startsWith('/') ? `${SITE}${url}` : url || '')
const plural = (n, word) => `${n} ${word}${n > 1 ? 's' : ''}`

function truncate(str, max = 158) {
  const text = clean(str)
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : cut.length)}…`
}

function isoDuration(value) {
  if (!value) return undefined
  const upper = String(value).toUpperCase()
  const h = upper.match(/(\d+)\s*H/)
  const m = upper.match(/(\d+)\s*MIN/)
  const hours = h ? parseInt(h[1], 10) : 0
  const minutes = m ? parseInt(m[1], 10) : 0
  if (!hours && !minutes) return undefined
  return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}`
}

// Seules les données « Recipe » sont réémises par l'application (RecipeLayout) : elles portent data-rh
// pour être remplacées sans doublon. Les autres restent en place après le démarrage de React.
const jsonLd = (data) =>
  `  <script type="application/ld+json"${data['@type'] === 'Recipe' ? ' data-rh="true"' : ''}>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function breadcrumbLd(crumbs, current) {
  const items = [{ title: 'Accueil', path: '/' }, ...crumbs, ...(current ? [current] : [])]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.title, item: `${SITE}${c.path === '/' ? '/' : c.path}`,
    })),
  }
}

const breadcrumbHTML = (crumbs) =>
  `<nav aria-label="Fil d'Ariane"><a href="/">Accueil</a>${crumbs.map((c) => ` › <a href="${c.path}">${esc(c.title)}</a>`).join('')}</nav>`

// En-tête et pied de page statiques, présents sur chaque page générée
const HEADER_HTML = `<header>
  <a href="/"><strong>Pastry Power</strong></a>
  <nav aria-label="Rubriques"><ul>
      ${HUB_ORDER.map((id) => `<li><a href="/${id}">${esc(HUBS[id].title)}</a></li>`).join('\n      ')}
    </ul></nav>
</header>`

const FOOTER_HTML = `<footer>
  <nav aria-label="Pied de page"><ul>
      <li><a href="/patisserie">Toutes les Recettes</a></li>
      <li><a href="/technologie">Technologie Culinaire</a></li>
      <li><a href="/a-propos">Qui suis-je ?</a></li>
      <li><a href="/mentions-legales">Mentions Légales</a></li>
      <li><a href="/politique-confidentialite">Politique de Confidentialité</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul></nav>
  <p>Suivre Pastry Power : <a href="https://www.tiktok.com/@pastrypower_" rel="noopener">TikTok</a> · <a href="https://www.instagram.com/_pastrypower" rel="noopener">Instagram</a> · <a href="https://www.youtube.com/@PastryPowerr" rel="noopener">YouTube</a> · <a href="https://www.dailymotion.com/pastrypower" rel="noopener">Dailymotion</a></p>
  <p>&copy; ${new Date().getFullYear()} Pastry Power. Tous droits réservés. Fait avec passion en Normandie.</p>
</footer>`

/**
 * Assemble une page : balises <head> (marquées data-rh pour que React Helmet les reprenne
 * à son compte au démarrage, sans doublon) + contenu statique dans #root.
 */
function buildPage({ title, desc, path, bodyHTML, extraHead = [], noindex = false, image, type = 'website', chrome = true }) {
  const url = `${SITE}${path === '/' ? '/' : path}`
  const head = [
    desc ? `  <meta name="description" content="${esc(truncate(desc, 300))}" data-rh="true">` : '',
    noindex
      ? '  <meta name="robots" content="noindex, follow" data-rh="true">'
      : `  <link rel="canonical" href="${url}" data-rh="true">`,
    '  <meta property="og:site_name" content="Pastry Power" data-rh="true">',
    '  <meta property="og:locale" content="fr_FR" data-rh="true">',
    `  <meta property="og:type" content="${type}" data-rh="true">`,
    `  <meta property="og:title" content="${esc(title)}" data-rh="true">`,
    desc ? `  <meta property="og:description" content="${esc(truncate(desc, 300))}" data-rh="true">` : '',
    noindex ? '' : `  <meta property="og:url" content="${url}" data-rh="true">`,
    image ? `  <meta property="og:image" content="${esc(absolute(image))}" data-rh="true">` : '',
    ...extraHead,
    '</head>',
  ].filter(Boolean).join('\n')

  const body = chrome
    ? `<div class="pp-static">${HEADER_HTML}\n${bodyHTML}\n${FOOTER_HTML}</div>`
    : bodyHTML

  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace('</head>', head)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
}

function writePage(path, html, { indexable = true, priority = '0.6', changefreq = 'monthly' } = {}) {
  const outDir = path === '/' ? DIST : join(DIST, ...path.split('/').filter(Boolean))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
  written.push(path)
  if (indexable) sitemap.push({ loc: `${SITE}${path === '/' ? '/' : path}`, priority, changefreq })
}

/**
 * Transforme le HTML d'un composant React (plein de <div> et de classes de style) en HTML
 * sémantique simple : titres, paragraphes, listes, tableaux, liens, images.
 */
const KEEP = new Set(['h1', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'strong', 'em', 'b', 'i', 'a', 'img', 'blockquote', 'br'])
const BLOCKS = new Set(['div', 'section', 'article', 'header', 'footer', 'main', 'aside', 'figure', 'figcaption', 'span', 'label'])

function simplify(html) {
  let out = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|svg|button|noscript|input|select|textarea)\b[\s\S]*?<\/\1>/gi, '')
    .replace(/<(input|hr)\b[^>]*>/gi, '')
    .replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, (match, closing, rawTag, attrs) => {
      const tag = rawTag.toLowerCase()
      if (!KEEP.has(tag)) return BLOCKS.has(tag) ? ' ' : ''
      if (closing) return `</${tag}>`
      if (tag === 'a') {
        const href = attrs.match(/\bhref="([^"]*)"/)
        return href ? `<a href="${href[1]}">` : '<a>'
      }
      if (tag === 'img') {
        const src = attrs.match(/\bsrc="([^"]*)"/)
        const alt = attrs.match(/\balt="([^"]*)"/)
        return src ? `<img src="${src[1]}" alt="${alt ? alt[1] : ''}" loading="lazy">` : ''
      }
      if (tag === 'br') return '<br>'
      return `<${tag}>`
    })
    .replace(/[ \t\r\n]+/g, ' ')
    .replace(/<(p|h[1-4]|li|td|th|strong|em|b|i|a|blockquote)>\s*<\/\1>/g, '')
    .replace(/<(ul|ol)>\s*<\/\1>/g, '')

  // Texte « nu » (hors balise de bloc) → paragraphe, pour garder un HTML propre et lisible.
  const blockTag = /<\/?(?:h[1-4]|p|ul|ol|li|table|thead|tbody|tr|th|td|blockquote)>|<img[^>]*>/g
  let result = ''
  let depth = 0
  let last = 0
  let m
  const flush = (text) => {
    const t = text.trim()
    if (!t) return ''
    return depth === 0 ? `<p>${t}</p>\n` : text
  }
  while ((m = blockTag.exec(out)) !== null) {
    result += flush(out.slice(last, m.index))
    const token = m[0]
    if (token.startsWith('<img')) {
      result += depth === 0 ? `<p>${token}</p>\n` : token
    } else {
      if (token.startsWith('</')) { depth = Math.max(0, depth - 1); result += token + (depth === 0 ? '\n' : '') }
      else { result += token; depth += 1 }
    }
    last = m.index + token.length
  }
  result += flush(out.slice(last))
  return result.replace(/<p>\s*<\/p>\n?/g, '').trim()
}

/**
 * Aperçu d'une fiche VIP écrite en composant : ses deux premières parties si elle est découpée
 * en chapitres (<h2>), sinon sa présentation et son sommaire — jamais le contenu complet.
 */
function previewOf(html, { title, description, image }) {
  let index = -1
  let chapters = 0
  for (let i = 0; i < 3; i += 1) {
    index = html.indexOf('<h2>', index + 1)
    if (index === -1) break
    chapters += 1
  }
  if (chapters === 3) return html.slice(0, index)

  const headings = [...html.matchAll(/<h[2-4]>([\s\S]*?)<\/h[2-4]>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(Boolean)
    .slice(0, 12)
  return [
    `<h1>${esc(title)}</h1>`,
    description ? `<p>${esc(clean(description))}</p>` : '',
    image ? `<p><img src="${esc(image)}" alt="${esc(title)}"></p>` : '',
    headings.length ? `<h2>Au programme de cette fiche</h2>\n<ul>\n${headings.map((h) => `  <li>${h}</li>`).join('\n')}\n</ul>` : '',
  ].filter(Boolean).join('\n')
}

const VIP_NOTE = (what) =>
  `<p class="pp-paywall"><strong>Fiche réservée aux membres VIP.</strong> ${what} <a href="/vip">Découvrir le Club VIP</a> · <a href="/login">Se connecter</a></p>`

function relatedHTML(id, title) {
  const items = getRelatedItems(id, 6)
  if (!items.length) return ''
  return `<h2>${esc(title)}</h2>\n<ul>\n${items
    .map((item) => `  <li><a href="${itemUrl(item)}">${esc(item.title)}</a>${item.description ? ` — ${esc(truncate(item.description, 140))}` : ''}</li>`)
    .join('\n')}\n</ul>`
}

const itemLine = (item) =>
  `<li><a href="${itemUrl(item)}">${esc(item.title)}</a>${item.isVip ? ' <em>(VIP)</em>' : ''}${item.description ? ` — ${esc(clean(item.description))}` : ''}</li>`

// ───────────────────────────── Recettes ─────────────────────────────

function recipeBodyHTML(recipe, entry, locked) {
  const crumbs = getBreadcrumb(entry)
  const image = recipe.image || entry.image
  const ingredients = recipe.ingredients || []
  const steps = recipe.steps || []
  const shownIngredients = locked ? ingredients.slice(0, PREVIEW_INGREDIENTS) : ingredients
  const shownSteps = locked ? steps.slice(0, PREVIEW_STEPS) : steps

  const facts = [
    recipe.prepTime && `<strong>Préparation :</strong> ${esc(recipe.prepTime)}`,
    recipe.cookTime && `<strong>Cuisson :</strong> ${esc(recipe.cookTime)}`,
    recipe.restTime && `<strong>Repos :</strong> ${esc(recipe.restTime)}`,
    recipe.difficulty && `<strong>Difficulté :</strong> ${esc(recipe.difficulty)}`,
    recipe.baseServings > 1 && `<strong>Pour :</strong> ${esc(plural(recipe.baseServings, 'portion'))}`,
  ].filter(Boolean).join(' · ')

  const ingredientsHTML = shownIngredients
    .map((ing) => {
      const qty = ing.amount ? `${esc(ing.amount)}${ing.unit ? ` ${esc(ing.unit)}` : ''}` : ''
      return `  <li>${qty ? `<strong>${qty}</strong> ` : ''}${esc(ing.name)}${ing.note ? ` <em>(${esc(ing.note)})</em>` : ''}</li>`
    })
    .join('\n')

  const stepsHTML = shownSteps
    .map((step, i) => `  <li><strong>${esc(step.title || `Étape ${i + 1}`)}</strong> — ${esc(step.text || String(step))}</li>`)
    .join('\n')

  const advicesRaw = recipe.advices ?? recipe.advice ?? []
  const advices = (Array.isArray(advicesRaw) ? advicesRaw : [advicesRaw]).filter(Boolean)
  const notes = recipeNotes[entry.id]

  const parts = [
    breadcrumbHTML(crumbs),
    `<h1>${esc(recipe.title || entry.title)}</h1>`,
    recipe.description ? `<p>${esc(clean(recipe.description))}</p>` : '',
    image ? `<p><img src="${esc(image)}" alt="${esc(recipe.title || entry.title)}"></p>` : '',
    facts ? `<p>${facts}</p>` : '',
    ingredientsHTML ? `<h2>Ingrédients</h2>\n<ul>\n${ingredientsHTML}\n</ul>` : '',
    !locked && recipe.equipment?.length ? `<h2>Matériel</h2>\n<ul>\n${recipe.equipment.map((e) => `  <li>${esc(e)}</li>`).join('\n')}\n</ul>` : '',
    stepsHTML ? `<h2>Préparation</h2>\n<ol>\n${stepsHTML}\n</ol>` : '',
  ]

  if (locked) {
    const moreIng = ingredients.length - PREVIEW_INGREDIENTS
    const moreSteps = steps.length - PREVIEW_STEPS
    const more = [
      moreIng > 0 && `${moreIng} autre${moreIng > 1 ? 's' : ''} ingrédient${moreIng > 1 ? 's' : ''}`,
      moreSteps > 0 && `${moreSteps} autre${moreSteps > 1 ? 's' : ''} étape${moreSteps > 1 ? 's' : ''}`,
      'les conseils du chef',
    ].filter(Boolean).join(', ')
    parts.push(VIP_NOTE(`La suite de cette recette (${more}) est accessible aux membres.`))
  } else {
    if (advices.length) parts.push(`<h2>Conseils du Chef</h2>\n<ul>\n${advices.map((a) => `  <li>${esc(String(a))}</li>`).join('\n')}\n</ul>`)
    if (recipe.chefQuote) parts.push(`<blockquote>${esc(recipe.chefQuote)}</blockquote>`)
    if (notes) {
      parts.push([
        '<h2>Bon à savoir</h2>',
        notes.usage ? `<h3>À quoi ça sert</h3>\n<p>${esc(notes.usage)}</p>` : '',
        notes.erreurs?.length ? `<h3>Les erreurs fréquentes</h3>\n<ul>\n${notes.erreurs.map((e) => `  <li>${esc(e)}</li>`).join('\n')}\n</ul>` : '',
        notes.conservation ? `<h3>Conservation</h3>\n<p>${esc(notes.conservation)}</p>` : '',
      ].filter(Boolean).join('\n'))
    }
  }

  parts.push(relatedHTML(entry.id, 'Dans la même famille'))
  return `<article>\n${parts.filter(Boolean).join('\n')}\n</article>`
}

function recipeLd(recipe, entry, locked) {
  const image = absolute(recipe.image || entry.image)
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title || entry.title,
    description: clean(recipe.description || entry.description),
    ...(image ? { image: [image] } : {}),
    author: { '@type': 'Organization', name: AUTHOR.name, url: SITE },
    publisher: { '@type': 'Organization', name: 'Pastry Power', url: SITE },
    url: `${SITE}/recipe/${entry.id}`,
    recipeCategory: entry.subCategory?.[0] || entry.category,
    recipeCuisine: 'Française',
    keywords: [entry.category, ...(entry.subCategory || []), 'pâtisserie', 'recette'].filter(Boolean).join(', '),
  }
  if (locked) return { ...base, isAccessibleForFree: false }
  return {
    ...base,
    ...(isoDuration(recipe.prepTime) ? { prepTime: isoDuration(recipe.prepTime) } : {}),
    ...(isoDuration(recipe.cookTime) ? { cookTime: isoDuration(recipe.cookTime) } : {}),
    ...(recipe.baseServings > 1 ? { recipeYield: plural(recipe.baseServings, 'portion') } : {}),
    recipeIngredient: (recipe.ingredients || []).map((ing) => clean(`${ing.amount || ''} ${ing.unit || ''} ${ing.name}`)),
    recipeInstructions: (recipe.steps || []).map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: String(step.title || `Étape ${i + 1}`),
      text: String(step.text || step),
    })),
  }
}

// ───────────────────────────── 1. Coquille SPA + 404 ─────────────────────────────

// Coquille de l'application pour les pages privées (connexion, VIP, forum) — voir vercel.json.
writeFileSync(
  join(DIST, 'spa.html'),
  template.replace('</head>', '  <meta name="robots" content="noindex, follow">\n</head>'),
  'utf-8',
)

writeFileSync(
  join(DIST, '404.html'),
  buildPage({
    title: 'Page introuvable | Pastry Power',
    desc: "Cette page n'existe pas ou a été déplacée.",
    path: '/404',
    noindex: true,
    bodyHTML: `<main>
<h1>Page introuvable</h1>
<p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
<p><a href="/">Retour à l'accueil</a> · <a href="/patisserie">Toutes les recettes</a> · <a href="/technologie">Technologie</a></p>
</main>`,
  }),
  'utf-8',
)
console.log('  ✓ spa.html et 404.html générés')

// ───────────────────────────── 2. Accueil ─────────────────────────────

{
  const recipeCount = catalog.filter((e) => !e.isTech).length
  const techItems = catalog.filter((e) => e.isTech)
  const title = 'Pastry Power | Recettes de pâtisserie professionnelles et technologie'
  const desc = `Plus de ${Math.floor(recipeCount / 10) * 10} fiches recettes de pâtisserie, confiserie et chocolaterie, et des cours de technologie sur les ingrédients. Grammages précis, étapes détaillées, conseils de chef.`

  const hubsHTML = HUB_ORDER
    .map((id) => {
      const hub = HUBS[id]
      const count = getHubItems(id).length
      return `<li><a href="/${id}">${esc(hub.title)}</a> (${plural(count, 'fiche')}) — ${esc(hub.intro || hub.description)}</li>`
    })
    .join('\n')

  const featuredHTML = getFeaturedItems(12)
    .map((item) => `<li><a href="${itemUrl(item)}">${item.image ? `<img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy"> ` : ''}${esc(item.title)}</a> — ${esc(clean(item.description))}</li>`)
    .join('\n')

  const bodyHTML = `<main>
<h1>Pastry Power — recettes de pâtisserie professionnelles et technologie</h1>
<p>Pastry Power réunit ${recipeCount} recettes rédigées comme des fiches techniques de laboratoire : grammages au gramme près, étapes dans l'ordre, températures de cuisson et conseils de chef. À côté des recettes, ${techItems.length} fiches de technologie expliquent le rôle de chaque ingrédient — farine, sucre, œuf, beurre, gélifiants, levures, chocolat — pour comprendre pourquoi une recette réussit ou échoue.</p>
<p>Pastry Power, c'est aussi plus de 160 000 passionnés sur TikTok. <a href="/a-propos">Découvrir le projet</a>.</p>
<h2>Les rubriques</h2>
<ul>
${hubsHTML}
</ul>
<h2>Fiches à découvrir</h2>
<ul>
${featuredHTML}
</ul>
<h2>Comprendre les ingrédients</h2>
<ul>
${techItems.map(itemLine).join('\n')}
</ul>
<h2>La boutique</h2>
<ul>
<li><a href="https://alex24.podia.com/carnet-recette" rel="noopener">L'Art de la Pâtisserie</a> — le carnet complet : plus de 100 recettes et fiches techniques.</li>
<li><a href="https://alex24.podia.com/carnet-boulangerie" rel="noopener">Secrets de Boulangerie</a> — plus de 60 recettes pour maîtriser le pain et la viennoiserie.</li>
<li><a href="/vip">Club VIP</a> — des recettes exclusives et des fiches inédites chaque mois.</li>
</ul>
</main>`

  writePage('/', buildPage({
    title, desc, path: '/', bodyHTML,
    extraHead: [jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Pastry Power',
      url: `${SITE}/`,
      inLanguage: 'fr-FR',
      publisher: { '@type': 'Organization', name: 'Pastry Power', url: SITE},
    })],
  }), { priority: '1.0', changefreq: 'weekly' })
  console.log('  ✓ Accueil généré')
}

// ───────────────────────────── 3. Rubriques et sous-rubriques ─────────────────────────────

function listPage({ hubId, section }) {
  const hub = HUBS[hubId]
  const items = section ? getSectionItems(hubId, section.id) : getHubItems(hubId)
  const visibleSections = getVisibleSections(hubId)
  const hubMode = isHubMode(hubId)
  const name = section ? section.title : hub.title
  const intro = section ? (section.intro || section.desc) : (hub.intro || hub.description)
  const path = section ? `/${hubId}/${section.id}` : `/${hubId}`
  // Une rubrique sans vraies sous-rubriques n'a qu'une seule URL : /rubrique.
  const canonicalPath = section && !hubMode ? `/${hubId}` : path
  const kind = hub.isTech ? 'fiche de technologie' : 'recette'
  const kindPlural = hub.isTech ? 'fiches de technologie' : 'recettes'
  const label = `${items.length} ${items.length > 1 ? kindPlural : kind}`

  let listHTML
  if (!section && hubMode) {
    // Rubrique : un bloc par sous-rubrique, avec toutes ses fiches (chaque fiche est liée depuis sa rubrique)
    const listed = new Set()
    const blocks = visibleSections.map((s) => {
      const sectionItems = getSectionItems(hubId, s.id)
      sectionItems.forEach((i) => listed.add(i.id))
      return `<h2><a href="${s.path}">${esc(s.title)}</a> (${sectionItems.length})</h2>\n${s.intro ? `<p>${esc(s.intro)}</p>\n` : ''}<ul>\n${sectionItems.map(itemLine).join('\n')}\n</ul>`
    })
    const rest = items.filter((i) => !listed.has(i.id))
    if (rest.length) blocks.push(`<h2>Autres fiches</h2>\n<ul>\n${rest.map(itemLine).join('\n')}\n</ul>`)
    listHTML = blocks.join('\n')
  } else {
    listHTML = `<ul>\n${items.map(itemLine).join('\n')}\n</ul>`
  }

  const crumbs = section ? [{ title: hub.title, path: `/${hubId}` }] : []
  const bodyHTML = `<main>
${breadcrumbHTML(crumbs)}
<h1>${esc(name)}${section ? ` — ${esc(hub.title)}` : ''} : ${label}</h1>
<p>${esc(intro)}</p>
${listHTML}
</main>`

  const title = `${name} : ${label} | Pastry Power`
  const desc = `${intro} ${label[0].toUpperCase()}${label.slice(1)} avec ingrédients, étapes détaillées et conseils de chef.`
  const indexable = canonicalPath === path
  const html = buildPage({
    title, desc, path: canonicalPath, bodyHTML,
    extraHead: [jsonLd(breadcrumbLd(crumbs, { title: name, path: canonicalPath }))],
  })
  writePage(path, html, { indexable, priority: section ? '0.7' : '0.8', changefreq: 'weekly' })
}

for (const hubId of HUB_ORDER) {
  if (getHubItems(hubId).length === 0) continue
  listPage({ hubId })
  const sections = getVisibleSections(hubId).filter((s) => !s.external)
  for (const section of sections) listPage({ hubId, section })
  console.log(`  ✓ /${hubId} : ${getHubItems(hubId).length} fiches, ${sections.length} sous-rubrique(s)`)
}

// ───────────────────────────── 4. Pages d'information ─────────────────────────────

const INFO_PAGES = [
  {
    path: '/a-propos', file: 'src/pages/AboutPage.jsx',
    title: 'Qui suis-je ? | Pastry Power',
    desc: `Le créateur de Pastry Power : plus de 160 000 passionnés sur TikTok et un site de fiches techniques pour comprendre la pâtisserie, pas seulement la reproduire.`,
    minWords: 120,
  },
  { path: '/mentions-legales', file: 'src/pages/LegalPage.jsx', minWords: 250 },
  { path: '/politique-confidentialite', file: 'src/pages/PrivacyPage.jsx', minWords: 250 },
  { path: '/contact', file: 'src/pages/ContactPage.jsx', minWords: 15 },
]

for (const page of INFO_PAGES) {
  try {
    const mod = await vite.ssrLoadModule(`/${page.file}`)
    const rendered = renderComponent(mod.default, page.path)
    const content = simplify(rendered.html)
    const words = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
    if (words < page.minWords) throw new Error(`contenu trop court (${words} mots)`)
    const title = page.title || rendered.title
    const desc = page.desc || rendered.description
    if (!title || !desc) throw new Error('titre ou description manquant')
    writePage(page.path, buildPage({ title, desc, path: page.path, bodyHTML: `<main>\n${content}\n</main>` }), { priority: '0.3' })
    console.log(`  ✓ ${page.path} (${words} mots)`)
  } catch (err) {
    console.error(`  ✗ ${page.path} : ${err.message}`)
    errors += 1
  }
}

// ───────────────────────────── 5. Fiches (recettes + technologie) ─────────────────────────────

let recipesDone = 0
let techDone = 0
let previews = 0

for (const entry of catalog) {
  const isComponent = entry.isTech || entry.moduleFile?.endsWith('.jsx')
  const path = itemUrl(entry)
  const locked = Boolean(entry.isVip)

  try {
    if (!isComponent) {
      // Recette décrite par un objet de données
      const mod = await load(`src/data/recipes/${entry.moduleFile}`)
      const recipe = mod.recipeData ?? mod.default ?? null
      if (!recipe || typeof recipe !== 'object') throw new Error('export inattendu')

      const title = String(recipe.title || entry.title || entry.id)
      const html = buildPage({
        title: `${title} - Pastry Power`,
        desc: recipe.description || entry.description,
        path,
        type: 'article',
        image: recipe.image || entry.image,
        bodyHTML: recipeBodyHTML(recipe, entry, locked),
        extraHead: [
          jsonLd(recipeLd(recipe, entry, locked)),
          jsonLd(breadcrumbLd(getBreadcrumb(entry), { title, path })),
        ],
      })
      writePage(path, html, { priority: locked ? '0.4' : '0.6' })
      recipesDone += 1
    } else {
      // Fiche écrite en composant React (technologie, tableaux de proportions) → rendu serveur
      const dir = entry.isTech ? 'src/pages/technologie' : 'src/data/recipes'
      const mod = await vite.ssrLoadModule(`/${dir}/${entry.moduleFile}`)
      const rendered = renderComponent(mod.default, path)
      const full = simplify(rendered.html)
      const data = mod.recipeData || {}
      const title = String(data.title || entry.title)
      const content = locked
        ? previewOf(full, { title, description: data.description || entry.description, image: data.image || entry.image })
        : full
      const words = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
      if (words < (locked ? 25 : 150)) throw new Error(`contenu trop court (${words} mots)`)
      const desc = rendered.description || data.description || entry.description
      const crumbs = getBreadcrumb(entry)
      const bodyHTML = `<article>
${breadcrumbHTML(crumbs)}
${content}
${locked ? VIP_NOTE(entry.isTech ? 'La suite de ce cours de technologie est accessible aux membres.' : 'La suite de cette fiche est accessible aux membres.') : ''}
${relatedHTML(entry.id, entry.isTech ? 'Autres fiches de technologie' : 'Dans la même famille')}
</article>`

      const html = buildPage({
        title: entry.isTech ? `${title} : fiche de technologie | Pastry Power` : `${title} - Pastry Power`,
        desc,
        path,
        type: 'article',
        image: data.image || entry.image,
        bodyHTML,
        extraHead: [
          jsonLd({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: clean(desc),
            ...(absolute(data.image || entry.image) ? { image: [absolute(data.image || entry.image)] } : {}),
            author: { '@type': 'Organization', name: AUTHOR.name, url: SITE },
            publisher: { '@type': 'Organization', name: 'Pastry Power', url: SITE },
            mainEntityOfPage: `${SITE}${path}`,
            inLanguage: 'fr-FR',
            ...(locked ? { isAccessibleForFree: false } : {}),
          }),
          jsonLd(breadcrumbLd(crumbs, { title, path })),
        ],
      })
      writePage(path, html, { priority: locked ? '0.4' : '0.7' })
      if (entry.isTech) techDone += 1
      else recipesDone += 1
    }
    if (locked) previews += 1
  } catch (err) {
    console.error(`  ✗ ${entry.id} : ${err.message}`)
    errors += 1
  }
}

await vite.close()

// ───────────────────────────── 6. Sitemap + contrôle final ─────────────────────────────

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`
writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml, 'utf-8')

// Chaque page doit avoir son propre titre et sa propre URL canonique.
const seenTitles = new Map()
for (const path of written) {
  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, ...path.split('/').filter(Boolean), 'index.html')
  const html = readFileSync(file, 'utf-8')
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1]
  if (seenTitles.has(title)) {
    console.error(`  ✗ Titre en double : « ${title} » (${seenTitles.get(title)} et ${path})`)
    errors += 1
  }
  seenTitles.set(title, path)
}

console.log(`\n${errors ? '❌' : '✅'} Prérendu terminé : ${written.length} pages (${recipesDone} recettes, ${techDone} fiches technologie, dont ${previews} aperçus VIP), ${sitemap.length} URL dans le sitemap, ${errors} erreur(s).`)

if (errors > 0) {
  console.error('Build interrompu : corrige les erreurs ci-dessus (la version en ligne n\'est pas remplacée).')
  process.exit(1)
}
process.exit(0)
