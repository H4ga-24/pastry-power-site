import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Utensils, Printer, Minus, Plus, Thermometer, ArrowLeft, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MacaronCitronVert = () => {
  const [servingsCoques, setServingsCoques] = useState(70);
  const [servingsGarniture, setServingsGarniture] = useState(140);

  const recipeData = {
    title: "Macaron Citron Vert",
    category: "MACARONS", // 👈 AJOUTE CETTE LIGNE ICI
    subtitle: "Coques + Garniture crémeuse",
    description: "La fraîcheur acidulée du citron vert capturée dans une crème onctueuse, nichée entre deux coques tendres et croquantes.",
    prepTime: "2H 00",
    cookTime: "14 MIN",
    difficulty: "DIFFICILE",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/d19ff6df5fa5adf008867b48b0007ff0.jpg",
  };

  const coquesIngredients = [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "50% poudre d'amande / 50% sucre glace" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Zestes de citron vert", amount: 2, unit: "pièces" },
    { name: "Crème de tartre", amount: 1, unit: "g" },
    { name: "Colorant Jaune", amount: 1, unit: "pincée", note: "+ une pointe de bleu pour le vert" },
    { name: "Colorant Bleu", amount: 1, unit: "pincée", note: "pour obtenir du vert" }
  ];

  const garnitureIngredients = [
    { name: "Jus de citron vert", amount: 150, unit: "g" },
    { name: "Sucre semoule", amount: 300, unit: "g" },
    { name: "Beurre", amount: 200, unit: "g" },
    { name: "Œufs", amount: 300, unit: "g" },
    { name: "Gélatine en feuille", amount: 4, unit: "g" }
  ];

  const coquesSteps = [
    "Zester les citrons verts. Vous pouvez les incorporer aux blancs d'œufs pour infuser la coque, ou les réserver pour la crème selon votre préférence d'intensité.",
    "Au robot-coupe, broyer finement le tant pour tant amandes avec le sucre glace. Tamiser l'ensemble pour obtenir une poudre très fine.",
    "Dans la cuve du batteur, monter les blancs d'œufs avec la crème de tartre et environ 10% du sucre semoule en 2ème vitesse. Ajouter les colorants (jaune + bleu) pour obtenir la teinte verte désirée.",
    "Serrer les blancs en ajoutant progressivement le reste du sucre semoule jusqu'à obtenir une meringue ferme et brillante (bec d'oiseau).",
    "Incorporer délicatement le mélange poudres (tant pour tant + sucre glace) à la meringue à l'aide d'une maryse. Macaronner jusqu'à obtenir un ruban lisse et brillant.",
    "Dresser sur plaque et cuire à 150°C (four ventilé) : 4-5 min tirage fermé, puis 12-14 min tirage ouvert."
  ];

  const garnitureSteps = [
    "Hydrater la gélatine dans un grand volume d'eau froide.",
    "Dans une casserole, réunir le jus de citron vert, la moitié du sucre, le beurre coupé en morceaux et les zestes (si non utilisés dans les coques). Porter à ébullition (donner un bouillon).",
    "Pendant ce temps, mélanger les œufs avec le restant de sucre sans blanchir.",
    "Verser le liquide bouillant sur le mélange œufs-sucre en fouettant, puis reverser le tout dans la casserole.",
    "Cuire à feu moyen jusqu'à frémissement en remuant énergiquement et constamment au fouet pour éviter que les œufs ne coagulent au fond. Chinoiser immédiatement la préparation.",
    "Faire refroidir rapidement.",
    "Avant le montage, remettre la crème en température (légèrement tiédir), puis incorporer la gélatine fondue. Laisser prendre légèrement avant de garnir les macarons."
  ];

  const calculateAmount = (baseAmount, currentServings, baseServings) => {
    return ((baseAmount * currentServings) / baseServings).toFixed(baseAmount < 10 ? 1 : 0);
  };

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
        <meta name="keywords" content="macaron, citron vert, pâtisserie, recette, crème citron, meringue italienne" />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#2D1B36]/40 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-8 left-8 z-30">
             <Link to="/confiserie/macaron">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 gap-2">
                <ArrowLeft className="w-5 h-5" /> Retour
              </Button>
             </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 pb-20 pt-32 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-[#84CC16] mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">Pâtisserie • Confiserie</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  {recipeData.title}
                </h1>
                <p className="text-xl text-gray-300 font-light italic mb-8 border-l-2 border-[#84CC16] pl-6">
                  {recipeData.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest font-medium text-white/80 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-fit">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#84CC16]" />
                    <span>{recipeData.prepTime}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#84CC16]" />
                    <span>{recipeData.cookTime} CUISSON</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-2 text-[#84CC16] font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    {recipeData.difficulty}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl py-16">
          <Tabs defaultValue="coques" className="w-full space-y-12">
            <TabsList className="w-full flex justify-center bg-transparent border-b border-white/10 p-0 h-auto gap-8">
              <TabsTrigger 
                value="coques"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#84CC16] data-[state=active]:text-[#84CC16] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section A - Les Coques
              </TabsTrigger>
              <TabsTrigger 
                value="garniture"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#84CC16] data-[state=active]:text-[#84CC16] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section B - La Garniture
              </TabsTrigger>
            </TabsList>

            {/* SECTION A - COQUES */}
            <TabsContent value="coques" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                {/* Ingredients Column */}
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl sticky top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#84CC16]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <Printer className="w-5 h-5 text-gray-500 hover:text-[#84CC16] cursor-pointer transition-colors" />
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsCoques(Math.max(10, servingsCoques - 10))} className="text-[#84CC16] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsCoques}</span>
                        <button onClick={() => setServingsCoques(servingsCoques + 10)} className="text-[#84CC16] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {coquesIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#84CC16] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsCoques, 70)} {ing.unit}
                            </span>
                          </div>
                          {ing.note && <span className="text-xs text-gray-500 italic">{ing.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#84CC16]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#84CC16]" />
                    </div>
                    <h2 className="text-3xl font-serif text-white">Procédé de fabrication</h2>
                  </div>

                  <div className="space-y-6">
                    {coquesSteps.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative pl-8 pb-8 border-l border-white/10 last:pb-0 last:border-0"
                      >
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#84CC16] text-[#84CC16] text-xs font-bold group-hover:bg-[#84CC16] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#84CC16]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#84CC16]/5">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">
                            {step}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* SECTION B - GARNITURE */}
            <TabsContent value="garniture" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                {/* Ingredients Column */}
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl sticky top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#84CC16]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <Printer className="w-5 h-5 text-gray-500 hover:text-[#84CC16] cursor-pointer transition-colors" />
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsGarniture(Math.max(20, servingsGarniture - 20))} className="text-[#84CC16] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsGarniture}</span>
                        <button onClick={() => setServingsGarniture(servingsGarniture + 20)} className="text-[#84CC16] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {garnitureIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#84CC16] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsGarniture, 140)} {ing.unit}
                            </span>
                          </div>
                          {ing.note && <span className="text-xs text-gray-500 italic">{ing.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#84CC16]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#84CC16]" />
                    </div>
                    <h2 className="text-3xl font-serif text-white">Procédé de fabrication</h2>
                  </div>

                  <div className="space-y-6">
                    {garnitureSteps.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative pl-8 pb-8 border-l border-white/10 last:pb-0 last:border-0"
                      >
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#84CC16] text-[#84CC16] text-xs font-bold group-hover:bg-[#84CC16] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#84CC16]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#84CC16]/5">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">
                            {step}
                          </p>
                          {index === 4 && (
                            <div className="mt-4 flex items-center gap-3 text-[#84CC16] bg-[#84CC16]/5 p-3 rounded-lg border border-[#84CC16]/20">
                              <Thermometer className="w-5 h-5" />
                              <span className="font-bold">Point critique : Frémissement / Chinoiser</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MacaronCitronVert;