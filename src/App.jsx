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
      <Navigation />
      
      {/* BOUTON RETOUR FLOTTANT */}
      <FloatingBackButton />
      
      <main className="flex-grow">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<LandingPage />} />

          {/* Page de recette individuelle (avec Mode Cuisine auto) */}
          <Route path="/recipe/:id" element={<DynamicPage />} />

          {/* Pages "Statiques" */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/a-propos" element={<AboutPage />} />

          {/* Routes Catégories Principales */}
          <Route path="/patisserie" element={<PatisseriePage category="root" />} />
          <Route path="/technologie" element={<PatisseriePage category="technologie" />} />
          <Route path="/confiserie" element={<PatisseriePage category="confiserie" />} />
          <Route path="/cuisine" element={<PatisseriePage category="cuisine" />} />
          
          {/* Chocolaterie : On le dirige aussi vers PatisseriePage, qui va le traiter comme une liste */}
          <Route path="/chocolaterie" element={<PatisseriePage category="chocolaterie" />} />

          {/* Routes dynamiques pour les sous-dossiers */}
          <Route path="/patisserie/:category" element={<PatisseriePage />} />
          <Route path="/:folder/:category" element={<PatisseriePage />} />
          
          {/* Route 404 (Doit être en dernier) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;