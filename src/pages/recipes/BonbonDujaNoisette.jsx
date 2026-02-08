import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonDujaNoisette = () => {
  const recipeData = {
    title: "Bonbon Chocolat Duja Noisette",
    category: "CHOCOLATERIE",
    prepTime: "2H 00",
    cookTime: "15 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "600 pièces",
    weight: "~6 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8b33a701e56acf3f3322f75c87cd7771.jpg",
    description: "Le Duja est un praliné où le fruit sec est broyé avec du sucre glace au lieu du sucre caramélisé. Résultat : une texture fondante, très fine, avec un goût de noisette pure."
  };

  const ingredients = [
    {
      title: "1. Masse Duja Noisette",
      items: [
        { name: "Noisettes brutes", qty: 2000, unit: "g" },
        { name: "Sucre glace", qty: 2000, unit: "g" },
        { name: "Couverture Lait 35%", qty: 700, unit: "g" },
        { name: "Beurre de cacao", qty: 250, unit: "g" }
      ]
    },
    {
      title: "2. Enrobage & Finition",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 3000, unit: "g" },
        { name: "Feuille transfert (optionnel)", qty: "QS", unit: "" }
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
                      <p className="text-gray-400 text-xs">Utilisation d'une broyeuse à rouleaux recommandée pour un grain très fin. Cadrage épaisseur 10mm.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={600}
             yieldUnit="pièces"
             step={50}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation des Noisettes & Premier Broyage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Torréfier les noisettes au four à 150°C pendant environ 20-25 minutes jusqu'à une belle coloration à cœur (couleur "chameau").
                       Laisser refroidir complètement.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mélanger les noisettes froides avec le sucre glace. Effectuer un premier broyage au robot-coupe pour obtenir une pâte grossière.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Réalisation du Duja</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Fondre la couverture lait et le beurre de cacao à 40°C.
                       Incorporer ce mélange fondu à la pâte de noisette/sucre.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Raffinage et Cadrage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Passer le mélange complet à la broyeuse à rouleaux (ou au robot-coupe très puissant si pas de broyeuse) jusqu'à obtenir une texture parfaitement lisse et soyeuse, sans échauffer la masse au-delà de 40°C.
                       Si nécessaire, tempérer la masse duja à 25-26°C pour qu'elle commence à cristalliser légèrement.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Couler dans un cadre de 34x34 cm (ou dimension adaptée) sur une épaisseur de 10mm.
                       Laisser cristalliser à 16°C pendant 24 à 48 heures.
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le dessous du cadre avec une fine couche de couverture noire. Retourner le cadre.
                       Détailler à la guitare en carrés ou rectangles. Séparer les bonbons.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tempérer la couverture noire d'enrobage. Enrober les bonbons duja.
                       Décorer selon vos envies (fourchette, feuille transfert ou noisette torréfiée posée dessus).
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
                       <strong className="text-white block mb-2">Torréfaction :</strong> C'est l'étape clé du goût. Une torréfaction trop légère donnera un duja fade et pâteux. Une torréfaction bien poussée révèle les arômes et facilite l'extraction de l'huile, rendant le duja plus fluide.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de Broyage :</strong> Attention à l'échauffement lors du broyage. Si la masse dépasse 45-50°C, le goût peut s'altérer et la recristallisation sera plus difficile. Faites des pauses si vous utilisez un robot ménager.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Sucre Glace :</strong> Contrairement au praliné qui utilise du sucre cuit (caramel), le sucre glace apporte de la douceur sans grain. C'est ce qui différencie le Duja (onctueux) du Gianduja (souvent plus cacaoté et ferme).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cristallisation :</strong> Le duja met du temps à cristalliser car il contient beaucoup de matière grasse (huile de noisette + beurre de cacao). Ne précipitez pas la découpe, sinon la guitare ne coupera pas net et les bonbons se déformeront.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Le Duja, c'est la pureté de la noisette. Pas d'artifice de caramel, juste le fruit sec sublimé par le beurre de cacao. Une texture qui fond instantanément sur la langue."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonDujaNoisette;