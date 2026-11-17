import React from 'react';
import { Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';

import CookieBanner from './components/CookieBanner';
import Navigation from './components/Navigation';
import DynamicPage from './components/DynamicPage';
import FloatingBackButton from './components/FloatingBackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './Login';
import AdBanner from './components/AdBanner';
import { useAuth } from './AuthContext';
import { isAdEligiblePath } from './data/hubs';
import Seo from './components/Seo';

import PatisseriePage from './pages/PatisseriePage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import VipPage from './pages/VipPage';
import CommunautePage from './pages/CommunautePage';
import NouveauPostPage from './pages/NouveauPostPage';
import ForumPostPage from './pages/ForumPostPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

// Ancienne adresse des fiches technologie : une seule URL par fiche désormais.
const LegacyTechRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/techno/${id}`} replace />;
};

const App = () => {
  const { isPremium } = useAuth();
  const location = useLocation();

  // Publicité : uniquement sur du contenu éditorial public et non vide (accueil, rubriques, fiches en accès libre).
  // Jamais sur une fiche VIP verrouillée, une 404, le forum, la connexion ou les pages légales.
  const showAd = !isPremium && isAdEligiblePath(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <ScrollToTop />
      <CookieBanner />
      <Navigation />
      <FloatingBackButton />

      <main className="flex-grow">
        <Routes>
          {/* --- ACCUEIL --- */}
          <Route path="/"      element={<LandingPage />} />
          <Route path="/login"           element={<><Seo title="Connexion | Pastry Power" noindex /><Login /></>} />
          <Route path="/reset-password" element={<><Seo title="Réinitialiser le mot de passe | Pastry Power" noindex /><ResetPasswordPage /></>} />
          <Route path="/vip"            element={<><Seo title="Club VIP | Pastry Power" description="Le Club VIP Pastry Power : recettes exclusives et fiches inédites ajoutées chaque mois." path="/vip" /><VipPage /></>} />

          {/* --- RECETTES ---
              IMPORTANT : toutes les recettes (libres ET vip) passent par DynamicPage.
              La protection freemium est gérée DANS DynamicPage / RecipeLayout
              via le flag isVip du catalog.js — pas au niveau du routeur.
              Cela permet à Google de crawler le contenu et valider AdSense.
          */}
          <Route path="/recipe/:id"          element={<DynamicPage />} />
          <Route path="/vip/technologie/:id" element={<LegacyTechRedirect />} />
          <Route path="/techno/:id"          element={<DynamicPage />} />
          {/* ⚠️  L'ancienne route /vip/:id avec <ProtectedRoute> a été supprimée
              car elle affichait une page vide aux crawlers → refus AdSense */}

          {/* --- PAGES STATIQUES --- */}
          <Route path="/mentions-legales"          element={<LegalPage />} />
          <Route path="/a-propos"                  element={<><Seo title="Qui suis-je ? | Pastry Power" description="Le créateur de Pastry Power : plus de 160 000 passionnés sur TikTok et un site de fiches techniques pour comprendre la pâtisserie, pas seulement la reproduire." path="/a-propos" /><AboutPage /></>} />
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPage />} />

          {/* --- CATÉGORIES --- */}
          <Route path="/patisserie"              element={<PatisseriePage category="patisserie" />} />
          <Route path="/patisserie/:subcategory" element={<PatisseriePage />} />

          <Route path="/technologie"              element={<PatisseriePage category="technologie" />} />
          <Route path="/technologie/:subcategory" element={<PatisseriePage />} />

          <Route path="/cuisine"              element={<PatisseriePage category="cuisine" />} />
          <Route path="/cuisine/:subcategory" element={<PatisseriePage />} />

          <Route path="/confiserie"              element={<PatisseriePage category="confiserie" />} />
          <Route path="/confiserie/:subcategory" element={<PatisseriePage />} />

          <Route path="/chocolaterie" element={<PatisseriePage category="chocolaterie" />} />

          <Route path="/alternative"              element={<PatisseriePage category="alternative" />} />
          <Route path="/alternative/:subcategory" element={<PatisseriePage />} />

          {/* --- COMMUNAUTÉ --- */}
          <Route path="/communaute" element={<><Seo title="Communauté | Pastry Power" description="Le forum Pastry Power : posez vos questions de pâtisserie et partagez vos réalisations." noindex /><CommunautePage /></>} />
          <Route path="/communaute/nouveau" element={<><Seo title="Nouveau message | Pastry Power" noindex /><NouveauPostPage /></>} />
          <Route path="/communaute/:postId" element={<><Seo title="Discussion | Communauté Pastry Power" noindex /><ForumPostPage /></>} />

          {/* --- 404 --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Publicité globale */}
      {showAd && (
        <div className="w-full max-w-4xl mx-auto my-8 px-4">
          <AdBanner />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;