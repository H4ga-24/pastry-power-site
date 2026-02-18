import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Thermometer } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Isomalt & Fondant Pâtissier", // ex: "La Farine"
  category: "Technologie - sucres",
  description: "Fiche technique détaillée.",
  image: "https://cdn8.futura-sciences.com/a1920/images/glossaire/Celine/pectine%20%C2%A0MaxCab%2C%20Adobe%20Stock.jpeg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const IsomaltFondantPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Isomalt & Fondant Pâtissier - Maison Dorée</title>
        <meta name="description" content="Tout savoir sur l'isomalt et le fondant pâtissier : histoire, composition, propriétés et techniques de manipulation." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://files.meilleurduchef.com/mdc/photo/recette/marbrer-millefeuille/marbrer-millefeuille-etape-2-480.jpg" 
            alt="Isomalt & Fondant" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Isomalt & Fondant Pâtissier</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : L'Esthétique avant tout</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Contrairement au sucre semoule qui sert à la structure du gâteau, ces deux sucres sont des outils de surface.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    Le Fondant (Tradition) :
                </h4>
                <p className="text-sm text-gray-400">
                    C'est la signature de la pâtisserie française classique (Éclairs, Religieuses, Mille-feuilles). Inventé pour créer une couche hermétique qui protège la pâte à choux du dessèchement tout en apportant une brillance impeccable.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Isomalt (Modernité) :
                </h4>
                <p className="text-sm text-gray-400">
                    Découvert dans les années 1960. C'est un édulcorant de synthèse (E953) issu du sucre de betterave. Initialement conçu pour les diabétiques (car il influence peu la glycémie), il a été détourné par les champions du monde de pâtisserie dans les années 90 pour ses propriétés incroyables de transparence et de résistance à l'humidité, remplaçant le sucre tiré traditionnel.
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

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Nature</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Fondant Blanc</td>
                    <td className="p-4 border-b border-white/5">Sirop Recristallisé</td>
                    <td className="p-4 border-b border-white/5">C'est un sirop de sucre (Saccharose + Glucose + Eau) cuit, puis battu fortement jusqu'à obtenir une masse blanche opaque composée de millions de micro-cristaux invisibles à l'œil nu.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Isomalt</td>
                    <td className="p-4 border-b border-white/5">Polyol (Alcool de sucre)</td>
                    <td className="p-4 border-b border-white/5">Ce n'est pas un "sucre" au sens chimique classique. C'est un dérivé hydrogéné du saccharose. Il contient moitié moins de calories que le sucre (2 kcal/g contre 4 kcal/g).</td>
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

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">A. Le Fondant : La Brillance Thermique</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Le fondant est une merveille physique. À froid, il est dur. Tiédi, il devient fluide et nappant.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Le point critique (35°C - 37°C) :</strong> C'est la règle d'or. Le fondant doit être travaillé à la température du corps.</span>
                        </div>
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>En dessous :</strong> Il est trop épais, le glaçage est mat et irrégulier.</span>
                        </div>
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Au-dessus (40°C+) :</strong> Il perd sa brillance ("il meurt"). Les micro-cristaux fondent, et en refroidissant, le sucre recristallise grossièrement. L'éclair sera terne et cassant.</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4">B. L'Isomalt : La Transparence Absolue</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        L'isomalt a deux avantages majeurs sur le saccharose pour le sucre d'art :
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Non-Hygroscopique :</strong> Il ne reprend pas l'humidité. Une sculpture en sucre classique fond et poisse s'il pleut. Une sculpture en isomalt reste sèche et brillante des mois durant.</span>
                        </div>
                        <div className="flex gap-2">
                             <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0"></span>
                             <span><strong>Pas de coloration :</strong> Il ne caramélise pas avant 190°C. On peut le chauffer très fort pour qu'il soit fluide sans qu'il ne jaunisse. Il reste clair comme du cristal.</span>
                        </div>
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

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Forme</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Fondant Pâtissier</td>
                    <td className="p-4 border-b border-white/5">Pâte blanche dense (Seau)</td>
                    <td className="p-4 border-b border-white/5">Glaçage des Éclairs, Religieuses, Salambos. Peut être parfumé (café, chocolat) et coloré.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Fondant Confiseur</td>
                    <td className="p-4 border-b border-white/5">Plus liquide (contient plus de glucose)</td>
                    <td className="p-4 border-b border-white/5">Intérieurs de bonbons, Fourrage menthe.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Isomalt Brut</td>
                    <td className="p-4 border-b border-white/5">Granulés blancs</td>
                    <td className="p-4 border-b border-white/5">Pièces artistiques, Sucres tirés, Sucres soufflés.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Isomalt Précuit</td>
                    <td className="p-4 border-b border-white/5">Lingots ou pastilles</td>
                    <td className="p-4 border-b border-white/5">Prêt à fondre. Idéal pour les décors rapides (tuiles, bulles, éclats de verre).</td>
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
                        <Thermometer className="w-4 h-4 text-blue-500" />
                        Assouplir le Fondant :
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Le fondant pur est souvent trop dur. Pour glacer des éclairs, on le détend avec un <strong>sirop de sucre de canne</strong> (jamais d'eau pure, sinon il fermente et perd son brillant). On ajoute généralement 5% à 10% de sirop à 30°B.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                         <Thermometer className="w-4 h-4 text-[#D4AF37]" />
                        Cuisson de l'Isomalt :
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                        Il se fond à sec dans une casserole.
                    </p>
                    <p className="text-[#D4AF37] text-sm italic mb-2">
                        <strong>Astuce pro :</strong> Montez-le à 170°C - 180°C. À cette température, il devient très fluide (comme de l'eau), ce qui permet aux bulles d'air de s'échapper. Laissez-le redescendre vers 130°C pour le travailler ("satinage") ou le couler.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Sécurité (Attention !) :
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                        L'isomalt chaud colle à la peau et continue de brûler (contrairement à l'eau bouillante qui coule).
                    </p>
                    <p className="text-red-400 text-sm font-bold">
                        C'est la brûlure la plus dangereuse du pâtissier.
                    </p>
                    <p className="text-gray-400 text-sm">
                        Portez des gants en latex sous des gants en coton lors du travail du sucre tiré.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default IsomaltFondantPage;