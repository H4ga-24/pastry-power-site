// Consentement cookies / publicité.
//
// Deux cas, gérés automatiquement :
//  1. Le message RGPD de Google AdSense (CMP certifiée, « Confidentialité et messages ») est actif :
//     il expose window.__tcfapi. C'est lui qui recueille le consentement → notre bandeau maison se retire.
//  2. Il n'est pas (encore) actif : notre bandeau maison s'affiche et aucune annonce n'est demandée sans accord.

const CONSENT_KEY = 'pp_cookie_consent'; // 'accepted' | 'declined'

export const getConsent = () => {
  try { return localStorage.getItem(CONSENT_KEY); }
  catch { return null; }
};

export const setConsent = (value) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent('pp:consent', { detail: value }));
  } catch { /* stockage indisponible : on n'insiste pas */ }
};

export const hasCertifiedCmp = () =>
  typeof window !== 'undefined' && typeof window.__tcfapi === 'function';

/** Attend quelques secondes l'arrivée éventuelle de la CMP Google (chargée par adsbygoogle.js). */
export const waitForCmp = (timeoutMs = 3000) =>
  new Promise((resolve) => {
    if (hasCertifiedCmp()) { resolve(true); return; }
    const started = Date.now();
    const timer = setInterval(() => {
      if (hasCertifiedCmp()) { clearInterval(timer); resolve(true); }
      else if (Date.now() - started >= timeoutMs) { clearInterval(timer); resolve(false); }
    }, 250);
  });
