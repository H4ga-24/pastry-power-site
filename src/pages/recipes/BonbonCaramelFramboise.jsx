import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Caramel Framboise",
  category: "CHOCOLATERIE",
  prepTime: "2H + 2H (Repos)",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "L'acidité vibrante de la framboise rencontre la douceur d'un caramel blond dans une coque de chocolat noir croquante. Un équilibre parfait entre fruit et cacao.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7b75bc93226bfc3ad056acc4fc093b2d.png",
  isVip: true // 💎 Recette Technique
};

export const ingredients = [
  // --- 1. Caramel Framboise ---
  { name: "Sucre semoule", amount: 150, unit: "g", note: "Caramel" },
  { name: "Sirop de glucose", amount: 30, unit: "g", note: "Caramel" },
  { name: "Crème liquide 35%", amount: 60, unit: "g", note: "Caramel (chaude)" },
  { name: "Purée de framboise", amount: 110, unit: "g", note: "Caramel (chaude)" },
  { name: "Beurre doux", amount: 35, unit: "g", note: "Finition" },
  { name: "Beurre de cacao", amount: 10, unit: "g", note: "Finition" },
  
  // --- 2. Moulage Coque ---
  { name: "Couverture Noire 65%", amount: 600, unit: "g", note: "Moulage & Obturation" }
];

export const steps = [
  { 
    title: "Le Caramel Framboise", 
    text: "Dans une casserole, porter à frémissement le mélange crème liquide et purée de framboise. Réserver au chaud (c'est crucial pour le déglaçage). Parallèlement, réaliser un caramel à sec avec le sucre et le glucose. Cuire jusqu'à obtention d'une couleur blonde claire (ne pas trop foncer pour préserver le goût délicat de la framboise)." 
  },
  { 
    title: "Le Déglaçage", 
    text: "Déglacer le caramel avec le mélange crème/framboise chaud en plusieurs fois (attention aux vapeurs !). Remettre sur le feu et cuire l'ensemble jusqu'à 106°C précisément. Cette température garantit le coulant." 
  },
  { 
    title: "L'Emulsion", 
    text: "Refroidir le caramel à 40°C. Ajouter le beurre et le beurre de cacao. Emulsionner au mixeur plongeant pour lisser la texture. Laisser cristalliser 2h à température ambiante pour que la texture épaississe (idéalement 27-28°C pour le pochage)." 
  },
  { 
    title: "Le Moulage (Coque)", 
    text: "Mettre au point la couverture noire. Remplir les moules (préalablement nettoyés à l'alcool et coton). Tapoter fermement le moule sur le plan de travail pour faire remonter les bulles d'air. Attendre une minute, retourner pour vider l'excédent, et araser proprement." 
  },
  { 
    title: "Le Garnissage", 
    text: "Garnir les coques avec le caramel framboise (à 28°C max) en laissant 2mm de vide pour la fermeture. Laisser croûter 2h à 24h à 17°C (le caramel doit faire une petite 'peau' sèche en surface)." 
  },
  { 
    title: "La Fermeture", 
    text: "Obturer avec de la couverture noire tempérée. Racler proprement pour avoir un fond plat. Placer au frais 30 min puis laisser cristalliser à 17°C pendant 2h avant de démouler par torsion légère du moule." 
  }
];

// --- 2. LE VISUEL ---
const BonbonCaramelFramboise = () => {
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
                    baseServings={40} 
                    unitLabel="pièces" 
                    step={10} 
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
                         <li><strong className="text-white">Liquides Chauds :</strong> Il est impératif de chauffer la crème et la purée avant de les verser sur le sucre cuit. Un liquide froid provoquerait un choc thermique violent et une cristallisation immédiate (sucre massé).</li>
                         <li><strong className="text-white">Couleur Blonde :</strong> Visez une couleur "Ambre clair". Un caramel trop foncé apporterait une amertume qui entrerait en conflit avec l'acidité de la framboise.</li>
                         <li><strong className="text-white">L'Obturation :</strong> Assurez-vous que le caramel a bien croûté (séché en surface) avant de fermer. Sinon, le chocolat de fermeture coulera dans le caramel.</li>
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
                        "L'alliance de la framboise et du chocolat noir est un classique, mais la texture caramel lui apporte une longueur en bouche exceptionnelle."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poche à douille</li>
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

export default BonbonCaramelFramboise;