import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  PlayCircle, Clock, ChefHat, Scale, Minus, Plus, 
  Crown, Lightbulb, Quote, Utensils, Printer, Users 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Imports internes
import SmartText from './SmartText';
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
  const [servings, setServings] = useState(1);

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
        const cleanText = (text) => (!text ? "" : text.replace(/\\'/g, "'").replace(/\\"/g, '"').trim());

        // --- EXTRACTION DES METADONNÉES ---
        const title = (rawCode.match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/) || ["", "Recette"])[1];
        const image = (rawCode.match(/image:\s*["']([^"']+)["']/) || ["", ""])[1];
        const category = (rawCode.match(/category:\s*["']([^"']+)["']/) || ["", "PÂTISSERIE"])[1];
        const description = (rawCode.match(/description:\s*["']((?:[^"'\\]|\\.)*)["']/) || ["", ""])[1];
        const prepTime = (rawCode.match(/prepTime:\s*["']([^"']+)["']/) || ["", "N/A"])[1];
        const cookTime = (rawCode.match(/cookTime:\s*["']([^"']+)["']/) || ["", "N/A"])[1];
        const difficulty = (rawCode.match(/difficulty:\s*["']([^"']+)["']/) || ["", "MOYEN"])[1];
        const isVip = rawCode.includes('isVip: true');
        const baseServings = parseInt((rawCode.match(/baseServings:\s*(\d+)/) || [0, 6])[1]);

        setServings(baseServings);

        // --- EXTRACTION INGRÉDIENTS (Format Objet) ---
        let ingredients = [];
        const ingBlock = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
        if (ingBlock) {
          const objRegex = /\{([\s\S]*?)\}/g;
          let m;
          while ((m = objRegex.exec(ingBlock[1])) !== null) {
            const n = (m[1].match(/name:\s*["']((?:[^"'\\]|\\.)*)["']/) || ["", ""])[1];
            const a = (m[1].match(/amount:\s*(\d+(?:\.\d+)?)/) || ["", "0"])[1];
            const u = (m[1].match(/unit:\s*["']([^"']*)["']/) || ["", ""])[1];
            if (n) ingredients.push({ name: cleanText(n), amount: parseFloat(a), unit: cleanText(u) });
          }
        }

        // --- EXTRACTION ÉTAPES ---
        let steps = [];
        const stepsBlock = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
        if (stepsBlock) {
          const objRegex = /\{([\s\S]*?)\}/g;
          let m;
          while ((m = objRegex.exec(stepsBlock[1])) !== null) {
            const ti = (m[1].match(/title:\s*["']((?:[^"'\\]|\\.)*)["']/) || ["", ""])[1];
            const te = (m[1].match(/text:\s*["']((?:[^"'\\]|\\.)*)["']/) || ["", ""])[1];
            if (te) steps.push({ title: cleanText(ti), text: cleanText(te) });
          }
        }

        setExtractedData({
          title, image, category, description, prepTime, cookTime, difficulty,
          isVip, baseServings, ingredients, steps, isTech: foundPath.includes('/technologie/')
        });
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  const calculateQuantity = (amount) => {
    if (!amount || !extractedData) return "";
    const scaled = (amount * servings) / extractedData.baseServings;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace('.0', '');
  };

  if (!RecipeComponent || !extractedData) return <div className="text-white text-center mt-20">Chargement...</div>;

  // Si c'est une page Technologie ou sans étapes, on affiche le fichier brut
  if (extractedData.isTech || extractedData.steps.length === 0) {
    return <div className="min-h-screen bg-[#121212] pt-20"><RecipeComponent /></div>;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
      <Helmet>
        <title>{extractedData.title} - Pastrypower</title>
        <meta name="description" content={extractedData.description} />
      </Helmet>

      {/* --- HERO SECTION (IMAGE & TITRE) --- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10"></div>
        
        {extractedData.isVip && (
          <div className="absolute top-6 right-6 z-30">
            <div className="bg-[#D4AF37] text-black font-bold px-4 py-2 rounded-sm uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg">
              <Crown className="w-4 h-4" /> VIP ONLY
            </div>
          </div>
        )}

        <img src={extractedData.image} alt={extractedData.title} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">{extractedData.category}</span>
              {extractedData.isVip && (
                <span className="bg-white/10 text-[#D4AF37] border border-[#D4AF37] px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm tracking-wider">Exclusif</span>
              )}
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">{extractedData.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{extractedData.prepTime}</span></div>
              <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{extractedData.cookTime}</span></div>
              <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{extractedData.difficulty}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
        
        {/* DESCRIPTION AVEC SMARTTEXT */}
        <div className="mb-16 max-w-4xl">
           <Quote className="text-[#D4AF37] w-10 h-10 mb-4 opacity-50" />
           <p className="text-gray-300 font-light text-xl italic leading-relaxed">
              <SmartText text={extractedData.description} />
           </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE (INGRÉDIENTS) */}
          <div className="md:col-span-4">
            <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 sticky top-24">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Users className="w-5 h-5" />
                  <span className="font-serif text-lg">Portions</span>
                </div>
                <div className="flex items-center gap-4 bg-[#252525] rounded-full px-2 py-1">
                  <Button variant="ghost" size="icon" onClick={() => setServings(Math.max(1, servings - 1))} className="text-white hover:text-[#D4AF37] h-8 w-8">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="font-bold text-lg min-w-[2ch] text-center">{servings}</span>
                  <Button variant="ghost" size="icon" onClick={() => setServings(servings + 1)} className="text-white hover:text-[#D4AF37] h-8 w-8">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
              <ul className="space-y-4">
                {extractedData.ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between items-center text-sm pb-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-300 font-light">{ing.name}</span>
                    <span className="text-[#D4AF37] font-medium whitespace-nowrap">
                      {calculateQuantity(ing.amount)} {ing.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLONNE DROITE (ÉTAPES AVEC SMARTTEXT) */}
          <div className="md:col-span-8">
            <div className="space-y-12 mb-16">
              {extractedData.steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl flex-shrink-0 group-hover:border-[#D4AF37] transition-colors">
                    {i+1}
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-3 font-serif">{step.title}</h3>
                    <p className="text-gray-400 font-light text-lg leading-relaxed">
                      <SmartText text={step.text} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ONGARDE LES TABS POUR LES INFOS TECHNIQUES SUPPLÉMENTAIRES */}
            <Tabs defaultValue="conseils" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 uppercase tracking-widest text-[10px] font-bold">Conseils</TabsTrigger>
                <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 uppercase tracking-widest text-[10px] font-bold">Chef</TabsTrigger>
                <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 uppercase tracking-widest text-[10px] font-bold">Matériel</TabsTrigger>
              </TabsList>
              <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 text-gray-400 text-sm italic">
                Activez le mode cuisine pour voir les astuces détaillées.
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* BOUTON MODE CUISINE */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCookingMode(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-xl flex items-center gap-3 font-bold uppercase tracking-widest text-xs"
      >
        <PlayCircle size={20} /> Mode Cuisine
      </motion.button>

      <AnimatePresence>
        {isCookingMode && (
          <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;