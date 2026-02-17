import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Pour le Mode Cuisine & SEO) ---
export const recipeData = {
  title: "Bâtons Maréchaux",
  category: "PÂTISSERIE • PETITS FOURS SECS",
  prepTime: "30 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Des biscuits croquants et légers à base de meringue, parsemés d'amandes et de noisettes grillées, traditionnellement finis avec un glaçage au chocolat.",
  image: "https://encoreungateau.com/wp-content/uploads/2019/05/batons-marechaux-avant-cuisson.jpg",
  isVip: false
};

export const ingredients = [
  { name: "Blancs d'œufs", amount: 80, unit: "g" },
  { name: "Sucre semoule", amount: 180, unit: "g" },
  { name: "Amandes hachées", amount: 90, unit: "g" },
  { name: "Noisettes hachées", amount: 45, unit: "g" },
  { name: "Vanille (poudre ou extrait)", amount: 1, unit: "pincée" },
  { name: "Chocolat noir de couverture", amount: 150, unit: "g", note: "Finition" }
];

export const steps = [
  { 
    title: "La Meringue", 
    text: "Dans la cuve du batteur, monter les blancs d'œufs en neige. Lorsqu'ils commencent à mousser, incorporer 1/3 du sucre semoule. Continuer de fouetter et ajouter le reste du sucre progressivement jusqu'à obtenir une meringue ferme, lisse et brillante (le fameux 'bec d'oiseau')." 
  },
  { 
    title: "Le Mélange", 
    text: "Incorporer délicatement à la maryse les amandes et noisettes hachées (idéalement torréfiées et refroidies) ainsi que la vanille. Le mélange doit être homogène mais rester aérien. Ne pas trop travailler l'appareil pour ne pas faire retomber les blancs." 
  },
  { 
    title: "Le Dressage", 
    text: "Mettre l'appareil en poche munie d'une douille lisse de 10mm ou 12mm. Sur une plaque recouverte de papier cuisson (ou Silpat), dresser des bâtonnets réguliers de 6 à 7 cm de long, en les espaçant légèrement." 
  },
  { 
    title: "La Cuisson", 
    text: "Enfourner à 160°C pendant 12 à 15 minutes. Surveillez la coloration : les biscuits doivent être secs au toucher mais rester clairs (très légèrement dorés). Laisser refroidir complètement sur grille (ils durcissent en refroidissant)." 
  },
  { 
    title: "La Finition Chocolat", 
    text: "Fondre et tempérer le chocolat noir. Tremper la base ou les deux extrémités de chaque bâtonnet dans le chocolat. Racler l'excédent sur le bord du bol. Déposer sur une feuille de papier guitare et laisser cristalliser." 
  }
];

// --- 2. LE VISUEL ---
const BatonMarechaux = () => {
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
                    baseServings={20} 
                    unitLabel="bâtons" 
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
                      <h4 className="text-lg font-serif text-white">Torréfaction</h4>
                      <p className="text-gray-400 leading-relaxed">
                        Passez vos amandes et noisettes hachées 10 minutes au four à 150°C avant de les incorporer. Cela décuple les arômes et garantit un croquant exceptionnel (en plus d'éviter qu'elles ne ramollissent la meringue).
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Le secret de la forme</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "Veillez à ce que vos blancs soient parfaitement montés et serrés. Si la meringue est trop liquide, les bâtons vont s'étaler à la cuisson et perdre leur relief caractéristique."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poche à douille</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Douille lisse 10mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Batteur électrique</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Maryse</li>
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

export default BatonMarechaux;