import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import LandingPage from '@/pages/LandingPage';
import ModeleRecette from '@/pages/ModeleRecette';
import PlaceholderPage from '@/components/PlaceholderPage';
import PatisseriePage from '@/pages/PatisseriePage';

// Import de ton nouveau Template Unique
import RecipePage from './pages/RecipePage';

// Main Pages
import TechnologiePage from '@/pages/TechnologiePage';

// Categories Pages
import BiscuitsPage from '@/pages/categories/BiscuitsPage';
import PatesPage from '@/pages/categories/PatesPage';
import CremesPage from '@/pages/categories/CremesPage';
import GlacagesPage from '@/pages/categories/GlacagesPage';
import MoussesPage from '@/pages/categories/MoussesPage';
import InsertsPage from '@/pages/categories/InsertsPage';
import CremeuxPage from '@/pages/categories/CremeuxPage';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212]">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* --- NOUVELLE ROUTE DYNAMIQUE --- */}
          {/* Cette ligne permet d'afficher n'importe quelle recette de ton fichier data */}
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          
          {/* Tes autres routes statiques */}
          <Route path="/technologie" element={<TechnologiePage />} />
          <Route path="/patisserie" element={<PatisseriePage />} />
          <Route path="/patisserie/bases/biscuits" element={<BiscuitsPage />} />
          <Route path="/patisserie/bases/pates" element={<PatesPage />} />
          <Route path="/patisserie/bases/cremes" element={<CremesPage />} />
          <Route path="/patisserie/bases/glacages" element={<GlacagesPage />} />
          <Route path="/patisserie/bases/mousses" element={<MoussesPage />} />
          <Route path="/patisserie/bases/inserts" element={<InsertsPage />} />
          <Route path="/patisserie/bases/cremeux" element={<CremeuxPage />} />

          {/* Catch-all */}
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
