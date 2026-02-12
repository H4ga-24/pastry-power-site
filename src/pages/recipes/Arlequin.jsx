import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote, Crown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Arlequin = () => {
  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "L'Arlequin",
    isVip: true, // 👈 ACTIVE LE MODE VIP
    prepTime: "5H",
    cookTime: "20 MIN",
    difficulty: "EXPERT",
    description: "Un entremets haut en couleur : l'alliance acidulée de la passion et de la framboise rencontre la douceur de la pistache dans un jeu de textures moelleuses et fondantes.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f31e1f663893ced8b953a4ddb60456e7.png",
    baseServings: 5, // 5 Entremets individuels (Ø12cm)
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
    // --- Financier Pistache ---
    { name: "Sucre glace (Financier)", amount: 240, unit: "g" },
    { name: "Poudre d'amande (Financier)", amount: 90, unit: "g" },
    { name: "Farine T55 (Financier)", amount: 90, unit: "g" },
    { name: "Pâte de pistache pure (Financier)", amount: 50, unit: "g" },
    { name: "Blancs d'œufs (Financier)", amount: 240, unit: "g" },
    { name: "Beurre noisette (Financier)", amount: 150, unit: "g" },
    // --- Joconde Pistache ---
    { name: "Oeufs entiers (Joconde)", amount: 250, unit: "g" },
    { name: "Sucre glace (Joconde)", amount: 190, unit: "g" },
    { name: "Poudre d'amande (Joconde)", amount: 150, unit: "g" },
    { name: "Pâte de pistache (Joconde)", amount: 40, unit: "g" },
    { name: "Farine (Joconde)", amount: 50, unit: "g" },
    { name: "Beurre fondu (Joconde)", amount: 35, unit: "g" },
    { name: "Blancs d'œufs (Joconde)", amount: 165, unit: "g" },
    { name: "Sucre semoule (Joconde)", amount: 25, unit: "g" },
    // --- Coulis ---
    { name: "Purée Passion (Coulis)", amount: 125, unit: "g" },
    { name: "Purée Mangue (Coulis)", amount: 125, unit: "g" },
    { name: "Purée Framboise (Coulis)", amount: 250, unit: "g" },
    { name: "Sucre (Total Coulis)", amount: 55, unit: "g" },
    { name: "Gélatine (Total Coulis)", amount: 10, unit: "g" },
    // --- Mousses ---
    { name: "Purée Passion (Mousse)", amount: 200, unit: "g" },
    { name: "Purée Framboise (Mousse)", amount: 200, unit: "g" },
    { name: "Meringue Italienne (Total)", amount: 180, unit: "g" },
    { name: "Crème fouettée 35% (Total)", amount: 440, unit: "g" },
    { name: "Gélatine (Total Mousses)", amount: 12, unit: "g" }
  ];

  const steps = [
    {
      title: "Biscuit Financier Pistache (Base)",
      text: "Réaliser un beurre noisette et le laisser tiédir. Mélanger sucre glace, poudre d'amande, farine, blancs non montés et pâte de pistache. Incorporer le beurre noisette. Cuire à 170°C pendant 12-15 min dans des cercles de 10cm."
    },
    {
      title: "Biscuit Joconde Pistache (Décor)",
      text: "Monter au ruban les œufs, le sucre glace, la poudre d'amande et la pistache. Ajouter la farine et le beurre fondu. Incorporer les blancs montés avec le sucre semoule. Étaler finement sur plaque et cuire à 230°C (6-8 min). Détailler des bandes de 10cm de haut."
    },
    {
      title: "Inserts Coulis Gélifiés",
      text: "Chauffer les purées séparément. Y dissoudre la gélatine hydratée et le sucre. Couler 5 disques de Passion/Mangue et 5 disques de Framboise (Ø10cm). Surgeler."
    },
    {
      title: "Mousses Fruits",
      text: "Chauffer 1/3 des purées, y fondre la gélatine. Mélanger au reste de purée froide. Incorporer la meringue italienne, puis la crème fouettée mousseuse. Procéder de même pour les deux parfums."
    },
    {
      title: "Montage & Finition",
      text: "Chemiser les cercles (Ø12cm) de Rhodoïd et de biscuit Joconde. Au fond : disque de Financier. Pocher Mousse Framboise -> Insert Passion -> Mousse Passion -> Insert Framboise. Lisser et décorer."
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
    "prepTime": "PT5H",
    "cookTime": "PT20M",
    "recipeYield": `${servings} entremets`,
    "recipeCategory": "Dessert",
    "recipeCuisine": "Française",
    "keywords": "arlequin, entremets pistache passion framboise, recette expert",
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
          
          {/* --- 💎 BADGE VIP --- */}
          {recipeData.isVip && (
            <div className="absolute top-6 right-6 z-30 animate-fade-in">
                <div className="bg-[#D4AF37] text-black font-bold px-4 py-2 rounded-sm uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg shadow-black/20">
                    <Crown className="w-4 h-4" /> VIP ONLY
                </div>
            </div>
          )}

          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block animate-fade-in">{recipeData.category}</span>
                  {recipeData.isVip && (
                      <span className="bg-white/10 text-[#D4AF37] border border-[#D4AF37] px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm tracking-wider">
                          Exclusif
                      </span>
                  )}
              </div>
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
                    <span className="font-serif text-lg">Entremets</span>
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
                <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <ul className="space-y-4">
                    {ingredients.map((ing, i) => (
                        <li key={i} className="flex justify-between items-center text-sm pb-2 border-b border-white/5 last:border-0">
                        <span className="text-gray-300 font-light truncate pr-4" title={ing.name}>{ing.name}</span>
                        <span className="text-[#D4AF37] font-medium whitespace-nowrap">
                            {calculateQuantity(ing.amount, recipeData.baseServings)} {ing.unit}
                        </span>
                        </li>
                    ))}
                    </ul>
                </div>
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
                        <h4 className="text-lg font-serif text-white">Astuces de montage</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed">
                           <li>Assurez-vous que les inserts de coulis sont bien centrés et ne touchent pas le biscuit Joconde extérieur pour une coupe nette.</li>
                           <li>Imbibez légèrement le biscuit Joconde avec un sirop au Kirsch ou à la vanille pour plus de moelleux.</li>
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
                          "Décorez le dessus avec une abondance de framboises fraîches, des éclats de pistaches torréfiées et quelques pointes de feuille d'or pour rappeler le côté Arlequin."
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
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercles inox (10cm et 12cm)</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Rhodoïd (4.5cm haut)</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Robot pâtissier</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poches à douille</li>
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
export default Arlequin;