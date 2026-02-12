import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const PateDeRiz = () => {
  const recipeData = {
    category: "ALTERNATIVE • SANS GLUTEN", // 👈 Classé correctement
    title: "Biscuit Sacher (Sans Gluten)",
    prepTime: "15 MIN",
    cookTime: "20 MIN",
    difficulty: "FACILE",
    description: "Un biscuit moelleux au chocolat réalisé à base de pâte d'amande et de farine de riz. Une alternative sans gluten parfaite, idéale comme base d'entremets.",
    image: "https://res.cloudinary.com/valrhona/image/upload/c_limit,f_auto,fl_progressive,h_600,q_auto,w_800/dam/21e43eb93a5a5884",
    baseServings: 1, // 1 Feuille/Plaque
  };

  const [servings, setServings] = useState(recipeData.baseServings);

  const updateServings = (change) => {
    const newServings = servings + change;
    if (newServings >= 1) setServings(newServings);
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
    { name: "Pâte d'amande 50%", amount: 160, unit: "g" },
    { name: "Sucre glace", amount: 60, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 100, unit: "g" },
    { name: "Oeufs entiers", amount: 50, unit: "g" },
    { name: "Blancs d'oeuf", amount: 150, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Cacao poudre", amount: 48, unit: "g" },
    { name: "Farine de Riz", amount: 48, unit: "g" }, // 👈 CORRECTION (au lieu de T55)
    { name: "Beurre fondu", amount: 48, unit: "g" }
  ];

  const steps = [
    {
      title: "Détendre la pâte",
      text: "Dans la cuve du batteur avec la feuille, détendre la pâte d'amande en incorporant petit à petit le mélange jaunes d'œufs et œufs entiers."
    },
    {
      title: "Émulsionner",
      text: "Remplacer la feuille par le fouet. Ajouter le sucre glace et fouetter vivement pour émulsionner et monter l'appareil (ruban)."
    },
    {
      title: "Meringue",
      text: "Monter les blancs d'œufs très fermes et les serrer avec le sucre semoule."
    },
    {
      title: "Mélange 1",
      text: "Incorporer délicatement une petite partie de la meringue dans la masse amande/œufs pour détendre l'appareil."
    },
    {
      title: "Mélange 2",
      text: "Ajouter en pluie le cacao et la farine de riz tamisés ensemble, le reste de la meringue, et enfin le beurre fondu froid. Mélanger délicatement à la maryse."
    },
    {
      title: "Cuisson",
      text: "Étaler sur une plaque recouverte d'un papier cuisson (ou Silpat). Cuire à 180°C pendant 20 à 25 minutes. Laisser refroidir sur grille."
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
    "prepTime": "PT15M",
    "cookTime": "PT20M",
    "recipeYield": `${servings} plaque(s)`,
    "recipeCategory": "Gluten-free",
    "keywords": "biscuit sacher, sans gluten, farine de riz, pâte d'amande, biscuit chocolat",
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
                {/* Calculateur Portions */}
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Users className="w-5 h-5" />
                    <span className="font-serif text-lg">Plaques</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#252525] rounded-full px-2 py-1">
                    <Button variant="ghost" size="icon" onClick={() => updateServings(-1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-bold text-lg min-w-[2ch] text-center">{servings}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateServings(1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Liste Ingrédients */}
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

              {/* Onglets Conseils / Chef / Ustensiles */}
              <Tabs defaultValue="conseils" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils</TabsTrigger>
                  <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Le Mot du Chef</TabsTrigger>
                  <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Ustensiles</TabsTrigger>
                </TabsList>
                
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4 animate-fade-in">
                      <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Pourquoi la farine de riz ?</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed">
                           <li>Pour respecter l'intitulé "Sans Gluten", la farine T55 (blé) a été remplacée par de la farine de riz. Elle apporte de la légèreté.</li>
                           <li>Si vous n'êtes pas intolérant, vous pouvez utiliser de la T55 classique poids pour poids.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4 animate-fade-in">
                      <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">L'avis du Chef</h4>
                        <p className="text-gray-400 leading-relaxed italic">
                          "Ce biscuit est une merveille de moelleux grâce à la pâte d'amande. Il est beaucoup plus riche et fondant qu'une génoise classique au cacao. Parfait pour des entremets type 'Opéra' ou 'Forêt Noire'."
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="ustensiles" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4 animate-fade-in">
                      <Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Matériel recommandé</h4>
                        <ul className="grid grid-cols-2 gap-2 text-gray-400">
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Robot batteur</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Spatule maryse</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Plaque de cuisson</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Feuille cuisson</li>
                        </ul>
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
export default PateDeRiz;