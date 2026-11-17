import { useEffect, useRef, useState } from 'react';
import { getConsent, hasCertifiedCmp, waitForCmp } from '../lib/consent';

// Une annonce n'est demandée que si le visiteur a accepté sur notre bandeau,
// ou si la CMP certifiée de Google est active (elle transmet elle-même le choix du visiteur à AdSense).
const isAllowed = () => getConsent() === 'accepted' || hasCertifiedCmp();

export default function AdBanner() {
  const [allowed, setAllowed] = useState(isAllowed);
  const pushed = useRef(false);

  useEffect(() => {
    let alive = true;
    const handler = () => setAllowed(isAllowed());
    window.addEventListener('pp:consent', handler);
    waitForCmp(5000).then((cmp) => { if (alive && cmp) setAllowed(true); });
    return () => { alive = false; window.removeEventListener('pp:consent', handler); };
  }, []);

  useEffect(() => {
    if (!allowed || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [allowed]);

  if (!allowed) return null;

  return (
    <div className="w-full text-center my-8 overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4373695426341440"
        data-ad-slot="3350111313"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
