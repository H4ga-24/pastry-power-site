import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../data/recipes';
import RecipeLayout from './RecipeLayout';

// On prépare le chemin vers tes pages techno (sans les charger inutilement au démarrage)
const techModules = import.meta.glob('../technologie/**/*.jsx');

const DynamicPage = () => {
  const { id, recipeId, path } = useParams(); 
  const currentId = id || recipeId || path;

  // 1. On cherche d'abord si c'est une nouvelle recette propre
  const recipe = recipes.find((r) => r.id === currentId);

  if (recipe) {
    return <RecipeLayout recipe={recipe} />;
  }

  // 2. Si ce n'est pas une recette, on regarde si c'est une page Technologie
  const techKey = Object.keys(techModules).find(key => {
    const fileName = key.split('/').pop().replace('.jsx', '');
    const formattedId = fileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return formattedId === currentId || fileName === currentId;
  });

  if (techKey) {
    // On charge le composant React uniquement quand l'utilisateur clique dessus
    const TechComponent = lazy(techModules[techKey]);
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-serif text-2xl">Chargement...</div>}>
        <TechComponent />
      </Suspense>
    );
  }

  // 3. Si on ne trouve vraiment rien
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-serif mb-4 text-[#D4AF37]">Oups !</h1>
      <p className="text-gray-400">Cette page n'existe pas ou a été déplacée.</p>
    </div>
  );
};

export default DynamicPage;