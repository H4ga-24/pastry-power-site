import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PateAmandeConfiseur = () => {
  const recipeData = {
    title: "Pâte d'amande confiseur",
    category: "CONFISERIE",
    prepTime: "20 MIN",
    cookTime: "15 MIN",
    difficulty: "TECHNIQUE",
    yield: "600g de pâte",
    image: "https://axelle.me/wp-content/uploads/2022/12/20221220_134842-1140x855.jpg",
    description: "La véritable recette de la pâte d'amande confiseur cuite, bien supérieure à la pâte d'amande crue en termes de texture et de conservation."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Amandes blanches entières", qty: 250, unit: "g" },
        { name: "Sucre semoule", qty: 250, unit: "g" },
        { name: "Eau", qty: 80, unit: "g" },
        { name: "Glucose", qty: 35, unit: "g" },
        { name: "Sucre inverti (Trimoline)", qty: 20, unit: "g" },
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
           <RecipeIngredients ingredients={ingredients} />

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Broyage des amandes</h4>
                       <p className="text-gray-400 leading-relaxed">Si vous partez d'amandes entières, les mixer finement avec 50g du sucre pesé pour obtenir une poudre très fine (tant pour tant). Si vous utilisez de la poudre d'amande, passez à l'étape suivante.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cuisson du sucre</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une casserole, cuire le sucre restant, l'eau et le glucose à 121°C (cuisson au petit boulé). C'est la température cruciale pour pasteuriser et donner la texture.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mélange et séchage</h4>
                       <p className="text-gray-400 leading-relaxed">Verser le sucre cuit sur la poudre d'amande dans la cuve du batteur (feuille) ou dans une casserole. Mélanger. Ajouter le sucre inverti. Dessécher légèrement la pâte sur feu doux si elle semble trop collante, ou continuer à la feuille jusqu'à refroidissement partiel.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Fraisage</h4>
                       <p className="text-gray-400 leading-relaxed">Verser la pâte tiède sur un marbre ou un plan de travail propre. La travailler à la main pour l'homogénéiser et la rendre lisse. Filmer immédiatement.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PateAmandeConfiseur;