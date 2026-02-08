import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteletteOrange = () => {
  const baseServings = 6;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tartelette à l'Orange",
    prepTime: "1H",
    cookTime: "25 MIN",
    difficulty: "FACILE",
    description: "Une version douce et parfumée de la tarte aux agrumes. Une crème à l'orange onctueuse sur une pâte sablée friable, décorée d'oranges fraîches.",
    image: "https://www.aureliencohen.fr/wp-content/uploads/2020/02/Tartelettes-orange-sanguine-poivre-de-timut-2-683x1024.jpg",
  };

  const ingredients = [
    { name: 'Pâte sablée', amount: 300, unit: 'g' },
    { name: 'Jus d\'orange frais', amount: 200, unit: 'ml' },
    { name: 'Zeste d\'orange', amount: 2, unit: 'pc' },
    { name: 'Oeufs', amount: 3, unit: 'pc' },
    { name: 'Sucre semoule', amount: 120, unit: 'g' },
    { name: 'Beurre', amount: 100, unit: 'g' },
    { name: 'Maïzena', amount: 10, unit: 'g' },
    { name: 'Suprêmes d\'orange', amount: 12, unit: 'pc' }
  ];

  const steps = [
    {
      title: "Cuisson des fonds",
      text: "Foncer 6 cercles à tartelette avec la pâte sablée. Cuire à blanc à 170°C pendant 15 à 20 min jusqu'à belle coloration dorée."
    },
    {
      title: "Orange Curd",
      text: "Dans une casserole, mélanger le jus d'orange, les zestes, le sucre, la maïzena et les œufs. Cuire à feu doux en fouettant constamment jusqu'à épaississement (82°C)."
    },
    {
      title: "Émulsion",
      text: "Hors du feu, laisser tiédir la crème (40°C). Incorporer le beurre coupé en dés et mixer longuement au mixeur plongeant pour lisser et aérer la crème."
    },
    {
      title: "Montage",
      text: "Garnir les fonds de tartelettes refroidis avec le crémeux à l'orange. Lisser à la spatule."
    },
    {
      title: "Finition",
      text: "Disposer harmonieusement des suprêmes d'orange frais sur le dessus. Zester un peu d'orange verte ou sanguine pour la couleur."
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
                   <span className="font-sans">{ing.name}</span>
                   <span className="text-white font-medium font-sans">{calculateAmount(ing.amount)} {ing.unit}</span>
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
                    <p className="text-gray-400 leading-relaxed font-sans">{step.text}</p>
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
                        <ul className="space-y-3 text-gray-400 leading-relaxed text-sm font-sans">
                           <li>Utilisez des oranges à jus pour le crémeux, elles sont plus parfumées. Les oranges de table sont parfaites pour les suprêmes en décor.</li>
                           <li>Le mixage du crémeux avec le beurre est essentiel : c'est ce qui lui donnera sa texture soyeuse et sa tenue.</li>
                           <li>Pour peler les suprêmes à vif, utilisez un couteau très aiguisé pour ne pas écraser la chair du fruit.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">L'œil de l'expert</h4>
                        <p className="text-gray-400 leading-relaxed italic text-sm font-sans">
                          "L'orange est plus subtile que le citron. Elle demande moins de sucre et permet d'apprécier la délicatesse du beurre frais. Ajoutez une pointe de poivre de Timut pour sublimer les arômes d'agrumes."
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
export default TarteletteOrange;