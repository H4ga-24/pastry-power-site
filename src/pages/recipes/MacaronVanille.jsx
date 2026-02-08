import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Utensils, Printer, Minus, Plus, Thermometer, ArrowLeft, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const MacaronVanille = () => {
  const [servingsCoques, setServingsCoques] = useState(70);
  const [servingsGarniture, setServingsGarniture] = useState(140);
  const { toast } = useToast();

  const recipeData = {
    title: "Macaron Vanille Intense",
    category: "MACARONS", 
    subtitle: "Coques vanillées aux grains noirs + Ganache Ivoire Vanille",
    description: "L'élégance absolue : une coque parsemée de grains de vanille et une ganache onctueuse infusée aux gousses de Madagascar.",
    prepTime: "1H 45",
    cookTime: "14 MIN",
    difficulty: "DIFFICILE",
    image: "https://images.pexels.com/photos/26774587/pexels-photo-26774587.jpeg?_gl=1*1ayh36l*_ga*MzUxODE3MDM0LjE3NDAyMzEzMDM.*_ga_8JE65Q40S6*czE3NzA1MDI4MDgkbzckZzEkdDE3NzA1MDI4NzYkajU5JGwwJGgw",
  };

  const coquesIngredients = [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "50% poudre d'amande / 50% sucre glace" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Crème de tartre", amount: 1, unit: "g" },
    { name: "Gousses de vanille", amount: 2, unit: "p", note: "Grattées finement" }
  ];

  const garnitureIngredients = [
    { name: "Crème fleurette", amount: 200, unit: "g" },
    { name: "Gousses de Vanille", amount: 3, unit: "p" },
    { name: "Trimoline (sucre inverti)", amount: 20, unit: "g" },
    { name: "Glucose", amount: 20, unit: "g" },
    { name: "Couverture ivoire 35%", amount: 340, unit: "g" },
    { name: "Beurre de cacao Mycryo", amount: 10, unit: "g" }
  ];

  const coquesSteps = [
    "Au robot-coupe, affiner le tant pour tant avec le sucre glace. Ajouter les graines des 2 gousses de vanille directement dans les poudres. Tamiser finement.",
    "Dans la cuve du batteur, monter les blancs d'œufs et la crème de tartre avec un dixième du sucre semoule en 2ème vitesse.",
    "Serrer avec le reste du sucre jusqu'à obtenir une meringue ferme (bec d'oiseau).",
    "Macaronnage : incorporer les poudres vanillées à la meringue à la maryse jusqu'à obtenir un ruban lisse et brillant.",
    "Dresser à la douille n°10 sur tapis de cuisson ou papier siliconé.",
    "Cuisson : 150°C (four ventilé). 5 min tirage fermé pour développer la collerette, puis 12-14 min tirage ouvert pour sécher."
  ];

  const garnitureSteps = [
    "Infusion : chauffer la crème avec le glucose, la trimoline et les 3 gousses de vanille grattées. Laisser infuser 10 min à couvert hors du feu.",
    "Retirer les gousses en les pressant fortement pour extraire toute la vanilline. Remonter à 80°C.",
    "Émulsion : verser en 3 fois sur le chocolat blanc (et le Mycryo) partiellement fondu.",
    "Lissage : mixer au mixeur plongeant sans incorporer de bulles d'air pour obtenir une texture soyeuse.",
    "Cristallisation : verser dans un plat, filmer au contact et réserver 24h au frais à +4°C avant de garnir."
  ];

  const calculateAmount = (baseAmount, currentServings, baseServings) => {
    return ((baseAmount * currentServings) / baseServings).toFixed(baseAmount < 5 ? 1 : 0);
  };

  const handlePrint = () => {
    toast({
      title: "Impression lancée",
      description: "Génération de la fiche technique...",
    });
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#2a241a]/40 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-24 left-4 md:left-8 z-30">
             <Link to="/confiserie/macaron">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 gap-2 bg-black/20 backdrop-blur-md border border-white/5">
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
                <span className="text-[#E3C565] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  Pâtisserie • Confiserie
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  {recipeData.title}
                </h1>
                <p className="text-xl text-gray-300 font-light italic mb-8 border-l-2 border-[#E3C565] pl-6">
                  {recipeData.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest font-medium text-white/80 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-fit">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#E3C565]" />
                    <span>{recipeData.prepTime}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#E3C565]" />
                    <span>{recipeData.cookTime} CUISSON</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-[#E3C565] font-bold">
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
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E3C565] data-[state=active]:text-[#E3C565] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section A - Coques Vanillées
              </TabsTrigger>
              <TabsTrigger 
                value="garniture"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#E3C565] data-[state=active]:text-[#E3C565] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section B - Ganache Intense
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coques" className="animate-in fade-in duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#E3C565]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button onClick={handlePrint} className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#E3C565] transition-colors">
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Coques (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsCoques(Math.max(10, servingsCoques - 10))} className="text-[#E3C565] hover:text-white p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsCoques}</span>
                        <button onClick={() => setServingsCoques(servingsCoques + 10)} className="text-[#E3C565] hover:text-white p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {coquesIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#E3C565] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsCoques, 70)} {ing.unit}
                            </span>
                          </div>
                          {ing.note && <span className="text-xs text-gray-500 italic">{ing.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E3C565]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#E3C565]" />
                    </div>
                    <h2 className="text-3xl font-serif text-white">Procédé Vanillé</h2>
                  </div>

                  <div className="space-y-6">
                    {coquesSteps.map((step, index) => (
                      <div key={index} className="group relative pl-8 pb-8 border-l border-white/10 last:pb-0 last:border-0">
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#E3C565] text-[#E3C565] text-xs font-bold">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 shadow-lg">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="garniture" className="animate-in fade-in duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#E3C565]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Garniture (unités)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsGarniture(Math.max(20, servingsGarniture - 20))} className="text-[#E3C565] p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsGarniture}</span>
                        <button onClick={() => setServingsGarniture(servingsGarniture + 20)} className="text-[#E3C565] p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {garnitureIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#E3C565] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsGarniture, 140)} {ing.unit}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#E3C565]/10 rounded-full">
                      <Info className="w-6 h-6 text-[#E3C565]" />
                    </div>
                    <h2 className="text-3xl font-serif text-white">Technique de Ganacherie</h2>
                  </div>

                  <div className="space-y-6">
                    {garnitureSteps.map((step, index) => (
                      <div key={index} className="group relative pl-8 pb-8 border-l border-white/10 last:pb-0 last:border-0">
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#E3C565] text-[#E3C565] text-xs font-bold">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 shadow-lg">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">{step}</p>
                          {index === 4 && (
                            <div className="mt-4 flex items-center gap-3 text-[#E3C565] bg-[#E3C565]/5 p-3 rounded-lg border border-[#E3C565]/20">
                              <Thermometer className="w-5 h-5" />
                              <span className="font-bold font-mono">Repos : 24 heures</span>
                            </div>
                          )}
                        </div>
                      </div>
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

export default MacaronVanille;