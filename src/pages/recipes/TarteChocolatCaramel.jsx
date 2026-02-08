import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteChocolatCaramel = () => {
  const baseServings = 8;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tarte Chocolat Caramel Beurre Salé Ganache Montée",
    prepTime: "2H",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "L'équilibre parfait entre la gourmandise du caramel coulant et la légèreté d'une ganache montée au chocolat au lait.",
    image: "https://cleliafoodphoto.fr/wp-content/uploads/2020/12/tarte-caramel-choclat.png",
  };

  const ingredients = [
    { name: 'Pâte sucrée', amount: 300, unit: 'g' },
    { name: 'Sucre (Caramel)', amount: 150, unit: 'g' },
    { name: 'Crème liquide (Caramel)', amount: 150, unit: 'g' },
    { name: 'Beurre demi-sel', amount: 40, unit: 'g' },
    { name: 'Chocolat lait 40%', amount: 150, unit: 'g' },
    { name: 'Crème liquide (Ganache)', amount: 100, unit: 'g' },
    { name: 'Crème liquide froide', amount: 200, unit: 'g' },
    { name: 'Gélatine', amount: 2, unit: 'g' }
  ];

  const steps = [
    {
      title: "Ganache montée (J-1)",
      text: "Hydrater la gélatine. Chauffer les 100g de crème, ajouter la gélatine. Verser sur le chocolat fondu. Mixer. Ajouter les 200g de crème froide. Filmer et réserver au frais 12h."
    },
    {
      title: "Fond de tarte",
      text: "Foncer un cercle de 22cm. Cuire à blanc à 160°C pendant 20 min. Le fond doit être doré et sec."
    },
    {
      title: "Caramel beurre salé",
      text: "Cuire le sucre à sec jusqu'à couleur ambrée. Déglacer avec la crème chaude. Cuire à 108°C. Hors du feu, ajouter le beurre demi-sel. Laisser tiédir."
    },
    {
      title: "Montage - Étape 1",
      text: "Couler le caramel dans le fond de tarte refroidi (sur 1cm d'épaisseur). Faire figer au réfrigérateur 1h."
    },
    {
      title: "Finition",
      text: "Monter la ganache bien froide au batteur comme une chantilly ferme. Pocher généreusement sur le caramel figé avec une douille Saint-Honoré ou cannelée."
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
                           <li>La ganache montée doit reposer au minimum 6h au froid, idéalement 12h, pour foisonner correctement.</li>
                           <li>Ne pochez la ganache que sur un caramel parfaitement froid, sinon elle fondra instantanément.</li>
                           <li>Si votre caramel est trop dur après refroidissement, c'est qu'il a été trop cuit ou manque de crème. Il doit rester filant.</li>
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
                          "Cette tarte est un jeu de textures : le sablé friable, le caramel dense et collant, et la ganache aérienne comme un nuage. Utilisez de la fleur de sel de Guérande pour faire pétiller le caramel."
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
export default TarteChocolatCaramel;