import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteAbricotPistache = () => {
  const baseServings = 8;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tarte Abricot Pistache",
    prepTime: "45 MIN",
    cookTime: "35 MIN",
    difficulty: "MOYEN",
    description: "L'acidité de l'abricot rôti rencontre la douceur de la crème de pistache dans une tarte colorée et savoureuse.",
    image: "https://ateliersdeludo.fr/wp-content/uploads/2023/06/Tarte-Abricot-Pistache.jpg",
  };

  const ingredients = [
    { name: 'Pâte sucrée', amount: 300, unit: 'g' },
    { name: 'Beurre pommade', amount: 100, unit: 'g' },
    { name: 'Sucre semoule', amount: 100, unit: 'g' },
    { name: 'Poudre d\'amande', amount: 50, unit: 'g' },
    { name: 'Poudre de pistache', amount: 50, unit: 'g' },
    { name: 'Pâte de pistache', amount: 20, unit: 'g' },
    { name: 'Oeufs', amount: 2, unit: 'pc' },
    { name: 'Abricots (frais ou sirop)', amount: 500, unit: 'g' },
    { name: 'Pistaches concassées', amount: 20, unit: 'g' }
  ];

  const steps = [
    {
      title: "Fonçage",
      text: "Foncer un cercle à tarte de 22-24cm avec la pâte sucrée. Piquer le fond et réserver au frais 30 minutes."
    },
    {
      title: "Crème de pistache",
      text: "Dans un bol, mélanger le beurre pommade avec le sucre. Ajouter la poudre d'amande, la poudre de pistache et la pâte de pistache. Incorporer les œufs un à un sans trop fouetter (pour éviter de faire gonfler la crème à la cuisson)."
    },
    {
      title: "Garnissage",
      text: "Étaler la crème de pistache sur le fond de tarte cru."
    },
    {
      title: "Disposition des fruits",
      text: "Couper les abricots en deux (si frais, les dénoyauter). Les disposer face bombée vers le haut sur la crème de pistache, en les enfonçant légèrement."
    },
    {
      title: "Cuisson",
      text: "Enfourner à 180°C pendant 35 à 40 minutes. La crème doit être dorée et les abricots rôtis."
    },
    {
      title: "Finition",
      text: "À la sortie du four, parsemer d'éclats de pistaches vertes torréfiées pour le croquant et la couleur."
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
                  <span className="text-sm font-medium w-4 text-center">{servings}</span>
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
                           <li>Si vous utilisez des abricots au sirop, égouttez-les bien sur du papier absorbant avant de les poser sur la crème pour ne pas détremper la tarte.</li>
                           <li>La crème de pistache doit être cuite en même temps que la pâte (cuisson à cru) pour que les saveurs se mêlent intimement.</li>
                           <li>Ajoutez une goutte d'arôme amande amère si vous souhaitez renforcer le goût de noyau caractéristique.</li>
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
                          "L'alliance abricot-pistache est un mariage de raison. L'abricot apporte l'acidité nécessaire pour couper le gras de la pistache et le sucre de la crème d'amande. C'est un équilibre parfait."
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
export default TarteAbricotPistache;