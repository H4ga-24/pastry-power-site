import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PlayCircle, Lock, Crown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true });
const rawModules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, query: '?raw', import: 'default' });

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { user, isPremium, loading: authLoading } = useAuth();

  const [RecipeComponent, setRecipeComponent] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const recipeContentRef = useRef(null);

  useEffect(() => {
    const loadRecipe = async () => {
      let foundPath = null;
      for (const path in modules) {
        // On vérifie si le nom du fichier correspond à l'ID
        if (path.toLowerCase().endsWith(`/${id.toLowerCase()}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      if (foundPath) {
        const module = modules[foundPath];
        
        // Comme on a enlevé "import: default", le composant est dans module.default
        setRecipeComponent(() => module.default);

        const rawCode = rawModules[foundPath] || "";
        // On récupère les données exportées nommées
        const exportedData = module.recipeData || {};
        
        const cleanText = (text) => text ? text.replace(/\\'/g, "'").replace(/\\"/g, '"').trim() : "";
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? cleanText(match[2]) : null;
        };

        const isTechFile = foundPath.includes('/technologie/');
        
        const title = exportedData.title || extractString('title', rawCode) || id;
        const description = exportedData.description || extractString('description', rawCode) || "";
        const image = exportedData.image || extractString('image', rawCode) || "";
        
        const isVip = exportedData.isVip !== undefined 
            ? exportedData.isVip 
            : (rawCode.includes('isVip: true') || rawCode.includes('vip: true') || location.pathname.includes('/vip/'));

        // On récupère les ingrédients et étapes
        let ingredients = module.ingredients || [];
        let steps = module.steps || [];

        // Fallback si ce sont des vieux fichiers sans exports
        if (ingredients.length === 0 && !isTechFile) {
            // ... (ton ancienne logique de regex pour les vieux fichiers peut rester ici)
        }

        setExtractedData({ 
            title, description, image, isTech: isTechFile, isVip, ingredients, steps 
        });
      }
    };
    loadRecipe();
    window.scrollTo(0, 0);
  }, [id, location.pathname]);

  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/", "@type": "Recipe", "name": extractedData.title, "image": [extractedData.image], "description": extractedData.description, "author": { "@type": "Person", "name": "Pastry Power" }, "recipeIngredient": extractedData.ingredients, "recipeInstructions": extractedData.steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "text": typeof s === 'string' ? s : s.text }))
    });
  };

  if (!RecipeComponent || authLoading) return <div className="h-screen bg-[#121212] flex items-center justify-center"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : TECHNOLOGIE (Mode Aperçu Long 250vh) ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212]">
            <Helmet><title>{extractedData.title} | Pastry Power</title></Helmet>

            <div className={`relative w-full ${isLocked ? 'max-h-[180vh] overflow-hidden' : ''}`}> {/* J'ai mis 180vh, 250vh c'est parfois trop long si le cours est court */}
                
                <div ref={recipeContentRef}>
                    <RecipeComponent />
                </div>
                
                {/* On scanne le glossaire même si c'est bloqué (sur la partie visible) */}
                <GlossaryScanner targetRef={recipeContentRef} trigger={id} />

                {isLocked && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-end pb-32 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent">
                        <div className="text-center p-8 w-full max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <Crown className="w-20 h-20 text-[#D4AF37] mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                            <h3 className="text-4xl font-serif text-white mb-4">Envie d'en savoir plus ?</h3>
                            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                                L'essentiel est là, mais le plus important arrive : schémas techniques, chimie des ingrédients et conseils de chef.
                            </p>
                            
                            {!user ? (
                                <Link to="/login">
                                    <Button className="w-full bg-[#D4AF37] text-black font-bold h-16 text-xl hover:bg-white uppercase tracking-tighter shadow-2xl transition-all">
                                        Se connecter pour lire
                                    </Button>
                                </Link>
                            ) : (
                                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-16 text-xl hover:scale-105 transition-transform uppercase tracking-tighter shadow-2xl flex items-center justify-center gap-3">
                                        <Lock size={22} /> Débloquer la fiche complète
                                    </Button>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
      );
  }

  // --- CAS 2 : RECETTES VIP (Blocage Total Classique) ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Fond flouté de l'image de la recette */}
        <div className="absolute inset-0 z-0 opacity-20 blur-2xl scale-110">
            <img src={extractedData.image} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-xl p-12 rounded-3xl border border-[#D4AF37]/20 shadow-2xl text-center animate-in fade-in zoom-in duration-500">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">Recette Exclusive VIP</div>
            <p className="text-gray-300 mb-10 text-lg italic">"Les secrets de cette recette sont réservés aux membres du club."</p>
            
            {!user ? (
                <Link to="/login">
                    <Button className="w-full bg-[#D4AF37] text-black font-bold h-14 rounded-xl shadow-lg hover:bg-white transition-colors">
                        Se connecter
                    </Button>
                </Link>
            ) : (
                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-14 rounded-xl shadow-lg hover:scale-105 transition-transform">
                        Débloquer l'accès (4.90€)
                    </Button>
                </a>
            )}
        </div>
      </div>
    );
  }

  // --- CAS 3 : ACCÈS LIBRE (Recette Standard ou VIP débloqué) ---
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData.title} | Pastry Power</title>
        <script type="application/ld+json">{generateStructuredData()}</script>
      </Helmet>

      <div ref={recipeContentRef}>
        <RecipeComponent />
      </div>

      <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
      
      {extractedData.steps.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsCookingMode(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-lg flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-colors group"
        >
          <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm">Mode Cuisine</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isCookingMode && <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;