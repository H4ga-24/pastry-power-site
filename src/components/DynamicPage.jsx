import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PlayCircle, Lock, Crown, Loader2, BookOpen, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

// Imports internes
import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

// Import des modules
const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, import: 'default' });
const rawModules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, query: '?raw', import: 'default' });

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { user, isPremium, loading: authLoading } = useAuth();

  const [RecipeComponent, setRecipeComponent] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const recipeContentRef = useRef(null);

  useEffect(() => {
    const loadRecipe = async () => {
      setNotFound(false);
      let foundPath = null;

      // 1. Recherche du fichier
      for (const path in modules) {
        const fileName = path.split('/').pop().replace('.jsx', '').toLowerCase();
        if (fileName === id.toLowerCase()) {
          foundPath = path;
          break;
        }
      }

      if (!foundPath) {
        console.error("❌ Fichier introuvable pour :", id);
        setNotFound(true);
        return;
      }

      const module = modules[foundPath];
      const Component = module.default;

      if (!Component) {
          setNotFound(true);
          return;
      }

      setRecipeComponent(() => Component);

      // --- ANALYSE DES DONNÉES ---
      const rawCode = rawModules[foundPath] || "";
      const exportedData = module.recipeData || {};
      
      // ✅ NOUVELLE FONCTION DE NETTOYAGE RENFORCÉE
      const cleanText = (text) => {
        if (!text) return "";
        return text
          .replace(/\\'/g, "'")   // Remplace \' par '
          .replace(/\\"/g, '"')   // Remplace \" par "
          .replace(/\\n/g, " ")   // Enlève les sauts de ligne
          .replace(/\s+/g, " ")   // Enlève les doubles espaces
          .trim();
      };
      
      // Regex pour extraire les strings simples
      const extractFromObject = (objName, key) => {
          const regex = new RegExp(`${objName}\\s*=\\s*{[\\s\\S]*?${key}:\\s*(["'])((?:\\\\.|[^\\\\])*?)\\1`);
          const match = rawCode.match(regex);
          return match ? cleanText(match[2]) : null;
      };

      const isTechFile = foundPath.includes('/technologie/');
      
      const title = exportedData.title || extractFromObject('recipeData', 'title') || id;
      const description = exportedData.description || extractFromObject('recipeData', 'description') || "";
      const image = exportedData.image || extractFromObject('recipeData', 'image') || "";
      
      const isVip = exportedData.isVip !== undefined 
          ? exportedData.isVip 
          : (!!rawCode.match(/(?:isVip|vip):\s*true/) || location.pathname.includes('/vip/'));

      // --- EXTRACTION INGRÉDIENTS (REGEX AMÉLIORÉE) ---
      let ingredients = [];
      const ingBlockMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
      
      if (ingBlockMatch) {
          const content = ingBlockMatch[1];
          
          // 🛑 C'EST ICI LA CORRECTION MAJEURE 🛑
          // On utilise (?:\\.|[^\\\\])*? au lieu de .*? pour capturer les apostrophes échappées
          const itemRegex = /name:\s*(["'])((?:\\.|[^\\\\])*?)\1.*?amount:\s*(\d+(?:\.\d+)?|["'].*?["']).*?unit:\s*(["'])((?:\\.|[^\\\\])*?)\4/g;
          
          let match;
          while ((match = itemRegex.exec(content)) !== null) {
              const name = cleanText(match[2]); // On nettoie le nom
              const amount = match[3].replace(/["']/g, ""); 
              const unit = cleanText(match[5]); // On nettoie l'unité
              
              ingredients.push(`${name} (${amount} ${unit})`);
          }
          
          // Fallback simple si le regex complexe échoue
          if (ingredients.length === 0) {
             const simpleNameRegex = /name:\s*(["'])((?:\\.|[^\\\\])*?)\1/g;
             while ((match = simpleNameRegex.exec(content)) !== null) {
                 ingredients.push(cleanText(match[2]));
             }
          }
      }

      // --- EXTRACTION ÉTAPES ---
      let steps = [];
      const stepBlockMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
      if (stepBlockMatch) {
          const content = stepBlockMatch[1];
          // Même correction ici pour le texte des étapes
          const textRegex = /text:\s*(["'])((?:\\.|[^\\\\])*?)\1/g;
          let match;
          while ((match = textRegex.exec(content)) !== null) steps.push(cleanText(match[2]));
      }

      setExtractedData({ 
          title, description, image, isTech: isTechFile, isVip, ingredients, steps 
      });
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id, location.pathname]);

  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/", "@type": "Recipe", "name": extractedData.title, "image": [extractedData.image], "description": extractedData.description, "author": { "@type": "Person", "name": "Pastry Power" }, "recipeIngredient": extractedData.ingredients, "recipeInstructions": extractedData.steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "text": s }))
    });
  };

  if (notFound) return (
    <div className="h-screen bg-[#121212] flex flex-col items-center justify-center text-white gap-4">
        <AlertTriangle className="w-12 h-12 text-red-500" />
        <h2 className="text-xl font-bold">Recette introuvable</h2>
        <p className="text-gray-400">Le fichier "{id}" n'a pas été trouvé.</p>
        <Link to="/patisserie"><Button variant="outline" className="border-[#D4AF37] text-[#D4AF37]">Retour</Button></Link>
    </div>
  );

  if (!RecipeComponent || authLoading) return <div className="h-screen bg-[#121212] flex items-center justify-center"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : TECHNO ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212]">
            <Helmet><title>{extractedData.title} | Pastry Power</title></Helmet>
            <div className={`relative w-full ${isLocked ? 'max-h-[180vh] overflow-hidden' : ''}`}>
                <div ref={recipeContentRef}><RecipeComponent /></div>
                <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
                {isLocked && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-end pb-32 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent">
                        <div className="text-center p-8 w-full max-w-xl">
                            <Crown className="w-20 h-20 text-[#D4AF37] mx-auto mb-6" />
                            <h3 className="text-4xl font-serif text-white mb-4">Contenu Expert</h3>
                            <p className="text-gray-400 mb-10 text-lg">Connectez-vous pour lire la suite.</p>
                            {!user ? (
                                <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-16 hover:bg-white uppercase tracking-widest">Se connecter pour lire</Button></Link>
                            ) : (
                                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-16 flex items-center justify-center gap-3"><Lock size={22} /> Débloquer</Button></a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
      );
  }

  // --- CAS 2 : RECETTE VIP ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 relative overflow-hidden">
        {extractedData.image && <div className="absolute inset-0 z-0 opacity-20 blur-2xl scale-110"><img src={extractedData.image} alt="" className="w-full h-full object-cover" /></div>}
        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-xl p-12 rounded-3xl border border-[#D4AF37]/20 shadow-2xl text-center">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">Recette Exclusive VIP</div>
            {!user ? (
                <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-14 rounded-xl shadow-lg hover:bg-white">Se connecter</Button></Link>
            ) : (
                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-14 rounded-xl shadow-lg">Débloquer (4.90€)</Button></a>
            )}
        </div>
      </div>
    );
  }

  // --- CAS 3 : ACCÈS LIBRE ---
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
      
      {extractedData.steps && extractedData.steps.length > 0 && (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => setIsCookingMode(true)} className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-lg flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-colors group">
          <PlayCircle size={24} /><span className="text-sm">Mode Cuisine</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isCookingMode && <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;