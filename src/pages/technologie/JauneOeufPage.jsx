import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Droplets } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Le Jaune d'Œuf (Vitellus)", // ex: "La Farine"
  category: "Technologie - Oeuf",
  description: "Fiche technique détaillée.",
  image: "https://www.lanutrition.fr/sites/default/files/ressources/oeufs_fond_blanc.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const JauneOeufPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Le Jaune d'Œuf (Vitellus) - Maison Dorée</title>
        <meta name="description" content="Fiche technique détaillée sur le jaune d'œuf en pâtisserie : composition, rôle d'émulsion, sablage et astuces du chef." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://www.lanutrition.fr/sites/default/files/ressources/oeufs_fond_blanc.jpg" 
            alt="Le Jaune d'Œuf" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 px-6 md:px-20 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link to="/technologie" className="inline-flex items-center text-[#D4AF37] mb-6 hover:underline gap-2 text-sm uppercase tracking-widest font-medium">
                <ArrowLeft className="w-4 h-4" /> Retour à la Technologie
              </Link>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Le Jaune d'Œuf (Vitellus)</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Histoire & Origine */}
          <section id="histoire" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La Partie Noble</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Le jaune est la réserve nutritive de l'œuf. En pâtisserie, c'est l'agent de texture par excellence.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Les Canelés de Bordeaux existent grâce au vin ! Au 18ème siècle, les châteaux viticoles utilisaient des blancs d'œufs pour "coller" (filtrer) le vin dans les barriques. Les milliers de jaunes restants étaient donnés aux religieuses, qui ont inventé ce petit gâteau pour ne pas les gaspiller.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Analyse & Composition */}
          <section id="composition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Atom className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Analyse & Composition</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                Contrairement au blanc (maigre), le jaune est un concentré de matière.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Pourcentage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Détails</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Eau</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">50%</td>
                    <td className="p-4 border-b border-white/5">Moitié moins que le blanc.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lipides (Gras)</td>
                    <td className="p-4 border-b border-white/5">32% à 34%</td>
                    <td className="p-4 border-b border-white/5">Apporte l'onctuosité et le fondant.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Protéines</td>
                    <td className="p-4 border-b border-white/5">16%</td>
                    <td className="p-4 border-b border-white/5">Dont la précieuse Lécithine.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pigments</td>
                    <td className="p-4 border-b border-white/5">Traces</td>
                    <td className="p-4 border-b border-white/5">Caroténoïdes. La couleur (jaune pâle à orange) dépend uniquement de ce que mange la poule (Maïs = Jaune vif).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Propriétés Physico-Chimiques */}
          <section id="proprietes" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Les Super-Pouvoirs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-yellow-400" />
                        A. L'Émulsion (La Lécithine)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est la propriété majeure du jaune.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Le Mécanisme :</strong> Le jaune contient de la Lécithine, un émulsifiant naturel qui lie l'eau et l'huile.</p>
                        <p><strong>Usage :</strong> C'est grâce à lui que la Crème Mousseline, la Mayonnaise ou la Ganache sont lisses. Sans jaune, le beurre trancherait et remonterait à la surface.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Atom className="w-5 h-5 text-amber-600" />
                        B. La Friabilité (Sablage)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Dans les pâtes sèches (Sablés, Brisée), le jaune a un rôle mécanique.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Action :</strong> Le gras du jaune enrobe la farine et empêche le gluten de se lier trop fort.</p>
                        <p><strong>Résultat :</strong> La pâte est friable et fondante ("sablée") au lieu d'être dure et élastique.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Usages Techniques & Cuisson */}
          <section id="usage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Usages Techniques & Cuisson</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Préparation</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Fonction</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Détails</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Crème Anglaise</td>
                    <td className="p-4 border-b border-white/5">Épaississant</td>
                    <td className="p-4 border-b border-white/5">Cuisson à la nappe (84°C). Si on dépasse, le jaune coagule en grumeaux.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pâte à Bombe</td>
                    <td className="p-4 border-b border-white/5">Foisonnant</td>
                    <td className="p-4 border-b border-white/5">Sirop de sucre cuit versé sur jaunes fouettés. Base des mousses chocolat riches.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Dorure</td>
                    <td className="p-4 border-b border-white/5">Colorant</td>
                    <td className="p-4 border-b border-white/5">Appliqué pur (ou dilué avec un peu de crème), il donne une coloration intense à la cuisson.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Le Labo du Chef */}
          <section id="labo" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Pièges à éviter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        La "Brûlure" par le Sucre
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                        Le sucre absorbe l'eau. Si vous versez du sucre sur des jaunes sans fouetter immédiatement, le jaune "cuit" chimiquement et forme des petits grains durs insolubles.
                    </p>
                    <p className="text-gray-400 text-sm font-bold">Règle : On ne mélange sucre et jaunes qu'au dernier moment !</p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Congélation Impossible
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Le jaune pur ne se congèle pas (il devient gélatineux). Pour le congeler, il faut le mélanger avec 10% de sucre (ou de sel) pour protéger sa structure.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default JauneOeufPage;