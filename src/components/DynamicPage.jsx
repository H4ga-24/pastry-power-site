import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // 👈 IMPORT IMPORTANT

// Import du Mode Cuisine
import CookingMode from './CookingMode';

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
        
        // 🧹 FONCTION DE NETTOYAGE
        const cleanText = (text) => {
            if (!text) return "";
            return text.replace(/\\'/g, "'").replace(/\\"/g, '"');
        };

        const isTechFile = foundPath.includes('/technologie/');

        // 1. TITRE
        const titleMatch = rawCode.match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/) || rawCode.match(/<h1[^>]*>([^<]+)<\/h1>/);
        const title = titleMatch ? cleanText(titleMatch[1]) : "Recette Pastry Power";

        // 🟢 2. IMAGE (Google en a besoin pour le carrousel !)
        const imgMatch = rawCode.match(/image:\s*["']([^"']+)["']/) || rawCode.match(/<img[^>]+src=["']([^"']+)["']/);
        const image = imgMatch ? imgMatch[1] : "https://ton-site.com/default-pastry.jpg"; // Mets une image par défaut ici

        // 3. DESCRIPTION (Optionnel mais recommandé)
        const descMatch = rawCode.match(/description:\s*["']((?:[^"'\\]|\\.)*)["']/);
        const description = descMatch ? cleanText(descMatch[1]) : `Découvrez la recette de ${title} sur Pastry Power.`;

        // 4. INGRÉDIENTS
        let ingredients = [];
        const complexIngRegex = /items:\s*\[([\s\S]*?)\]/g;
        let complexMatch;
        while ((complexMatch = complexIngRegex.exec(rawCode)) !== null) {
           const content = complexMatch[1];
           const itemRegex = /name:\s*["']((?:[^"'\\]|\\.)*)["'][\s\S]*?qty:\s*["']?([^"',}]+)["']?[\s\S]*?unit:\s*["']([^"']*)["']/g;
           let item;
           while ((item = itemRegex.exec(content)) !== null) {
             ingredients.push(`${cleanText(item[1])} (${cleanText(item[2])} ${cleanText(item[3])})`);
           }
        }
        if (ingredients.length === 0) {
            const simpleIngRegex = /name:\s*["']((?:[^"'\\]|\\.)*)["'][\s\S]*?amount:\s*(\d+)[\s\S]*?unit:\s*["']([^"']+)["']/g;
            let simpleMatch;
            while ((simpleMatch = simpleIngRegex.exec(rawCode)) !== null) {
              const ingStr = `${cleanText(simpleMatch[1])} (${simpleMatch[2]} ${cleanText(simpleMatch[3])})`;
              if (!ingredients.includes(ingStr)) ingredients.push(ingStr);
            }
        }
        if (ingredients.length === 0) {
           const htmlLiRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
           let liMatch;
           while ((liMatch = htmlLiRegex.exec(rawCode)) !== null) {
             const rawLi = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
             if (rawLi.length > 5 && rawLi.length < 150) {
                 ingredients.push(cleanText(rawLi));
             }
           }
        }

        // 5. ÉTAPES
        let steps = [];
        const objStepRegex = /text:\s*["']((?:[^"'\\]|\\.)*)["']/g;
        let objStepMatch;
        while ((objStepMatch = objStepRegex.exec(rawCode)) !== null) {
           steps.push(cleanText(objStepMatch[1]));
        }
        if (steps.length === 0) {
           const htmlStepRegex = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
           let htmlStepMatch;
           while ((htmlStepMatch = htmlStepRegex.exec(rawCode)) !== null) {
             steps.push(`${cleanText(htmlStepMatch[1])} : ${cleanText(htmlStepMatch[2].replace(/<[^>]+>/g, '').trim())}`);
           }
        }
        if (steps.length === 0) {
            const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
            let pMatch;
            while ((pMatch = pRegex.exec(rawCode)) !== null) {
               const text = pMatch[1].replace(/<[^>]+>/g, '').trim();
               if (text.length > 30 && !ingredients.includes(text)) {
                  steps.push(cleanText(text));
               }
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

  // --- GÉNÉRATION DU JSON-LD POUR GOOGLE ---
  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;

    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": extractedData.title,
      "image": [extractedData.image],
      "description": extractedData.description,
      "author": {
        "@type": "Person",
        "name": "Pastry Power" // Tu peux mettre ton nom ici
      },
      "datePublished": new Date().toISOString().split('T')[0], // Date du jour par défaut
      "recipeIngredient": extractedData.ingredients,
      "recipeInstructions": extractedData.steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "text": step
      }))
    };

    return JSON.stringify(structuredData);
  };

  if (!RecipeComponent) return <div className="text-white text-center mt-20">Chargement...</div>;

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      {/* 🟢 C'EST ICI QUE TU PARLES À GOOGLE */}
      <Helmet>
        <title>{extractedData ? `${extractedData.title} | Pastry Power` : 'Recette'}</title>
        <meta name="description" content={extractedData?.description || "Recette de pâtisserie"} />
        {extractedData && !extractedData.isTech && (
          <script type="application/ld+json">
            {generateStructuredData()}
          </script>
        )}
      </Helmet>

      <RecipeComponent />
      
      {extractedData && !extractedData.isTech && (
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