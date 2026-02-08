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

          {/* --- FICHE RECETTE DYNAMIQUE --- */}
          <Route path="/recipe/:id" element={<DynamicPage />} />

          {/* --- PAGES STATIQUES --- */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/a-propos" element={<AboutPage />} />

          {/* --- ROUTES DES CATÉGORIES PRINCIPALES (ROOT) --- */}
          {/* Ces routes affichent toutes les recettes de la catégorie parente */}
          <Route path="/patisserie" element={<PatisseriePage category="root" />} />
          <Route path="/alternative" element={<PatisseriePage category="alternative" />} />
          
          {/* Routes directes pour les autres onglets du menu */}
          <Route path="/chocolaterie" element={<PatisseriePage category="chocolaterie" />} />

          {/* --- ROUTES DYNAMIQUES (SOUS-CATÉGORIES) --- */}
          
          {/* Gère /patisserie/tarte, /patisserie/mousse, /patisserie/technologie etc. */}
          <Route path="/patisserie/:category" element={<PatisseriePage />} />
          
          {/* Gère /alternative/sans-gluten, /alternative/vegetal etc. */}
          <Route path="/alternative/:category" element={<PatisseriePage />} />

          {/* --- CAS PARTICULIERS DU MENU --- */}
          {/* Si tu as des liens qui ne commencent pas par /patisserie/ ou /alternative/ */}
          <Route path="/:folder/:category" element={<PatisseriePage />} />
          
          {/* --- PAGE 404 --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;