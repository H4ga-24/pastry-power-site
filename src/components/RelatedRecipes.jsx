import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { getRelatedItems, itemUrl } from '../data/hubs';

/** Liens vers les fiches de la même famille (maillage interne, en bas de chaque fiche). */
export default function RelatedRecipes({ id, title = 'Dans la même famille' }) {
  const items = getRelatedItems(id, 6);
  if (items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/5">
      <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to={itemUrl(item)}
            className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-colors"
          >
            {item.isVip && (
              <span className="absolute top-2 right-2 z-10 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Crown size={10} fill="black" /> VIP
              </span>
            )}
            {item.image && (
              <div className="aspect-video overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-serif text-white text-base md:text-lg leading-snug group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
