import React, { useEffect, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ChefHat, ArrowRight, Crown } from 'lucide-react';
import Seo from '../components/Seo';
import {
  HUBS, getHubItems, getSectionItems, getVisibleSections, isHubMode, itemUrl, canonicalListPath,
} from '../data/hubs';

// ---------------------------------------------------------------
// 3. COMPOSANT
// ---------------------------------------------------------------

const PatisseriePage = ({ category: propCategory }) => {
  const params = useParams();
  const location = useLocation();

  const urlCategory    = location.pathname.split('/')[1];
  const activeHubId    = propCategory || params.category || urlCategory || 'patisserie';
  const activeSectionId = params.subcategory || null;

  useEffect(() => { window.scrollTo(0, 0); }, [activeHubId, activeSectionId]);

  const activeHub = HUBS[activeHubId];

  // Ces calculs doivent être AVANT tout return conditionnel (règle des hooks React)
  const isTechSection = activeHubId === 'technologie';
  const visibleSections = useMemo(() => getVisibleSections(activeHubId), [activeHubId]);
  const hubMode = !activeSectionId && isHubMode(activeHubId);
  const activeSection = activeSectionId
    ? (activeHub?.sections || []).find(s => s.id === activeSectionId) || null
    : null;

  const filteredItems = useMemo(
    () => (activeSectionId ? getSectionItems(activeHubId, activeSectionId) : getHubItems(activeHubId)),
    [activeHubId, activeSectionId],
  );

  const pageTitle = activeSection?.title || activeHub?.title || activeHubId;
  const canonicalPath = canonicalListPath(activeHubId, activeSectionId);
  const seoDescription = activeSection?.intro || activeHub?.intro || activeHub?.description || '';

  // A. MODE HUB
  if (hubMode) {
    return (
      <>
      <Seo
        title={`${activeHub.title} : fiches et recettes | Pastry Power`}
        description={seoDescription}
        path={canonicalPath}
      />
      <div className="min-h-screen bg-[#121212] text-white pt-24 px-6 pb-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{activeHub.title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">{activeHub.description}</p>
            {activeHub.intro && (
              <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">{activeHub.intro}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleSections.map((sub) => (
              <Link
                key={sub.id}
                to={sub.path}
                className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-500"
              >
                <div className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  {sub.image ? (
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
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

          {filteredItems.length <= 30 && (
            <div className="mt-20">
              <h2 className="text-3xl font-serif mb-8 text-center">
                Toutes les fiches <span className="text-[#D4AF37] italic">{activeHub.title}</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={itemUrl(item)}
                      className="block h-full bg-[#1a1a1a] rounded-xl border border-white/10 hover:border-[#D4AF37] transition-colors p-5"
                    >
                      <span className="flex items-center gap-2 font-serif text-xl text-white mb-2">
                        {item.title}
                        {item.isVip && (
                          <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 font-sans">
                            <Crown size={10} fill="black" /> VIP
                          </span>
                        )}
                      </span>
                      <span className="block text-gray-500 text-sm leading-relaxed">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      </>
    );
  }

  // B. MODE LISTE DES RECETTES

  // Correction cruciale pour le SEO AdSense et le Paywall
  const getItemUrl = itemUrl;

  return (
    <>
    <Seo
      title={`${pageTitle} : ${filteredItems.length} fiche${filteredItems.length > 1 ? 's' : ''} | Pastry Power`}
      description={seoDescription}
      path={canonicalPath}
      noindex={filteredItems.length === 0}
    />
    <div className="min-h-screen bg-[#121212] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Link
            to={activeSectionId ? `/${activeHubId}` : '/'}
            className="text-gray-500 hover:text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block"
          >
            ← Retour
          </Link>
          <h1 className="text-5xl font-serif mb-4 capitalize">{pageTitle}</h1>
          <p className="text-gray-400">{filteredItems.length} fiche{filteredItems.length > 1 ? 's' : ''}{isTechSection ? ' de technologie' : ''}</p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <Link
                key={item.id}
                to={getItemUrl(item)}
                className="bg-[#1a1a1a] rounded-xl border border-white/10 p-8 hover:border-[#D4AF37] transition-all group relative"
              >
                {item.isVip && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg shadow-black/40">
                    <Crown size={12} fill="black" /> VIP
                  </div>
                )}

                <div className="h-48 bg-gray-900 rounded-lg mb-6 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ChefHat className="text-gray-700" size={48} />
                    </div>
                  )}
                </div>

                <div className="text-[#D4AF37] text-xs font-bold uppercase mb-2">
                  {item.subCategory?.length > 0 ? item.subCategory.join(' • ') : item.category}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#1a1a1a] rounded-xl border border-white/5">
            <p className="text-gray-500 text-xl font-serif">
              Aucune recette disponible dans la section &quot;{pageTitle}&quot; pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default PatisseriePage;