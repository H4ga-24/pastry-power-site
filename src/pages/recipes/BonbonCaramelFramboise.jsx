import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonCaramelFramboise = () => {
  const recipeData = {
    title: "Bonbon Caramel Framboise (Fusion Sucrée)",
    category: "CHOCOLATERIE",
    prepTime: "2H + 2H (Repos)",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    yield: "40 bonbons",
    weight: "~10-12g / pièce",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7b75bc93226bfc3ad056acc4fc093b2d.png",
    description: "L'acidité vibrante de la framboise rencontre la douceur d'un caramel blond dans une coque de chocolat noir croquante. Un équilibre parfait entre fruit et cacao."
  };

  const ingredients = [
    {
      title: "1. Caramel Framboise",
      items: [
        { name: "Sucre semoule", qty: 150, unit: "g" },
        { name: "Sirop de glucose", qty: 30, unit: "g" },
        { name: "Crème liquide 35%", qty: 60, unit: "g" },
        { name: "Purée de framboise", qty: 110, unit: "g" },
        { name: "Beurre doux", qty: 35, unit: "g" },
        { name: "Beurre de cacao", qty: 10, unit: "g" }
      ]
    },
    {
      title: "2. Moulage Coque & Obturation",
      items: [
        { name: "Couverture Noire 65% (Moulage)", qty: 600, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Moule polycarbonate ovale ou facette. Cuisson à 106°C précise pour garantir le coulant.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={40}
             yieldUnit="pièces"
             step={10}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Caramel Framboise</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, porter à frémissement le mélange crème liquide et purée de framboise. Réserver au chaud.
                       Réaliser un caramel à sec avec le sucre et le glucose. Cuire jusqu'à obtention d'une couleur blonde claire (ne pas trop foncer pour préserver le goût du fruit).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déglacer le caramel avec le mélange crème/framboise chaud en plusieurs fois.
                       Cuire l'ensemble jusqu'à 106°C.
                       Refroidir à 40°C puis ajouter le beurre et le beurre de cacao. Emulsionner au mixeur plongeant.
                       Laisser cristalliser 2h à température ambiante pour que la texture épaississe (idéalement 27-28°C pour pocher).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Moulage Coque</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture noire.
                       Remplir les moules (nettoyés à l'alcool et coton), tapoter fermement avec le manche de la spatule pour faire remonter les bulles d'air.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Attendre une minute pour laisser le chocolat épaissir sur les parois (la coque doit être assez fine mais solide).
                       Retourner le moule et vider l'excédent. Araser proprement. Laisser cristalliser retourné sur papier guitare quelques minutes puis remettre à l'endroit.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Garnissage et Finition</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Garnir les coques avec le caramel framboise (à 28°C max) en laissant 2mm de vide pour la fermeture.
                       Laisser croûter 2h à 24h à 17°C (le caramel doit faire une petite "peau").
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Obturer avec de la couverture noire tempérée. Racler proprement pour avoir un fond plat.
                       Placer au frais 30 min puis laisser cristalliser à 17°C pendant 2h avant de démouler par torsion légère du moule.
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
                       <strong className="text-white block mb-2">Température des Liquides :</strong> Il est impératif de chauffer la crème et la purée avant de les verser sur le sucre cuit. Un liquide froid provoquerait un choc thermique violent et une cristallisation immédiate du sucre (massé).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Couleur du Caramel :</strong> Visez une couleur "Ambre clair". Un caramel trop foncé apporterait une amertume qui entrerait en conflit avec l'acidité de la framboise au lieu de la soutenir.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cuisson à 106°C :</strong> C'est la température précise pour un caramel qui reste coulant à température ambiante tout en ayant assez de corps pour ne pas détremper la coque en chocolat sur la durée.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Texture et Emulsion :</strong> L'ajout du beurre à 40°C suivi d'un mixage intensif (sans incorporer d'air) garantit une texture soyeuse, brillante et une conservation prolongée.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Moulage Parfait :</strong> La phase de tapotage est cruciale pour éviter les petites bulles d'air disgracieuses en surface de vos bonbons. Soyez énergique !
                    </p>
                    <p>
                       <strong className="text-white block mb-2">L'Obturation :</strong> Assurez-vous que le caramel a bien croûté (séché en surface) avant de fermer. Sinon, le chocolat de fermeture coulera dans le caramel, créant des défauts d'étanchéité.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonCaramelFramboise;