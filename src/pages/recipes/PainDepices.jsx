import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const PainDepices = () => {
  const recipeData = {
    category: "PÂTISSERIE • GÂTEAUX DE VOYAGE",
    title: "Pain d'Épices Traditionnel",
    prepTime: "20 MIN",
    cookTime: "55 MIN",
    difficulty: "FACILE",
    description: "Le véritable pain d'épices, riche en miel et aux parfums envoûtants de cannelle et d'orange. Idéal pour le goûter ou les fêtes.",
    image: "https://www.agrilait.fr/wp-content/uploads/2021/08/recette-pain-d-epice-agrilait-scaled-1-1600x1067.jpg",
    baseServings: 8, // Pour un cake de 24cm
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
    { name: "Miel de châtaignier", amount: 320, unit: "g" },
    { name: "Farine de seigle", amount: 60, unit: "g" },
    { name: "Farine T55", amount: 200, unit: "g" },
    { name: "Oeufs entiers", amount: 55, unit: "g" },
    { name: "Beurre", amount: 115, unit: "g" },
    { name: "Lait entier", amount: 135, unit: "g" },
    { name: "Bicarbonate de soude", amount: 12, unit: "g" },
    { name: "Cannelle poudre", amount: 6, unit: "g" },
    { name: "Mélange 4 épices", amount: 3, unit: "g" },
    { name: "Zeste d'orange", amount: 0.5, unit: "zeste" }
  ];

  const steps = [
    {
      title: "Préparation Liquide",
      text: "Dans une casserole, faire chauffer doucement le miel, le lait et le beurre jusqu'à ce que le beurre soit fondu (sans bouillir). Laisser tiédir."
    },
    {
      title: "Mélange Sec",
      text: "Dans un grand bol (cul-de-poule), mélanger les deux farines, le bicarbonate et toutes les épices."
    },
    {
      title: "Assemblage",
      text: "Verser le mélange liquide tiède sur le mélange sec progressivement en remuant au fouet pour éviter les grumeaux. Ajouter l'œuf battu et les zestes d'orange râpés finement."
    },
    {
      title: "Repos & Cuisson",
      text: "Idéalement, laisser reposer la pâte 24h au frais pour développer les arômes (facultatif). Verser dans un moule à cake beurré et fariné. Cuire à 165°C pendant environ 55 minutes (vérifier avec la pointe d'un couteau)."
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
    "prepTime": "PT20M",
    "cookTime": "PT55M",
    "recipeYield": `${servings} parts`,
    "recipeCategory": "Dessert",
    "keywords": "pain d'épices, miel, cannelle, gâteau de voyage, noël",
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
                    <span className="font-serif text-lg">Parts</span>
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
                        <h4 className="text-lg font-serif text-white">Astuces de réussite</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed">
                           <li>Le miel de châtaignier est fort en goût. Vous pouvez le couper avec un miel d'acacia si vous préférez plus de douceur.</li>
                           <li>Pour une brillance "pro", badigeonnez le dessus avec un peu de confiture d'abricot chaude dès la sortie du four.</li>
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
                          "Le secret du pain d'épices, c'est la patience. Emballez-le dans du papier alu dès qu'il est froid et attendez 2 ou 3 jours avant de le manger. Les arômes se diffusent et il devient encore plus moelleux."
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
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Moule à cake 24cm</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Zesteur</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cul de poule</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Fouet</li>
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
export default PainDepices;