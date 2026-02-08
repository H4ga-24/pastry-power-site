import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        
        // --- DÉBUT EXTRACTION UNIVERSELLE ---
        const rawCode = rawModules[foundPath];
        
        // 1. TITRE
        const titleMatch = rawCode.match(/title:\s*["']([^"']+)["']/) || rawCode.match(/<h1[^>]*>([^<]+)<\/h1>/);
        const title = titleMatch ? titleMatch[1] : "Recette";

        // 2. INGRÉDIENTS (Stratégie à 3 niveaux)
        let ingredients = [];

        // Niveau A : Structure complexe (Pâte à tartiner) -> items: [ ... ]
        const complexIngRegex = /items:\s*\[([\s\S]*?)\]/g;
        let complexMatch;
        while ((complexMatch = complexIngRegex.exec(rawCode)) !== null) {
           const content = complexMatch[1];
           const itemRegex = /name:\s*["']([^"']+)["'][\s\S]*?qty:\s*["']?([^"',}]+)["']?[\s\S]*?unit:\s*["']([^"']*)["']/g;
           let item;
           while ((item = itemRegex.exec(content)) !== null) {
             ingredients.push(`${item[1]} (${item[2]} ${item[3]})`);
           }
        }

        // Niveau B : Structure simple (Mousse) -> const ingredients = [ ... ]
        if (ingredients.length === 0) {
            const simpleIngRegex = /name:\s*["']([^"']+)["'][\s\S]*?amount:\s*(\d+)[\s\S]*?unit:\s*["']([^"']+)["']/g;
            let simpleMatch;
            while ((simpleMatch = simpleIngRegex.exec(rawCode)) !== null) {
              // On vérifie qu'on n'a pas déjà attrapé ça avec le niveau A
              const ingStr = `${simpleMatch[1]} (${simpleMatch[2]} ${simpleMatch[3]})`;
              if (!ingredients.includes(ingStr)) ingredients.push(ingStr);
            }
        }

        // Niveau C : HTML Brut (Sauce Samouraï) -> <li>...</li>
        if (ingredients.length === 0) {
           // On cherche les <li> qui contiennent des ingrédients (souvent avec une classe ou dans une liste)
           // Astuce : On cherche les <li> qui contiennent "span" ou "strong" (structure typique de tes listes)
           const htmlLiRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
           let liMatch;
           while ((liMatch = htmlLiRegex.exec(rawCode)) !== null) {
              // On nettoie le HTML pour ne garder que le texte
              const cleanText = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
              // Filtre simple : si le texte est trop long (> 150 chars), c'est probablement pas un ingrédient
              if (cleanText.length > 5 && cleanText.length < 150) {
                 ingredients.push(cleanText);
              }
           }
        }

        // 3. ÉTAPES (Stratégie à 3 niveaux)
        let steps = [];

        // Niveau A : Tableau d'objets (Mousse) -> text: "..."
        const objStepRegex = /text:\s*["']([^"']+)["']/g;
        let objStepMatch;
        while ((objStepMatch = objStepRegex.exec(rawCode)) !== null) {
           steps.push(objStepMatch[1]);
        }

        // Niveau B : HTML Structuré (Sauce Samouraï) -> <h3>...</h3> <p>...</p>
        if (steps.length === 0) {
           // On cherche les blocs <p> qui suivent un titre h3 ou h4 (souvent les étapes)
           // Ou simplement les <p> qui contiennent du texte d'instruction
           // Pour Samouraï, c'est <h3...>Titre</h3> <p...>Texte</p>
           
           const htmlStepRegex = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
           let htmlStepMatch;
           while ((htmlStepMatch = htmlStepRegex.exec(rawCode)) !== null) {
              const stepTitle = htmlStepMatch[1];
              const stepText = htmlStepMatch[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
              steps.push(`${stepTitle} : ${stepText}`);
           }
        }
        
        // Niveau C : Fallback HTML simple (si juste des <p> dans une div étapes)
        if (steps.length === 0) {
            // On cherche des phrases longues dans des paragraphes
            const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
            let pMatch;
            while ((pMatch = pRegex.exec(rawCode)) !== null) {
               const text = pMatch[1].replace(/<[^>]+>/g, '').trim();
               // On garde si ça ressemble à une phrase (pas un titre court)
               if (text.length > 30 && !ingredients.includes(text)) {
                  steps.push(text);
               }
            }
        }

        setExtractedData({
          title,
          ingredients: ingredients.length > 0 ? ingredients : ["Ingrédients non détectés (Format complexe)"],
          steps: steps.length > 0 ? steps : ["Étapes non détectées (Format complexe)"]
        });
        // --- FIN EXTRACTION ---
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  if (!RecipeComponent) return <div className="text-white text-center mt-20">Chargement...</div>;

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <RecipeComponent />
      
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