import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, TestTube, FlaskConical, Droplets } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "Le Cacao en Poudre", // ex: "La Farine"
  category: "Technologie - Chocolat (Tech)",
  description: "Fiche technique détaillée sur le cacao en poudre : origine, composition, différence entre cacao naturel et alcalinisé, et règles d'utilisation en pâtisserie.",
  image: "https://images.unsplash.com/photo-1704079783785-cfd81c4b99b6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: false
};
// 👆 FIN DU BLOC 👆
const CacaoPoudrePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : Le Cacao en Poudre - Pastry Power</title>
        <meta name="description" content="Fiche technique détaillée sur le cacao en poudre : origine, composition, différence entre cacao naturel et alcalinisé, et règles d'utilisation en pâtisserie." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1704079783785-cfd81c4b99b6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Le Cacao en Poudre" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : Le Cacao en Poudre</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : L'Invention Hollandaise</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                Le cacao en poudre n'existe pas à l'état naturel. C'est une <strong>invention industrielle du 19ème siècle</strong>.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote (Van Houten) :
                </h4>
                <p className="text-sm text-gray-400">
                    En 1828, le chimiste hollandais <strong>Coenraad Van Houten</strong> invente la presse hydraulique. Il réussit à séparer la pâte de cacao en deux : une partie liquide grasse (le beurre de cacao) et un tourteau sec (le cacao maigre). C'est ce tourteau, une fois broyé, qui devient la poudre de cacao.
                </p>
              </div>

              <p className="text-gray-300">
                <strong>Le Procédé "Dutch" :</strong> Il invente aussi l'<strong>alcalinisation</strong> (ajout de sels de potassium) pour neutraliser l'acidité naturelle du cacao et le rendre plus soluble.
              </p>
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
                C'est la partie "maigre" et aromatique de la fève.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Composant</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Teneur</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Détails</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Matière Sèche (Solides)</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">78% à 90%</td>
                    <td className="p-4 border-b border-white/5">Fibres, amidon, protéines. C'est un <strong>asséchant puissant</strong> ("buvard") dans les recettes.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Matière Grasse (Beurre)</td>
                    <td className="p-4 border-b border-white/5">10% à 22%</td>
                    <td className="p-4 border-b border-white/5">
                        Même "dégraissé", il reste du gras.<br/>
                        <strong>10-12% :</strong> Cacao maigre (standard supermarché).<br/>
                        <strong>20-22% :</strong> Cacao "Plein Arôme" (Standard pâtissier, plus onctueux).
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Alcaloïdes</td>
                    <td className="p-4 border-b border-white/5">Théobromine</td>
                    <td className="p-4 border-b border-white/5">Molécule excitante proche de la caféine, responsable de l'amertume.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Propriétés Physico-Chimiques */}
          <section id="proprietes" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <TestTube className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : L'Acidité (pH)</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                Il existe deux grandes familles de poudres, et cela change tout en cuisson.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-orange-400" />
                        A. Cacao Naturel (Non-Alcalinisé)
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><strong>pH :</strong> Acide (5.0 - 5.8).</li>
                        <li><strong>Couleur :</strong> Brun clair, beige.</li>
                        <li><strong>Goût :</strong> Fruité, astringent, acide.</li>
                        <li className="text-orange-400 font-bold">Réaction : Il réagit fortement avec le Bicarbonate de Soude (créant du gaz).</li>
                    </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-[#D4AF37]" />
                        B. Cacao Alcalinisé (Dutch Processed)
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">C'est le standard utilisé en pâtisserie française (ex: Valrhona, Cacao Barry).</p>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><strong>pH :</strong> Neutre ou Basique (7.0 - 8.0).</li>
                        <li><strong>Couleur :</strong> Brun rouge profond à Noir (Black).</li>
                        <li><strong>Goût :</strong> Rond, terreux, cacaoté intense, moins amère.</li>
                        <li className="text-[#D4AF37] font-bold">Solubilité : Il se mélange beaucoup mieux aux liquides que le naturel.</li>
                    </ul>
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
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Usage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Technique</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Explication</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Biscuit Chocolat</td>
                    <td className="p-4 border-b border-white/5">Tamiser avec la farine</td>
                    <td className="p-4 border-b border-white/5">Le cacao est un "texturant". Il remplace une partie de la farine (car il contient de l'amidon). <strong>Attention, il assèche la pâte</strong> : il faut augmenter l'hydratation (sirop, œufs).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Truffes (Enrobage)</td>
                    <td className="p-4 border-b border-white/5">Utiliser du 20-22% MG</td>
                    <td className="p-4 border-b border-white/5">Le gras évite que la poudre ne "mouille" trop vite au contact de la ganache.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Décors (Saupoudrage)</td>
                    <td className="p-4 border-b border-white/5">Cacao "Décor"</td>
                    <td className="p-4 border-b border-white/5">Il existe des cacaos enrobés de matière grasse végétale qui ne fondent pas au frigo ni sur un gâteau humide (tiramisu).</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Pièges à éviter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
                        Les Grumeaux
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        La poudre de cacao est très hygroscopique (elle boit l'humidité de l'air) et forme des blocs durs.
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                        Règle : Il est obligatoire de tamiser le cacao avant incorporation.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Droplets className="w-4 h-4 text-red-500" />
                        Le "Blooming" (Réveil des arômes)
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Pour une crème ou un glaçage, ne mettez pas le cacao à froid. Mélangez-le avec un peu de liquide bouillant (eau ou crème) au départ. La chaleur fait éclater les grains d'amidon et libère toute la puissance aromatique ("blooming").
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default CacaoPoudrePage;