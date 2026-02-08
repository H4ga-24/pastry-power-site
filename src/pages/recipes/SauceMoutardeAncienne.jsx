import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, UtensilsCrossed } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce Moutarde Ancienne", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/173d8a186fceaa9eb1c081e757a2d213.jpg", description: "Texture et caractère." }; */
const SauceMoutardeAncienne = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Moutarde à l'Ancienne - Maison Dorée</title>
        <meta name="description" content="Recette de la Sauce Moutarde à l'Ancienne : une sauce de caractère, crémeuse et relevée, idéale pour les viandes blanches et le porc." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/173d8a186fceaa9eb1c081e757a2d213.jpg" 
              alt="La Sauce Moutarde à l'Ancienne" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/cuisine/sauces">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Sauces
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                La Sauce Moutarde à l'Ancienne
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Une sauce de <strong>caractère</strong>, à la fois <strong>crémeuse et relevée</strong>. L'équilibre entre la douceur de la crème et l'acidité du vinaigre et de la moutarde en fait le <strong>compagnon idéal</strong> des viandes blanches et du porc.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Infos Clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Préparation</span>
              <span className="text-white font-medium">5 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">10 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <UtensilsCrossed className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Accompagnement</span>
              <span className="text-white font-medium">Filet mignon, Rognons, Lapin, Volaille</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2</span> Échalotes
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">5 cl</span> de Vinaigre de Xérès <span className="text-sm text-gray-500">(l'acidité noble)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">40 cl</span> de Crème liquide <span className="text-sm text-gray-500">(entière 30% de préférence pour la tenue)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">10 g</span> de Moutarde de Dijon <span className="text-sm text-gray-500">(la forte)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Moutarde à l'ancienne <span className="text-sm text-gray-500">(avec grains)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 pincée</span> de Piment d'Espelette <span className="text-sm text-gray-500">(pour relever)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white"></span> Sel <span className="text-sm text-gray-500">(si nécessaire)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Étapes */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Étapes de Préparation
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. La Réduction (La Gastrique)</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    <strong>Épluchez et ciselez finement</strong> les échalotes. Dans une casserole, mettez les échalotes et le vinaigre de Xérès. <strong>Portez à ébullition</strong> et laissez réduire <strong>"à sec"</strong> (jusqu'à ce qu'il n'y ait presque plus de liquide).
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Pourquoi ? Cela permet de cuire l'échalote et de concentrer l'acidité du vinaigre sans détremper la sauce.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. Le Crémage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez la crème liquide</strong> sur la réduction d'échalotes. Laissez <strong>mijoter à feu moyen</strong> pendant quelques minutes. La crème doit <strong>réduire et épaissir</strong> jusqu'à devenir <strong>nappante</strong>. Ajoutez la pincée de Piment d'Espelette.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. La Finition (Hors du feu)</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    C'est le moment <strong>crucial</strong>. <strong>Retirez la casserole du feu</strong>. <strong>Incorporez</strong> la moutarde de Dijon et la moutarde à l'ancienne en <strong>fouettant doucement</strong>.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Note : On ne fait jamais bouillir une sauce une fois la moutarde ajoutée, sinon elle perd son piquant et peut devenir amère.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Rectification</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Goûtez</strong> la sauce. <strong>Salez si nécessaire</strong> (attention, la moutarde est déjà salée). <strong>Servez immédiatement</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SauceMoutardeAncienne;