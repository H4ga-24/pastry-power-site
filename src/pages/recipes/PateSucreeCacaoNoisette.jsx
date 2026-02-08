import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed } from 'lucide-react';

const PateSucreeCacaoNoisette = () => {
  const recipeData = {
    title: "Pâte Sucrée Cacao Noisette",
    category: "CONFISERIE / BASE",
    prepTime: "20 MIN",
    cookTime: "15 MIN",
    difficulty: "MOYEN",
    yield: "2 cercles de 22cm",
    image: "https://www.tendances-food.fr/wp-content/uploads/2023/05/IMG_20230512_104308-1300x599.jpg",
    description: "Une variante gourmande de la pâte sucrée classique, enrichie en cacao et noisette pour des fonds de tarte au caractère intense."
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/confiserie">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Confiserie
          </Button>
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-sm overflow-hidden h-[400px]">
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
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           <div className="bg-[#1a1a1a] p-8 border border-white/5 rounded-sm h-fit">
              <h3 className="font-serif text-2xl text-white mb-6 border-b border-[#D4AF37]/30 pb-4">Ingrédients</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between"><span>Beurre doux pommade</span> <span className="font-bold text-white">150 g</span></li>
                <li className="flex justify-between"><span>Sucre glace</span> <span className="font-bold text-white">95 g</span></li>
                <li className="flex justify-between"><span>Poudre de noisette</span> <span className="font-bold text-white">30 g</span></li>
                <li className="flex justify-between"><span>Sel fin</span> <span className="font-bold text-white">2 g</span></li>
                <li className="flex justify-between"><span>Oeuf entier (temp. ambiante)</span> <span className="font-bold text-white">60 g</span></li>
                <li className="flex justify-between"><span>Farine T55</span> <span className="font-bold text-white">235 g</span></li>
                <li className="flex justify-between"><span>Cacao en poudre non sucré</span> <span className="font-bold text-white">20 g</span></li>
              </ul>
           </div>

           <div className="space-y-10">
              <h3 className="font-serif text-2xl text-white border-b border-[#D4AF37]/30 pb-4">Progression</h3>
              
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">1</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Créer l'émulsion</h4>
                       <p className="text-gray-400 leading-relaxed">Dans la cuve du batteur muni de la feuille, crémer le beurre pommade avec le sucre glace, la poudre de noisette et le sel. Ne pas trop foisonner (incorporer d'air), juste mélanger. Ajouter l'œuf et émulsionner.</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">2</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Ajout des poudres</h4>
                       <p className="text-gray-400 leading-relaxed">Tamiser ensemble la farine et le cacao. Ajouter ce mélange dans la cuve. Mélanger brièvement à vitesse lente jusqu'à ce que la pâte s'agglomère. <strong className="text-white">Attention : arrêter dès que la farine est incorporée</strong> pour éviter que la pâte ne devienne élastique (ne pas "corser" la pâte).</p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">3</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Repos</h4>
                       <p className="text-gray-400 leading-relaxed">Fraser la pâte sur le plan de travail (écraser avec la paume de la main) pour homogénéiser une dernière fois. Filmer au contact et laisser reposer au frais minimum 2 heures (idéalement une nuit) avant d'étaler.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-serif text-lg border border-[#D4AF37]/20">4</span>
                    <div>
                       <h4 className="text-xl text-white mb-2 font-serif">Cuisson</h4>
                       <p className="text-gray-400 leading-relaxed">Étaler sur 2-3mm, foncer les cercles, piquer le fond. Cuire à blanc à 160°C pendant 15 à 20 minutes (la couleur sombre rend la cuisson difficile à juger, fiez-vous à la texture sèche et mate).</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PateSucreeCacaoNoisette;