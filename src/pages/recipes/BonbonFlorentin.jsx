import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonFlorentin = () => {
  const recipeData = {
    title: "Bonbon Florentin & Ganache Amère",
    category: "CHOCOLATERIE",
    prepTime: "2H 30",
    cookTime: "15 MIN",
    difficulty: "AVANCÉ",
    yield: "730 pièces",
    weight: "~7.5 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/cbef407c92ab7561d5406e122492664a.png",
    description: "L'élégance d'un classique revisité. Un disque de nougatine croustillante aux amandes, oranges et miel, surmonté d'une ganache noire intense et peu sucrée. Un jeu de textures parfait."
  };

  const ingredients = [
    {
      title: "1. Masse Florentin",
      items: [
        { name: "Sucre semoule", qty: 750, unit: "g" },
        { name: "Miel", qty: 250, unit: "g" },
        { name: "Crème liquide 35%", qty: 750, unit: "g" },
        { name: "Beurre", qty: 750, unit: "g" },
        { name: "Amandes effilées", qty: 850, unit: "g" },
        { name: "Oranges confites cubes", qty: 750, unit: "g" }
      ]
    },
    {
      title: "2. Ganache Amère",
      items: [
        { name: "Crème liquide 35%", qty: 1300, unit: "g" },
        { name: "Sucre inverti (Trimoline)", qty: 200, unit: "g" },
        { name: "Couverture Noire 70%", qty: 1100, unit: "g" },
        { name: "Beurre de cacao", qty: 30, unit: "g" },
        { name: "Beurre doux", qty: 150, unit: "g" }
      ]
    },
    {
      title: "3. Chablonnage",
      items: [
        { name: "Couverture Noire (fondue)", qty: 500, unit: "g" }
      ]
    },
    {
      title: "4. Enrobage & Décor",
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
                      <p className="text-gray-400 text-xs">Cuisson florentin : 118°C puis four 170°C. Cadre 60x40 pour ganache. Montage inversé recommandé.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={730}
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
                    <h4 className="text-xl text-white mb-4 font-serif">Masse Florentin</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, cuire ensemble le sucre, le miel, la crème et le beurre à 118°C (petit boulé).
                       Ajouter les amandes effilées et les cubes d'oranges confites. Mélanger délicatement sans trop briser les amandes.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Étaler finement la masse sur feuilles silpat ou dans des moules flexipan "florentins".
                       Cuire au four ventilé à 170°C jusqu'à obtention d'une couleur caramel doré uniforme (environ 10-12 min). Laisser refroidir complètement à plat.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Ganache Amère</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Faire bouillir la crème avec le sucre inverti. Verser sur la couverture noire et le beurre de cacao partiellement fondus.
                       Réaliser l'émulsion. À 40°C, ajouter le beurre. Mixer pour lisser.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Couler la ganache dans un cadre de 4mm de hauteur ou dresser à la poche des palets sur feuille guitare si on souhaite une forme ronde individuelle. Laisser cristalliser 24h à 16°C.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Finition et Découpe</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Si la ganache est en cadre : Chablonner le dessus de la ganache avec la couverture noire fondue (non tempérée). Retourner le cadre.
                       Coller les disques de florentins froids sur la ganache à l'aide d'une fine couche de chocolat tempéré (chablonnage intermédiaire).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Si montage individuel : Déposer une noix de ganache pochée sur chaque florentin, puis laisser cristalliser.
                       Détailler à la guitare ou à l'emporte-pièce si nécessaire (pour la version cadre).
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Tempérer la couverture noire d'enrobage. Tremper les pièces.
                       Déposer sur feuille guitare. Si vous utilisez une feuille transfert pour le décor, l'appliquer immédiatement sur le dessus avant cristallisation. Sinon, laisser le relief du florentin apparent ou marquer à la fourchette (selon le sens du montage).
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
                       <strong className="text-white block mb-2">Chablonnage Technique :</strong> Le chablonnage (fine couche de chocolat au pinceau ou à la spatule) est essentiel ici. Il isole le florentin (qui contient du sucre cuit très hygroscopique) de la ganache (qui contient de l'eau). Sans cette barrière, le florentin ramollirait en quelques jours.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cuisson du Florentin :</strong> Surveillez la couleur. Un florentin trop pâle sera collant aux dents. Un florentin trop foncé sera amer. La couleur idéale est un "acajou" soutenu. Les amandes doivent être torréfiées par la cuisson.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Découpe :</strong> Si vous détaillez un cadre avec du florentin dessus, coupez à l'envers (florentin contre la guitare) pour éviter que les amandes ne déchirent la ganache au passage des fils. Mais l'idéal reste le montage individuel ou l'emporte-pièce avant assemblage complet.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de service :</strong> Ce bonbon se déguste idéalement à 20°C pour que la ganache soit fondante et contraste avec le croquant sec du florentin.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "C'est un bonbon de contraste. Le craquant caramélisé des amandes répond à l'amertume puissante du cacao. Un mariage de textures intemporel qui demande une cuisson millimétrée."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonFlorentin;