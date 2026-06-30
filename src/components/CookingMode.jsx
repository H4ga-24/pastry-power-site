import React, { useState, useEffect } from 'react';
import { X, Check, Coffee, Clock, Play, Pause, RotateCcw, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import GlossaryText from './GlossaryText';
import { parseCookTime, formatTime, playTimerAlarm } from '../utils/cookingTime';

// 🔥 ON AJOUTE "servings" DANS LES PARAMÈTRES RÉCUPÉRÉS
const CookingMode = ({ recipe, servings = 1, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedSteps, setCheckedSteps] = useState([]);
  const [wakeLock, setWakeLock] = useState(null);

  // LOGIQUE DU MINUTEUR
  const initialTime = parseCookTime(recipe?.cookTime);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      playTimerAlarm();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(initialTime);
  };

  const cleanText = (text) => {
    if (!text) return "";
    return text.replace(/\\'/g, "'").replace(/\\"/g, '"');
  };

  // 🔥 LA FONCTION POUR MULTIPLIER LES INGRÉDIENTS (La même que dans RecipeLayout)
  const scaleIngredient = (amount, base) => {
    if (!amount || isNaN(amount)) return amount;
    const scaled = (amount * servings) / base;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace('.0', '');
  };

  const renderItem = (item) => {
    if (!item) return "";
    let str = "";
    if (typeof item === 'string') {
      str = item;
    } else if (typeof item === 'object') {
      if (item.text) {
        // C'est une étape
        str = item.title ? `${item.title} : ${item.text}` : item.text;
      } else {
        // 🔥 C'est un ingrédient : ON APPLIQUE LE MULTIPLICATEUR ICI
        str = item.name || "Élément";
        if (item.amount) {
          const scaledAmount = scaleIngredient(item.amount, recipe?.baseServings || 1);
          str += ` - ${scaledAmount}`;
        }
        if (item.unit) str += ` ${item.unit}`;
      }
    }
    return cleanText(str).replace(/d\//g, "d'").replace(/l\//g, "l'").replace(/\\/g, "");
  };

  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          const lock = await navigator.wakeLock.request('screen');
          setWakeLock(lock);
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
      {/* HEADER SIMPLE */}
      <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-4 flex justify-between items-center z-20 shadow-xl">
        <div className="flex-1">
          <h2 className="text-[#D4AF37] font-serif text-xl font-bold truncate max-w-[250px] md:max-w-md">
            {cleanText(recipe?.title || "Recette")}
          </h2>
          <p className="text-green-500 text-xs flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Mode Cuisine Actif • {servings} portion(s)
          </p>
        </div>

        <button
          onClick={onClose}
          className="bg-white/10 p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
        >
          <X className="text-white" size={20} />
        </button>
      </div>

      <div className="max-w-3xl mx-auto p-6 pb-32 space-y-12 mt-4">

        {/* SECTION INGRÉDIENTS */}
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
                    <GlossaryText>{renderItem(ing)}</GlossaryText>
                    </span>
                </div>
                ))}
            </div>
            </section>
        )}

        {/* WIDGET MINUTEUR */}
        {initialTime > 0 && (
          <div className={`p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 ${isTimerRunning ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'bg-[#1a1a1a] border-white/10'}`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${isTimerRunning ? 'bg-[#D4AF37] text-black animate-pulse' : 'bg-gray-800 text-[#D4AF37]'}`}>
                <Timer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-serif text-xl">Chronomètre de Cuisson</h4>
                <p className="text-gray-400 text-sm">Précision recommandée</p>
              </div>
            </div>

            <div className={`font-mono text-5xl tracking-widest font-light ${timeLeft === 0 ? 'text-red-500' : 'text-[#D4AF37]'}`}>
              {formatTime(timeLeft)}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTimer}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white"
                title={isTimerRunning ? "Mettre en pause" : "Démarrer"}
              >
                {isTimerRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button
                onClick={resetTimer}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white"
                title="Réinitialiser"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* SECTION ÉTAPES */}
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
                    <GlossaryText>{renderItem(step)}</GlossaryText>
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