import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteletteCitronMeringuee = () => {
  const baseServings = 6;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tartelette Citron Meringuée",
    prepTime: "1H 15",
    cookTime: "25 MIN",
    difficulty: "MOYEN",
    description: "L'incontournable. Un équilibre subtil entre l'acidité tranchante du crémeux citron et la douceur nuageuse de la meringue italienne.",
    image: "https://tout-gourmand.fr/media/cache/voir_recette/media/images/recettes/26444-tout-gourmand-tartelettes-au-citron-meringuee.webp",
  };

  const ingredients = [
    { name: 'Pâte sucrée', amount: 300, unit: 'g' },
    { name: 'Jus de citron jaune', amount: 150, unit: 'g' },
    { name: 'Zestes de citron', amount: 2, unit: 'pc' },
    { name: 'Sucre semoule', amount: 150, unit: 'g' },
    { name: 'Oeufs entiers', amount: 3, unit: 'pc' },
    { name: 'Beurre', amount: 180, unit: 'g' },
    { name: 'Blancs d\'œufs (Meringue)', amount: 100, unit: 'g' },
    { name: 'Sucre (Meringue)', amount: 200, unit: 'g' },
    { name: 'Eau (Meringue)', amount: 70, unit: 'g' }
  ];

  const steps = [
    {
      title: "Fonds de tarte",
      text: "Foncer les cercles à tartelette. Cuire à blanc à 170°C jusqu'à coloration dorée."
    },
    {
      title: "Crémeux Citron",
      text: "Chauffer jus, zestes, sucre et œufs au bain-marie jusqu'à 83-84°C en fouettant (comme une anglaise). Refroidir à 45°C. Ajouter le beurre et mixer longuement. Laisser cristalliser au frais 2h."
    },
    {
      title: "Meringue Italienne",
      text: "Cuire le sucre et l'eau à 121°C. Verser sur les blancs montés mousseux. Fouetter jusqu'à complet refroidissement."
    },
    {
      title: "Montage",
      text: "Garnir les fonds de tartelette avec le crémeux citron lissé. Lisser à la spatule ou former un dôme."
    },
    {
      title: "Finition",
      text: "Pocher la meringue italienne sur la tartelette (douille Saint-Honoré ou unie). Brûler légèrement au chalumeau pour dorer les arêtes."
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
                           <li>Pour un crémeux parfait, ne dépassez pas 85°C lors de la cuisson, sinon les œufs coagulent et donnent un goût d'omelette.</li>
                           <li>L'incorporation du beurre à 45°C est cruciale : trop chaud le beurre fond et graisse la crème, trop froid il ne s'émulsionne pas.</li>
                           <li>Zestez les citrons directement dans le sucre et frottez-les entre vos doigts pour extraire toutes les huiles essentielles avant de commencer.</li>
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
                          "La tarte au citron est un exercice d'équilibre. N'ayez pas peur de l'acidité, c'est elle qui donne du relief. La meringue est là pour l'adoucir, pas pour l'étouffer. Dosez-la avec parcimonie."
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
export default TarteletteCitronMeringuee;