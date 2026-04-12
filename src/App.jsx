import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import DynamicPage from './components/DynamicPage';
import FloatingBackButton from './components/FloatingBackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import AdBanner from './components/AdBanner';
import { useAuth } from './AuthContext';

import PatisseriePage from './pages/PatisseriePage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import VipPage from './pages/VipPage';

const App = () => {
  const { isPremium } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <ScrollToTop />
      <Navigation />
      <FloatingBackButton />

      <main className="flex-grow">
        <Routes>
          {/* --- ACCUEIL --- */}
          <Route path="/"      element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vip"   element={<VipPage />} />

          {/* --- RECETTES --- */}
          <Route path="/recipe/:id"          element={<DynamicPage />} />
          <Route path="/vip/technologie/:id" element={<DynamicPage />} />
          <Route path="/techno/:id"          element={<DynamicPage />} />
          <Route
            path="/vip/:id"
            element={
              <ProtectedRoute>
                <DynamicPage />
              </ProtectedRoute>
            }
          />

          {/* --- PAGES STATIQUES --- */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/a-propos"         element={<AboutPage />} />

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

          {/* --- 404 --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Publicité visible uniquement pour les non-VIP */}
      {!isPremium && (
        <div className="w-full max-w-4xl mx-auto my-8 px-4">
          <AdBanner />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;