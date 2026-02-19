import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Florentin & Ganache Amère",
  category: "CHOCOLATERIE",
  prepTime: "2H 30 + 24H (Cristal)",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "L'élégance d'un classique revisité. Un disque de nougatine croustillante aux amandes, oranges et miel, surmonté d'une ganache noire intense et peu sucrée. Un jeu de textures parfait.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/cbef407c92ab7561d5406e122492664a.png",
  isVip: true // 💎 Technique avancée
};

export const ingredients = [
  // --- 1. Masse Florentin ---
  { name: "Sucre semoule", amount: 750, unit: "g", note: "Florentin" },
  { name: "Miel", amount: 250, unit: "g", note: "Florentin" },
  { name: "Crème liquide 35%", amount: 750, unit: "g", note: "Florentin" },
  { name: "Beurre", amount: 750, unit: "g", note: "Florentin" },
  { name: "Amandes effilées", amount: 850, unit: "g", note: "Florentin" },
  { name: "Oranges confites cubes", amount: 750, unit: "g", note: "Florentin" },
  
  // --- 2. Ganache Amère ---
  { name: "Crème liquide 35%", amount: 1300, unit: "g", note: "Ganache" },
  { name: "Sucre inverti (Trimoline)", amount: 200, unit: "g", note: "Ganache" },
  { name: "Couverture Noire 70%", amount: 1100, unit: "g", note: "Ganache" },
  { name: "Beurre de cacao", amount: 30, unit: "g", note: "Ganache" },
  { name: "Beurre doux", amount: 150, unit: "g", note: "Ganache" },
  
  // --- 3. Finitions ---
  { name: "Couverture Noire", amount: 500, unit: "g", note: "Chablonnage" },
  { name: "Couverture Noire 64%", amount: 3000, unit: "g", note: "Enrobage" }
];

export const steps = [
  { 
    title: "La Masse Florentin", 
    text: "Dans une grande casserole, cuire ensemble le sucre, le miel, la crème et le beurre à 118°C (petit boulé). Hors du feu, ajouter les amandes effilées et les cubes d'oranges confites. Mélanger délicatement à la spatule sans trop briser les amandes." 
  },
  { 
    title: "La Cuisson Florentin", 
    text: "Étaler finement la masse sur feuilles silpat ou dans des moules flexipan 'florentins' (pour une forme parfaite). Cuire au four ventilé à 170°C jusqu'à obtention d'une couleur caramel doré uniforme (environ 10-12 min). Laisser refroidir complètement à plat." 
  },
  { 
    title: "La Ganache Amère", 
    text: "Faire bouillir la crème avec le sucre inverti. Verser sur la couverture noire et le beurre de cacao partiellement fondus. Réaliser l'émulsion au fouet ou mixeur. À 40°C, ajouter le beurre en dés. Mixer pour lisser. Couler la ganache dans un cadre de 4mm de hauteur (ou dresser à la poche des palets sur les florentins refroidis). Laisser cristalliser 24h à 16°C." 
  },
  { 
    title: "Le Chablonnage (Crucial)", 
    text: "Si montage cadre : Chablonner le dessus de la ganache avec la couverture noire fondue (non tempérée). Retourner le cadre. Coller les disques de florentins froids sur la ganache à l'aide d'une fine couche de chocolat tempéré." 
  },
  { 
    title: "La Découpe", 
    text: "Si montage cadre : Détailler à la guitare ou à l'emporte-pièce (côté ganache dessus pour ne pas casser les amandes). Si montage individuel : Vos bonbons sont déjà formés." 
  },
  { 
    title: "L'Enrobage", 
    text: "Mettre au point la couverture d'enrobage. Tremper les pièces. Déposer sur feuille guitare. Laisser le relief du florentin apparent ou marquer à la fourchette selon l'esthétique choisie." 
  }
];

// --- 2. LE VISUEL ---
const BonbonFlorentin = () => {
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
                    baseServings={730} 
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
                         <li><strong className="text-white">Le Chablonnage :</strong> Indispensable ! Il isole le florentin (sucre cuit = éponge à humidité) de la ganache (contient de l'eau). Sans cette couche de chocolat, le florentin ramollit en 2 jours.</li>
                         <li><strong className="text-white">Cuisson Florentin :</strong> Visez une couleur "acajou". Trop pâle = collant aux dents. Trop foncé = amer.</li>
                         <li><strong className="text-white">Découpe Cadre :</strong> Coupez toujours à l'envers (florentin contre la guitare) pour que les lames traversent le mou d'abord et cassent net le dur ensuite.</li>
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
                        "C'est un bonbon de contraste. Le craquant caramélisé des amandes répond à l'amertume puissante du cacao. Un mariage de textures intemporel qui demande une cuisson millimétrée."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Casserole Cuivre (idéal)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cadres Inox</li>
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

export default BonbonFlorentin;