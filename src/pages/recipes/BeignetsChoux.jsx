import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Pour le Mode Cuisine & SEO) ---
export const recipeData = {
  title: "Beignets de Pâte à Choux",
  category: "PÂTISSERIE • PÂTE À CHOUX",
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Aussi appelés 'Pets de nonne', ces petites boules de pâte à choux frites soufflent à la cuisson pour devenir incroyablement légères et aériennes.",
  image: "https://www.ticino.ch/pictures/infoturistica/verybig4/tortelli-4.jpg",
  isVip: false
};

export const ingredients = [
  { name: "Pâte à choux crue", amount: 400, unit: "g", note: "Recette de base (voir Pâte à Choux)" },
  { name: "Huile de friture", amount: 1, unit: "L", note: "Pépins de raisin ou Tournesol" },
  { name: "Sucre semoule", amount: 100, unit: "g", note: "Enrobage" },
  { name: "Sucre glace", amount: 20, unit: "g", note: "Finition (facultatif)" }
];

export const steps = [
  { 
    title: "La Pâte à Choux", 
    text: "Réaliser une pâte à choux classique (eau/lait, beurre, sel, sucre, farine, œufs). La particularité pour les beignets : il faut bien la dessécher à la casserole pour qu'elle contienne moins d'eau libre et n'absorbe pas trop d'huile à la friture." 
  },
  { 
    title: "Le Bain d'Huile", 
    text: "Verser l'huile dans une friteuse ou une grande casserole à bords hauts. Chauffer à 170°C. C'est la température critique : trop chaud, ils brûlent sans cuire à cœur ; trop froid, ils boivent l'huile." 
  },
  { 
    title: "Le Façonnage", 
    text: "À l'aide de deux petites cuillères ou d'une poche à douille (sans douille ou 10mm), former des petites boules de la taille d'une noix. Couper la pâte aux ciseaux à la sortie de la poche directement au-dessus de l'huile. Ne surchargez pas le bain (max 10 à la fois)." 
  },
  { 
    title: "La Cuisson (Le Soufflé)", 
    text: "Les beignets vont plonger, puis remonter et gonfler. Ils ont la particularité de se retourner tout seuls lorsqu'une face est cuite ! Laissez frire 5 à 6 minutes jusqu'à une belle coloration dorée uniforme." 
  },
  { 
    title: "L'Enrobage", 
    text: "Sortir les beignets avec une écumoire et les déposer sur du papier absorbant pour retirer l'excédent de gras. Roulez-les immédiatement (encore chauds) dans le sucre semoule pour qu'il cristallise et adhère bien." 
  }
];

// --- 2. LE VISUEL ---
const BeignetsChoux = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10" />
        <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">{recipeData.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
              <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
              <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.difficulty}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE : INGRÉDIENTS */}
          <div className="md:col-span-4 space-y-8">
             <div className="sticky top-24">
                <RecipeIngredients 
                    ingredients={ingredients} 
                    baseServings={6} 
                    unitLabel="personnes" 
                />
             </div>
          </div>

          {/* COLONNE DROITE : ÉTAPES */}
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

            {/* TABS */}
            <Tabs defaultValue="conseils" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils</TabsTrigger>
                <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Le Chef</TabsTrigger>
                <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Ustensiles</TabsTrigger>
              </TabsList>
              
              <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Astuces Friture</h4>
                      <p className="text-gray-400 leading-relaxed">
                        Ne surchargez jamais le bain d'huile. Si vous mettez trop de beignets d'un coup, la température de l'huile chute brutalement, et les beignets absorbent le gras au lieu de saisir.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">La Légèreté</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "Le secret des pets de nonne, c'est l'emprisonnement de la vapeur. Une pâte bien desséchée à la casserole + une friture chaude = une explosion de volume."
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ustensiles" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Matériel</h4>
                      <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Friteuse ou Casserole</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre sonde</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Écumoire (Araignée)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Papier absorbant</li>
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
  );
};

export default BeignetsChoux;