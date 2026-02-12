import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote, Crown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const BonbonCharentais = () => {
  const recipeData = {
    category: "CHOCOLATERIE",
    title: "Bonbon Charentais",
    isVip: true, // 👈 ACTIVE LE MODE VIP
    prepTime: "2H + 24H",
    cookTime: "20 MIN",
    difficulty: "INTERMÉDIAIRE",
    description: "Une spécialité de caractère : une ganache au caramel brun déglacée à la crème, parfumée aux zestes d'orange et relevée au Cognac, dressée en sarments.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/873ef306c9ad5de8e7d4d441eff3fbfd.png",
    baseServings: 800, // Rendement professionnel
  };

  const [servings, setServings] = useState(recipeData.baseServings);

  // Ajustement par 50 car c'est du gros volume
  const updateServings = (change) => {
    const newServings = servings + change;
    if (newServings >= 50) setServings(newServings);
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
    // --- Ganache ---
    { name: "Sucre semoule (Caramel)", amount: 1600, unit: "g" },
    { name: "Sirop de glucose (Caramel)", amount: 400, unit: "g" },
    { name: "Crème fleurette 35% (Ganache)", amount: 2000, unit: "g" },
    { name: "Zestes d'orange", amount: 6, unit: "pcs" },
    { name: "Couverture Lait 40% (Ganache)", amount: 2400, unit: "g" },
    { name: "Beurre doux (Ganache)", amount: 600, unit: "g" },
    { name: "Cognac 50% vol (Ganache)", amount: 300, unit: "g" },
    // --- Enrobage ---
    { name: "Couverture Noire 64% (Enrobage)", amount: 3500, unit: "g" }
  ];

  const steps = [
    {
      title: "Infusion & Caramel",
      text: "Infuser les zestes dans la crème chaude (20 min) puis chinoiser et réchauffer. Réaliser un caramel brun (fumeux) avec le sucre et le glucose. Décuire avec la crème chaude. Cuire le tout à 103°C."
    },
    {
      title: "Émulsion",
      text: "Refroidir le caramel à 80°C. Verser sur la couverture lait pistoles. Émulsionner au mixeur. À 35°C, incorporer le beurre pommade et le Cognac. Lisser l'émulsion."
    },
    {
      title: "Dressage (Pochage)",
      text: "Laisser la ganache cristalliser jusqu'à consistance 'pommade'. Pocher à la douille unie n°10 de longs boudins réguliers sur feuille guitare. Laisser cristalliser 24 à 48h à 17°C."
    },
    {
      title: "Finition",
      text: "Couper les boudins en tronçons de 3cm (sarments). Enrober de couverture noire tempérée. Marquer le dessus à la fourchette pour l'effet écorce."
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
    "prepTime": "PT26H", // 2H prep + 24H repos
    "cookTime": "PT20M",
    "recipeYield": `${servings} pièces`,
    "recipeCategory": "Confiserie",
    "keywords": "chocolat, bonbon, cognac, caramel, orange",
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
                    <span className="font-serif text-lg">Pièces</span>
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
                        <h4 className="text-lg font-serif text-white">Réussir la ganache</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed">
                           <li><strong>Cuisson 103°C :</strong> Indispensable pour la conservation (réduit l'eau libre) et la texture.</li>
                           <li><strong>Le Dressage :</strong> La consistance est cruciale. Trop chaud, les boudins s'aplatissent. Trop froid, ils cassent. Il faut trouver le point "pommade".</li>
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
                          "Le Charentais est un hommage au terroir. N'ayez pas peur de pousser la cuisson du caramel jusqu'à une couleur brune/fumeuse pour contrebalancer la douceur du chocolat au lait."
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
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre sonde</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poche + Douille n°10</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Fourchette à tremper</li>
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
export default BonbonCharentais;