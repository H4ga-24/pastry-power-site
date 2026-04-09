import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Search, ChevronRight, ChefHat, Lock } from 'lucide-react';
import { catalog } from '../data/catalog';

// Pré-calcul hors composant : normalisation des titres pour la recherche
// (fait une seule fois au chargement du module, pas à chaque frappe)
const searchIndex = catalog.map(item => ({
  ...item,
  normalizedTitle: item.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
}));

// ---------------------------------------------------------------

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState([]);

  // Fermeture avec Échap
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Debounce 150ms — évite de filtrer à chaque frappe clavier
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(t);
  }, [query]);

  // Filtrage déclenché uniquement après le debounce
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      return;
    }
    const lowerQuery = debouncedQuery
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const filtered = searchIndex
      .filter(item => item.normalizedTitle.includes(lowerQuery))
      .slice(0, 5);

    setResults(filtered);
  }, [debouncedQuery]);

  // Réinitialiser la query à la fermeture
  useEffect(() => {
    if (!isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const getItemUrl = (item) => {
    if (item.isVip) {
      return item.isTech ? `/vip/technologie/${item.id}` : `/vip/${item.id}`;
    }
    return item.isTech ? `/techno/${item.id}` : `/recipe/${item.id}`;
  };

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
                  to={getItemUrl(item)}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors group relative"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10 relative">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        loading="lazy"
                        decoding="async"
                      />
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
                      {item.isVip && (
                        <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                          VIP
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <ChevronRight className="text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
                </Link>
              ))}
            </div>
          ) : query !== '' ? (
            <div className="p-8 text-center text-gray-500">
              Aucune recette trouvée pour &quot;{query}&quot;
            </div>
          ) : (
            <div className="p-8 text-center text-gray-600 text-sm">
              Tapez le nom d&apos;un gâteau ou d&apos;un entremets...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;