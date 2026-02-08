import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const RocherCroustillant = () => {
  const recipeData = {
    title: "Rocher Croustillant (Praliné Feuilletine)",
    category: "CHOCOLATERIE",
    prepTime: "2H 30",
    cookTime: "15 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "640 pièces",
    weight: "~6.5 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/2595a1f7694eed76382db1c61c0cdf5e.jpg", // Image des rochers
    description: "Une gourmandise absolue. Un praliné maison rustique riche en noisettes, rendu croustillant par l'ajout généreux de feuilletine, puis enrobé d'un glaçage rocher aux amandes hachées."
  };

  const ingredients = [
    {
      title: "1. Le Praliné Maison",
      items: [
        { name: "Sucre semoule", qty: 1200, unit: "g" },
        { name: "Noisettes brutes", qty: 1800, unit: "g" },
        { name: "Gousses de vanille", qty: 2, unit: "pce" }
      ]
    },
    {
      title: "2. Finition de la Masse",
      items: [
        { name: "Couverture Lait 40%", qty: 700, unit: "g" },
        { name: "Beurre de cacao", qty: 200, unit: "g" },
        { name: "Pailleté Feuilletine", qty: 800, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage & Décor",
      items: [
        { name: "Couverture Lait 40% (Enrobage)", qty: 2500, unit: "g" },
        { name: "Huile de pépin de raisin", qty: 150, unit: "g" },
        { name: "Amandes hachées torréfiées", qty: 600, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Cadrage épaisseur 10mm. Température de mélange praliné/chocolat max 35°C pour ne pas ramollir la feuilletine.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={640}
             yieldUnit="pièces"
             step={40}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Praliné Confiseur</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans un poêlon en cuivre, cuire le sucre et la vanille au "sablé". Ajouter les noisettes brutes.
                       Continuer la cuisson en remuant constamment jusqu'à ce que le sucre caramélise autour des noisettes (bien brillant, couleur ambrée foncée).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Débarrasser sur marbre ou silpat et laisser refroidir.
                       Broyer au robot-coupe pour obtenir un praliné à l'ancienne (légèrement granuleux) ou très fin selon le goût souhaité.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Mélange Croustillant</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Fondre la couverture lait et le beurre de cacao à 40°C.
                       Mélanger avec le praliné maison (qui doit être à température ambiante).
                       Vérifier que la température du mélange est inférieure à 35°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Incorporer délicatement la feuilletine à la main ou à la maryse pour ne pas l'écraser.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Cadrage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Verser la masse dans un cadre de 10mm d'épaisseur posé sur feuille guitare.
                       Lisser rapidement à la règle ou à la spatule coudée.
                       Laisser cristalliser 12h à 16°C (ou 1h au réfrigérateur si pressé, mais attention à l'humidité).
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le dessous avec un peu de couverture lait. Retourner.
                       Détailler à la guitare en carrés de 2.5 x 2.5 cm.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Préparer le glaçage rocher : Fondre la couverture d'enrobage, ajouter l'huile et les amandes hachées. Utiliser à 30-32°C.
                       Tremper les bonbons dans le glaçage rocher.
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
                       <strong className="text-white block mb-2">Le Sablage :</strong> Lors de la cuisson du sucre avec les noisettes, le mélange va d'abord blanchir et devenir sec (sablage). C'est normal ! Continuez de remuer, le sucre va refondre et caraméliser progressivement.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Caramélisation :</strong> Poussez bien la caramélisation pour un goût puissant. Un praliné trop clair manque de caractère face au chocolat. Les noisettes doivent être torréfiées à cœur par le caramel bouillant.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Feuilletine Croustillante :</strong> L'ennemi de la feuilletine est l'humidité. Assurez-vous que votre praliné ne contient pas d'eau et que vos ustensiles sont secs. Le beurre de cacao ajouté aide à imperméabiliser les éclats de crêpe dentelle.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Glaçage Rocher :</strong> L'ajout d'huile (ou de beurre de cacao supplémentaire) permet de fluidifier la couverture chargée en éclats d'amandes, pour obtenir une couche fine et ne pas alourdir la dégustation.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Le Rocher, c'est la régression gourmande par excellence. Le contraste entre le cœur croustillant et l'enrobage croquant aux éclats d'amandes en fait l'un des bonbons les plus plébiscités en boutique."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default RocherCroustillant;