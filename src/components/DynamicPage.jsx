import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom'; // Ajout de Link
import { PlayCircle, Lock, Crown, Loader2 } from 'lucide-react'; // Ajout d'icônes
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"; // Ajout Button

// 👇 Nouveaux imports
import { useAuth } from '../AuthContext'; 
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
  
  // 🔐 1. SÉCURITÉ : Récupération du profil utilisateur
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
        
        // --- TA LOGIQUE DE NETTOYAGE (INCHANGÉE) ---
        const cleanText = (text) => {
            if (!text) return "";
            return text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\(?=\s|\()/g, "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
        };

        const extractString = (key, source) => {
          const regex = new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`);
          const match = source.match(regex);
          return match ? cleanText(match[2]) : null;
        };

        // 🔐 2. DÉTECTION DU STATUT VIP DANS LE FICHIER
        let isRecipeVip = false;
        // On cherche "isVip: true" ou "vip: true" dans le code source
        const vipMatch = rawCode.match(/(?:isVip|vip):\s*true/);
        if (vipMatch) isRecipeVip = true;

        const isTechFile = foundPath.includes('/technologie/');
        const title = extractString('title', rawCode) || "Recette";
        const description = extractString('description', rawCode) || "";
        const image = extractString('image', rawCode) || "";

        // --- EXTRACTION INGRÉDIENTS (TA LOGIQUE) ---
        let ingredients = [];
        const ingredientsBlockMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
        if (ingredientsBlockMatch) {
            const blockContent = ingredientsBlockMatch[1];
            const objectRegex = /\{([\s\S]*?)\}/g;
            let match;
            while ((match = objectRegex.exec(blockContent)) !== null) {
                const itemContent = match[1];
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

        // --- EXTRACTION ÉTAPES (TA LOGIQUE) ---
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
        
        // --- TES FALLBACKS (HOSTINGER) ---
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
          title, description, image,
          ingredients: ingredients.length > 0 ? ingredients : [],
          steps: steps.length > 0 ? steps : [],
          isTech: isTechFile,
          isVip: isRecipeVip // On stocke l'info VIP
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

  // Chargement pendant qu'on vérifie l'auth ou le fichier
  if (!RecipeComponent || authLoading) return <div className="text-white text-center mt-20 flex justify-center"><Loader2 className="animate-spin" /></div>;

  // 🔐 3. LE BLOCAGE (PAYWALL)
  // Si la recette est VIP ET que l'utilisateur n'est pas Premium => On bloque
  if (extractedData?.isVip && !isPremium) {
    return (
      <div className="min-h-screen bg-[#121212] pt-20 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
        {/* Fond flouté */}
        <div className="absolute inset-0 z-0 opacity-20 blur-xl scale-110">
            <img src={extractedData.image} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-md p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl animate-in fade-in zoom-in duration-500">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-2">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">Recette Exclusive VIP</div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Cette recette technique fait partie de la collection <strong>Masterclass</strong>. 
              Rejoignez le club pour accéder à tous les secrets de fabrication.
            </p>

            {!user ? (
                <div className="space-y-4">
                    <Link to="/login" className="block w-full">
                        <Button className="w-full bg-[#D4AF37] text-black font-bold h-12 hover:bg-white transition-all">
                            Se connecter
                        </Button>
                    </Link>
                    <p className="text-sm text-gray-500">Pas encore de compte ? <Link to="/vip" className="text-[#D4AF37] hover:underline">Voir les offres</Link></p>
                </div>
            ) : (
                <div className="space-y-4">
                    <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-12 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform">
                            Débloquer (4.90€ / mois)
                        </Button>
                    </a>
                    <button onClick={signOut} className="text-sm text-gray-500 hover:text-white underline mt-4">
                        Se déconnecter
                    </button>
                </div>
            )}
        </div>
      </div>
    );
  }

  // --- AFFICHAGE NORMAL (Si VIP validé ou Recette Gratuite) ---
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData ? `${extractedData.title} | Pastry Power` : 'Recette'}</title>
        <meta name="description" content={extractedData?.description || "Recette"} />
        {extractedData && !extractedData.isTech && (
          <script type="application/ld+json">{generateStructuredData()}</script>
        )}
      </Helmet>

      <div ref={recipeContentRef}>
        <RecipeComponent />
      </div>

      <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
      
      {extractedData && extractedData.steps.length > 0 && !extractedData.isTech && (
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
        {isCookingMode && extractedData && (
          <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;