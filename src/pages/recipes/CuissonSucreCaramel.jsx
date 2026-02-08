import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const CuissonSucreCaramel = () => {
  const recipeData = {
    title: "Cuisson Sucre Caramel (Pièces Montées)",
    category: "CONFISERIE / TECHNIQUE",
    prepTime: "5 MIN",
    cookTime: "15 MIN",
    difficulty: "AVANCÉ",
    yield: "Pour glacer 30 choux",
    image: "https://files.meilleurduchef.com/mdc/photo/recette/caramel-a-croquembouche/caramel-a-croquembouche-1200.jpg",
    description: "Le caramel 'grand cassé' utilisé pour coller les choux des croquembouches et les glacer pour obtenir ce craquant vitrifié caractéristique."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Sucre morceaux (n°4)", qty: 300, unit: "g" },
        { name: "Eau", qty: 100, unit: "g" },
        { name: "Glucose", qty: 60, unit: "g" },
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
           <div className="space-y-4">
              <RecipeIngredients 
                ingredients={ingredients} 
                initialYield={30}
                yieldUnit="choux"
                step={5}
              />
              
              <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded text-[#D4AF37] text-xs">
                <strong>Important :</strong> Utiliser du sucre en morceaux est recommandé car il contient moins d'impuretés que le sucre semoule, réduisant le risque de "masser" (cristalliser).
              </div>
           </div>

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Dissolution</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une casserole en cuivre (idéalement) ou inox propre, mettre l'eau et le sucre. Porter à ébullition. Écumer si nécessaire (retirer la mousse grise en surface) pour avoir un sucre pur.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Ajout du glucose</h4>
                       <p className="text-gray-400 leading-relaxed">Une fois que ça bout et que le sucre est dissous, ajouter le glucose. Le glucose empêche le sucre de recristalliser (masser) et donne de l'élasticité au caramel.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cuisson</h4>
                       <p className="text-gray-400 leading-relaxed">Nettoyer les bords de la casserole avec un pinceau trempé dans l'eau froide pour éviter que des cristaux ne fassent masser l'ensemble. Cuire jusqu'à une légère coloration jaune paille (environ 155°C - 160°C). Ne pas trop colorer, car le caramel continue de cuire avec l'inertie.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Arrêt de cuisson (Décuire)</h4>
                       <p className="text-gray-400 leading-relaxed">Dès que la couleur désirée est atteinte, tremper le "cul" de la casserole dans un récipient d'eau froide pendant 2 secondes pour stopper net la cuisson. Poser ensuite la casserole sur un plan incliné pour rassembler le caramel et faciliter le trempage des choux.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CuissonSucreCaramel;