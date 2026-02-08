import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, Droplets, Flame, Thermometer } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Les Chocolats de Couverture", // ex: "La Farine"
  category: "Technologie - Chocolat (Tech)",
  description: "Fiche technique détaillée.",
  image: "https://i0.wp.com/lapistacheraie.wordpress.com/wp-content/uploads/2015/06/choco5.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const ChocolatsCouverturePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Les Chocolats de Couverture - Maison Dorée</title>
        <meta name="description" content="Fiche technique sur les chocolats de couverture : définition, tempérage, fluidité et règles d'or pour un résultat professionnel." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://i0.wp.com/lapistacheraie.wordpress.com/wp-content/uploads/2015/06/choco5.jpg" 
            alt="Les Chocolats de Couverture" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Les Chocolats de Couverture</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Définition & Législation */}
          <section id="definition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Définition & Législation : Le "Vrai" Chocolat</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Tous les chocolats ne se valent pas. En usage professionnel, on n'utilise que du chocolat de "Couverture".
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#D4AF37]" />
                    La Règle d'Or (31%) :
                </h4>
                <p className="text-sm text-gray-400 mb-4">
                    Pour avoir le droit légal de s'appeler "Couverture", un chocolat doit contenir au minimum <strong>31% de beurre de cacao total</strong>.
                </p>
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Pourquoi ?</h4>
                <p className="text-sm text-gray-400">
                    C'est ce gras supplémentaire qui donne la <strong>fluidité nécessaire</strong> pour enrober des bonbons finement (d'où le nom "couvrir") et mouler des coques sans bulles d'air. Le chocolat de supermarché (à croquer) contient moins de beurre de cacao : il est pâteux et impossible à travailler proprement.
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
                Un chocolat de couverture est un mélange broyé très finement (moins de 20 microns).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Composition</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Noir</td>
                    <td className="p-4 border-b border-white/5">Pâte de Cacao + Sucre + Beurre de Cacao</td>
                    <td className="p-4 border-b border-white/5">Intense. Le % indiqué (ex: 70%) est la somme (Pâte + Beurre).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lait</td>
                    <td className="p-4 border-b border-white/5">Pâte + Sucre + Beurre + Poudre de Lait</td>
                    <td className="p-4 border-b border-white/5">Plus tendre, plus sucré. Contient des protéines lactiques et du gras de lait.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Blanc</td>
                    <td className="p-4 border-b border-white/5">Beurre de Cacao + Sucre + Poudre de Lait</td>
                    <td className="p-4 border-b border-white/5">0% de Cacao maigre. C'est techniquement du gras sucré. Il ne contient pas de théobromine (pas d'amertume).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Blond (Dulcey)</td>
                    <td className="p-4 border-b border-white/5">Chocolat Blanc "cuit"</td>
                    <td className="p-4 border-b border-white/5">Le sucre et le lait ont caramélisé (Réaction de Maillard). Goût biscuité.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Propriétés Physico-Chimiques */}
          <section id="temperage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Thermometer className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Le Tempérage</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                C'est la bête noire des apprentis. Le chocolat ne se contente pas de fondre et durcir. Il doit <strong>cristalliser</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-400" />
                        Le Polymorphisme
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Le beurre de cacao peut cristalliser sous 6 formes géométriques différentes. Une seule est stable et brillante : <strong>la forme Bêta (V)</strong>.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Flame className="w-5 h-5 text-orange-400" />
                        Le Tempérage (La Courbe)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est l'action mécanique et thermique (Chauffer {">"}  Refroidir {">"}  Réchauffer) qui force les molécules de gras à s'organiser en forme Bêta.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/10 p-4 rounded border border-green-500/20">
                    <h4 className="text-green-400 font-bold mb-2">Résultat</h4>
                    <p className="text-gray-400 text-sm">Un chocolat bien tempéré est brillant, cassant (le "Snap") et se démoule seul (il se rétracte).</p>
                </div>
                <div className="bg-red-900/10 p-4 rounded border border-red-500/20">
                    <h4 className="text-red-400 font-bold mb-2">Raté</h4>
                    <p className="text-gray-400 text-sm">Un chocolat mal tempéré est terne, mou, et présente des traces blanches (Fat Bloom).</p>
                </div>
            </div>
          </section>

          {/* 4. Classification par Fluidité */}
          <section id="fluidite" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Droplets className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification par Fluidité</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                Les fabricants indiquent souvent la fluidité par un système de "Gouttes" (💧).
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Fluidité</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Indice</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Faible</td>
                    <td className="p-4 border-b border-white/5 text-blue-400">💧</td>
                    <td className="p-4 border-b border-white/5">Ganaches, Mousses, Cuisson (Pépites). Pas besoin d'enrobage fin.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Standard</td>
                    <td className="p-4 border-b border-white/5 text-blue-400">💧💧💧</td>
                    <td className="p-4 border-b border-white/5">Polyvalent. Moulage de gros sujets, Mousse.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Haute</td>
                    <td className="p-4 border-b border-white/5 text-blue-400">💧💧💧💧💧</td>
                    <td className="p-4 border-b border-white/5">Enrobage fin, Pistolet. Très liquide pour faire des coques ultra-fines (Macarons, Bonbons).</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : L'Ennemi Mortel</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-red-500" />
                        L'Eau (Le "Seizing")
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Le chocolat est hydrophobe. Si une seule goutte d'eau tombe dans votre bol de chocolat fondu, le sucre absorbe l'eau et forme un sirop collant. Tout le bol "masse" instantanément et devient une brique dure et granuleuse.
                    </p>
                    <p className="text-gray-400 text-sm font-bold text-[#D4AF37]">
                        Astuce : C'est irrécupérable pour le moulage. Transformez-le en ganache ou en mousse.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-orange-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Flame className="w-4 h-4 text-orange-500" />
                        La Fonte
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Le chocolat brûle vite.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li><strong>Noir :</strong> Fondre à 50°C max.</li>
                        <li><strong>Lait / Blanc :</strong> Fondre à 45°C max (le lait brûle plus vite).</li>
                    </ul>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ChocolatsCouverturePage;