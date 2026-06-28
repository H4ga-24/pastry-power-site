import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import RecipeLayout from './RecipeLayout';
import { useAuth } from '../AuthContext';
import { catalog } from '../data/catalog';

const recipeLoaders = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}',
  '../pages/recipes/**/*.{js,jsx}',
]);

const techLoaders = import.meta.glob([
  '../pages/technologie/**/*.jsx',
]);

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentId = id?.toLowerCase() || '';
  const { user, isPremium } = useAuth();

  const [pageData, setPageData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    setPageData(null);

    const entry = catalog.find(item => item.id.toLowerCase() === currentId);

    if (!entry) {
      setStatus('notfound');
      return;
    }

    const loaders = entry.isTech ? techLoaders : recipeLoaders;
    const loaderKey = Object.keys(loaders).find(k =>
      k.endsWith('/' + entry.moduleFile)
    );

    if (!loaderKey) {
      setStatus('notfound');
      return;
    }

    loaders[loaderKey]()
      .then(mod => {
        setPageData({ mod, entry });
        setStatus('found');
      })
      .catch(() => setStatus('notfound'));
  }, [currentId]);

  if (status === 'loading') {
    return null;
  }

  if (status === 'notfound' || !pageData) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white font-serif text-2xl">
        La recette ou technologie est introuvable.
      </div>
    );
  }

  const { mod, entry } = pageData;

  // --- Rendu RECETTE ---
  if (!entry.isTech) {
    if (typeof mod.default === 'function') {
      const CustomRecipeComponent = mod.default;
      return <CustomRecipeComponent />;
    }

    const foundRecipeData = mod.recipeData || mod.default || mod;
    const safeRecipe = {
      ...foundRecipeData,
      id: foundRecipeData.id || currentId,
      isVip: entry.isVip,
      subCategory: Array.isArray(foundRecipeData.subCategory)
        ? foundRecipeData.subCategory.join(' • ')
        : (foundRecipeData.subCategory || ''),
      ingredients: foundRecipeData.ingredients || [],
      steps: foundRecipeData.steps || [],
    };
    return <RecipeLayout recipe={safeRecipe} />;
  }

  // --- Rendu TECHNOLOGIE ---
  const TechComponent = mod.default;
  const isFreemiumRoute = location.pathname.includes('/vip/technologie');
  const isAuthorized = user && isPremium;
  const showPaywall = isFreemiumRoute && !isAuthorized;

  if (showPaywall) {
    return (
      <div className="relative bg-[#121212]">
        <Helmet>
          <title>{entry.title || "Technologie"} | Pastry Power</title>
        </Helmet>
        <div className="h-[180vh] overflow-hidden relative select-none">
          <TechComponent />
          <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-40 flex flex-col items-center justify-end pb-24 px-4 backdrop-blur-[3px]">
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group mt-auto">
              <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-3xl font-serif text-white mb-4">Contenu Réservé aux Membres VIP</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Débloquez la suite de ce cours de technologie, ainsi que toutes nos recettes exclusives.
              </p>
              <Link
                to="/vip"
                className="inline-block bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-white transition-colors"
              >
                Devenir Membre VIP
              </Link>
              <p className="mt-6 text-sm text-gray-500">
                Déjà membre ?{' '}
                <Link to="/login" className="text-[#D4AF37] hover:text-white transition-colors underline">
                  Connectez-vous ici
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{entry.title || "Technologie"} | Pastry Power</title>
      </Helmet>
      <TechComponent />
    </>
  );
};

export default DynamicPage;