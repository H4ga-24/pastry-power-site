import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CremeuxFleurOranger = () => {
  const baseServings = 6;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    title: "Crémeux Fleur d'Oranger",
    category: "PÂTISSERIE • CRÉMEUX",
    prepTime: "20 MIN",
    cookTime: "10 MIN",
    difficulty: "FACILE",
    description: "Un parfum délicat qui évoque la Méditerranée, idéal pour des desserts orientaux revisités ou pour accompagner des fruits secs.",
    image: "https://www.elle-et-vire.com/uploads/cache/930w/uploads/recip/recipe/1830/cr-me-l-orange-1-1920x1200.jpg"
  };

  const ingredients = [
    { name: 'Crème liquide 35%', amount: 250, unit: 'g' },
    { name: 'Lait entier', amount: 250, unit: 'g' },
    { name: 'Eau de fleur d\'oranger', amount: 25, unit: 'g' },
    { name: 'Jaunes d\'œufs', amount: 90, unit: 'g' },
    { name: 'Sucre semoule', amount: 60, unit: 'g' },
    { name: 'Gélatine', amount: 4, unit: 'g' },
    { name: 'Chocolat blanc', amount: 80, unit: 'g' }
  ];

  const steps = [
    { title: "Préparation", text: "Hydrater la gélatine. Hacher le chocolat blanc." },
    { title: "Cuisson", text: "Chauffer le lait et la crème. Cuire à l'anglaise (83°C) avec les jaunes et le sucre." },
    { title: "Parfum", text: "Hors du feu, ajouter l'eau de fleur d'oranger (ne pas la faire bouillir pour préserver l'arôme)." },
    { title: "Collage", text: "Incorporer la gélatine. Verser sur le chocolat blanc." },
    { title: "Emulsion", text: "Mixer pour obtenir une texture soyeuse." }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(0);
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
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          
          <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <Link to="/patisserie/bases/cremeux" className="inline-flex items-center text-gray-300 hover:text-[#D4AF37] transition-colors mb-6 text-sm tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux crémeux
              </Link>
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-4xl leading-tight">{recipeData.title}</h1>
              <div className="flex flex-wrap items-center gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime} PRÉPARATION</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime} CUISSON</span></div>
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
                     <span className="text-sm text-gray-400">Pour {servings} personnes</span>
                     <div className="flex items-center gap-4">
                       <button onClick={decrement} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                       <span className="text-white font-serif text-lg w-4 text-center">{servings}</span>
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
              <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Procédé de réalisation</h2>
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
                <Tabs defaultValue="conseils" className="w-full">
                   <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0 h-auto rounded-none">
                     <TabsTrigger value="conseils" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Sparkles className="w-3 h-3 mr-2" />Conseils</TabsTrigger>
                     <TabsTrigger value="astuces" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Star className="w-3 h-3 mr-2" />Astuces</TabsTrigger>
                  </TabsList>
                  <div className="p-8">
                     <TabsContent value="conseils" className="m-0">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Qualité</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Utilisez une eau de fleur d'oranger naturelle (distillat) et non un arôme artificiel pour un goût subtil et non médicamenteux.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Mariage</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Associez ce crémeux avec une dacquoise amande, des pistaches torréfiées ou des abricots rôtis.</p>
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

export default CremeuxFleurOranger;