import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LaPateABrioche = () => {
  const baseServings = 8; // 1 Brioche ou 8 parts
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PÂTES",
    title: "La pâte à brioche",
    prepTime: "40 MIN + Repos",
    cookTime: "30 MIN",
    difficulty: "MOYEN",
    description: "La brioche est une viennoiserie à pâte levée et fermentée, riche en beurre et en oeufs. Sa réussite dépend d'un pétrissage intensif et d'une longue fermentation.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/pate-a-brioche-1.jpg",
  };

  const ingredients = [
    { name: 'Farine de gruau (T45)', amount: 500, unit: 'g' },
    { name: 'Sel fin', amount: 10, unit: 'g' },
    { name: 'Sucre semoule', amount: 60, unit: 'g' },
    { name: 'Levure boulangère', amount: 20, unit: 'g' },
    { name: 'Oeufs', amount: 300, unit: 'g' },
    { name: 'Beurre', amount: 250, unit: 'g' }
  ];

  const steps = [
    {
      title: "FRASAGE.",
      text: "Dans la cuve du batteur, réunir la farine, le sel, le sucre, la levure (sans contact direct sel/levure) et les oeufs froids. Mélanger à vitesse lente 3 min jusqu'à hydratation complète."
    },
    {
      title: "PÉTRISSAGE.",
      text: "Pétrir à vitesse moyenne jusqu'à ce que la pâte se décolle des parois de la cuve (environ 10-15 min). Elle doit devenir élastique et résistante."
    },
    {
      title: "INCORPORATION DU BEURRE.",
      text: "Ajouter le beurre pommade (mou mais pas fondu) coupé en morceaux. Pétrir à nouveau jusqu'à ce que le beurre soit parfaitement incorporé et que la pâte se décolle à nouveau des parois (claquage)."
    },
    {
      title: "POINTAGE (1ère POUSSE).",
      text: "Laisser pointer la pâte à température ambiante (24°C) pendant 30 min à 1h. Elle doit commencer à gonfler."
    },
    {
      title: "DÉGAZAGE ET FROID.",
      text: "Rompre la pâte (dégazer) en l'aplatissant. Filmer au contact et placer au réfrigérateur pendant au moins 2h (idéalement une nuit) pour bloquer la fermentation et raffermir le beurre (facilite le façonnage)."
    },
    {
      title: "FAÇONNAGE ET APPRÊT.",
      text: "Façonner selon la forme désirée (Nanterre, Tête, Tresse). Laisser pousser (apprêt) dans un endroit tiède (25-27°C) jusqu'à ce qu'elle double de volume."
    },
    {
      title: "CUISSON.",
      text: "Dorer à l'oeuf. Cuire à 180°C pendant 25 à 35 min selon la taille. La brioche doit sonner creux."
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
                     <span className="text-sm text-gray-400">Parts</span>
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
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Température de pâte</h4>
                      <p className="text-gray-400 font-light leading-relaxed">En fin de pétrissage, la pâte doit idéalement être à 24°C-25°C. Au-delà, le beurre risque de fondre et la brioche sera grasse.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Farine de Gruau</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Utilisez impérativement de la farine de force (type Gruau ou T45 riche en gluten) pour supporter la grande quantité de beurre.</p>
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

export default LaPateABrioche;