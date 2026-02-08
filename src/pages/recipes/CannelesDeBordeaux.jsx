import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer } from 'lucide-react';

const CannelesDeBordeaux = () => {
  const baseServings = 16;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PETITS FOURS SECS",
    title: "Cannelés de Bordeaux",
    prepTime: "25 MIN + 24H",
    cookTime: "50 MIN",
    difficulty: "MOYEN",
    description: "Le fameux petit gâteau bordelais, croustillant et caramélisé à l'extérieur, fondant à l'intérieur, parfumé au rhum et à la vanille.",
    image: "https://assets.afcdn.com/recipe/20230621/143653_w1024h1024c1cx960cy540cxt0cyt0cxb1920cyb1080.jpg",
  };

  const ingredients = [
    { name: 'Lait entier', amount: 500, unit: 'ml' },
    { name: 'Beurre', amount: 50, unit: 'g' },
    { name: 'Sucre', amount: 250, unit: 'g' },
    { name: 'Farine', amount: 100, unit: 'g' },
    { name: 'Jaunes d\'œufs', amount: 2, unit: 'pcs' },
    { name: 'Œufs entiers', amount: 2, unit: 'pcs' },
    { name: 'Rhum', amount: 50, unit: 'ml' },
    { name: 'Vanille', amount: 1, unit: 'gousse' }
  ];

  const steps = [
    { title: "INFUSION", text: "Faire bouillir le lait avec la vanille et le beurre." },
    { title: "MÉLANGE", text: "Mélanger la farine et le sucre, puis incorporer les œufs et les jaunes." },
    { title: "DÉTENTE", text: "Verser le lait bouillant sur le mélange œufs/sucre tout en fouettant doucement pour obtenir une pâte fluide." },
    { title: "PARFUM", text: "Ajouter le rhum une fois le mélange refroidi." },
    { title: "REPOS", text: "Laisser reposer 24h au réfrigérateur (étape cruciale)." },
    { title: "CUISSON", text: "Cuire dans des moules à cannelés à 240°C pendant 10 min, puis baisser à 180°C pour 40-50 min." }
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
export default CannelesDeBordeaux;