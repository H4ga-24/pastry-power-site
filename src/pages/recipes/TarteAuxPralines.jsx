import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TarteAuxPralines = () => {
  return (
    <>
      <Helmet>
        <title>La Tarte aux Pralines (Lyon) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle de la Tarte aux Pralines : le dessert emblématique des Bouchons lyonnais, avec sa crème onctueuse aux pralines roses." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0fb7f65352bad271f01f7ef59f4fea8d.jpg" 
              alt="La Tarte aux Pralines" 
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
                La Tarte aux Pralines (Lyon)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le dessert emblématique des "<strong>Bouchons</strong>" lyonnais. Une <strong>pâte sablée croustillante</strong> garnie d'une <strong>crème onctueuse et fondante aux pralines roses</strong> (amandes enrobées de sucre rouge).
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
              <span className="text-white font-medium">30 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">20 à 25 min (Pâte) + 15 min (Garniture)</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-white font-medium">2 heures (Froid)</span>
            </div>
             <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Moyenne (Cuisson du sucre)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <p className="text-sm text-gray-500 mb-4">(Pour une tarte de 22 cm)</p>
                
                <h3 className="text-lg font-medium text-[#D4AF37] mb-3">La Pâte Sucrée</h3>
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Farine</span>
                    <span className="font-bold text-white">200 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre mou</span>
                    <span className="font-bold text-white">100 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre glace</span>
                    <span className="font-bold text-white">80 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Poudre d'amandes</span>
                    <span className="font-bold text-white">25 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Œuf entier</span>
                    <span className="font-bold text-white">1</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sel</span>
                    <span className="font-bold text-white">1 pincée</span>
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-[#D4AF37] mb-3">L'Appareil à Pralines</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Pralines Roses (spécialité de Lyon)</span>
                    <span className="font-bold text-white">300 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Crème liquide entière (30% MG min.)</span>
                    <span className="font-bold text-white">300 g</span>
                  </li>
                  <li className="text-sm text-gray-500 italic">
                    (C'est un "tant pour tant" : autant de crème que de pralines)
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Pâte Sucrée</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans un saladier, <strong>mélangez le beurre mou avec le sucre glace</strong>, le sel et la poudre d'amandes jusqu'à obtenir une <strong>texture crémeuse</strong>. Ajoutez l'œuf, mélangez, puis versez la farine. <strong>Travaillez la pâte brièvement</strong> juste pour amalgamer les ingrédients (ne pétrissez pas trop sinon la pâte sera dure). Formez une boule, filmez et <strong>laissez reposer 1 heure au frais</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Cuisson à Blanc</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Étalez la pâte et <strong>foncez votre cercle ou moule à tarte</strong>. Piquez le fond avec une fourchette. Placez une feuille de papier cuisson sur le fond de tarte et <strong>lestez avec des billes de cuisson</strong> (ou du riz/haricots secs). <strong>Enfournez à 170°C pendant 20 à 25 minutes</strong>. Retirez les billes et le papier 5 minutes avant la fin pour dorer le fond. <strong>Important</strong> : Le fond de tarte doit être <strong>entièrement cuit et doré</strong>, car il ne repassera pas au four (ou très peu). Laissez refroidir sur une grille.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. L'Appareil aux Pralines</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Concassez grossièrement les pralines</strong> (si elles sont entières) à l'aide d'un marteau ou d'un robot solide. Dans une casserole, versez la <strong>crème liquide et les pralines concassées</strong>. Portez à ébullition sur feu moyen en <strong>remuant constamment</strong>. Laissez réduire en bouillonnant pendant environ <strong>15 minutes</strong>. Le mélange doit <strong>épaissir, devenir rouge vif et nappant</strong>. Le test : La <strong>température idéale est de 110°C-112°C</strong>. Si vous n'avez pas de thermomètre, la crème doit napper le dos de la cuillère et faire des grosses bulles lentes.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Le Montage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez l'appareil aux pralines chaud</strong> directement dans le fond de tarte cuit et refroidi. Lissez la surface si nécessaire en secouant doucement la tarte.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. La Prise (Le Repos)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Laissez refroidir à température ambiante, puis <strong>placez la tarte au réfrigérateur pendant au moins 2 heures</strong>. La garniture va durcir légèrement tout en restant fondante. <strong>Sortez-la 15 minutes avant de déguster</strong>.
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

export default TarteAuxPralines;