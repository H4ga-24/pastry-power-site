import React from 'react';
import { GLOSSARY } from '../data/glossary';
import { Info } from 'lucide-react';

const SmartText = ({ text }) => {
  if (!text) return null;

  // 1. On prépare les mots à chercher (on trie par longueur pour éviter les bugs)
  const terms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  
  // 2. On crée une expression régulière (Regex) pour trouver ces mots (insensible à la casse)
  // \b permet de s'assurer qu'on trouve le mot entier (pas "parer" dans "réparer")
  const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

  // 3. On découpe le texte
  const parts = text.split(regex);

  return (
    <span className="leading-relaxed text-gray-300">
      {parts.map((part, index) => {
        // On vérifie si ce bout de texte est un mot du dictionnaire
        const lowerPart = part.toLowerCase();
        const definition = GLOSSARY[lowerPart];

        if (definition) {
          return (
            <span key={index} className="relative group inline-block cursor-help">
              {/* Le mot souligné */}
              <span className="text-[#D4AF37] font-medium border-b border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors mx-1">
                {part}
              </span>

              {/* L'infobulle (Tooltip) */}
              <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[#1a1a1a] border border-[#D4AF37] text-white text-xs rounded shadow-xl z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="block font-bold text-[#D4AF37] mb-1 capitalize flex items-center gap-2">
                  <Info size={12} /> {lowerPart}
                </span>
                {definition}
                {/* La petite flèche du bas */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#D4AF37]"></span>
              </span>
            </span>
          );
        }

        // Si ce n'est pas un mot clé, on l'affiche normalement
        return part;
      })}
    </span>
  );
};

export default SmartText;