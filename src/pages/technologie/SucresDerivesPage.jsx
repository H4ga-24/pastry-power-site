import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Droplets } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Les Sucres Dérivés (Glucose, Inverti, Miel)", // ex: "La Farine"
  category: "Technologie - Sucres",
  description: "Tout savoir sur les sucres dérivés : sirop de glucose, sucre inverti (trimoline), miel et dextrose. Propriétés techniques et usages.",
  image: "/images/recipes/financier-au-miel.png", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const SucresDerivesPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Les Sucres Dérivés (Glucose, Inverti, Miel) - Pastry Power</title>
        <meta name="description" content="Tout savoir sur les sucres dérivés : sirop de glucose, sucre inverti (trimoline), miel et dextrose. Propriétés techniques et usages." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/recipes/financier-au-miel.png" 
            alt="Miel et Sucres Dérivés" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Les Sucres Dérivés</h1>
              <p className="text-xl text-gray-300 italic">Glucose, Inverti, Miel</p>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : La Chimie au service du Moelleux</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Si le saccharose est le sucre de la ménagère, les sucres dérivés sont les outils de l'ingénieur pâtissier.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Le <strong>Sucre Inverti</strong> (ou Trimoline) a été inventé pour copier la nature. Les chimistes se sont rendu compte que le <strong>Miel</strong> restait liquide indéfiniment alors que le sucre cristallise. Ils ont analysé le miel et découvert qu'il était "inverti" (décomposé) par les enzymes de l'abeille. Ils ont donc reproduit ce processus en laboratoire par hydrolyse acide pour créer un "miel technique" neutre et stable.
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
                Ces sucres ne sont pas extraits de la canne, mais obtenus par transformation (hydrolyse) de l'amidon ou du saccharose.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Origine</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Composition</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sirop de Glucose</td>
                    <td className="p-4 border-b border-white/5">Amidon (Maïs ou Blé)</td>
                    <td className="p-4 border-b border-white/5">Chaînes de glucose plus ou moins longues. C'est un sucre "lent" à digérer pour la levure.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre Inverti (Trimoline)</td>
                    <td className="p-4 border-b border-white/5">Saccharose hydrolysé</td>
                    <td className="p-4 border-b border-white/5">50% Glucose + 50% Fructose (exactement comme le miel, mais sans les impuretés).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Miel</td>
                    <td className="p-4 border-b border-white/5">Nectar de fleurs</td>
                    <td className="p-4 border-b border-white/5">38% Fructose + 31% Glucose + Eau + Arômes. C'est un sucre inverti naturel.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Dextrose</td>
                    <td className="p-4 border-b border-white/5">Amidon (Totalement hydrolysé)</td>
                    <td className="p-4 border-b border-white/5">100% Glucose pur cristallisé (poudre fine).</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Pourquoi les utiliser ?</h2>
            </div>
            <p className="text-gray-300 mb-8 font-light text-lg">
                On n'utilise pas ces sucres pour leur goût (ils sont souvent neutres), mais pour leurs fonctions physiques.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">A. L'Anti-Cristallisation (Le rôle du Glucose)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Le saccharose a un défaut : il veut redevenir un cristal dur (il "masse").
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>L'action :</strong> Le sirop de glucose agit comme un lubrifiant entre les molécules de sucre. Il les empêche de s'agglomérer.</span>
                        </div>
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Application :</strong> Indispensable dans les caramels mous, les glaçages miroirs et les pâtes de fruits. Sans lui, votre caramel devient granuleux après 2 jours.</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">B. L'Hygroscopie Extrême (Le rôle de l'Inverti)</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Le sucre inverti (et le miel) capte l'humidité de l'air bien plus fort que le sucre blanc.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>L'action :</strong> Il fixe l'eau au cœur du produit.</span>
                        </div>
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Application :</strong> Dans les ganaches, les cakes de voyage et les viennoiseries, il garantit une texture fondante et prolonge la "Durée de Vie" (DDM) en empêchant le dessèchement.</span>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">C. Le Dextrose Équivalent (DE) - Donnée Expert</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Pour le glucose, on parle de "DE". C'est le degré d'hydrolyse (coupe) de l'amidon.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white/5 p-4 rounded text-sm">
                            <strong className="block text-[#D4AF37] mb-1">DE 0</strong>
                            <span className="text-gray-400">Amidon pur (non sucré).</span>
                        </div>
                        <div className="bg-white/5 p-4 rounded text-sm">
                            <strong className="block text-[#D4AF37] mb-1">DE 40 (Standard)</strong>
                            <span className="text-gray-400">Visqueux, peu sucré. Idéal pour la texture.</span>
                        </div>
                        <div className="bg-white/5 p-4 rounded text-sm">
                            <strong className="block text-[#D4AF37] mb-1">DE 60 (Confiseur)</strong>
                            <span className="text-gray-400">Plus fluide, plus sucré. Pour les conserves, confitures.</span>
                        </div>
                         <div className="bg-white/5 p-4 rounded text-sm md:col-span-3">
                            <strong className="block text-[#D4AF37] mb-1">DE 100 (Dextrose)</strong>
                            <span className="text-gray-400">Totalement transformé. Très fin, sensation de fraîcheur en bouche.</span>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Classification & Comparatif */}
          <section id="classification" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Classification & Comparatif Technique</h2>
            </div>
            <p className="text-gray-300 mb-6">Voici les valeurs clés pour équilibrer vos recettes (Glaces, Ganaches).</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Nom</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">POD (Sucrant)</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">PAC (Anti-Gel)</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques / Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Saccharose (Référence)</td>
                    <td className="p-4 border-b border-white/5">100</td>
                    <td className="p-4 border-b border-white/5">100</td>
                    <td className="p-4 border-b border-white/5">Le standard.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sirop de Glucose (DE 40)</td>
                    <td className="p-4 border-b border-white/5">50 (Peu sucré)</td>
                    <td className="p-4 border-b border-white/5">70 (Faible)</td>
                    <td className="p-4 border-b border-white/5">Apporter du corps, de la mâche, éviter la cristallisation.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Sucre Inverti (Trimoline)</td>
                    <td className="p-4 border-b border-white/5">130 (Très sucré)</td>
                    <td className="p-4 border-b border-white/5">190 (Très fort)</td>
                    <td className="p-4 border-b border-white/5">Moelleux, conservation, glaces très souples (attention, ça fond vite !).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Miel</td>
                    <td className="p-4 border-b border-white/5">130</td>
                    <td className="p-4 border-b border-white/5">190</td>
                    <td className="p-4 border-b border-white/5">Comme l'inverti, mais avec du goût.</td>
                  </tr>
                   <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Dextrose</td>
                    <td className="p-4 border-b border-white/5">70</td>
                    <td className="p-4 border-b border-white/5">190</td>
                    <td className="p-4 border-b border-white/5">Fixateur d'arômes, fraîcheur, coloration rapide à la cuisson.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Manipulation & Pièges</h2>
            </div>
            
            <div className="grid gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-blue-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        Peser le Glucose :
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        C'est une colle terrible.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic mb-2">
                        <strong>Astuce :</strong> Mouillez vos mains ou votre corne à l'eau froide avant de le prendre. Il glissera tout seul sans coller.
                    </p>
                    <p className="text-gray-500 text-xs">
                        Ne le chauffez pas au micro-ondes dans le pot d'origine (le plastique fond souvent).
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-orange-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        Doser l'Inverti :
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                        <strong>Attention, il colore très vite !</strong> Comme il contient du fructose libre, il brunit (Maillard) beaucoup plus vite que le sucre blanc.
                    </p>
                    <p className="text-gray-400 text-sm">
                        Si vous mettez trop de miel ou de trimoline dans vos madeleines, elles seront brûlées à l'extérieur et crues à l'intérieur. <strong>Baissez votre four de 10°C.</strong>
                    </p>
                </div>

                 <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-2">Substitution :</h3>
                    <p className="text-gray-400 text-sm mb-2">
                        On ne remplace jamais 100% du sucre par du glucose ou de l'inverti.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic">
                        <strong>Règle :</strong> On remplace généralement 10% à 30% de la masse de sucre par un sucre technique pour améliorer la texture sans déstabiliser la recette.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default SucresDerivesPage;