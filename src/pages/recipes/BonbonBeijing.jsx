import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonBeijing = () => {
  const recipeData = {
    title: "Bonbon Chocolat Beijing (Alunga & Confiture de Lait)",
    category: "CHOCOLATERIE",
    prepTime: "2H + 12H (Cristallisation)",
    cookTime: "45 MIN",
    difficulty: "EXPERT",
    yield: "750 pièces",
    weight: "~9.8 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6fc1ae009d495697691e2419b05e886d.jpg",
    description: "Un bonbon bi-texture d'une grande technicité. Sur un socle de ganache au chocolat au lait Alunga, un dôme de confiture de lait maison est poché avant d'être enrobé de chocolat noir. Le contraste entre le lacté puissant et le caramel fondant."
  };

  const ingredients = [
    {
      title: "1. Ganache Alunga (Socle)",
      items: [
        { name: "Crème fleurette 35%", qty: 1450, unit: "g" },
        { name: "Sirop de glucose", qty: 300, unit: "g" },
        { name: "Sorbitol cristallisé", qty: 150, unit: "g" },
        { name: "Chocolat Lait Alunga 41%", qty: 2600, unit: "g" },
        { name: "Beurre sec (84% MG)", qty: 250, unit: "g" }
      ]
    },
    {
      title: "2. Confiture de Lait Maison (Dôme)",
      items: [
        { name: "Lait entier", qty: 2000, unit: "g" },
        { name: "Sucre semoule", qty: 1000, unit: "g" },
        { name: "Sirop de glucose", qty: 200, unit: "g" },
        { name: "Gousse de vanille", qty: 2, unit: "pce" },
        { name: "Bicarbonate de soude (pincée)", qty: 2, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage & Finition",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 3000, unit: "g" },
        { name: "Feuille structure ou peigne (facultatif)", qty: 1, unit: "pce" }
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
                      <p className="text-gray-400 text-xs">Cadrage de la ganache à 6mm. Pochage du dôme à la douille n°8. Enrobage délicat pour ne pas écraser le relief.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={750}
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
                    <h4 className="text-xl text-white mb-4 font-serif">La Ganache Alunga</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chauffer la crème liquide, le glucose et le sorbitol à 75°C précisément.
                       Verser sur le chocolat Alunga en pistoles (non fondu). Laisser reposer 2 minutes sans toucher pour amorcer la fonte.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Émulsionner au mixeur plongeant en incorporant le beurre sec coupé en petits dés dès que le mélange atteint 35-40°C.
                       Couler en cadre de 6mm d'épaisseur sur feuille guitare. Laisser cristalliser 12h à 16-18°C.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Confiture de Lait Maison</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une large casserole, porter à ébullition le lait, le sucre, le glucose, les graines de vanille et le bicarbonate.
                       Baisser le feu et laisser réduire en remuant régulièrement. La préparation va prendre une couleur caramel clair.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Cuire jusqu'à atteindre 104°C (texture nappante). Débarrasser et filmer au contact.
                       Laisser refroidir complètement à température ambiante pour qu'elle épaississe et devienne pochable.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Montage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le cadre de ganache Alunga. Retourner et détailler à la guitare en carrés de 2.5 x 2.5 cm.
                       Sur chaque carré de ganache, pocher une belle boule de confiture de lait (environ 3-4g) à l'aide d'une poche munie d'une douille unie n°8 ou 10. Laisser croûter légèrement.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mettre au point la couverture noire d'enrobage.
                       Enrober les bonbons en veillant à bien recouvrir le dôme de confiture de lait sans l'écraser.
                       Déposer sur feuille structure ou marquer le dessus pour rappeler la forme du dôme.
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
                       <strong className="text-white block mb-2">Température de Crème 75°C :</strong> Ne faites pas bouillir la crème ! 75°C suffit pour fondre le chocolat et pasteuriser légèrement sans dégrader la structure de l'émulsion lactée du chocolat au lait.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cuisson Confiture 104°C :</strong> C'est le degré précis pour obtenir une texture qui se tient (pochable) mais qui reste filante à la dégustation. En dessous, elle coulera partout à l'enrobage. Au dessus, elle sera caoutchouteuse.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Repos de 2 Minutes :</strong> Laisser la crème chaude sur les pistoles sans remuer permet à la chaleur de pénétrer au cœur du chocolat. Si vous remuez tout de suite, vous baissez la température trop vite et risquez d'avoir des morceaux non fondus.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Enrobage du Dôme :</strong> C'est la partie délicate. Utilisez une couverture assez fluide. Plongez le bonbon dôme vers le bas, retournez-le dans le chocolat, et sortez-le délicatement. Tapotez doucement pour ne pas déformer la confiture de lait.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Bicarbonate de Soude :</strong> Il favorise la réaction de Maillard (brunissement) pour donner cette belle couleur caramel à la confiture de lait plus rapidement, sans brûler le sucre.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cristallisation Ganache :</strong> Respectez les 12h à 16-18°C. Une ganache lait est plus longue à cristalliser qu'une noire. Si vous coupez trop tôt, elle va s'écraser sous les fils de la guitare.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonBeijing;