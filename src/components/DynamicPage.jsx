import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import RecipeLayout from './RecipeLayout';

// 🔥 LE SCANNER AUTOMATIQUE (Lit les .js ET les .jsx)
const recipeModules = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}', 
  '../pages/recipes/**/*.{js,jsx}'
], { eager: true });

const techModules = import.meta.glob([
  '../technologie/**/*.jsx', 
  '../pages/technologie/**/*.jsx'
]);

const DynamicPage = () => {
  const { id, recipeId, path } = useParams(); 
  const currentId = (id || recipeId || path || "").toLowerCase().trim();

  let foundRecipeData = null;
  let CustomRecipeComponent = null;

  // --- 1. RECHERCHE DE LA RECETTE ---
  for (const modulePath in recipeModules) {
    const module = recipeModules[modulePath];
    const data = module.recipeData || module.default || module;
    
    // 🛡️ BOUCLIER ANTI-CRASH
    if (!data) continue; 

    const fileId = (data.id || "").toLowerCase().trim();
    const rawFileName = modulePath.split('/').pop().replace(/\.(js|jsx)$/, '');
    const fileNameLower = rawFileName.toLowerCase();
    const formattedFileName = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    if (fileId === currentId || formattedFileName === currentId || fileNameLower === currentId) {
      foundRecipeData = data;
      // Si le fichier se termine par .jsx, on le capture pour l'afficher en direct
      if (modulePath.endsWith('.jsx')) {
        CustomRecipeComponent = module.default;
      }
      break;
    }
  }

  // 🌟 L'EXCEPTION : Si c'est ton tableau sur-mesure (ex: Pates de fruits)
  if (CustomRecipeComponent) {
    return <CustomRecipeComponent />;
  }

  if (foundRecipeData) {
    const safeRecipe = {
      ...foundRecipeData,
      id: foundRecipeData.id || currentId,
      subCategory: Array.isArray(foundRecipeData.subCategory) 
        ? foundRecipeData.subCategory.join(' • ') 
        : (foundRecipeData.subCategory || ""),
      ingredients: foundRecipeData.ingredients || [],
      steps: foundRecipeData.steps || []
    };
    return <RecipeLayout recipe={safeRecipe} />;
  }

  // --- 2. RECHERCHE DE LA TECHNOLOGIE ---
  const techKey = Object.keys(techModules).find(key => {
    const rawFileName = key.split('/').pop().replace('.jsx', ''); 
    const fileNameLower = rawFileName.toLowerCase(); 
    const formattedId = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); 
    return formattedId === currentId || fileNameLower === currentId;
  });

  if (techKey) {
    const TechComponent = lazy(techModules[techKey]);
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-serif text-2xl">Chargement du cours...</div>}>
        <TechComponent />
      </Suspense>
    );
  }

  // --- 3. RIEN TROUVÉ (ERREUR 404) ---
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-serif mb-4 text-[#D4AF37]">Oups !</h1>
      <p className="text-gray-400">La page "{currentId}" est introuvable.</p>
    </div>
  );
};

export default DynamicPage;