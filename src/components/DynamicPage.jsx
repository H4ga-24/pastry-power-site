import React, { lazy, Suspense } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import RecipeLayout from './RecipeLayout';
import { useAuth } from '../AuthContext'; // Import de ton système d'authentification

// --- IMPORT DES FICHIERS ---
const recipeModules = import.meta.glob([
  '../data/recipes/**/*.{js,jsx}', 
  '../pages/recipes/**/*.{js,jsx}'
], { eager: true });

const techModules = import.meta.glob([
  '../technologie/**/*.jsx', 
  '../pages/technologie/**/*.jsx'
]);

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentId = id?.toLowerCase() || '';
  
  // Récupération du statut de l'utilisateur depuis ton AuthContext
  const { user, isPremium } = useAuth();

  // 1. --- RECHERCHE DE LA RECETTE ---
  const recipeKey = Object.keys(recipeModules).find(key => {
    const rawFileName = key.split('/').pop().replace(/\.(js|jsx)$/, '');
    const formattedId = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return formattedId === currentId || rawFileName.toLowerCase() === currentId;
  });

  if (recipeKey) {
    const module = recipeModules[recipeKey];
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

  // 2. --- RECHERCHE DE LA TECHNOLOGIE ---
  const techKey = Object.keys(techModules).find(key => {
    const rawFileName = key.split('/').pop().replace('.jsx', ''); 
    const fileNameLower = rawFileName.toLowerCase(); 
    const formattedId = rawFileName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); 
    return formattedId === currentId || fileNameLower === currentId;
  });

  if (techKey) {
    const TechComponent = lazy(techModules[techKey]);
    
    // --- SYSTÈME FREEMIUM (ARTICLE FLOU) ---
    // On vérifie si l'adresse web contient "/vip/technologie"
    const isFreemiumRoute = location.pathname.includes('/vip/technologie');
    
    // Autorisé uniquement si connecté ET Premium
    const isAuthorized = user && isPremium; 

    // Si c'est une route Freemium et que le visiteur n'est pas autorisé, on affiche le cadenas
    const showPaywall = isFreemiumRoute && !isAuthorized;

    return (
      <Suspense fallback={<div className="min-h-screen bg-[#121212] flex items-center justify-center text-[#D4AF37] font-serif text-2xl">Chargement du cours...</div>}>
        {showPaywall ? (
          <div className="relative bg-[#121212]">
            {/* MODIFICATION ICI : On passe à 180vh pour laisser le lecteur scroller et lire l'introduction */}
            <div className="h-[180vh] overflow-hidden relative select-none">
              
              {/* Le cours de technologie est rendu normalement en fond */}
              <TechComponent />
              
              {/* MODIFICATION ICI : Le dégradé fait 80vh, il floutera donc progressivement à partir du premier scroll */}
              <div className="absolute bottom-0 left-0 w-full h-[80vh] bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent z-40 flex flex-col items-center justify-end pb-24 px-4 backdrop-blur-[3px]">
                
                {/* La boîte VIP qui invite à s'abonner (reactive aux clics) */}
                <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl relative overflow-hidden group select-auto pointer-events-auto mt-auto">
                  <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Lock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="text-3xl font-serif text-white mb-4">Contenu Réservé aux Membres VIP</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Débloquez la suite de ce cours de technologie, ainsi que toutes nos recettes exclusives, le mode cuisine et nos outils professionnels.
                  </p>
                  
                  <Link 
                    to="/vip" 
                    className="inline-block bg-[#D4AF37] text-black font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    Devenir Membre VIP
                  </Link>
                  
                  <p className="mt-6 text-sm text-gray-500">
                    Déjà membre ? <Link to="/login" className="text-[#D4AF37] hover:text-white transition-colors underline">Connectez-vous ici</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* Si VIP ou si c'est une page gratuite, on affiche l'article complet */
          <TechComponent />
        )}
      </Suspense>
    );
  }

  // 3. --- RIEN TROUVÉ (ERREUR 404) ---
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white font-serif text-2xl">
      La recette ou technologie est introuvable.
    </div>
  );
};

export default DynamicPage;