import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PralineSec = () => {
  const recipeData = {
    title: "Le praliné à sec",
    category: "CONFISERIE / BASE",
    prepTime: "20 MIN",
    cookTime: "20 MIN",
    difficulty: "MOYEN",
    yield: "600g de praliné",
    // Nouvelle image spécifique demandée
    image: "https://perleensucre.com/wp-content/uploads/2019/11/pate-de-praline.jpg",
    description: "La technique traditionnelle du praliné où le caramel est réalisé séparément des fruits secs pour un goût de caramel plus prononcé et une texture intense."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Noisettes entières", qty: 200, unit: "g" },
        { name: "Amandes entières", qty: 200, unit: "g" },
        { name: "Sucre semoule", qty: 250, unit: "g" },
        { name: "Fleur de sel", qty: 2, unit: "g" },
        { name: "Vanille (optionnel)", qty: 0.5, unit: "gousse" },
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
                 e.target.src = "https://images.unsplash.com/photo-1599599810769-bcde5a823097?auto=format&fit=crop&q=80&w=1000"; // Fallback robuste
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
             initialYield={600}
             yieldUnit="g"
             step={50}
           />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Torréfaction</h4>
                       <p className="text-gray-400 leading-relaxed">Torréfier les amandes et noisettes au four à 150°C pendant 20 minutes pour les sécher à cœur. Laisser refroidir sur plaque.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Caramel à sec</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une large casserole, réaliser un caramel à sec avec le sucre. Ajouter le sucre petit à petit au fur et à mesure qu'il fond. Cuire jusqu'à une belle couleur ambrée foncée (mais pas brûlée). Verser le caramel chaud sur une feuille de papier cuisson ou un silpat. Laisser refroidir complètement jusqu'à ce qu'it durcisse.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Broyage grossier (Pralin)</h4>
                       <p className="text-gray-400 leading-relaxed">Casser la plaque de caramel froid en morceaux. Mettre les fruits secs et les éclats de caramel dans le robot coupe. Mixer par à-coups. Vous obtiendrez d'abord une poudre grossière : c'est le pralin.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Finition (Praliné)</h4>
                       <p className="text-gray-400 leading-relaxed">Continuer de mixer. L'huile des fruits va ressortir et transformer la poudre en pâte épaisse, puis en pâte liquide et fluide. C'est le praliné. Ajouter la fleur de sel à la fin. Conserver en pot hermétique.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PralineSec;