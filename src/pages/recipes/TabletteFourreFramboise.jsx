import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const TabletteFourreFramboise = () => {
  const recipeData = {
    title: "Tablette fourré framboise",
    category: "CHOCOLATERIE",
    prepTime: "1H + 2H (Repos)",
    cookTime: "15 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "3 Tablettes",
    weight: "~100-120g / tablette",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f61c275f373852b21c27e5cf272ba26b.jpg",
    description: "Le mariage intemporel du chocolat et du fruit rouge. Une ganache onctueuse à la framboise fraîche emprisonnée dans une coque croquante de chocolat noir."
  };

  const ingredients = [
    {
      title: "1. Ganache framboise",
      items: [
        { name: "Crème liquide 35%", qty: 45, unit: "g" },
        { name: "Couverture Lait 40%", qty: 140, unit: "g" },
        { name: "Framboises (mixées)", qty: 70, unit: "g" },
        { name: "Beurre doux", qty: 20, unit: "g" }
      ]
    },
    {
      title: "2. Tablette chocolat Coque",
      items: [
        { name: "Couverture Noire 65% (Moulage)", qty: 500, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Utiliser des framboises fraîches ou surgelées de haute qualité. La filtration des grains est essentielle pour une texture lisse.</p>
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
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation de la ganache framboise</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Porter la crème liquide à ébullition. Verser la crème chaude sur la couverture lait partiellement fondue.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Ajouter le beurre en dés et les framboises préalablement mixées et passées au tamis (pour retirer les pépins).
                       Mixer l'ensemble au mixeur plongeant sans incorporer d'air, puis chinoiser si nécessaire pour une texture parfaite.
                       Laisser refroidir la ganache pendant 2 heures à température ambiante (viser 28°C environ pour le pochage).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Montage tablettes</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture noire. Remplir les moules à tablettes à ras bord.
                       Tapoter énergiquement pour chasser les bulles d'air. Attendre une minute (le temps que le chocolat accroche aux parois), puis retourner le moule pour vider l'excédent.
                       Racler proprement pour enlever l'excédent de couverture et laisser cristalliser.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Garnir les coques avec la ganache framboise (à bonne température) en laissant 2mm pour l'obturation.
                       Laisser figer au frais pendant 2 heures (la ganache doit former une peau).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Obturer les tablettes avec de la couverture noire tempérée. Lisser à la spatule.
                       Laisser cristalliser complètement avant de procéder au démoulage.
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
                       <strong className="text-white block mb-2">Filtration :</strong> L'étape de passer les framboises au chinois (tamis) est non négociable. Les pépins de framboise sont très désagréables sous la dent dans une ganache fine.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Choc Thermique :</strong> Attention à ne pas verser la crème bouillante sur un chocolat trop froid, cela pourrait figer le beurre de cacao trop vite. L'idéal est d'avoir la couverture légèrement fondue.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Texture Ganache :</strong> Le mixage final garantit l'émulsion parfaite entre le gras du chocolat/beurre et l'eau des fruits. C'est ce qui donne le brillant et le fondant.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Coque Fine :</strong> Pour une dégustation optimale, la coque doit être fine (d'où l'importance de bien tapoter et vider le moule). Le ratio chocolat/ganache doit être équilibré.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Repos au Frais :</strong> Le repos de 2h avant fermeture permet à la ganache de croûter. Si vous fermez trop tôt, le chocolat de fermeture va se mélanger à la ganache et créer des marbrures disgracieuses.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Obturation :</strong> Utilisez une couverture noire tempérée pour sceller la tablette. Le contraste entre l'acidité de la framboise et l'amertume du chocolat noir est un classique réussi.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default TabletteFourreFramboise;