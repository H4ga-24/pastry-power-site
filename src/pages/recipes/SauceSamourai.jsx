import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
/* const recipeData = { title: "Sauce Samouraï", category: "SAUCES", image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7a4553917837540ebc6acbee58944c6e.jpg", description: "Relevée et onctueuse." }; */
const SauceSamourai = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Samouraï Maison - Maison Dorée</title>
        <meta name="description" content="Recette de la véritable Sauce Samouraï maison : une mayonnaise relevée aux piments, idéale pour les frites et burgers." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7a4553917837540ebc6acbee58944c6e.jpg" 
              alt="Sauce Samouraï Maison" 
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
                La Sauce Samouraï Maison
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                La sauce incontournable des <strong>friteries belges</strong> et du nord de la France. Une mayonnaise <strong>relevée</strong>, <strong>crémeuse</strong> et <strong>piquante</strong>, idéale pour accompagner <strong>frites, burgers et kebabs</strong>.
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
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-white font-medium">30 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Très facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Calendar className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Conservation</span>
              <span className="text-white font-medium">3 à 5 jours</span>
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
                    <span className="font-bold text-white">1/2 tasse</span> de Mayonnaise <span className="text-sm text-gray-500">(bien ferme)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1/4 tasse</span> de Ketchup
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 à 2 c.à.s</span> de Sauce Piquante <span className="text-sm text-gray-500">(Type Sambal Oelek, Harissa ou Sriracha selon la force voulue)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.c</span> de Moutarde
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Sauce Soja <span className="text-sm text-gray-500">(pour la profondeur de goût)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 à 2 c.à.c</span> de Miel ou de Sucre <span className="text-sm text-gray-500">(pour adoucir le piment)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Sel et Poivre du moulin
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Base</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans un bol ou un cul-de-poule, <strong>mélangez</strong> la mayonnaise avec la moutarde et le ketchup jusqu'à obtenir une <strong>couleur homogène</strong> légèrement orangée.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Montée en Chaleur</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ajoutez la sauce piquante <strong>progressivement</strong>. <strong>Goûtez</strong> au fur et à mesure pour <strong>ajuster</strong> le niveau d'épice selon votre tolérance.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. L'Assaisonnement</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Incorporez</strong> la sauce soja et le miel (ou le sucre). <strong>Mélangez bien</strong> pour dissoudre le sucre. <strong>Salez et poivrez</strong> à votre convenance.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Repos (Crucial)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Transférez</strong> la sauce dans un récipient hermétique. <strong>Laissez reposer</strong> au réfrigérateur pendant au moins <strong>30 minutes</strong>. Ce temps est indispensable pour que les <strong>arômes du piment se diffusent</strong> dans le gras de la mayonnaise.
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

export default SauceSamourai;