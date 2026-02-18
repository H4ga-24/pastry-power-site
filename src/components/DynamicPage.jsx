import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; 
import { PlayCircle, Lock, Crown, Loader2 } from 'lucide-react'; // J'ai viré BookOpen qui ne servait plus
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

// --- SCANNER DES FICHIERS ---
const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, import: 'default' });
const rawModules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, query: '?raw', import: 'default' });

const DynamicPage = () => {
  const { id } = useParams();
  const location = useLocation(); 
  const { user, isPremium, loading: authLoading, signOut } = useAuth();

  const [RecipeComponent, setRecipeComponent] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const recipeContentRef = useRef(null);

  useEffect(() => {
    const loadRecipe = async () => {
      let foundPath = null;
      for (const path in modules) {
        if (path.includes(`/${id}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      if (foundPath) {
        setRecipeComponent(() => modules[foundPath]);
        const rawCode = rawModules[foundPath];
        
        const cleanText = (text) => text ? text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\(?=\s|\()/g, "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim() : "";
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? cleanText(match[2]) : null;
        };

        const isTechFile = foundPath.includes('/technologie/');
        
        const fileSaysVip = !!rawCode.match(/(?:isVip|vip):\s*true/);
        const urlSaysVip = location.pathname.includes('/vip/');
        const isVip = fileSaysVip || urlSaysVip;

        const title = extractString('title', rawCode) || "Contenu";
        const description = extractString('description', rawCode) || "";
        const image = extractString('image', rawCode) || "";

        let ingredients = [], steps = [];
        if (!isTechFile) {
            // ... (Code extraction ingrédients inchangé) ...
            const ingMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
            if (ingMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(ingMatch[1])) !== null) {
                    const name = extractString('name', match[1]);
                    const amount = match[1].match(/amount:\s*(\d+(?:\.\d+)?|["'][^"']*["'])/);
                    const unit = extractString('unit', match[1]);
                    if (name) ingredients.push(amount ? `${name} (${amount[1].replace(/["']/g, "")}${unit ? ' ' + unit : ''})` : name);
                }
            }
            const stepMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
            if (stepMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(stepMatch[1])) !== null) {
                    const t = extractString('title', match[1]);
                    const txt = extractString('text', match[1]);
                    if (txt) steps.push(t ? `${t} : ${txt}` : txt);
                }
            }
            if (ingredients.length === 0) {
               let liMatch; const r = /<li[^>]*>([\s\S]*?)<\/li>/g;
               while ((liMatch = r.exec(rawCode)) !== null) {
                 const t = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                 if (!t.includes('{') && t.length > 2) ingredients.push(cleanText(t));
               }
            }
            if (steps.length === 0) {
               let sMatch; const r = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
               while ((sMatch = r.exec(rawCode)) !== null) steps.push(`${cleanText(sMatch[1])} : ${cleanText(sMatch[2].replace(/<[^>]+>/g, '').trim())}`);
            }
        }

        setExtractedData({ title, description, image, ingredients, steps, isTech: isTechFile, isVip: isVip });
      }
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

  if (!RecipeComponent || authLoading) return <div className="text-white text-center mt-20 flex justify-center"><Loader2 className="animate-spin" /></div>;

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : PAGE TECHNOLOGIE (La version propre) ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212]">
            <Helmet>
                <title>{extractedData.title} | Pastry Power</title>
                <meta name="description" content={extractedData.description} />
            </Helmet>

            {/* 👇 ICI C'EST LE NETTOYAGE
               On n'affiche PLUS d'image, ni de titre, ni de description.
               On affiche juste le composant. C'est LUI qui contient l'image Hero.
            */}
            <div className={`relative w-full ${isLocked ? 'h-screen overflow-hidden' : ''}`}>
                
                {/* On affiche ton fichier Fecules/Levure tel quel */}
                <div ref={recipeContentRef}>
                    <RecipeComponent />
                </div>
                
                {!isLocked && <GlossaryScanner targetRef={recipeContentRef} trigger={id} />}

                {/* LE MASQUE (Seulement si bloqué) */}
                {isLocked && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-end pb-20 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent">
                        <div className="text-center p-6 w-full max-w-lg animate-in fade-in slide-in-from-bottom-10 duration-700">
                            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                            <h3 className="text-3xl font-serif text-white mb-4">La suite est réservée aux membres</h3>
                            <p className="text-gray-400 mb-8 text-lg">
                                Accédez aux schémas techniques, aux explications scientifiques et aux pièges à éviter.
                            </p>
                            
                            {!user ? (
                                <Link to="/login">
                                    <Button className="w-full bg-[#D4AF37] text-black font-bold h-14 text-lg hover:bg-white uppercase tracking-widest shadow-xl">
                                        Se connecter
                                    </Button>
                                </Link>
                            ) : (
                                <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-14 text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-widest flex items-center justify-center gap-3">
                                        <Lock size={20} /> Débloquer le cours (4.90€)
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

  // --- CAS 2 : RECETTE CLASSIQUE (Si c'est VIP et bloqué, on bloque TOUT) ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] pt-20 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20 blur-xl scale-110"><img src={extractedData.image} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-md p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl animate-in fade-in zoom-in duration-500">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-2">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">Recette Exclusive VIP</div>
            <p className="text-gray-300 mb-8 leading-relaxed">Cette recette fait partie de la collection <strong>Masterclass</strong>. Abonnez-vous pour y accéder.</p>
            {!user ? (
                <div className="space-y-4">
                    <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-12 hover:bg-white transition-all">Se connecter</Button></Link>
                </div>
            ) : (
                <div className="space-y-4">
                    <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-12 shadow-lg hover:scale-105 transition-transform">Débloquer (4.90€ / mois)</Button>
                    </a>
                </div>
            )}
        </div>
      </div>
    );
  }

  // --- CAS 3 : AFFICHAGE STANDARD RECETTE ---
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData.title} | Pastry Power</title>
        <meta name="description" content={extractedData.description} />
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
          <PlayCircle size={24} />
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