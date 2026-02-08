import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info, ThermometerSun } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const TruffesChocolatWhisky = () => {
  const recipeData = {
    title: "Truffes Chocolat & Whisky",
    category: "CHOCOLATERIE",
    prepTime: "24H (Repos) + 2H",
    cookTime: "20 MIN",
    difficulty: "INTERMÉDIAIRE",
    yield: "80-100 truffes",
    weight: "~1 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/79c549535c907e074738d632777d0154.png",
    description: "L'élégance brute d'une truffe classique. Une ganache noire intense relevée par les notes tourbées d'un bon Whisky, enrobée d'une fine couche croquante et roulée dans l'amertume du cacao pur."
  };

  const ingredients = [
    {
      title: "1. Ganache Whisky",
      items: [
        { name: "Crème liquide 35%", qty: 350, unit: "g" },
        { name: "Sucre inverti (Trimoline)", qty: 40, unit: "g" },
        { name: "Sorbitol poudre", qty: 30, unit: "g" },
        { name: "Couverture Noire 64%", qty: 480, unit: "g" },
        { name: "Beurre doux", qty: 60, unit: "g" },
        { name: "Whisky (type Tourbé ou Single Malt)", qty: 40, unit: "g" }
      ]
    },
    {
      title: "2. Trempage & Finition",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 500, unit: "g" },
        { name: "Cacao poudre Plein Arôme", qty: 200, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Ganache dressée en boules puis roulée. Nécessite une bonne maîtrise du tempérage pour l'enrobage final. Finition cacao amer.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={90}
             yieldUnit="truffes"
             step={10}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Ganache</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, porter à ébullition la crème liquide avec le sucre inverti et le sorbitol.
                       Verser la crème bouillante sur le chocolat noir (en pistoles ou haché). Laisser reposer 1 minute pour que le chocolat fonde.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Émulsionner à la maryse en créant un noyau élastique et brillant. Parfaire l'émulsion au mixeur plongeant sans incorporer d'air.
                       Lorsque la ganache atteint 35°C-40°C, ajouter le beurre en parcelles, mixer. Ajouter enfin le Whisky, mixer une dernière fois.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Façonnage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Couler la ganache dans un bac, filmer au contact et laisser cristalliser 24h à 16°C (ou jusqu'à texture pochable).
                       Dresser des boules régulières (environ 10g) à la poche à douille lisse n°10 sur feuille guitare. Laisser cristalliser à nouveau.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Une fois les boules assez fermes, les rouler rapidement entre les paumes des mains (idéalement avec des gants) pour les rendre bien sphériques.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Pré-enrobage / Chablonnage Main</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Pour garantir une truffe parfaitement hermétique et faciliter l'enrobage final : mettre une noisette de chocolat tempéré dans le creux de la main (gantée).
                       Rouler 2 ou 3 truffes à la fois dans cette main pour les recouvrir d'une pellicule de chocolat très fine. Déposer et laisser figer.
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage et Finition</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point le chocolat de couverture noir.
                       Tremper chaque truffe à l'aide d'une fourchette à tremper ronde. Tapoter pour retirer l'excédent.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déposer délicatement la truffe dans un bac rempli de cacao poudre. Recouvrir immédiatement de cacao avec une autre fourchette ou à la main.
                       Laisser cristalliser quelques minutes dans le cacao avant de tamiser pour récupérer les truffes.
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
                       <strong className="text-white block mb-2">Mixage Sans Bulles :</strong> L'ennemi de la ganache (et de sa conservation) est l'air. Gardez toujours la tête du mixeur plongeant immergée dans la masse. Si vous incorporez de l'air, vous oxydez la ganache et réduisez sa durée de vie.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Timing Crucial (25 secondes) :</strong> Une fois la truffe trempée et déposée dans le cacao, vous avez environ 25 secondes (selon la T° de la pièce) avant que le chocolat ne fige. Si vous ne la recouvrez pas de poudre dans ce laps de temps, le cacao n'adhérera pas et la truffe aura des taches brillantes disgracieuses.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">L'Incorporation du Whisky :</strong> On ajoute l'alcool en fin d'émulsion, quand la ganache est tiède (35°C), pour ne pas évaporer les arômes volatils. Si la ganache tranche (se sépare) à l'ajout, un coup de mixeur rétablira l'émulsion.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Technique Cacao :</strong> Utilisez un cacao en poudre de haute qualité (type Plein Arôme ou Extra Brute) et tamisez-le régulièrement pendant la production pour éviter les "grains" de chocolat durcis qui se forment.
                    </p>
                 </div>
              </div>

              {/* Conservation */}
              <div className="mt-8 p-6 bg-[#1a1a1a] border border-white/5 rounded-sm">
                 <h3 className="font-serif text-xl text-white mb-4 flex items-center gap-2">
                    <ThermometerSun className="w-5 h-5 text-[#D4AF37]" /> Conservation
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    Grâce au sucre inverti, au sorbitol et à l'alcool, cette ganache a une bonne stabilité.
                    Conserver les truffes hermétiquement fermées à l'abri de l'humidité et des odeurs, idéalement entre <strong>16°C et 18°C</strong>.
                    Durée de consommation optimale (DLUO) : <strong>3 semaines</strong> après fabrication.
                 </p>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "La truffe est l'expression la plus pure du chocolat. Ici, le whisky n'est pas là pour 'alcooliser' le bonbon, mais pour apporter sa longueur en bouche et ses notes boisées qui soutiennent la force du cacao."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default TruffesChocolatWhisky;