import { useEffect, useState } from 'react';
import { getConsent } from './CookieBanner';

export default function AdBanner() {
  const [consent, setConsent] = useState(() => getConsent());

  useEffect(() => {
    const handler = (e) => setConsent(e.detail);
    window.addEventListener('pp:consent', handler);
    return () => window.removeEventListener('pp:consent', handler);
  }, []);

  useEffect(() => {
    if (consent !== 'accepted') return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [consent]);

  if (consent !== 'accepted') return null;

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