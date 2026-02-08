import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Wheat, Ban, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CrepesSansGluten = () => {
  const baseServings = 15; // Environ 15 crêpes
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    // 👇 Le scanner va lire "GLUTEN" ici et le ranger automatiquement
    category: "ALTERNATIVE • SANS-GLUTEN", 
    title: "Crêpes Légères (Sans Gluten)",
    prepTime: "10 MIN + Repos",
    cookTime: "20 MIN",
    difficulty: "TRÈS FACILE",
    description: "Des crêpes fines, dorées et incroyablement légères. Le mélange riz-maïzena remplace la farine de blé à la perfection sans changer le goût.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1470&auto=format&fit=crop",
  };

  const ingredients = [
    { name: 'Farine de Riz demi-complet', amount: 150, unit: 'g' },
    { name: 'Fécule de Maïs (Maïzena)', amount: 100, unit: 'g' },
    { name: 'Sucre en poudre', amount: 40, unit: 'g' },
    { name: 'Oeufs entiers', amount: 4, unit: 'pièces' },
    { name: 'Lait demi-écrémé (ou Soja)', amount: 500, unit: 'g' },
    { name: 'Beurre fondu (ou Huile)', amount: 40, unit: 'g' },
    { name: 'Sel fin', amount: 2, unit: 'pincée' },
    { name: 'Vanille ou Rhum (facultatif)', amount: 10, unit: 'g' }
  ];

  const steps = [
    {
      title: "LES POUDRES.",
      text: "Dans un grand saladier, tamiser ensemble la farine de riz et la fécule de maïs. Ajouter le sucre et le sel. Former un puits au centre."
    },
    {
      title: "LE MÉLANGE.",
      text: "Casser les oeufs dans le puits. Commencer à fouetter doucement au centre en incorporant petit à petit les farines."
    },
    {
      title: "LA DÉTENTE.",
      text: "Verser le lait très progressivement tout en continuant de fouetter pour éviter les grumeaux. La pâte doit être fluide et lisse."
    },
    {
      title: "FINITION.",
      text: "Ajouter le beurre fondu (et l'arôme choisi). Mélanger vigoureusement."
    },
    {
      title: "REPOS (CRUCIAL).",
      text: "Laisser reposer la pâte 1 heure à température ambiante (ou au frais). La farine de riz a besoin de temps pour s'hydrater et s'assouplir."
    },
    {
      title: "CUISSON.",
      text: "Graisser une poêle bien chaude. Verser une louche, étaler finement. Cuire 1 à 2 min par face jusqu'à coloration dorée."
    }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(baseAmount % 1 === 0 ? 0 : 1);
  };
  const increment = () => setServings(prev => prev + 5);
  const decrement = () => setServings(prev => (prev > 5 ? prev - 5 : 5));

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
              {/* BADGE SPÉCIAL */}
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
                     <span className="text-sm text-gray-400">Crêpes</span>
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
                <Tabs defaultValue="astuce" className="w-full">
                  <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0 h-auto rounded-none">
                      <TabsTrigger value="astuce" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Info className="w-3 h-3 mr-2" />Astuce Chef</TabsTrigger>
                      <TabsTrigger value="science" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Wheat className="w-3 h-3 mr-2" />Science</TabsTrigger>
                  </TabsList>
                  <div className="p-8">
                      <TabsContent value="astuce" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Texture Parfaite</h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Si la pâte épaissit trop après le repos (la farine de riz absorbe beaucoup), n'hésitez pas à rajouter un tout petit peu d'eau ou de lait avant de cuire la première crêpe.
                      </p>
                    </TabsContent>
                    <TabsContent value="science" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Pourquoi ce mélange ?</h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        La farine de riz seule donne une crêpe cassante et granuleuse. La fécule de maïs (amidon pur) apporte le liant et la légèreté qui manquent au riz. C'est le duo gagnant.
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

export default CrepesSansGluten;