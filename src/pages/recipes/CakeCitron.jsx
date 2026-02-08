import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const CakeCitron = () => {
  const recipeData = {
    category: "PÂTISSERIE • GÂTEAUX DE VOYAGE",
    title: "Cake au citron",
    prepTime: "20 MIN",
    cookTime: "45 MIN",
    difficulty: "FACILE",
    description: "Un cake acidulé imbibé d'un sirop léger pour un moelleux incomparable.",
    image: "https://assets.afcdn.com/recipe/20160405/56534_w1024h1024c1cx1500cy1000.webp",
    baseServings: 8,
  };

  const [servings, setServings] = useState(recipeData.baseServings);

  const updateServings = (change) => {
    const newServings = servings + change;
    if (newServings >= 1) setServings(newServings);
  };

  const scaleIngredient = (amount, base) => {
    const match = amount.match(/^([\d\.,]+)\s*(.*)$/);
    if (!match) return amount;
    const val = parseFloat(match[1].replace(',', '.'));
    if (isNaN(val)) return amount;
    const scaled = (val * servings / base);
    const formatted = Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace('.0', '');
    return `${formatted} ${match[2]}`;
  };

  const ingredients = [
    { name: "Sucre semoule", amount: "200g" },
    { name: "Zestes de citron jaune", amount: "2" },
    { name: "Oeufs entiers", amount: "150g (3)" },
    { name: "Crème liquide 35%", amount: "95g" },
    { name: "Farine T55", amount: "190g" },
    { name: "Levure chimique", amount: "4g" },
    { name: "Beurre fondu", amount: "65g" },
    { name: "Sirop: Eau", amount: "75g" },
    { name: "Sirop: Sucre", amount: "30g" },
    { name: "Sirop: Jus de citron", amount: "25g" }
  ];

  const steps = [
    { title: "Infusion", text: "Mélanger le sucre et les zestes de citron. Laisser reposer 10 min pour parfumer le sucre." },
    { title: "Appareil", text: "Fouetter les œufs avec le sucre citronné jusqu'à blanchiment. Ajouter la crème liquide." },
    { title: "Secs", text: "Incorporer la farine et la levure tamisées ensemble." },
    { title: "Beurre", text: "Terminer par le beurre fondu tiède. Mélanger pour lisser l'appareil." },
    { title: "Cuisson", text: "Verser dans le moule. Cuire à 165°C pendant 45 minutes environ." },
    { title: "Sirop", text: "Porter l'eau et le sucre à ébullition. Hors du feu, ajouter le jus de citron. Imbiber le cake encore chaud avec le sirop." }
  ];

  return (
    <>
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
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
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Users className="w-5 h-5" />
                    <span className="font-serif text-lg">Portions</span>
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
                <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
                <ul className="space-y-4">
                  {ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between items-center text-sm pb-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 font-light">{ing.name}</span>
                      <span className="text-[#D4AF37] font-medium">{scaleIngredient(ing.amount, recipeData.baseServings)}</span>
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
                           <li>L'imbibage est l'étape clé ! N'hésitez pas à utiliser tout le sirop. Le cake va boire le liquide, ce qui lui donnera une texture fondante et prolongera sa conservation.</li>
                           <li>Utilisez une râpe type Microplane pour prélever uniquement le zeste (jaune) et non le ziste (blanc) qui est amer.</li>
                           <li>Filmez le cake hermétiquement dès qu'il a refroidi. Il sera encore meilleur le lendemain une fois que les arômes se seront diffusés.</li>
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
                          "L'acidité du citron est ici parfaitement équilibrée par la douceur du sirop. C'est un gâteau tout en fraîcheur qui supporte très bien le voyage et se conserve plusieurs jours sans sécher."
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
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Moule à cake</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Zesteur (Microplane)</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cul de poule</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Fouet</li>
                          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Pinceau (imbibage)</li>
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
export default CakeCitron;