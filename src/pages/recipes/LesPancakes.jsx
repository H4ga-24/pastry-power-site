import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LesPancakes = () => {
  const baseServings = 9; // as per screenshot "9 Nombre de pièces"
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PÂTES",
    title: "Les pancakes",
    prepTime: "15 MIN",
    cookTime: "15 MIN",
    difficulty: "FACILE",
    description: "Le pancake est une crêpe d'aspect et de saveur très différents à la crêpe européenne (diamètre plus faible, plus épaisse). L'épaisseur provient de la consistance de la pâte et de l'usage d'un agent levant (levure chimique).",
    image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/Pancake.jpg",
  };

  const ingredients = [
    { name: 'Farine type 55', amount: 250, unit: 'g' },
    { name: 'Levure Chimique', amount: 10, unit: 'g' },
    { name: 'Sucre semoule', amount: 40, unit: 'g' },
    { name: 'Sel fin', amount: 2, unit: 'g' },
    { name: 'Lait demi-écrémé', amount: 380, unit: 'g' },
    { name: 'Oeufs', amount: 100, unit: 'g' },
    { name: 'Beurre fondu froid', amount: 50, unit: 'g' },
    { name: 'Vanille gousse', amount: 0.5, unit: 'pc' }
  ];

  const steps = [
    {
      title: "PRÉPARATION DE LA PÂTE.",
      text: "Faire fondre le beurre et le laisser refroidir. Dans un cul de poule, tamiser ensemble la farine et la levure chimique. Ajouter le sucre et le sel. Mélanger les poudres."
    },
    {
      title: "MÉLANGE LIQUIDE.",
      text: "Dans un autre récipient, battre les oeufs avec le lait et les graines de la gousse de vanille."
    },
    {
      title: "ASSEMBLAGE.",
      text: "Verser le mélange liquide sur les poudres. Fouetter délicatement en partant du centre pour incorporer la farine progressivement et éviter les grumeaux. Ne pas trop travailler la pâte une fois la farine mouillée."
    },
    {
      title: "FINITION.",
      text: "Incorporer le beurre fondu refroidi. Mélanger pour lisser la pâte."
    },
    {
      title: "REPOS.",
      text: "Laisser reposer la pâte 30 minutes au réfrigérateur (ou à température ambiante si utilisation rapide) pour permettre à la levure d'agir légèrement et au gluten de se détendre."
    },
    {
      title: "CUISSON.",
      text: "Dans une poêle chaude et légèrement huilée ou beurrée, verser une petite louche de pâte. Cuire à feu moyen. Lorsque des bulles apparaissent à la surface et éclatent, retourner le pancake et cuire l'autre face environ 1 minute."
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
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
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
                     <span className="text-sm text-gray-400">Pièces</span>
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
                <Tabs defaultValue="conseils" className="w-full">
                  <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0 h-auto rounded-none">
                    <TabsTrigger value="conseils" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Sparkles className="w-3 h-3 mr-2" />Conseils</TabsTrigger>
                    <TabsTrigger value="astuces" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Star className="w-3 h-3 mr-2" />Astuces</TabsTrigger>
                  </TabsList>
                  <div className="p-8">
                    <TabsContent value="conseils" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Dégustation</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Il se mange généralement sucré avec du sirop d'érable, de la confiture, du miel, ou salé, avec du beurre, des oeufs et du bacon.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Moelleux</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Pour des pancakes encore plus aériens, vous pouvez monter les blancs d'oeufs en neige et les incorporer délicatement à la fin de la préparation.</p>
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

export default LesPancakes;