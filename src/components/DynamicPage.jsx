import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import RecipeLayout from './RecipeLayout';

// 🔥 1. LE SCANNER AUTOMATIQUE (Remplace l'import { recipes } qui causait le crash)
const recipeModules = import.meta.glob([
  '../data/recipes/**/*.js', 
  '../pages/recipes/**/*.js'
], { eager: true });

const techModules = import.meta.glob([
  '../technologie/**/*.jsx', 
  '../pages/technologie/**/*.jsx'
]);

const DynamicPage = () => {
  const { id, recipeId, path } = useParams(); 
  // On met en minuscules pour éviter les bugs liés aux majuscules
  const currentId = (id || recipeId || path || "").toLowerCase().trim();

  // --- 1. RECHERCHE DE LA RECETTE ---
  let foundRecipe = null;

  for (const modulePath in recipeModules) {
    const module = recipeModules[modulePath];
    const data = module.default || module;
    
    // 🛡️ LE BOUCLIER ANTI-CRASH : Si le fichier est vide, on l'ignore sans crasher !
    if (!data) continue; 

    const fileId = (data.id || "").toLowerCase().trim();
    const fileName = modulePath.split('/').pop().replace(/\.(js|jsx)$/, '').toLowerCase();
    const formattedFileName = fileName.replace(/([a-z])([A-Z])/g, '$1-$2');

    if (fileId === currentId || formattedFileName === currentId || fileName === currentId) {
      foundRecipe = data;
      break;
    }
  }

  if (foundRecipe) {
    // 🛡️ 2ème BOUCLIER : On s'assure que le composant a tout ce qu'il faut
    const safeRecipe = {
      ...foundRecipe,
      id: foundRecipe.id || currentId,
      // On convertit le tableau subCategory en texte pour éviter de faire planter ton RecipeLayout
      subCategory: Array.isArray(foundRecipe.subCategory) 
        ? foundRecipe.subCategory.join(' • ') 
        : (foundRecipe.subCategory || ""),
    };
    return <RecipeLayout recipe={safeRecipe} />;
  }

  // --- 2. RECHERCHE DE LA TECHNOLOGIE ---
  const techKey = Object.keys(techModules).find(key => {
    const fileName = key.split('/').pop().replace('.jsx', '').toLowerCase();
    const formattedId = fileName.replace(/([a-z])([A-Z])/g, '$1-$2');
    return formattedId === currentId || fileName === currentId;
  });

  if (techKey) {
    const TechComponent = lazy(techModules[techKey]);
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-serif text-2xl">Chargement...</div>}>
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