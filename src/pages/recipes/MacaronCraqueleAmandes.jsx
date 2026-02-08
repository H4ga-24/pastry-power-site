import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer } from 'lucide-react';

const MacaronCraqueleAmandes = () => {
  const baseServings = 20;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PETITS FOURS SECS",
    title: "Macaron craquelé aux amandes",
    prepTime: "15 MIN",
    cookTime: "15 MIN",
    difficulty: "FACILE",
    description: "Des macarons rustiques, très parfumés à l'amande, croquants dehors et tendres dedans. Souvent appelés amaretti.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2024/07/macarons-craqueles-amandes.jpg",
  };

  const ingredients = [
    { name: 'Poudre d\'amande', amount: 250, unit: 'g' },
    { name: 'Sucre en poudre', amount: 200, unit: 'g' },
    { name: 'Blancs d\'œufs', amount: 2, unit: 'pcs' },
    { name: 'Extrait d\'amande amère', amount: 0.5, unit: 'cc' },
    { name: 'Sucre glace', amount: 80, unit: 'g' }
  ];

  const steps = [
    { title: "MÉLANGE SEC", text: "Mélanger la poudre d'amande et le sucre en poudre." },
    { title: "LIQUIDES", text: "Ajouter les blancs d'œufs légèrement battus et l'extrait d'amande amère." },
    { title: "PÂTE", text: "Travailler la pâte jusqu'à obtenir une boule homogène." },
    { title: "FAÇONNAGE", text: "Former des petites boules de la taille d'une noix." },
    { title: "ENROBAGE", text: "Rouler chaque boule dans le sucre glace." },
    { title: "CUISSON", text: "Cuire à 160°C pendant 15 minutes. Les biscuits vont craqueler." }
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
export default MacaronCraqueleAmandes;