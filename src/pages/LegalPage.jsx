import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const LegalPage = () => {
  // Remonte en haut de page au chargement
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 pt-32 pb-20 px-6 font-sans">
      <Helmet>
        <title>Mentions Légales | Pastry Power</title>
        <meta name="description" content="Mentions légales du site Pastry Power : éditeur, hébergement, propriété intellectuelle, conditions de vente et politique de confidentialité RGPD." />
      </Helmet>

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
            <strong>Responsable de la publication :</strong> Alexandre PERREAU<br/>
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

        {/* 3. PROPRIÉTÉ INTELLECTUELLE */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">3. Propriété Intellectuelle & Crédits</h2>
          
          <p className="leading-relaxed">
            <strong>Contenu Éditorial :</strong><br/>
            L'ensemble des textes, recettes, fiches techniques et le logo présents sur ce site sont la propriété exclusive de l'éditeur. Toute reproduction sans autorisation est interdite.
          </p>

          <p className="leading-relaxed">
            <strong>Illustrations :</strong><br/>
            Les photographies illustrant les fiches recettes sont générées par intelligence artificielle et constituent la propriété intellectuelle exclusive de l'éditeur.<br/>
            Les images d'illustration des pages de catégories proviennent de la banque d'images libre de droits Unsplash et restent la propriété intellectuelle de leurs auteurs respectifs.
          </p>
        </section>

        {/* 4. CONDITIONS DE VENTE (CGV) */}
        <section className="space-y-4 border-b border-white/10 pb-8">
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

        {/* 5. PROTECTION DES DONNÉES (RGPD) */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">5. Protection des données (RGPD)</h2>
          <p className="leading-relaxed">
            Les informations recueillies via les formulaires ou la création de compte VIP sont enregistrées dans un fichier informatisé par Alexandre PERREAU. Elles sont destinées uniquement à la gestion de votre compte. Conformément à la loi « informatique et libertés » et au RGPD, vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier ou supprimer en contactant : <a href="mailto:pastrypower76@gmail.com" className="text-[#D4AF37] hover:underline">pastrypower76@gmail.com</a>.
          </p>
        </section>

        {/* 6. COOKIES ET PUBLICITÉS */}
        <section className="space-y-4">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">6. Cookies et Publicités (Google AdSense)</h2>
          <p className="leading-relaxed text-sm mb-2">
            Ce site utilise Google AdSense, un service de publicité fourni par Google Inc. (« Google »).
            En tant que prestataire tiers, Google utilise des cookies pour diffuser des annonces sur ce site. L'utilisation de cookies publicitaires par Google permet à l'entreprise et à ses partenaires de diffuser des annonces auprès de nos utilisateurs en fonction de leur visite sur notre site et/ou sur d'autres sites Web.
          </p>
          <p className="leading-relaxed text-sm mb-2">
            L'affichage de ces publicités est subordonné à votre consentement, recueilli via la bannière de cookies présentée lors de votre première visite. Tant que vous n'avez pas accepté les cookies, aucune publicité personnalisée n'est diffusée.
          </p>
          <p className="leading-relaxed text-sm">
            Les utilisateurs peuvent choisir de désactiver la publicité personnalisée en consultant la page <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Paramètres des annonces de Google</a>. Alternativement, vous pouvez désactiver l'utilisation de cookies par un fournisseur tiers relatifs à la publicité personnalisée en consultant le site <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.aboutads.info</a>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default LegalPage;