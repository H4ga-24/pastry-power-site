import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Hourglass } from 'lucide-react';
import { Button } from "@/components/ui/button";

const KouignAmann = () => {
  return (
    <>
      <Helmet>
        <title>Le Kouign-Amann (Bretagne) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle du Kouign-Amann : le célèbre gâteau au beurre breton, croustillant et caramélisé." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8eb2478d08f155364300cb7c90791297.jpg" 
              alt="Le Kouign-Amann" 
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
                Le Kouign-Amann (Bretagne)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Littéralement "<strong>Gâteau au beurre</strong>". Une <strong>pâte à pain feuilletée</strong> généreusement garnie de <strong>beurre demi-sel</strong> et de <strong>sucre</strong>, créant une <strong>croûte caramélisée irrésistible</strong>.
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
              <span className="text-white font-medium">45 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Hourglass className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-white font-medium">2h00 (cumulé)</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">30 à 35 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Thermometer className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Température</span>
              <span className="text-white font-medium">180°C</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <p className="text-sm text-gray-500 mb-4">(Pour 1 gâteau de 6 personnes)</p>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Farine (T55)</span>
                    <span className="font-bold text-white">300 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Levure boulangère fraîche</span>
                    <span className="font-bold text-white">10 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Eau tiède</span>
                    <span className="font-bold text-white">180 ml</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sel (pour la pâte)</span>
                    <span className="font-bold text-white">5 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre demi-sel (de bonne qualité, tempéré)</span>
                    <span className="font-bold text-white">250 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre en poudre</span>
                    <span className="font-bold text-white">250 g</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Procédé Technique */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Procédé Technique
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. La Détrempe (La Pâte)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans un saladier ou la cuve du robot, <strong>mélangez la farine et le sel</strong>. Faites un puits, <strong>ajoutez la levure émiettée et l'eau tiède</strong>. <strong>Pétrissez</strong> jusqu'à obtenir une <strong>pâte homogène</strong>, souple mais non collante (environ 10 minutes). Laissez <strong>reposer</strong> la boule de pâte à température ambiante pendant <strong>1 heure</strong> (elle doit doubler de volume). Ensuite, <strong>placez-la 30 minutes au réfrigérateur</strong> pour la raffermir.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. Le Beurrage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Tapez le beurre demi-sel au rouleau</strong> pour lui donner une forme carrée et une <strong>consistance identique à celle de la pâte</strong> (ni trop dur, ni trop mou).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Tourage (L'Incorporation)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Étalez la pâte en croix</strong> ou en rectangle sur un plan de travail fariné. <strong>Placez le beurre au centre</strong>. Rabattez les bords de la pâte pour <strong>enfermer hermétiquement le beurre</strong>. Étalez ce pâton en un long rectangle. <strong>Pliez-le en trois</strong> (comme une lettre). <strong>Faites pivoter</strong> la pâte d'un quart de tour. (C'est le <strong>1er tour simple</strong>).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Sucrage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Étalez de nouveau la pâte en longueur. <strong>Saupoudrez généreusement la surface avec un tiers du sucre</strong>. <strong>Pliez en trois</strong> (comme une lettre). (<strong>2ème tour</strong>). Tournez d'un quart de tour. Étalez de nouveau. <strong>Saupoudrez avec le deuxième tiers du sucre</strong>. <strong>Pliez en trois</strong>. (<strong>3ème tour</strong>).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Le Façonnage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Étalez la pâte une dernière fois pour former un carré ou un cercle de la taille de votre moule. <strong>Saupoudrez le reste du sucre sur le plan de travail</strong> et posez la pâte dessus pour l'enrober. <strong>Repliez les 4 coins vers le centre</strong> pour former une boule grossière. Placez la pâte (côté pliures vers le haut) dans un <strong>moule généreusement beurré et sucré</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. La Pousse</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Laissez pousser environ 30 à 45 minutes</strong> à température ambiante. La pâte doit <strong>gonfler légèrement</strong> et le feuilletage s'écarter.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">7. La Cuisson</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Préchauffez le four à 180°C</strong>. Déposez quelques noisettes de beurre sur le dessus. <strong>Enfournez pour 30 à 35 minutes</strong>. Le gâteau doit être <strong>bien doré</strong> et le sucre doit avoir <strong>caramélisé sur les bords</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">8. Finition</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Démoulez immédiatement</strong> à la sortie du four en retournant le gâteau sur une assiette (sinon le caramel va durcir et coller le gâteau au moule). Laissez tiédir.
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

export default KouignAmann;