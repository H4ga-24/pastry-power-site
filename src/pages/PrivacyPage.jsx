import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 pt-32 pb-20 px-6 font-sans">
      <Helmet>
        <title>Politique de Confidentialité | Pastry Power</title>
        <meta name="description" content="Politique de confidentialité de Pastry Power : cookies, Google AdSense, données personnelles et vos droits RGPD." />
      </Helmet>

      <div className="max-w-3xl mx-auto space-y-12">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-white mb-4">Politique de Confidentialité</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">1. Responsable du traitement</h2>
          <p className="leading-relaxed">
            Le site <strong>Pastry Power</strong> est édité par Alexandre PERREAU, Micro-Entrepreneur, 76000 Rouen.<br />
            Contact : <a href="mailto:pastrypower76@gmail.com" className="text-[#D4AF37] hover:underline">pastrypower76@gmail.com</a>
          </p>
        </section>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">2. Données collectées</h2>
          <p className="leading-relaxed">
            Nous collectons uniquement les données que vous nous transmettez volontairement (via le formulaire de contact ou lors de la création d'un compte VIP) : nom, adresse e-mail. Ces données sont utilisées exclusivement pour répondre à vos demandes ou gérer votre abonnement.
          </p>
          <p className="leading-relaxed">
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
          </p>
        </section>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">3. Cookies</h2>
          <p className="leading-relaxed">
            Ce site utilise des cookies, c'est-à-dire de petits fichiers texte déposés sur votre appareil lors de votre navigation. Ils servent à :
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed pl-2">
            <li>Mémoriser votre session de connexion (cookies fonctionnels)</li>
            <li>Mesurer l'audience du site (cookies analytiques)</li>
            <li>Afficher des publicités personnalisées (cookies publicitaires — Google AdSense)</li>
          </ul>
          <p className="leading-relaxed text-sm">
            Vous pouvez refuser ou supprimer les cookies à tout moment via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter le bon fonctionnement du site.
          </p>
        </section>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">4. Google AdSense & publicité personnalisée</h2>
          <p className="leading-relaxed text-sm">
            Ce site utilise <strong>Google AdSense</strong>, un service de régie publicitaire fourni par Google LLC. Google AdSense utilise des cookies publicitaires pour afficher des annonces pertinentes en fonction de votre navigation sur ce site et sur d'autres sites Web.
          </p>
          <p className="leading-relaxed text-sm">
            Google, en tant que fournisseur tiers, utilise des cookies (dont le cookie <code className="bg-white/10 px-1 py-0.5 rounded text-xs">DART</code>) pour diffuser des annonces basées sur les visites de nos utilisateurs sur ce site et sur d'autres sites Internet.
          </p>
          <p className="leading-relaxed text-sm">
            Ces cookies permettent à Google et à ses partenaires de diffuser des annonces personnalisées. Vous pouvez désactiver la publicité personnalisée de Google à tout moment en visitant :
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm pl-2">
            <li>
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                Paramètres des annonces Google
              </a>
            </li>
            <li>
              <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                www.aboutads.info
              </a>{' '}— désactivation des annonces personnalisées des partenaires
            </li>
            <li>
              <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                www.youronlinechoices.eu
              </a>{' '}— pour les utilisateurs européens
            </li>
          </ul>
          <p className="leading-relaxed text-sm">
            Pour plus d'informations sur la façon dont Google utilise les données, consultez la{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
              Politique de confidentialité de Google
            </a>.
          </p>
        </section>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">5. Services tiers</h2>
          <p className="leading-relaxed text-sm">
            En plus de Google AdSense, ce site peut faire appel aux services suivants, chacun disposant de sa propre politique de confidentialité :
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm pl-2">
            <li><strong>Supabase</strong> — gestion de la base de données et des authentifications</li>
            <li><strong>Stripe</strong> — paiement sécurisé pour l'abonnement VIP</li>
            <li><strong>Vercel</strong> — hébergement du site</li>
          </ul>
        </section>

        <section className="space-y-4 border-b border-white/10 pb-8">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">6. Vos droits (RGPD)</h2>
          <p className="leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm pl-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (« droit à l'oubli »)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p className="leading-relaxed text-sm">
            Pour exercer ces droits, contactez-nous à :{' '}
            <a href="mailto:pastrypower76@gmail.com" className="text-[#D4AF37] hover:underline">
              pastrypower76@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-[#D4AF37] font-bold uppercase">7. Mise à jour de cette politique</h2>
          <p className="leading-relaxed text-sm">
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière révision est indiquée ci-dessous. Nous vous encourageons à la consulter régulièrement.
          </p>
          <p className="text-xs text-gray-500">Dernière mise à jour : juin 2025</p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPage;
