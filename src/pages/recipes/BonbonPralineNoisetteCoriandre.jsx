import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonPralineNoisetteCoriandre = () => {
  const recipeData = {
    title: "Bonbon Praliné Noisette & Coriandre",
    category: "CHOCOLATERIE",
    prepTime: "1H 30",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    yield: "576 pièces (Cadre 34x34 cm)",
    weight: "~6 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/bdd35f5690a50bab6276f23e8db8927f.png",
    description: "Un praliné à l'ancienne aux noisettes entières, subtilement parfumé à la coriandre, enrobé d'une fine couche de chocolat noir. Une explosion de saveurs en bouche."
  };

  const ingredients = [
    {
      title: "1. Le Praliné",
      items: [
        { name: "Noisettes entières", qty: 2100, unit: "g" },
        { name: "Sucre semoule", qty: 1200, unit: "g" },
        { name: "Eau", qty: 450, unit: "g" },
        { name: "Sorbitol poudre", qty: 75, unit: "g" },
        { name: "Graines de coriandre", qty: 54, unit: "g" }
      ]
    },
    {
      title: "2. Finition Masse",
      items: [
        { name: "Chocolat lait 40%", qty: 720, unit: "g" },
        { name: "Beurre de cacao Mycryo", qty: 360, unit: "g" },
        { name: "Lait en poudre 0%", qty: 105, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage",
      items: [
        { name: "Couverture Noire 64%", qty: 1000, unit: "g" },
        { name: "Graines de coriandre", qty: "QS", unit: "" }
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
          <div className="rounded-sm overflow-hidden h-[400px] border border-white/10">
             <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
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
                      <p className="text-gray-400 text-xs">Praliné à l'ancienne texturé. Enrobage manuel ou mécanique. Cadre de 340x340x10mm.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={576}
             yieldUnit="pièces"
             step={24}
           />

           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Cuisson du Praliné</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans un cul de poule en cuivre ou une grande casserole, cuire le sucre, l'eau et le sorbitol à 118°C. Ajouter les noisettes entières brutes et les graines de coriandre préalablement triées.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Sabler le mélange hors du feu ou à feu très doux jusqu'à ce que le sucre recristallise autour des fruits secs (sablage blanc). Remettre sur feu moyen et caraméliser lentement en remuant constamment jusqu'à obtenir une couleur ambrée foncée et brillante (cœur des noisettes torréfié). Débarrasser sur marbre ou feuille silpat et laisser refroidir complètement.
                    </p>
                 </div>

                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Broyage et Finition</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Concasser la masse froide. Broyer au robot coupe (cutter) jusqu'à l'obtention d'un praliné à texture "ancienne" (grains encore perceptibles, pas totalement lisse).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Dans un pétrin ou un mélangeur, verser le praliné broyé. Ajouter le chocolat au lait fondu à 45°C, le beurre de cacao Mycryo fondu, et le lait en poudre. Mélanger intimement pour homogénéiser la masse.
                    </p>
                 </div>

                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Cadrage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Vérifier la température de la masse : elle doit être redescendue à environ 24°C-26°C pour être coulée. Si elle est trop chaude, la tabler sur marbre pour amorcer la cristallisation du beurre de cacao.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Couler dans un cadre de 34 x 34 cm posé sur une feuille guitare. Lisser soigneusement à la règle. Laisser cristalliser 24 à 48 heures à 16-18°C et 60% d'humidité.
                    </p>
                 </div>
                 
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le cadre (fine couche de chocolat tempéré sur le dessus) avant de retourner et décercler. Détailler à la guitare (cordes 22.5mm ou selon format souhaité, environ 15x15mm ou 22.5x22.5mm pour obtenir le rendement).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Enrober les bonbons avec la couverture noire tempérée. Décorer immédiatement avec une graine de coriandre posée au centre ou un motif à la fourchette structuré.
                    </p>
                 </div>
              </div>

              <div className="mt-16 p-8 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                 <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                    <ChefHat className="w-6 h-6 text-[#D4AF37]" /> Conseils et Astuces du Chef
                 </h3>
                 <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
                    <p>
                       <strong className="text-white block mb-2">La torréfaction :</strong> C'est l'étape clé. La caramélisation du sucre ne suffit pas, il faut que la noisette soit grillée à cœur dans le sucre bouillant pour libérer toute son huile et son arôme.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">L'ajout du sorbitol :</strong> Il permet de conserver un moelleux exceptionnel dans le temps (AW) et retarde le blanchiment, augmentant la DLC du bonbon.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">La Coriandre :</strong> Utilisez des graines entières de bonne qualité. Elles vont éclater lors du broyage, libérant une saveur d'agrume très florale qui coupe le gras du praliné.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Lait en poudre :</strong> Il absorbe l'humidité résiduelle et donne un côté lacté "confiture de lait" au praliné final.
                    </p>
                 </div>
              </div>

              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Ce bonbon est un équilibre fragile. La puissance terrienne de la noisette caramélisée rencontre la fraîcheur citronnée de la coriandre. C'est un praliné qui a du 'mâche', une texture rustique qui raconte une histoire."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonPralineNoisetteCoriandre;