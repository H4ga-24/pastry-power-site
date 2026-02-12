import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote, Crown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const BonbonBeijing = () => {
  const recipeData = {
    category: "CHOCOLATERIE",
    title: "Bonbon Chocolat Beijing",
    isVip: true, // 👈 ACTIVE LE MODE VIP
    prepTime: "2H + 12H",
    cookTime: "45 MIN",
    difficulty: "EXPERT",
    description: "Un bonbon bi-texture d'une grande technicité : socle de ganache lait Alunga surmonté d'un dôme de confiture de lait maison, le tout enrobé de chocolat noir.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6fc1ae009d495697691e2419b05e886d.jpg",
    baseServings: 750, // Rendement professionnel (environ 1 cadre)
  };

  const [servings, setServings] = useState(recipeData.baseServings);

  // On ajuste par tranches de 50 car c'est de la chocolaterie de masse
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
    // --- Ganache Alunga ---
    { name: "Crème fleurette 35% (Ganache)", amount: 1450, unit: "g" },
    { name: "Sirop de glucose (Ganache)", amount: 300, unit: "g" },
    { name: "Sorbitol cristallisé (Ganache)", amount: 150, unit: "g" },
    { name: "Chocolat Lait Alunga 41% (Ganache)", amount: 2600, unit: "g" },
    { name: "Beurre sec 84% (Ganache)", amount: 250, unit: "g" },
    // --- Confiture de Lait ---
    { name: "Lait entier (Confiture)", amount: 2000, unit: "g" },
    { name: "Sucre semoule (Confiture)", amount: 1000, unit: "g" },
    { name: "Sirop de glucose (Confiture)", amount: 200, unit: "g" },
    { name: "Gousses de vanille (Confiture)", amount: 2, unit: "pcs" },
    { name: "Bicarbonate de soude (Confiture)", amount: 2, unit: "g" },
    // --- Enrobage ---
    { name: "Couverture Noire 64% (Enrobage)", amount: 3000, unit: "g" }
  ];

  const steps = [
    {
      title: "La Ganache Alunga",
      text: "Chauffer la crème, le glucose et le sorbitol à 75°C précisement. Verser sur le chocolat Alunga (non fondu). Laisser reposer 2 min pour amorcer la fonte. Émulsionner au mixeur plongeant. Ajouter le beurre dés à 35-40°C. Couler en cadre de 6mm. Cristalliser 12h à 16-18°C."
    },
    {
      title: "Confiture de Lait Maison",
      text: "Porter à ébullition le lait, sucre, glucose, vanille et bicarbonate. Baisser le feu et laisser réduire en remuant jusqu'à atteindre 104°C (texture nappante). Débarrasser, filmer et laisser refroidir totalement pour qu'elle épaississe."
    },
    {
      title: "Détaillage & Pochage",
      text: "Chablonner la ganache cristallisée. Détailler en carrés de 2.5cm. Pocher une boule de confiture de lait (3-4g) sur chaque carré avec une douille n°8. Laisser croûter légèrement."
    },
    {
      title: "Enrobage",
      text: "Mettre au point la couverture noire. Enrober les bonbons en plongeant le dôme vers le bas, retourner et sortir délicatement sans écraser la confiture de lait."
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
    "prepTime": "PT14H", // 2H prep + 12H repos
    "cookTime": "PT45M",
    "recipeYield": `${servings} pièces`,
    "recipeCategory": "Confiserie",
    "keywords": "chocolat, bonbon, ganache, confiture de lait, alunga",
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
                    <span className="font-serif text-lg">Bonbons</span>
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
                        <h4 className="text-lg font-serif text-white">Points critiques</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed">
                           <li><strong>Ganache :</strong> Ne faites pas bouillir la crème (75°C max) pour préserver l'arôme lacté. Le repos de 2 min sur les pistoles est crucial pour amorcer la fonte sans choc thermique.</li>
                           <li><strong>Confiture :</strong> Cuisson impérative à 104°C. En dessous, elle coulera à l'enrobage. Au-dessus, elle sera caoutchouteuse.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4 animate-fade-in">
                      <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">La Science</h4>
                        <p className="text-gray-400 leading-relaxed italic">
                          "Le bicarbonate de soude n'est pas là pour lever la pâte (il n'y en a pas !). Il accélère la réaction de Maillard, donnant à la confiture de lait cette couleur caramel profond et ce goût typique bien plus rapidement."
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
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadre 6mm</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Guitare (découpe)</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li>
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
export default BonbonBeijing;