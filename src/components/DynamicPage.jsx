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

      if (foundPath) {
        setRecipeComponent(() => modules[foundPath]);
        const rawCode = rawModules[foundPath];
        
        // 🌟 Fonction de nettoyage améliorée (Apostrophes & Sauts de ligne)
        const cleanText = (text) => {
            if (!text) return "";
            return text
              .replace(/\\'/g, "'") 
              .replace(/\\"/g, '"')
              .replace(/\\n/g, " ")
              .trim();
        };

        // 🌟 LE SCANNER "BULLETPROOF" POUR LES APOSTROPHES
        // Cette fonction capture le texte peu importe le type de guillemet utilisé
        const extractString = (key, source) => {
          const regex = new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`);
          const match = source.match(regex);
          return match ? cleanText(match[2]) : null;
        };

        const isTechFile = foundPath.includes('/technologie/');

        // --- TITRE & INFOS ---
        const title = extractString('title', rawCode) || "Recette";
        const description = extractString('description', rawCode) || "";
        const image = extractString('image', rawCode) || "";

        // --- INGRÉDIENTS ---
        let ingredients = [];
        const ingredientsBlockMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);

        if (ingredientsBlockMatch) {
            const blockContent = ingredientsBlockMatch[1];
            const objectRegex = /\{([\s\S]*?)\}/g;
            let match;
            
            while ((match = objectRegex.exec(blockContent)) !== null) {
                const itemContent = match[1];
                // On utilise notre extracteur intelligent pour le nom de l'ingrédient
                const name = extractString('name', itemContent);
                const amountMatch = itemContent.match(/amount:\s*(\d+(?:\.\d+)?|["'][^"']*["'])/);
                const unit = extractString('unit', itemContent) || "";

                if (name) {
                    let amount = amountMatch ? amountMatch[1].replace(/["']/g, "") : ""; 
                    let fullString = name;
                    if (amount) fullString += ` (${amount}${unit ? ' ' + unit : ''})`;
                    ingredients.push(fullString);
                }
            }
        }

        // --- ÉTAPES ---
        let steps = [];
        const stepsBlockMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
        
        if (stepsBlockMatch) {
            const blockContent = stepsBlockMatch[1];
            const objectRegex = /\{([\s\S]*?)\}/g;
            let match;
            while ((match = objectRegex.exec(blockContent)) !== null) {
                const itemContent = match[1];
                const stepTitle = extractString('title', itemContent);
                const stepText = extractString('text', itemContent);
                
                if (stepText) {
                    steps.push(stepTitle ? `${stepTitle} : ${stepText}` : stepText);
                }
            }
        }
        
        // --- FALLBACKS (Si pas de format structuré) ---
        if (ingredients.length === 0) {
           const htmlLiRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
           let liMatch;
           while ((liMatch = htmlLiRegex.exec(rawCode)) !== null) {
             const rawLi = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
             if (!rawLi.includes('{') && !rawLi.includes('}') && rawLi.length > 2) {
                 ingredients.push(cleanText(rawLi));
             }
           }
        }

        if (steps.length === 0) {
           const htmlStepRegex = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
           let htmlStepMatch;
           while ((htmlStepMatch = htmlStepRegex.exec(rawCode)) !== null) {
             steps.push(`${cleanText(htmlStepMatch[1])} : ${cleanText(htmlStepMatch[2].replace(/<[^>]+>/g, '').trim())}`);
           }
        }

        setExtractedData({
          title,
          description,
          image,
          ingredients: ingredients.length > 0 ? ingredients : [],
          steps: steps.length > 0 ? steps : [],
          isTech: isTechFile
        });
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": extractedData.title,
      "image": [extractedData.image],
      "description": extractedData.description,
      "author": { "@type": "Person", "name": "Pastry Power" },
      "recipeIngredient": extractedData.ingredients,
      "recipeInstructions": extractedData.steps.map((step, index) => ({
        "@type": "HowToStep", "position": index + 1, "text": step
      }))
    });
  };

  if (!RecipeComponent) return <div className="text-white text-center mt-20">Chargement...</div>;

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData ? `${extractedData.title} | Pastry Power` : 'Recette'}</title>
        <meta name="description" content={extractedData?.description || "Recette"} />
        {extractedData && !extractedData.isTech && (
          <script type="application/ld+json">{generateStructuredData()}</script>
        )}
      </Helmet>

      <RecipeComponent />
      <GlossaryScanner key={id} />
      
      {extractedData && extractedData.steps.length > 0 && !extractedData.isTech && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCookingMode(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-lg shadow-[#D4AF37]/20 flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-colors group"
        >
          <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm">Mode Cuisine</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isCookingMode && extractedData && (
          <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;