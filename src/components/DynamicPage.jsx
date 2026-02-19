import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'; 
import { PlayCircle, Lock, Crown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

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
      for (const path in modules) {
        if (path.includes(`/${id}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      if (foundPath) {
        setRecipeComponent(() => modules[foundPath]);
        const rawCode = rawModules[foundPath];
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? match[2] : null;
        };

        const isTechFile = foundPath.includes('/technologie/');
        const isVip = !!rawCode.match(/(?:isVip|vip):\s*true/) || location.pathname.includes('/vip/');

        setExtractedData({ 
          title: extractString('title', rawCode) || "Contenu", 
          isTech: isTechFile, 
          isVip: isVip,
          steps: []
        });
      }
    };
    loadRecipe();
    window.scrollTo(0, 0);
  }, [id, location.pathname]);

  if (!RecipeComponent || authLoading) return <div className="h-screen bg-[#121212] flex items-center justify-center"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;

  const isLocked = extractedData?.isVip && !isPremium;

  // --- CAS 1 : TECHNOLOGIE (Le mode avec aperçu long) ---
  if (extractedData?.isTech) {
      return (
        <div className="min-h-screen bg-[#121212]">
            <Helmet><title>{extractedData.title} | Pastry Power</title></Helmet>

            {/* 🚀 ESPACE RÉVÉLÉ AGRANDI À 250vh 🚀 */}
            <div className={`relative w-full ${isLocked ? 'max-h-[250vh] overflow-hidden' : ''}`}>
                
                <div ref={recipeContentRef}>
                    <RecipeComponent />
                </div>
                
                {!isLocked && <GlossaryScanner targetRef={recipeContentRef} trigger={id} />}

                {/* LE MASQUE (Seulement si bloqué) */}
                {isLocked && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-end pb-24 bg-gradient-to-t from-[#121212] via-[#121212]/95 to-transparent">
                        <div className="text-center p-8 w-full max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                            <Crown className="w-20 h-20 text-[#D4AF37] mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                            <h3 className="text-4xl font-serif text-white mb-4">Envie d'en savoir plus ?</h3>
                            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                                L'essentiel est là, mais le plus important arrive : schémas techniques, chimie des ingrédients et conseils de chef.
                            </p>
                            
                            <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user?.id}`} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-[#D4AF37] text-black font-bold h-16 text-xl hover:bg-white uppercase tracking-tighter shadow-2xl transition-all">
                                    <Lock size={22} className="mr-3" /> Débloquer la fiche complète
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
      );
  }

  // --- CAS 2 : RECETTES VIP (Blocage Classique) ---
  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6">
        <div className="max-w-lg bg-[#1a1a1a] p-12 rounded-3xl border border-[#D4AF37]/20 shadow-2xl text-center">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">{extractedData.title}</h2>
            <p className="text-gray-400 mb-10 italic">Cette Masterclass est réservée à nos membres VIP.</p>
            <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user?.id}`} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#D4AF37] text-black font-bold h-14 rounded-xl shadow-lg hover:scale-105 transition-transform">Rejoindre le Club VIP</Button>
            </a>
        </div>
      </div>
    );
  }

  // --- CAS 3 : ACCÈS LIBRE ---
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <div ref={recipeContentRef}><RecipeComponent /></div>
      <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
      <AnimatePresence>
        {isCookingMode && <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;