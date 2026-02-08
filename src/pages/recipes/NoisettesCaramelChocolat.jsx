import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const NoisettesCaramelChocolat = () => {
  const recipeData = {
    title: "Noisettes Caramel & Chocolat (Clusters)",
    category: "CHOCOLATERIE",
    prepTime: "1H 30",
    cookTime: "30 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "1000 pièces",
    weight: "~8.0 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/1df5539c0b26e3a4dcff5ceadc8d6a2a.png",
    description: "Une gourmandise rustique et addictive. Des noisettes entières torréfiées à cœur, caramélisées au sucre cuit et à la vanille, assemblées en petits rochers (clusters) puis enrobées de chocolat lait."
  };

  const ingredients = [
    {
      title: "1. Masse Noisette Caramel",
      items: [
        { name: "Noisettes entières (petits calibres)", qty: 4500, unit: "g" },
        { name: "Sucre semoule", qty: 2500, unit: "g" },
        { name: "Eau", qty: 750, unit: "g" },
        { name: "Gousses de vanille", qty: 5, unit: "pce" },
        { name: "Beurre demi-sel", qty: 300, unit: "g" },
        { name: "Fleur de sel", qty: 20, unit: "g" }
      ]
    },
    {
      title: "2. Enrobage",
      items: [
        { name: "Couverture Lait 40% (Enrobage)", qty: 4000, unit: "g" }
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
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Prep: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
             
             <div className="mt-8 p-4 bg-[#1a1a1a] border-l-2 border-[#D4AF37] rounded-r-sm">
                <div className="flex items-start gap-3">
                   <Info className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                   <div>
                      <h4 className="font-bold text-white text-sm mb-1">Info Technique</h4>
                      <p className="text-gray-400 text-xs">Travail du sucre au sablé. Façonnage à chaud impératif (port de gants recommandé).</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={1000}
             yieldUnit="pièces"
             step={100}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Torréfaction</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Torréfier les noisettes au four ventilé à 150°C/160°C pendant environ 20 à 25 minutes. Elles doivent être bien dorées à cœur pour développer tout leur arôme.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Maintenir les noisettes au chaud (environ 50°C-60°C) dans une étuve ou un four bas. C'est crucial pour ne pas choquer thermiquement le caramel à l'étape suivante.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Caramel et Sablage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans un poêlon en cuivre ou une grande casserole large, cuire le sucre, l'eau et les gousses de vanille grattées à 118°C.
                       Verser les noisettes chaudes. Mélanger continuellement hors du feu jusqu'au "sablage" (le sucre cristallise et blanchit autour des noisettes).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Remettre sur le feu moyen. Continuer de mélanger sans cesse pour faire fondre le sucre et le caraméliser.
                       Une fois le caramel ambré foncé et brillant (couleur "robe de moine"), retirer du feu. Ajouter le beurre demi-sel et la fleur de sel. Bien mélanger pour enrober chaque noisette.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Façonnage des Clusters</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Verser la masse sur un marbre légèrement huilé ou un tapis Silpat.
                       Tant que la masse est encore chaude et malléable, prélever des petits tas à l'aide de deux cuillères ou avec des gants résistants à la chaleur.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Former des "clusters" en regroupant 3 à 4 noisettes collées ensemble par le caramel. Laisser refroidir complètement sur feuille. Stocker au sec (les noisettes caramélisées craignent l'humidité).
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture lait.
                       Tremper les clusters refroidis dans le chocolat. Tapoter légèrement pour retirer l'excédent mais conserver une couche généreuse.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déposer sur feuille guitare. Laisser cristalliser à 17°C.
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
                       <strong className="text-white block mb-2">Torréfaction Intense :</strong> Ne sous-estimez pas la torréfaction. Le goût de la noisette doit pouvoir rivaliser avec la puissance du caramel et la douceur du chocolat au lait.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Maintien en Température :</strong> Le moment critique est le façonnage. Si le caramel durcit trop vite, remettez la masse quelques secondes au four tiède ou sous une lampe à sucre pour la ramollir légèrement sans faire fondre le caramel.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Beurre :</strong> L'ajout de beurre en fin de cuisson du caramel a deux fonctions : il apporte du goût (surtout le demi-sel) et il aide à séparer les noisettes pour éviter d'avoir un bloc compact impossible à portionner.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Technique d'Enrobage :</strong> Pour ce type de produit très irrégulier, l'enrobage manuel à la fourchette est idéal. Veillez à ce que le chocolat pénètre bien dans les interstices entre les noisettes pour sceller le caramel et éviter qu'il ne "ressue" (devienne collant).
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Le Cluster est l'alliance parfaite du croquant et du fondant. C'est un bonbon 'snacking' par excellence, rustique d'apparence mais sophistiqué en goût grâce à la qualité des noisettes et du caramel."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default NoisettesCaramelChocolat;