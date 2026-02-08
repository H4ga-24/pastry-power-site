import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';

const Friands = () => {
  const baseServings = 10;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PETITS FOURS SECS",
    title: "Friands",
    prepTime: "15 MIN",
    cookTime: "20 MIN",
    difficulty: "TRÈS FACILE",
    description: "Des petits gâteaux aux amandes proches des financiers, souvent garnis de fruits ou nature.",
    image: "https://storage.canalblog.com/61/27/262330/59212008_p.jpg",
  };

  const ingredients = [
    { name: 'Blancs d\'œufs', amount: 5, unit: 'pcs' },
    { name: 'Beurre fondu', amount: 180, unit: 'g' },
    { name: 'Sucre glace', amount: 200, unit: 'g' },
    { name: 'Poudre d\'amande', amount: 120, unit: 'g' },
    { name: 'Farine', amount: 80, unit: 'g' },
    { name: 'Vanille', amount: 1, unit: 'cc' }
  ];

  const steps = [
    { title: "PRÉPARATION", text: "Fouetter légèrement les blancs d'œufs jusqu'à ce qu'ils soient mousseux." },
    { title: "MÉLANGE", text: "Ajouter le beurre fondu refroidi, la vanille, puis les ingrédients secs tamisés." },
    { title: "REPOS", text: "Laisser reposer la pâte au frais pendant 30 minutes." },
    { title: "CUISSON", text: "Verser dans des moules beurrés et cuire à 190°C pendant 20 minutes jusqu'à dorure." }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(baseAmount % 1 === 0 ? 0 : 1);
  };

  const increment = () => setServings(prev => prev + 1);
  const decrement = () => setServings(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>
      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">{recipeData.title}</h1>
              <div className="flex gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
                <div className="border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full">{recipeData.difficulty}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl pb-24">
          <div className="grid lg:grid-cols-[350px_1fr] gap-16 mt-16">
            <div>
               <div className="bg-[#1a1a1a] border-t-2 border-[#D4AF37] p-6 mb-8 sticky top-24">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                   <Printer className="w-4 h-4 text-gray-500 cursor-pointer" />
                 </div>
                 <div className="flex items-center justify-between bg-[#121212] p-3 rounded mb-6">
                   <span className="text-sm text-gray-400">Portions</span>
                   <div className="flex items-center gap-4">
                     <button onClick={decrement} className="text-[#D4AF37]"><Minus className="w-4 h-4" /></button>
                     <span className="text-white font-serif text-lg">{servings}</span>
                     <button onClick={increment} className="text-[#D4AF37]"><Plus className="w-4 h-4" /></button>
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
            <div>
              <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Étapes de réalisation</h2>
              <div className="space-y-10 mb-16">
                {steps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-6">
                    <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-sm flex-shrink-0">{index + 1}</div>
                    <div>
                      <h3 className="text-[#D4AF37] font-serif text-lg mb-2 uppercase">{step.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Friands;