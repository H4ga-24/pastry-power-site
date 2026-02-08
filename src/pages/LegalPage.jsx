import React, { useEffect } from 'react';

const LegalPage = () => {
  // Remonte en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 pt-32 pb-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* TITRE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-white mb-4">Mentions Légales</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* 1. ÉDITEUR (Adapté Micro-Entreprise & Vie Privée) */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">1. Éditeur du site</h2>
          <p className="leading-relaxed">
            Le site <strong>Pastry Power</strong> est édité par :<br/><br/>
            <strong>Entrepreneur Individuel :</strong> Alexandre PERREAU<br/>
            <strong>Statut :</strong> Micro-Entrepreneur<br/>
            <strong>Siège social :</strong> 76000 Rouen (adresse diponible à la demande)<br/>
            <strong>Contact :</strong> <a href="mailto:pastrypower76@gmail.com" className="text-[#D4AF37] hover:underline">pastrypower76@gmail.com</a><br/>
            <strong>SIRET :</strong> 950 978 676 00019
          </p>
          <p className="text-xs text-gray-500 italic mt-4">
            *TVA non applicable, art. 293 B du CGI.<br/>
            Dispensé d'immatriculation au registre du commerce et des sociétés (RCS) et au répertoire des métiers (RM).
          </p>
        </section>

        {/* 2. HÉBERGEMENT */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">2. Hébergement</h2>
          <p className="leading-relaxed">
            Ce site est hébergé par :<br/>
            <strong>Vercel Inc.</strong><br/>
            340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br/>
            <span className="text-sm text-gray-500"></span>
          </p>
        </section>

        {/* 3. PROPRIÉTÉ INTELLECTUELLE (Version Images Libres de Droits) */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">3. Propriété Intellectuelle & Crédits</h2>
          
          <p className="leading-relaxed">
            <strong>Contenu Éditorial :</strong><br/>
            L'ensemble des textes, recettes, fiches techniques et le logo présents sur ce site sont la propriété exclusive de l'éditeur. Toute reproduction sans autorisation est interdite.
          </p>

          <p className="leading-relaxed">
            <strong>Illustrations :</strong><br/>
            Les photographies utilisées sur ce site proviennent de banques d'images libres de droits (Unsplash, Pexels) et restent la propriété intellectuelle de leurs auteurs respectifs.<br/>
            Certaines illustrations peuvent également être la propriété de l'éditeur.
          </p>
        </section>

        {/* 4. CONDITIONS DE VENTE (CGV) */}
        <section className="space-y-4">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">4. Vente de Produits & Services</h2>
          <p className="leading-relaxed">
            <strong>Produits Numériques (E-books) :</strong><br/>
            La vente des carnets de recettes est assurée via la plateforme tierce <strong>Podia</strong>. Les conditions générales de vente applicables sont celles de Podia au moment de l'achat.
          </p>
          <p className="leading-relaxed">
            <strong>Abonnement VIP :</strong><br/>
            Les paiements récurrents pour l'accès au club VIP sont sécurisés et gérés par <strong>Stripe</strong>. L'abonnement est sans engagement et résiliable à tout moment via l'espace client Stripe.
          </p>
          <p className="leading-relaxed">
            <strong>Droit de Rétractation :</strong><br/>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques non fournis sur un support matériel (E-books, accès VIP) dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
          </p>
        </section>

      </div>
    </div>
  );
};

export default LegalPage;