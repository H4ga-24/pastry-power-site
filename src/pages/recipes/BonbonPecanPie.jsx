import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonPecanPie = () => {
  const recipeData = {
    title: "Bonbon Chocolat Pécan Pie",
    category: "CHOCOLATERIE",
    prepTime: "2H 00",
    cookTime: "45 MIN",
    difficulty: "AVANCÉ",
    yield: "721 pièces (Cadre 34x34 cm)",
    weight: "~8 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/06e08202c0ddee0236bec58bc395cb43.png",
    description: "Une interprétation chocolatée de la célèbre tarte américaine. Un bi-couche gourmand associant un caramel vanille onctueux et un praliné pécan croustillant, le tout enrobé d'une couverture noire intense."
  };

  const ingredients = [
    {
      title: "1. Caramel Vanille Tendre",
      items: [
        { name: "Sucre semoule", qty: 800, unit: "g" },
        { name: "Sirop de glucose DE60", qty: 800, unit: "g" },
        { name: "Crème liquide 35%", qty: 1200, unit: "g" },
        { name: "Gousses de vanille Bourbon", qty: 5, unit: "pièces" },
        { name: "Sorbitol poudre", qty: 80, unit: "g" },
        { name: "Beurre de cacao", qty: 150, unit: "g" },
        { name: "Beurre doux", qty: 300, unit: "g" },
        { name: "Fleur de sel", qty: 8, unit: "g" }
      ]
    },
    {
      title: "2. Praliné Pécan Croustillant",
      items: [
        { name: "Noix de pécan torréfiées", qty: 1500, unit: "g" },
        { name: "Sucre caramel", qty: 1000, unit: "g" },
        { name: "Fleur de sel", qty: 5, unit: "g" },
        { name: "Couverture Lait 40%", qty: 600, unit: "g" },
        { name: "Beurre de cacao", qty: 100, unit: "g" },
        { name: "Brisures de sablé ou Feuilletine", qty: 300, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage & Finition",
      items: [
        { name: "Couverture Noire 64%", qty: 2500, unit: "g" },
        { name: "Demi-cerneaux de pécan (décor)", qty: 721, unit: "pièces" }
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
                      <p className="text-gray-400 text-xs">Cadre de 340x340 mm. Hauteur caramel : 4mm. Hauteur praliné : 6mm. Découpe guitare 22.5 mm.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={721}
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
                    <h4 className="text-xl text-white mb-4 font-serif">Le Caramel Vanille</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Infuser les gousses de vanille fendues et grattées dans la crème chaude pendant 20 minutes. Retirer les gousses.
                       Cuire le sucre et le glucose jusqu'à obtention d'un caramel ambré soutenu (185°C). Décuire avec la crème chaude additionnée du sorbitol et de la fleur de sel.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Recuire le tout jusqu'à 106°C. Laisser refroidir à 40°C puis incorporer le beurre et le beurre de cacao. Mixer pour une parfaite émulsion. Couler immédiatement dans le cadre (hauteur 4mm) sur une feuille guitare. Laisser cristalliser 24h.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Praliné Pécan</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Réaliser un praliné avec les noix de pécan torréfiées et le sucre caramel. Broyer assez fin mais en gardant de la texture.
                       Mélanger ce praliné avec la couverture lait fondue et le beurre de cacao fondu (température du mélange 26°C).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Ajouter les brisures de sablé ou la feuilletine délicatement à la maryse.
                       Couler cette deuxième couche sur le caramel cristallisé (hauteur 6mm). Lisser et laisser cristalliser 24h à 16°C.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le côté caramel avec une fine couche de couverture noire tempérée. Retourner le cadre. Décadrer.
                       Détailler à la guitare des carrés de 22.5mm de côté. Séparer les intérieurs.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tempérer la couverture noire. Enrober les bonbons. Déposer immédiatement un cerneau de noix de pécan (ou un morceau) sur le dessus avant cristallisation complète.
                    </p>
                 </div>
              </div>

              {/* Conseils du Chef */}
              <div className="mt-16 p-8 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                 <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                    <ChefHat className="w-6 h-6 text-[#D4AF37]" /> Conseils et Astuces du Chef
                 </h3>
                 <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
                    <p>
                       <strong className="text-white block mb-2">Cuisson du Caramel :</strong> Ne descendez pas en dessous de 105°C pour le caramel, sinon il sera trop coulant et rendra la découpe impossible. À 108°C, il sera trop dur sous la dent. 106°C est le point d'équilibre parfait pour cette recette bi-couche.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de la Pécann :</strong> Pour le praliné, torréfiez les pécans généreusement (cœur brun). La pécan est une noix grasse et douce, elle a besoin d'une torréfaction poussée pour exister face au caramel.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Découpe :</strong> Assurez-vous que votre intérieur soit à environ 18°C-20°C au moment de la découpe guitare. S'il est trop froid (sortie de frigo), le caramel cassera ou le chocolat de couverture se décollera.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Conservation :</strong> Grâce au sorbitol et à la faible teneur en eau libre (AW) maîtrisée par la cuisson du caramel et le gras du praliné, ce bonbon a une excellente conservation (6 semaines à 16°C).
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Ce bonbon est un voyage aux États-Unis revisité avec l'élégance française. Le contraste entre le caramel filant, le croustillant du praliné et la force du chocolat noir crée une expérience de dégustation complète."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonPecanPie;