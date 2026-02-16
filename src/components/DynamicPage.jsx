import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import CookingMode from './CookingMode';
// --- AJOUT DU DÉTECTEUR ---
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
        
        const cleanText = (text) => {
            if (!text) return "";
            return text.replace(/\\'/g, "'").replace(/\\"/g, '"').trim();
        };

        const isTechFile = foundPath.includes('/technologie/');

        // --- TITRE & INFOS ---
        const titleMatch = rawCode.match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/) || rawCode.match(/<h1[^>]*>([^<]+)<\/h1>/);
        const title = titleMatch ? cleanText(titleMatch[1]) : "Recette";
        
        const descMatch = rawCode.match(/description:\s*["']((?:[^"'\\]|\\.)*)["']/);
        const description = descMatch ? cleanText(description[1]) : "";

        const imgMatch = rawCode.match(/image:\s*["']([^"']+)["']/) || rawCode.match(/<img[^>]+src=["']([^"']+)["']/);
        const image = imgMatch ? imgMatch[1] : "";

        // ============================================================
        // 🟢 INTELLIGENCE DU SCANNER (HYBRIDE)
        // ============================================================
        let ingredients = [];

        // MÉTHODE 1 : La méthode propre (Variable JavaScript)
        // On cherche le tableau de données structuré
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
                    
                    let fullString = name;
                    if (amount) fullString += ` (${amount}${unit ? ' ' + unit : ''})`;
                    ingredients.push(fullString);
                }
            }
        }

        // MÉTHODE 2 : Le Filet de Sécurité (HTML brut)
        // S'active UNIQUEMENT si la méthode 1 n'a rien trouvé
        if (ingredients.length === 0) {
           const htmlLiRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
           let liMatch;
           while ((liMatch = htmlLiRegex.exec(rawCode)) !== null) {
             const rawLi = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
             
             // 🚨 PROTECTION ANTI-CODE :
             // On ignore la ligne si elle contient "{" ou "}" (c'est du code React, pas un ingrédient)
             if (!rawLi.includes('{') && !rawLi.includes('}') && rawLi.length > 2) {
                 ingredients.push(cleanText(rawLi));
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
                const titleM = itemContent.match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/);
                const textM = itemContent.match(/text:\s*["']((?:[^"'\\]|\\.)*)["']/);
                
                if (textM) {
                    const t = titleM ? cleanText(titleM[1]) : "";
                    const txt = cleanText(textM[1]);
                    steps.push(t ? `${t} : ${txt}` : txt);
                }
            }
        }
        
        // Fallback HTML pour les étapes (Si pas de tableau steps)
        if (steps.length === 0) {
           const htmlStepRegex = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
           let htmlStepMatch;
           while ((htmlStepMatch = htmlStepRegex.exec(rawCode)) !== null) {
             steps.push(`${cleanText(htmlStepMatch[1])} : ${cleanText(htmlStepMatch[2].replace(/<[^>]+>/g, '').trim())}`);
           }
        }
        // Fallback ultime (paragraphes simples)
        if (steps.length === 0) {
            const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
            let pMatch;
            while ((pMatch = pRegex.exec(rawCode)) !== null) {
               const text = pMatch[1].replace(/<[^>]+>/g, '').trim();
               // On filtre les paragraphes trop courts ou qui ressemblent à des ingrédients
               if (text.length > 30 && !text.includes('{')) {
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

  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": extractedData.title,
      "image": [extractedData.image],
      "description": extractedData.description,
      "author": { "@type": "Person", "name": "Pastry Power" },
      "datePublished": new Date().toISOString().split('T')[0],
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
      <Helmet>
        <title>{extractedData ? `${extractedData.title} | Pastry Power` : 'Recette'}</title>
        <meta name="description" content={extractedData?.description || "Recette"} />
        {extractedData && !extractedData.isTech && (
          <script type="application/ld+json">
            {generateStructuredData()}
          </script>
        )}
      </Helmet>

      <RecipeComponent />

      {/* --- LE DÉTECTEUR EST APPELÉ ICI --- */}
      <GlossaryScanner key={id} />
      
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