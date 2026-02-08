import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Droplets, Thermometer } from 'lucide-react';
export const recipeData = {
  title: "La Gélatine",
  category: "Technologie - Gélifiants",
  description: "Origine animale, degrés Bloom et hydratation. L'incontournable des bavarois.",
  // 👇 Image : Feuilles de gélatine (Vrai lien)
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gelatine_sheets.jpg/800px-Gelatine_sheets.jpg",
  prepTime: "Théorie",
  difficulty: "Niveau 1"
};
const GelatinePage = () => {
  return (
    <>
      <Helmet>
        <title>Fiche Technique : La Gélatine - Maison Dorée</title>
        <meta name="description" content="Fiche technique détaillée sur la gélatine en pâtisserie : origine, force en bloom, thermoréversibilité et règles d'utilisation." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg27fBxTwXr1uAhcW9IMJnEpGXY7Q1rFP297Y-41kroRQpgcoz_rbRNtpCVDdPF2Of_Ii1ki8UqRUdH5zJLIGgnCiADUv9famZY-7uDjmjjeHMEocyhb3Peo4az3OQ-ejtytuzgZsnbMtQZ/s660/20200106_211345.jpg" 
            alt="La Gélatine" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : La Gélatine</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : Le Collagène</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                La gélatine est un gélifiant d'origine animale. Elle est obtenue par l'hydrolyse du collagène présent dans la peau, les os et les tissus connectifs (Porc, Bœuf ou Poisson).
              </p>

              <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    L'Anecdote Historique :
                </h4>
                <p className="text-sm text-gray-400">
                    Avant l'invention de la gélatine séchée, les chefs (comme Antonin Carême) devaient faire bouillir des pieds de veau ou des arêtes de poisson pendant des heures pour obtenir un bouillon gélatineux qu'ils clarifiaient ensuite. L'arrivée des feuilles industrielles a permis de standardiser la tenue des mousses.
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
                La gélatine est une protéine pure. C'est un hydrocolloïde (elle capture l'eau pour former un gel).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Origine</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Source</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Caractéristiques</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Porcine</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">Peau de porc</td>
                    <td className="p-4 border-b border-white/5">La plus courante (Gélatine Or). Très claire, goût neutre.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Bovine</td>
                    <td className="p-4 border-b border-white/5">Peau/Os de bœuf</td>
                    <td className="p-4 border-b border-white/5">Alternative Halal/Casher. Texture légèrement plus élastique.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Poisson</td>
                    <td className="p-4 border-b border-white/5">Peau de poisson</td>
                    <td className="p-4 border-b border-white/5">Fond à température plus basse. Utilisée pour des textures très fines.</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : Le Bloom</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-yellow-400" />
                        A. La Force de Gel (Bloom)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        La puissance de la gélatine se mesure en "Blooms". Plus le chiffre est élevé, plus le gel est ferme.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Or (Gold) :</strong> 200 Blooms. C'est le standard professionnel (2g par feuille).</p>
                        <p><strong>Argent (Silver) :</strong> 160 Blooms.</p>
                        <p><strong>Bronze :</strong> 140 Blooms.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-400" />
                        B. La Thermoréversibilité (Le fondant)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est le super-pouvoir de la gélatine.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Le Phénomène :</strong> Un gel de gélatine fond à la chaleur (35°C) et redurcit au froid, à l'infini.</p>
                        <p><strong>L'Avantage :</strong> Comme elle fond à la température du corps (37°C), une mousse à la gélatine fond délicatement sur la langue, contrairement à l'Agar-agar qui reste cassant et doit être mâché.</p>
                    </div>
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
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Dosage</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Résultat</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Mousses / Bavarois</td>
                    <td className="p-4 border-b border-white/5">6g à 10g par litre</td>
                    <td className="p-4 border-b border-white/5">Texture aérée qui tient debout mais fond en bouche.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Glaçage Miroir</td>
                    <td className="p-4 border-b border-white/5">10g à 15g par litre</td>
                    <td className="p-4 border-b border-white/5">Donne la brillance et permet au glaçage de figer sur l'entremets congelé.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Gélifiés (Panna Cotta)</td>
                    <td className="p-4 border-b border-white/5">12g à 15g par litre</td>
                    <td className="p-4 border-b border-white/5">Texture tremblotante et crémeuse.</td>
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
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-blue-400/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-blue-400" />
                        Hydratation (Règle du 1 pour 6)
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        La gélatine (poudre ou feuille) doit toujours être hydratée dans de l'eau très froide.
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                        Calcul : Pour 10g de gélatine, il faut 60g d'eau. La "Masse Gélatine" totale pèse 70g.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <AlertTriangle className="w-4 h-4 text-red-500" />
                        L'Ennemi (Les Enzymes)
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                        Certains fruits crus (Ananas, Kiwi, Papaye, Gingembre) contiennent des enzymes qui mangent la gélatine. Si vous les mettez crus dans une mousse, elle restera liquide.
                    </p>
                    <p className="text-gray-400 text-sm font-bold text-red-400">
                        Solution : Il faut cuire (pocher) les fruits 2 minutes pour tuer les enzymes avant utilisation.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Thermometer className="w-4 h-4 text-[#D4AF37]" />
                        Incorporation
                    </h3>
                    <p className="text-gray-400 text-sm">
                        On ne fait jamais bouillir la gélatine (elle perd sa force). On l'incorpore dans un liquide chaud (50-60°C) hors du feu.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default GelatinePage;