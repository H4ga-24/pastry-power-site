import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Chocolat Passion Griottine",
  category: "CHOCOLATERIE",
  prepTime: "2H + 24H (Cristallisation)",
  cookTime: "30 MIN",
  difficulty: "EXPERT",
  description: "L'alliance audacieuse de l'exotisme et du terroir. Une griottine alcoolisée entière nichée au cœur d'une ganache caramel-passion, sous une coque de chocolat noir croquante.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3505a02f07aaef90c26876afdf520f07.jpg",
  isVip: true // 💎 Je l'ai mis en VIP car c'est du niveau Expert
};

export const ingredients = [
  // --- 1. Ganache Passion Lactée ---
  { name: "Sucre semoule", amount: 640, unit: "g", note: "Ganache (Caramel)" },
  { name: "Sirop de glucose", amount: 200, unit: "g", note: "Ganache (Caramel)" },
  { name: "Purée de fruit de la passion", amount: 600, unit: "g", note: "Ganache (Chaude)" },
  { name: "Chocolat Lait 40%", amount: 1280, unit: "g", note: "Ganache" },
  { name: "Beurre de cacao", amount: 80, unit: "g", note: "Ganache" },
  { name: "Beurre doux", amount: 240, unit: "g", note: "Ganache" },
  { name: "Sorbitol", amount: 80, unit: "g", note: "Ganache (Conservateur)" },
  
  // --- 2. Garniture ---
  { name: "Griottines (Cerises à l'eau de vie)", amount: 714, unit: "pce", note: "Garniture (1 par bonbon)" },
  
  // --- 3. Coque Moulage ---
  { name: "Couverture Noire 65%", amount: 2500, unit: "g", note: "Moulage & Obturation" },
  { name: "Beurre de cacao coloré", amount: 100, unit: "g", note: "Décor (Jaune & Rouge)" }
];

export const steps = [
  { 
    title: "La Ganache Passion (Caramel)", 
    text: "Dans une casserole, réaliser un caramel à sec avec le sucre semoule et le glucose jusqu'à atteindre 175°C (couleur ambrée rougeoyante). Déglacer petit à petit avec la purée de passion chaude (attention aux projections !). Cuire quelques instants pour dissoudre les cristaux éventuels. Laisser refroidir le sirop caramel-passion vers 70°C." 
  },
  { 
    title: "L'Emulsion", 
    text: "Verser le sirop chaud sur le mélange chocolat lait, beurre de cacao et sorbitol. Mixer pour créer l'émulsion. Lorsque la ganache est à 40°C, incorporer le beurre doux en dés. Mixer à nouveau pour parfaire la texture. Filmer au contact et laisser cristalliser jusqu'à 25°C pour le pochage." 
  },
  { 
    title: "Le Moulage (Décor)", 
    text: "Nettoyer et lustrer les moules. Tempérer les beurres de cacao colorés (jaune et rouge). Appliquer au doigt ganté dans le moule de façon aléatoire pour créer un effet marbré. Laisser cristalliser." 
  },
  { 
    title: "Le Moulage (Coque)", 
    text: "Mouler les coques avec la couverture noire tempérée. Tapoter pour enlever les bulles, retourner, égoutter et araser proprement. Laisser cristalliser complètement (retourné sur papier) avant garnissage." 
  },
  { 
    title: "Le Garnissage", 
    text: "Déposer une griottine (parfaitement égouttée depuis la veille sur papier absorbant) au fond de chaque alvéole. Pocher la ganache passion tempérée à 25-26°C par-dessus, en veillant à bien enrober le fruit et à laisser 1mm de vide en haut pour la fermeture." 
  },
  { 
    title: "La Fermeture (Obturation)", 
    text: "Laisser cristalliser 24h à 17°C (le temps qu'une pellicule se forme sur la ganache). Obturer les bonbons avec de la couverture noire tempérée. Racler. Laisser cristalliser au frais avant démoulage." 
  }
];

// --- 2. LE VISUEL ---
const BonbonPassionGriottine = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10" />
        <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block">{recipeData.category}</span>
               {recipeData.isVip && (
                  <span className="bg-[#D4AF37] text-black px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm tracking-wider">
                      Exclusif VIP
                  </span>
               )}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">{recipeData.title}</h1>
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
                    baseServings={714} 
                    unitLabel="pièces" 
                    step={50} // Pas de 50 en 50 pour les grosses quantités
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

            {/* TABS CONSEILS */}
            <Tabs defaultValue="conseils" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Technique</TabsTrigger>
                <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Le Chef</TabsTrigger>
                <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Matériel</TabsTrigger>
              </TabsList>
              
              <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Points Critiques</h4>
                      <ul className="space-y-3 text-gray-400 leading-relaxed text-sm">
                         <li><strong className="text-white">Égouttage :</strong> Sortez les griottines du sirop la veille. Si elles sont humides, l'alcool va dissoudre la coque de l'intérieur (le bonbon "pleure").</li>
                         <li><strong className="text-white">Température Caramel (175°C) :</strong> Trop clair = acide. Trop foncé = amer. Visez un roux profond.</li>
                         <li><strong className="text-white">Pochage (25°C) :</strong> Si la ganache est trop chaude, elle fera fondre la fine couche de décor jaune/rouge et tachera le bonbon.</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">L'Harmonie</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "Ce bonbon est un voyage. L'attaque est craquante (chocolat), le cœur est fondant et fruité (passion), et la finale est puissante et alcoolisée (griottine). C'est un bonbon d'adulte."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Moules Polycarbonate</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre Laser</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur Plongeant</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poche à douille (sans douille)</li>
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

export default BonbonPassionGriottine;