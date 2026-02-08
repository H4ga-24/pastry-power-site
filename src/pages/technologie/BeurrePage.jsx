import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Thermometer, MapPin } from 'lucide-react';
// 👇 COLLE CE BLOC AU DÉBUT DU FICHIER BEURRE 👇
export const recipeData = {
  title: "Le Beurre",
  category: "Technologie - Corps Gras", // Important: le mot "Gras" doit être là
  description: "Fiche technique : Composition, points de fusion et rôles en pâtisserie.",
  image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=800",
  prepTime: "Théorie",
  difficulty: "Niveau 1"
};
// 👆 FIN DU BLOC 👆
const BeurrePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Le Beurre - Maison Dorée</title>
        <meta name="description" content="Tout savoir sur le beurre en pâtisserie : origine, composition, états physiques et réaction de Maillard." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://producteurslaitiersducanada.ca/sites/default/files/styles/full_width_large/public/CONSU19-009_DFC_ways_to_make_your_life_butter_IMAGE_Leading_1068x711_0.jpg" 
            alt="Le Beurre" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Le Beurre</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La "Graisse des Pauvres" devenue Or</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Le beurre est le résultat du <strong>barattage</strong> de la crème du lait. Il est connu depuis l'Antiquité, mais son statut a bien changé.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Au Moyen Âge, le beurre était considéré comme la <strong>"graisse des pauvres"</strong> (les riches utilisaient l'huile ou le saindoux) et il était interdit par l'Église pendant le Carême (car d'origine animale). Pour avoir le droit d'en manger, il fallait payer une taxe spéciale à l'Église. C'est avec l'argent de cette taxe que fut financée la construction de la célèbre <strong>"Tour de Beurre"</strong> de la cathédrale de Rouen !
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    AOC/AOP :
                </h4>
                <p className="text-sm text-gray-400">
                    La France possède des terroirs d'exception protégés. Le <strong>Beurre Charentes-Poitou (AOP)</strong> est le chouchou des touriers pour son goût de noisette et sa texture ferme, tandis que le <strong>Beurre d'Isigny (AOP)</strong> est prisé pour son onctuosité et sa couleur jaune d'or (riche en bêta-carotène grâce à l'herbe normande).
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
            <p className="text-gray-300 mb-6 text-lg font-light">
                Le beurre est une émulsion solide. Contrairement à la crème (qui est du gras dans de l'eau), le beurre est de l'eau dispersée dans du gras (<strong>Water in Oil</strong>).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Proportion</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Rôle & Propriétés</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lipides (Matière Grasse)</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">82% min.</td>
                    <td className="p-4 border-b border-white/5">C'est la loi en France (80% pour le demi-sel). Apporte le fondant, la structure et friabilité.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Eau (Babeurre résiduel)</td>
                    <td className="p-4 border-b border-white/5">16% max.</td>
                    <td className="p-4 border-b border-white/5">Contient encore un peu de lactose. Si on l'élimine, on obtient du beurre clarifié.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Matière Sèche (ESD)</td>
                    <td className="p-4 border-b border-white/5">2%</td>
                    <td className="p-4 border-b border-white/5">Protéines (Caséine) et Lactose. Ce sont eux qui brûlent (noircissent) à la cuisson et donnent le goût du "Beurre Noisette".</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Les 3 États</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                La maîtrise du beurre est une histoire de température. Il change de rôle selon son état.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-blue-400" />
                        A. Solide / Froid
                    </h3>
                    <p className="text-[#D4AF37] text-sm mb-4 italic">(Le Feuilletage)</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Entre <strong>4°C et 14°C</strong>, le beurre est dur mais plastique.
                    </p>
                    <div className="text-sm text-gray-400">
                         <strong>Usage :</strong> C'est l'état requis pour le <strong>Tourage</strong> (Pâte feuilletée, Croissant). Le beurre sert d'isolant : il forme des couches imperméables entre les feuilles de détrempe. À la cuisson, l'eau de la pâte s'évapore mais bute sur le gras, ce qui soulève les feuillets.
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-yellow-400" />
                        B. Pommade
                    </h3>
                    <p className="text-[#D4AF37] text-sm mb-4 italic">(Le Créclage)</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Entre <strong>18°C et 22°C</strong>, le beurre est mou, lisse et souple.
                    </p>
                    <div className="text-sm text-gray-400">
                         <strong>Usage :</strong> C'est l'état pour les Cakes et Pâtes Sablées. On le "crème" avec le sucre. Les cristaux de sucre s'enfoncent dans le mou, créant des micro-bulles d'air. C'est ce qui donne une texture aérée et fondante après cuisson.
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-400" />
                        C. Liquide / Fondu
                    </h3>
                    <p className="text-[#D4AF37] text-sm mb-4 italic">(Le Moelleux)</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Au-delà de <strong>32°C - 35°C</strong>, la structure cristalline s'effondre.
                    </p>
                    <div className="text-sm text-gray-400">
                         <strong>Usage :</strong> Gâteaux de voyage (Madeleines, Financiers). Ici, le beurre ne structure pas, il lubrifie. Il enrobe la farine et le gluten pour apporter un moelleux extrême, mais le gâteau sera plus dense qu'avec un beurre crémé.
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Classification */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification : Quel beurre pour quoi ?</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">Le pro ne choisit pas son beurre au hasard.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type de Beurre</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage Recommandé</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre Doux Standard</td>
                    <td className="p-4 border-b border-white/5">82% MG. Texture fondante.</td>
                    <td className="p-4 border-b border-white/5">Crèmes, Ganaches, Finitions.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre de Tourage (Sec)</td>
                    <td className="p-4 border-b border-white/5">84% MG. Point de fusion plus élevé (34-36°C). Plus dur, plus plastique.</td>
                    <td className="p-4 border-b border-white/5">Croissants, Feuilletage. Il ne fond pas trop vite pendant le laminage et ne se mélange pas à la pâte. <strong>Indispensable en été !</strong></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre Clarifié (Ghee)</td>
                    <td className="p-4 border-b border-white/5">100% MG (Eau et Petit-lait retirés).</td>
                    <td className="p-4 border-b border-white/5">Cuissons haute température. Comme il n'a plus de protéines, il ne brûle pas (point de fumée 250°C).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre Demi-Sel</td>
                    <td className="p-4 border-b border-white/5">0,5% à 3% de sel.</td>
                    <td className="p-4 border-b border-white/5">Sablés Bretons, Caramel. Le sel est un exhausteur de goût puissant et un conservateur naturel.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : La Réaction de Maillard</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 mb-6">
                <p>Pourquoi le <strong>Beurre Noisette</strong> est-il si bon ? C'est une réaction chimique précise. En chauffant le beurre, l'eau s'évapore (ça chante). Une fois l'eau partie (vers 120°C), les protéines du lait (caséine) et le sucre (lactose) commencent à roussir.</p>
            </div>

            <div className="grid gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Le danger :
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Si on pousse trop loin (Beurre Noir), les protéines carbonisent et deviennent amères et toxiques.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                         <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Astuce Pro :
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Pour arrêter la cuisson d'un beurre noisette instantanément, plongez le fond de la casserole dans un bac d'eau glacée ou versez-le immédiatement dans un récipient froid en le filtrant.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default BeurrePage;