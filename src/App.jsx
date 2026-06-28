import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import CookieBanner from './components/CookieBanner';
import Navigation from './components/Navigation';
import DynamicPage from './components/DynamicPage';
import FloatingBackButton from './components/FloatingBackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './Login';
import AdBanner from './components/AdBanner';
import { useAuth } from './AuthContext';

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

const App = () => {
  const { isPremium } = useAuth();
  const location = useLocation();

  // Liste des pages où Google interdit d'afficher des publicités
  const noAdsRoutes = ['/login', '/mentions-legales', '/a-propos', '/vip', '/communaute'];
  // On affiche la pub uniquement si l'utilisateur n'est pas premium ET qu'il n'est pas sur une page interdite
  const showAd = !isPremium && !noAdsRoutes.includes(location.pathname);

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
          <Route path="/login"           element={<Login />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/vip"            element={<VipPage />} />

          {/* --- RECETTES ---
              IMPORTANT : toutes les recettes (libres ET vip) passent par DynamicPage.
              La protection freemium est gérée DANS DynamicPage / RecipeLayout
              via le flag isVip du catalog.js — pas au niveau du routeur.
              Cela permet à Google de crawler le contenu et valider AdSense.
          */}
          <Route path="/recipe/:id"          element={<DynamicPage />} />
          <Route path="/vip/technologie/:id" element={<DynamicPage />} />
          <Route path="/techno/:id"          element={<DynamicPage />} />
          {/* ⚠️  L'ancienne route /vip/:id avec <ProtectedRoute> a été supprimée
              car elle affichait une page vide aux crawlers → refus AdSense */}

          {/* --- PAGES STATIQUES --- */}
          <Route path="/mentions-legales"          element={<LegalPage />} />
          <Route path="/a-propos"                  element={<AboutPage />} />
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
          <Route path="/communaute" element={<CommunautePage />} />
          <Route path="/communaute/nouveau" element={<NouveauPostPage />} />
          <Route path="/communaute/:postId" element={<ForumPostPage />} />

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