import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonMouleCaramelMangue = () => {
  const recipeData = {
    title: "Bonbon Moulé Caramel Mangue",
    category: "CHOCOLATERIE",
    prepTime: "2H + 2H (Repos)",
    cookTime: "30 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "24-30 pièces",
    weight: "~10-12g / pièce",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8c854e72d9bd134985b3024ad0d26079.png",
    description: "Une coque fine en chocolat au lait renfermant un cœur coulant de caramel exotique à la mangue. L'alliance parfaite entre la douceur lactée et le fruité acidulé."
  };

  const ingredients = [
    {
      title: "1. Caramel Mangue",
      items: [
        { name: "Sucre semoule", qty: 100, unit: "g" },
        { name: "Sirop de glucose", qty: 25, unit: "g" },
        { name: "Purée de mangue", qty: 85, unit: "g" },
        { name: "Crème fleurette 35%", qty: 45, unit: "g" },
        { name: "Beurre doux", qty: 25, unit: "g" }
      ]
    },
    {
      title: "2. Moulage Coque & Obturation",
      items: [
        { name: "Couverture Lait 40% (Moulage)", qty: 500, unit: "g" },
        { name: "Beurre de cacao (colorant jaune optionnel)", qty: "QS", unit: "" }
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
                      <p className="text-gray-400 text-xs">Moule polycarbonate demi-sphère. Cuisson du caramel à 106°C impérative pour la texture.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={24}
             yieldUnit="pièces"
             step={6}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Caramel Mangue</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chauffer la crème et la purée de mangue ensemble (sans bouillir).
                       Réaliser un caramel à sec (couleur blonde) avec le sucre et le glucose. Ne pas trop pousser la couleur pour préserver le goût du fruit.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déglacer le caramel avec le mélange crème/mangue chaud (attention aux projections).
                       Cuire le tout jusqu'à 106°C.
                       Hors du feu, attendre que la température redescende vers 45-50°C, puis incorporer le beurre coupé en dés et émulsionner au mixeur plongeant.
                       Laisser refroidir à température ambiante environ 2h pour qu'il soit "pocheable" (27-28°C).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Moulage Coque</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture lait. (Optionnel : projeter du beurre de cacao coloré dans les moules avant).
                       Remplir entièrement le moule de chocolat tempéré. Tapoter fermement pour chasser les bulles d'air.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Attendre une minute pour créer l'épaisseur de coque, puis retourner le moule pour vider l'excédent.
                       Araser proprement à la spatule. Laisser cristalliser (les coques doivent devenir mates).
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Garnissage et Finition</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Pocher le caramel mangue (à ~28°C) dans les coques en laissant un espace de 1 à 2 mm par rapport au bord supérieur.
                       Laisser croûter le caramel environ 2h à température ambiante (20°C).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Obturer les bonbons avec de la couverture lait tempérée. Lisser à la spatule pour avoir un fond bien plat.
                       Laisser cristalliser au moins 2h avant de démouler en tapant le moule sur le plan de travail.
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
                       <strong className="text-white block mb-2">Choc Thermique :</strong> Chauffez toujours votre liquide (crème + purée) avant de déglacer le caramel. Un liquide froid ferait masser le sucre instantanément (formation de blocs durs).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Couleur du Caramel :</strong> Pour un caramel aux fruits, on cherche une couleur "blonde" ou "ambrée claire". Si le caramel est trop foncé, son amertume masquera la délicatesse de la mangue.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cuisson 106°C :</strong> C'est le point clé pour obtenir une texture qui coule mais ne détrempe pas la coque trop vite. En dessous, c'est trop liquide. Au dessus, c'est trop dur sous la dent.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Émulsion au Beurre :</strong> Utilisez impérativement un mixeur plongeant pour incorporer le beurre. Cela crée une texture lisse, brillante et onctueuse, et stabilise l'eau de la recette.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Moulage des Coques :</strong> La patience d'une minute avant de retourner le moule est cruciale pour ne pas avoir une coque "papier à cigarette" qui casserait au démoulage ou au croquage.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Obturation :</strong> Si le caramel n'a pas assez croûté (séché en surface), le chocolat de fermeture va se mélanger avec, créant des trous ou des marbrures disgracieuses sous le bonbon.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonMouleCaramelMangue;