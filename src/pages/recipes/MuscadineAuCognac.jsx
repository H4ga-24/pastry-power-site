import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const MuscadineAuCognac = () => {
  const recipeData = {
    title: "Muscadine au Cognac",
    category: "CHOCOLATERIE",
    prepTime: "24H (Repos) + 2H",
    cookTime: "15 MIN",
    difficulty: "AVANCÉ",
    yield: "240-300 pièces",
    weight: "~2.4 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/5b021fbe8cb4f5ec938c0d64d1d04553.png",
    description: "Une spécialité traditionnelle en forme de bûchette. Une ganache onctueuse au praliné et au Cognac, enrobée d'une fine couche de chocolat et roulée dans le sucre glace. Un classique indémodable."
  };

  const ingredients = [
    {
      title: "1. Ganache Praliné Cognac",
      items: [
        { name: "Praliné Noisette 60%", qty: 500, unit: "g" },
        { name: "Couverture Lait 40%", qty: 800, unit: "g" },
        { name: "Beurre de cacao", qty: 60, unit: "g" },
        { name: "Sorbitol (poudre)", qty: 25, unit: "g" },
        { name: "Cognac (60% vol)", qty: 150, unit: "g" },
        { name: "Beurre pommade", qty: 200, unit: "g" }
      ]
    },
    {
      title: "2. Enrobage",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 600, unit: "g" }
      ]
    },
    {
      title: "3. Finition",
      items: [
        { name: "Sucre glace amylacé", qty: 500, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Ganache dressée à la douille cannelée. Technique de roulage dans le sucre glace spécifique pour obtenir l'aspect givré.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={270}
             yieldUnit="pièces"
             step={30}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Ganache Praliné</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans un récipient, mélanger le praliné noisette avec le sorbitol.
                       Fondre la couverture lait et le beurre de cacao à 40°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Verser le mélange chocolat sur le praliné. Émulsionner vigoureusement.
                       Ajouter le Cognac tempéré (20-25°C). Lisser l'émulsion.
                       Lorsque la masse atteint 30°C/32°C, incorporer le beurre pommade. Mixer pour parfaire l'émulsion.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Dressage et Détaillage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Laisser la ganache "tirer" (cristalliser) jusqu'à obtenir une texture pochable (environ 24°C).
                       Dresser à la poche munie d'une douille cannelée (type PF14) de longs boudins droits sur feuille guitare.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser cristalliser 24h à 16°C.
                       Une fois cristallisés, couper les boudins en tronçons de 3 à 4 cm de long.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage et Finition</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture noire.
                       Tremper les muscadines une par une. Égoutter rapidement.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déposer immédiatement dans un bac rempli de sucre glace tamisé.
                       Recouvrir de sucre glace. Attendre quelques minutes que le chocolat cristallise sous le sucre.
                       Tamiser pour retirer l'excédent de sucre et récupérer les muscadines.
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
                       <strong className="text-white block mb-2">Texture Pochable :</strong> Le moment du dressage est crucial. Si la ganache est trop chaude, les cannelures s'affaissent. Si elle est trop froide, elle sera terne et difficile à pocher. Visez 23°C-24°C.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Options de Cristallisation :</strong> Deux méthodes : soit laisser cristalliser 24h à 16°C pour une texture parfaite, soit, si pressé, "bloquer" au froid (10-12°C) pendant 1h, mais attention à la reprise d'humidité.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Secret du Sucre :</strong> Pour un effet blanc immaculé qui tient dans le temps, utilisez impérativement du sucre glace amylacé (anti-humidité). Le sucre glace ménager fondra au contact de l'humidité du chocolat.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Timing Enrobage :</strong> Ne laissez pas les muscadines trop longtemps dans le sucre avant de les sortir (max 5-10 min). Si le chocolat durcit trop, le sucre n'adhèrera pas assez pour créer la croûte caractéristique.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "La Muscadine est un trompe-l'œil gourmand qui imite un petit morceau de bois givré. C'est l'équilibre subtil entre le fondant du praliné alcoolisé et le craquant sucré de l'enrobage."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default MuscadineAuCognac;