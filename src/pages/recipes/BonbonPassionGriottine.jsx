import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonPassionGriottine = () => {
  const recipeData = {
    title: "Bonbon Chocolat Passion Griottine",
    category: "CHOCOLATERIE",
    prepTime: "2H + 24H (Cristallisation)",
    cookTime: "30 MIN",
    difficulty: "EXPERT",
    yield: "714 pièces",
    weight: "~6.5 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3505a02f07aaef90c26876afdf520f07.jpg",
    description: "L'alliance audacieuse de l'exotisme et du terroir. Une griottine alcoolisée entière nichée au cœur d'une ganache caramel-passion, sous une coque de chocolat noir croquante."
  };

  const ingredients = [
    {
      title: "1. Ganache Passion Lactée",
      items: [
        { name: "Sucre semoule", qty: 640, unit: "g" },
        { name: "Sirop de glucose", qty: 200, unit: "g" },
        { name: "Purée de fruit de la passion (chaude)", qty: 600, unit: "g" },
        { name: "Chocolat Lait 40%", qty: 1280, unit: "g" },
        { name: "Beurre de cacao", qty: 80, unit: "g" },
        { name: "Beurre doux", qty: 240, unit: "g" },
        { name: "Sorbitol", qty: 80, unit: "g" }
      ]
    },
    {
      title: "2. Garniture",
      items: [
        { name: "Griottines (Cerises à l'eau de vie)", qty: 714, unit: "pce" }
      ]
    },
    {
      title: "3. Coque Moulage Chocolat",
      items: [
        { name: "Couverture Noire 65% (Moulage & Obturation)", qty: 2500, unit: "g" },
        { name: "Beurre de cacao coloré (Jaune & Rouge)", qty: 100, unit: "g" }
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
                      <p className="text-gray-400 text-xs">La gestion de l'humidité est cruciale. Les griottines doivent être parfaitement égouttées pour ne pas détremper la ganache.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={714}
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
                    <h4 className="text-xl text-white mb-4 font-serif">Réalisation de la ganache passion</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, réaliser un caramel à sec avec le sucre semoule et le glucose jusqu'à atteindre 175°C (couleur ambrée rougeoyante).
                       Déglacer petit à petit avec la purée de passion chaude (attention aux projections). Cuire quelques instants pour dissoudre les cristaux.
                       Laisser refroidir le sirop caramel-passion vers 70°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Verser sur le chocolat lait, le beurre de cacao et le sorbitol. Mixer pour émulsionner.
                       À 40°C, incorporer le beurre doux en dés. Mixer à nouveau pour une texture parfaite.
                       Filmer au contact et laisser cristalliser jusqu'à 25°C pour le pochage.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Réalisation de la coque du bonbon</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Nettoyer soigneusement les moules.
                       Tempérer les beurres de cacao colorés (jaune et rouge). Appliquer au doigt dans le moule de façon aléatoire pour créer un effet marbré "Passion". Laisser cristalliser.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mouler les coques avec la couverture noire tempérée. Tapoter, retourner, égoutter et araser. Laisser cristalliser complètement avant garnissage.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Garnissage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Déposer une griottine (égouttée depuis la veille) au fond de chaque alvéole.
                       Pocher la ganache passion tempérée à 25-26°C par-dessus, en veillant à bien enrober le fruit et à laisser 1mm de vide en haut pour la fermeture.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser cristalliser 24h à 17°C (le temps qu'une pellicule se forme).
                       Obturer (fermer) les bonbons avec de la couverture noire tempérée. Laisser cristalliser avant démoulage.
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
                       <strong className="text-white block mb-2">Température Caramel 175°C :</strong> C'est le point d'équilibre. Trop clair, le goût passion l'emporte et c'est acide. Trop foncé, l'amertume tue le fruit. Visez un beau roux.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Égouttage des Griottines :</strong> Impératif ! Sortez les griottines du sirop la veille, placez-les sur grille ou papier absorbant. Si elles sont trop humides, l'alcool va migrer, ramollir la coque en chocolat et créer des fuites (le bonbon "pleure").
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Déglaçage Purée Chaude :</strong> Toujours chauffer la purée avant de l'incorporer au caramel pour éviter la cristallisation instantanée du sucre (massages) et les éclaboussures dangereuses.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Refroidissement Ganache 25°C :</strong> Cette ganache doit être pochée assez froide. Si elle est à 30°C, elle va faire fondre la fine couche de beurre de cacao décoratif ou la coque noire, et la griottine risque de remonter à la surface.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Effet Texture au Doigt :</strong> L'application au doigt ganté permet de créer des tâches organiques et irrégulières qui rappellent la pulpe du fruit de la passion. Alternez jaune et rouge sans trop mélanger.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Nettoyage des Moules :</strong> La brillance du bonbon dépend à 90% de la propreté du moule et à 10% du tempérage. Lustrez toujours vos moules au coton sec avant utilisation.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonPassionGriottine;