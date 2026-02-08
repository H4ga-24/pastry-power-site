import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteCacaoNoisetteRizSouffle = () => {
  const baseServings = 8;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tarte Cacao Noisette Riz Soufflé",
    prepTime: "1H 30",
    cookTime: "30 MIN",
    difficulty: "MOYEN",
    description: "Une tarte ultra gourmande qui joue sur les textures : le croquant du riz soufflé, l'onctuosité du chocolat et le parfum de la noisette.",
    image: "https://files.meilleurduchef.com/mdc/photo/recette/tarte-chocolat-de-paques/tarte-chocolat-de-paques-1200.jpg",
  };

  const ingredients = [
    { name: 'Pâte sucrée cacao', amount: 300, unit: 'g' },
    { name: 'Praliné noisette', amount: 150, unit: 'g' },
    { name: 'Riz soufflé', amount: 50, unit: 'g' },
    { name: 'Chocolat au lait 40%', amount: 100, unit: 'g' },
    { name: 'Crème liquide entière', amount: 200, unit: 'g' },
    { name: 'Chocolat noir 65%', amount: 150, unit: 'g' },
    { name: 'Beurre', amount: 30, unit: 'g' },
    { name: 'Noisettes torréfiées', amount: 50, unit: 'g' }
  ];

  const steps = [
    {
      title: "Fond de tarte",
      text: "Foncer un cercle à tarte de 22cm avec la pâte sucrée cacao. Piquer le fond. Cuire à blanc à 170°C pendant 15 à 20 minutes. Laisser refroidir."
    },
    {
      title: "Croustillant Riz Soufflé",
      text: "Fondre le chocolat au lait et le mélanger avec le praliné. Ajouter le riz soufflé et mélanger délicatement pour bien enrober les grains. Étaler ce croustillant dans le fond de tarte refroidi. Laisser figer au frais."
    },
    {
      title: "Ganache Chocolat Noir",
      text: "Porter la crème liquide à ébullition. Verser sur le chocolat noir haché en 3 fois, en créant une émulsion à la maryse. Ajouter le beurre et mixer pour lisser."
    },
    {
      title: "Montage",
      text: "Couler la ganache chocolat sur le croustillant figé jusqu'à ras bord. Laisser cristalliser à température ambiante puis au frais."
    },
    {
      title: "Décor",
      text: "Disposer les noisettes torréfiées coupées en deux sur le pourtour ou en décor central."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings) / baseServings).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/patisserie/gateaux/tartes">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="relative h-[60vh] w-full overflow-hidden rounded-sm mb-12">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
            <div className="flex gap-6 text-xs tracking-widest font-medium text-white/80">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> {recipeData.difficulty}</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          <div className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm h-fit">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#121212] px-3 py-1 rounded-full">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37]"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-sans w-4 text-center">{servings}</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37]"><Plus className="w-3 h-3" /></button>
                </div>
             </div>
             <ul className="space-y-3 text-sm text-gray-400">
               {ingredients.map((ing, i) => (
                 <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                   <span>{ing.name}</span>
                   <span className="text-white font-medium">{calculateAmount(ing.amount)} {ing.unit}</span>
                 </li>
               ))}
             </ul>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white mb-6">Préparation</h2>
            {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] font-serif">{index + 1}</span>
                  <div>
                    <h3 className="text-lg text-white font-serif mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
            ))}

            <Tabs defaultValue="conseils" className="w-full mt-12">
                <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils et astuces</TabsTrigger>
                  <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Mot du chef</TabsTrigger>
                </TabsList>
                
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Les secrets de la réussite</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed text-sm">
                           <li>Assurez-vous que le croustillant soit bien froid avant de couler la ganache chaude, sinon les couches vont se mélanger.</li>
                           <li>Utilisez un riz soufflé non sucré de préférence, car le praliné et le chocolat au lait apportent déjà beaucoup de sucre.</li>
                           <li>Sortez la tarte du frigo 30 minutes avant dégustation pour que la ganache retrouve son fondant.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">L'œil de l'expert</h4>
                        <p className="text-gray-400 leading-relaxed italic text-sm">
                          "Le contraste est la clé. Le fond de tarte doit être très cuit, presque amer avec le cacao, pour contrebalancer le sucre du praliné. Le riz soufflé apporte cette dimension régressive irrésistible."
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarteCacaoNoisetteRizSouffle;