import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'pp_cookie_consent'; // 'accepted' | 'declined'

export const getConsent = () => {
  try { return localStorage.getItem(CONSENT_KEY); }
  catch { return null; }
};

const setConsent = (value) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent('pp:consent', { detail: value }));
  } catch {}
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
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