import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info, ThermometerSun } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const RochersPralinesMaison = () => {
  const recipeData = {
    title: "Rochers Pralinés",
    category: "CHOCOLATERIE",
    prepTime: "2H + 12H (Repos)",
    cookTime: "20 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "200 pièces",
    weight: "2.3 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6d079e1bc36c8005876ca938736c33c0.png",
    description: "Le summum de la gourmandise chocolatée. Un cœur de praliné maison fondant aux amandes et noisettes, enrobé d'une couverture craquante aux éclats d'amandes torréfiés."
  };

  const ingredients = [
    {
      title: "1. Praliné Maison (Base)",
      items: [
        { name: "Amandes brutes", qty: 400, unit: "g" },
        { name: "Noisettes brutes", qty: 400, unit: "g" },
        { name: "Sucre semoule", qty: 550, unit: "g" },
        { name: "Eau", qty: 150, unit: "g" },
        { name: "Gousse de vanille", qty: 1, unit: "pce" }
      ]
    },
    {
      title: "2. Masse Intérieure (Cœur)",
      items: [
        { name: "Praliné Maison (ci-dessus)", qty: 1000, unit: "g" },
        { name: "Couverture Lactée 40%", qty: 400, unit: "g" },
        { name: "Beurre de cacao", qty: 50, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage Rocher",
      items: [
        { name: "Couverture Lait ou Noir", qty: 700, unit: "g" },
        { name: "Amandes hachées (grains) torréfiées", qty: 200, unit: "g" },
        { name: "Huile de pépin de raisin (facultatif)", qty: 20, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Maîtrise de la cuisson du sucre au "sablé" requise. Le "glaçage rocher" doit être utilisé tempéré pour ne pas fondre l'intérieur.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={200}
             yieldUnit="pièces"
             step={20}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Praliné Maison (Base)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une large casserole en cuivre ou inox, porter l'eau et le sucre à 118°C. Ajouter les fruits secs entiers et la vanille.
                       Remuer constamment : le sucre va blanchir et masser (sabler) autour des fruits. Continuer de chauffer en remuant sans arrêt.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Le sucre va refondre et caraméliser. Une fois le caramel ambré foncé et les fruits torréfiés à cœur, débarrasser sur plaque.
                       Laisser refroidir complètement. Broyer au robot-coupe jusqu'à l'obtention d'une pâte semi-liquide (praliné).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Masse Intérieure (Le Cœur)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Fondre la couverture lactée et le beurre de cacao à 45°C.
                       Incorporer le praliné (qui doit être à température ambiante, env. 20-22°C).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tabler la masse sur marbre pour la descendre à 24°C-25°C (texture pommade).
                       Mettre en poche avec une douille unie (n°10 ou 12).
                       Dresser des boules sur feuille guitare. Laisser cristalliser 12h à 17°C, ou au réfrigérateur si pressé.
                       Une fois fermes, rouler les boules à la main pour les parfaire.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">L'Enrobage Rocher</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture (Lait ou Noire) selon la courbe de température.
                       Ajouter les éclats d'amandes torréfiés froids et l'huile (si nécessaire pour la fluidité).
                       Maintenir le mélange à 30°C-31°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tremper les boules de praliné une par une. Égoutter légèrement pour garder du relief.
                       Déposer sur feuille guitare et laisser cristalliser.
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Variante de Finition (Option Palet)</h4>
                    <p className="text-gray-400 leading-relaxed">
                       Au lieu de dresser en boules, vous pouvez couler la masse intérieure dans un cadre de 10mm.
                       Après cristallisation, détailler à l'emporte-pièce rond (diamètre 2.5cm) pour obtenir des palets nets avant d'enrober.
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
                       <strong className="text-white block mb-2">Le Sablage (Sans Panique) :</strong> Quand vous ajoutez les fruits dans le sirop, le sucre va cristalliser et devenir blanc/sableux. C'est l'étape cruciale "sablage". Ne vous arrêtez surtout pas de tourner ! Continuez à chauffer, ce sable va fondre en caramel.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Tablage de la Masse :</strong> Pour pouvoir pocher les boules, la masse doit être semi-cristallisée (texture pâte à tartiner ferme). Si elle est trop liquide, étalez-la sur un marbre froid et travaillez-la à la spatule jusqu'à épaississement.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Mise au Point Glaçage :</strong> Si votre glaçage rocher est trop chaud ({">"}32°C), il va faire fondre la surface de la boule de praliné et créer des traces blanchâtres. Si trop froid, la couche sera trop épaisse.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Technique Éclats :</strong> Pour un rocher bien régulier, assurez-vous que vos éclats d'amandes (le "grain") sont tamisés pour retirer la poudre fine qui pourrait épaissir inutilement le chocolat.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default RochersPralinesMaison;