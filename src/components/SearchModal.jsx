import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Search, ChevronRight, ChefHat, Lock } from 'lucide-react';
import { recipes } from '../data/recipes'; // 🔥 ON IMPORTE LES DONNÉES !

// On prépare la liste une seule fois au chargement
const allRecipes = recipes.map((data) => {
  if (!data || !data.title) return null;
  return {
    id: data.id,
    title: data.title,
    category: data.category || "Pâtisserie",
    image: data.image || null,
    isVip: !!data.isVip
  };
}).filter(Boolean);

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const filtered = allRecipes.filter(item => {
      const lowerTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const lowerCat = item.category.toLowerCase();
      return lowerTitle.includes(lowerQuery) || lowerCat.includes(lowerQuery);
    }).slice(0, 5); 

    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="flex items-center p-6 border-b border-white/10">
          <Search className="text-[#D4AF37] w-6 h-6 mr-4" />
          <input
            autoFocus
            type="text"
            placeholder="Rechercher une recette..."
            className="w-full bg-transparent text-white text-xl placeholder-gray-500 focus:outline-none font-serif"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.isVip ? `/vip/${item.id}` : `/recipe/${item.id}`} 
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group relative"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10 relative">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <ChefHat size={20} />
                      </div>
                    )}
                    {item.isVip && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Lock size={16} className="text-[#D4AF37]" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white text-lg font-serif group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      {item.isVip && <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">VIP</span>}
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{item.category}</span>
                  </div>
                  <ChevronRight className="text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
                </Link>
              ))}
            </div>
          ) : query !== '' ? (
            <div className="p-8 text-center text-gray-500">Aucune recette trouvée pour "{query}"</div>
          ) : (
             <div className="p-8 text-center text-gray-600 text-sm">Tapez le nom d'un gâteau ou d'un entremets...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;