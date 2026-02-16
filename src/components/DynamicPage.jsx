import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { 
  eager: true,
  import: 'default'
});

const rawModules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { 
  eager: true,
  query: '?raw',
  import: 'default'
});

const DynamicPage = () => {
  const { id } = useParams();
  const [RecipeComponent, setRecipeComponent] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isCookingMode, setIsCookingMode] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      let foundPath = null;
      for (const path in modules) {
        if (path.includes(`/${id}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      console.log("🔍 ID recherché :", id);
      console.log("📍 Chemin trouvé :", foundPath);

      if (foundPath) {
        setRecipeComponent(() => modules[foundPath]);
        const rawCode = rawModules[foundPath];
        
        const cleanText = (text) => {
            if (!text) return "";
            return text.replace(/\\'/g, "'").replace(/\\"/g, '"').trim();
        };

        const isTechFile = foundPath.includes('/technologie/');

        // --- SCAN TITRE ---
        const titleMatch = rawCode.match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/) || rawCode.match(/<h1[^>]*>([^<]+)<\/h1>/);
        const title = titleMatch ? cleanText(titleMatch[1]) : "Recette";

        // --- SCAN INGRÉDIENTS ---
        let ingredients = [];
        const ingredientsBlockMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
        if (ingredientsBlockMatch) {
            const blockContent = ingredientsBlockMatch[1];
            const objectRegex = /\{([\s\S]*?)\}/g;
            let match;
            while ((match = objectRegex.exec(blockContent)) !== null) {
                const itemContent = match[1];
                const nameMatch = itemContent.match(/name:\s*["']((?:[^"'\\]|\\.)*)["']/);
                const amountMatch = itemContent.match(/amount:\s*(\d+(?:\.\d+)?|["'][^"']*["'])/);
                const unitMatch = itemContent.match(/unit:\s*["']([^"']*)["']/);
                if (nameMatch) {
                    const name = cleanText(nameMatch[1]);
                    let amount = amountMatch ? amountMatch[1].replace(/["']/g, "") : ""; 
                    const unit = unitMatch ? cleanText(unitMatch[1]) : "";
                    ingredients.push(amount ? `${name} (${amount}${unit ? ' ' + unit : ''})` : name);
                }
            }
        }

        // --- SCAN ÉTAPES ---
        let steps = [];
        // On rend la Regex plus souple (espace, pas de point virgule...)
        const stepsBlockMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\]/);
        
        if (stepsBlockMatch) {
            const blockContent = stepsBlockMatch[1];
            const objectRegex = /\{([\s\S]*?)\}/g;
            let match;
            while ((match = objectRegex.exec(blockContent)) !== null) {
                const itemContent = match[1];
                const textM = itemContent.match(/text:\s*["']((?:[^"'\\]|\\.)*)["']/);
                if (textM) {
                    steps.push(cleanText(textM[1]));
                }
            }
        }

        console.log("📊 Étapes extraites :", steps.length);

        setExtractedData({
          title,
          ingredients: ingredients.length > 0 ? ingredients : [],
          steps: steps.length > 0 ? steps : [],
          isTech: isTechFile
        });
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  if (!RecipeComponent) return <div className="text-white text-center mt-20">Chargement...</div>;

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData?.title || 'Recette'} | Pastry Power</title>
      </Helmet>

      <RecipeComponent />
      <GlossaryScanner key={id} />
      
      {/* LE BOUTON */}
      {extractedData && extractedData.steps.length > 0 && !extractedData.isTech && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsCookingMode(true)}
          className="fixed bottom-6 right-6 z-[999] bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-2xl font-bold uppercase tracking-widest flex items-center gap-3"
        >
          <PlayCircle size={24} />
          <span className="text-sm">Mode Cuisine</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isCookingMode && extractedData && (
          <CookingMode 
            recipe={extractedData} 
            onClose={() => setIsCookingMode(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;