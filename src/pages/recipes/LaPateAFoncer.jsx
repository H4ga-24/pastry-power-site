import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LaPateAFoncer = () => {
  const baseServings = 1; // 1 Tarte de 24cm
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PÂTES",
    title: "La pâte à foncer",
    prepTime: "20 MIN + Repos",
    cookTime: "25 MIN",
    difficulty: "FACILE",
    description: "La pâte à foncer est une pâte intermédiaire entre la pâte brisée et la pâte sucrée. Elle est idéale pour les tartes aux fruits juteux, les flans pâtissiers ou les quiches salées grâce à sa bonne tenue.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/pate-a-foncer.jpg",
  };

  const ingredients = [
    { name: 'Farine T55', amount: 250, unit: 'g' },
    { name: 'Beurre froid', amount: 125, unit: 'g' },
    { name: 'Sel fin', amount: 5, unit: 'g' },
    { name: 'Sucre semoule', amount: 10, unit: 'g' },
    { name: 'Jaune d\'œuf', amount: 20, unit: 'g' },
    { name: 'Eau froide', amount: 50, unit: 'g' }
  ];

  const steps = [
    {
      title: "SABLAGE.",
      text: "Sur le plan de travail ou dans la cuve du batteur, mélanger la farine, le sel et le sucre. Ajouter le beurre froid coupé en dés. Sabler le mélange (frotter entre les mains ou à la feuille) jusqu'à obtenir une texture de sable grossier."
    },
    {
      title: "CRÉATION DU PUITS.",
      text: "Faire un puits (une fontaine) au centre du mélange sableux."
    },
    {
      title: "AJOUT DES LIQUIDES.",
      text: "Mélanger le jaune d'œuf et l'eau froide. Verser ce liquide au centre du puits."
    },
    {
      title: "FRASAGE.",
      text: "Incorporer progressivement le sable aux liquides du bout des doigts ou à la corne. Écraser la pâte avec la paume de la main (fraser) 2 ou 3 fois pour homogénéiser sans trop pétrir (pour éviter qu'elle ne devienne élastique)."
    },
    {
      title: "REPOS.",
      text: "Former une boule aplatie, filmer au contact et laisser reposer au réfrigérateur au moins 1 heure (idéalement 2h) pour que le beurre raffermisse et que la pâte se détende."
    },
    {
      title: "FONÇAGE.",
      text: "Abaisser la pâte sur un plan de travail fariné à 3mm d'épaisseur. Foncer un cercle à tarte beurré. Piquer le fond si nécessaire."
    },
    {
      title: "CUISSON.",
      text: "Cuire à blanc à 170°C-180°C pendant environ 20-25 minutes, ou garnir selon la recette choisie."
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
                     <span className="text-sm text-gray-400">Tartes</span>
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
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Élasticité</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Si la pâte se rétracte à la cuisson, c'est qu'elle a été trop travaillée (activant le gluten) ou pas assez reposée.</p>
                    </TabsContent>
                    <TabsContent value="astuces" className="m-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Texture</h4>
                      <p className="text-gray-400 font-light leading-relaxed">Utilisez toujours des ingrédients très froids, surtout le beurre et l'eau, pour garantir la texture sablée et friable après cuisson.</p>
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

export default LaPateAFoncer;