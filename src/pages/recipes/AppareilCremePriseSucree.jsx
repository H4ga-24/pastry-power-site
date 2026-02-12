import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Lightbulb, Users, Scale } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";

const AppareilCremePriseSucree = () => {
  const recipeData = {
    category: "PÂTISSERIE • CRÈMES",
    title: "Appareil à Crème Prise Sucrée",
    isVip: false,
    prepTime: "5 MIN",
    cookTime: "35 MIN",
    difficulty: "TRÈS FACILE",
    description: "Aussi appelée 'migaine', c'est l'appareil indispensable pour les tartes aux fruits (alsacienne, normande) ou les clafoutis fondants.",
    image: "https://rockthebretzel.com/wp-content/uploads/2014/11/Tarte-alsacienne-3-1-450x375.jpg",
    baseServings: 450, // ml total environ
  };

  const [servings, setServings] = useState(recipeData.baseServings);

  const updateServings = (change) => {
    const newServings = servings + change;
    if (newServings >= 100) setServings(newServings);
  };

  // 🧮 FONCTION DE CALCUL STANDARDISÉE
  const calculateQuantity = (amount, base) => {
    if (!amount) return "";
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return amount;
    const scaled = (numAmount * servings) / base;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace('.0', '');
  };

  const ingredients = [
    { name: "Oeufs entiers", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Crème liquide 35%", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 50, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ];

  const steps = [
    {
      title: "Mélange des œufs",
      text: "Dans un cul-de-poule, fouetter les œufs entiers avec le sucre semoule. L'objectif est de dissoudre le sucre sans faire blanchir l'appareil pour éviter d'emprisonner trop d'air."
    },
    {
      title: "Liaison des liquides",
      text: "Ajouter la crème liquide, le lait entier et l'extrait de vanille. Mélanger doucement au fouet jusqu'à obtenir un appareil parfaitement lisse et homogène."
    },
    {
      title: "Mise en place",
      text: "Disposer vos fruits sur un fond de tarte (cuit ou cru selon la recette choisie). Verser délicatement l'appareil sur les fruits jusqu'à 2-3 mm du bord."
    },
    {
      title: "Cuisson",
      text: "Enfourner immédiatement à 180°C. Cuire jusqu'à ce que l'appareil soit coagulé (il ne doit plus être liquide au centre lorsqu'on bouge légèrement la plaque)."
    }
  ];

  // --- GOOGLE SEO (JSON-LD) ---
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipeData.title,
    "image": [recipeData.image],
    "description": recipeData.description,
    "author": { "@type": "Person", "name": "Pastrypower" },
    "prepTime": "PT5M",
    "cookTime": "PT35M",
    "recipeYield": `${servings} ml`,
    "recipeCategory": "Base de pâtisserie",
    "keywords": "migaine, crème prise sucrée, appareil à tarte alsacienne, clafoutis",
    "recipeIngredient": ingredients.map(ing => `${calculateQuantity(ing.amount, recipeData.baseServings)} ${ing.unit} ${ing.name}`),
    "recipeInstructions": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.text
    }))
  };

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Pastrypower</title>
        <meta name="description" content={recipeData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        {/* HEADER IMAGE */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block animate-fade-in">{recipeData.category}</span>
              <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">{recipeData.title}</h1>
              <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.prepTime} PREP</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.cookTime} CUISSON</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.difficulty}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* COLONNE GAUCHE */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 sticky top-24">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Users className="w-5 h-5" />
                    <span className="font-serif text-lg">Volume (ml)</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#252525] rounded-full px-2 py-1">
                    <Button variant="ghost" size="icon" onClick={() => updateServings(-50)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-bold text-lg min-w-[3ch] text-center">{servings}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateServings(50)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
                <ul className="space-y-4">
                  {ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between items-center text-sm pb-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 font-light">{ing.name}</span>
                      <span className="text-[#D4AF37] font-medium">
                        {calculateQuantity(ing.amount, recipeData.baseServings)} {ing.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* COLONNE DROITE */}
            <div className="md:col-span-8">
              <div className="space-y-12 mb-16">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl flex-shrink-0 group-hover:border-[#D4AF37] transition-colors">{i+1}</div>
                      <div>
                        <h3 className="text-white text-xl mb-3 font-serif">{step.title}</h3>
                        <p className="text-gray-400 font-light text-lg leading-relaxed">{step.text}</p>
                      </div>
                  </div>
                ))}
              </div>

              {/* Onglets Conseils */}
              <Tabs defaultValue="conseils" className="w-full">
                <TabsList className="grid w-full grid-cols-1 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils de Chef</TabsTrigger>
                </TabsList>
                
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[150px]">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4 animate-fade-in">
                      <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Variantes et Arômes</h4>
                        <p className="text-gray-400 leading-relaxed">
                          Pour un goût plus rustique, vous pouvez remplacer 20g de sucre par du miel ou du sucre roux. Pour les tartes aux pommes, l'ajout d'une pincée de cannelle ou d'un trait de Calvados dans l'appareil est vivement recommandé.
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
    </>
  );
};

export default AppareilCremePriseSucree;