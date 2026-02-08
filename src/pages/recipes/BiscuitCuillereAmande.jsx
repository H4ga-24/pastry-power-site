import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BiscuitCuillereAmande = () => {
  const baseServings = 1;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • BISCUITS",
    title: "Biscuit cuillère amande",
    prepTime: "25 MIN",
    cookTime: "12 MIN",
    difficulty: "FACILE",
    description: "Le biscuit à la cuillère, un classique revisité avec une touche d'amande. Parfait pour les charlottes, entremets et autres desserts nécessitant un biscuit léger et absorbant.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2022/07/biscuit-cuillere-aux-amandes.png",
  };

  const ingredients = [
    { name: 'Blancs d\'oeuf', amount: 120, unit: 'g' },
    { name: 'Sucre semoule', amount: 100, unit: 'g' },
    { name: 'Jaunes d\'oeufs', amount: 80, unit: 'g' },
    { name: 'Farine courante', amount: 65, unit: 'g' },
    { name: 'Poudre à crème', amount: 10, unit: 'g' },
    { name: 'Poudre d\'amande', amount: 25, unit: 'g' }
  ];

  const steps = [
    {
      title: "PRÉPARATION.",
      text: "Préparer le matériel et les ingrédients. Cette recette correspond à un entremets de 8 personnes cartouchière (tour le l'entremets) et deux fonds."
    },
    {
      title: "MONTER LES BLANCS.",
      text: "Monter les blancs d'oeufs en neige."
    },
    {
      title: "SERRER.",
      text: "Serrer avec le sucre semoule."
    },
    {
      title: "INCORPORER LES JAUNES.",
      text: "Incorporer délicatement à la Maryse, les jaunes d'oeufs."
    },
    {
      title: "TAMISER.",
      text: "Tamiser les poudres (farine, poudre à crème)."
    },
    {
      title: "INCORPORER LES POUDRES.",
      text: "Incorporer en pluie délicatement les poudres tamisées et la poudre d'amande à l'aide d'une écumoire ou d'une Maryse dans le mélange."
    },
    {
      title: "DRESSER.",
      text: "Dresser les formes désirées sur plaque ou papier cuisson."
    },
    {
      title: "SAUPOUDRER.",
      text: "Saupoudrer 2 fois avec du sucre glace tamisé pour obtenir le perlage lors de la cuisson."
    },
    {
      title: "CUISSON.",
      text: "Cuire dans un four à 180 / 200°C sans buée pendant 10 à 15 minutes. Le biscuit doit être blanc/blond sur toute sa surface."
    },
    {
      title: "FINITION.",
      text: "Détourner et débarrasser immédiatement sur grille."
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
            <p className="text-gray-300 font-light text-lg italic leading-relaxed pt-4">Une dose correspond à un entremets de 8 personnes.</p>
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
                     <span className="text-sm text-gray-400">Entremets 8 pers.</span>
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
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Perlage</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Le perlage est caractéristique du biscuit à la cuillère. Le double saupoudrage de sucre glace avant cuisson est indispensable pour obtenir cette croûte croustillante et perlée.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Texture</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Ne pas trop travailler l'appareil après l'ajout de la farine pour éviter qu'il ne retombe. Le biscuit doit rester très aérien.</p>
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

export default BiscuitCuillereAmande;