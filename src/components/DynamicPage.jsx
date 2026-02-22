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
  const [notFound, setNotFound] = useState(false); // 👈 Nouvel état pour gérer les erreurs
  const recipeContentRef = useRef(null);

  useEffect(() => {
    const loadRecipe = async () => {
      console.log("🔍 Recherche de la recette :", id);
      setNotFound(false); // Reset
      let foundPath = null;

      // 1. Recherche du fichier (insensible à la casse)
      for (const path in modules) {
        // On nettoie le chemin pour comparer juste le nom du fichier
        const fileName = path.split('/').pop().replace('.jsx', '').toLowerCase();
        if (fileName === id.toLowerCase()) {
          foundPath = path;
          break;
        }
      }

      if (!foundPath) {
        console.error("❌ Recette introuvable pour l'ID :", id);
        setNotFound(true); // Arrête le chargement
        return;
      }

      console.log("✅ Fichier trouvé :", foundPath);

      try {
        // 2. Chargement du module
        const module = modules[foundPath];
        const Component = module.default;
        
        if (!Component) {
            console.error("❌ Le composant ne s'exporte pas correctement (default export manquant).");
            setNotFound(true);
            return;
        }

        setRecipeComponent(() => Component);

        const rawCode = rawModules[foundPath] || "";
        const exportedData = module.recipeData || {};
        
        // --- EXTRACTION ---
        const cleanText = (text) => text ? text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\(?=\s|\()/g, "").trim() : "";
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? cleanText(match[2]) : null;
        };

        const isTechFile = foundPath.includes('/technologie/');
        
        const title = exportedData.title || extractString('title', rawCode) || "Recette";
        const description = exportedData.description || extractString('description', rawCode) || "";
        const image = exportedData.image || extractString('image', rawCode) || "";
        
        const isVip = exportedData.isVip !== undefined 
            ? exportedData.isVip 
            : (!!rawCode.match(/(?:isVip|vip):\s*true/) || location.pathname.includes('/vip/'));

        // Extraction Ingrédients / Étapes
        let ingredients = [];
        let steps = [];

        // Cas A : Export (Nouveau)
        if (module.ingredients && Array.isArray(module.ingredients)) {
            ingredients = module.ingredients.map(ing => {
                if (typeof ing === 'string') return ing;
                return `${ing.name} ${ing.amount ? '(' + ing.amount + (ing.unit ? ' ' + ing.unit : '') + ')' : ''}`;
            });
        }
        if (module.steps && Array.isArray(module.steps)) {
            steps = module.steps.map(step => {
                if (typeof step === 'string') return step;
                return step.title ? `${step.title} : ${step.text}` : step.text;
            });
        }

        // Cas B : Fallback (Ancien)
        if (ingredients.length === 0 && !isTechFile) {
            let ingMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
            if (ingMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(ingMatch[1])) !== null) {
                    const name = extractString('name', match[1]);
                    if (name) ingredients.push(name);
                }
            } else {
               let liMatch; const r = /<li[^>]*>([\s\S]*?)<\/li>/g;
               while ((liMatch = r.exec(rawCode)) !== null) {
                 const t = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                 if (!t.includes('{') && t.length > 2) ingredients.push(cleanText(t));
               }
            }
        }

        if (steps.length === 0 && !isTechFile) {
            let stepMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
            if (stepMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(stepMatch[1])) !== null) {
                    const txt = extractString('text', match[1]);
                    if (txt) steps.push(txt);
                }
            } else {
               let sMatch; const r = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
               while ((sMatch = r.exec(rawCode)) !== null) steps.push(`${cleanText(sMatch[1])} : ${cleanText(sMatch[2].replace(/<[^>]+>/g, '').trim())}`);
            }
        }

        setExtractedData({ 
            title, description, image, isTech: isTechFile, isVip, ingredients, steps 
        });

      } catch (error) {
        console.error("💥 Erreur critique lors du chargement :", error);
        setNotFound(true);
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

  // --- GESTION DES ÉTATS DE CHARGEMENT ---

  // 1. Si auth charge encore ou si on cherche la recette
  if ((authLoading || !RecipeComponent) && !notFound) {
      return (
        <div className="h-screen bg-[#121212] flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#D4AF37]" />
            <p className="text-gray-500 text-sm animate-pulse">Chargement de la recette...</p>
        </div>
      );
  }

  // 2. Si la recette n'existe pas (404 interne)
  if (notFound) {
      return (
        <div className="h-screen bg-[#121212] flex flex-col items-center justify-center gap-6 p-4 text-center">
            <div className="bg-red-500/10 p-6 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl text-white font-serif">Recette introuvable</h2>
            <p className="text-gray-400 max-w-md">
                Impossible de trouver le fichier pour "{id}". Vérifiez l'URL ou revenez au menu.
            </p>
            <Link to="/patisserie">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                    Retour au catalogue
                </Button>
            </Link>
        </div>
      );
  }

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : TECHNOLOGIE ---
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
                            <h3 className="text-4xl font-serif text-white mb-4">Envie d'en savoir plus ?</h3>
                            <p className="text-gray-400 mb-10 text-lg">Contenu réservé aux membres VIP.</p>
                            {!user ? (
                                <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-16 hover:bg-white uppercase tracking-widest">Se connecter pour lire</Button></Link>
                            ) : (
                                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-16 hover:scale-105 transition-transform uppercase tracking-widest flex items-center justify-center gap-3"><Lock size={22} /> Débloquer</Button></a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
      );
  }

  // --- CAS 2 : RECETTE VIP BLOQUÉE ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 blur-2xl scale-110"><img src={extractedData.image} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-xl p-12 rounded-3xl border border-[#D4AF37]/20 shadow-2xl text-center">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">Recette Exclusive VIP</div>
            <p className="text-gray-300 mb-10 text-lg italic">Cette Masterclass est réservée aux membres.</p>
            {!user ? (
                <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-14 rounded-xl shadow-lg hover:bg-white">Se connecter</Button></Link>
            ) : (
                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer"><Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-14 rounded-xl shadow-lg hover:scale-105">Débloquer</Button></a>
            )}
        </div>
      </div>
    );
  }

  // --- CAS 3 : AFFICHAGE NORMAL ---
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData.title} | Pastry Power</title>
        <script type="application/ld+json">{generateStructuredData()}</script>
      </Helmet>

      <div ref={recipeContentRef}><RecipeComponent /></div>
      <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
      
      {extractedData.steps && extractedData.steps.length > 0 && (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} onClick={() => setIsCookingMode(true)} className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-lg flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-colors group">
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