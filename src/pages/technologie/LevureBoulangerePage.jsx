import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Thermometer, FlaskConical, Microscope, Zap } from 'lucide-react';
// 👇 COPIE ÇA DANS TOUS TES FICHIERS TECHNO 👇
export const recipeData = {
  title: "La Levure Boulangère (Biologique)", // ex: "La Farine"
  category: "Technologie - Levures Biologiques",
  description: "Fiche technique détaillée.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Compressed_fresh_yeast_-_1.jpg", // Image par défaut
  prepTime: "Lecture : 5 min",
  difficulty: "Théorie",
  isVip: true
};
// 👆 FIN DU BLOC 👆
const LevureBoulangerePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : La Levure Boulangère (Biologique) - Maison Dorée</title>
        <meta name="description" content="Fiche technique détaillée sur la levure boulangère : origine, fermentation alcoolique, classification et ennemis mortels." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Compressed_fresh_yeast_-_1.jpg" 
            alt="La Levure Boulangère" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : La Levure Boulangère (Biologique)</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : Le Champignon Magique</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                La levure boulangère n'est pas un ingrédient inerte, c'est un <strong>microorganisme vivant</strong> : un champignon microscopique unicellulaire nommé Saccharomyces cerevisiae.
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Les Égyptiens l'utilisaient déjà il y a 5000 ans sans comprendre comment cela fonctionnait (ils pensaient que c'était magique). C'est Louis Pasteur, au 19ème siècle, qui a enfin expliqué le mystère de la fermentation : la levure "mange" le sucre et "respire" en rejetant du gaz.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Analyse & Composition */}
          <section id="composition" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <Microscope className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">2. Analyse & Composition</h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg font-light">
                C'est une <strong>cellule vivante</strong>. Elle a besoin de nourriture, d'eau et de chaleur pour vivre.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Hydratation</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Fraîche (Cube)</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">70% d'eau</td>
                    <td className="p-4 border-b border-white/5">Fragile. Doit être stockée au frigo (+4°C). Durée de vie courte.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Sèche Active</td>
                    <td className="p-4 border-b border-white/5">8% d'eau</td>
                    <td className="p-4 border-b border-white/5">(Billes). Doit être réhydratée dans de l'eau tiède avant usage.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Sèche Instantanée</td>
                    <td className="p-4 border-b border-white/5">&lt; 5% d'eau</td>
                    <td className="p-4 border-b border-white/5">(Poudre fine). Très concentrée. S'incorpore directement dans la farine.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Propriétés Physico-Chimiques */}
          <section id="proprietes" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <FlaskConical className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : La Fermentation Alcoolique</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                Le mécanisme est biologique. La levure se nourrit des sucres présents dans la farine (amidon dégradé) ou du sucre ajouté.
            </p>

            <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 mb-8 text-center">
                <h3 className="text-xl font-serif text-[#D4AF37] mb-4">L'Équation Magique</h3>
                <p className="text-2xl text-white font-light tracking-wide">
                    Sucre + Levure = <span className="text-gray-400">Gaz Carbonique (CO2)</span> + <span className="text-gray-400">Alcool (Éthanol)</span> + <span className="text-gray-400">Chaleur</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-400" />
                        Le Rôle du Gaz
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Le CO2 reste piégé dans le réseau de gluten élastique. C'est lui qui fait gonfler la pâte et crée les alvéoles de la mie.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-purple-400" />
                        Le Rôle de l'Alcool
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Il s'évapore à la cuisson, mais participe au goût caractéristique du pain et de la brioche.
                    </p>
                </div>
            </div>
          </section>

          {/* 4. Usages Techniques */}
          <section id="usage" className="relative pl-8 md:pl-0">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#D4AF37]/30 md:hidden"></div>
            <div className="flex items-center gap-4 mb-8">
              <ChefHat className="w-8 h-8 text-[#D4AF37]" />
              <h2 className="text-3xl font-serif text-white">4. Usages Techniques & Classification</h2>
            </div>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Type</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Usage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Dosage / Note</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Fraîche (Le Standard)</td>
                    <td className="p-4 border-b border-white/5">Brioches, Pains, Croissants</td>
                    <td className="p-4 border-b border-white/5">Base : 100%. (Ex: 20g). Donne le meilleur goût.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Sèche</td>
                    <td className="p-4 border-b border-white/5">Pâtes à Pizza, Pains ménagers</td>
                    <td className="p-4 border-b border-white/5">C'est un concentré. Il faut diviser le poids par 2 ou 3. (Ex: 7g sèche = 20g fraîche).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Levure Osmotolérante</td>
                    <td className="p-4 border-b border-white/5">Brioches très sucrées (Panettone)</td>
                    <td className="p-4 border-b border-white/5">Souche spéciale résistante aux fortes doses de sucre (qui tuent la levure classique).</td>
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
              <h2 className="text-3xl font-serif text-white">5. Le Labo du Chef : Les Ennemis Mortels</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">
                Comme c'est un organisme vivant, la levure peut mourir.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-orange-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-orange-500" />
                        La Température (Le Thermomètre)
                    </h3>
                    <div className="text-gray-400 text-sm space-y-2">
                        <p><strong>0°C à 4°C (Frigo) :</strong> La levure dort (hibernation). Pousse bloquée.</p>
                        <p><strong>25°C à 28°C :</strong> Zone Idéale. La levure est active et heureuse.</p>
                        <p><strong>50°C :</strong> <strong>Mort Cellulaire</strong>. La levure meurt. Si vous délayez votre levure dans du lait trop chaud, votre brioche ne montera jamais.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-white/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Zap className="w-4 h-4 text-white" />
                        Le Sel (Le Tueur)
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Le sel est hygroscopique. Si vous mettez le sel en contact direct avec la levure fraîche, il absorbe l'eau des cellules par osmose et les tue.
                    </p>
                    <p className="text-gray-400 text-sm font-bold text-[#D4AF37]">
                        Règle : Ne jamais mettre le sel sur la levure dans le bol du batteur. Séparez-les.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default LevureBoulangerePage;