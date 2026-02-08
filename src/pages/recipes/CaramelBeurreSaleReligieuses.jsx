import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const CaramelBeurreSaleReligieuses = () => {
  const recipeData = {
    title: "Caramel Beurre Salé (Insert)",
    category: "CONFISERIE / GARNITURE",
    prepTime: "10 MIN",
    cookTime: "15 MIN",
    difficulty: "MOYEN",
    yield: "500g (Garniture 20 Religieuses)",
    image: "https://www.tendances-food.fr/wp-content/uploads/2023/05/caramel-beurre-sale-14-religieuses-cap-patissier-1176x1300.jpg",
    description: "Un caramel coulant mais qui se tient, idéal pour insérer au cœur d'une religieuse, d'un chou ou d'un macaron. L'équilibre parfait sucré-salé."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Sucre semoule", qty: 200, unit: "g" },
        { name: "Glucose (optionnel)", qty: 40, unit: "g" },
        { name: "Crème liquide 35%", qty: 200, unit: "g" },
        { name: "Gousses de vanille", qty: 0.5, unit: "pièce" },
        { name: "Beurre doux (froid)", qty: 150, unit: "g" },
        { name: "Fleur de sel de Guérande", qty: 3, unit: "g" },
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
             initialYield={20}
             yieldUnit="religieuses"
             step={5}
           />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Chauffer la crème</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une petite casserole, porter la crème liquide et la gousse de vanille fendue à ébullition. Retirer du feu, couvrir et laisser infuser le temps de cuire le sucre (ou retirer la vanille si on est pressé).</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Caramélisation</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une casserole à fond épais, réaliser un caramel à sec. Verser le sucre (mélangé au glucose si utilisé) en 3 fois, en attendant que le sucre soit fondu avant d'en rajouter. Cuire jusqu'à obtenir une couleur ambrée foncée (environ 175°C-180°C) pour avoir du goût, mais sans brûler.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Déglacage</h4>
                       <p className="text-gray-400 leading-relaxed">Hors du feu, verser doucement la crème chaude sur le caramel en faisant attention aux éclaboussures de vapeur. Remuer vivement au fouet. Remettre sur feu doux et cuire jusqu'à 108°C (pour une texture qui file légèrement) ou 105°C (plus liquide).</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Montage au beurre</h4>
                       <p className="text-gray-400 leading-relaxed">Verser le caramel dans un récipient haut. Laisser refroidir jusqu'à 45°C-50°C. Ajouter le beurre froid coupé en dés et la fleur de sel. Mixer au mixeur plongeant pour créer une émulsion parfaite et brillante. Mettre en poche ou en pot et réserver au frais.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CaramelBeurreSaleReligieuses;