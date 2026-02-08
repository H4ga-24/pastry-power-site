import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const FondantConfiseur = () => {
  const recipeData = {
    title: "Fondant",
    category: "CONFISERIE / BASE",
    prepTime: "10 MIN",
    cookTime: "15 MIN",
    difficulty: "TECHNIQUE",
    yield: "1 kg de fondant",
    // Nouvelle image (provenant précédemment du Gianduja Amande)
    image: "https://mapatisserie.fr/wp-content/uploads/2016/03/IMG_20160330_221127-01-1.jpeg",
    description: "Le fondant blanc pâtissier classique, base essentielle pour glacer éclairs et religieuses, obtenu par cuisson et tablage du sucre."
  };

  const ingredients = [
    {
      title: null,
      items: [
        { name: "Sucre semoule", qty: 1000, unit: "g" },
        { name: "Eau", qty: 350, unit: "g" },
        { name: "Glucose", qty: 100, unit: "g" },
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
          <div className="rounded-sm overflow-hidden h-[400px] bg-white/5 relative">
             <img 
               src={recipeData.image} 
               alt={recipeData.title} 
               className="w-full h-full object-cover" 
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&q=80&w=1000"; // Fallback robuste
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
           <div className="space-y-4">
              <RecipeIngredients 
                ingredients={ingredients} 
                initialYield={1000}
                yieldUnit="g"
                step={100}
              />
              
              <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded text-[#D4AF37] text-xs">
                <strong>Matériel :</strong> Un thermomètre précis et un batteur sur socle (avec la feuille) ou de bons bras pour tabler sont indispensables.
              </div>
           </div>

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cuisson du sucre</h4>
                       <p className="text-gray-400 leading-relaxed">Dans une casserole propre, mettre l'eau, le sucre et le glucose. Porter à ébullition en écumant soigneusement les impuretés. Nettoyer les bords au pinceau humide. Cuire le sirop jusqu'à 114°C (ou 116°C pour un fondant plus dur).</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Refroidissement</h4>
                       <p className="text-gray-400 leading-relaxed">Verser le sirop cuit sur le marbre (légèrement aspergé d'eau) ou dans la cuve du batteur. Laisser refroidir jusqu'à ce que la température atteigne environ 75°C. Ne pas y toucher pendant le refroidissement.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Tablage (Masse)</h4>
                       <p className="text-gray-400 leading-relaxed">Travailler la masse énergiquement (avec une spatule triangulaire sur le marbre ou à la feuille au batteur vitesse moyenne). Le sirop transparent va s'opacifier, blanchir et devenir une pâte blanche crémeuse. C'est la recristallisation contrôlée du sucre.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Maturation</h4>
                       <p className="text-gray-400 leading-relaxed">Une fois la pâte transformée en fondant blanc (elle va chauffer un peu et se durcir), la débarrasser dans un récipient hermétique. Il est recommandé de laisser le fondant "mûrir" 24h à 3 jours avant utilisation pour une meilleure texture.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FondantConfiseur;