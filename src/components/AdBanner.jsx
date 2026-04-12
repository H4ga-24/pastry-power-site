import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    // Ce script remplace la balise <script> de la fin de ton code Google
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Erreur de chargement de la publicité :", error);
    }
  }, []);

  return (
    <div className="w-full text-center my-8 overflow-hidden">
      {/* werda */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-4373695426341440"
           data-ad-slot="3350111313"
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
    </div>
  );
}