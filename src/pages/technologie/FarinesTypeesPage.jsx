import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Wheat, Sprout, Leaf, Scale } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Les Farines Typées & Anciennes", // ex: "La Farine"
  category: "Technologie - Farines",
  description: "Découvrez les farines typées (T80, T110, T150), le seigle et les blés anciens (Épeautre, Kamut, Sarrasin) en pâtisserie.",
  image: "/images/recipes/la-pate-a-brioche.png", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const FarinesTypeesPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Les Farines Typées & Anciennes - Pastry Power</title>
        <meta name="description" content="Découvrez les farines typées (T80, T110, T150), le seigle et les blés anciens (Épeautre, Kamut, Sarrasin) en pâtisserie." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/recipes/la-pate-a-brioche.png" 
            alt="Sélection de farines anciennes et typées" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Les Farines Typées & Anciennes</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Introduction */}
          <section id="introduction" className="relative pl-8 md:pl-0">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Introduction : Le Retour du Goût</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light">
              <p className="mb-6">
                Pendant des siècles, la farine blanche de froment a régné en maître absolu. Aujourd'hui, la quête de saveurs "rustiques" et d'une meilleure digestibilité remet sur le devant de la scène des céréales oubliées.
              </p>
              <p>
                Ces farines dites <strong>"vivantes"</strong> demandent une adaptation technique majeure. Plus riches en son et en germe, elles absorbent l'eau différemment, fermentent plus vite et offrent des textures singulières, souvent moins élastiques mais plus friables et aromatiques.
              </p>
            </div>
          </section>

          {/* 2. Les Farines de Blé "Typées" */}
          <section id="typees" className="relative pl-8 md:pl-0">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Les Farines de Blé "Typées" (T80 à T150)</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-300">
                <p>On parle de farine "typée" ou "bise" dès que le taux de cendres dépasse <strong>0.75%</strong>.</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">T80 (Bise)</strong> : L'équilibre parfait. Elle conserve le germe et une partie de l'assise protéique. Idéale pour les pâtes à tartes rustiques et les biscuits, apportant une couleur crème et un goût subtil.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">T110 (Complète)</strong> : Contient une grande partie du son. Elle absorbe beaucoup plus d'eau (+10% à +15%). Attention : les particules de son "cisaillement" le réseau de gluten, ce qui limite le développement (volume) des produits levés.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">T150 (Intégrale)</strong> : Le grain entier broyé. Saveur intense, texture dense et granuleuse. À utiliser impérativement en mélange (30% max) avec une farine de force pour éviter des produits trop compacts ("briques").</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 flex flex-col justify-center">
                 <h4 className="font-serif text-[#D4AF37] text-xl mb-4 text-center">Impact Technique</h4>
                 <p className="text-sm text-gray-400 text-center italic mb-6">"Plus le Type est élevé, plus l'hydratation doit augmenter et plus le pétrissage doit être doux."</p>
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs uppercase tracking-widest text-white mb-1">
                        <span>Force (W)</span>
                        <span>Absorption d'eau</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-red-500/50 w-1/2"></div>
                        <div className="h-full bg-green-500/50 w-1/2"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Diminue avec le Type</span>
                        <span>Augmente avec le Type</span>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* 3. Le Seigle */}
          <section id="seigle" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Wheat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Le Seigle (Secale cereale)</h2>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-sm border-l-2 border-[#D4AF37]">
              <p className="text-gray-300 leading-relaxed mb-4">
                Seule céréale panifiable avec le blé, mais son comportement est radicalement différent. Son gluten est pauvre en gluténines (élasticité). Il ne forme pas un véritable réseau élastique mais une structure "gommeuse" et collante grâce aux <strong>pentosanes</strong> (mucilages).
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                   <h4 className="text-white font-bold mb-2 text-sm uppercase">Classification</h4>
                   <p className="text-sm text-gray-400">T70 (Blanc), T130 (Complet), T170 (Intégral).</p>
                </div>
                <div>
                   <h4 className="text-white font-bold mb-2 text-sm uppercase">Usage Pâtissier</h4>
                   <p className="text-sm text-gray-400">Indispensable au <strong>Pain d'épices</strong> (rétention d'humidité = moelleux longue durée). Excellent en tourtes et biscuits sablés pour son goût de miel et d'épices.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Les Blés Anciens & Autres */}
          <section id="anciens" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Sprout className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Les "Anciens" : Épeautre, Kamut, Sarrasin</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Grand Epeautre */}
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                    <h3 className="text-lg font-serif text-white mb-2">Grand Épeautre</h3>
                    <p className="text-xs text-[#D4AF37] mb-4 uppercase tracking-wider">Triticum spelta</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Ancêtre direct du blé. Panifiable. Goût prononcé de noix. S'utilise comme une T55 mais son gluten est plus <strong>fragile</strong> : il demande un pétrissage lent et court pour ne pas "lâcher" (devenir liquide).
                    </p>
                </div>

                {/* Petit Epeautre */}
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                    <h3 className="text-lg font-serif text-white mb-2">Petit Épeautre (Engrain)</h3>
                    <p className="text-xs text-[#D4AF37] mb-4 uppercase tracking-wider">Triticum monococcum</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        La céréale originelle. Très faible teneur en gluten. Donne des pâtes très friables, sablées, à la couleur jaune or et aux arômes complexes. Difficile à faire lever, excellent pour les <strong>pâtes sèches</strong>.
                    </p>
                </div>

                {/* Sarrasin */}
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                    <h3 className="text-lg font-serif text-white mb-2">Sarrasin (Blé Noir)</h3>
                    <p className="text-xs text-[#D4AF37] mb-4 uppercase tracking-wider">Polygonaceae</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Pseudo-céréale, naturellement <strong>sans gluten</strong>. Saveur typée, terreuse, amère et noisettée. Texture dense et cassante. Incontournable en Bretagne (Sablés, Galettes) ou associé au chocolat et aux fruits rouges.
                    </p>
                </div>
            </div>
          </section>

          {/* 5. L'Anecdote Historique */}
          <section id="anecdote-historique" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">5. L'Anecdote Historique</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light">
              <p>
                Le Sarrasin (Blé Noir) n'est pas du tout un blé ! C'est une plante de la famille de l'oseille et de la rhubarbe (les Polygonacées). Il a été rapporté des Croisades (d'où son nom faisant référence aux "Sarrasins") et s'est implanté en Bretagne au <strong>15ème siècle</strong> grâce à la Duchesse Anne, car il poussait sur des sols pauvres et granitiques où le blé mourait. Il a sauvé la région de la famine, devenant l'emblème de la <strong>galette bretonne</strong>.
              </p>
            </div>
          </section>

          {/* 6. Tableau Récapitulatif */}
          <section id="tableau" className="relative pl-8 md:pl-0">
            <div className="flex items-center gap-4 mb-8">
              <Leaf className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">6. Tableau : Comparatif Technique & Usages</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Variété</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Force Boulangère</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Hydratation</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Saveurs Dominantes</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage Idéal</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Blé T80-T150</td>
                    <td className="p-4 border-b border-white/5">Moyenne à Faible</td>
                    <td className="p-4 border-b border-white/5">Élevée (+10 à 20%)</td>
                    <td className="p-4 border-b border-white/5">Rustique, Céréale</td>
                    <td className="p-4 border-b border-white/5">Fonds de tarte, Cookies, Cakes "Santé"</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Seigle</td>
                    <td className="p-4 border-b border-white/5">Nulle (Pentosanes)</td>
                    <td className="p-4 border-b border-white/5">Très Élevée (Visqueux)</td>
                    <td className="p-4 border-b border-white/5">Miel, Épices, Terre</td>
                    <td className="p-4 border-b border-white/5">Pain d'épices, Tourtes, Crackers</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Grand Épeautre</td>
                    <td className="p-4 border-b border-white/5">Moyenne (Fragile)</td>
                    <td className="p-4 border-b border-white/5">Normale</td>
                    <td className="p-4 border-b border-white/5">Noix, Noisette</td>
                    <td className="p-4 border-b border-white/5">Pâte à choux, Brioche "ancienne", Sablés</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Petit Épeautre</td>
                    <td className="p-4 border-b border-white/5">Très Faible</td>
                    <td className="p-4 border-b border-white/5">Faible</td>
                    <td className="p-4 border-b border-white/5">Rustique intense</td>
                    <td className="p-4 border-b border-white/5">Pâtes sablées friables, Biscuits secs</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sarrasin</td>
                    <td className="p-4 border-b border-white/5">Nulle (Sans Gluten)</td>
                    <td className="p-4 border-b border-white/5">Normale</td>
                    <td className="p-4 border-b border-white/5">Terre, Amer, Noisette</td>
                    <td className="p-4 border-b border-white/5">Galettes, Sablés Bretons, Financiers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default FarinesTypeesPage;