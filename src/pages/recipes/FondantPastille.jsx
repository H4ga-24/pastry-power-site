import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const FondantPastille = () => {
  const recipeData = {
    title: "Fondant Pastille (Glaçage)",
    category: "CONFISERIE / FINITION",
    prepTime: "15 MIN",
    cookTime: "5 MIN",
    difficulty: "TECHNIQUE",
    yield: "Glaçage pour 20 éclairs",
    image: "https://www.tendances-food.fr/wp-content/uploads/2022/12/IMG_20221212_104107-975x1300.jpg",
    description: "La technique professionnelle pour glacer les éclairs et religieuses. Brillance, tenue et croûte fine garanties par un respect strict des températures."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Fondant blanc pâtissier", qty: 500, unit: "g" },
        { name: "Sirop de sucre de canne (ou sirop 30°B)", qty: "QS (20-50g)", unit: "" },
        { name: "Colorant (hydrosoluble)", qty: "Au choix", unit: "" },
        { name: "Arôme (café, chocolat...)", qty: "Facultatif", unit: "" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/confiserie">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Confiserie
          </Button>
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-sm overflow-hidden h-[400px]">
             <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
             <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{recipeData.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{recipeData.title}</h1>
             <p className="text-gray-400 mb-8 text-lg font-light">{recipeData.description}</p>
             <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Prep: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Chauffe: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={20}
             yieldUnit="éclairs"
             step={5}
           />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Assouplir le fondant</h4>
                       <p className="text-gray-400 leading-relaxed">Mettre le fondant (masse dure blanche) dans une casserole. Chauffer au bain-marie ou sur feu très doux en travaillant vigoureusement à la spatule ou au feu pour le détendre. <strong className="text-white">Attention : ne jamais dépasser 37°C.</strong> Si le fondant dépasse cette température, il perdra sa brillance ("il matifie").</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mise au point de la texture</h4>
                       <p className="text-gray-400 leading-relaxed">Le fondant doit avoir une texture nappante ("faire le ruban"). S'il est trop épais à 35°C, ajouter un tout petit peu de sirop de sucre (sirop de canne ou sirop maison eau/sucre bouilli). Ajouter le colorant et l'arôme à ce stade.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Glaçage</h4>
                       <p className="text-gray-400 leading-relaxed">Tremper le dessus du chou ou de l'éclair dans le fondant tiède (32-35°C). Retirer et lisser les bords au doigt (portant un gant ou propre) pour enlever l'excédent. Le glaçage doit figer en quelques secondes à l'air libre.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Astuce brillance</h4>
                       <p className="text-gray-400 leading-relaxed">Si vous avez surchauffé votre fondant et qu'il est terne, il n'y a pas de rattrapage parfait. Mais pour une brillance miroir immédiate, certains pâtissiers passent un très léger coup de sirop de sucre au pinceau sur le glaçage pris.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FondantPastille;