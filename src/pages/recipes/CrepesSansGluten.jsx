import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Info, Wheat, Clock, ChefHat, Ban } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients'; // 👈 On utilise ton composant centralisé !

// --- 1. LES DONNÉES (Pour le Mode Cuisine & SEO) ---
export const recipeData = {
  title: "Crêpes Légères (Sans Gluten)",
  category: "ALTERNATIVE • SANS-GLUTEN",
  prepTime: "10 MIN + Repos",
  cookTime: "20 MIN",
  difficulty: "TRÈS FACILE",
  description: "Des crêpes fines, dorées et incroyablement légères. Le mélange riz-maïzena remplace la farine de blé à la perfection sans changer le goût.",
  image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1470&auto=format&fit=crop",
  isVip: false
};

export const ingredients = [
  { name: 'Farine de Riz demi-complet', amount: 150, unit: 'g' },
  { name: 'Fécule de Maïs (Maïzena)', amount: 100, unit: 'g' },
  { name: 'Sucre en poudre', amount: 40, unit: 'g' },
  { name: 'Oeufs entiers', amount: 4, unit: 'pièces' },
  { name: 'Lait demi-écrémé (ou Soja)', amount: 500, unit: 'g' },
  { name: 'Beurre fondu (ou Huile)', amount: 40, unit: 'g' },
  { name: 'Sel fin', amount: 2, unit: 'pincée' },
  { name: 'Vanille ou Rhum', amount: 10, unit: 'g', note: 'facultatif' }
];

export const steps = [
  { title: "LES POUDRES", text: "Dans un grand saladier, tamiser ensemble la farine de riz et la fécule de maïs. Ajouter le sucre et le sel. Former un puits au centre." },
  { title: "LE MÉLANGE", text: "Casser les oeufs dans le puits. Commencer à fouetter doucement au centre en incorporant petit à petit les farines." },
  { title: "LA DÉTENTE", text: "Verser le lait très progressivement tout en continuant de fouetter pour éviter les grumeaux. La pâte doit être fluide et lisse." },
  { title: "FINITION", text: "Ajouter le beurre fondu (et l'arôme choisi). Mélanger vigoureusement." },
  { title: "REPOS (CRUCIAL)", text: "Laisser reposer la pâte 1 heure à température ambiante (ou au frais). La farine de riz a besoin de temps pour s'hydrater et s'assouplir." },
  { title: "CUISSON", text: "Graisser une poêle bien chaude. Verser une louche, étaler finement. Cuire 1 à 2 min par face jusqu'à coloration dorée." }
];

// --- 2. LE VISUEL (Ce qui s'affiche) ---
const CrepesSansGluten = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl pb-24 font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-3xl mb-16 shadow-2xl">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
        <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-8">
           <div className="flex gap-2 mb-4">
              <span className="bg-red-500/20 text-red-300 border border-red-500/50 px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                <Ban size={12} /> Sans Gluten
              </span>
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase flex items-center">{recipeData.category}</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{recipeData.title}</h1>
           <div className="flex flex-wrap items-center gap-8 text-xs tracking-widest font-medium text-white/80">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
              <div className="border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full text-[10px]">{recipeData.difficulty}</div>
           </div>
        </div>
      </div>

      <div className="flex gap-4 mb-16 max-w-4xl mx-auto">
        <span className="text-[#D4AF37] text-6xl font-serif leading-none">“</span>
        <p className="text-gray-300 font-light text-lg italic leading-relaxed pt-4">{recipeData.description}</p>
      </div>

      <div className="grid lg:grid-cols-[350px_1fr] gap-16">
        
        {/* COLONNE GAUCHE : INGRÉDIENTS (Automatisé) */}
        <div>
           {/* 👇 On appelle le composant magique ici */}
           <RecipeIngredients 
              ingredients={ingredients} 
              baseServings={15} 
              unitLabel="crêpes" 
           />
        </div>

        {/* COLONNE DROITE : ÉTAPES & INFOS */}
        <div>
          <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Étapes de réalisation</h2>
          
          <div className="space-y-10 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-sm group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">{index + 1}</div>
                </div>
                <div>
                  <h3 className="text-[#D4AF37] font-serif text-lg mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TABS SPÉCIFIQUES À CETTE RECETTE */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden">
            <Tabs defaultValue="astuce" className="w-full">
              <TabsList className="w-full flex bg-transparent border-b border-white/10 p-0 h-auto">
                  <TabsTrigger value="astuce" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Info className="w-3 h-3 mr-2" />Astuce Chef</TabsTrigger>
                  <TabsTrigger value="science" className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37]/5 data-[state=active]:text-[#D4AF37] text-gray-500 py-4 text-xs uppercase tracking-widest"><Wheat className="w-3 h-3 mr-2" />Science</TabsTrigger>
              </TabsList>
              <div className="p-8">
                  <TabsContent value="astuce" className="m-0">
                  <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Texture Parfaite</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Si la pâte épaissit trop après le repos (la farine de riz absorbe beaucoup), n'hésitez pas à rajouter un tout petit peu d'eau ou de lait avant de cuire la première crêpe.
                  </p>
                </TabsContent>
                <TabsContent value="science" className="m-0">
                  <h4 className="text-[#D4AF37] font-serif text-xl mb-4">Pourquoi ce mélange ?</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    La farine de riz seule donne une crêpe cassante et granuleuse. La fécule de maïs (amidon pur) apporte le liant et la légèreté qui manquent au riz. C'est le duo gagnant.
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CrepesSansGluten;