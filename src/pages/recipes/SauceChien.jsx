import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, LeafyGreen } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce Chien", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/631b2c6de02f3e285561f898efaa6c96.jpg", description: "L'incontournable des Antilles." }; */
const SauceChien = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Chien (Antillaise) - Maison Dorée</title>
        <meta name="description" content="Recette de l'incontournable Sauce Chien antillaise : fraîche, parfumée aux herbes, idéale pour poissons, crustacés et poulet boucané." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/631b2c6de02f3e285561f898efaa6c96.jpg" 
              alt="La Sauce Chien (Antillaise)" 
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
                La Sauce Chien (Antillaise)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                L'incontournable de la <strong>cuisine créole</strong>. Une sauce <strong>verte, fraîche et parfumée</strong> aux herbes, qui tire son nom du couteau "Chien" traditionnellement utilisé pour ciseler les herbes. Elle est idéale pour accompagner les <strong>poissons grillés</strong>, les <strong>crustacés</strong> ou le <strong>poulet boucané</strong>.
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
              <span className="text-white font-medium">15 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Temps de repos</span>
              <span className="text-white font-medium">30 minutes <span className="text-gray-500">(Indispensable)</span></span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Très facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <LeafyGreen className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Usage</span>
              <span className="text-white font-medium">Barbecues, Poissons, Riz</span>
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
                    <span className="font-bold text-white">1</span> Gousse d'ail
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Petit oignon
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2</span> Branches de cive <span className="text-sm text-gray-500">(oignon pays)</span> ou <span className="font-bold text-white">2 c.à.c</span> de ciboulette
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">3</span> Branches de persil <span className="text-sm text-gray-500">(plat ou frisé, feuilles uniquement)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Citron jaune <span className="text-sm text-gray-500">(pour le jus)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 pincée</span> de Piment <span className="text-sm text-gray-500">(en morceaux ou en poudre, selon tolérance)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">15 cl</span> d'Eau chaude
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">5 c.à.s</span> d'Huile d'olive <span className="text-sm text-gray-500">(ou huile neutre)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white"></span> Sel et Poivre <span className="text-sm text-gray-500">(de qualité)</span>
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Découpe (Ciselage)</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    <strong>Épluchez</strong> l'ail et l'oignon. <strong>Écrasez</strong> la gousse d'ail. <strong>Coupez</strong> l'oignon et les branches de cive (ou ciboulette) en tout <strong>petits dés</strong>. <strong>Effeuillez le persil</strong> et <strong>émincez-le finement</strong>.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    L'objectif est d'avoir une découpe fine pour libérer un maximum d'arômes.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. L'Assemblage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans un bol ou un bocal suffisamment grand, <strong>placez tous les aromates</strong> (ail, oignon, cive, persil) ainsi que le piment. <strong>Pressez le citron</strong> et versez le jus sur les herbes.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Choc Thermique</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    <strong>Ajoutez le sel, le poivre et l'huile d'olive</strong>. Enfin, <strong>versez les 15 cl d'eau chaude</strong> directement sur la préparation.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Pourquoi de l'eau chaude ? La chaleur va "cuire" très légèrement les herbes et l'oignon pour en extraire les huiles essentielles instantanément, créant le goût unique de la sauce chien.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. L'Infusion</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Remuez bien</strong>. Laissez <strong>reposer à température ambiante</strong> pendant <strong>au moins 30 minutes</strong>.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    C'est le secret pour que les saveurs se mélangent (l'eau, l'huile et le citron vont créer une vinaigrette aromatique).
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

export default SauceChien;