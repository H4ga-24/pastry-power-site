import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Thermometer, FlaskConical, TestTube } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "La Levure Chimique", // ex: "La Farine"
  category: "Technologie - Levures Biologiques",
  description: "Fiche technique détaillée sur la levure chimique : composition, double action, différence avec la levure boulangère et règles de dosage.",
  image: "/images/recipes/muffins-chocolat-noisette.png", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: false
};
// 👆 FIN DU BLOC 👆
const LevureChimiquePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : La Levure Chimique - Pastry Power</title>
        <meta name="description" content="Fiche technique détaillée sur la levure chimique : composition, double action, différence avec la levure boulangère et règles de dosage." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/recipes/muffins-chocolat-noisette.png" 
            alt="La Levure Chimique" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : La Levure Chimique</h1>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          
          {/* 1. Histoire & Définition */}
          <section id="histoire" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">1. Histoire & Définition : La Chimie Pratique</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Souvent appelée "Poudre à Lever" (terme légal) ou "Baking Powder" (anglais), la levure chimique n'a de levure que le nom. Contrairement à la levure boulangère qui est un être vivant (champignon), la levure chimique est un mélange minéral inerte.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Elle a été inventée au milieu du 19ème siècle (notamment par le chimiste Alfred Bird) pour permettre aux personnes allergiques à la levure de bière ou au levain de manger du pain. Elle a révolutionné la pâtisserie ménagère en permettant de faire des gâteaux (cakes) sans temps de repos.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Analyse & Composition */}
          <section id="composition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Atom className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Analyse & Composition : Le Trio Explosif</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                Pour fonctionner, une levure chimique contient obligatoirement 3 agents distincts.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type d'Agent</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Fonction</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">L'Agent Basique</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">Bicarbonate de Soude</td>
                    <td className="p-4 border-b border-white/5">C'est lui qui produit le gaz carbonique (CO2). Mais seul, il donne un goût savonneux et ne réagit pas bien.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">L'Agent Acide</td>
                    <td className="p-4 border-b border-white/5">Acide Tartrique / Pyrophosphate</td>
                    <td className="p-4 border-b border-white/5">C'est le "détonateur". L'acidité attaque le bicarbonate pour libérer le gaz.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">L'Agent Neutre</td>
                    <td className="p-4 border-b border-white/5">Amidon (Maïs ou Blé)</td>
                    <td className="p-4 border-b border-white/5">Il sert à empêcher les deux autres de réagir dans le sachet en absorbant l'humidité. C'est un stabilisateur.</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : La Double Action</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                La levure chimique professionnelle agit en deux temps. C'est ce qu'on appelle la double action.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-blue-400" />
                        A. 1ère Action : À l'Hydratation (Au bol)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Dès que vous mélangez la poudre avec les œufs ou le lait (l'eau), l'acide commence à attaquer le bicarbonate.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Effet :</strong> Des petites bulles apparaissent déjà dans la pâte crue.</p>
                        <p className="italic text-[#D4AF37]"><strong>Conseil :</strong> C'est pour cela qu'il ne faut pas laisser traîner une pâte à cake crue pendant 3 heures sur le plan de travail. Elle "s'évente" (perd son gaz) et montera moins bien.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-400" />
                        B. 2ème Action : À la Chaleur (Au four)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est la poussée principale. La chaleur accélère la réaction chimique et dilate les bulles de gaz créées.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Température :</strong> Le dégagement gazeux est maximal vers 60°C - 70°C, juste avant que l'œuf et la farine ne figent le gâteau.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Usages Techniques */}
          <section id="usage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Usages Techniques & Dosage</h2>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Application</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Dosage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Résultat</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Madeleines</td>
                    <td className="p-4 border-b border-white/5">20g / kg de farine</td>
                    <td className="p-4 border-b border-white/5">Créer la fameuse "bosse" par un choc thermique et gazeux violent.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Cakes / Quatre-quarts</td>
                    <td className="p-4 border-b border-white/5">15g à 20g / kg de farine</td>
                    <td className="p-4 border-b border-white/5">Développement régulier et mie aérée.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pâte Sablée</td>
                    <td className="p-4 border-b border-white/5">5g / kg de farine</td>
                    <td className="p-4 border-b border-white/5">Juste un peu de friabilité, sans déformer le biscuit.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-sm border-l-4 border-yellow-500">
                 <p className="text-gray-300 flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>
                        <strong>Attention :</strong> Ne confondez jamais Levure Chimique et Bicarbonate pur. Le Bicarbonate seul ne marche que s'il y a un ingrédient acide dans la recette (miel, citron, yaourt). La Levure Chimique, elle, contient déjà son propre acide.
                    </span>
                 </p>
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
                        <TestTube className="w-4 h-4 text-red-500" />
                        Le Surdosage (Goût piquant)
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Si vous mettez trop de levure, le gâteau va monter très haut... puis s'effondrer au milieu (cheminée). De plus, l'excès de produits chimiques laisse un arrière-goût désagréable qui "pique" la langue.
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                        Règle d'or : On ne dépasse jamais 2% du poids de la farine (soit un sachet de 11g pour 500g de farine).
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Snowflake className="w-4 h-4 text-[#D4AF37]" />
                        Le Tamisage
                    </h3>
                    <p className="text-gray-400 text-sm">
                        La levure doit toujours être tamisée avec la farine. Si vous jetez la levure seule dans les œufs, elle va faire des grumeaux blancs acides terribles à la dégustation.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default LevureChimiquePage;