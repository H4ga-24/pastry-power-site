import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Thermometer } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Saccharose", // ex: "La Farine"
  category: "Technologie - Sucres",
  description: "Fiche technique détaillée.",
  image: "/images/saccharose.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const SaccharosePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Le Saccharose (Sucre Blanc) - Maison Dorée</title>
        <meta name="description" content="Tout savoir sur le saccharose : histoire, propriétés chimiques, variétés et cuisson du sucre." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://img.passeportsante.net/1200x675/2021-05-03/i105315-saccharose-nu.webp" 
            alt="Le Saccharose" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Le Saccharose (Sucre Blanc)</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Histoire & Origine */}
          <section id="histoire" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : L'Or Blanc des Apothicaires</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-8">
              <p>
                Le sucre de table, scientifiquement appelé <strong>Saccharose</strong>, est extrait de deux plantes principales : la <strong>Canne à sucre</strong> (climat tropical) et la <strong>Betterave sucrière</strong> (climat tempéré).
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Au Moyen Âge, le sucre n'était pas un aliment de plaisir mais une épice rare et un médicament. Il était vendu à prix d'or chez l'apothicaire (l'ancêtre du pharmacien) pour soigner les maux de poitrine et "donner de la vigueur". On l'appelait "l'Or Blanc".
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">Le Blocus Continental :</h4>
                <p className="text-sm text-gray-400">
                    C'est Napoléon Bonaparte qui a démocratisé le sucre en Europe. Au début du 19ème siècle, à cause du blocus anglais empêchant l'importation de canne des Antilles, il a ordonné de planter des milliers d'hectares de betteraves en France (suite à la découverte du procédé d'extraction par Benjamin Delessert). C'est pour cela que la France est aujourd'hui le premier producteur mondial de sucre de betterave.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Analyse & Composition */}
          <section id="composition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Atom className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Analyse & Composition Biochimique</h2>
            </div>
            <p className="text-gray-300 mb-6 font-light text-lg">
                Le sucre blanc raffiné est l'un des produits les plus purs de l'industrie alimentaire.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Taux</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Saccharose</td>
                    <td className="p-4 border-b border-white/5">99,7% min.</td>
                    <td className="p-4 border-b border-white/5">C'est une molécule "disaccharide", composée de deux briques liées ensemble : une molécule de Glucose + une molécule de Fructose.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Eau</td>
                    <td className="p-4 border-b border-white/5">{'<'} 0,06%</td>
                    <td className="p-4 border-b border-white/5">Le sucre est quasi anhydre (sans eau). C'est pour cela qu'il est un excellent conservateur (les bactéries ne peuvent pas s'y développer).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Impuretés</td>
                    <td className="p-4 border-b border-white/5">Traces</td>
                    <td className="p-4 border-b border-white/5">Dans le sucre blanc, elles sont nulles. Dans les sucres roux (Cassonade), il reste des résidus de mélasse qui apportent couleur et goût.</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Les 4 Super-Pouvoirs</h2>
            </div>
            <p className="text-gray-300 mb-8 font-light text-lg">En pâtisserie, le sucre ne sert pas qu'à sucrer. C'est un agent de texture indispensable.</p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">A. Le Pouvoir Sucrant (POD)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        C'est l'étalon de mesure de la sensation sucrée. Le <strong>Saccharose</strong> est la référence mondiale : <strong>POD = 100</strong>. Il sert de base pour comparer les autres (ex: Fructose = 130, Glucose = 50).
                    </p>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">B. Le Pouvoir Hygroscopique (Moelleux)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Le sucre est un aimant à eau. Il la capture et la retient dans la pâte.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic">
                        <strong>Conséquence :</strong> Dans un cake ou une brioche, le sucre empêche l'eau de s'évaporer trop vite à la cuisson. C'est lui qui garantit le moelleux et prolonge la conservation. Un gâteau sans sucre sèche en 24h.
                    </p>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">C. Le Pouvoir Anti-Congelant (PAC)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Le sucre empêche l'eau de geler en un bloc de glace dur.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic">
                        <strong>Usage Glacerie :</strong> Plus il y a de sucre dans un sorbet, plus il reste souple et spatulable à -18°C. C'est capital pour l'onctuosité.
                    </p>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">D. La Coloration (Maillard & Caramel)</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Réaction de Maillard :</strong> Dès 140°C, en présence de protéines (farine, œufs), le sucre brunit et crée des arômes de biscuit.</span>
                        </li>
                        <li className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Caramélisation :</strong> À partir de 160°C, le sucre fond et brunit seul, développant de l'amertume.</span>
                        </li>
                    </ul>
                </div>
            </div>
          </section>

          {/* 4. Classification & Variétés */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification & Variétés</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Nom</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Origine/Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usages</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre Semoule</td>
                    <td className="p-4 border-b border-white/5">Betterave ou Canne</td>
                    <td className="p-4 border-b border-white/5">Grain moyen, fond vite. Le standard.</td>
                    <td className="p-4 border-b border-white/5">Pâtisserie générale, Monter les blancs, Sirops.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre Glace</td>
                    <td className="p-4 border-b border-white/5">Broyage très fin</td>
                    <td className="p-4 border-b border-white/5">Contient 3% d'amidon (anti-mottant). Poudre impalpable.</td>
                    <td className="p-4 border-b border-white/5">Décors, Macarons, Pâtes sablées fines, Glaçage.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Cassonade</td>
                    <td className="p-4 border-b border-white/5">Canne (Roux)</td>
                    <td className="p-4 border-b border-white/5">Sucre cristallisé avec un reste de mélasse. Goût rhum/vanille.</td>
                    <td className="p-4 border-b border-white/5">Crumbles, Cookies, Finitions croustillantes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Vergeoise</td>
                    <td className="p-4 border-b border-white/5">Betterave (Sirop recuit)</td>
                    <td className="p-4 border-b border-white/5">Texture pâteuse et humide. Goût caramel brûlé typique du Nord.</td>
                    <td className="p-4 border-b border-white/5">Spéculoos, Gaufres, Tartes au sucre.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre Grain (Perlé)</td>
                    <td className="p-4 border-b border-white/5">Agglomérat dur</td>
                    <td className="p-4 border-b border-white/5">Ne fond pas à la cuisson. Croquant.</td>
                    <td className="p-4 border-b border-white/5">Chouquettes, Tropéziennes, Gaufres Liégeoises.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Le Labo du Chef */}
          <section id="labo" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Les Cuissons du Sucre</h2>
            </div>
            <p className="text-gray-300 mb-6 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-[#D4AF37]" />
                Maîtriser la température du sirop de sucre (Sucre + Eau) est la base de la confiserie.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Stade</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Température</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Test visuel</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Filet</td>
                    <td className="p-4 border-b border-white/5">105°C - 110°C</td>
                    <td className="p-4 border-b border-white/5">Forme un fil entre les doigts.</td>
                    <td className="p-4 border-b border-white/5">Fruits confits.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Petit Boulé</td>
                    <td className="p-4 border-b border-white/5">116°C - 118°C</td>
                    <td className="p-4 border-b border-white/5">Une boule molle se forme dans l'eau froide.</td>
                    <td className="p-4 border-b border-white/5">Meringue Italienne, Pâte à bombe.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Gros Boulé</td>
                    <td className="p-4 border-b border-white/5">121°C</td>
                    <td className="p-4 border-b border-white/5">Une boule ferme et élastique.</td>
                    <td className="p-4 border-b border-white/5">Caramels mous.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Grand Cassé</td>
                    <td className="p-4 border-b border-white/5">145°C - 150°C</td>
                    <td className="p-4 border-b border-white/5">Le sucre devient dur et cassant comme du verre.</td>
                    <td className="p-4 border-b border-white/5">Berlingots, Sucettes, Décors.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Caramel</td>
                    <td className="p-4 border-b border-white/5">160°C - 180°C</td>
                    <td className="p-4 border-b border-white/5">Le sucre brunit (clair à foncé).</td>
                    <td className="p-4 border-b border-white/5">Nappages, Aromatisation, Nougatine.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Stockage & Ennemis */}
          <section id="stockage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">6. Stockage & Ennemis</h2>
            </div>
            
            <div className="grid gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-2">L'Humidité (Ennemi N°1) :</h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Le sucre "motte" (devient un bloc de pierre) s'il prend l'humidité puis sèche. Les sucres bruns (Vergeoise) sont les plus fragiles : stockez-les en boîte hermétique au frais.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic">
                        <strong>Astuce de Grand-Mère :</strong> Pour ramollir une cassonade devenue dure, mettez un morceau de pomme ou de pain dans le bocal pendant 24h. L'humidité du fruit va assouplir le sucre.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-orange-500/50">
                    <h3 className="text-white font-bold mb-2">Le "Massage" du sucre cuit :</h3>
                    <p className="text-gray-400 text-sm">
                        Lors de la cuisson d'un caramel, si des impuretés tombent dans la casserole, le sirop recristallise (il devient blanc et granuleux). C'est fichu. Ajoutez toujours un trait de jus de citron ou de glucose pour éviter cela.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default SaccharosePage;