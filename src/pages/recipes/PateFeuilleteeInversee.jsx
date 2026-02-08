import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PateFeuilleteeInversee = () => {
  const baseServings = 1; // 1 Pâton
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PÂTES",
    title: "La pâte feuilletée (méthode inversée)",
    prepTime: "1H30 + Repos",
    cookTime: "Selon utilisation",
    difficulty: "EXPERT",
    description: "La pâte feuilletée inversée se distingue par le fait que le beurre manié (mélange beurre/farine) enveloppe la détrempe. Elle est plus friable, plus fondante et ne rétrécit pas à la cuisson.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/feuillatage-inverse.jpg",
  };

  const ingredients = [
    { name: 'Beurre sec (Beurre manié)', amount: 375, unit: 'g' },
    { name: 'Farine T45 (Beurre manié)', amount: 150, unit: 'g' },
    { name: 'Farine T55 (Détrempe)', amount: 350, unit: 'g' },
    { name: 'Beurre fondu (Détrempe)', amount: 115, unit: 'g' },
    { name: 'Eau (Détrempe)', amount: 150, unit: 'g' },
    { name: 'Sel (Détrempe)', amount: 15, unit: 'g' },
    { name: 'Vinaigre blanc (Détrempe)', amount: 5, unit: 'g' }
  ];

  const steps = [
    {
      title: "LE BEURRE MANIÉ.",
      text: "Mélanger le beurre pommade et la farine T45 jusqu'à obtention d'une pâte homogène. Étaler en un carré d'environ 1cm d'épaisseur. Filmer et réserver au frais 1h (il doit être ferme mais malléable)."
    },
    {
      title: "LA DÉTREMPE.",
      text: "Mélanger l'eau, le vinaigre, le sel et le beurre fondu froid. Verser sur la farine T55 et mélanger sans pétrir excessivement. Former un carré plus petit que le beurre manié (environ la moitié de sa surface). Filmer et réserver au frais 1h."
    },
    {
      title: "ENCHÂSSAGE.",
      text: "Étaler le beurre manié. Poser la détrempe au centre. Replier le beurre manié sur la détrempe pour l'enfermer complètement (comme une enveloppe). La matière grasse est donc à l'extérieur."
    },
    {
      title: "TOURAGE (2 TOURS DOUBLES).",
      text: "Allonger le pâton. Réaliser un premier tour double (plier les deux extrémités vers le centre, puis plier le tout en deux). Faire pivoter d'un quart de tour. Réaliser un second tour double immédiatement si le beurre ne chauffe pas, sinon repos. Laisser reposer 1h au frais."
    },
    {
      title: "FINITION (1 TOUR SIMPLE).",
      text: "Réaliser un dernier tour simple (pliage en 3) avant l'utilisation. Laisser reposer de nouveau 30 minutes avant d'étaler pour la cuisson."
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
                     <span className="text-sm text-gray-400">Pâtons</span>
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
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Température</h4>
                      <p className="text-gray-400 font-light leading-relaxed">La gestion de la température est encore plus critique qu'avec le feuilletage classique. Le beurre manié extérieur chauffe vite au contact des mains et du rouleau.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Farine</h4>
                      <p className="text-gray-400 font-light leading-relaxed">On utilise de la farine de gruau (T45) pour le beurre manié pour sa force, et de la farine plus faible (T55) pour la détrempe, créant un équilibre parfait.</p>
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

export default PateFeuilleteeInversee;