import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BeignetsChoux = () => {
  const baseServings = 6; // Personnes
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • FRITURE",
    title: "Beignets de Pâte à Choux",
    prepTime: "20 MIN",
    cookTime: "15 MIN",
    difficulty: "FACILE",
    description: "Aussi appelés 'Pets de nonne', ces petites boules de pâte à choux frites soufflent à la cuisson pour devenir aériennes comme des nuages.",
    image: "https://www.ticino.ch/pictures/infoturistica/verybig4/tortelli-4.jpg",
  };

  const ingredients = [
    { name: 'Pâte à choux', amount: 400, unit: 'g' },
    { name: 'Huile de friture', amount: 1, unit: 'L' },
    { name: 'Sucre semoule', amount: 100, unit: 'g' },
    { name: 'Sucre glace', amount: 20, unit: 'g' }
  ];

  const steps = [
    {
      title: "La Pâte",
      text: "Préparez une pâte à choux classique (eau, lait, beurre, sel, sucre, farine, œufs). Elle doit être bien desséchée et pas trop liquide pour garder sa forme."
    },
    {
      title: "Chauffage du bain",
      text: "Portez l'huile de friture à 170°C. Si l'huile est trop chaude, les beignets coloreront trop vite sans cuire à l'intérieur."
    },
    {
      title: "Friture",
      text: "À l'aide de deux petites cuillères ou d'une poche à douille coupée aux ciseaux, formez des petites boules de pâte (taille d'une noix) et laissez-les tomber dans l'huile. Ne surchargez pas le bain."
    },
    {
      title: "Le retournement",
      text: "Les beignets vont gonfler, éclater légèrement et se retourner d'eux-mêmes (sinon aidez-les). Laissez frire jusqu'à une belle coloration dorée uniforme (env. 5-6 min)."
    },
    {
      title: "Finition",
      text: "Égouttez sur papier absorbant et roulez-les encore chauds dans le sucre semoule."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings) / baseServings).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/patisserie/gateaux/pate-a-choux">
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
                           <li>Ne faites pas des boules trop grosses, elles gonflent énormément (elles triplent de volume). Une petite cuillère suffit.</li>
                           <li>Roulez-les dans le sucre dès la sortie du bain de friture pour qu'il adhère bien. S'ils refroidissent, le sucre ne tiendra plus.</li>
                           <li>Si vous le souhaitez, vous pouvez aromatiser la pâte avec un peu de fleur d'oranger ou de zeste de citron.</li>
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
                          "C'est la légèreté incarnée. La pâte doit être un peu plus ferme qu'une pâte à choux classique (bien desséchée) pour ne pas absorber trop d'huile à la cuisson."
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
export default BeignetsChoux;