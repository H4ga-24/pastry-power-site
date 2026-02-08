import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Wind } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BiscuitRoseDeReims = () => {
  return (
    <>
      <Helmet>
        <title>Le Biscuit Rose de Reims (Champagne) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle du Biscuit Rose de Reims : le célèbre biscuit croquant à la teinte rose, idéal pour accompagner le champagne." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/e4c234c10af4deb4a9a90f1345e5077f.jpg" 
              alt="Le Biscuit Rose de Reims" 
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
                Le Biscuit Rose de Reims (Champagne)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le célèbre biscuit <strong>sec et croquant</strong> à la <strong>teinte rose caractéristique</strong>, conçu traditionnellement pour être <strong>trempé dans le champagne sans s'émietter</strong>.
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
              <span className="text-white font-medium">20 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">15 à 20 min</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Wind className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Séchage</span>
              <span className="text-white font-medium">15 min (Indispensable)</span>
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
                <p className="text-sm text-gray-500 mb-4">(Pour environ 30 biscuits)</p>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Œufs entiers (Blancs et Jaunes séparés)</span>
                    <span className="font-bold text-white">3</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre semoule</span>
                    <span className="font-bold text-white">100 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Farine</span>
                    <span className="font-bold text-white">90 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Fécule de maïs (Maïzena)</span>
                    <span className="font-bold text-white">45 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Levure chimique</span>
                    <span className="font-bold text-white">5 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Extrait de vanille</span>
                    <span className="font-bold text-white">1 c.à.c</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Colorant alimentaire rouge</span>
                    <span className="font-bold text-white">Q.S.P</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre glace (pour le saupoudrage)</span>
                    <span className="font-bold text-white">QS</span>
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
                  <h3 className="text-xl font-medium text-white mb-3">1. Préparation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Préchauffez le four à 180°C</strong> (Chaleur statique). <strong>Tamisez ensemble</strong> la farine, la fécule et la levure chimique sur une feuille de papier cuisson.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Meringue</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans la cuve du batteur, <strong>montez les blancs d'œufs en neige</strong>. Quand ils commencent à mousser, <strong>versez le sucre semoule en trois fois</strong> tout en fouettant pour obtenir une <strong>meringue ferme et brillante</strong> ("bec d'oiseau").
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Mélange</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Ajoutez les jaunes d'œufs</strong>, la <strong>vanille</strong> et le <strong>colorant rouge</strong> directement dans la meringue. <strong>Fouettez quelques secondes à vitesse lente</strong> juste pour mélanger (ne pas insister).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. L'Incorporation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez les poudres tamisées</strong> (farine/fécule/levure) en pluie sur le mélange. <strong>Incorporez délicatement à la maryse</strong> (spatule souple) en <strong>soulevant la masse du bas vers le haut</strong> pour ne pas faire retomber les blancs. La pâte doit rester <strong>aérienne</strong> et <strong>colorée uniformément</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Le Dressage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Remplissez une poche à douille munie d'une <strong>douille lisse (10 ou 12 mm)</strong>. Dressez des <strong>bâtonnets d'environ 8 à 10 cm</strong> de long sur une plaque recouverte de papier cuisson (ou dans des moules à biscuits roses si vous en avez). <strong>Espaurez-les bien</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. Le Perlage (Le Sucre Glace)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Saupoudrez généreusement</strong> les biscuits de sucre glace. <strong>Attendez 5 minutes</strong> que le sucre soit absorbé, puis <strong>saupoudrez une seconde couche</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">7. Cuisson</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Enfournez pour 15 à 20 minutes à 180°C</strong>. Ils ne doivent pas brunir, juste <strong>croûter</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">8. Le Séchage ("Bis-cuit")</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Une fois cuits, <strong>éteignez le four</strong>, entrouvrez légèrement la porte et <strong>laissez les biscuits sécher à l'intérieur pendant 15 minutes supplémentaires</strong>. Ils doivent être <strong>bien durs et croquants</strong>.
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

export default BiscuitRoseDeReims;