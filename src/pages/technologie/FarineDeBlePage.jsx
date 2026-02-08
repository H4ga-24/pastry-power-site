import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Microscope, Scale, ChefHat, Wheat } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "La Farine de Blé (Tendre)", // ex: "La Farine"
  category: "Technologie - Farines",
  description: "Fiche technique détaillée.",
  image: "https://sf2.doctissimo.fr/wp-content/uploads/doctissimo/2024/09/1726049283040.jpeg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const FarineDeBlePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : La Farine de Blé - Maison Dorée</title>
        <meta name="description" content="Encyclopédie technique de la farine de blé." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://sf2.doctissimo.fr/wp-content/uploads/doctissimo/2024/09/1726049283040.jpeg" 
            alt="Champs de blé et farine" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : La Farine de Blé (Tendre)</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La Quête du Blanc</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light">
              <p className="mb-6">
                Bien que le blé soit domestiqué depuis plus de 10 000 ans (Croissant Fertile), la farine telle que nous la connaissons en pâtisserie moderne est une invention relativement récente.
              </p>
              <p>
                Pendant des millénaires, la mouture sur meule de pierre écrasait le grain entier, mélangeant l'amande farineuse avec le germe et une partie du son. Le résultat était une farine bise, nutritionnellement riche mais techniquement instable (rancissement rapide dû au germe) et donnant des pâtes lourdes.
              </p>
              <p>
                La révolution a eu lieu en Hongrie au XIXe siècle avec l'invention des cylindres cannelés en acier. Cette technologie a permis une mouture progressive ("mouture haute"), séparant avec une précision chirurgicale l'enveloppe (son) de l'amande (amidon + gluten). C'est la naissance de la farine blanche pure, ingrédient clé de la pâtisserie fine française (pâtes feuilletées aériennes, brioches filantes, biscuits délicats).
              </p>
            </div>
          </section>

          {/* 2. Anatomie du Grain & Composition */}
          <section id="composition" className="relative pl-8 md:pl-0">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Microscope className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Anatomie du Grain & Composition</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl text-white font-medium mb-4">Structure du grain de blé (Triticum aestivum)</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">Les Enveloppes (13-15%)</strong> : Le péricarpe et le tégument. Riches en fibres et minéraux. Elles constituent le "son" après mouture. Elles sont indésirables en pâtisserie fine car elles coupent le réseau de gluten et alourdissent les pâtes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">L'Amande Farineuse (80-85%)</strong> : Le coeur du grain. C'est la partie noble pour le meunier. Elle contient les granules d'amidon enchâssés dans une matrice protéique (le futur gluten).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                    <span><strong className="text-white">Le Germe (2-3%)</strong> : L'embryon de la future plante. Riche en lipides et vitamines. Il est systématiquement retiré des farines blanches standards car ses graisses rancissent rapidement et altèrent le goût de la farine.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h3 className="text-[#D4AF37] font-serif text-lg mb-6 text-center border-b border-white/10 pb-4">Composition Moyenne d'une Farine Type 55 (pour 100g)</h3>
                <div className="space-y-4">
                  {[
                    { label: "Amidon (Glucides complexes)", value: "68 - 72 %", bar: "70%" },
                    { label: "Eau (Humidité)", value: "< 16 % (Max légal)", bar: "16%" },
                    { label: "Protéines (Gluten)", value: "10 - 12 %", bar: "12%" },
                    { label: "Sucres simples", value: "1 - 2 %", bar: "2%" },
                    { label: "Matières grasses (Lipides)", value: "~ 1.2 %", bar: "1.2%" },
                    { label: "Matières minérales (Cendres)", value: "0.5 - 0.6 %", bar: "0.6%" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm group">
                      <span className="w-48 font-medium text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
                      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden mx-4">
                        <div className="h-full bg-[#D4AF37]" style={{ width: item.bar }}></div>
                      </div>
                      <span className="w-32 text-right font-mono text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Le Rôle Techno-Fonctionnel des Composants */}
          <section id="proprietes" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Wheat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Le Rôle Techno-Fonctionnel des Composants</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-8 rounded-sm border-l-2 border-[#D4AF37]">
                <h3 className="text-xl font-serif text-white mb-4">L'Amidon : Le Squelette</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  C'est un glucide complexe composé d'Amylose et d'Amylopectine. À cru, il est insoluble (il sédimente au fond du bol).
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong>Rôle à la cuisson</strong> : Dès 60°C, en présence d'eau, les grains d'amidon gonflent et éclatent : c'est l'empesage (ou gélatinisation). C'est ce phénomène qui transforme une pâte liquide (ex: pâte à choux) ou molle en une mie solide et structurée. Sans amidon, pas de mâche ni de tenue.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-sm border-l-2 border-[#D4AF37]">
                <h3 className="text-xl font-serif text-white mb-4">Le Gluten : Le Muscle</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Le gluten n'existe pas dans le grain sec ! Il se forme lors de l'hydratation et du pétrissage, par la liaison de deux familles de protéines insolubles :
                </p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                    <li><strong>Les Gliadines</strong> : Donnent l'extensibilité (la pâte s'étire sans casser).</li>
                    <li><strong>Les Gluténines</strong> : Donnent l'élasticité (la pâte reprend sa forme, a du "nerf").</li>
                </ul>
                <p className="text-gray-400 text-sm leading-relaxed">
                   <strong>Rôle</strong> : Il forme un réseau élastique et imperméable qui piège les bulles de gaz (CO2 de la levure ou vapeur d'eau). C'est lui qui permet le volume du pain, la levée de la brioche ou le feuilletage du croissant.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Classification & Force Boulangère */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification : Taux de Cendres & Force (W)</h2>
            </div>

            <div className="space-y-12">
              {/* Tableau 2 : Types */}
              <div>
                <h3 className="text-xl text-white font-medium mb-6">A. Le "Type" (T) : La pureté minérale</h3>
                <p className="text-gray-400 mb-6 font-light text-sm">Le Type indique le taux de cendres (résidus minéraux après calcination de la farine à 900°C). Plus le chiffre est bas, plus la farine est pure (blanche) et riche en amidon. Plus il est haut, plus elle contient d'enveloppes (complète).</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-white/10 text-sm">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37] w-24">Type</th>
                        <th className="p-4 border-b border-white/10 font-serif text-gray-200">Dénomination</th>
                        <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage Pâtissier</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr>
                        <td className="p-4 border-b border-white/5 font-bold text-white">T45</td>
                        <td className="p-4 border-b border-white/5">Farine blanche de pâtisserie / Gruau</td>
                        <td className="p-4 border-b border-white/5">Viennoiseries, Brioches, Pâtes feuilletées, Pâtes à baba. La plus pure, souvent renforcée en gluten (Gruau).</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-bold text-white">T55</td>
                        <td className="p-4 border-b border-white/5">Farine blanche ménagère / standard</td>
                        <td className="p-4 border-b border-white/5">Pâtes à tartes (sucrée, sablée, brisée), Pâte à choux, Cakes, Biscuits, Génoises. L'universelle.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-bold text-white">T65</td>
                        <td className="p-4 border-b border-white/5">Farine bise / Tradition</td>
                        <td className="p-4 border-b border-white/5">Pains de tradition française, Pâtes rustiques, certains feuilletages inversés pour plus de goût.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-bold text-white">T80 à T150</td>
                        <td className="p-4 border-b border-white/5">Semi-complète à Intégrale</td>
                        <td className="p-4 border-b border-white/5">Pains spéciaux, Sablés rustiques, Crumbles santé. Peu adaptées à la haute pâtisserie (manque de finesse).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tableau 3 : Force W */}
              <div>
                <h3 className="text-xl text-white font-medium mb-6">B. La Force Boulangère (W) : Le nerf de la guerre</h3>
                <p className="text-gray-400 mb-6 font-light text-sm">Invisible à l'œil nu, c'est la capacité de la farine à former un réseau de gluten résistant. Elle se mesure à l'Alvéographe Chopin. C'est LE critère des professionnels.</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border border-white/10 text-sm">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37] w-32">Force (W)</th>
                        <th className="p-4 border-b border-white/10 font-serif text-gray-200">Qualité du Gluten</th>
                        <th className="p-4 border-b border-white/10 font-serif text-gray-200">Utilisation Optimale</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr>
                        <td className="p-4 border-b border-white/5 font-mono text-white font-bold">W &lt; 140</td>
                        <td className="p-4 border-b border-white/5">Faible (Soft)</td>
                        <td className="p-4 border-b border-white/5">Biscuits secs, Sablés, Cakes. On ne veut pas d'élasticité (risque de rétractation à la cuisson).</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-mono text-white font-bold">W 150-200</td>
                        <td className="p-4 border-b border-white/5">Moyenne (Standard)</td>
                        <td className="p-4 border-b border-white/5">Pâte à choux, Pâtes à tartes, Génoises. Bon équilibre ténacité/extensibilité.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-mono text-white font-bold">W 220-280</td>
                        <td className="p-4 border-b border-white/5">Forte (Hard)</td>
                        <td className="p-4 border-b border-white/5">Pains, Croissants, Pâtes levées feuilletées. Nécessaire pour supporter le laminage et la poussée des gaz.</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-white/5 font-mono text-white font-bold">W &gt; 300</td>
                        <td className="p-4 border-b border-white/5">Très Forte (Manitoba/Gruau)</td>
                        <td className="p-4 border-b border-white/5">Brioches riches (beaucoup de beurre/œufs), Panettone. Seule une farine très forte peut supporter le poids des matières grasses sans s'effondrer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Le Labo du Chef */}
          <section id="labo" className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm border border-[#D4AF37]/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <ChefHat className="w-64 h-64 text-[#D4AF37]" />
             </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <ChefHat className="w-8 h-8 text-[#D4AF37]" />
                <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Bonnes Pratiques</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest">Le Stockage</h4>
                  <p className="text-sm font-light">
                    La farine est vivante. Elle craint l'humidité (risque de moisissures) et la chaleur (risque d'insectes). Stockez-la hermétiquement, à l'abri de la lumière, idéalement en dessous de 20°C. Une farine trop vieille s'oxyde et donne un goût rance et une pâte grisâtre.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest">Pourquoi Tamiser ?</h4>
                  <p className="text-sm font-light">
                    Ce n'est pas du snobisme. Tamiser permet : 1. D'éliminer les impuretés éventuelles. 2. D'aérer la farine pour une incorporation plus rapide des liquides (évite les grumeaux). 3. D'alléger les masses (crucial pour une génoise ou un biscuit cuillère).
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest">L'Autolyse</h4>
                  <p className="text-sm font-light">
                    Technique de boulanger utile en pâtisserie pour les pâtes levées. Mélangez farine + eau (sans sel ni levure) et laissez reposer 20min à 1h. Le gluten se forme tout seul (hydrolyse), la pâte devient lisse et extensible sans pétrissage intensif. Moins d'oxydation = plus de goût.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest">Le Pétrissage : Attention à la Surchauffe</h4>
                  <p className="text-sm font-light">
                    En brioche ou pâte levée, un pétrissage trop long ou trop violent chauffe la pâte. Si elle dépasse 24-25°C, la levure s'active trop tôt et le réseau de gluten peut se déchirer. Utilisez des ingrédients froids !
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default FarineDeBlePage;