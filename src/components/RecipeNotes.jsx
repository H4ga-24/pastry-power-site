import React, { useEffect, useState } from 'react';
import { BookOpen, AlertTriangle, Snowflake } from 'lucide-react';

/**
 * Encart « Bon à savoir » d'une recette : à quoi elle sert, les erreurs fréquentes, la conservation.
 * Les textes sont dans src/data/recipeNotes.js (chargé à la demande, hors du bundle principal).
 */
export default function RecipeNotes({ id }) {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    let alive = true;
    setNotes(null);
    import('../data/recipeNotes.js')
      .then((mod) => { if (alive) setNotes(mod.recipeNotes?.[id] || null); })
      .catch(() => {});
    return () => { alive = false; };
  }, [id]);

  if (!notes) return null;

  return (
    <section className="mt-12 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8">
      <h3 className="text-2xl font-serif text-white mb-6">Bon à savoir</h3>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        {notes.usage && (
          <div className="flex gap-4">
            <BookOpen className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">À quoi ça sert</h4>
              <p>{notes.usage}</p>
            </div>
          </div>
        )}
        {notes.erreurs?.length > 0 && (
          <div className="flex gap-4">
            <AlertTriangle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">Les erreurs fréquentes</h4>
              <ul className="list-disc pl-5 space-y-2">
                {notes.erreurs.map((erreur, i) => <li key={i}>{erreur}</li>)}
              </ul>
            </div>
          </div>
        )}
        {notes.conservation && (
          <div className="flex gap-4">
            <Snowflake className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">Conservation</h4>
              <p>{notes.conservation}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
