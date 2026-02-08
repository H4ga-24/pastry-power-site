import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const GiandujaAmande = () => {
  const recipeData = {
    title: "Gianduja Amande",
    category: "CONFISERIE",
    prepTime: "25 MIN",
    cookTime: "15 MIN",
    difficulty: "MOYEN",
    yield: "500g de Gianduja",
    // Nouvelle image (provenant précédemment du Gianduja Noisette)
    image: "https://empreintesucree.fr/wp-content/uploads/2017/01/1-gianduja-maison-recette-patisserie-empreinte-sucree.jpg",
    description: "Une alternative douce au classique gianduja noisette. Le fondant de l'amande associé au chocolat au lait pour des intérieurs de bonbons ou des tartinables d'exception."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Amandes brutes", qty: 200, unit: "g" },
        { name: "Sucre glace", qty: 200, unit: "g" },
        { name: "Chocolat couverture lait 40%", qty: 100, unit: "g" },
        { name: "Fleur de sel", qty: 2, unit: "g" },
        { name: "Huile de pépin de raisin (si besoin)", qty: "QS", unit: "" },
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
                 e.target.src = "https://images.unsplash.com/photo-1614088685112-0a760b7163c8?auto=format&fit=crop&q=80&w=1000"; // Fallback robuste
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
                       <p className="text-gray-400 leading-relaxed">Torréfier les amandes au four à 150°C pendant 15-20 minutes pour développer les arômes. Laisser refroidir complètement.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Broyage</h4>
                       <p className="text-gray-400 leading-relaxed">Dans un robot coupe puissant, mixer les amandes froides avec le sucre glace. Mixer par impulsions pour obtenir une pâte d'amande très fine et légèrement huileuse (texture fluide). Ajouter une pointe d'huile si la pâte reste sèche.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mélange</h4>
                       <p className="text-gray-400 leading-relaxed">Faire fondre le chocolat au lait à 40-45°C. Incorporer la pâte d'amande et la fleur de sel. Mélanger intimement pour créer une émulsion. Vérifier la température finale (environ 26-27°C) si vous souhaitez l'utiliser immédiatement pour le fourrage.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cristallisation</h4>
                       <p className="text-gray-400 leading-relaxed">Pour obtenir un bloc de gianduja à découper, couler dans un cadre ou un moule et laisser cristalliser à 16-18°C pendant 24h.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GiandujaAmande;