import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PateTartinerPistacheFramboise = () => {
  const recipeData = {
    title: "Pâte à Tartiner Pistache Framboise",
    category: "CONFISERIE",
    prepTime: "25 MIN",
    cookTime: "10 MIN",
    difficulty: "MOYEN",
    yield: "2 pots de 250g",
    image: "https://www.tendances-food.fr/wp-content/uploads/2024/07/Pate-a-tartiner-framboise-pistache.jpg",
    description: "L'association vibrante de la pistache verte et de l'acidité de la framboise croustillante. Une gourmandise de luxe."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Pistaches vertes émondées", qty: 250, unit: "g" },
        { name: "Sucre glace", qty: 100, unit: "g" },
        { name: "Chocolat blanc 34%", qty: 180, unit: "g" },
        { name: "Huile de pépin de raisin", qty: 40, unit: "g" },
        { name: "Fleur de sel", qty: "1 pincée", unit: "" },
        { name: "Framboises crispy (lyophilisées)", qty: 25, unit: "g" },
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
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={2}
             yieldUnit="pots"
             step={1}
           />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Pâte de pistache maison</h4>
                       <p className="text-gray-400 leading-relaxed">Torréfier légèrement les pistaches (10 min à 140°C) pour ne pas brunir la couleur verte. Laisser refroidir. Mixer les pistaches avec le sucre glace et l'huile dans un robot coupe jusqu'à obtention d'une pâte très fine et presque liquide.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mélange</h4>
                       <p className="text-gray-400 leading-relaxed">Faire fondre le chocolat blanc à 40°C. Verser le chocolat fondu sur la pâte de pistache dans le robot (ou mélanger au fouet vigoureusement). Ajouter la fleur de sel. Vérifier la température : le mélange doit être autour de 28-30°C.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Ajout des framboises</h4>
                       <p className="text-gray-400 leading-relaxed">Incorporer les brisures de framboises lyophilisées (crispy) à la spatule (ne plus mixer, sinon on perd le croquant et la couleur vire au grisâtre). </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Conditionnement</h4>
                       <p className="text-gray-400 leading-relaxed">Mettre en pot immédiatement. Conserver à température ambiante à l'abri de la lumière pour préserver la belle couleur verte et le rouge des framboises.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PateTartinerPistacheFramboise;