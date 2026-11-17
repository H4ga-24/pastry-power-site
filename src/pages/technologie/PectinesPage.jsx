import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Droplets, Thermometer, FlaskConical, Leaf } from 'lucide-react';
export const recipeData = {
  title: "Les Pectines",
  category: "Technologie - Gélifiants",
  description: "Gélifiant végétal activé par l'acidité. Idéal pour les confitures et pâtes de fruits.",
  // 👇 Image : Poudre blanche (Pectine)
  image: "/images/recipes/pates-de-fruits.png",
  prepTime: "Théorie",
  difficulty: "Niveau 2",
  isVip: true
};
const PectinesPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Les Pectines - Pastry Power</title>
        <meta name="description" content="Fiche technique détaillée sur les pectines en pâtisserie : origine végétale, différence entre Pectine Jaune et NH, conditions d'activation et règles d'utilisation." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/recipes/pates-de-fruits.png" 
            alt="Les Pectines" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Les Pectines</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : Le Ciment Végétal</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                La pectine est un gélifiant d'origine végétale. Elle est naturellement présente dans les pépins et la peau de nombreux fruits (Pommes, Agrumes, Coings, Groseilles).
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-[#D4AF37]" />
                        Le Rôle Naturel :
                    </h4>
                    <p className="text-sm text-gray-400">
                        Dans la plante, la pectine agit comme un ciment qui tient les parois des cellules entre elles. C'est pour cela qu'un fruit durcit en mûrissant.
                    </p>
                </div>
                 <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-[#D4AF37]" />
                        Extraction :
                    </h4>
                    <p className="text-sm text-gray-400">
                        La pectine industrielle est extraite principalement du marc de pomme (les résidus du jus) et des écorces de citron séchées.
                    </p>
                </div>
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
                Contrairement à la gélatine (protéine), la pectine est un glucide (fibre).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Source / Origine</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pectine Jaune (HM)</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">Pomme / Agrumes</td>
                    <td className="p-4 border-b border-white/5">Gélification lente et irréversible. Nécessite beaucoup de sucre et d'acide.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pectine NH (LM)</td>
                    <td className="p-4 border-b border-white/5">Modifiée chimiquement</td>
                    <td className="p-4 border-b border-white/5">Thermoréversible. Peut être refondue. Gélifie avec moins de sucre. Le standard des glaçages.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pectine X58</td>
                    <td className="p-4 border-b border-white/5">Spéciale Lait</td>
                    <td className="p-4 border-b border-white/5">Conçue pour réagir avec le calcium (pour les crèmes desserts sans œufs).</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : L'Activation</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">La pectine est capricieuse. Pour fonctionner, elle a besoin de 3 conditions précises (Le Triangle d'Or).</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-yellow-400" />
                        Le Sucre (Matière Sèche)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        La pectine a besoin de capter l'eau. Le sucre aide à "déshydrater" la pectine pour qu'elle puisse former son gel.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-green-400" />
                        L'Acidité (pH)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Un milieu acide (Jus de citron, acide tartrique) est indispensable pour déclencher la prise (surtout pour la Pectine Jaune).
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                     <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-500" />
                        L'Ébullition
                     </h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                        Contrairement à la gélatine qui fond à chaud, la pectine doit bouillir (1 min minimum) pour s'activer. Si vous ne la cuisez pas, elle ne prendra jamais.
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
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Application</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Type Recommandé</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Résultat</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pâtes de Fruits</td>
                    <td className="p-4 border-b border-white/5">Pectine Jaune</td>
                    <td className="p-4 border-b border-white/5">Texture ferme, cassante, qui ne recrache pas d'eau. Prise définitive (ne peut pas être refondue).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Confitures</td>
                    <td className="p-4 border-b border-white/5">Pectine Jaune (ou Mix)</td>
                    <td className="p-4 border-b border-white/5">Texture tartinable. Permet de cuire moins longtemps pour garder le goût du fruit.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Nappage Neutre / Glaçage</td>
                    <td className="p-4 border-b border-white/5">Pectine NH</td>
                    <td className="p-4 border-b border-white/5">Texture brillante et fondante. Peut être réchauffé plusieurs fois sans perdre sa force (Thermoréversible).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Inserts Fruits</td>
                    <td className="p-4 border-b border-white/5">Pectine NH</td>
                    <td className="p-4 border-b border-white/5">Permet d'avoir un cœur de fruit qui tient à la découpe mais fond en bouche.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Manipulation & Pièges</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
                        Le Mélange à Sec (Anti-Grumeaux)
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        La pectine pure s'hydrate instantanément au contact de l'eau en formant des grumeaux insolubles.
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                        La Règle : Il faut toujours mélanger la pectine avec 5 à 10 fois son poids en sucre en poudre avant de la verser en pluie dans le liquide.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Thermometer className="w-4 h-4 text-red-500" />
                        Le Choc Thermique
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Ne versez jamais le mélange sucre/pectine dans un liquide bouillant. Versez-le dans un liquide tiède (40°C) ou froid, fouettez bien, puis portez à ébullition.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-green-400/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <FlaskConical className="w-4 h-4 text-green-400" />
                        L'ajout d'Acide
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Pour les pâtes de fruits, on ajoute l'acide (jus de citron/solution acide) toujours à la toute fin de la cuisson, juste avant de couler. Sinon, la gélification commence trop tôt dans la casserole.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default PectinesPage;