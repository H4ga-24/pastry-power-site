import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Café New Delhi",
  category: "CHOCOLATERIE",
  prepTime: "24H (Infusion) + 1H",
  cookTime: "10 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Un voyage sensoriel intense. Une ganache onctueuse réalisée avec une infusion à froid de café Arabica et de cardamome verte pour des arômes floraux sans amertume, enrobée de chocolat noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/eedbc196d5872f75d3dc0d99f51dcb30.png",
  isVip: true // 💎 Technique Infusion à Froid
};

export const ingredients = [
  // --- 1. Ganache Café ---
  { name: "Crème fleurette 35%", amount: 2200, unit: "g", note: "Ganache" },
  { name: "Café en grains (Arabica)", amount: 250, unit: "g", note: "Infusion" },
  { name: "Cardamome verte", amount: 40, unit: "g", note: "Infusion" },
  { name: "Sirop de glucose", amount: 350, unit: "g", note: "Ganache" },
  { name: "Sorbitol poudre", amount: 150, unit: "g", note: "Ganache" },
  { name: "Couverture Lait 40%", amount: 2400, unit: "g", note: "Ganache" },
  { name: "Couverture Noire 64%", amount: 600, unit: "g", note: "Ganache" },
  { name: "Beurre doux", amount: 450, unit: "g", note: "Ganache" },
  
  // --- 2. Finition ---
  { name: "Couverture Noire", amount: 300, unit: "g", note: "Chablonnage" },
  { name: "Couverture Noire 64%", amount: 3000, unit: "g", note: "Enrobage" },
  { name: "Grains de café choco", amount: 800, unit: "pcs", note: "Décor" }
];

export const steps = [
  { 
    title: "L'Infusion à Froid (J-1)", 
    text: "La veille : Concasser grossièrement les grains de café (ne pas les moudre en poudre fine, juste les casser). Écraser les gousses de cardamome pour les ouvrir. Mélanger à la crème froide. Filmer au contact et laisser infuser 24h au frigo. Cette technique capture les arômes volatils sans l'amertume." 
  },
  { 
    title: "La Ganache", 
    text: "Le jour J : Chinoiser la crème en pressant bien le marc pour tout extraire. Peser et compléter avec de la crème neuve pour avoir 2200g. Chauffer la crème avec le glucose et le sorbitol à 75°C. Verser sur les chocolats (lait + noir) partiellement fondus." 
  },
  { 
    title: "L'Emulsion", 
    text: "Réaliser l'émulsion au mixeur plongeant. À 35°C/40°C, incorporer le beurre pommade. Mixer longuement pour une texture parfaite. Couler en cadre de 10mm. Laisser cristalliser 24 à 48h à 16-18°C." 
  },
  { 
    title: "Le Détaillage", 
    text: "Chablonner le cadre avec une fine couche de couverture noire. Retourner. Détailler à la guitare des carrés de 2.25 x 2.25 cm." 
  },
  { 
    title: "L'Enrobage", 
    text: "Tempérer la couverture noire. Enrober les bonbons. Déposer un grain de café en chocolat (ou un vrai grain torréfié) au centre immédiatement après le trempage." 
  }
];

// --- 2. LE VISUEL ---
const BonbonCafeNewDelhi = () => {
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
                    baseServings={800} 
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
                         <li><strong className="text-white">Pourquoi à froid ?</strong> Le café chauffé libère des tanins amers et acides. L'infusion à froid est plus douce, ronde et aromatique. C'est la méthode "Cold Brew".</li>
                         <li><strong className="text-white">La Cardamome :</strong> Écrasez juste les gousses ("glausser") pour libérer les graines noires sans les réduire en poudre, sinon impossible à filtrer.</li>
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
                        "New Delhi évoque les marchés aux épices. L'association café-cardamome est un classique du Moyen-Orient, offrant une chaleur aromatique qui persiste longuement en bouche."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Chinois étamine</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadre Inox 10mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur Plongeant</li>
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

export default BonbonCafeNewDelhi;