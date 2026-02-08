import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Droplets } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce Satay", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7f8d7e6c0ed7ce8b391f5fe6ab897b30.jpg", description: "Le goût de l'arachide." }; */
const SauceSatay = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Satay (Saté) - Maison Dorée</title>
        <meta name="description" content="Recette de la véritable Sauce Satay maison : une sauce onctueuse aux cacahuètes et au lait de coco, idéale pour les brochettes de poulet et bœuf grillé." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7f8d7e6c0ed7ce8b391f5fe6ab897b30.jpg" 
              alt="La Sauce Satay (Saté)" 
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
                La Sauce Satay (Saté)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Une sauce <strong>onctueuse aux cacahuètes</strong> et au <strong>lait de coco</strong>, incontournable de la cuisine asiatique. Elle accompagne à merveille les <strong>brochettes de poulet</strong>, le <strong>bœuf grillé</strong> ou les <strong>légumes</strong>.
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
              <span className="text-white font-medium">5 à 7 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Droplets className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Texture</span>
              <span className="text-white font-medium">Crémeuse et nappante</span>
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
                    <span className="font-bold text-white">120g</span> de Beurre de cacahuètes <span className="text-sm text-gray-500">(nature, non sucré de préférence)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">200ml</span> de Lait de coco
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2 c.à.s</span> de Sauce soja
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Jus de citron <span className="text-sm text-gray-500">(pour l'acidité)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2 c.à.c</span> de Sucre brun <span className="text-sm text-gray-500">(ou cassonade)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Gousse d'ail <span className="text-sm text-gray-500">(émincée finement ou pressée)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.c</span> de Curry <span className="text-sm text-gray-500">(Poudre ou Pâte, rouge ou jaune selon vos goûts)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.c</span> d'Huile de sésame <span className="text-sm text-gray-500">(facultatif, pour le parfum)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Sel et Poivre noir
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
                  <h3 className="text-xl font-medium text-white mb-3">1. L'Assemblage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans une casserole à feu moyen, <strong>versez</strong> le beurre de cacahuètes, le lait de coco, la sauce soja, le jus de citron, le sucre brun, l'ail émincé et la poudre (ou pâte) de curry. <strong>Mélangez vigoureusement</strong> au fouet ou à la cuillère pour bien combiner tous les ingrédients.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Cuisson (Mijotage)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Laissez mijoter</strong> la sauce à feu doux pendant <strong>5 à 7 minutes</strong>. Attention : <strong>Remuez fréquemment</strong> pour éviter que le beurre de cacahuètes ne colle ou ne brûle au fond de la casserole. La sauce va <strong>épaissir et développer ses arômes</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. L'Assaisonnement</h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    <strong>Goûtez</strong> votre sauce. <strong>Ajustez le sel et le poivre</strong>. Si vous souhaitez une touche asiatique plus prononcée, <strong>ajoutez l'huile de sésame</strong> maintenant et mélangez bien.
                  </p>
                  <p className="text-gray-400 leading-relaxed font-bold text-sm">
                    Équilibre : Si c'est trop salé, ajoutez un peu de sucre. Si c'est trop lourd, ajoutez un peu de jus de citron.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Service</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Retirez du feu</strong>. La sauce va continuer d'épaissir en refroidissant. <strong>Laissez-la tiédir légèrement</strong> avant de la servir en nappage ou en "dip" pour vos brochettes.
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

export default SauceSatay;