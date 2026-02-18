import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Droplets } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "La Crème (Fleurette & Liquide)", // ex: "La Farine"
  category: "Technologie - Crèmes",
  description: "Fiche technique détaillée.",
  image: "https://img.cuisineaz.com/1200x675/2020/12/16/i158469-creme-liquide.jpeg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
  isVip: true
};
// 👆 FIN DU BLOC 👆
const CremePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : La Crème (Fleurette & Liquide) - Maison Dorée</title>
        <meta name="description" content="Tout savoir sur la crème fleurette et liquide : origine, composition, foisonnement et usages techniques en pâtisserie." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://img.cuisineaz.com/1200x675/2020/12/16/i158469-creme-liquide.jpeg" 
            alt="La Crème" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : La Crème (Fleurette & Liquide)</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La "Fleur" du Lait</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                La crème est la partie grasse qui remonte naturellement à la surface du lait au repos (car le gras est plus léger que l'eau).
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Son nom "Fleurette" vient de l'expression <strong>"fleur du lait"</strong> (l'élite, le meilleur). Autrefois, on la récoltait à la louche ("écrémage spontané") après avoir laissé le lait reposer 24h. C'était un produit rare et fragile. En 1878, l'invention de l'écrémeuse centrifuge par le suédois Gustave de Laval a révolutionné l'industrie laitière : en faisant tourner le lait à toute vitesse, on sépare instantanément la crème du lait écrémé, permettant une production de masse.
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
                Si le beurre est une émulsion "Eau dans Huile", la crème est l'inverse : c'est une émulsion <strong>"Huile dans Eau"</strong>. Des gouttelettes de matière grasse flottent dans du petit-lait.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Pourcentage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Rôle</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Eau</td>
                    <td className="p-4 border-b border-white/5">55% à 60%</td>
                    <td className="p-4 border-b border-white/5">C'est le solvant. Elle hydrate la gélatine ou le chocolat dans une ganache.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Matière Grasse (Lipides)</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">30% à 40%</td>
                    <td className="p-4 border-b border-white/5">Le minimum légal pour s'appeler "Crème" est 30%. Pour monter une chantilly, il faut impérativement <strong>35%</strong> (sinon les bulles ne tiennent pas).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Protéines (Caséine)</td>
                    <td className="p-4 border-b border-white/5">2% à 3%</td>
                    <td className="p-4 border-b border-white/5">Elles stabilisent l'émulsion et forment la "peau" sur le lait chaud.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lactose (Sucre)</td>
                    <td className="p-4 border-b border-white/5">3%</td>
                    <td className="p-4 border-b border-white/5">Apporte une légère douceur naturelle.</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Le Foisonnement (Chantilly)</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                Pourquoi la crème liquide devient-elle une mousse ferme quand on la bat ? C'est de la physique pure.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Snowflake className="w-5 h-5 text-blue-400" />
                        A. Le Rôle du Froid (La Règle d'Or)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Pour monter, la crème doit être <strong>très froide (4°C)</strong>.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>L'explication :</strong> Le gras du lait est partiellement solide à froid. Quand on fouette, on incorpore de l'air. Les globules de gras viennent s'agglutiner autour des bulles d'air pour les emprisonner.</p>
                        <p className="flex gap-2">
                            <span className="w-1 h-1 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            <span><strong>Si la crème est tiède :</strong> Le gras est liquide. Il n'arrive pas à structurer les bulles. La crème reste désespérément liquide ou "brosse".</span>
                        </p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-yellow-400" />
                        B. Le Point de Rupture (Le Beurre)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Si on fouette trop longtemps, on casse l'émulsion.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p>Les globules de gras se soudent complètement entre eux et expulsent l'eau.</p>
                        <p><strong>Résultat :</strong> Vous obtenez des grains jaunes (du beurre) qui flottent dans un liquide blanc (le babeurre). C'est irréversible.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Classification */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification & Usages Techniques</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">Toutes les crèmes ne se valent pas pour la pâtisserie fine.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Traitement</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Crème Fleurette</td>
                    <td className="p-4 border-b border-white/5">Pasteurisation douce (72°C)</td>
                    <td className="p-4 border-b border-white/5">Liquide, goût frais de lait. DDM courte (Rayon frais).</td>
                    <td className="p-4 border-b border-white/5">Chantilly, Bavaroises. C'est la seule qui monte parfaitement et a bon goût.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Crème UHT (Longue conservation)</td>
                    <td className="p-4 border-b border-white/5">Stérilisation haute (140°C)</td>
                    <td className="p-4 border-b border-white/5">Liquide. Goût de "cuit". Contient souvent un stabilisant (Carraghénane).</td>
                    <td className="p-4 border-b border-white/5">Ganaches, Appareils à crème brûlée. Idéale pour les cuissons, moins bonne en foisonnement.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Crème Double</td>
                    <td className="p-4 border-b border-white/5">Aucune (ou Pasteurisation)</td>
                    <td className="p-4 border-b border-white/5">Épaisse (40% à 50% MG). Ne coule pas.</td>
                    <td className="p-4 border-b border-white/5">Cuisine, Nappage. Trop grasse pour être montée (elle tranche tout de suite).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Crème Végétale</td>
                    <td className="p-4 border-b border-white/5">Mix Huiles/Soja</td>
                    <td className="p-4 border-b border-white/5">Très stable, blancheur éclatante.</td>
                    <td className="p-4 border-b border-white/5">Décors de vitrine. Monte très bien mais goût artificiel.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Pièges à éviter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        L'ennemi Acide :
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Ne versez jamais de jus de citron ou de purée de fruit acide (Passion, Framboise) directement dans de la crème chaude.
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                        <strong>Réaction :</strong> L'acidité fait cailler les protéines (caséine). Votre crème va trancher et faire des grumeaux.
                    </p>
                    <p className="text-[#D4AF37] text-sm">
                        <strong>Solution :</strong> Mélangez le fruit à froid dans une crème déjà montée ou collée à la gélatine.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                         <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Le % de Gras :
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Ne tentez jamais de faire une chantilly avec de la crème "Légère" (12% ou 18%).
                    </p>
                    <p className="text-gray-400 text-sm">
                        C'est physiquement impossible, il n'y a pas assez de globules gras pour tenir l'échafaudage des bulles d'air. Il faut du <strong>30% minimum</strong> (et idéalement du 35% "Professionnel").
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default CremePage;