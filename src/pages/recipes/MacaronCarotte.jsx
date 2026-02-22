
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Utensils, Printer, Minus, Plus, Thermometer, ArrowLeft, Star, Sparkles, ChevronDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import macaronCarotteImg from '../../assets/macaron-carrote.jpg';

const MacaronCarotte = () => {
  const [servingsCoques, setServingsCoques] = useState(70);
  const [servingsGarniture, setServingsGarniture] = useState(140);
  const { toast } = useToast();

  const recipeData = {
    title: "Macaron Carotte",
    subtitle: "Coques orange + Crème de carottes",
    isVip: true,
    description: "Une création originale mariant la douceur naturelle de la carotte à l'onctuosité du chocolat blanc. Une couleur vibrante pour un goût surprenant.",
    prepTime: "2H 00",
    cookTime: "14 MIN",
    difficulty: "DIFFICILE",
    image: macaronCarotteImg,
    imageAlt: "Macarons carottes " // Updated alt text
  };

  const coquesIngredients = [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "50% poudre d'amande / 50% sucre glace" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Crème de tartre", amount: 1, unit: "g" },
    { name: "Colorant Orange", amount: 2, unit: "g", note: "Adapter selon l'intensité désirée" },
    { name: "Poudre de carotte (facultatif)", amount: 5, unit: "g", note: "Pour renforcer le goût dans la coque" }
  ];

  const garnitureIngredients = [
    { name: "Jus de carotte frais", amount: 200, unit: "g" },
    { name: "Chocolat blanc couverture", amount: 350, unit: "g" },
    { name: "Crème liquide 35%", amount: 80, unit: "g" },
    { name: "Beurre", amount: 40, unit: "g" },
    { name: "Miel d'acacia", amount: 20, unit: "g" },
    { name: "Zeste d'orange", amount: 0.5, unit: "pièce", note: "Pour relever le goût" },
    { name: "Cannelle (optionnel)", amount: 1, unit: "pincée" }
  ];

  const coquesSteps = [
    "Au robot-coupe, broyer finement le tant pour tant amandes avec le sucre glace (et la poudre de carotte si utilisée). Tamiser l'ensemble pour obtenir une poudre très fine.",
    "Dans la cuve du batteur, monter les blancs d'œufs avec la crème de tartre et environ 10% du sucre semoule en 2ème vitesse.",
    "Ajouter le colorant orange lorsque les blancs commencent à mousser.",
    "Serrer les blancs en ajoutant progressivement le reste du sucre semoule jusqu'à obtenir une meringue ferme et brillante (bec d'oiseau).",
    "Incorporer délicatement le mélange poudres à la meringue à l'aide d'une maryse. Macaronner jusqu'à obtenir un ruban lisse et brillant.",
    "Dresser sur plaque munie d'un papier cuisson ou tapis silicone à l'aide d'une poche à douille (douille n°8 ou 10).",
    "Laisser croûter si nécessaire, puis cuire à 150°C (four ventilé) : 4-5 min tirage fermé, puis 12-14 min tirage ouvert."
  ];

  const garnitureSteps = [
    "Faire réduire le jus de carotte de moitié dans une casserole si vous souhaitez un goût très concentré, sinon utiliser tel quel (la recette est calculée pour 200g final).",
    "Dans une casserole, porter à ébullition la crème liquide, le jus de carotte et le miel.",
    "Verser le liquide bouillant sur le chocolat blanc préalablement haché ou en pistoles (en 3 fois), en réalisant une émulsion à la maryse.",
    "Ajouter les zestes d'orange et la cannelle.",
    "Lorsque le mélange est aux alentours de 40°C, ajouter le beurre coupé en dés et mixer au mixeur plongeant pour parfaire l'émulsion.",
    "Filmer au contact et réserver au réfrigérateur pendant au moins 4 heures (idéalement une nuit) pour que la ganache cristallise.",
    "Avant utilisation, foisonner légèrement la ganache si elle est trop ferme, puis garnir les coques."
  ];

  const calculateAmount = (baseAmount, currentServings, baseServings) => {
    return ((baseAmount * currentServings) / baseServings).toFixed(baseAmount < 10 ? 1 : 0);
  };

  const handlePrint = () => {
    toast({
      title: "Impression lancée",
      description: "Préparation du document pour l'impression...",
    });
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
        <meta name="keywords" content="macaron, carotte, chocolat blanc, pâtisserie, original, légume dessert" />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Task 9: Full height hero for mobile */}
        <div className="relative min-h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#2D1B36]/40 to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.imageAlt} 
            loading="eager"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-24 left-4 md:left-8 z-30">
             <Link to="/confiserie/macaron">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 gap-2 bg-black/20 backdrop-blur-md border border-white/5">
                <ArrowLeft className="w-5 h-5" /> Retour
              </Button>
             </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-20 pb-12 pt-32 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:block items-start"
              >
                <div className="flex items-center gap-2 text-[#FB923C] mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">Pâtisserie • Confiserie</span>
                </div>
                
                {/* Task 3: Responsive Typography */}
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  {recipeData.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-light italic mb-8 border-l-2 border-[#FB923C] pl-6">
                  {recipeData.subtitle}
                </p>
                
                {/* Task 7: Mobile Stack for Info */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm tracking-widest font-medium text-white/90 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-full md:w-fit">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#FB923C]" />
                    <span>{recipeData.prepTime}</span>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#FB923C]" />
                    <span>{recipeData.cookTime} CUISSON</span>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-2 text-[#FB923C] font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    {recipeData.difficulty}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Task 6: Generous padding */}
        <div className="container mx-auto px-4 max-w-6xl py-12 md:py-20">
          <Tabs defaultValue="coques" className="w-full space-y-8 md:space-y-12">
            
            {/* Task 5: Touch targets for Tabs */}
            <TabsList className="w-full flex flex-col md:flex-row justify-center bg-transparent border-b border-white/10 p-0 h-auto gap-2 md:gap-8">
              <TabsTrigger 
                value="coques"
                className="w-full md:w-auto rounded-lg md:rounded-none md:border-b-2 border-transparent data-[state=active]:bg-white/5 md:data-[state=active]:bg-transparent data-[state=active]:border-[#FB923C] data-[state=active]:text-[#FB923C] text-gray-400 py-4 px-6 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section A - Les Coques
              </TabsTrigger>
              <TabsTrigger 
                value="garniture"
                className="w-full md:w-auto rounded-lg md:rounded-none md:border-b-2 border-transparent data-[state=active]:bg-white/5 md:data-[state=active]:bg-transparent data-[state=active]:border-[#FB923C] data-[state=active]:text-[#FB923C] text-gray-400 py-4 px-6 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section B - La Garniture
              </TabsTrigger>
            </TabsList>

            {/* SECTION A - COQUES */}
            <TabsContent value="coques" className="animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
              {/* Task 4: Single column on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16">
                
                {/* Ingredients Column */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-6 h-6 text-[#FB923C]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      {/* Task 5: Printer button size */}
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#FB923C] transition-colors"
                        aria-label="Imprimer la recette"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5 gap-4">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      
                      {/* Task 5: Touch targets for scaler */}
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-lg border border-white/10 px-2 py-2 w-full sm:w-auto justify-between sm:justify-center">
                        <button onClick={() => setServingsCoques(Math.max(10, servingsCoques - 10))} className="text-[#FB923C] hover:text-white transition-colors p-3 hover:bg-white/5 rounded-md">
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-white font-mono text-xl font-bold w-16 text-center">{servingsCoques}</span>
                        <button onClick={() => setServingsCoques(servingsCoques + 10)} className="text-[#FB923C] hover:text-white transition-colors p-3 hover:bg-white/5 rounded-md">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {coquesIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-4 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="text-gray-200 font-medium text-lg">{ing.name}</span>
                            <span className="text-[#FB923C] font-bold font-mono text-lg whitespace-nowrap ml-4">
                              {calculateAmount(ing.amount, servingsCoques, 70)} {ing.unit}
                            </span>
                          </div>
                          {ing.note && <span className="text-sm text-gray-500 italic">{ing.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-4 md:mb-8">
                    <div className="p-3 bg-[#FB923C]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#FB923C]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a1a] border border-[#FB923C] text-[#FB923C] text-sm font-bold group-hover:bg-[#FB923C] group-hover:text-black transition-all duration-300 shadow-md shadow-black/50">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#FB923C]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#FB923C]/5">
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
            <TabsContent value="garniture" className="animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-16">
                
                {/* Ingredients Column */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-6 h-6 text-[#FB923C]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#FB923C] transition-colors"
                        aria-label="Imprimer la recette"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5 gap-4">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-lg border border-white/10 px-2 py-2 w-full sm:w-auto justify-between sm:justify-center">
                        <button onClick={() => setServingsGarniture(Math.max(20, servingsGarniture - 20))} className="text-[#FB923C] hover:text-white transition-colors p-3 hover:bg-white/5 rounded-md">
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-white font-mono text-xl font-bold w-16 text-center">{servingsGarniture}</span>
                        <button onClick={() => setServingsGarniture(servingsGarniture + 20)} className="text-[#FB923C] hover:text-white transition-colors p-3 hover:bg-white/5 rounded-md">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {garnitureIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-4 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="text-gray-200 font-medium text-lg">{ing.name}</span>
                            <span className="text-[#FB923C] font-bold font-mono text-lg whitespace-nowrap ml-4">
                              {calculateAmount(ing.amount, servingsGarniture, 140)} {ing.unit}
                            </span>
                          </div>
                          {ing.note && <span className="text-sm text-gray-500 italic">{ing.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-4 md:mb-8">
                    <div className="p-3 bg-[#FB923C]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#FB923C]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#1a1a1a] border border-[#FB923C] text-[#FB923C] text-sm font-bold group-hover:bg-[#FB923C] group-hover:text-black transition-all duration-300 shadow-md shadow-black/50">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#FB923C]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#FB923C]/5">
                          <p className="text-gray-300 leading-relaxed font-light text-lg">
                            {step}
                          </p>
                          {index === 4 && (
                            <div className="mt-6 flex items-start gap-3 text-[#FB923C] bg-[#FB923C]/5 p-4 rounded-lg border border-[#FB923C]/20">
                              <Thermometer className="w-6 h-6 shrink-0" />
                              <span className="font-bold text-base">Température critique : 40°C avant le beurre</span>
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

export default MacaronCarotte;
