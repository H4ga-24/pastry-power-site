import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Wheat, Ban } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PainMaisSansGluten = () => {
  const baseServings = 2; // Pains
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "ALTERNATIVE • SANS-GLUTEN", // Le scanner va lire "GLUTEN" ici
    title: "Pain au Maïs (Sans Gluten)",
    prepTime: "20 MIN",
    cookTime: "35 MIN",
    difficulty: "FACILE",
    description: "Un pain doré à la mie serrée mais moelleuse, réalisé sans farine de blé. Idéal pour les intolérants au gluten.",
    image: "https://images.unsplash.com/photo-1603279126476-93ce8278312c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const ingredients = [
    { name: 'Farine de Maïs', amount: 250, unit: 'g' },
    { name: 'Fécule de Maïs (Maïzena)', amount: 100, unit: 'g' },
    { name: 'Farine de Riz complet', amount: 150, unit: 'g' },
    { name: 'Psyllium (liant)', amount: 15, unit: 'g' },
    { name: 'Eau tiède', amount: 450, unit: 'g' },
    { name: 'Levure boulangère sèche (GF)', amount: 7, unit: 'g' },
    { name: 'Sel', amount: 8, unit: 'g' },
    { name: 'Huile d\'olive', amount: 30, unit: 'g' }
  ];

  const steps = [
    {
      title: "MÉLANGE SEC.",
      text: "Dans un cul-de-poule, mélanger toutes les farines, la fécule, le sel et le psyllium."
    },
    {
      title: "HYDRATATION.",
      text: "Délayer la levure dans un peu d'eau tiède. Ajouter l'eau et l'huile aux poudres. Mélanger vigoureusement (la pâte sans gluten ne se pétrit pas comme du blé, elle ressemble à une pâte à cake épaisse)."
    },
    {
      title: "POUSSE.",
      text: "Verser la pâte dans des moules à cake graissés (la pâte s'étale sinon). Laisser lever 45 min à 1h dans un endroit tiède et humide."
    },
    {
      title: "CUISSON.",
      text: "Enfourner à 220°C pendant 35 à 40 minutes. Démouler et laisser refroidir sur grille."
    }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(baseAmount % 1 === 0 ? 0 : 1);
  };
  const increment = () => setServings(prev => prev + 1);
  const decrement = () => setServings(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Pastry Power</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          
          <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex gap-2 mb-4">
                  <span className="bg-red-500/20 text-red-300 border border-red-500/50 px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                    <Ban size={12} /> Sans Gluten
                  </span>
                  <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase flex items-center">{recipeData.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-4xl leading-tight">{recipeData.title}</h1>
              <div className="flex flex-wrap items-center gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
                <div className="border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full text-[10px]">{recipeData.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl pb-24">
          <div className="flex gap-4 mb-16 max-w-4xl ml-auto">
            <span className="text-[#D4AF37] text-6xl font-serif leading-none">“</span>
            <p className="text-gray-300 font-light text-lg italic leading-relaxed pt-4">{recipeData.description}</p>
          </div>

          <div className="grid lg:grid-cols-[350px_1fr] gap-16">
            <div>
               <div className="sticky top-24">
                 <div className="bg-[#1a1a1a] border-t-2 border-[#D4AF37] p-6 mb-8">
                   <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                     <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                     <Printer className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                   </div>
                   
                   <div className="flex items-center justify-between bg-[#121212] p-3 rounded mb-6">
                     <span className="text-sm text-gray-400">Pains</span>
                     <div className="flex items-center gap-4">
                       <button onClick={decrement} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                       <span className="text-white font-serif text-lg w-12 text-center">{servings}</span>
                       <button onClick={increment} className="text-[#D4AF37] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                     </div>
                   </div>

                   <ul className="space-y-4">
                     {ingredients.map((ing, i) => (
                       <li key={i} className="flex justify-between text-sm">
                         <span className="text-gray-300">{ing.name}</span>
                         <span className="text-[#D4AF37] font-medium">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Étapes de réalisation</h2>
              <div className="space-y-10 mb-16">
                {steps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-sm group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">{index + 1}</div>
                    </div>
                    <div>
                      <h3 className="text-[#D4AF37] font-serif text-lg mb-2 uppercase tracking-wide">{step.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#1a1a1a] border border-white/5">
                <Tabs defaultValue="technique" className="w-full">
                  <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0 h-auto rounded-none">
                      <TabsTrigger value="technique" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Wheat className="w-3 h-3 mr-2" />Technique</TabsTrigger>
                  </TabsList>
                  <div className="p-8">
                      <TabsContent value="technique" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Le Psyllium ?</h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        C'est l'ingrédient magique du sans gluten. C'est une fibre qui gonfle au contact de l'eau et crée un "gel" qui remplace le rôle élastique du gluten. Sans lui, le pain s'effrite.
                      </p>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PainMaisSansGluten;