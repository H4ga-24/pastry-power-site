import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getConsent, setConsent, hasCertifiedCmp, waitForCmp } from '../lib/consent';

// Conservé pour les imports existants.
export { getConsent };

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent()) return undefined;
    let alive = true;
    // Si le message RGPD de Google (CMP certifiée) est actif, c'est lui qui gère le consentement :
    // on n'affiche pas deux bandeaux.
    waitForCmp(3000).then((cmp) => { if (alive && !cmp) setVisible(true); });
    const watcher = setInterval(() => { if (hasCertifiedCmp()) setVisible(false); }, 1000);
    const stop = setTimeout(() => clearInterval(watcher), 20000);
    return () => { alive = false; clearInterval(watcher); clearTimeout(stop); };
  }, []);

  if (!visible) return null;

  const handle = (choice) => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[2000] bg-[#1a1a1a] border-t border-[#D4AF37]/20 shadow-2xl">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-gray-400 leading-relaxed">
          Ce site utilise des cookies pour la publicité personnalisée (Google AdSense) et l'analyse du trafic.{' '}
          <Link to="/politique-confidentialite" className="text-[#D4AF37] hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handle('declined')}
            className="px-5 py-2 text-sm border border-white/20 text-gray-400 rounded hover:border-white/50 hover:text-white transition-all"
          >
            Refuser
          </button>
          <button
            onClick={() => handle('accepted')}
            className="px-5 py-2 text-sm bg-[#D4AF37] text-black font-bold rounded hover:bg-white transition-all"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;