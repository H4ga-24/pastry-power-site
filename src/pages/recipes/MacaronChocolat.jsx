
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Utensils, Printer, Minus, Plus, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';


const MacaronChocolat = () => {
  const [servingsCoques, setServingsCoques] = useState(70);
  const [servingsGarniture, setServingsGarniture] = useState(140);
  const { toast } = useToast();

  const recipeData = {
    title: "Macaron Chocolat",
    category: "MACARONS", // 👈 AJOUTE CETTE LIGNE ICI
    subtitle: "Coques au chocolat + Ganache chocolat",
    description: "L'alliance parfaite d'une coque croquante au cacao et d'une ganache intense au chocolat noir 70%.",
    prepTime: "1H 30",
    cookTime: "14 MIN",
    difficulty: "DIFFICILE",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/84cdb85e2de66b4be54b6127281c2272.png", // Updated image
    imageAlt: "Macarons au chocolat sur une assiette blanche, posée sur un comptoir en marbre blanc." // Descriptive alt text
  };

  const coquesIngredients = [
    { name: "Tant pour tant amandes", amount: 475, unit: "g", note: "50% poudre d'amande / 50% sucre glace" },
    { name: "Poudre de cacao", amount: 25, unit: "g" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Pulpe d'abricots", amount: 10, unit: "g" },
    { name: "Crème de tartre", amount: 1, unit: "g" },
    { name: "Colorant rouge", amount: 5, unit: "gouttes" }
  ];

  const garnitureIngredients = [
    { name: "Crème liquide", amount: 270, unit: "g" },
    { name: "Lait", amount: 100, unit: "g" },
    { name: "Sucre inverti", amount: 20, unit: "g" },
    { name: "Beurre", amount: 40, unit: "g" },
    { name: "Chocolat noir Ultime 70%", amount: 350, unit: "g" }
  ];

  const coquesSteps = [
    "Au cutter, affiner le tant pour tant amandes avec le sucre glace, le cacao poudre et la pulpe d'abricot. Tamiser l'ensemble pour obtenir une poudre fine.",
    "Monter avec un fouet, en 2ème vitesse, les blancs d'œufs et la crème de tartre avec un dixième du poids de sucre. Ajouter les gouttes de colorant.",
    "Serrer le tout avec le restant de sucre et laisser meringuer quelques secondes.",
    "À l'aide d'une spatule, incorporer progressivement la poudre aux blancs montés, puis faire macaronner jusqu'à l'obtention d'une consistance lisse et brillante.",
    "Dresser avec une poche à douille unie n°10 sur papier spécial macaron.",
    "Faire cuire (four ventilé à 150°C, tirage fermé pendant 4 à 5 min, puis ouvert pendant 12 à 14 min)."
  ];

  const garnitureSteps = [
    "Faire chauffer la crème, le lait avec le sucre inverti à 85°C.",
    "Au cutter, hacher le chocolat, verser le liquide, puis émulsionner.",
    "Redescendre en température à 40°C puis incorporer le beurre tempéré à 22°C.",
    "Verser dans un candissoire, filmer au contact et laisser durcir (cristalliser).",
    "Garnir la moitié des coques et assembler."
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
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent z-10" />
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

          <div className="absolute bottom-0 left-0 w-full z-20 pb-20 pt-32 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  Pâtisserie • Confiserie
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                  {recipeData.title}
                </h1>
                <p className="text-xl text-gray-300 font-light italic mb-8 border-l-2 border-[#D4AF37] pl-6">
                  {recipeData.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest font-medium text-white/80 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-fit">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span>{recipeData.prepTime}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#D4AF37]" />
                    <span>{recipeData.cookTime} CUISSON</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-[#D4AF37] font-bold">
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
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:text-[#D4AF37] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section A - Les Coques
              </TabsTrigger>
              <TabsTrigger 
                value="garniture"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:text-[#D4AF37] text-gray-400 py-4 text-lg font-serif uppercase tracking-widest transition-all hover:text-white"
              >
                Section B - La Garniture
              </TabsTrigger>
            </TabsList>

            {/* SECTION A - COQUES */}
            <TabsContent value="coques" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-[400px_1fr] gap-16">
                {/* Ingredients Column */}
                <div className="space-y-8">
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#D4AF37]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#D4AF37] transition-colors"
                        aria-label="Imprimer la recette"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsCoques(Math.max(10, servingsCoques - 10))} className="text-[#D4AF37] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsCoques}</span>
                        <button onClick={() => setServingsCoques(servingsCoques + 10)} className="text-[#D4AF37] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {coquesIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#D4AF37] font-bold font-mono">
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
                    <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#D4AF37]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#D4AF37] text-[#D4AF37] text-xs font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4AF37]/5">
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
                  <div className="bg-[#1a1a1a] rounded-xl p-8 border border-white/5 shadow-xl lg:sticky lg:top-24">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-[#D4AF37]" />
                        <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                      </div>
                      <button 
                        onClick={handlePrint} 
                        className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-[#D4AF37] transition-colors"
                        aria-label="Imprimer la recette"
                      >
                         <Printer className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-8 border border-white/5">
                      <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Quantité (pièces)</span>
                      <div className="flex items-center gap-4 bg-[#1a1a1a] rounded-md border border-white/10 px-2 py-1">
                        <button onClick={() => setServingsGarniture(Math.max(20, servingsGarniture - 20))} className="text-[#D4AF37] hover:text-white transition-colors p-1">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-mono text-lg w-12 text-center">{servingsGarniture}</span>
                        <button onClick={() => setServingsGarniture(servingsGarniture + 20)} className="text-[#D4AF37] hover:text-white transition-colors p-1">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {garnitureIngredients.map((ing, i) => (
                        <li key={i} className="flex flex-col pb-3 border-b border-white/5 last:border-0">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-gray-300 font-medium">{ing.name}</span>
                            <span className="text-[#D4AF37] font-bold font-mono">
                              {calculateAmount(ing.amount, servingsGarniture, 140)} {ing.unit}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps Column */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                      <Utensils className="w-6 h-6 text-[#D4AF37]" />
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
                        <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#D4AF37] text-[#D4AF37] text-xs font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                          {index + 1}
                        </span>
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#D4AF37]/5">
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
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MacaronChocolat;
