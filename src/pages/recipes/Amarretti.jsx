import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote, UtensilsCrossed } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Amarretti = () => {
  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "L'Amarretti",
    prepTime: "4H",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "Une création exclusive où la douceur du biscuit noisette rencontre l'acidité parfumée d'une compotée de griottes et l'onctuosité du lait d'amande.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3c901d5843ce9d7c979b087d04c101de.png",
    baseServings: 1, // 1 Entremets Ø18cm
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
    // --- Biscuit Noisette ---
    { name: "Blancs d'oeufs (Biscuit)", amount: 90, unit: "g" },
    { name: "Sucre glace (Biscuit)", amount: 50, unit: "g" },
    { name: "Poudre de noisettes (Biscuit)", amount: 50, unit: "g" },
    { name: "Farine T45 (Biscuit)", amount: 20, unit: "g" },
    { name: "Beurre noisette (Biscuit)", amount: 20, unit: "g" },
    // --- Compotée Griottes ---
    { name: "Griottes (Compotée)", amount: 200, unit: "g" },
    { name: "Sucre semoule (Compotée)", amount: 30, unit: "g" },
    { name: "Pectine NH (Compotée)", amount: 3, unit: "g" },
    { name: "Jus de citron (Compotée)", amount: 5, unit: "g" },
    // --- Crème Lait d'Amande ---
    { name: "Lait d'amande (Crème)", amount: 250, unit: "g" },
    { name: "Sucre semoule (Crème)", amount: 40, unit: "g" },
    { name: "Jaunes d'oeufs (Crème)", amount: 40, unit: "g" },
    { name: "Gélatine feuilles (Crème)", amount: 4, unit: "g" },
    { name: "Crème liquide 35% (Crème)", amount: 200, unit: "g" },
    { name: "Amaretto (facultatif)", amount: 10, unit: "g" },
    // --- Glaçage ---
    { name: "Eau (Glaçage)", amount: 75, unit: "g" },
    { name: "Sucre semoule (Glaçage)", amount: 150, unit: "g" },
    { name: "Glucose (Glaçage)", amount: 150, unit: "g" },
    { name: "Lait concentré sucré (Glaçage)", amount: 100, unit: "g" },
    { name: "Gélatine feuilles (Glaçage)", amount: 10, unit: "g" },
    { name: "Chocolat blanc (Glaçage)", amount: 150, unit: "g" }
  ];

  const steps = [
    {
      title: "Biscuit Noisette",
      text: "Monter les blancs avec le sucre glace. Incorporer les poudres tamisées puis le beurre noisette froid. Cuire à 170°C (12-15 min). Détailler un disque de Ø16cm."
    },
    {
      title: "Compotée de Griottes",
      text: "Chauffer les griottes, le sucre et le citron. Ajouter la pectine NH (mélangée à un peu de sucre) à 40°C. Porter à ébullition 1 min. Couler en Ø14cm et congeler."
    },
    {
      title: "Crème Légère Lait d'Amande",
      text: "Réaliser une crème anglaise avec lait d'amande, jaunes et sucre (83°C). Ajouter la gélatine. À 25-30°C, incorporer la crème montée mousseuse."
    },
    {
      title: "Glaçage Miroir Rouge",
      text: "Cuire eau, sucre et glucose à 103°C. Ajouter lait concentré, gélatine, chocolat blanc et colorant. Mixer. Utiliser à 30-32°C après 24h de repos."
    },
    {
      title: "Montage & Finition",
      text: "Dans un cercle de Ø18cm : Biscuit noisette -> Crème Amande -> Insert Griotte -> Reste de Crème. Surgeler. Glacer l'entremets congelé et décorer d'amandes effilées."
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
    "prepTime": "PT4H",
    "cookTime": "PT30M",
    "recipeYield": `${servings} entremets`,
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
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
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

        <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 sticky top-24">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 text-[#D4AF37]"><Users className="w-5 h-5" /><span className="font-serif text-lg">Entremets</span></div>
                  <div className="flex items-center gap-4 bg-[#252525] rounded-full px-2 py-1">
                    <Button variant="ghost" size="icon" onClick={() => updateServings(-1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full"><Minus className="w-4 h-4" /></Button>
                    <span className="font-bold text-lg min-w-[2ch] text-center">{servings}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateServings(1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full"><Plus className="w-4 h-4" /></Button>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
                <ul className="space-y-4">
                  {ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between items-center text-sm pb-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 font-light">{ing.name}</span>
                      <span className="text-[#D4AF37] font-medium">{calculateQuantity(ing.amount, recipeData.baseServings)} {ing.unit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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

              <Tabs defaultValue="conseils" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Conseils</TabsTrigger>
                  <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Le Mot du Chef</TabsTrigger>
                  <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Matériel</TabsTrigger>
                </TabsList>
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none"><div className="flex items-start gap-4 animate-fade-in"><Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" /><div className="space-y-4"><h4 className="text-lg font-serif text-white">Astuces Miroir</h4><p className="text-gray-400 leading-relaxed">Le glaçage doit être utilisé entre 30 et 32°C sur un entremets sorti directement du congélateur pour un brillant parfait.</p></div></div></TabsContent>
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none"><div className="flex items-start gap-4 animate-fade-in"><Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" /><div className="space-y-4"><h4 className="text-lg font-serif text-white">L'idée</h4><p className="text-gray-400 leading-relaxed italic">"L'Amarretti joue sur le contraste entre la rondeur de l'amande et le pep's de la griotte. C'est un dessert de caractère."</p></div></div></TabsContent>
                  <TabsContent value="ustensiles" className="mt-0 focus-visible:outline-none"><div className="flex items-start gap-4 animate-fade-in"><Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" /><div className="space-y-4"><h4 className="text-lg font-serif text-white">Matériel</h4><ul className="grid grid-cols-2 gap-2 text-gray-400"><li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercle Ø18cm</li><li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li></ul></div></div></TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amarretti;