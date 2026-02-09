import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChefHat, ArrowRight, Lock } from 'lucide-react';

// --- 1. CONFIGURATION DES HUBS ---
const HUBS = {
  // 'root' est renommé en 'patisserie' pour correspondre à ton App.jsx
  'patisserie': {
    title: "Pâtisserie",
    description: "L'excellence technique au service de la gourmandise.",
    image: "https://images.unsplash.com/photo-1694449053032-c48fd40fce89?q=80&w=1555&auto=format&fit=crop",
    sections: [
      { title: "Biscuits", id: "biscuit", image: "https://images.unsplash.com/photo-1691442563474-df78f0cf8f46?q=80&w=1470&auto=format&fit=crop", desc: "Les bases éponges..." },
      { title: "Pâtes", id: "pate", image: "https://plus.unsplash.com/premium_photo-1722693808030-ff33914c4107?q=80&w=1470&auto=format&fit=crop", desc: "Sablée, Feuilletée..." },
      { title: "Crèmes", id: "creme", image: "https://plus.unsplash.com/premium_photo-1664474573144-4375bd16e13c?q=80&w=688&auto=format&fit=crop", desc: "Pâtissière, Anglaise..." },
      { title: "Glaçages", id: "glacage", image: "https://plus.unsplash.com/premium_photo-1722686589246-f0969c3d72c4?q=80&w=789&auto=format&fit=crop", desc: "Miroir, Rocher..." },
      { title: "Mousses", id: "mousse", image: "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?q=80&w=764&auto=format&fit=crop", desc: "Légèreté aérienne..." },
      { title: "Inserts", id: "insert", image: "https://www.femmeactuelle.fr/imgre/fit/~1~fac~2022~01~13~cbd82aad-1bf5-425d-b9b5-b8b62eb8ef92.jpeg/1200x630/focus-point/1189%2C933/patisserie-comment-faire-un-insert-comme-un-chef.jpg", desc: "Cœurs fruités..." },
      { title: "Crémeux", id: "cremeux", image: "https://plus.unsplash.com/premium_photo-1701210418103-4a912af9398f?q=80&w=1470&auto=format&fit=crop", desc: "Onctuosité..." },
      { title: "Petits Fours Secs", id: "petit-four", image: "https://plus.unsplash.com/premium_photo-1726072366210-8e83c3406c4b?q=80&w=687&auto=format&fit=crop", desc: "Sablés..." },
      { title: "Gâteaux de Voyage", id: "voyage", image: "https://images.unsplash.com/photo-1662793295930-15702b7a1f37?q=80&w=735&auto=format&fit=crop", desc: "Cakes, Madeleines..." },
      { title: "Cakes Salés", id: "cake-sale", image: "https://images.unsplash.com/photo-1584796101179-52cfea2e6f52?q=80&w=1374&auto=format&fit=crop", desc: "Traiteur..." },
      { title: "Pâte à Choux", id: "choux", image: "https://images.unsplash.com/photo-1761637604739-790197a32073?q=80&w=811&auto=format&fit=crop", desc: "Éclairs, Choux..." },
      { title: "Tartes", id: "tarte", image: "https://plus.unsplash.com/premium_photo-1664472613567-2176b50ddb28?q=80&w=880&auto=format&fit=crop", desc: "Fonds croquants..." },
      { title: "Entremets", id: "entremets", image: "https://images.unsplash.com/photo-1660470356446-1d94ec3150c1?q=80&w=687&auto=format&fit=crop", desc: "Montages..." },
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
      { title: "Gélifiants", id: "gelifiant", image: "https://plus.unsplash.com/premium_photo-1674819643863-7c9e5fe09297?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Gélatine, Pectine..." },
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
  'sans-sucre': 'sucre',
  'vegan': 'vegan',
  'sans-lactose': 'lactose'
};

// --- 2. LE SCANNER INTELLIGENT ---
const modules = import.meta.glob(['./recipes/**/*.jsx', './technologie/**/*.jsx'], { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

const allItems = Object.entries(modules).map(([path, rawContent]) => {
  const fileName = path.split('/').pop().replace('.jsx', '');
  const lowerPath = path.toLowerCase();
  const lowerContent = rawContent.toLowerCase();

  let isVip = fileName.startsWith('vip-') || fileName.startsWith('VIP-');
  const vipMatch = rawContent.match(/vip:\s*(true|false)/); 
  if (vipMatch && vipMatch[1] === 'true') isVip = true;

  const secureTitleMatch = rawContent.match(/(?:recipeData|recipeMeta)\s*=\s*\{[\s\S]*?title:\s*(?:"([^"]*)"|'([^']*)')/);
  const catMatch = rawContent.match(/category:\s*(?:"([^"]*)"|'([^']*)')/);
  const imgMatch = rawContent.match(/image:\s*(?:"([^"]*)"|'([^']*)')/);
  const descMatch = rawContent.match(/description:\s*(?:"([^"]*)"|'([^']*)')/);

  let title = secureTitleMatch ? (secureTitleMatch[1] || secureTitleMatch[2]) : null;
  let category = catMatch ? (catMatch[1] || catMatch[2]) : null;
  let image = imgMatch ? (imgMatch[1] || imgMatch[2]) : null;
  let description = descMatch ? (descMatch[1] || descMatch[2]) : "";

  if (!title) {
    const h1Match = rawContent.match(/<h1[^>]*>([^<]+)<\/h1>/);
    title = h1Match ? h1Match[1] : fileName.replace(/^vip-/i, '').replace(/([A-Z])/g, ' $1').trim();
  }
  if (!image) {
    const htmlImgMatch = rawContent.match(/<img[^>]+src=["']([^"']+)["']/);
    if (htmlImgMatch) image = htmlImgMatch[1];
  }

  // FORCEUR DE CATEGORIE
  if (lowerPath.includes('gluten') || (title && title.toLowerCase().includes('gluten'))) {
      category = "SANS-GLUTEN";
  }
  else if (
    !lowerPath.includes('technologie') && (
      lowerPath.includes('sans-sucre') || 
      lowerPath.includes('zero-sucre') || 
      lowerPath.includes('diabete') || 
      lowerPath.includes('ig-bas')
    )
  ) {
      category = "SANS-SUCRE";
  }
  else if (lowerPath.includes('vegan') || lowerPath.includes('vegetal')) {
      category = "VEGAN";
  }
  else if (lowerPath.includes('lactose')) {
      category = "SANS-LACTOSE";
  }
  else if (lowerPath.includes('choux') || lowerPath.includes('eclair') || lowerPath.includes('religieuse') || lowerPath.includes('paris-brest') || lowerPath.includes('croquembouche')) {
      category = "CHOUX";
  }
  else if (lowerPath.includes('regional') || lowerPath.includes('kouign') || lowerPath.includes('breton') || lowerPath.includes('basque') || lowerPath.includes('cannele') || lowerPath.includes('clafoutis') || lowerPath.includes('flan')) {
      category = "REGIONAL";
  }
  else if (lowerPath.includes('cake') && (lowerPath.includes('sale') || lowerContent.includes('poivre') || lowerContent.includes('jambon') || lowerContent.includes('olive') || lowerContent.includes('lardon') || lowerContent.includes('thon'))) {
      category = "CAKE-SALE";
  }
  else if (!category) {
      if (lowerPath.includes('sauce')) category = "SAUCE";
      else if (lowerPath.includes('chocolat')) category = "CHOCOLATERIE";
      else if (lowerPath.includes('macaron')) category = "MACARON";
      else if (lowerPath.includes('techno')) category = "TECHNOLOGIE";
      else if (lowerPath.includes('cake')) category = "GATEAU";
      else category = "AUTRE";
  }

  const cleanTitle = title.replace(/^vip-/i, '').replace(/^VIP-/i, '');
  const isTechFile = path.includes('/technologie/');

  if (title) {
    return {
      id: fileName,
      title: cleanTitle,
      category: category ? category.toUpperCase() : "AUTRE",
      image: image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
      description: description || "Découvrez cette recette...",
      isTech: isTechFile,
      isVip: isVip
    };
  }
  return null;
}).filter(Boolean);


// --- 3. LE COMPOSANT D'AFFICHAGE ---
const PatisseriePage = ({ category: propCategory }) => {
  const { category: paramCategory } = useParams();
  const activeCategory = propCategory || paramCategory || 'patisserie';

  useEffect(() => { window.scrollTo(0, 0); }, [activeCategory]);

  const activeHub = HUBS[activeCategory];
  const normalize = (str) => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
  
  // A. MODE HUB (Affichage des tuiles)
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
              // ICI : Le lien est dynamique. Si tu es dans "alternative", ça fera /alternative/sans-gluten
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
  else if (urlCategory === 'sans-sucre') searchTerm = 'sucre'; 
  else if (urlCategory === 'vegan') searchTerm = 'vegan'; 
  else if (urlCategory === 'sans-lactose') searchTerm = 'lactose'; 
  else searchTerm = SEARCH_MAPPING[urlCategory] || urlCategory;
  
  const normalizedSearch = normalize(searchTerm);
  const techHub = HUBS['technologie'];
  const isTechSection = techHub && techHub.sections ? techHub.sections.some(s => s.id === urlCategory) : false;

  const filteredItems = allItems.filter(item => {
    const itemCat = normalize(item.category);
    
    if (isTechSection) return item.isTech && itemCat.includes(normalizedSearch);
    
    if (urlCategory === 'cake-sale') return itemCat === 'cake-sale';
    if (urlCategory === 'choux') return itemCat === 'choux';
    if (urlCategory === 'regional') return itemCat === 'regional';
    if (urlCategory === 'sans-gluten') return itemCat.includes('gluten');
    if (urlCategory === 'sans-sucre') return itemCat.includes('sucre');
    if (urlCategory === 'vegan') return itemCat.includes('vegan');
    
    if (urlCategory === 'confiserie-diverse') return itemCat.includes('confiserie') && !itemCat.includes('macaron');
    if (urlCategory === 'macaron') return itemCat.includes('macaron');
    
    return !item.isTech && itemCat.includes(normalizedSearch);
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
              <Link key={item.id} to={`/recipe/${item.id}`} className="bg-[#1a1a1a] rounded-xl border border-white/10 p-8 hover:border-[#D4AF37] transition-all group relative">
                
                {item.isVip && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg">
                    <Lock size={12} /> VIP
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