import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce au Poivre", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/ce6c82585435ec8d26ba4329761a5ee3.jpg", description: "Un classique pour les viandes." }; */
const SauceAuPoivre = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce au Poivre - Maison Dorée</title>
        <meta name="description" content="Recette de la Sauce au Poivre : un grand classique de bistrot, onctueux et relevé, idéal pour les viandes rouges." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/ce6c82585435ec8d26ba4329761a5ee3.jpg" 
              alt="La Sauce au Poivre" 
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
                La Sauce au Poivre
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Un <strong>grand classique de bistrot</strong>. Une sauce <strong>onctueuse et relevée</strong>, parfaite pour napper une <strong>entrecôte</strong>, un <strong>filet de bœuf</strong> ou un <strong>magret de canard</strong>.
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
              <span className="text-white font-medium">10 à 15 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Utensils className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Goût</span>
              <span className="text-white font-medium">Poivré, riche et onctueux</span>
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
                    <span className="font-bold text-white">1 c.à.s</span> de Grains de poivre <span className="text-sm text-gray-500">(Noir, Vert ou mélange). Idéalement concassés grossièrement (mignonnette) ou poivre fumé.</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Échalote <span className="text-sm text-gray-500">(finement hachée)</span> ou <span className="font-bold text-white">1 c.à.s</span> d'échalote semoule
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 tasse</span> (environ 250ml) de Fond de veau ou Bouillon de bœuf
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 tasse</span> (environ 250ml) de Crème épaisse <span className="text-sm text-gray-500">(30% MG min. de préférence)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Beurre
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Sel
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white text-[#D4AF37]">(Optionnel)</span> : Un petit verre de Cognac ou d'Armagnac pour le caractère.
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Base Aromatique</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Chauffez</strong> une poêle à feu moyen et faites <strong>fondre le beurre</strong>. Ajoutez l'échalote hachée et faites-la <strong>revenir (suer)</strong> jusqu'à ce qu'elle soit <strong>translucide et légèrement dorée</strong>, sans la brûler.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Torréfaction</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    Ajoutez les grains de poivre concassés dans la poêle avec les échalotes. Faites-les <strong>revenir brièvement</strong> (30 secondes à 1 minute).
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Pourquoi ? La chaleur libère les huiles essentielles du poivre et décuple ses arômes.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Déglacage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez</strong> le fond de veau (ou bouillon) dans la poêle. <strong>Augmentez le feu</strong> pour porter à ébullition. <strong>Réduisez</strong> ensuite le feu à moyen-doux et <strong>laissez mijoter</strong> quelques minutes. Le liquide doit <strong>réduire légèrement</strong> pour concentrer les saveurs.
                  </p>
                  <p className="text-gray-500 mt-2 text-sm">
                    (Si vous utilisez du Cognac, versez-le juste avant le bouillon et laissez l'alcool s'évaporer quelques secondes).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Crémage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Ajoutez la crème épaisse</strong> et mélangez bien. Laissez cuire à <strong>feu doux</strong>. La sauce va <strong>épaissir</strong> petit à petit jusqu'à obtenir une consistance <strong>"nappante"</strong> (elle doit accrocher à la cuillère).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. L'Assaisonnement</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Goûtez</strong> la sauce. Ajoutez du sel selon votre goût (le bouillon étant souvent déjà salé, ayez la main légère au début). <strong>Retirez du feu</strong> dès que la consistance vous plaît.
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

export default SauceAuPoivre;