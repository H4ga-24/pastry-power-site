import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const TabletteFourrePistache = () => {
  const recipeData = {
    title: "Tablette fourré pistache",
    category: "CHOCOLATERIE",
    prepTime: "1H + 2H (Repos)",
    cookTime: "15 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "3 Tablettes",
    weight: "~100-120g / tablette",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6ac9773ded84387d8e7634f08574e034.jpg",
    description: "Une tablette gourmande en chocolat blanc incrustée de pistaches et garnie d'une ganache onctueuse à la pistache. Un véritable concentré de saveurs pour les amateurs de fruits secs."
  };

  const ingredients = [
    {
      title: "1. Ganache pistache",
      items: [
        { name: "Crème 35%", qty: 54, unit: "g" },
        { name: "Couverture blanche", qty: 108, unit: "g" },
        { name: "Praliné pistache", qty: 40, unit: "g" }
      ]
    },
    {
      title: "2. Garniture",
      items: [
        { name: "Pistaches émondées", qty: "QS", unit: "" },
        { name: "Riz soufflé", qty: "QS", unit: "" }
      ]
    },
    {
      title: "3. Tablette chocolat Coque",
      items: [
        { name: "Couverture blanche (Moulage)", qty: 500, unit: "g" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/chocolaterie">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Chocolaterie
          </Button>
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-sm overflow-hidden h-[400px] border border-white/10 relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
             <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex flex-col justify-center">
             <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{recipeData.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{recipeData.title}</h1>
             <p className="text-gray-400 mb-8 text-lg font-light">{recipeData.description}</p>
             <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Process: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
             
             <div className="mt-8 p-4 bg-[#1a1a1a] border-l-2 border-[#D4AF37] rounded-r-sm">
                <div className="flex items-start gap-3">
                   <Info className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                   <div>
                      <h4 className="font-bold text-white text-sm mb-1">Info Technique</h4>
                      <p className="text-gray-400 text-xs">Moule polycarbonate forme triangle ou tablette classique. La ganache doit être refroidie avant garnissage.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={3}
             yieldUnit="tablettes"
             step={1}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation de la ganache pistache</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Faire bouillir la crème liquide.
                       Verser la crème bouillante sur la couverture blanche en trois fois (réaliser une émulsion).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Ajouter le praliné pistache et mélanger soigneusement pour obtenir une texture homogène.
                       Laisser refroidir à température ambiante jusqu'à une texture pochable (environ 25-27°C).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Moulage tablettes</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture blanche. Remplir les moules à tablettes à ras bord.
                       Tapoter pour faire remonter les bulles d'air. Attendre une minute, puis retourner le moule pour vider l'excédent et créer la coque.
                       Araser proprement et laisser cristalliser quelques minutes.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Disposer quelques grains de riz soufflé et pistaches entières au fond de la coque.
                       Garnir avec la ganache pistache refroidie en laissant un espace de 1-2 mm pour la fermeture.
                       Laisser figer au frais pendant 2h.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Obturer les tablettes avec de la couverture blanche tempérée. Lisser.
                       Laisser cristalliser complètement (environ 2h) avant de démouler délicatement.
                    </p>
                 </div>
              </div>

              {/* Conseils du Chef */}
              <div className="mt-16 p-8 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                 <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                    <ChefHat className="w-6 h-6 text-[#D4AF37]" /> Astuces et Conseils du Chef
                 </h3>
                 <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
                    <p>
                       <strong className="text-white block mb-2">L'Emulsion :</strong> Versez la crème bouillante progressivement sur le chocolat blanc pour créer un noyau élastique et brillant. C'est le secret d'une ganache stable et onctueuse.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de Ganache :</strong> Ne garnissez jamais vos coques avec une ganache trop chaude ({">"}30°C), elle ferait fondre la fine couche de chocolat de votre moule.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Bulle d'Air :</strong> Le tapotage est essentiel, surtout avec le chocolat blanc qui est souvent plus visqueux. Insistez bien pour avoir une surface lisse.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Riz Soufflé :</strong> L'ajout de riz soufflé apporte un croustillant "surprise" qui contraste agréablement avec le fondant de la ganache et le croquant de la coque.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Obturation Propre :</strong> Si votre ganache dépasse ou n'est pas assez figée, l'obturation sera difficile et le démoulage risqué. Le passage au frais est une étape clé ici.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Patience :</strong> Le chocolat blanc cristallise plus lentement que le noir. Ne forcez pas le démoulage si le chocolat n'est pas complètement rétracté (vous devez voir un léger décollement).
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default TabletteFourrePistache;