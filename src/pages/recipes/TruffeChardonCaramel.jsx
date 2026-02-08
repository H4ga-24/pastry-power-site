import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const TruffeChardonCaramel = () => {
  const recipeData = {
    title: "Truffe Chardon au Caramel",
    category: "CHOCOLATERIE",
    prepTime: "2H 00",
    cookTime: "30 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "790 pièces",
    weight: "~8 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3cb65d12941c94016dfe5729457af895.png",
    description: "Un grand classique de la chocolaterie : une ganache caramel tendre et onctueuse, enrobée d'une couverture noire et façonnée en 'chardon' pour une texture unique en bouche."
  };

  const ingredients = [
    {
      title: "1. Ganache Caramel Cœur",
      items: [
        { name: "Sucre semoule", qty: 1600, unit: "g" },
        { name: "Crème liquide 35%", qty: 1600, unit: "g" },
        { name: "Sirop de glucose DE60", qty: 200, unit: "g" },
        { name: "Sorbitol poudre", qty: 100, unit: "g" },
        { name: "Fleur de sel", qty: 12, unit: "g" },
        { name: "Couverture Lait 40%", qty: 2800, unit: "g" },
        { name: "Beurre de cacao", qty: 100, unit: "g" },
        { name: "Beurre doux", qty: 400, unit: "g" }
      ]
    },
    {
      title: "2. Enrobage & Finition",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 3000, unit: "g" },
        { name: "Couverture Noire (Mise au point)", qty: 500, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Pochage douille lisse n°10. Enrobage manuel sur grille à chardon (maille large). Poids unitaire fini : ~10-12g.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={790}
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
                    <h4 className="text-xl text-white mb-4 font-serif">Ganache Caramel</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Réaliser un caramel à sec avec le sucre semoule. En parallèle, chauffer la crème liquide avec le glucose, le sorbitol et la fleur de sel.
                       Décuire le caramel avec la crème chaude (attention aux projections). Cuire le tout à 105°C pour assurer une bonne conservation et texture.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser refroidir le caramel à 60°C. Verser sur la couverture lait et le beurre de cacao partiellement fondus. 
                       Réaliser l'émulsion à la maryse puis au mixeur plongeant. À 35°C-40°C, incorporer le beurre doux en parcelles et mixer à nouveau pour obtenir une ganache lisse et brillante.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Dressage et Façonnage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Laisser cristalliser la ganache à température ambiante (16-18°C) jusqu'à ce qu'elle ait une texture pochable (environ 24h, ou moins si tablage léger).
                       Dresser des boules régulières à la poche munie d'une douille lisse n°10 sur feuille guitare.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser cristalliser les boules jusqu'à ce qu'elles soient manipulables. Rouler chaque boule à la main (port de gants recommandé) pour les rendre parfaitement sphériques.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage "Chardon"</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture noire. Tremper les boules de ganache dans la couverture tempérée.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Pour l'effet "Chardon" : Rouler immédiatement la truffe enrobée sur une "grille à chardon" (grille à mailles métalliques rectangulaires ou losanges). Le mouvement de roulement sur les fils de la grille va tirer le chocolat et créer ces pics caractéristiques.
                       Laisser cristalliser sur une feuille propre.
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
                       <strong className="text-white block mb-2">Température de la ganache :</strong> Pour le pochage, la ganache ne doit être ni trop dure (elle casserait à la poche) ni trop molle (les boules s'affraisseraient). La température idéale de pochage se situe souvent autour de 22-24°C, mais fiez-vous à la texture.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Secret du "Chardon" :</strong> La viscosité de votre chocolat d'enrobage est clé. S'il est trop fluide, les pics retomberont. S'il est trop épais, l'enrobage sera grossier. Utilisez une couverture avec une fluidité moyenne (3 gouttes).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Conservation :</strong> Grâce à la cuisson du caramel et à l'ajout de sorbitol, cette truffe a une meilleure activité de l'eau (AW) qu'une truffe classique. Elle se conserve 3 à 4 semaines à 16°C.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Variante :</strong> Pour une finition plus rustique sans grille, vous pouvez rouler les truffes dans le cacao poudre (Truffe Classique) ou les rouler dans la main gantée de chocolat en les "froissant" légèrement avant la cristallisation.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Le chardon est une confiserie de caractère. Sous son apparence épineuse et brute se cache la tendresse infinie d'un caramel lacté. C'est l'équilibre parfait entre force et douceur."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default TruffeChardonCaramel;