import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChefHat, ArrowRight, Lock, Crown } from 'lucide-react';

// --- 1. CONFIGURATION DES HUBS ---
const HUBS = {
  'patisserie': {
    title: "Pâtisserie",
    description: "L'excellence technique au service de la gourmandise.",
    image: "https://images.unsplash.com/photo-1694449053032-c48fd40fce89?q=80&w=1555&auto=format&fit=crop",
    sections: [
      { title: "Biscuits", id: "biscuit", image: "https://images.unsplash.com/photo-1691442563474-df78f0cf8f46?q=80&w=1470&auto=format&fit=crop", desc: "Les bases éponges..." },
      { title: "Pâtes", id: "pate", image: "https://plus.unsplash.com/premium_photo-1722693808030-ff33914c4107?q=80&w=1470&auto=format&fit=crop", desc: "Sablée, Feuilletée..." },
      { title: "Crèmes", id: "creme", image: "https://i.postimg.cc/gjp7FQ9F/Valrhona-com-Lexique-Recette-Mousse.webp", desc: "Pâtissière, Anglaise..." },
      { title: "Glaçages", id: "glacage", image: "https://plus.unsplash.com/premium_photo-1722686589246-f0969c3d72c4?q=80&w=789&auto=format&fit=crop", desc: "Miroir, Rocher..." },
      { title: "Mousses", id: "mousse", image: "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?q=80&w=764&auto=format&fit=crop", desc: "Légèreté aérienne..." },
      { title: "Inserts", id: "insert", image: "https://i.postimg.cc/qq54Jppt/1-2373cfc6-fe5a-47b3-9b5e-7ba55b6162d1.png", desc: "Cœurs fruités..." },
      { title: "Crémeux", id: "cremeux", image: "https://plus.unsplash.com/premium_photo-1701210418103-4a912af9398f?q=80&w=1470&auto=format&fit=crop", desc: "Onctuosité..." },
      { title: "Petits Fours Secs", id: "petit-four", image: "https://plus.unsplash.com/premium_photo-1726072366210-8e83c3406c4b?q=80&w=687&auto=format&fit=crop", desc: "Sablés..." },
      { title: "Gâteaux de Voyage", id: "voyage", image: "https://images.unsplash.com/photo-1662793295930-15702b7a1f37?q=80&w=735&auto=format&fit=crop", desc: "Cakes, Madeleines..." },
      { title: "Cakes Salés", id: "cake-sale", image: "https://i.postimg.cc/rFQP3ffy/cake-sale-facon-flammenkuch-le-moulin-1704.png", desc: "Traiteur..." },
      { title: "Pâte à Choux", id: "choux", image: "https://images.unsplash.com/photo-1761637604739-790197a32073?q=80&w=811&auto=format&fit=crop", desc: "Éclairs, Choux..." },
      { title: "Tartes", id: "tarte", image: "https://i.postimg.cc/FK2qG1Dy/tarte-choco-passion04-1200x900.jpg", desc: "Fonds croquants..." },
      { title: "Entremets", id: "entremets", image: "https://images.unsplash.com/photo-1541779859250-7c67d623e4da?q=60&w=800&auto=format&fit=crop", desc: "Montages..." },
      { title: "Desserts Régionaux", id: "regional", image: "https://images.unsplash.com/photo-1631978931011-a033b99bce1e?q=80&w=687&auto=format&fit=crop", desc: "Traditions..." }
    ]
  },
  'alternative': {
    title: "Alternative & Bien-être",
    description: "La pâtisserie adaptée à tous les régimes : sans gluten, IG bas, végétal...",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000",
    sections: [
      { title: "Sans Gluten", id: "sans-gluten", image: "https://plus.unsplash.com/premium_photo-1700399458190-eb33043ae7b2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Farines de riz, maïs, sarrasin..." },
      { title: "Sans Sucre / IG Bas", id: "sans-sucre", image: "https://images.unsplash.com/photo-1655169947079-5b2a38815147?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Miel, Agave, Coco, Édulcorants." },
      { title: "Végétal / Végan", id: "vegan", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1000", desc: "Sans produits animaux." },
      { title: "Sans Lactose", id: "sans-lactose", image: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=1000", desc: "Laits végétaux et huiles." }
    ]
  },
  'technologie': {
    title: "Technologie",
    description: "La science des ingrédients et des réactions.",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=2000",
    sections: [
      { title: "Farines", id: "farine", image: "https://images.unsplash.com/photo-1545587195-a625d872ca82?q=80&w=687&auto=format&fit=crop", desc: "Blés et gluten." },
      { title: "Sucres", id: "sucre", image: "https://plus.unsplash.com/premium_photo-1744312220263-a93627dc6801?q=80&w=687&auto=format&fit=crop", desc: "Saccharose et sirops." },
      { title: "Corps Gras", id: "gras", image: "https://images.unsplash.com/photo-1652282556241-0ce13285d00f?q=80&w=687&auto=format&fit=crop", desc: "Beurre et huiles." },
      { title: "Gélifiants", id: "gelifiant", image: "https://i.postimg.cc/fL8dDSps/Gelatine-halal-trempee-jpg.webp", desc: "Gélatine, Pectine..." },
      { title: "Œufs", id: "oeuf", image: "https://images.unsplash.com/photo-1737099950756-9869b0383ba7?q=80&w=687&auto=format&fit=crop", desc: "Structure et émulsion." },
      { title: "Levures", id: "levure", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop", desc: "Fermentations et poudres." },
      { title: "Chocolat", id: "tech-chocolat", image: "https://plus.unsplash.com/premium_photo-1723568493016-5e5cdc069ff3?q=80&w=702&auto=format&fit=crop", desc: "Cristallisation et tempérage." }
    ]
  },
  'confiserie': {
    title: "Confiserie",
    description: "Le travail du sucre et du chocolat.",
    image: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?q=80&w=2000",
    sections: [
      { title: "Macarons", id: "macaron", image: "https://images.unsplash.com/photo-1702034519504-b7cf62c36413?q=80&w=880&auto=format&fit=crop", desc: "Coques et ganaches." },
      { title: "Autres Confiseries", id: "confiserie-diverse", image: "https://plus.unsplash.com/premium_photo-1674819643863-7c9e5fe09297?q=80&w=687&auto=format&fit=crop", desc: "Caramels, pâtes de fruits." }
    ]
  },
  'cuisine': {
    title: "Cuisine",
    description: "L'univers salé et traiteur.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000",
    sections: [
      { title: "Traiteur", id: "traiteur", image: "https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?q=80&w=687&auto=format&fit=crop", desc: "Pièces cocktails." },
      { title: "Sauces", id: "sauce", image: "https://images.unsplash.com/photo-1563599175592-c58dc214deff?q=80&w=1470&auto=format&fit=crop", desc: "Bases salées." },
      { title: "Cakes Salés", id: "cake-sale", image: "https://images.unsplash.com/photo-1584796101179-52cfea2e6f52?q=80&w=1374&auto=format&fit=crop", desc: "Traiteur..." }
    ]
  }
};

const SEARCH_MAPPING = {
  'chocolaterie': 'chocolat', 
  'petit-four': 'petit', 
  'regional': 'regional',
  'cake-sale': 'cake-sale', 
  'choux': 'choux', 
  'macaron': 'macaron', 
  'confiserie-diverse': 'confiserie',
  'tech-chocolat': 'chocolat',
  'oeuf': 'oeuf',
  'levure': 'levure',
  'gras': 'corps gras',
  'sauce': 'sauce',
  'sans-gluten': 'gluten',
  'vegan': 'vegan',
  'sans-lactose': 'lactose'
};

// --- 2. LE SCANNER HYBRIDE ---
const modules = import.meta.glob(['./recipes/**/*.jsx', './technologie/**/*.jsx'], { 
  eager: true 
});

const rawModules = import.meta.glob(['./recipes/**/*.jsx', './technologie/**/*.jsx'], { 
  eager: true,
  query: '?raw',
  import: 'default'
});

const cleanText = (text) => {
  if (!text) return "";
  return String(text).replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\/g, "");
};

const allItems = Object.keys(modules).map((path) => {
  const module = modules[path];
  const rawCode = rawModules[path];
  const fileName = path.split('/').pop().replace('.jsx', '');
  const lowerPath = path.toLowerCase();
  
  // A. ESSAI AVEC LES DONNÉES EXPORTÉES
  if (module.recipeData) {
      const data = module.recipeData;
      return {
          id: fileName,
          title: data.title,
          category: data.category || "AUTRE",
          image: data.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
          description: data.description || "Découvrez cette recette...",
          isTech: path.includes('/technologie/'),
          isVip: data.isVip || false
      };
  }

  // B. FALLBACK AVEC REGEX
  const lowerContent = rawCode.toLowerCase();
  
  // ✅ SÉCURITÉ : La même regex robuste
  const extractString = (key, source) => {
      const match = source.match(new RegExp(`${key}:\\s*(["'])((?:\\\\.|[^\\\\])*?)\\1`));
      return match ? cleanText(match[2]) : null;
  };

  let title = extractString('title', rawCode);
  if (!title) {
    const h1Match = rawCode.match(/<h1[^>]*>([^<]+)<\/h1>/);
    title = h1Match ? h1Match[1] : fileName.replace(/^vip-/i, '').replace(/([A-Z])/g, ' $1').trim();
  }

  if (!title) return null;

  let category = extractString('category', rawCode);
  let image = extractString('image', rawCode);
  let description = extractString('description', rawCode);
  
  let isVip = fileName.startsWith('vip-') || fileName.startsWith('VIP-');
  const vipMatch = rawCode.match(/(?:isVip|vip):\s*true/);
  if (vipMatch) isVip = true;

  if (!category) {
      if (lowerPath.includes('gluten') || title.toLowerCase().includes('gluten')) category = "SANS-GLUTEN";
      else if (!path.includes('technologie') && (lowerPath.includes('sans-sucre') || lowerPath.includes('ig-bas'))) category = "SANS-SUCRE";
      else if (lowerPath.includes('vegan') || lowerPath.includes('vegetal')) category = "VEGAN";
      else if (lowerPath.includes('lactose')) category = "SANS-LACTOSE";
      else if (lowerPath.includes('choux') || lowerPath.includes('eclair') || lowerPath.includes('religieuse') || lowerPath.includes('paris-brest') || lowerPath.includes('croquembouche')) {
          category = "CHOUX";
      }
      else if (lowerPath.includes('regional') || lowerPath.includes('kouign') || lowerPath.includes('breton') || lowerPath.includes('basque') || lowerPath.includes('cannele') || lowerPath.includes('clafoutis') || lowerPath.includes('flan')) {
          category = "REGIONAL";
      }
      else if (lowerPath.includes('cake') && (lowerPath.includes('sale') || lowerContent.includes('poivre') || lowerContent.includes('jambon') || lowerContent.includes('olive') || lowerContent.includes('lardon') || lowerContent.includes('thon'))) {
          category = "CAKE-SALE";
      }
      else if (lowerPath.includes('sauce')) category = "SAUCE";
      else if (lowerPath.includes('chocolat')) category = "CHOCOLATERIE";
      else if (lowerPath.includes('macaron')) category = "MACARON";
      else if (lowerPath.includes('techno')) category = "TECHNOLOGIE";
      else category = "AUTRE";
  }

  return {
    id: fileName,
    title: title.replace(/^vip-/i, '').replace(/^VIP-/i, ''),
    category: category.toUpperCase(),
    image: image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    description: description || "Découvrez cette recette...",
    isTech: path.includes('/technologie/'),
    isVip: isVip
  };
}).filter(Boolean);


// --- 3. LE COMPOSANT D'AFFICHAGE ---
const PatisseriePage = ({ category: propCategory }) => {
  const params = useParams();
  const urlParam = params.category || params.subcategory || params.id;
  const activeCategory = propCategory || urlParam || 'patisserie';

  useEffect(() => { window.scrollTo(0, 0); }, [activeCategory]);

  const activeHub = HUBS[activeCategory];
  const normalize = (str) => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
  
  // A. MODE HUB
  if (activeHub) {
    return (
      <div className="min-h-screen bg-[#121212] text-white pt-24 px-6 pb-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{activeHub.title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">{activeHub.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeHub.sections.map((sub) => (
              <Link key={sub.id} to={`/${activeCategory}/${sub.id}`} className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-500">
                <div className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  {sub.image ? (
                    <img src={sub.image} alt={sub.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <ChefHat className="text-gray-700" size={48} />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-[#D4AF37] transition-colors">{sub.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{sub.desc}</p>
                  <div className="flex items-center text-[#D4AF37] text-xs font-bold uppercase gap-2">
                    Explorer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // B. MODE LISTE
  const urlCategory = activeCategory || "";
  let searchTerm;
  
  if (urlCategory === 'cake-sale') searchTerm = 'cake-sale';
  else if (urlCategory === 'choux') searchTerm = 'choux';
  else if (urlCategory === 'regional') searchTerm = 'regional';
  else if (urlCategory === 'sans-gluten') searchTerm = 'gluten'; 
  else if (urlCategory === 'sans-sucre') searchTerm = ''; 
  else if (urlCategory === 'vegan') searchTerm = 'vegan'; 
  else if (urlCategory === 'sans-lactose') searchTerm = 'lactose'; 
  else searchTerm = SEARCH_MAPPING[urlCategory] || urlCategory;
  
  const normalizedSearch = normalize(searchTerm);
  const techHub = HUBS['technologie'];
  const isTechSection = techHub && techHub.sections ? techHub.sections.some(s => s.id === urlCategory) : false;

  const filteredItems = allItems.filter(item => {
    const itemCat = normalize(item.category);
    const itemTitle = normalize(item.title);
    const itemId = normalize(item.id);

    // 🔥 LE CERVEAU : Cette fonction cherche le mot-clé dans la catégorie, le titre ET le nom du fichier.
    const matches = (...words) => words.some(w => itemCat.includes(w) || itemTitle.includes(w) || itemId.includes(w));

    if (isTechSection) return item.isTech && matches(normalizedSearch);

    // 🧠 CLASSIFICATION INTELLIGENTE (Peu importe ce qui est écrit dans le fichier)
    switch (urlCategory) {
      case 'choux':
        return matches('choux', 'eclair', 'religieuse', 'parisbrest', 'paris-brest', 'croquembouche', 'salambo', 'profiterole', 'chouquette', 'beignet', 'gougere');
      
      case 'regional':
        return matches('regional', 'basque', 'breton', 'kouign', 'cannele', 'clafoutis', 'far', 'teurgoule', 'tatin', 'alsacien', 'savoie');
      
      case 'cake-sale':
        // Tous les cakes, SAUF les sucrés
        return matches('cake-sale', 'cakesale') || (matches('cake') && matches('anchois', 'artichaut', 'asperge', 'boudin', 'cheddar', 'chevre', 'foie', 'jambon', 'lapin', 'lard', 'poivron', 'poulet', 'ratatouille', 'roquefort', 'saumon', 'thon', 'tomate', 'fromage', 'pdt', 'sale'));
      
      case 'petit-four':
        return matches('petit-four', 'petits fours', 'sable', 'cookie', 'financier', 'tuile', 'cigarette', 'langue', 'craquant', 'friand', 'amarretti', 'speculoos', 'baton', 'rocher', 'galette', 'diamant', 'spitz');
      
      case 'voyage':
        // Tous les gâteaux de voyage (en excluant les ingrédients salés)
        return matches('voyage', 'cake', 'madeleine', 'paindepice', 'pain-d-epice', 'brownie', 'marbre', 'moelleux') && !matches('anchois', 'artichaut', 'asperge', 'boudin', 'cheddar', 'chevre', 'foie', 'jambon', 'lapin', 'lard', 'poivron', 'poulet', 'ratatouille', 'roquefort', 'saumon', 'thon', 'tomate', 'fromage', 'pdt');
      
      case 'biscuit':
        return matches('biscuit', 'dacquoise', 'genoise', 'joconde', 'paindegene', 'sponge', 'cuillere', 'meringue');
      
      case 'tarte':
        return matches('tarte', 'flan', 'bourdaloue');
      
      case 'entremets':
        return matches('entremets', 'bavarois', 'foretnoire', 'sainthonore', 'saint-honore', 'arlequin', 'mille-feuille', 'millefeuille');
      
      case 'cremeux':
        return matches('cremeux');
      
      case 'mousse':
        return matches('mousse');
      
      case 'insert':
        return matches('insert', 'compotee', 'caramelbeurresale', 'blancmanger');
      
      case 'creme':
        return matches('creme', 'patissiere', 'anglaise', 'diplomate', 'mousseline', 'chiboust', 'frangipane', 'bavaroise', 'chantilly', 'mascarpone');
      
      case 'glacage':
        return matches('glacage');
      
      case 'pate':
        return matches('pate', 'feuilletage', 'crumble', 'streusel', 'brioche', 'focaccia', 'pizza', 'craquelin');
      
      case 'chocolaterie':
        return matches('chocolat', 'bonbon', 'truffe', 'rocher', 'tablette', 'gianduja', 'praline');
      
      case 'confiserie-diverse':
        return matches('confiserie', 'caramel', 'pate-de-fruit', 'patedefruit', 'pateamande', 'nougat', 'orangette', 'fondant', 'isomalt');
      
      case 'sauce':
        return matches('sauce', 'mayonnaise', 'appareil');
      
      case 'traiteur':
        return matches('traiteur', 'gougere', 'focaccia', 'pain');
        
      case 'sans-gluten':
        return matches('gluten');
        
      case 'sans-sucre':
        return matches('sans-sucre', 'ig-bas', 'igbas');
        
      case 'vegan':
        return matches('vegan', 'vegetal');
        
      case 'sans-lactose':
        return matches('lactose');
        
      case 'macaron':
        return matches('macaron') && !matches('cachemire'); // Évite le "biscuit macaron" dans la confiserie

      default:
        // Si la catégorie n'est pas listée au-dessus, on fait une recherche classique
        return !item.isTech && matches(normalizedSearch);
    }
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Link to="/patisserie" className="text-gray-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">← Retour à la bibliothèque</Link>
          <h1 className="text-5xl font-serif mb-4 capitalize">{activeCategory.replace(/-/g, ' ')}</h1>
          <p className="text-gray-400">{filteredItems.length} fiche(s) trouvée(s)</p>
        </div>
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <Link 
                key={item.id} 
                to={`/recipe/${item.id}`}
                className="bg-[#1a1a1a] rounded-xl border border-white/10 p-8 hover:border-[#D4AF37] transition-all group relative"
              >
                
                {/* Badge VIP */}
                {item.isVip && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg shadow-black/40">
                    <Crown size={12} fill="black" /> VIP
                  </div>
                )}

                <div className="h-48 bg-gray-900 rounded-lg mb-6 overflow-hidden">
                  {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />}
                </div>
                <div className="text-[#D4AF37] text-xs font-bold uppercase mb-2">{item.category}</div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#1a1a1a] rounded-xl border border-white/5">
            <p className="text-gray-500 text-xl font-serif">Aucune fiche disponible dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatisseriePage;