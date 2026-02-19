import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Chocolat Beijing",
  category: "CHOCOLATERIE",
  prepTime: "2H + 12H (Cristal)",
  cookTime: "45 MIN",
  difficulty: "EXPERT",
  description: "Un bonbon bi-texture d'une grande technicité : socle de ganache lait Alunga surmonté d'un dôme de confiture de lait maison, le tout enrobé de chocolat noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6fc1ae009d495697691e2419b05e886d.jpg",
  isVip: true // 💎 Haute technicité
};

export const ingredients = [
  // --- 1. Ganache Alunga ---
  { name: "Crème fleurette 35%", amount: 1450, unit: "g", note: "Ganache" },
  { name: "Sirop de glucose", amount: 300, unit: "g", note: "Ganache" },
  { name: "Sorbitol cristallisé", amount: 150, unit: "g", note: "Ganache" },
  { name: "Chocolat Lait Alunga 41%", amount: 2600, unit: "g", note: "Ganache" },
  { name: "Beurre sec 84%", amount: 250, unit: "g", note: "Ganache" },
  
  // --- 2. Confiture de Lait ---
  { name: "Lait entier", amount: 2000, unit: "g", note: "Confiture" },
  { name: "Sucre semoule", amount: 1000, unit: "g", note: "Confiture" },
  { name: "Sirop de glucose", amount: 200, unit: "g", note: "Confiture" },
  { name: "Gousses de vanille", amount: 2, unit: "pce", note: "Confiture" },
  { name: "Bicarbonate de soude", amount: 2, unit: "g", note: "Confiture" },
  
  // --- 3. Enrobage ---
  { name: "Couverture Noire 64%", amount: 3000, unit: "g", note: "Enrobage" }
];

export const steps = [
  { 
    title: "La Ganache Alunga", 
    text: "Chauffer la crème, le glucose et le sorbitol à 75°C précisement (ne pas bouillir pour garder le goût lacté frais). Verser sur le chocolat Alunga (non fondu). Laisser reposer 2 min pour amorcer la fonte. Émulsionner au mixeur plongeant. Ajouter le beurre en dés à 35-40°C. Couler en cadre de 6mm. Cristalliser 12h à 16-18°C." 
  },
  { 
    title: "La Confiture de Lait", 
    text: "Porter à ébullition le lait, sucre, glucose, vanille et bicarbonate (qui va brunir le lait par réaction de Maillard). Baisser le feu et laisser réduire en remuant régulièrement jusqu'à atteindre 104°C (texture nappante qui fige sur assiette froide). Débarrasser, filmer et laisser refroidir totalement pour qu'elle épaississe." 
  },
  { 
    title: "Le Détaillage", 
    text: "Chablonner la ganache cristallisée avec une fine couche de chocolat. Retourner le cadre. Détailler à la guitare en carrés de 2.5cm." 
  },
  { 
    title: "Le Pochage Bi-Texture", 
    text: "Pocher une boule de confiture de lait (3-4g) sur chaque carré de ganache avec une douille n°8. Laisser croûter légèrement à l'air libre (30 min) pour que la confiture ne colle pas aux doigts lors de l'enrobage." 
  },
  { 
    title: "L'Enrobage Technique", 
    text: "Mettre au point la couverture noire. Enrober les bonbons en plongeant le dôme (confiture) vers le bas, retourner et sortir délicatement sans écraser la confiture de lait. La coque doit être fine mais hermétique." 
  }
];

// --- 2. LE VISUEL ---
const BonbonBeijing = () => {
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
                    baseServings={750} 
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
                         <li><strong className="text-white">Ganache :</strong> Ne faites pas bouillir la crème (75°C max) pour préserver l'arôme lacté du chocolat Alunga. Le repos de 2 min sur les pistoles est crucial pour amorcer la fonte sans choc thermique.</li>
                         <li><strong className="text-white">Confiture :</strong> Cuisson impérative à 104°C. En dessous, elle coulera à l'enrobage. Au-dessus, elle sera caoutchouteuse ("Toffee").</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">La Science</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "Le bicarbonate de soude n'est pas là pour lever la pâte (il n'y en a pas !). Il accélère la réaction de Maillard, donnant à la confiture de lait cette couleur caramel profond et ce goût typique bien plus rapidement."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadre 6mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Guitare de découpe</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre sonde</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li>
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

export default BonbonBeijing;