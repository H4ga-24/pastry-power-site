import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Lightbulb, Scale, ChefHat, AlertTriangle } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Fécules & Amidons", // ex: "La Farine"
  category: "Technologie - Farines",
  description: "Fiche technique détaillée.",
  image: "https://www.valpibio.com/wp-content/uploads/2019/12/farine-riz-single@2x.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const FeculesAmidonsPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Fécules & Amidons - Maison Dorée</title>
        <meta name="description" content="Fiche technique complète sur les fécules et amidons : définitions, histoire, propriétés, usages et pièges à éviter." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://www.valpibio.com/wp-content/uploads/2019/12/farine-riz-single@2x.jpg" 
            alt="Fécules et Amidons" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Fécules & Amidons</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Histoire & Définition */}
          <section id="histoire-definition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Histoire & Définition : La Guerre des Mots</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                En langage courant, on utilise les termes "Fécule" et "Amidon" de manière interchangeable. Mais pour le scientifique et le pâtissier, il existe une règle botanique stricte.
              </p>
              
              <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]">
                <h4 className="text-[#D4AF37] font-serif text-xl mb-4">La Règle d'Or :</h4>
                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0"></span>
                        <span>On parle d'<strong>Amidon</strong> quand la poudre est extraite d'une <strong>céréale</strong> (partie aérienne). Ex : Amidon de Maïs, Amidon de Blé, Amidon de Riz.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0"></span>
                        <span>On parle de <strong>Fécule</strong> quand la poudre est extraite d'un <strong>tubercule</strong> ou d'une <strong>tige</strong> (partie souterraine). Ex : Fécule de Pomme de terre, Fécule de Tapioca (Manioc).</span>
                    </li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                 <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                 </h4>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    C'est <strong>Antoine Parmentier</strong> (18ème siècle), célèbre pour avoir popularisé la pomme de terre en France, qui a beaucoup travaillé sur l'extraction de sa fécule pour pallier les famines de blé. Il démontra qu'on pouvait faire du pain (certes médiocre) sans blé, uniquement avec de la fécule, prouvant que la valeur nutritive (les calories) résidait dans cette poudre blanche.
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
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light mb-8">
                <p>
                    Contrairement à la farine qui est un produit "brut" (contenant des protéines, des fibres, des minéraux), la fécule est un produit raffiné. C'est un concentré d'énergie pur.
                </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Taux</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Propriétés</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Glucides (Amidon Pur)</td>
                    <td className="p-4 border-b border-white/5">{">"}  98%</td>
                    <td className="p-4 border-b border-white/5">C'est de l'amidon quasi pur. Pouvoir épaississant maximal.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Protéines</td>
                    <td className="p-4 border-b border-white/5">{"<"} 0,5%</td>
                    <td className="p-4 border-b border-white/5"><strong>Aucun Gluten</strong>. Ne donne aucune élasticité. C'est un structurant "friable".</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lipides & Minéraux</td>
                    <td className="p-4 border-b border-white/5">Traces</td>
                    <td className="p-4 border-b border-white/5">Goût totalement neutre. N'altère pas la saveur des crèmes ou biscuits.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Eau</td>
                    <td className="p-4 border-b border-white/5">10% à 13%</td>
                    <td className="p-4 border-b border-white/5">Poudre très volatile (attention à l'inhalation au labo).</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Le Gélifiant "Court"</h2>
            </div>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light mb-8">
                <p>Pourquoi mettre de la Maïzena dans une crème pâtissière plutôt que de la farine ? C'est une question de chimie.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">A. La Gélatinisation (Liaison)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Comme la farine, l'amidon gonfle à la chaleur. Mais étant pur, il réagit plus vite et plus fort.
                    </p>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Translucidité :</strong> Un gel d'amidon (ex: empois de maïs) est brillant et translucide. Un gel de farine est opaque et blanchâtre (à cause du gluten et des protéines parasites).</span>
                        </li>
                        <li className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Texture en bouche :</strong> L'amidon donne une texture "courte" et fondante. La farine donne une texture plus "pâteuse" et collante.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">B. Le Rôle "Allégeant" (Biscuit de Savoie)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Dans un gâteau (Génoise, Biscuit), remplacer une partie de la farine par de la fécule permet de diluer le gluten.
                    </p>
                    <div className="bg-white/5 p-4 rounded text-sm text-gray-300">
                        <span className="text-[#D4AF37] font-bold block mb-1">Résultat :</span> 
                        Le réseau élastique est moins dense. Le gâteau monte mieux, la mie est plus aérée, plus légère, et surtout plus friable en bouche.
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Classification & Usages */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification & Usages Techniques</h2>
            </div>
            <p className="text-gray-300 mb-6">Chaque amidon a sa "signature" de texture.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Nom</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Source</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usages</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Amidon de Maïs (Maïzena)</td>
                    <td className="p-4 border-b border-white/5">Maïs</td>
                    <td className="p-4 border-b border-white/5">Liaison franche. Gélifie vers 75°C.</td>
                    <td className="p-4 border-b border-white/5">Crème Pâtissière, Cakes. Le standard pour alléger les pâtes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Fécule de Pomme de Terre</td>
                    <td className="p-4 border-b border-white/5">Tubercule</td>
                    <td className="p-4 border-b border-white/5">Liaison très visqueuse et transparente. Pouvoir gonflant élevé.</td>
                    <td className="p-4 border-b border-white/5">Biscuit de Savoie, Sans Gluten. Donne un moelleux exceptionnel mais sèche vite.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Fécule de Tapioca</td>
                    <td className="p-4 border-b border-white/5">Manioc</td>
                    <td className="p-4 border-b border-white/5">Texture élastique et filante (chewy).</td>
                    <td className="p-4 border-b border-white/5">Perles du Japon, Pains brésiliens, Bubble Tea.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Arrow-Root</td>
                    <td className="p-4 border-b border-white/5">Rhizome</td>
                    <td className="p-4 border-b border-white/5">Très digeste. Gel très clair qui ne casse pas à la congélation.</td>
                    <td className="p-4 border-b border-white/5">Glaçages brillants, Sauces. Idéal pour lier des jus de fruits sans les troubler.</td>
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
            
            <div className="grid gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        La Synérèse (Le rejet d'eau) :
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Les crèmes liées uniquement à la fécule (sans farine) ont un défaut : elles rejettent de l'eau après 24h/48h au frigo (la crème "mouille"). L'amidon rétrograde et expulse l'eau.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic">
                        <strong>Astuce :</strong> Pour une crème pâtissière qui doit tenir 3 jours, faites un mélange 50% Farine (tenue) / 50% Maïzena (finesse).
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-orange-500/50">
                    <h3 className="text-white font-bold mb-2">La Dissolution à froid :</h3>
                    <p className="text-gray-400 text-sm">
                        <strong>Règle absolue.</strong> Ne jamais verser de fécule dans un liquide chaud ! Elle va "coaguler" instantanément autour de la poudre sèche et former des grumeaux indissolubles. Toujours diluer dans un peu de liquide froid ou mélanger à sec avec le sucre avant incorporation.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-green-500/50">
                    <h3 className="text-white font-bold mb-2">Le Gluten-Free :</h3>
                    <p className="text-gray-400 text-sm">
                        La fécule est l'arme n°1 du pâtissier sans gluten. Mais attention : utilisée seule, elle donne des gâteaux friables qui tombent en miettes. Elle doit être associée à des gommes (Xanthane, Guar) pour imiter la "colle" du gluten manquant.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default FeculesAmidonsPage;