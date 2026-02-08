import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Wind } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Le Blanc d'Œuf (Albumen)", // ex: "La Farine"
  category: "Technologie - Oeuf",
  description: "Fiche technique détaillée.",
  image: "https://img.cuisineaz.com/1200x675/2020/12/16/i158469-creme-liquide.jpeg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie"
};
// 👆 FIN DU BLOC 👆
const BlancOeufPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Le Blanc d'Œuf (Albumen) - Maison Dorée</title>
        <meta name="description" content="Fiche technique sur le blanc d'œuf en pâtisserie : composition, foisonnement, rôle dans les meringues et astuces de conservation." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://img-3.journaldesfemmes.fr/q4Q_6RdyxFOxhyelsA4S_AB_AUg=/1500x/smart/733d71af35df4530a62bc425f19a1be7/ccmcms-jdf/25729935.jpg" 
            alt="Le Blanc d'Œuf" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Le Blanc d'Œuf (Albumen)</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La Protection</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Le blanc, scientifiquement appelé "Albumen" (du latin albus, blanc), sert à protéger le jaune et l'embryon des chocs et des bactéries. En pâtisserie, c'est l'agent de structure et de légèreté.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Avant l'invention du fouet en fil de fer, les cuisiniers battaient les blancs avec des branches de bouleau effeuillées ou des faisceaux d'osier. C'était un travail épuisant qui prenait plus de 30 minutes pour obtenir une neige ferme !
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
                Le blanc est une matière "maigre", contrairement au jaune.
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
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">88%</td>
                    <td className="p-4 border-b border-white/5">Le blanc est quasi exclusivement de l'eau.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Protéines</td>
                    <td className="p-4 border-b border-white/5">10% à 12%</td>
                    <td className="p-4 border-b border-white/5">L'Ovalbumine. Ce sont des protéines tensio-actives (capables de mousser).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Lipides (Gras)</td>
                    <td className="p-4 border-b border-white/5">0%</td>
                    <td className="p-4 border-b border-white/5">Aucune trace de gras. C'est la condition sine qua non pour que ça monte.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre</td>
                    <td className="p-4 border-b border-white/5">Traces</td>
                    <td className="p-4 border-b border-white/5"></td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Le Foisonnement</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">Comment un liquide devient-il une mousse solide ?</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                         <Wind className="w-5 h-5 text-blue-400" />
                        Le Mécanisme
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Les protéines sont comme des pelotes de laine enroulées. Sous l'action mécanique du fouet, elles se déroulent, s'étirent et emprisonnent les bulles d'air dans un filet élastique.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        L'Ennemi N°1 (Le Gras)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        La moindre trace de jaune d'œuf ou de graisse sur le bol/fouet empêche ce filet de se former. Le blanc ne montera jamais ("il reste plat").
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                     <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                        Le Soutien (Sucre/Acide)
                     </h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                        Le <strong>Sucre</strong> "serre" les blancs : il densifie la mousse et la rend brillante (Meringue). L'<strong>Acide</strong> (jus de citron, crème de tartre) aide à stabiliser les protéines pour éviter que la neige ne retombe.
                     </p>
                </div>
            </div>
          </section>

          {/* 4. Usages Techniques */}
          <section id="usage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Usages Techniques</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Préparation</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Rôle du blanc</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Meringues / Soufflés</td>
                    <td className="p-4 border-b border-white/5">Incorporer un maximum d'air pour le volume.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Macarons</td>
                    <td className="p-4 border-b border-white/5">Base structurelle. C'est le blanc séché à la cuisson qui forme la coque lisse.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Biscuits (Cuillère, Dacquoise)</td>
                    <td className="p-4 border-b border-white/5">Apporte la légèreté. Sans blanc monté, ces biscuits seraient des galettes plates et denses.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Clarification</td>
                    <td className="p-4 border-b border-white/5">En cuisine, le blanc coagule en piégeant les impuretés, rendant un bouillon limpide.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Astuces & Conservation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Les Blancs "Vieillis" (Liquéfiés)
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Pour les macarons, on utilise des blancs séparés des jaunes depuis plusieurs jours (au frigo). Ils perdent leur excès d'élasticité ("nerf") et montent de manière plus régulière sans grainer.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-blue-400/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Snowflake className="w-4 h-4 text-blue-400" />
                        Congélation Parfaite
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Contrairement au jaune, le blanc se congèle très bien. Vous pouvez stocker vos excédents dans des boites hermétiques pendant des mois. Il suffit de les laisser décongeler au frigo la veille.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default BlancOeufPage;