import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Droplets, Snowflake } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Huiles & Beurre de Cacao", // ex: "La Farine"
  category: "Technologie - Corps Gras",
  description: "Tout savoir sur les huiles et le beurre de cacao en pâtisserie : origine, composition, propriétés techniques et tempérage.",
  image: "/images/recipes/glacage-chocolat-blanc.png", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const HuilesBeurreCacaoPage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Huiles & Beurre de Cacao - Pastry Power</title>
        <meta name="description" content="Tout savoir sur les huiles et le beurre de cacao en pâtisserie : origine, composition, propriétés techniques et tempérage." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/recipes/glacage-chocolat-blanc.png" 
            alt="Huiles & Beurre de Cacao" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Huiles & Beurre de Cacao</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : Les Gras "Techniques"</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Si le beurre est le gras du goût, l'huile et le beurre de cacao sont les gras de la texture.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote du Beurre de Cacao :
                </h4>
                <p className="text-sm text-gray-400">
                    Au 19ème siècle, le beurre de cacao était considéré comme un... déchet ! Casparus Van Houten (inventeur de la presse hydraulique à cacao) cherchait surtout à obtenir de la poudre de cacao maigre pour faire des boissons. Il pressait les fèves et se retrouvait avec des tonnes de graisse blanche insipide dont il ne savait que faire. Aujourd'hui, c'est l'inverse : le beurre de cacao vaut plus cher que la poudre, car c'est lui qui donne le fondant au chocolat de luxe.
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-[#D4AF37]" />
                    L'Huile en Pâtisserie :
                </h4>
                <p className="text-sm text-gray-400">
                    Longtemps méprisée en France (réservée à la cuisine), l'huile a gagné ses lettres de noblesse avec l'arrivée des "Chiffon Cakes" américains et des biscuits méditerranéens à l'huile d'olive.
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
                Ce sont des lipides purs (100% de matière grasse), contrairement au beurre qui contient 16% d'eau.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">État</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Huile Végétale (Pépins de Raisin/Tournesol)</td>
                    <td className="p-4 border-b border-white/5">Liquide</td>
                    <td className="p-4 border-b border-white/5">Majorité d'acides gras insaturés. Ils restent fluides même au frigo.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre de Cacao</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">Solide (Cassant)</td>
                    <td className="p-4 border-b border-white/5">Majorité d'acides gras saturés (stéarique). Il fond à la température du corps (35°C), ce qui est unique au monde.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Huile de Coco (Coprah)</td>
                    <td className="p-4 border-b border-white/5">Semi-Solide</td>
                    <td className="p-4 border-b border-white/5">Fond vers 25°C. Utilisée pour les glaçages "Eskimo" (Magnum) pour le croquant glacé.</td>
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-yellow-400" />
                        A. L'Huile : Le Moelleux à Froid
                    </h3>
                    <p className="text-[#D4AF37] text-sm mb-4 italic">(Le secret du Muffin)</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Pourquoi un muffin ou un carrot cake reste-t-il ultra-moelleux même sortant du frigo, alors qu'un financier au beurre durcit ?
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>La Science :</strong> Le beurre durcit au froid (il cristallise). L'huile reste liquide.</p>
                        <p><strong>L'Usage :</strong> On utilise l'huile (souvent Pépins de Raisin car neutre en goût) pour les gâteaux qui doivent être consommés froids ou conservés longtemps. Elle imperméabilise la farine et empêche le dessèchement mieux que le beurre.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                        <Snowflake className="w-5 h-5 text-blue-400" />
                        B. Le Beurre de Cacao : Le Polymorphisme
                    </h3>
                    <p className="text-[#D4AF37] text-sm mb-4 italic">(Le Temperage)</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est la bête noire des apprentis chocolatiers. Le beurre de cacao a la capacité de cristalliser sous plusieurs formes géométriques différentes (Alpha, Bêta, Bêta-prime, Gamma).
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Le but du jeu :</strong> En "tempérant" le chocolat (courbe de température), on force le beurre de cacao à cristalliser sous la forme Bêta (V) stable.</p>
                        <p><strong>Résultat :</strong> Le chocolat est brillant, cassant et se démoule tout seul (il se rétracte). S'il cristallise mal (forme Alpha), il est terne, mou et a des traces blanches (le "fat bloom").</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]">
                 <h3 className="text-xl font-serif text-white mb-2">C. La Fluidité</h3>
                 <p className="text-gray-400 text-sm">
                    Ajouter du beurre de cacao pur dans un chocolat de couverture le rend plus fluide. C'est indispensable pour les enrobages fins ou l'utilisation au pistolet à peinture (effet velours).
                 </p>
            </div>
          </section>

          {/* 4. Classification */}
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
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Produit</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage Technique</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Huile Pépins de Raisin</td>
                    <td className="p-4 border-b border-white/5">Goût totalement neutre.</td>
                    <td className="p-4 border-b border-white/5">Gâteaux moelleux, Pâtes à tartiner. Ne parasite pas le goût des autres ingrédients.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Huile d'Olive</td>
                    <td className="p-4 border-b border-white/5">Goût fruité puissant.</td>
                    <td className="p-4 border-b border-white/5">Madeleines citron/olive, Sablés. À utiliser comme un arôme à part entière.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre de Cacao (Bloc)</td>
                    <td className="p-4 border-b border-white/5">Jaune pâle, odeur cacao.</td>
                    <td className="p-4 border-b border-white/5">Fluidifier le chocolat, Pistolet Velours.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre de Cacao (Mycryo)</td>
                    <td className="p-4 border-b border-white/5">Poudre lyophilisée.</td>
                    <td className="p-4 border-b border-white/5">Tempérage facile. On ajoute 1% de Mycryo dans un chocolat à 34°C pour l'ensemencer instantanément en bons cristaux.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Beurre de Cacao Désodorisé</td>
                    <td className="p-4 border-b border-white/5">Blanc, sans odeur.</td>
                    <td className="p-4 border-b border-white/5">Confiserie, Coloration. Pour créer des couleurs vives sans altérer le goût.</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Astuces de Pro</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Le Glaçage Miroir
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Beaucoup de recettes de glaçage miroir contiennent de l'huile neutre ou du lait concentré. C'est l'huile qui apporte la brillance (le "shine") finale. Le beurre de cacao, lui, matifie légèrement en figeant.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                        Le "Chablonnage"
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Pour éviter qu'une tarte aux fruits ne détrempe, badigeonnez le fond de tarte cuit avec un mélange de chocolat blanc et de beurre de cacao fondu. Cette couche grasse crée une barrière étanche contre l'eau des fruits.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Remplacement
                    </h3>
                    <p className="text-gray-400 text-sm">
                        On ne remplace pas le beurre par l'huile poids pour poids ! L'huile est 100% gras, le beurre 82%. Si vous remplacez 100g de beurre, mettez seulement 80g d'huile + 20g de liquide (lait/eau) pour garder l'équilibre de la recette.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default HuilesBeurreCacaoPage;