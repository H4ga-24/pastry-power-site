import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale, Info } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Standardisées) ---
export const recipeData = {
  title: "Bonbon Charentais",
  category: "CHOCOLATERIE",
  prepTime: "2H + 24H (Cristal)",
  cookTime: "20 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une spécialité de caractère : une ganache au caramel brun déglacée à la crème, parfumée aux zestes d'orange et relevée au Cognac, dressée en sarments.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/873ef306c9ad5de8e7d4d441eff3fbfd.png",
  isVip: true // 💎 Spécialité Régionale
};

export const ingredients = [
  // --- 1. Ganache ---
  { name: "Sucre semoule", amount: 1600, unit: "g", note: "Caramel" },
  { name: "Sirop de glucose", amount: 400, unit: "g", note: "Caramel" },
  { name: "Crème fleurette 35%", amount: 2000, unit: "g", note: "Ganache" },
  { name: "Zestes d'orange", amount: 6, unit: "pcs", note: "Infusion" },
  { name: "Couverture Lait 40%", amount: 2400, unit: "g", note: "Ganache" },
  { name: "Beurre doux", amount: 600, unit: "g", note: "Ganache" },
  { name: "Cognac 50% vol", amount: 300, unit: "g", note: "Ganache" },
  
  // --- 2. Enrobage ---
  { name: "Couverture Noire 64%", amount: 3500, unit: "g", note: "Enrobage" }
];

export const steps = [
  { 
    title: "L'Infusion", 
    text: "Porter la crème à ébullition avec les zestes d'orange. Couvrir et laisser infuser 20 minutes. Chinoiser et peser pour rectifier le poids (ajouter de la crème si évaporation). Réchauffer avant utilisation." 
  },
  { 
    title: "Le Caramel", 
    text: "Dans une grande casserole, cuire le sucre et le glucose jusqu'à obtention d'un caramel brun 'fumeux' (pour donner du corps au goût face au chocolat au lait). Décuire prudemment avec la crème chaude infusée." 
  },
  { 
    title: "La Cuisson 103°C", 
    text: "Porter le mélange caramel/crème à 103°C. Cette température assure la bonne conservation (Aw) et la texture finale." 
  },
  { 
    title: "L'Emulsion", 
    text: "Laisser refroidir le sirop à 80°C. Verser sur la couverture lait en pistoles. Émulsionner au mixeur plongeant. À 35°C, incorporer le beurre pommade puis le Cognac. Lisser l'émulsion." 
  },
  { 
    title: "Le Dressage (Sarments)", 
    text: "Laisser la ganache cristalliser à température ambiante jusqu'à une consistance 'pommade' (elle doit tenir la forme). Pocher à la douille unie n°10 de longs boudins réguliers sur feuille guitare. Laisser cristalliser 24 à 48h à 17°C." 
  },
  { 
    title: "La Finition", 
    text: "Couper les boudins en tronçons de 3cm (forme de sarment). Mettre au point la couverture noire. Enrober les bonbons. Avant cristallisation complète, rouler sur grille ou marquer à la fourchette pour imiter l'écorce de vigne." 
  }
];

// --- 2. LE VISUEL ---
const BonbonCharentais = () => {
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
                         <li><strong className="text-white">La Texture :</strong> Tout se joue au pochage. Si la ganache est trop chaude, elle s'étale. Si elle est trop froide, elle est dure à sortir et fait des "escaliers".</li>
                         <li><strong className="text-white">L'Alcool :</strong> Le Cognac est ajouté à la fin (35°C) pour ne pas s'évaporer et garder toute sa puissance aromatique.</li>
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
                        "Le Charentais est un hommage au terroir. N'ayez pas peur de pousser la cuisson du caramel jusqu'à une couleur brune/fumeuse pour contrebalancer la douceur du chocolat au lait."
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Poche + Douille 10mm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre sonde</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li>
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

export default BonbonCharentais;