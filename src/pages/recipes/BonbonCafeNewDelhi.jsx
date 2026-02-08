import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonCafeNewDelhi = () => {
  const recipeData = {
    title: "Bonbon Café New Delhi (Cardamome)",
    category: "CHOCOLATERIE",
    prepTime: "24H (Infusion) + 1H",
    cookTime: "10 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "800 pièces",
    weight: "~7.0 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/eedbc196d5872f75d3dc0d99f51dcb30.png",
    description: "Un voyage sensoriel intense. Une ganache onctueuse réalisée avec une infusion à froid de café Arabica et de cardamome verte pour des arômes floraux sans amertume, enrobée de chocolat noir."
  };

  const ingredients = [
    {
      title: "1. Ganache Café Cardamome",
      items: [
        { name: "Crème fleurette 35%", qty: 2200, unit: "g" },
        { name: "Café en grains (Arabica)", qty: 250, unit: "g" },
        { name: "Cardamome verte (gousses)", qty: 40, unit: "g" },
        { name: "Sirop de glucose", qty: 350, unit: "g" },
        { name: "Sorbitol poudre", qty: 150, unit: "g" },
        { name: "Couverture Lait 40%", qty: 2400, unit: "g" },
        { name: "Couverture Noire 64%", qty: 600, unit: "g" },
        { name: "Beurre doux", qty: 450, unit: "g" }
      ]
    },
    {
      title: "2. Chablonnage/Socle",
      items: [
        { name: "Couverture Noire (Mise au point)", qty: 300, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage & Décor",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 3000, unit: "g" },
        { name: "Grains de café en chocolat", qty: 800, unit: "pce" }
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
                      <p className="text-gray-400 text-xs">Cadre de 10mm d'épaisseur. Infusion à froid impérative. Conservation: 45 jours à 16°C.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={800}
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
                    <h4 className="text-xl text-white mb-4 font-serif">L'Infusion J-1</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       La veille : Concasser grossièrement les grains de café (ne pas les moudre en poudre fine). Écraser les gousses de cardamome pour les ouvrir.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mélanger la crème froide avec le café et la cardamome. Filmer au contact et laisser infuser 24 heures au réfrigérateur.
                       Cette technique d'infusion à froid permet de ne récupérer que les huiles aromatiques sans l'amertume ou l'acidité qui se développent à chaud.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Ganache</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chinoiser la crème en pressant bien pour extraire tous les arômes. Peser la crème récupérée et compléter avec de la crème fraîche si nécessaire pour retrouver le poids initial (2200g).
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chauffer la crème avec le glucose et le sorbitol à 75°C.
                       Verser sur les couvertures (Lait et Noire) partiellement fondues. Réaliser l'émulsion au mixeur plongeant.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       À 35°C/40°C, incorporer le beurre pommade. Mixer longuement pour parfaire la texture.
                       Couler en cadre de 10mm sur feuille guitare. Laisser cristalliser 24 à 48h à 16-18°C.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le cadre avec une fine couche de couverture noire tempérée. Retourner et décadrer.
                       Détailler à la guitare des carrés de 2.25 x 2.25 cm ou des rectangles selon préférence.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Enrober les bonbons avec la couverture noire tempérée.
                       Immédiatement après l'enrobage, déposer délicatement un grain de café (chocolat ou réel) au centre à l'aide d'une pince.
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
                       <strong className="text-white block mb-2">L'Infusion à Froid :</strong> C'est le secret de cette recette. Le café chauffé libère des tanins amers. L'infusion à froid est plus longue mais capture les notes de tête florales et fruitées de l'Arabica.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">La Cardamome :</strong> Utilisez de la cardamome verte entière, pas de la poudre. En écrasant la gousse (ce qu'on appelle "glausser"), vous exposez les graines noires très aromatiques à la crème sans les disperser.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Mélange de Couvertures :</strong> L'utilisation majoritaire de chocolat au lait adoucit la puissance du café et fait le lien avec la cardamome (comme dans un thé chai ou un café au lait épicé). Le chocolat noir apporte juste la structure.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Finition :</strong> Le grain de café est un marqueur visuel universel. Si vous utilisez de vrais grains, choisissez une torréfaction légère (type "robe de moine") pour qu'ils soient croquants mais pas trop durs ou brûlés sous la dent.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "New Delhi évoque les marchés aux épices. L'association café-cardamome est un classique du Moyen-Orient et de l'Inde, offrant une chaleur aromatique qui persiste longuement en bouche."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonCafeNewDelhi;