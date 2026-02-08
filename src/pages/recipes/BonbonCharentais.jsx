import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonCharentais = () => {
  const recipeData = {
    title: "Bonbon Charentais (Caramel, Orange & Cognac)",
    category: "CHOCOLATERIE",
    prepTime: "2H 00",
    cookTime: "20 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "800 pièces",
    weight: "~7.5 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/873ef306c9ad5de8e7d4d441eff3fbfd.png",
    description: "Une spécialité de caractère. Une ganache au caramel brun déglacée à la crème, parfumée aux zestes d'orange et relevée au Cognac Fine Champagne, dressée en forme de sarments."
  };

  const ingredients = [
    {
      title: "1. Ganache Caramel Cognac",
      items: [
        { name: "Sucre semoule", qty: 1600, unit: "g" },
        { name: "Sirop de glucose", qty: 400, unit: "g" },
        { name: "Crème fleurette 35%", qty: 2000, unit: "g" },
        { name: "Zestes d'orange", qty: 6, unit: "pce" },
        { name: "Couverture Lait 40%", qty: 2400, unit: "g" },
        { name: "Beurre doux", qty: 600, unit: "g" },
        { name: "Cognac (50% vol)", qty: 300, unit: "g" }
      ]
    },
    {
      title: "2. Enrobage",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 3500, unit: "g" },
        { name: "Décor (facultatif)", qty: "QS", unit: "" }
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
                      <p className="text-gray-400 text-xs">Dressage à la poche (douille unie n°10). Cristallisation longue (24h) nécessaire avant découpe.</p>
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
                    <h4 className="text-xl text-white mb-4 font-serif">La Ganache Caramel</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Infuser les zestes d'orange dans la crème chaude pendant 20 min, puis chinoiser et réchauffer.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, réaliser un caramel à sec avec le sucre et le glucose jusqu'à une couleur ambrée foncée (fumeux).
                       Décuire précautionneusement avec la crème chaude infusée (attention aux projections). Cuire le tout à 103°C pour assurer la conservation.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser refroidir le caramel à 80°C puis verser sur la couverture lait pistoles. Emulsionner.
                       À 35°C, incorporer le beurre pommade et le Cognac. Mixer pour parfaire l'émulsion.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Façonnage et Dressage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Laisser cristalliser la ganache à température ambiante jusqu'à obtenir une texture "pommade" (pochable) qui tient sa forme.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mettre en poche avec une douille unie n°10 ou n°12.
                       Dresser de longs boudins réguliers sur une feuille guitare.
                       Laisser cristalliser 24 à 48 heures à 17°C (cave à chocolat) pour que la ganache raffermisse suffisamment.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Une fois cristallisés, couper les boudins en tronçons de 3 cm de long. Vous pouvez les laisser droits ou les courber légèrement pour imiter un sarment de vigne.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tempérer la couverture noire. Enrober les bonbons charentais.
                       Marquer le dessus à la fourchette pour créer un effet "écorce" ou "bois".
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
                       <strong className="text-white block mb-2">La Caramélisation :</strong> N'ayez pas peur de pousser la cuisson du caramel. Avec l'ajout de crème et de chocolat lait, un caramel trop clair donnera un goût "sucre" sans profondeur. La couleur "brune" est nécessaire pour contrebalancer la douceur de la couverture lait.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">L'Incorporation du Cognac :</strong> Ajoutez l'alcool lorsque la ganache est redescendue en température (35°C max). Si vous l'ajoutez trop chaud, l'alcool s'évapore et vous perdez le parfum subtil du Cognac.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Dressage :</strong> La consistance est cruciale. Si la ganache est trop chaude, les boudins s'aplatiront (forme ovale). Si elle est trop froide, elle sera cassante et difficile à pocher. Surveillez la texture régulièrement.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Conservation :</strong> Grâce à la cuisson du sucre et de la crème à 103°C et la présence d'alcool, l'activité de l'eau (Aw) est réduite, offrant une bonne conservation (4 à 6 semaines) si stocké à 16-18°C.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Le Charentais est un hommage au terroir. L'alliance classique orange-chocolat est ici sublimée par la chaleur du Cognac et l'amertume du caramel brun."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonCharentais;