import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Choco Caramel",
  category: "CHOCOLATERIE",
  prepTime: "1H 30 + 24H (Cristal)",
  cookTime: "45 MIN",
  difficulty: "AVANCÉ",
  description: "Un bonbon au cœur coulant de caramel tendre vanillé aux éclats d'amandes, enrobé d'une couverture lactée. Une texture parfaite 'gros boulé' qui ne colle pas aux dents.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/41d40b64723bb4d07aad6c23635f9bbd.jpg",
  isVip: true // 💎 Recette Signature
};

export const ingredients = [
  // --- 1. Masse Caramel ---
  { name: "Crème fleurette 35%", amount: 800, unit: "g", note: "Caramel" },
  { name: "Sucre semoule", amount: 650, unit: "g", note: "Caramel" },
  { name: "Sirop de glucose", amount: 200, unit: "g", note: "Caramel" },
  { name: "Gousses de vanille", amount: 2, unit: "pce", note: "Caramel" },
  { name: "Beurre doux", amount: 80, unit: "g", note: "Finition" },
  { name: "Beurre de cacao", amount: 30, unit: "g", note: "Finition" },
  { name: "Amandes hachées grillées", amount: 150, unit: "g", note: "Garniture" },
  
  // --- 2. Enrobage ---
  { name: "Couverture Lactée 40%", amount: 1000, unit: "g", note: "Enrobage" }
];

export const steps = [
  { 
    title: "La Cuisson (1ère Phase)", 
    text: "Dans une très grande casserole (le mélange va mousser et monter fortement), réunir la crème, le sucre, le glucose et les gousses de vanille fendues et grattées. Porter à ébullition et cuire à feu moyen jusqu'à 115°C." 
  },
  { 
    title: "La Cuisson (2ème Phase)", 
    text: "Transvaser immédiatement le mélange dans un poêlon en cuivre propre (ou continuer dans la même casserole si fond épais). Cette étape permet de stopper l'inertie et maîtriser la suite. Reprendre la cuisson à feu vif en remuant constamment ('vanner') jusqu'à atteindre exactement 120°C (stade du petit boulé fort / gros boulé)." 
  },
  { 
    title: "L'Arrêt de Cuisson", 
    text: "Retirer du feu. Ajouter aussitôt le beurre et le beurre de cacao. Bien mélanger pour émulsionner et stopper la cuisson. Incorporer les amandes hachées grillées (encore tièdes)." 
  },
  { 
    title: "Le Cadrage", 
    text: "Couler immédiatement dans un cadre de 36x36 cm (hauteur 1 cm) posé sur un Silpat ou papier cuisson huilé. Laisser refroidir et cristalliser à température ambiante (20°C) pendant 24h. Ne pas mettre au frigo (risque de ressuage)." 
  },
  { 
    title: "Le Détaillage", 
    text: "Décadrer le caramel. Détailler à la guitare en carrés de 2,5 x 2,5 cm ou en rectangles. Si le caramel est trop mou, il collera aux fils. S'il est trop dur, il cassera." 
  },
  { 
    title: "L'Enrobage", 
    text: "Mettre au point la couverture lactée. Tremper les intérieurs caramel. Tapoter pour affiner la couche de chocolat (une couche trop épaisse déséquilibre le goût). Déposer sur feuille guitare." 
  }
];

// --- 2. LE VISUEL ---
const BonbonChocoCaramel = () => {
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
                    baseServings={196} 
                    unitLabel="pièces" 
                    step={20} 
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
                         <li><strong className="text-white">Volume de Casserole :</strong> Utilisez un récipient 4 à 5 fois plus grand que le volume initial. La réaction entre la crème et le sucre provoque une mousse qui monte très haut.</li>
                         <li><strong className="text-white">Cuisson en deux temps :</strong> Transvaser après 115°C évite le goût de "brûlé" que peut donner une casserole inox surchauffée. Le cuivre est idéal pour la finition.</li>
                         <li><strong className="text-white">Le Test à l'eau :</strong> Si vous n'avez pas de thermomètre, jetez une goutte de caramel dans l'eau glacée. Elle doit former une boule ferme mais malléable sous les doigts.</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">L'idée</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "Ce bonbon rappelle les caramels de notre enfance, mais avec la finesse d'un chocolatier : une texture courte, non collante, enrobée d'une fine couche de lait."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Grande Casserole</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadre Inox 10mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Guitare de découpe</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre 200°C</li>
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

export default BonbonChocoCaramel;