import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Layers, ShieldCheck, Snowflake } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Oeuf Entier", // ex: "La Farine"
  category: "Technologie - Oeuf",
  description: "Fiche technique détaillée.",
  image: "https://www.framboizeinthekitchen.com/wp-content/uploads/2018/04/oeufs.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const OeufEntierPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique Approfondie : L'Œuf Entier (Ovomel) - Maison Dorée</title>
        <meta name="description" content="Tout savoir sur l'œuf entier en pâtisserie : anatomie, composition, propriétés de coagulation et règles d'hygiène." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://www.framboizeinthekitchen.com/wp-content/uploads/2018/04/oeufs.jpg" 
            alt="L'Œuf Entier" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique Approfondie : L'Œuf Entier (Ovomel)</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Carte d'Identité & Histoire */}
          <section id="histoire" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Carte d'Identité & Histoire : Le Miracle de la Nature</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                L'œuf de poule (Gallus gallus) est considéré comme la protéine de référence dans le monde alimentaire (Valeur Biologique 100). C'est une cellule géante, stérile à la ponte, conçue pour protéger et nourrir un embryon.
              </p>
              <p>
                <strong>Symbolique et Histoire :</strong> Depuis l'Antiquité, l'œuf est le symbole de la vie et de la perfection. En cuisine française, il est le pilier central. On dit souvent qu'il est <strong>"le ciment de la pâtisserie"</strong>.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <ChefHat className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote du Chef (Les 100 Plis) :
                </h4>
                <p className="text-sm text-gray-400">
                    Saviez-vous que la toque traditionnelle d'un chef cuisinier ou pâtissier comporte <strong>100 plis</strong> ? La légende gastronomique raconte que chaque pli représente une façon technique de cuire un œuf. C'était historiquement l'épreuve de maîtrise absolue pour les compagnons : savoir gérer la coagulation de l'œuf sous toutes ses formes (brouillé, mollet, dur, poché, frit, en crème, en flan...).
                </p>
              </div>
            </div>
          </section>

          {/* 2. Anatomie Détaillée */}
          <section id="anatomie" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Layers className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Anatomie Détaillée : L'Architecture de l'Œuf</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                L'œuf n'est pas un liquide simple. C'est une structure complexe composée de plusieurs barrières de protection.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Partie</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Description</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Fonction</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">La Coquille (10%)</td>
                    <td className="p-4 border-b border-white/5">Composée de carbonate de calcium. Elle est poreuse (7000 à 10000 pores) pour laisser passer l'air.</td>
                    <td className="p-4 border-b border-white/5">Barrière physique. Elle est recouverte d'une cuticule invisible qui empêche les bactéries d'entrer.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Les Membranes Coquillières</td>
                    <td className="p-4 border-b border-white/5">Deux fines peaux sous la coquille.</td>
                    <td className="p-4 border-b border-white/5">Barrière bactérienne secondaire.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">La Chambre à Air</td>
                    <td className="p-4 border-b border-white/5">Poche d'air située au gros bout de l'œuf.</td>
                    <td className="p-4 border-b border-white/5">Indicateur de fraîcheur : plus l'œuf vieillit, plus l'eau s'évapore et plus cette chambre grandit.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Blanc (Albumen - 60%)</td>
                    <td className="p-4 border-b border-white/5">Solution aqueuse de protéines (Ovalbumine).</td>
                    <td className="p-4 border-b border-white/5">Protection hydrique et amortisseur de chocs.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Les Chalazes</td>
                    <td className="p-4 border-b border-white/5">Filaments blancs torsadés attachés au jaune.</td>
                    <td className="p-4 border-b border-white/5">Ils maintiennent le jaune bien centré au milieu du blanc pour le protéger des chocs.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Le Jaune (Vitellus - 30%)</td>
                    <td className="p-4 border-b border-white/5">Cellule riche en lipides et nutriments.</td>
                    <td className="p-4 border-b border-white/5">Réserve d'énergie.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Composition Biochimique */}
          <section id="composition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Atom className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Composition Biochimique (L'Œuf Entier Mélangé)</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                Lorsque l'on casse un œuf entier et qu'on le bat (ce qu'on appelle "l'Ovomel" en industrie), on obtient un mélange équilibré aux propriétés uniques.
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
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">75 %</td>
                    <td className="p-4 border-b border-white/5">L'œuf est majoritairement de l'eau. Dans une pâte (comme la pâte à choux), l'œuf sert donc aussi à hydrater la farine.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Protéines</td>
                    <td className="p-4 border-b border-white/5">13 %</td>
                    <td className="p-4 border-b border-white/5">Un équilibre parfait d'acides aminés essentiels. Ce sont elles qui assurent la coagulation (le durcissement à la cuisson).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lipides (Graisses)</td>
                    <td className="p-4 border-b border-white/5">10 - 11 %</td>
                    <td className="p-4 border-b border-white/5">Tout le gras vient du jaune. Ce sont des lipides émulsionnés très digestes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Glucides</td>
                    <td className="p-4 border-b border-white/5 text-xs">&lt; 1 %</td>
                    <td className="p-4 border-b border-white/5">L'œuf ne contient quasiment pas de sucre.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Minéraux & Vitamines</td>
                    <td className="p-4 border-b border-white/5">1 %</td>
                    <td className="p-4 border-b border-white/5">Riche en Fer, Phosphore, Vitamines A, D, E et B12.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Propriétés Physico-Chimiques */}
          <section id="proprietes" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Propriétés Physico-Chimiques : Pourquoi ça marche ?</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                L'œuf entier possède des propriétés techniques différentes du blanc seul ou du jaune seul. C'est la synergie des deux.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                         <Layers className="w-5 h-5 text-blue-400" />
                        A. La Coagulation (Le "Liant")
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est la propriété principale de l'œuf entier. Sous l'effet de la chaleur, les protéines se déroulent et se lient entre elles pour former un réseau tridimensionnel qui piège l'eau. Le liquide devient gel.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400 bg-white/5 p-4 rounded-sm">
                        <p className="font-bold text-[#D4AF37] mb-2">Plage de Température :</p>
                        <p>La coagulation n'est pas instantanée.</p>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Début de coagulation (opacité) : <strong>62°C</strong>.</li>
                            <li>Coagulation ferme (Flan) : <strong>70°C à 80°C</strong>.</li>
                            <li>Coagulation totale et risque de synérèse : <strong>&gt; 84°C</strong>.</li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        <strong>Application :</strong> C'est l'œuf entier qui fait tenir un Flan Pâtissier, une Crème Prise ou un Cake. Sans œufs, la farine seule donnerait un bloc compact et sec. L'œuf crée une structure souple.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                        <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                             <Lightbulb className="w-5 h-5 text-yellow-400" />
                            B. Le Pouvoir Colorant & Aromatique
                        </h3>
                        <div className="space-y-3 text-sm text-gray-400">
                            <p><strong>Réaction de Maillard :</strong> Les protéines de l'œuf réagissent fortement avec les sucres de la recette à la cuisson (dès 140°C) pour créer la croûte dorée et le goût de "biscuit".</p>
                            <p><strong>La Dorure :</strong> L'œuf entier battu, passé au pinceau sur une brioche ou un chausson aux pommes, donne une brillance (vernis) et une couleur ambrée appétissante.</p>
                        </div>
                    </div>

                    <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                         <h3 className="text-xl font-serif text-white mb-2">C. L'Effet de Masse (Densité)</h3>
                         <p className="text-gray-400 text-sm">
                            Contrairement au blanc qui allège (foisonnement), l'œuf entier apporte de la "mâche" et de la densité. Un gâteau riche en œufs entiers (type Quatre-Quarts) sera fondant et dense.
                         </p>
                    </div>
                </div>
            </div>
          </section>

          {/* 5. Classification */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">5. Classification & Lecture du Code (Traçabilité)</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">En Europe, chaque œuf est tamponné. Pour un pâtissier qui vend ses produits, la traçabilité est une obligation légale.</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37] w-16 text-center">Code</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200 w-40">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white text-center text-xl">0</td>
                    <td className="p-4 border-b border-white/5 font-bold text-green-400">Biologique (Bio)</td>
                    <td className="p-4 border-b border-white/5">Poules en plein air, alimentation bio (sans OGM). Jaune souvent plus pâle (car pas de colorant dans l'alimentation).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white text-center text-xl">1</td>
                    <td className="p-4 border-b border-white/5 font-bold text-green-200">Plein Air</td>
                    <td className="p-4 border-b border-white/5">Accès à l'extérieur.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white text-center text-xl">2</td>
                    <td className="p-4 border-b border-white/5">Au Sol</td>
                    <td className="p-4 border-b border-white/5">Poules enfermées dans un hangar, mais libres de marcher au sol.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white text-center text-xl">3</td>
                    <td className="p-4 border-b border-white/5 text-red-400">En Cage (Batterie)</td>
                    <td className="p-4 border-b border-white/5">Poules en cages superposées. Souvent utilisés pour les œufs cassés industriels (bidons).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white text-center">Label</td>
                    <td className="p-4 border-b border-white/5 font-bold text-red-600">Label Rouge</td>
                    <td className="p-4 border-b border-white/5">Certification de qualité supérieure (alimentation 100% végétale, petits groupes). Meilleure tenue du blanc.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">Le Calibrage Pâtissier</h4>
                <p className="text-sm text-gray-400 mb-2">Pour la régularité des recettes, on trie les œufs par poids.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
                    <div className="p-3 bg-white/5 rounded-sm">
                        <span className="block text-[#D4AF37] font-bold">S (Small)</span>
                        <span className="text-xs text-gray-400">Moins de 53g</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-sm border border-[#D4AF37]">
                        <span className="block text-[#D4AF37] font-bold">M (Moyen)</span>
                        <span className="text-xs text-gray-400">De 53g à 63g</span>
                        <p className="text-[10px] text-gray-500 mt-1 italic">Standard : 50g sans coquille</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-sm">
                        <span className="block text-[#D4AF37] font-bold">L (Large)</span>
                        <span className="text-xs text-gray-400">De 63g à 73g</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-sm">
                        <span className="block text-[#D4AF37] font-bold">XL (Très Gros)</span>
                        <span className="text-xs text-gray-400">Plus de 73g</span>
                    </div>
                </div>
            </div>
          </section>

          {/* 6. Le Labo du Chef */}
          <section id="labo" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">6. Le Labo du Chef : Hygiène & Stockage</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">L'œuf est classé comme "Denrée périssable à haut risque".</p>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        A. Le Danger Microbiologique (Salmonelle)
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">
                        Les salmonelles sont des bactéries présentes naturellement dans le tube digestif de la poule et sur la coquille (via les fientes).
                    </p>
                    <ul className="space-y-3 text-xs text-gray-400">
                        <li><strong>Règle d'Or N°1 :</strong> Ne JAMAIS laver les œufs. En lavant un œuf, vous détruisez la cuticule protectrice. La coquille devient une éponge et l'eau de lavage transporte les bactéries de l'extérieur vers l'intérieur de l'œuf.</li>
                        <li><strong>Règle d'Or N°2 :</strong> Le Cassage. On casse l'œuf à plat sur le plan de travail, jamais sur le bord du récipient. Cela évite que des micro-éclats de coquille souillés ne tombent dans votre crème.</li>
                        <li><strong>Règle d'Or N°3 :</strong> Lavage des mains. On se lave les mains immédiatement après avoir manipulé des coquilles d'œufs.</li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        B. Le Test de Fraîcheur (Densité)
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">Comment savoir si un œuf est frais sans le casser ? Plongez-le dans un grand verre d'eau.</p>
                    <ul className="space-y-2 text-xs text-gray-400">
                        <li><span className="text-green-400 font-bold">Il coule à pic :</span> Il est extra-frais (Ponte &lt; 4 jours). La chambre à air est minuscule. Idéal pour les œufs pochés ou à la coque.</li>
                        <li><span className="text-yellow-400 font-bold">Il flotte au milieu (debout) :</span> Il a 2 à 3 semaines. Bon pour la pâtisserie cuite ou les œufs durs.</li>
                        <li><span className="text-red-400 font-bold">Il flotte à la surface (comme un bouchon) :</span> À JETER. Il a pourri, il a produit du gaz (sulfure d'hydrogène) qui le fait flotter.</li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Snowflake className="w-4 h-4 text-blue-400" />
                        C. Conservation
                    </h3>
                     <ul className="space-y-3 text-xs text-gray-400">
                        <li><strong>Entier (Coquille) :</strong> À température constante (idéalement 14-16°C ou au frigo à 4°C). DCR (Date de Consommation Recommandée) est de 28 jours après la ponte.</li>
                        <li><strong>Cassé (Ovomel) :</strong> Une fois cassé, l'œuf entier se conserve 24h maximum au frigo, filmé hermétiquement.</li>
                        <li><strong>Congélation :</strong> L'œuf entier battu (mélangé) se congèle très bien. (Contrairement au jaune seul qui gélifie).</li>
                    </ul>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default OeufEntierPage;