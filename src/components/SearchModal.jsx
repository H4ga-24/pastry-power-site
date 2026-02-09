import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Search, ChevronRight, ChefHat, Lock } from 'lucide-react';

// --- SCANNER DE RECETTES ---
const modules = import.meta.glob(['../pages/recipes/**/*.jsx'], { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

// On prépare la liste une seule fois au chargement
const allRecipes = Object.entries(modules).map(([path, rawContent]) => {
  
  // Sécurité : on ignore le dossier technologie s'il apparait
  if (path.includes('/technologie/')) return null;

  const fileName = path.split('/').pop().replace('.jsx', '');

  // 1. DÉTECTION VIP (Nom de fichier OU contenu)
  let isVip = fileName.startsWith('vip-') || fileName.startsWith('VIP-');
  const vipMatch = rawContent.match(/vip:\s*(true|false)/);
  if (vipMatch && vipMatch[1] === 'true') isVip = true;

  // 2. EXTRACTION TITRE
  const secureTitleMatch = rawContent.match(/(?:recipeData|recipeMeta)\s*=\s*\{[\s\S]*?title:\s*(?:"([^"]*)"|'([^']*)')/);
  const fallbackTitleMatch = rawContent.match(/title:\s*(?:"([^"]*)"|'([^']*)')/);
  
  let title = null;
  if (secureTitleMatch) title = secureTitleMatch[1] || secureTitleMatch[2];
  else if (fallbackTitleMatch) title = fallbackTitleMatch[1] || fallbackTitleMatch[2];
  
  // Titre par défaut si non trouvé (nettoyage du nom de fichier)
  if (!title) title = fileName.replace(/^vip-/i, '').replace(/([A-Z])/g, ' $1').trim();

  // 3. EXTRACTION AUTRES DONNÉES
  const catMatch = rawContent.match(/category:\s*(?:"([^"]*)"|'([^']*)')/);
  const imgMatch = rawContent.match(/image:\s*(?:"([^"]*)"|'([^']*)')/);

  return {
    id: fileName,
    title: title,
    category: catMatch ? (catMatch[1] || catMatch[2]) : "Pâtisserie",
    image: imgMatch ? (imgMatch[1] || imgMatch[2]) : null,
    isVip: isVip // On stocke l'info VIP
  };
}).filter(Boolean);


const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Gestion de la touche "Echap" pour fermer
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Filtrage en temps réel
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const filtered = allRecipes.filter(item => {
      const lowerTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const lowerCat = item.category.toLowerCase();
      // On cherche dans le titre ou la catégorie
      return lowerTitle.includes(lowerQuery) || lowerCat.includes(lowerQuery);
    }).slice(0, 5); // On limite à 5 résultats

    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
      {/* Fond flouté */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Boîte de recherche */}
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
        
        {/* Champ de saisie */}
        <div className="flex items-center p-6 border-b border-white/10">
          <Search className="text-[#D4AF37] w-6 h-6 mr-4" />
          <input
            autoFocus
            type="text"
            placeholder="Rechercher une recette (ex: Macaron, Tarte...)"
            className="w-full bg-transparent text-white text-xl placeholder-gray-500 focus:outline-none font-serif"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Résultats */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((item) => (
                <Link 
                  key={item.id} 
                  // 👉 C'EST ICI QUE SE FAIT LA MAGIE : SI VIP -> /vip/, SINON -> /recipe/
                  to={item.isVip ? `/vip/${item.id}` : `/recipe/${item.id}`} 
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group relative"
                >
                  {/* Image miniature */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10 relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <ChefHat size={20} />
                      </div>
                    )}
                    
                    {/* Petit cadenas sur l'image si VIP */}
                    {item.isVip && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Lock size={16} className="text-[#D4AF37]" />
                      </div>
                    )}
                  </div>
                  
                  {/* Texte */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white text-lg font-serif group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      {/* Badge VIP à côté du titre */}
                      {item.isVip && (
                        <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">VIP</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                  
                  <ChevronRight className="text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
                </Link>
              ))}
            </div>
          ) : query !== '' ? (
            <div className="p-8 text-center text-gray-500">
              Aucune recette trouvée pour "{query}"
            </div>
          ) : (
             <div className="p-8 text-center text-gray-600 text-sm">
               Tapez le nom d'un gâteau ou d'un entremets...
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;