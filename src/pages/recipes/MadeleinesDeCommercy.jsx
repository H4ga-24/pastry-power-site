import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Users, Thermometer } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MadeleinesDeCommercy = () => {
  return (
    <>
      <Helmet>
        <title>Les Madeleines de Commercy (Lorraine) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle des Madeleines de Commercy : le célèbre petit gâteau moelleux à la bosse dorée et au parfum de citron." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/c4616ba865f4c6654f6d93f0b0353868.jpg" 
              alt="Les Madeleines de Commercy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/patisserie/gateaux/desserts-regionaux">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Desserts Régionaux
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                Les Madeleines de Commercy (Lorraine)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le célèbre petit gâteau <strong>moelleux</strong> en forme de <strong>coquillage</strong>, reconnaissable à sa <strong>bosse dorée</strong> et son <strong>parfum de citron</strong>.
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
              <Thermometer className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Repos (Froid)</span>
              <span className="text-white font-medium">2 heures minimum</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">8 à 10 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Température</span>
              <span className="text-white font-medium text-sm">220°C puis 180°C</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <p className="text-sm text-gray-500 mb-4">(Pour environ 20 madeleines)</p>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Œufs entiers</span>
                    <span className="font-bold text-white">3</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Farine</span>
                    <span className="font-bold text-white">150 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre</span>
                    <span className="font-bold text-white">125 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre semoule</span>
                    <span className="font-bold text-white">130 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Levure chimique</span>
                    <span className="font-bold text-white">1/2 sachet (6 g)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Citron (Zeste uniquement)</span>
                    <span className="font-bold text-white">1</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Miel (pour le moelleux)</span>
                    <span className="font-bold text-white">20 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sel</span>
                    <span className="font-bold text-white">1 pincée</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Étapes */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Procédé Technique
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. Préparation du beurre</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Faites fondre le beurre</strong> dans une casserole à feu doux. <strong>Laissez-le tiédir</strong> à température ambiante (il ne doit pas être brûlant lors de l'incorporation).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. L'Appareil</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans un cul-de-poule, <strong>fouettez les œufs</strong>, le <strong>sucre</strong>, le <strong>sel</strong> et le <strong>miel</strong> jusqu'à ce que le mélange <strong>blanchisse légèrement</strong>. <strong>Tamisez</strong> la farine et la levure chimique ensemble. <strong>Incorporez-les</strong> au mélange œufs/sucre sans trop travailler la pâte.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Finition et Aromatisation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez le beurre fondu refroidi</strong> dans la pâte. Mélangez jusqu'à incorporation complète. <strong>Ajoutez les zestes du citron</strong> râpés finement.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Repos au Froid (Crucial)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Couvrez le récipient</strong> au contact avec un film alimentaire. <strong>Placez la pâte au réfrigérateur</strong> pendant <strong>au moins 2 heures</strong> (idéalement toute une nuit). La pâte doit être <strong>très froide</strong> au moment d'enfourner.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Moulage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Beurrez et farinez</strong> les moules à madeleines (sauf si moule silicone). Remplissez les alvéoles aux <strong>3/4</strong> avec la pâte froide (à la poche à douille ou à la cuillère). <strong>Ne lissez pas</strong> la pâte.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. Cuisson (Le Choc Thermique)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Préchauffez</strong> votre four à <strong>220°C</strong> (th. 7-8). Enfournez les madeleines et <strong>baissez immédiatement</strong> la température à <strong>180°C</strong>. Laissez cuire <strong>8 à 10 minutes</strong>. La bosse va se former grâce au <strong>choc de température</strong>. Elles doivent être dorées sur les bords et claires au centre.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">7. Finition</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Démoulez immédiatement</strong> sur une grille à la sortie du four.
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

export default MadeleinesDeCommercy;