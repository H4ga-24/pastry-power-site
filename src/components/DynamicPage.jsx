import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import RecipeLayout from './RecipeLayout';
import { useAuth } from '../AuthContext'; 

// 1. On remet eager: true pour que le site puisse lire vos fichiers instantanément
const recipeModules = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}', 
  '../pages/recipes/**/*.{js,jsx}'
], { eager: true });

const techModules = import.meta.glob([
  '../technologie/**/*.jsx', 
  '../pages/technologie/**/*.jsx'
], { eager: true });

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentId = id?.toLowerCase() || '';
  
  const { user, isPremium } = useAuth();

  // --- 1. RECHERCHE DE LA RECETTE ---
  const recipeKey = Object.keys(recipeModules).find(key => {
    const module = recipeModules[key];
    const data = module.recipeData || module.default || {};
    
    // 🔥 LA CORRECTION EST ICI : On cherche la recette par son vrai ID (recipeData.id), pas par le nom de fichier !
    if (data.id && data.id.toLowerCase() === currentId) {
      return true;
    }
    
    // Sécurité : On cherche aussi par nom de fichier au cas où l'ID n'est pas renseigné
    const rawFileName = key.split('/').pop().replace(/\.(js|jsx)$/, '');
    const formattedId = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return formattedId === currentId || rawFileName.toLowerCase() === currentId;
  });

  if (recipeKey) {
    const module = recipeModules[recipeKey];

    // SI C'EST UN COMPOSANT SUR-MESURE (Comme Mousses ou Pâte de fruits)
    if (typeof module.default === 'function') {
      const CustomRecipeComponent = module.default;
      return <CustomRecipeComponent />;
    }

    // SINON, C'EST UNE RECETTE CLASSIQUE
    const foundRecipeData = module.recipeData || module.default || module;
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
    const module = techModules[key];
    const data = module.recipeData || module.default || {};
    
    if (data.id && data.id.toLowerCase() === currentId) {
      return true;
    }

    const rawFileName = key.split('/').pop().replace('.jsx', ''); 
    const fileNameLower = rawFileName.toLowerCase(); 
    const formattedId = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); 
    return formattedId === currentId || fileNameLower === currentId;
  });

  if (techKey) {
    const module = techModules[techKey];
    const TechComponent = module.default; 
    
    // --- SYSTÈME FREEMIUM ---
    const isFreemiumRoute = location.pathname.includes('/vip/technologie');
    const isAuthorized = user && isPremium; 
    const showPaywall = isFreemiumRoute && !isAuthorized;

    if (showPaywall) {
      return (
        <div className="relative bg-[#121212]">
          <div className="h-[180vh] overflow-hidden relative select-none">
            <TechComponent />
            <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-40 flex flex-col items-center justify-end pb-24 px-4 backdrop-blur-[3px]">
              <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group mt-auto">
                <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-3xl font-serif text-white mb-4">Contenu Réservé aux Membres VIP</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Débloquez la suite de ce cours de technologie, ainsi que toutes nos recettes exclusives.
                </p>
                <Link to="/vip" className="inline-block bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-white transition-colors">
                  Devenir Membre VIP
                </Link>
                <p className="mt-6 text-sm text-gray-500">
                  Déjà membre ? <Link to="/login" className="text-[#D4AF37] hover:text-white transition-colors underline">Connectez-vous ici</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <TechComponent />;
  }

  // --- 3. RIEN TROUVÉ (ERREUR 404) ---
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white font-serif text-2xl">
      La recette ou technologie est introuvable.
    </div>
  );
};

export default DynamicPage;