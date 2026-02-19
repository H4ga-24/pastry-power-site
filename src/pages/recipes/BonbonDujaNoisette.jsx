import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Chocolat Duja Noisette",
  category: "CHOCOLATERIE",
  prepTime: "2H 00 + 48H (Repos)",
  cookTime: "15 MIN (Torréfaction)",
  difficulty: "INTERMÉDIAIRE",
  description: "Le Duja est un praliné où le fruit sec est broyé avec du sucre glace au lieu du sucre caramélisé. Résultat : une texture fondante, très fine, avec un goût de noisette pure.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8b33a701e56acf3f3322f75c87cd7771.jpg",
  isVip: false // Accessible à tous (Technique de base)
};

export const ingredients = [
  // --- 1. Masse Duja ---
  { name: "Noisettes brutes", amount: 2000, unit: "g", note: "Duja" },
  { name: "Sucre glace", amount: 2000, unit: "g", note: "Duja" },
  { name: "Couverture Lait 35%", amount: 700, unit: "g", note: "Duja" },
  { name: "Beurre de cacao", amount: 250, unit: "g", note: "Duja" },
  
  // --- 2. Finition ---
  { name: "Couverture Noire 64%", amount: 3000, unit: "g", note: "Enrobage" },
  { name: "Feuille transfert", amount: 1, unit: "pc", note: "Décor (facultatif)" }
];

export const steps = [
  { 
    title: "La Torréfaction", 
    text: "Torréfier les noisettes au four à 150°C pendant environ 20-25 minutes. Elles doivent être colorées à cœur (couleur 'chameau' ou doré soutenu) pour développer tout leur arôme. Laisser refroidir complètement." 
  },
  { 
    title: "Le Pré-Broyage", 
    text: "Mélanger les noisettes froides avec le sucre glace. Passer au robot-coupe pour obtenir une pâte grossière (comme un praliné rustique)." 
  },
  { 
    title: "Le Mélange", 
    text: "Fondre la couverture lait et le beurre de cacao à 40°C. Verser ce mélange liquide sur la pâte de noisette." 
  },
  { 
    title: "Le Raffinage (Broyeuse)", 
    text: "Passer le tout à la broyeuse à rouleaux (ou mixer très longtemps au robot, par à-coups pour ne pas chauffer). On cherche une texture de pommade, lisse et soyeuse. Attention : la masse ne doit pas dépasser 45°C." 
  },
  { 
    title: "Le Cadrage", 
    text: "Si la masse est trop chaude, la tabler (refroidir sur marbre) jusqu'à 26°C. Couler dans un cadre de 10mm de hauteur. Laisser cristalliser à 16°C pendant 24 à 48 heures. Le duja met du temps à durcir." 
  },
  { 
    title: "La Finition", 
    text: "Chablonner le dessous du cadre avec du chocolat noir. Retourner. Détailler à la guitare (carrés ou rectangles). Enrober avec de la couverture noire tempérée. Décorer." 
  }
];

// --- 2. LE VISUEL ---
const BonbonDujaNoisette = () => {
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
                    baseServings={600} 
                    unitLabel="pièces" 
                    step={50} 
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
                         <li><strong className="text-white">Torréfaction :</strong> C'est l'étape clé. Une torréfaction poussée facilite la sortie de l'huile et donne le goût. Trop légère = duja fade et pâteux.</li>
                         <li><strong className="text-white">Cristallisation :</strong> Soyez patients. Le duja est très gras (huile de noisette + beurre de cacao). Si vous coupez trop tôt, la guitare va s'encrasser et les bonbons seront déformés.</li>
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
                        "Le Duja, c'est la pureté de la noisette. Pas d'artifice de caramel, juste le fruit sec sublimé par le beurre de cacao. Une texture qui fond instantanément sur la langue."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Broyeuse (ou Robot puissant)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadre Inox 10mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Guitare de découpe</li>
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
  );
};

export default BonbonDujaNoisette;