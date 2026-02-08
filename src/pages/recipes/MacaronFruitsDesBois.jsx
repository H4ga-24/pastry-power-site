import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Utensils, Printer, Minus, Plus, Thermometer, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const MacaronFruitsDesBois = () => {
  const [servingsCoques, setServingsCoques] = useState(70);
  const [servingsGarniture, setServingsGarniture] = useState(210);
  const { toast } = useToast();

  const recipeData = {
    title: "Macaron aux Fruits des Bois",
    category: "MACARONS", 
    subtitle: "Coques + Garniture confiture",
    description: "Une explosion de saveurs fruitées avec une confiture maison aux fruits des bois nichée dans une coque violette intense.",
    prepTime: "2H 00",
    cookTime: "14 MIN",
    difficulty: "DIFFICILE",
    image: "https://plus.unsplash.com/premium_photo-1703690569954-9cd782cd927e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const coquesIngredients = [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "50% poudre d'amande / 50% sucre glace" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Crème de tartre", amount: 1, unit: "g" },
    { name: "Colorant Jaune", amount: 35, unit: "gouttes" },
    { name: "Colorant Rouge", amount: 65, unit: "gouttes" },
    { name: "Colorant Bleu", amount: 25, unit: "gouttes" },
    { name: "Colorant Noir", amount: 15, unit: "gouttes" }
  ];

  const garnitureIngredients = [
    { name: "Pulpe de fruits des bois", amount: 50, unit: "g" },
    { name: "Groseilles", amount: 50, unit: "g" },
    { name: "Fraises des bois", amount: 125, unit: "g" },
    { name: "Myrtilles", amount: 125, unit: "g" },
    { name: "Framboises", amount: 100, unit: "g" },
    { name: "Mûres", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Pectine jaune", amount: 10, unit: "g", note: "+ 30g de sucre semoule supplémentaire" },
    { name: "Acide tartrique", amount: 5, unit: "gouttes" }
  ];

  const coquesSteps = [
    "Au robot-coupe, broyer finement le tant pour tant amandes avec le sucre glace. Tamiser l'ensemble pour obtenir une poudre très fine.",
    "Dans la cuve du batteur, monter les blancs d'œufs avec la crème de tartre et environ 10% du sucre semoule en 2ème vitesse. Une fois mousseux, ajouter le mélange de colorants.",
    "Serrer les blancs en ajoutant progressivement le reste du sucre semoule jusqu'à obtenir une meringue ferme et brillante (bec d'oiseau).",
    "Incorporer délicatement le mélange poudres (tant pour tant + sucre glace) à la meringue à l'aide d'une maryse. Macaronner jusqu'à obtenir un ruban lisse et brillant. Dresser sur plaque et cuire à 150°C (four ventilé) : 4-5 min tirage fermé, puis 12-14 min tirage ouvert."
  ];

  const garnitureSteps = [
    "Dans une casserole, mélanger tous les fruits (pulpe, groseilles, fraises, myrtilles, framboises, mûres) avec la première partie du sucre semoule (150g).",
    "Chauffer le mélange jusqu'à 60°C.",
    "Incorporer la pectine jaune préalablement mélangée avec les 30g de sucre restants. Porter à ébullition.",
    "Cuire jusqu'à atteindre 102°C (ou 50° Brix au réfractomètre).",
    "Ajouter l'acide tartrique, mélanger vivement, puis débarrasser, filmer au contact et laisser refroidir avant utilisation."
  ];

  const calculateAmount = (baseAmount, currentServings, baseServings) => {
    return ((baseAmount * currentServings) / baseServings).toFixed(baseAmount < 10 ? 1 : 0);
  };

  const handlePrint = () => {
    toast({
      title: "Impression lancée",
      description: "Préparation de la fiche technique...",
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#2D1B36]/40 to-transparent z-10" />
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
                <span className="text-[#C084FC] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  Pâtisserie • Confiserie
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  {recipeData.title}
                </h1>
                <p className="text-xl text-gray-300 font-light italic mb-8 border-l-2 border-[#C084FC] pl-6">
                  {recipeData.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest font-medium text-white/80 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-fit">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C084FC]" />
                    <span>{recipeData.prepTime}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#C084FC]" />
                    <span>{recipeData.cookTime} CUISSON</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-[#C084FC] font-bold">
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
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#C084FC] data-[state=active]:text-[#C084FC] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section A - Les Coques
              </TabsTrigger>
              <TabsTrigger 
                value="garniture"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#C084FC] data-[state=active]:text-[#C084FC] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section B - La Garniture
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coques" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#C084FC]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#C084FC] transition-colors"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsCoques(Math.max(10, servingsCoques - 10))} className="text-[#C084FC] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsCoques}</span>
                        <button onClick={() => setServingsCoques(servingsCoques + 10)} className="text-[#C084FC] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {coquesIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#C084FC] font-bold font-mono">
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
                    <div className="p-3 bg-[#C084FC]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#C084FC]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#C084FC] text-[#C084FC] text-xs font-bold group-hover:bg-[#C084FC] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#C084FC]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#C084FC]/5">
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

            <TabsContent value="garniture" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#C084FC]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#C084FC] transition-colors"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsGarniture(Math.max(30, servingsGarniture - 30))} className="text-[#C084FC] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsGarniture}</span>
                        <button onClick={() => setServingsGarniture(servingsGarniture + 30)} className="text-[#C084FC] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {garnitureIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#C084FC] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsGarniture, 210)} {ing.unit}
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
                    <div className="p-3 bg-[#C084FC]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#C084FC]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#C084FC] text-[#C084FC] text-xs font-bold group-hover:bg-[#C084FC] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#C084FC]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#C084FC]/5">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">
                            {step}
                          </p>
                          {index === 3 && (
                            <div className="mt-4 flex items-center gap-3 text-[#C084FC] bg-[#C084FC]/5 p-3 rounded-lg border border-[#C084FC]/20">
                              <Thermometer className="w-5 h-5" />
                              <span className="font-bold">Point critique : 102°C</span>
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

export default MacaronFruitsDesBois;