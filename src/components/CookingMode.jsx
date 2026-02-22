import React, { useState, useEffect } from 'react';
import { X, Check, Coffee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import GlossaryText from './GlossaryText';

const CookingMode = ({ recipe, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedSteps, setCheckedSteps] = useState([]);
  const [wakeLock, setWakeLock] = useState(null);

  // --- 🟢 FONCTION DE NETTOYAGE RENFORCÉE ---
  const cleanText = (text) => {
    if (!text) return "";
    
    // Si c'est un objet, on essaie de l'afficher proprement
    if (typeof text === 'object') {
        return text.name || text.label || JSON.stringify(text);
    }

    let str = String(text);

    // 1. On remplace les séquences connues (\' -> ')
    str = str.replace(/\\'/g, "'").replace(/\\"/g, '"');

    // 2. On supprime les backslashes résiduels (ceux qui restent à la fin des mots comme "d\")
    // Cette regex dit : "Enlève tout \ qui est à la fin d'un mot"
    str = str.replace(/\\(?=\s|$)/g, ""); 

    // 3. On enlève les backslashes orphelins bizarres s'il en reste
    str = str.replace(/\\/g, "");

    return str;
  };

  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          const lock = await navigator.wakeLock.request('screen');
          setWakeLock(lock);
          console.log('Mode Cuisine : Écran maintenu allumé');
        } catch (err) {
          console.error('Impossible de verrouiller l\'écran:', err);
        }
      }
    };
    requestWakeLock();
    return () => {
      if (wakeLock) wakeLock.release();
    };
  }, []);

  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const toggleStep = (idx) => {
    setCheckedSteps(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const safeIngredients = Array.isArray(recipe?.ingredients) ? recipe.ingredients : [];
  const safeSteps = Array.isArray(recipe?.steps) ? recipe.steps : [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      className="fixed inset-0 bg-[#0a0a0a] z-[100] overflow-y-auto"
    >
      <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-4 flex justify-between items-center z-10 shadow-xl">
        <div>
          <h2 className="text-[#D4AF37] font-serif text-xl font-bold truncate max-w-[200px] md:max-w-md">
            {cleanText(recipe?.title || "Recette")}
          </h2>
          <p className="text-green-500 text-xs flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Mode Cuisine Actif (Écran allumé)
          </p>
        </div>
        <button 
          onClick={onClose}
          className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="text-white" size={24} />
        </button>
      </div>

      <div className="max-w-3xl mx-auto p-6 pb-32 space-y-12">
        
        {safeIngredients.length > 0 && (
            <section>
            <h3 className="text-2xl text-white font-serif mb-6 flex items-center gap-3">
                <Coffee className="text-[#D4AF37]" /> Ingrédients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {safeIngredients.map((ing, idx) => (
                <div 
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                    checkedIngredients.includes(idx)
                        ? 'bg-green-900/20 border-green-500/50 opacity-50'
                        : 'bg-[#1a1a1a] border-white/10 hover:border-[#D4AF37]'
                    }`}
                >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        checkedIngredients.includes(idx) ? 'border-green-500 bg-green-500 text-black' : 'border-gray-500'
                    }`}>
                    {checkedIngredients.includes(idx) && <Check size={14} />}
                    </div>
                    <span className={`text-lg ${checkedIngredients.includes(idx) ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                    <GlossaryText>{cleanText(ing)}</GlossaryText>
                    </span>
                </div>
                ))}
            </div>
            </section>
        )}

        {safeSteps.length > 0 && (
            <section>
            <h3 className="text-2xl text-white font-serif mb-6 flex items-center gap-3">
                <Clock className="text-[#D4AF37]" /> Préparation
            </h3>
            <div className="space-y-6">
                {safeSteps.map((step, idx) => (
                <div 
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-200 flex gap-6 ${
                    checkedSteps.includes(idx)
                        ? 'bg-green-900/20 border-green-500/50 opacity-50'
                        : 'bg-[#1a1a1a] border-white/10 hover:border-[#D4AF37]'
                    }`}
                >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
                    checkedSteps.includes(idx) ? 'border-green-500 bg-green-500 text-black' : 'border-[#D4AF37] text-[#D4AF37]'
                    }`}>
                    {checkedSteps.includes(idx) ? <Check size={18} /> : idx + 1}
                    </div>
                    <p className={`text-xl leading-relaxed ${checkedSteps.includes(idx) ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                    <GlossaryText>{cleanText(step)}</GlossaryText>
                    </p>
                </div>
                ))}
            </div>
            </section>
        )}

        <div className="text-center pt-10">
          <p className="text-gray-500 italic">"La pâtisserie est une affaire de précision."</p>
          <button 
            onClick={onClose}
            className="mt-8 px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded hover:bg-white transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Terminer la recette
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookingMode;