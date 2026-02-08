import React, { useState, useEffect } from 'react';
import { Scale, Minus, Plus, Printer } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RecipeIngredients = ({ 
  ingredients = [], 
  servings, // Peut venir du parent (nouveau)
  initialYield, // Peut venir du parent (ancien)
  setServings, // Peut venir du parent (nouveau)
  baseServings = 1, 
  yieldUnit = "portions", // Peut venir du parent (ancien)
  unitLabel = "portions", // Peut venir du parent (nouveau)
  step = 1 // Pas de modification pour l'ancien
}) => {
  const { toast } = useToast();

  // --- 1. HARMONISATION DES PROPS (Le Secret) ---
  // On détecte si c'est une vieille recette (initialYield) ou une nouvelle (baseServings)
  const baseQty = initialYield || baseServings || 1;
  const label = yieldUnit !== "portions" ? yieldUnit : unitLabel;
  const stepQty = step || (baseQty >= 10 ? 10 : 1);

  // --- 2. SYSTÈME DE PORTIONS (Anti-Crash) ---
  const [internalServings, setInternalServings] = useState(baseQty);

  useEffect(() => {
    // Si le parent envoie une valeur via 'servings' ou 'initialYield', on met à jour
    if (servings !== undefined) setInternalServings(servings);
  }, [servings]);

  const currentQty = servings !== undefined ? servings : internalServings;

  const handleUpdate = (newVal) => {
    const safeVal = Math.max(1, newVal);
    if (typeof setServings === 'function') {
      setServings(safeVal);
    } else {
      setInternalServings(safeVal);
    }
  };

  // --- 3. CALCULATRICE FLEXIBLE ---
  const calculateAmount = (amount, current, base) => {
    if (!amount) return "";
    // Gestion du "QS" (Quantité Suffisante)
    if (amount === "QS" || amount === "qs") return "QS";

    const cleanAmount = parseFloat(amount.toString().replace(',', '.'));
    if (isNaN(cleanAmount)) return amount;
    
    const safeBase = base || 1;
    const val = (cleanAmount * current) / safeBase;
    
    return val < 10 ? Number(val.toFixed(1)) : Math.round(val);
  };

  const handlePrint = () => {
    toast({ title: "Impression lancée..." });
    window.print();
  };

  // --- 4. DÉTECTIVE D'INGRÉDIENTS (Le cœur du problème) ---
  const renderRow = (ing, idx) => {
    if (!ing) return null;

    // Détection des noms de propriétés (Ancien vs Nouveau)
    const name = ing.name || ing.label || "Ingrédient";
    const rawAmount = ing.amount || ing.qty || ing.quantity || ""; // qty pour l'ancien
    const unit = ing.unit || ing.unite || "";
    const note = ing.note || "";

    return (
      <li key={idx} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-gray-200 font-medium">{name}</span>
          <span className="text-[#D4AF37] font-bold font-mono">
            {calculateAmount(rawAmount, currentQty, baseQty)} {unit}
          </span>
        </div>
        {note && <span className="text-xs text-gray-500 italic">{note}</span>}
      </li>
    );
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Scale className="w-5 h-5 text-[#D4AF37]" />
          <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
        </div>
        <button onClick={handlePrint} className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#D4AF37] transition-colors">
           <Printer className="w-6 h-6" />
        </button>
      </div>

      {/* BOUTONS +/- */}
      <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
        <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">{label}</span>
        <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
          <button onClick={() => handleUpdate(currentQty - stepQty)} className="text-[#D4AF37] hover:text-white transition-colors p-1">
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-white font-mono text-lg w-12 text-center">{currentQty}</span>
          <button onClick={() => handleUpdate(currentQty + stepQty)} className="text-[#D4AF37] hover:text-white transition-colors p-1">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* LISTE ROBUSTE */}
      <ul className="space-y-4">
        {(!ingredients || ingredients.length === 0) && (
            <li className="text-gray-500 text-sm italic">Aucun ingrédient.</li>
        )}

        {Array.isArray(ingredients) && ingredients.map((item, index) => {
          if (!item) return null;

          // DÉTECTION : Est-ce une liste imbriquée (Ancien format) ?
          // Tes anciens fichiers ont { title: null, items: [...] }
          if (item.items && Array.isArray(item.items)) {
            return (
              <div key={index} className="mb-6 last:mb-0">
                {/* On n'affiche le titre que s'il n'est pas null */}
                {item.title && (
                  <h4 className="text-[#D4AF37] font-serif uppercase tracking-widest text-sm border-b border-[#D4AF37]/30 pb-2 mb-4 mt-2">
                    {item.title}
                  </h4>
                )}
                <ul className="space-y-4">
                  {item.items.map((subIng, subIdx) => renderRow(subIng, `sub-${index}-${subIdx}`))}
                </ul>
              </div>
            );
          }

          // Sinon, c'est un ingrédient simple
          return renderRow(item, index);
        })}
      </ul>
    </div>
  );
};

export default RecipeIngredients;