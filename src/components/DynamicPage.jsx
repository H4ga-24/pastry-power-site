import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { PlayCircle, Lock, Crown, Loader2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

// Imports
import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

// Import modules
const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, import: 'default' });
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
      // Recherche insensible à la casse
      for (const path in modules) {
        if (path.toLowerCase().endsWith(`/${id.toLowerCase()}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      if (foundPath) {
        const module = modules[foundPath];
        const Component = module.default;
        setRecipeComponent(() => Component);

        const rawCode = rawModules[foundPath] || "";
        const exportedData = module.recipeData || {};
        
        // --- 1. EXTRACTION DES DONNÉES DE BASE ---
        
        // Fonction de secours (Regex) pour les vieux fichiers
        const cleanText = (text) => text ? text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\(?=\s|\()/g, "").trim() : "";
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? cleanText(match[2]) : null;
        };

        const isTechFile = foundPath.includes('/technologie/');
        
        const title = exportedData.title || extractString('title', rawCode) || "Recette";
        const description = exportedData.description || extractString('description', rawCode) || "";
        const image = exportedData.image || extractString('image', rawCode) || "";
        
        // Détection VIP : soit dans l'export, soit dans le texte, soit via l'URL
        const isVip = exportedData.isVip !== undefined 
            ? exportedData.isVip 
            : (!!rawCode.match(/(?:isVip|vip):\s*true/) || location.pathname.includes('/vip/'));

        // --- 2. EXTRACTION DES INGRÉDIENTS & ÉTAPES (MODE CUISINE) ---
        
        let ingredients = [];
        let steps = [];

        // Cas A : Données exportées propres (Nouveau format)
        if (module.ingredients && Array.isArray(module.ingredients)) {
            // On convertit les objets en chaînes lisibles pour le Mode Cuisine
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

        // Cas B : Fallback Regex (Vieux fichiers Hostinger)
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
               // Fallback ultime (<li>)
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
               // Fallback ultime (texte après <h3>)
               let sMatch; const r = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
               while ((sMatch = r.exec(rawCode)) !== null) steps.push(`${cleanText(sMatch[1])} : ${cleanText(sMatch[2].replace(/<[^>]+>/g, '').trim())}`);
            }
        }

        setExtractedData({ 
            title, description, image, isTech: isTechFile, isVip, ingredients, steps 
        });
      }
    };
    loadRecipe();
    window.scrollTo(0, 0);
  }, [id, location.pathname]);

  // SEO
  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/", "@type": "Recipe", "name": extractedData.title, "image": [extractedData.image], "description": extractedData.description, "author": { "@type": "Person", "name": "Pastry Power" }, "recipeIngredient": extractedData.ingredients, "recipeInstructions": extractedData.steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "text": s }))
    });
  };

  if (!RecipeComponent || authLoading) return <div className="h-screen bg-[#121212] flex items-center justify-center"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;

  const isLocked = extractedData?.isVip && !isPremium;

  // --- 1. AFFICHAGE TECHNO (Mode Journal / Long Scroll) ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212]">
            <Helmet><title>{extractedData.title} | Pastry Power</title></Helmet>

            <div className={`relative w-full ${isLocked ? 'max-h-[180vh] overflow-hidden' : ''}`}>
                
                {/* On affiche le composant (Titre + Texte) */}
                <div ref={recipeContentRef}>
                    <RecipeComponent />
                </div>
                
                {/* Scanner Glossaire sur la partie visible */}
                <GlossaryScanner targetRef={recipeContentRef} trigger={id} />

                {/* Masque dégradé si bloqué */}
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

  // --- 2. AFFICHAGE RECETTE VIP (Blocage Total) ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Image de fond floutée */}
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

  // --- 3. AFFICHAGE RECETTE STANDARD (Libre) ---
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
      
      {/* Bouton Mode Cuisine (si étapes détectées) */}
      {extractedData.steps && extractedData.steps.length > 0 && (
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