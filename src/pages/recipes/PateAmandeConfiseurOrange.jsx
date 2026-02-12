import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PateAmandeConfiseurOrange = () => {
  const recipeData = {
    title: "Pâte d'amande confiseur 30% à l'orange",
    category: "CONFISERIE",
    isVip: true,
    prepTime: "20 MIN",
    cookTime: "10 MIN",
    difficulty: "MOYEN",
    yield: "500g de pâte",
    image: "https://www.doyoucake.fr/wp-content/uploads/2025/09/faire-pate-amandes-maison-810x365.jpg",
    description: "Une pâte d'amande maison délicatement parfumée à l'orange, idéale pour le modelage de fruits déguisés ou pour garnir des intérieurs de chocolats."
  };

  const ingredients = [
      {
          title: null,
          items: [
              { name: "Amandes en poudre", qty: 150, unit: "g" },
              { name: "Sucre glace", qty: 150, unit: "g" },
              { name: "Sirop de sucre de canne", qty: 30, unit: "g" },
              { name: "Blanc d'oeuf (pasteurisé)", qty: 25, unit: "g" },
              { name: "Zestes d'orange bio", qty: "1 orange", unit: "" },
              { name: "Grand Marnier (facultatif)", qty: "1 c.à.s", unit: "" }
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
                       <h4 className="text-xl text-white mb-2 font-serif">Préparation des poudres</h4>
                       <p className="text-gray-400 leading-relaxed">Mélanger la poudre d'amande et le sucre glace. Pour une texture très fine, passer le mélange au mixeur par à-coups brefs (ne pas chauffer l'amande sinon elle rendra son huile) puis tamiser.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Mélange</h4>
                       <p className="text-gray-400 leading-relaxed">Dans la cuve du batteur muni de la feuille, verser les poudres et les zestes d'orange finement râpés (ou de l'extrait d'orange). Commencer à mélanger à vitesse lente. Ajouter progressivement le sirop et le blanc d'œuf.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Pétrissage</h4>
                       <p className="text-gray-400 leading-relaxed">Pétrir jusqu'à ce que la pâte forme une boule homogène qui se détache des parois. Ajouter le Grand Marnier si désiré à la fin. Ne pas trop travailler la pâte pour éviter qu'elle ne devienne huileuse.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Repos</h4>
                       <p className="text-gray-400 leading-relaxed">Filmer la pâte au contact hermétiquement pour éviter qu'elle ne sèche (croûte). Laisser reposer 24h au frais avant utilisation pour que les arômes d'orange diffusent.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PateAmandeConfiseurOrange;