// Configuration des rubriques (hubs) et de leurs sous-rubriques.
// Source unique utilisée par : PatisseriePage, Navigation, App (pubs) et scripts/prerender.mjs.
// ⚠️ Fichier JS pur (pas de JSX, pas d'API navigateur) : il est aussi importé par Node au build.

import { catalog } from './catalog.js';

export const SITE_URL = 'https://pastrypower.fr';

export const HUBS = {
  patisserie: {
    title: 'Pâtisserie',
    catalogCategory: 'Pâtisserie',
    description: "L'excellence technique au service de la gourmandise.",
    intro:
      "Toutes les bases et les classiques de la pâtisserie française, présentés comme des fiches techniques de laboratoire : grammages précis, étapes dans l'ordre, températures et points de contrôle. Biscuits, pâtes, crèmes, mousses, inserts, glaçages, puis les montages complets (tartes, choux, entremets, gâteaux de voyage).",
    image: 'https://images.unsplash.com/photo-1694449053032-c48fd40fce89?q=60&w=1200&auto=format&fit=crop',
    sections: [
      { title: 'Biscuits',           id: 'biscuit',    image: 'https://images.unsplash.com/photo-1691442563474-df78f0cf8f46?q=60&w=600&auto=format&fit=crop',       desc: 'Les bases éponges...',     intro: "Génoise, joconde, dacquoise, biscuit cuillère : les fonds et biscuits qui portent un entremets ou un roulé." },
      { title: 'Pâtes',              id: 'pate',       image: 'https://plus.unsplash.com/premium_photo-1722693808030-ff33914c4107?q=60&w=600&auto=format&fit=crop', desc: 'Sablée, Feuilletée...',    intro: "Pâte sucrée, sablée, brisée, feuilletée, levée : les pâtes de base, avec le bon ordre d'incorporation et les temps de repos." },
      { title: 'Crèmes',             id: 'creme',      image: 'https://plus.unsplash.com/premium_photo-1664474573144-4375bd16e13c?q=60&w=600&auto=format&fit=crop', desc: 'Pâtissière, Anglaise...',  intro: "Pâtissière, anglaise, mousseline, diplomate, chantilly : les crèmes de base et leurs dérivées, avec les températures de cuisson." },
      { title: 'Glaçages',           id: 'glacage',    image: 'https://plus.unsplash.com/premium_photo-1722686589246-f0969c3d72c4?q=60&w=600&auto=format&fit=crop', desc: 'Miroir, Rocher...',        intro: "Glaçages miroir, rocher et nappages : les finitions d'entremets et leurs températures d'utilisation." },
      { title: 'Mousses',            id: 'mousse',     image: 'https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?q=60&w=600&auto=format&fit=crop',  desc: 'Légèreté aérienne...',     intro: "Mousses au chocolat, aux fruits, bavaroises : les appareils foisonnés qui donnent le volume d'un entremets." },
      { title: 'Inserts',            id: 'insert',     image: '/images/recipes/insert-caramel-fleur-de-sel.png',                                                    desc: 'Cœurs coulants, gélifiés...', intro: "Compotées, gélifiés, crèmes brûlées et croustillants : les cœurs que l'on glisse au centre d'un entremets." },
      { title: 'Crémeux',            id: 'cremeux',    image: 'https://plus.unsplash.com/premium_photo-1701210418103-4a912af9398f?q=60&w=600&auto=format&fit=crop', desc: 'Onctuosité...',            intro: "Crémeux au chocolat, aux fruits, au caramel : des textures fondantes à base de crème anglaise ou de purée de fruits." },
      { title: 'Petits Fours Secs',  id: 'petit-four', image: 'https://plus.unsplash.com/premium_photo-1726072366210-8e83c3406c4b?q=60&w=600&auto=format&fit=crop', desc: 'Sablés...',                intro: "Sablés, tuiles, financiers, cigarettes : les petites pièces sèches qui accompagnent le café." },
      { title: 'Gâteaux de Voyage',  id: 'voyage',     image: 'https://images.unsplash.com/photo-1662793295930-15702b7a1f37?q=60&w=600&auto=format&fit=crop',       desc: 'Cakes, Madeleines...',     intro: "Cakes, madeleines, marbrés, pains d'épices : des gâteaux qui se conservent et se transportent sans froid." },
      { title: 'Cakes Salés',        id: 'cake-sale',  image: 'https://images.unsplash.com/photo-1584796101179-52cfea2e6f52?q=60&w=600&auto=format&fit=crop',       desc: 'Traiteur...',              intro: "Une même base d'appareil à cake, déclinée en version salée pour l'apéritif, le buffet ou le traiteur." },
      { title: 'Pâte à Choux',       id: 'choux',      image: 'https://images.unsplash.com/photo-1761637604739-790197a32073?q=60&w=600&auto=format&fit=crop',       desc: 'Éclairs, Choux...',        intro: "Éclairs, religieuses, paris-brest, chouquettes : tout ce qui part d'une pâte à choux bien desséchée." },
      { title: 'Tartes',             id: 'tarte',      image: 'https://plus.unsplash.com/premium_photo-1664472613567-2176b50ddb28?q=60&w=600&auto=format&fit=crop', desc: 'Fonds croquants...',       intro: "Tartes aux fruits, au chocolat, au citron : fonds de pâte, garnitures et cuissons." },
      { title: 'Entremets',          id: 'entremets',  image: 'https://images.unsplash.com/photo-1541779859250-7c67d623e4da?q=60&w=800&auto=format&fit=crop',       desc: 'Montages...',              intro: "Les montages complets : biscuit, insert, mousse et glaçage, avec l'ordre de fabrication et les temps de prise." },
      { title: 'Desserts Régionaux', id: 'regional',   image: 'https://images.unsplash.com/photo-1631978931011-a033b99bce1e?q=60&w=600&auto=format&fit=crop',       desc: 'Traditions...',            intro: "Kouign-amann, far breton, gâteau basque, cannelés : les spécialités des régions françaises." },
    ],
  },
  alternative: {
    title: 'Alternative & Bien-être',
    catalogCategory: 'Alternative',
    description: 'La pâtisserie adaptée à tous les régimes.',
    intro: "Des recettes pensées pour les régimes particuliers, sans renoncer à la technique : sans gluten, sans lactose, moins sucrées ou végétales.",
    sections: [
      { title: 'Sans Gluten',         id: 'sans-gluten',  image: 'https://plus.unsplash.com/premium_photo-1700399458190-eb33043ae7b2?q=60&w=600&auto=format&fit=crop', desc: 'Farines de riz, maïs, sarrasin...', intro: 'Des recettes sans farine de blé, à base de riz, de maïs, de sarrasin ou de poudres de fruits secs.' },
      { title: 'Sans Sucre / IG Bas', id: 'sans-sucre',   image: 'https://images.unsplash.com/photo-1655169947079-5b2a38815147?q=60&w=600&auto=format&fit=crop',       desc: 'Miel, Agave, Coco, Édulcorants.' },
      { title: 'Végétal / Végan',     id: 'vegan',        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=60&w=600',                            desc: 'Sans produits animaux.' },
      { title: 'Sans Lactose',        id: 'sans-lactose', image: 'https://images.unsplash.com/photo-1600788907416-456578634209?q=60&w=600',                            desc: 'Laits végétaux et huiles.' },
    ],
  },
  technologie: {
    title: 'Technologie',
    isTech: true,
    description: 'La science des ingrédients et des réactions.',
    intro:
      "Comprendre avant de reproduire : chaque fiche de technologie explique un ingrédient de base (farine, sucre, œuf, beurre, gélifiants, levures, chocolat), sa composition, son rôle dans une recette et les erreurs qu'il provoque quand il est mal utilisé. C'est le programme de technologie du CAP pâtissier, expliqué simplement.",
    sections: [
      { title: 'Farines',    id: 'farine',        image: 'https://images.unsplash.com/photo-1545587195-a625d872ca82?q=60&w=600&auto=format&fit=crop',             desc: 'Blés et gluten.',               intro: 'Composition du blé, types de farines (T45 à T150), gluten, fécules et amidons.' },
      { title: 'Sucres',     id: 'sucre',         image: 'https://plus.unsplash.com/premium_photo-1744312220263-a93627dc6801?q=60&w=600&auto=format&fit=crop',  desc: 'Saccharose et sirops.',         intro: 'Saccharose, sucres dérivés, sirops, isomalt et fondant : pouvoir sucrant, cuisson et cristallisation.' },
      { title: 'Corps Gras', id: 'gras',          image: 'https://images.unsplash.com/photo-1652282556241-0ce13285d00f?q=60&w=600&auto=format&fit=crop',        desc: 'Beurre, crème et huiles.',      intro: 'Beurre, crème, huiles et beurre de cacao : points de fusion, émulsions et rôle dans les textures.' },
      { title: 'Gélifiants', id: 'gelifiant',     image: 'https://plus.unsplash.com/premium_photo-1674819643863-7c9e5fe09297?q=60&w=600&auto=format&fit=crop', desc: 'Gélatine, Pectine...',          intro: 'Gélatine, agar-agar et pectines : dosages, températures de prise et usages.' },
      { title: 'Œufs',       id: 'oeuf',          image: 'https://images.unsplash.com/photo-1737099950756-9869b0383ba7?q=60&w=600&auto=format&fit=crop',        desc: 'Structure et émulsion.',        intro: "L'œuf entier, le blanc et le jaune : coagulation, foisonnement et pouvoir émulsifiant." },
      { title: 'Levures',    id: 'levure',        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=60&w=600&auto=format&fit=crop',        desc: 'Fermentations et poudres.',     intro: 'Levure boulangère et levure chimique : fermentation, poudres levantes et conditions d’activation.' },
      { title: 'Chocolat',   id: 'tech-chocolat', image: 'https://plus.unsplash.com/premium_photo-1723568493016-5e5cdc069ff3?q=60&w=600&auto=format&fit=crop', desc: 'Cristallisation et tempérage.', intro: 'Chocolats de couverture et cacao en poudre : composition, tempérage et cristallisation.' },
    ],
  },
  confiserie: {
    title: 'Confiserie',
    catalogCategory: 'Confiserie',
    description: 'Le travail du sucre et du chocolat.',
    intro: 'Macarons, caramels, pâtes de fruits, guimauves et nougats : la cuisson du sucre au degré près.',
    sections: [
      { title: 'Macarons',           id: 'macaron',            image: 'https://images.unsplash.com/photo-1702034519504-b7cf62c36413?q=60&w=600&auto=format&fit=crop',       desc: 'Coques et ganaches.',        intro: 'Coques, ganaches et garnitures de macarons, avec les points de contrôle du macaronage et de la cuisson.' },
      { title: 'Autres Confiseries', id: 'confiserie-diverse', image: 'https://plus.unsplash.com/premium_photo-1674819643863-7c9e5fe09297?q=60&w=600&auto=format&fit=crop', desc: 'Caramels, pâtes de fruits.', intro: 'Caramels, pâtes de fruits, guimauves, nougats et fruits confits.' },
    ],
  },
  cuisine: {
    title: 'Cuisine',
    catalogCategory: 'Cuisine',
    description: "L'univers salé et traiteur.",
    intro: 'Les bases salées utiles en laboratoire et en traiteur : sauces, appareils et cakes salés.',
    sections: [
      { title: 'Traiteur',    id: 'traiteur',  image: 'https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?q=60&w=600&auto=format&fit=crop', desc: 'Pièces cocktails.' },
      { title: 'Sauces',      id: 'sauce',     image: 'https://images.unsplash.com/photo-1563599175592-c58dc214deff?q=60&w=600&auto=format&fit=crop', desc: 'Bases salées.', intro: 'Sauces froides et chaudes : émulsions, liaisons et assaisonnements.' },
      // Même contenu que /patisserie/cake-sale : on pointe vers cette URL unique (pas de page en double).
      { title: 'Cakes Salés', id: 'cake-sale', image: '/images/cake-sale.jpg', desc: 'Cakes Salés...', path: '/patisserie/cake-sale' },
    ],
  },
  chocolaterie: {
    title: 'Chocolaterie',
    catalogCategory: 'Chocolaterie',
    description: "L'art du tempérage, des ganaches et des moulages.",
    intro: 'Bonbons moulés, truffes, ganaches et moulages : le travail du chocolat de couverture, du tempérage à la finition.',
    sections: [],
  },
};

export const HUB_ORDER = ['patisserie', 'technologie', 'confiserie', 'chocolaterie', 'cuisine', 'alternative'];

export const URL_TO_SUBCATEGORY = {
  'biscuit':            'Biscuits',
  'pate':               'Pâtes',
  'creme':              'Crèmes',
  'glacage':            'Glaçages',
  'mousse':             'Mousses',
  'insert':             'Inserts',
  'cremeux':            'Crémeux',
  'petit-four':         'Petits Fours Secs',
  'voyage':             'Gâteaux de Voyage',
  'cake-sale':          'Cakes Salés',
  'choux':              'Pâte à Choux',
  'tarte':              'Tartes',
  'entremets':          'Entremets',
  'regional':           'Desserts Régionaux',
  'sans-gluten':        'Sans Gluten',
  'sans-sucre':         'Sans Sucre / IG Bas',
  'vegan':              'Végétal / Végan',
  'sans-lactose':       'Sans Lactose',
  'macaron':            'Macarons',
  'confiserie-diverse': 'Autres Confiseries',
  'traiteur':           'Traiteur',
  'sauce':              'Sauces',
};

// Mots-clés cherchés dans la catégorie ou l'identifiant des fiches technologie.
export const TECH_MAPPING = {
  'farine':        ['farine'],
  'sucre':         ['sucre'],
  'gras':          ['gras', 'creme'],
  'gelifiant':     ['gelifiant'],
  'oeuf':          ['oeuf'],
  'levure':        ['levure'],
  'tech-chocolat': ['chocolat'],
  'chocolat':      ['chocolat'], // ancienne URL
};

export const normalize = (str) =>
  str ? str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') : '';

export const itemUrl = (item) => (item.isTech ? `/techno/${item.id}` : `/recipe/${item.id}`);

export const findEntry = (id) => {
  const wanted = String(id || '').toLowerCase();
  return catalog.find((item) => item.id.toLowerCase() === wanted) || null;
};

/** Toutes les fiches d'une rubrique. */
export function getHubItems(hubId) {
  const hub = HUBS[hubId];
  if (!hub) return [];
  if (hub.isTech) return catalog.filter((item) => item.isTech);
  return catalog.filter((item) => !item.isTech && normalize(item.category) === normalize(hub.catalogCategory || hubId));
}

/** Les fiches d'une sous-rubrique (même logique qu'avant, centralisée ici). */
export function getSectionItems(hubId, sectionId) {
  const hub = HUBS[hubId];
  if (!hub || !sectionId) return [];
  if (hub.isTech) {
    const keywords = (TECH_MAPPING[sectionId] || [sectionId]).map(normalize);
    return catalog.filter(
      (item) => item.isTech && keywords.some((k) => normalize(item.category).includes(k) || normalize(item.id).includes(k)),
    );
  }
  const label = URL_TO_SUBCATEGORY[sectionId];
  if (!label) return [];
  return catalog.filter((item) => !item.isTech && item.subCategory?.includes(label));
}

/** Sous-rubriques qui contiennent au moins une fiche (les vides ne sont jamais affichées). */
export function getVisibleSections(hubId) {
  const hub = HUBS[hubId];
  if (!hub) return [];
  return (hub.sections || [])
    .map((section) => ({
      ...section,
      path: section.path || `/${hubId}/${section.id}`,
      external: Boolean(section.path),
      count: getSectionItems(hubId, section.id).length,
    }))
    .filter((section) => section.count > 0);
}

/** Une rubrique s'affiche en « cartes de sous-rubriques » seulement si elle en a au moins deux non vides. */
export const isHubMode = (hubId) => getVisibleSections(hubId).length >= 2;

/** Vrai si /hub/section mène à une page avec du contenu. */
export function sectionHasItems(path) {
  const [, hubId, sectionId] = String(path || '').split('/');
  if (!HUBS[hubId]) return false;
  if (!sectionId) return getHubItems(hubId).length > 0;
  return getSectionItems(hubId, sectionId).length > 0;
}

/** URL canonique d'une page de rubrique / sous-rubrique. */
export function canonicalListPath(hubId, sectionId) {
  if (!sectionId) return `/${hubId}`;
  if (sectionId === 'chocolat' && hubId === 'technologie') return '/technologie/tech-chocolat';
  const section = (HUBS[hubId]?.sections || []).find((s) => s.id === sectionId);
  if (section?.path) return section.path;
  return isHubMode(hubId) ? `/${hubId}/${sectionId}` : `/${hubId}`;
}

/**
 * Pages où une publicité peut s'afficher : uniquement du contenu éditorial public et non vide.
 * (Jamais sur une fiche VIP verrouillée, une 404, le forum, la connexion ou les pages légales.)
 */
export function isAdEligiblePath(pathname) {
  const parts = String(pathname || '/').replace(/\/+$/, '').split('/').filter(Boolean);
  if (parts.length === 0) return true;
  const [first, second, third] = parts;
  if (third) return false;
  if (first === 'recipe' || first === 'techno') {
    const entry = findEntry(second);
    return Boolean(entry) && !entry.isVip && Boolean(entry.isTech) === (first === 'techno');
  }
  if (!HUBS[first]) return false;
  return sectionHasItems(`/${first}${second ? `/${second}` : ''}`);
}

/** Fiches proposées en bas d'une recette : même sous-rubrique, les suivantes dans le catalogue. */
export function getRelatedItems(id, max = 6) {
  const entry = findEntry(id);
  if (!entry) return [];
  let pool;
  if (entry.isTech) {
    pool = catalog.filter((item) => item.isTech);
  } else {
    const label = entry.subCategory?.[0];
    pool = label
      ? catalog.filter((item) => !item.isTech && item.subCategory?.includes(label))
      : [];
    if (pool.length < 4) pool = catalog.filter((item) => !item.isTech && item.category === entry.category);
  }
  const index = pool.findIndex((item) => item.id === entry.id);
  const rotated = [...pool.slice(index + 1), ...pool.slice(0, Math.max(index, 0))];
  // Les fiches en accès libre d'abord : ce sont elles qu'un visiteur peut lire en entier.
  return [...rotated.filter((item) => !item.isVip), ...rotated.filter((item) => item.isVip)].slice(0, max);
}

/** Rubrique + sous-rubrique d'une fiche, pour le fil d'Ariane. */
export function getBreadcrumb(entry) {
  if (!entry) return [];
  if (entry.isTech) {
    const section = getVisibleSections('technologie').find((s) => getSectionItems('technologie', s.id).some((i) => i.id === entry.id));
    return [
      { title: 'Technologie', path: '/technologie' },
      ...(section ? [{ title: section.title, path: section.path }] : []),
    ];
  }
  const hubId = HUB_ORDER.find((id) => !HUBS[id].isTech && normalize(HUBS[id].catalogCategory) === normalize(entry.category));
  if (!hubId) return [];
  const crumbs = [{ title: HUBS[hubId].title, path: `/${hubId}` }];
  if (isHubMode(hubId)) {
    const section = getVisibleSections(hubId).find((s) => !s.external && entry.subCategory?.includes(URL_TO_SUBCATEGORY[s.id]));
    if (section) crumbs.push({ title: section.title, path: section.path });
  }
  return crumbs;
}

const FEATURED_IDS = [
  'creme-patissiere', 'eclair', 'tarte-tatin', 'choux-creme', 'gateau-basque', 'far-breton',
  'madeleine', 'genoise', 'tartelette-citron-meringuee', 'macaron-chocolat', 'religieuse', 'creme-anglaise',
];

/** Fiches mises en avant sur l'accueil : des classiques en accès libre. */
export function getFeaturedItems(max = 8) {
  const picked = FEATURED_IDS.map(findEntry).filter((item) => item && !item.isVip && !item.isTech);
  const others = catalog.filter((item) => !item.isTech && !item.isVip && !picked.includes(item));
  return [...picked, ...others].slice(0, max);
}

/** Fiches de technologie en accès libre, pour l'accueil. */
export function getFeaturedTech(max = 4) {
  return catalog.filter((item) => item.isTech && !item.isVip).slice(0, max);
}

/** Nombre de fiches par rubrique (accueil, textes d'introduction). */
export const countItems = (hubId) => getHubItems(hubId).length;
