import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, UtensilsCrossed } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce Curry Coco", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f9a7f35f28f0b226c9c48be83f28e751.jpg", description: "Douceur et exotisme." }; */
const SauceCurryCoco = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Curry Coco - Maison Dorée</title>
        <meta name="description" content="Recette de la Sauce Curry Coco : une sauce d'inspiration indienne, onctueuse et parfumée, idéale pour le poulet et les crevettes." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f9a7f35f28f0b226c9c48be83f28e751.jpg" 
              alt="La Sauce Curry Coco" 
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
                La Sauce Curry Coco
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Une sauce d'<strong>inspiration indienne</strong>, <strong>onctueuse et parfumée</strong>. Très rapide à réaliser, elle transforme un simple <strong>blanc de poulet</strong>, des <strong>crevettes</strong> ou un <strong>bol de riz</strong> en un plat exotique réconfortant.
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
              <span className="text-white font-medium">10 minutes</span>
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
              <span className="text-white font-medium">Poulet, Crevettes, Riz basmati</span>
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
                    <span className="font-bold text-white">1</span> Oignon
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2</span> Gousses d'ail
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2 c.à.s</span> d'Huile d'olive
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Poudre de Curry <span className="text-sm text-gray-500">(Madras ou doux selon goût)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Farine <span className="text-sm text-gray-500">(pour lier la sauce)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">400 ml</span> de Lait de coco
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Base Aromatique</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Épluchez et hachez finement</strong> l'oignon et les gousses d'ail. Dans une poêle ou une sauteuse, <strong>faites chauffer l'huile d'olive</strong> à feu moyen. Ajoutez le hachis d'oignon et d'ail, et faites-les <strong>revenir (suer)</strong> pendant environ <strong>5 minutes</strong>, jusqu'à ce qu'ils soient tendres et translucides.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Torréfaction (Le "Roux" épicé)</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    Ajoutez la <strong>poudre de curry</strong> et la <strong>farine</strong> directement dans la poêle sur les oignons. <strong>Mélangez bien</strong> pendant 1 à 2 minutes.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Pourquoi ? Cette étape permet de cuire la farine (pour éviter le goût de cru) et de torréfier le curry pour exhaler ses parfums.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Mouillage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez le lait de coco progressivement</strong> dans la poêle tout en <strong>remuant constamment</strong> avec un fouet ou une cuillère en bois.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. La Liaison</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Continuez de remuer jusqu'à ce que la sauce <strong>épaississe</strong> et atteigne une consistance <strong>nappante et crémeuse</strong>. <strong>Assaisonnez</strong> avec le sel et le poivre noir selon votre goût. <strong>Servez bien chaud</strong>.
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

export default SauceCurryCoco;