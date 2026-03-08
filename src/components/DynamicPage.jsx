import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import RecipeLayout from './RecipeLayout';

// 🔥 1. LE SCANNER AUTOMATIQUE
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
  const currentId = (id || recipeId || path || "").toLowerCase().trim();

  // --- 1. RECHERCHE DE LA RECETTE ---
  let foundRecipe = null;

  for (const modulePath in recipeModules) {
    const module = recipeModules[modulePath];
    const data = module.default || module;
    
    // 🛡️ BOUCLIER ANTI-CRASH
    if (!data) continue; 

    const fileId = (data.id || "").toLowerCase().trim();
    
    // On récupère le vrai nom du fichier (ex: PainDeGene)
    const rawFileName = modulePath.split('/').pop().replace(/\.(js|jsx)$/, '');
    const fileNameLower = rawFileName.toLowerCase();
    
    // On met les tirets AVANT de tout passer en minuscules !
    const formattedFileName = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

    if (fileId === currentId || formattedFileName === currentId || fileNameLower === currentId) {
      foundRecipe = data;
      break;
    }
  }

  if (foundRecipe) {
    const safeRecipe = {
      ...foundRecipe,
      id: foundRecipe.id || currentId,
      subCategory: Array.isArray(foundRecipe.subCategory) 
        ? foundRecipe.subCategory.join(' • ') 
        : (foundRecipe.subCategory || ""),
      ingredients: foundRecipe.ingredients || [],
      steps: foundRecipe.steps || []
    };
    return <RecipeLayout recipe={safeRecipe} />;
  }

  // --- 2. RECHERCHE DE LA TECHNOLOGIE (Le bug était ici !) ---
  const techKey = Object.keys(techModules).find(key => {
    // 1. On garde les majuscules d'abord : SaccharosePage
    const rawFileName = key.split('/').pop().replace('.jsx', ''); 
    
    // 2. On teste la version tout attaché : saccharosepage
    const fileNameLower = rawFileName.toLowerCase(); 
    
    // 3. On met le tiret PUIS on met en minuscules : saccharose-page
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