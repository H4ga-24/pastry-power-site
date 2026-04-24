import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import RecipeLayout from './RecipeLayout';
import AdBanner from './AdBanner';
import { useAuth } from '../AuthContext';
import { catalog } from '../data/catalog';

// Globs SANS eager: true
const recipeLoaders = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}',
  '../pages/recipes/**/*.{js,jsx}',
]);

const techLoaders = import.meta.glob([
  '../pages/technologie/**/*.jsx',
]);

// ---------------------------------------------------------------

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentId = id?.toLowerCase() || '';
  const { user, isPremium } = useAuth();

  const [pageData, setPageData] = useState(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'found' | 'notfound'

  useEffect(() => {
    setStatus('loading');
    setPageData(null);

    // 1. Trouver l'entrée dans le catalogue
    const entry = catalog.find(item => item.id.toLowerCase() === currentId);

    if (!entry) {
      setStatus('notfound');
      return;
    }

    // 2. Trouver la bonne loader function
    const loaders = entry.isTech ? techLoaders : recipeLoaders;
    const loaderKey = Object.keys(loaders).find(k =>
      k.endsWith('/' + entry.moduleFile)
    );

    if (!loaderKey) {
      setStatus('notfound');
      return;
    }

    // 3. Charger le fichier à la demande
    loaders[loaderKey]()
      .then(mod => {
        setPageData({ mod, entry });
        setStatus('found');
      })
      .catch(() => setStatus('notfound'));
  }, [currentId]);

  // --- États intermédiaires ---
  if (status === 'loading') return null;

  if (status === 'notfound' || !pageData) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white font-serif text-2xl">
        La recette ou technologie est introuvable.
      </div>
    );
  }

  const { mod, entry } = pageData;

  // isVip vient du catalog.js — pas besoin de toucher les fichiers recettes
  const isVipContent = entry.isVip === true;
  const isAuthorized = isPremium;

  // --- Rendu Technologie ---
  if (entry.isTech) {
    const TechComponent = mod.default;

    // Mur visuel pour les pages techno VIP
    if (isVipContent && !isAuthorized) {
      const pageTitle = entry.title ? `${entry.title} | Pastry Power` : 'Pastry Power';
      const pageDescription = entry.description || "Découvrez nos recettes exclusives et cours de technologie sur Pastry Power.";

      return (
        <div className="relative bg-[#121212]">
          <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
          </Helmet>

          <div className="h-[180vh] overflow-hidden relative select-none">
            <TechComponent />

            <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-40 flex flex-col items-center justify-end pb-12 px-4 backdrop-blur-[3px]">
              <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group mt-auto">
                <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-serif text-white mb-4">Contenu Réservé aux Membres VIP</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Débloquez la suite de ce cours de technologie, ainsi que toutes nos recettes exclusives et fiches techniques.
                </p>

                <Link
                  to="/vip"
                  className="inline-block bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-white transition-colors mb-6"
                >
                  Devenir Membre VIP
                </Link>

                <div className="w-full bg-black/20 rounded-lg overflow-hidden py-4 mb-4">
                  <AdBanner />
                </div>

                <p className="mt-2 text-sm text-gray-500">
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

    // Techno libre ou VIP connecté
    const pageTitle = entry.title ? `${entry.title} | Pastry Power` : 'Pastry Power';
    const pageDescription = entry.description || "Découvrez nos recettes exclusives et cours de technologie sur Pastry Power.";

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>
        <TechComponent />
      </>
    );
  }

  // --- Rendu Recette ---
  // On construit safeRecipe en injectant isVip depuis le catalog
  // => RecipeLayout gère le paywall sur les étapes sans toucher les fichiers recettes
  let foundRecipeData;

  if (typeof mod.default === 'function') {
    // Composant React custom (ex: amarretti.js exporte un composant)
    const CustomRecipeComponent = mod.default;
    const pageTitle = entry.title ? `${entry.title} | Pastry Power` : 'Pastry Power';
    const pageDescription = entry.description || "Découvrez nos recettes exclusives sur Pastry Power.";

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>
        <CustomRecipeComponent />
      </>
    );
  }

  foundRecipeData = mod.recipeData || mod.default || mod;

  const safeRecipe = {
    ...foundRecipeData,
    id: foundRecipeData.id || currentId,
    // isVip injecté depuis catalog.js — c'est la clé qui évite de modifier
    // les 200+ fichiers recettes un par un
    isVip: isVipContent,
    subCategory: Array.isArray(foundRecipeData.subCategory)
      ? foundRecipeData.subCategory.join(' • ')
      : (foundRecipeData.subCategory || ''),
    ingredients: foundRecipeData.ingredients || [],
    steps: foundRecipeData.steps || [],
  };

  return <RecipeLayout recipe={safeRecipe} />;
};

export default DynamicPage;