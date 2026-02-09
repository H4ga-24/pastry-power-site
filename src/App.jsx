import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Imports des composants
import Navigation from './components/Navigation';
import DynamicPage from './components/DynamicPage';
import FloatingBackButton from './components/FloatingBackButton';
import Footer from './components/Footer';

// 2. Imports des pages
import PatisseriePage from './pages/PatisseriePage'; 
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      {/* Barre de navigation haute */}
      <Navigation />
      
      {/* Bouton retour qui apparaît quand on scrolle ou change de page */}
      <FloatingBackButton />
      
      <main className="flex-grow">
        <Routes>
          {/* --- ACCUEIL --- */}
          <Route path="/" element={<LandingPage />} />

          {/* --- FICHE RECETTE STANDARD --- */}
          <Route path="/recipe/:id" element={<DynamicPage />} />

          {/* --- FICHE RECETTE VIP (Pour MemberSpace) --- */}
          {/* C'est ici que MemberSpace viendra bloquer l'accès si pas abonné */}
          <Route path="/vip/:id" element={<DynamicPage />} />

          {/* --- PAGES STATIQUES --- */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/a-propos" element={<AboutPage />} />

          {/* ========================================================
              SECTION PÂTISSERIE 
             ======================================================== */}
          <Route path="/patisserie" element={<PatisseriePage category="patisserie" />} />
          <Route path="/patisserie/:subcategory" element={<PatisseriePage />} />

          {/* ========================================================
              SECTION TECHNOLOGIE
             ======================================================== */}
          <Route path="/technologie" element={<PatisseriePage category="technologie" />} />
          <Route path="/technologie/:subcategory" element={<PatisseriePage />} />

          {/* ========================================================
              SECTION CUISINE
             ======================================================== */}
          <Route path="/cuisine" element={<PatisseriePage category="cuisine" />} />
          <Route path="/cuisine/:subcategory" element={<PatisseriePage />} />

          {/* ========================================================
              SECTION CONFISERIE
             ======================================================== */}
          <Route path="/confiserie" element={<PatisseriePage category="confiserie" />} />
          <Route path="/confiserie/:subcategory" element={<PatisseriePage />} />

          {/* ========================================================
              SECTION CHOCOLATERIE
             ======================================================== */}
          <Route path="/chocolaterie" element={<PatisseriePage category="chocolaterie" />} />

          {/* ========================================================
              SECTION ALTERNATIVE
             ======================================================== */}
          <Route path="/alternative" element={<PatisseriePage category="alternative" />} />
          <Route path="/alternative/:subcategory" element={<PatisseriePage />} />

          {/* --- PAGE 404 --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;