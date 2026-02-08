import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const GiandujaNoisette = () => {
  const recipeData = {
    title: "Gianduja Noisette",
    category: "CONFISERIE",
    prepTime: "25 MIN",
    cookTime: "15 MIN",
    difficulty: "MOYEN",
    yield: "500g de Gianduja",
    // Nouvelle image (provenant précédemment du Praliné à Sec)
    image: "https://encoreungateau.com/wp-content/uploads/2015/10/gianduja-recette-500x375.jpg",
    description: "Le grand classique de la confiserie italienne. Une pâte onctueuse de noisettes et de chocolat, fondante à souhait."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Noisettes du Piémont (IGP)", qty: 200, unit: "g" },
        { name: "Sucre glace", qty: 200, unit: "g" },
        { name: "Chocolat couverture lait 40%", qty: 100, unit: "g" },
        { name: "Sel fin", qty: "1 pincée", unit: "" },
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
          <div className="rounded-sm overflow-hidden h-[400px] bg-white/5">
             <img 
               src={recipeData.image} 
               alt={recipeData.title} 
               className="w-full h-full object-cover" 
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = "https://images.unsplash.com/photo-1481391319719-61d281219f77?auto=format&fit=crop&q=80&w=1000"; // Fallback robuste
               }}
             />
          </div>
          <div className="flex flex-col justify-center">
             <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{recipeData.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{recipeData.title}</h1>
             <p className="text-gray-400 mb-8 text-lg font-light">{recipeData.description}</p>
             <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Prep: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={500}
             yieldUnit="g"
             step={50}
           />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Torréfaction</h4>
                       <p className="text-gray-400 leading-relaxed">Torréfier les noisettes au four à 160°C pendant environ 15 minutes. Les débarrasser dans un torchon et frotter vigoureusement pour retirer la peau (émonder). Laisser refroidir.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Pâte de noisette</h4>
                       <p className="text-gray-400 leading-relaxed">Mettre les noisettes et le sucre glace dans le bol d'un robot mixeur (cutter). Mixer jusqu'à obtention d'une pâte très fine, presque liquide. C'est l'étape la plus longue, faites des pauses pour ne pas surchauffer la pâte au-delà de 45°C.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mélange final</h4>
                       <p className="text-gray-400 leading-relaxed">Ajouter le chocolat au lait fondu (à 40°C) et la pincée de sel dans le robot. Mixer quelques secondes pour homogénéiser le tout.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Utilisation</h4>
                       <p className="text-gray-400 leading-relaxed">Ce gianduja peut être utilisé tel quel comme pâte à tartiner de luxe, ou coulé en cadre puis découpé en cubes pour des bonbons chocolat (enrobés ensuite).</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GiandujaNoisette;