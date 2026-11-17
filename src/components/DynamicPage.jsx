import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import RecipeLayout from './RecipeLayout';
import RelatedRecipes from './RelatedRecipes';
import Seo from './Seo';
import NotFoundPage from '../pages/NotFoundPage';
import { useAuth } from '../AuthContext';
import { findEntry } from '../data/hubs';

const recipeLoaders = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}',
]);

const techLoaders = import.meta.glob([
  '../pages/technologie/**/*.jsx',
]);

/** Aperçu limité + encart VIP, pour les fiches écrites en composant (technologie, tableaux). */
const PaywallPreview = ({ children, label }) => (
  <div className="relative bg-[#121212]">
    <div className="h-[180vh] overflow-hidden relative select-none">
      {children}
      <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-40 flex flex-col items-center justify-end pb-24 px-4 backdrop-blur-[3px]">
        <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group mt-auto">
          <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-3xl font-serif text-white mb-4">Contenu Réservé aux Membres VIP</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">{label}</p>
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

const DynamicPage = () => {
  const { id } = useParams();
  const currentId = id?.toLowerCase() || '';
  const { user, isPremium } = useAuth();

  const [pageData, setPageData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    setPageData(null);

    const entry = findEntry(currentId);

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
    return <NotFoundPage />;
  }

  const { mod, entry } = pageData;
  const isAuthorized = user && isPremium;
  const showPaywall = entry.isVip && !isAuthorized;

  // --- Rendu RECETTE (fiche de données) ---
  if (!entry.isTech && typeof mod.default !== 'function') {
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

  // --- Rendu COMPOSANT : fiche technologie ou recette en tableau ---
  const PageComponent = mod.default;
  const path = entry.isTech ? `/techno/${entry.id}` : `/recipe/${entry.id}`;
  const description = mod.recipeData?.description || entry.description;

  return (
    <>
      <Seo
        title={`${entry.title || 'Technologie'} | Pastry Power`}
        description={description}
        path={path}
        image={entry.image}
        type="article"
      />
      {showPaywall ? (
        <PaywallPreview
          label={entry.isTech
            ? 'Débloquez la suite de ce cours de technologie, ainsi que toutes nos recettes exclusives.'
            : 'Débloquez la suite de cette fiche, ainsi que toutes nos recettes exclusives.'}
        >
          <PageComponent />
        </PaywallPreview>
      ) : (
        <PageComponent />
      )}
      <RelatedRecipes
        id={entry.id}
        title={entry.isTech ? 'Autres fiches de technologie' : 'Dans la même famille'}
      />
    </>
  );
};

export default DynamicPage;
