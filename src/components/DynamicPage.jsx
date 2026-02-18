import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, Lock, Crown, Loader2, BookOpen } from 'lucide-react';
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

        const vipMatch = rawCode.match(/(?:isVip|vip):\s*true/);
        const isRecipeVip = !!vipMatch;

        // IMPORTANT : Détection si c'est une page Techno (Doit être dans le dossier technologie)
        const isTechFile = foundPath.includes('/technologie/');
        
        const title = extractString('title', rawCode) || "Contenu";
        const description = extractString('description', rawCode) || "";
        const image = extractString('image', rawCode) || "";

        let ingredients = [], steps = [];
        if (!isTechFile) {
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

        setExtractedData({ title, description, image, ingredients, steps, isTech: isTechFile, isVip: isRecipeVip });
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/", "@type": "Recipe", "name": extractedData.title, "image": [extractedData.image], "description": extractedData.description, "author": { "@type": "Person", "name": "Pastry Power" }, "recipeIngredient": extractedData.ingredients, "recipeInstructions": extractedData.steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "text": s }))
    });
  };

  if (!RecipeComponent || authLoading) return <div className="text-white text-center mt-20 flex justify-center"><Loader2 className="animate-spin" /></div>;

  // =================================================================
  // LOGIQUE D'AFFICHAGE
  // =================================================================

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : PAGE TECHNOLOGIE (Effet "Journal Le Monde") ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212] pt-24 px-6 pb-20">
            <Helmet>
                <title>{extractedData.title} | Pastry Power</title>
                <meta name="description" content={extractedData.description} />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                {/* EN-TÊTE (Toujours visible) */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <BookOpen size={14} /> Technologie
                        {extractedData.isVip && <span className="ml-2 bg-[#D4AF37] text-black px-1.5 rounded-sm">VIP</span>}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{extractedData.title}</h1>
                    {extractedData.image && (
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
                            <img src={extractedData.image} alt={extractedData.title} className="w-full h-full object-cover opacity-80" />
                        </div>
                    )}
                    <div className="bg-[#1a1a1a] p-8 rounded-xl border-l-4 border-[#D4AF37] text-left">
                        <p className="text-xl text-gray-300 italic font-serif leading-relaxed">
                            {extractedData.description}
                        </p>
                    </div>
                </div>

                {/* CONTENU + MASQUE */}
                <div className="relative">
                    {/* 
                       L'Astuce est ICI : 
                       Si c'est bloqué, on contraint la hauteur (h-[400px]) et on cache ce qui dépasse (overflow-hidden)
                       Sinon, on laisse la hauteur auto
                    */}
                    <div className={`prose prose-invert prose-gold max-w-none prose-lg text-gray-300 leading-loose ${isLocked ? 'h-[400px] overflow-hidden' : ''}`} ref={recipeContentRef}>
                        <RecipeComponent />
                        <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
                    </div>

                    {/* LE MASQUE EN DÉGRADÉ (Si bloqué) */}
                    {isLocked && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-10 bg-gradient-to-b from-transparent via-[#121212]/80 to-[#121212]">
                            <div className="text-center p-6 w-full max-w-lg">
                                <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-4 animate-pulse" />
                                <h3 className="text-2xl font-serif text-white mb-2">La suite est réservée aux membres</h3>
                                <p className="text-gray-400 mb-6 text-sm">Débloquez l'accès complet à ce cours technique et aux schémas explicatifs.</p>
                                
                                {!user ? (
                                    <Link to="/login">
                                        <Button className="w-full bg-[#D4AF37] text-black font-bold h-12 hover:bg-white uppercase tracking-widest">
                                            Se connecter
                                        </Button>
                                    </Link>
                                ) : (
                                    <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-12 shadow-lg hover:scale-105 transition-transform uppercase tracking-widest flex items-center justify-center gap-2">
                                            <Lock size={16} /> Débloquer le cours
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      );
  }

  // --- CAS 2 : RECETTE DE PÂTISSERIE (Blocage Total ou Accès) ---
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
                    <p className="text-sm text-gray-500">Pas encore de compte ? <Link to="/vip" className="text-[#D4AF37] hover:underline">Voir les offres</Link></p>
                </div>
            ) : (
                <div className="space-y-4">
                    <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-12 shadow-lg hover:scale-105 transition-transform">Débloquer (4.90€ / mois)</Button>
                    </a>
                    <button onClick={signOut} className="text-sm text-gray-500 hover:text-white underline mt-4">Se déconnecter</button>
                </div>
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