import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonChocoCaramel = () => {
  const recipeData = {
    title: "Bonbon Choco Caramel",
    category: "CHOCOLATERIE",
    prepTime: "1H 30 + 24H (Cristallisation)",
    cookTime: "45 MIN",
    difficulty: "AVANCÉ",
    yield: "196 pièces",
    weight: "~2.8 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/41d40b64723bb4d07aad6c23635f9bbd.jpg",
    description: "Un bonbon au cœur coulant de caramel tendre vanillé aux éclats d'amandes, enrobé d'une couverture lactée. Une texture parfaite 'gros boulé' qui ne colle pas aux dents."
  };

  const ingredients = [
    {
      title: "1. Masse Caramel",
      items: [
        { name: "Crème fleurette 35%", qty: 800, unit: "g" },
        { name: "Sucre semoule", qty: 650, unit: "g" },
        { name: "Sirop de glucose", qty: 200, unit: "g" },
        { name: "Beurre doux", qty: 80, unit: "g" },
        { name: "Beurre de cacao", qty: 30, unit: "g" },
        { name: "Amandes hachées grillées", qty: 150, unit: "g" },
        { name: "Gousses de vanille", qty: 2, unit: "pce" }
      ]
    },
    {
      title: "2. Enrobage",
      items: [
        { name: "Couverture Lactée 40%", qty: 1000, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Cadre 36x36 cm. La précision de la cuisson à 120°C est vitale pour la tenue du bonbon.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={196}
             yieldUnit="pièces"
             step={14}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Cuisson du Caramel</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une très grande casserole (le mélange va mousser et monter), réunir la crème, le sucre, le glucose et les gousses de vanille fendues et grattées.
                       Porter à ébullition et cuire jusqu'à 115°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Transvaser immédiatement dans un poêlon en cuivre propre pour stopper l'inertie et maîtriser la suite.
                       Reprendre la cuisson à feu vif en remuant constamment (vanner) jusqu'à atteindre 120°C (petit boulé fort / gros boulé).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Finitions de la Masse</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Retirer du feu. Ajouter aussitôt le beurre et le beurre de cacao. Bien mélanger pour émulsionner.
                       Incorporer les amandes hachées grillées.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Couler immédiatement dans un cadre de 36x36 cm (hauteur 1 cm) posé sur un Silpat.
                       Laisser refroidir et cristalliser à température ambiante (24h idéalement).
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Décadrer le caramel. Détailler à la guitare en carrés de 2,5 x 2,5 cm.
                       Mettre au point la couverture lactée.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tremper les intérieurs caramel. Tapoter pour affiner la couche de chocolat.
                       Déposer sur feuille guitare pour la cristallisation.
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
                       <strong className="text-white block mb-2">Volume de Casserole :</strong> Utilisez un récipient 3 à 4 fois plus grand que le volume initial. La réaction entre la crème chaude et les sucres provoque une mousse importante.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Cuisson en deux temps :</strong> Transvaser dans le poêlon en cuivre après 115°C permet une meilleure conduction de chaleur pour la finition et évite le goût de brûlé que pourrait causer une casserole inox surchauffée.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Test du "Gros Boulé" :</strong> Si vous n'avez pas de thermomètre, prélevez une noisette de caramel et jetez-la dans l'eau glacée. Elle doit former une boule assez ferme sous les doigts, mais malléable.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Ajout Matières Grasses :</strong> Le beurre et le beurre de cacao s'ajoutent toujours hors du feu pour préserver leur structure et assurer une belle texture fondante sans trancher le caramel.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Amandes Grillées :</strong> Assurez-vous qu'elles soient encore tièdes ou chaudes lors de l'incorporation pour ne pas figer le caramel instantanément autour d'elles.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Refroidissement :</strong> Ne mettez jamais ce caramel au frigo pour refroidir, l'humidité ferait fondre le sucre en surface (ressuage). Laissez-le à température ambiante (20°C).
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonChocoCaramel;