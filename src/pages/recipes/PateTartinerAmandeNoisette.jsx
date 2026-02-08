import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Users, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PateTartinerAmandeNoisette = () => {
  const recipeData = {
    title: "Pâte à Tartiner Amande Noisette",
    category: "CONFISERIE",
    prepTime: "20 MIN",
    cookTime: "15 MIN",
    difficulty: "FACILE",
    yield: "2 pots de 350g",
    image: "https://www.tendances-food.fr/wp-content/uploads/2024/07/pate-a-tartiner-noisette.jpg",
    description: "Une pâte à tartiner maison onctueuse, riche en fruits secs torréfiés, sans huile de palme et bien meilleure que celle du commerce."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Noisettes entières", qty: 200, unit: "g" },
        { name: "Amandes entières", qty: 100, unit: "g" },
        { name: "Sucre glace", qty: 150, unit: "g" },
        { name: "Cacao en poudre non sucré", qty: 25, unit: "g" },
        { name: "Poudre de lait (facultatif)", qty: 25, unit: "g" },
        { name: "Huile de pépin de raisin", qty: 30, unit: "g" },
        { name: "Chocolat au lait 40%", qty: 100, unit: "g" },
        { name: "Fleur de sel", qty: "1 pincée", unit: "" },
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
                       <h4 className="text-xl text-white mb-2 font-serif">Torréfaction</h4>
                       <p className="text-gray-400 leading-relaxed">Préchauffer le four à 160°C. Étaler les noisettes et les amandes sur une plaque. Torréfier pendant 15 à 20 minutes jusqu'à ce qu'elles soient bien dorées à cœur (couper une noisette pour vérifier). À la sortie du four, frotter les noisettes dans un torchon pour retirer le maximum de peau.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Le praliné maison</h4>
                       <p className="text-gray-400 leading-relaxed">Mettre les fruits secs refroidis dans un mixeur puissant (robot coupe) avec le sucre glace. Mixer par à-coups. On obtient d'abord une poudre, puis une pâte épaisse, et enfin une pâte liquide et fluide (le praliné). Cela peut prendre 10 à 15 minutes selon le robot. Faire des pauses pour ne pas surchauffer le moteur.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Finition</h4>
                       <p className="text-gray-400 leading-relaxed">Faire fondre le chocolat au lait au bain-marie ou micro-ondes (45°C). Ajouter le chocolat fondu dans le mixeur avec le praliné. Ajouter le cacao, la poudre de lait, le sel et l'huile. Mixer à nouveau quelques secondes pour homogénéiser et émulsionner le tout.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cristallisation</h4>
                       <p className="text-gray-400 leading-relaxed">Verser immédiatement dans des pots en verre propres et secs. Laisser cristalliser à température ambiante (environ 20°C) pendant 24h avant de consommer pour obtenir la texture idéale.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PateTartinerAmandeNoisette;