import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Imports des composants
import Navigation from './components/Navigation';
import DynamicPage from './components/DynamicPage';
import FloatingBackButton from './components/FloatingBackButton';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <--- AJOUT ICI

// Imports sécurité
import ProtectedRoute from './ProtectedRoute'; 
import Login from './Login'; 

// 2. Imports des pages
import PatisseriePage from './pages/PatisseriePage'; 
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';
import VipPage from './pages/VipPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      {/* <--- AJOUT DU SCROLL TO TOP ICI */}
      <ScrollToTop />
      
      <Navigation />
      <FloatingBackButton />
      
      <main className="flex-grow">
        <Routes>
          {/* --- ACCUEIL --- */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vip" element={<VipPage />} />

          {/* --- RECETTE STANDARD --- */}
          <Route path="/recipe/:id" element={<DynamicPage />} />

          {/* --- RECETTE VIP --- */}
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
          <Route path="/a-propos" element={<AboutPage />} />

          {/* --- CATÉGORIES --- */}
          <Route path="/patisserie" element={<PatisseriePage category="patisserie" />} />
          <Route path="/patisserie/:subcategory" element={<PatisseriePage />} />

          <Route path="/technologie" element={<PatisseriePage category="technologie" />} />
          <Route path="/technologie/:subcategory" element={<PatisseriePage />} />

          <Route path="/cuisine" element={<PatisseriePage category="cuisine" />} />
          <Route path="/cuisine/:subcategory" element={<PatisseriePage />} />

          <Route path="/confiserie" element={<PatisseriePage category="confiserie" />} />
          <Route path="/confiserie/:subcategory" element={<PatisseriePage />} />

          <Route path="/chocolaterie" element={<PatisseriePage category="chocolaterie" />} />

          <Route path="/alternative" element={<PatisseriePage category="alternative" />} />
          <Route path="/alternative/:subcategory" element={<PatisseriePage />} />

          {/* --- 404 --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;