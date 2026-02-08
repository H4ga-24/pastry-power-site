import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TarteAlsacienneAuxPommes = () => {
  const baseServings = 8;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • TARTES",
    title: "Tarte Alsacienne aux Pommes",
    prepTime: "20 MIN",
    cookTime: "40 MIN",
    difficulty: "FACILE",
    description: "Un grand classique de l'Est de la France. Des pommes fondantes prises dans un flan à la vanille (la migaine) sur une pâte brisée croustillante.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/bad3001aad2812d6d1a17d2dd4ed0f6f.jpg",
  };

  const ingredients = [
    { name: 'Pâte brisée', amount: 300, unit: 'g' },
    { name: 'Pommes (Boskoop ou Golden)', amount: 4, unit: 'pc' },
    { name: 'Oeufs', amount: 3, unit: 'pc' },
    { name: 'Crème fraîche épaisse', amount: 200, unit: 'g' },
    { name: 'Sucre semoule', amount: 80, unit: 'g' },
    { name: 'Sucre vanillé', amount: 1, unit: 'sachet' },
    { name: 'Cannelle (facultatif)', amount: 1, unit: 'pincée' }
  ];

  const steps = [
    {
      title: "Préparation du fond",
      text: "Foncer un cercle à tarte de 24-26cm avec la pâte brisée. Piquer le fond et réserver au frais."
    },
    {
      title: "Préparation des pommes",
      text: "Éplucher, évider et couper les pommes en gros quartiers (4 à 6 par pomme). Disposer les quartiers harmonieusement sur le fond de tarte, face bombée vers le haut."
    },
    {
      title: "Première cuisson",
      text: "Enfourner la tarte avec les pommes seules pendant 20 minutes à 180°C. Les pommes doivent commencer à cuire."
    },
    {
      title: "L'appareil à flan (Migaine)",
      text: "Pendant la pré-cuisson, fouetter les œufs avec le sucre, le sucre vanillé, la cannelle et la crème fraîche jusqu'à obtenir un mélange homogène."
    },
    {
      title: "Cuisson finale",
      text: "Verser l'appareil à flan sur les pommes précuites. Remettre au four pour 20 à 25 minutes supplémentaires. Le flan doit être pris et doré."
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
                           <li>Choisissez des pommes qui tiennent à la cuisson mais deviennent fondantes, comme la Boskoop (acidulée) ou la Golden (douce).</li>
                           <li>La pré-cuisson des pommes est essentielle pour qu'elles soient tendres à cœur sans que le flan ne soit trop cuit.</li>
                           <li>Saupoudrez un peu de cannelle sur les pommes avant de verser l'appareil pour un parfum authentique.</li>
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
                          "La tarte alsacienne se distingue par sa générosité en crème. N'utilisez pas de crème allégée, le gras fixe les arômes de vanille et de pomme. Servez-la tiède, c'est là qu'elle est la meilleure."
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
export default TarteAlsacienneAuxPommes;