import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Moulé Caramel Mangue",
  category: "CHOCOLATERIE",
  prepTime: "2H + 2H (Repos)",
  cookTime: "30 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une coque fine en chocolat au lait renfermant un cœur coulant de caramel exotique à la mangue. L'alliance parfaite entre la douceur lactée et le fruité acidulé.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8c854e72d9bd134985b3024ad0d26079.png",
  isVip: false
};

export const ingredients = [
  // --- 1. Caramel Mangue ---
  { name: "Sucre semoule", amount: 100, unit: "g", note: "Caramel" },
  { name: "Sirop de glucose", amount: 25, unit: "g", note: "Caramel" },
  { name: "Purée de mangue", amount: 85, unit: "g", note: "Caramel (chaude)" },
  { name: "Crème fleurette 35%", amount: 45, unit: "g", note: "Caramel (chaude)" },
  { name: "Beurre doux", amount: 25, unit: "g", note: "Finition" },
  
  // --- 2. Moulage Coque ---
  { name: "Couverture Lait 40%", amount: 500, unit: "g", note: "Moulage & Obturation" },
  { name: "Beurre de cacao", amount: 20, unit: "g", note: "Décor (facultatif)" }
];

export const steps = [
  { 
    title: "Le Caramel Mangue", 
    text: "Chauffer la crème et la purée de mangue ensemble (sans bouillir). Réaliser un caramel à sec (couleur blonde) avec le sucre et le glucose. Ne pas trop pousser la couleur pour préserver le goût du fruit." 
  },
  { 
    title: "Le Déglaçage", 
    text: "Déglacer le caramel avec le mélange crème/mangue chaud (attention aux projections). Cuire le tout jusqu'à 106°C précisément." 
  },
  { 
    title: "L'Emulsion", 
    text: "Hors du feu, attendre que la température redescende vers 45-50°C, puis incorporer le beurre coupé en dés et émulsionner au mixeur plongeant. Laisser refroidir à température ambiante environ 2h pour qu'il soit 'pocheable' (27-28°C)." 
  },
  { 
    title: "Le Moulage (Coque)", 
    text: "Mettre au point la couverture lait. Remplir entièrement le moule de chocolat tempéré. Tapoter fermement pour chasser les bulles d'air. Attendre une minute pour créer l'épaisseur de coque, puis retourner le moule pour vider l'excédent. Araser proprement. Laisser cristalliser (les coques doivent devenir mates)." 
  },
  { 
    title: "Le Garnissage", 
    text: "Pocher le caramel mangue (à ~28°C) dans les coques en laissant un espace de 1 à 2 mm par rapport au bord supérieur. Laisser croûter le caramel environ 2h à température ambiante (20°C)." 
  },
  { 
    title: "L'Obturation", 
    text: "Obturer les bonbons avec de la couverture lait tempérée. Lisser à la spatule pour avoir un fond bien plat. Laisser cristalliser au moins 2h au frais avant de démouler en tapant le moule sur le plan de travail." 
  }
];

// --- 2. LE VISUEL ---
const BonbonMouleCaramelMangue = () => {
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
                    baseServings={24} 
                    unitLabel="pièces" 
                    step={6} 
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
                         <li><strong className="text-white">Choc Thermique :</strong> Chauffez toujours votre liquide (crème + purée) avant de déglacer le caramel. Un liquide froid ferait masser le sucre instantanément.</li>
                         <li><strong className="text-white">Cuisson 106°C :</strong> C'est le point clé pour obtenir une texture qui coule mais ne détrempe pas la coque trop vite. En dessous, c'est trop liquide. Au dessus, c'est trop dur.</li>
                         <li><strong className="text-white">Obturation :</strong> Si le caramel n'a pas assez croûté (séché en surface), le chocolat de fermeture va se mélanger avec, créant des trous.</li>
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
                        "Pour un caramel aux fruits, on cherche une couleur 'blonde'. Si le caramel est trop foncé, son amertume masquera la délicatesse de la mangue."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Moule Polycarbonate</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre Laser</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur Plongeant</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Spatule Triangle</li>
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

export default BonbonMouleCaramelMangue;