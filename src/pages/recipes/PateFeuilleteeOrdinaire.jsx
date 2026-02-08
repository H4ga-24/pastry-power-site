import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PateFeuilleteeOrdinaire = () => {
  const baseServings = 1; // 1 Pâton approx 1kg
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PÂTES",
    title: "La pâte feuilletée (méthode ordinaire)",
    prepTime: "1H + Repos",
    cookTime: "Selon utilisation",
    difficulty: "DIFFICILE",
    description: "La technique de la pâte feuilletée consiste à intercaler par pliages successifs des couches de pâte (détrempe) et des couches de matière grasse, de mêmes épaisseurs.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/PhotoRoom-20210920_223306_edit_913659788062668-1300x1075.png",
  };

  const ingredients = [
    { name: 'Farine type 55', amount: 500, unit: 'g' },
    { name: 'Sel fin', amount: 10, unit: 'g' },
    { name: 'Eau', amount: 250, unit: 'g' },
    { name: 'Beurre (pour la détrempe)', amount: 50, unit: 'g' },
    { name: 'Beurre sec (tourage)', amount: 350, unit: 'g' }
  ];

  const steps = [
    {
      title: "RÉALISATION DE LA DÉTREMPE.",
      text: "Mélanger l'eau, le sel et le beurre fondu refroidi. Dans la cuve du batteur ou sur le plan de travail, mettre la farine en fontaine. Verser le mélange liquide au centre. Mélanger progressivement sans trop corser la pâte."
    },
    {
      title: "REPOS.",
      text: "Former une boule, inciser en croix le dessus (pour détendre le réseau glutineux) et filmer. Laisser reposer au frais pendant 30 minutes."
    },
    {
      title: "PRÉPARATION DU BEURRE.",
      text: "Pendant ce temps, taper le beurre de tourage au rouleau pour lui donner une consistance plastique (ni trop dur, ni trop mou) et lui donner une forme carrée d'environ la moitié de la taille de la détrempe étalée."
    },
    {
      title: "ENCHÂSSAGE.",
      text: "Étaler la détrempe en croix ou en carré, en laissant le centre plus épais. Poser le beurre au centre. Replier les bords de la détrempe pour enfermer complètement le beurre. Le pâton doit être régulier."
    },
    {
      title: "TOURAGE (1er et 2ème TOURS).",
      text: "Allonger le pâton en une longue bande rectangulaire régulière. Plier en trois (portefeuille) : rabattre le tiers supérieur vers le centre, puis le tiers inférieur par-dessus. C'est un tour simple. Faire pivoter le pâton d'un quart de tour (ouverture à droite). Répéter l'opération pour le 2ème tour."
    },
    {
      title: "REPOS.",
      text: "Marquer la pâte de 2 empreintes de doigts (pour se souvenir du nombre de tours). Filmer et laisser reposer au frais 30 minutes minimum."
    },
    {
      title: "SUITE DU TOURAGE.",
      text: "Réaliser de la même manière les 3ème et 4ème tours. Laisser reposer 30 minutes au frais. Enfin, réaliser les 5ème et 6ème tours avant utilisation."
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
                     <span className="text-sm text-gray-400">Pâtons (1kg)</span>
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
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Texture du beurre</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Le point crucial est d'avoir une détrempe et un beurre de tourage de même consistance (même fermeté) au moment de l'enchâssage, pour que les couches se forment régulièrement sans que le beurre ne s'échappe ou ne se casse.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Repos</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Ne négligez jamais les temps de repos. Ils permettent au gluten de se détendre (évitant à la pâte de se rétracter) et au beurre de raffermir (évitant le marbrage).</p>
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

export default PateFeuilleteeOrdinaire;