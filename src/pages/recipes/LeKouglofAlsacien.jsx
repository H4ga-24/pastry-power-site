import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Users, Scale } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LeKouglofAlsacien = () => {
  return (
    <>
      <Helmet>
        <title>Le Kouglof Alsacien - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle du Kouglof Alsacien : une brioche à pâte levée garnie de raisins secs et d'amandes, cuite dans son moule typique en terre cuite." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0de5337a547ec8337189e88cf1292af1.jpg" 
              alt="Le Kouglof Alsacien" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/patisserie/gateaux/desserts-regionaux">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Desserts Régionaux
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                Le Kouglof Alsacien
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le symbole gourmand de l'Alsace. Une brioche haute, aérée et parfumée, reconnaissable entre mille par sa forme cannelée et ses amandes entières incrustées.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Infos Clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <Users className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Portions</span>
              <span className="text-white font-medium">1 gros moule</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Préparation</span>
              <span className="text-white font-medium">40 min + repos</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">45-50 min</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Moyenne</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                
                <h3 className="text-lg font-medium text-[#D4AF37] mb-4 mt-6 uppercase tracking-wider text-xs">La Pâte</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Farine (T45 ou Gruau)</span>
                    <span className="font-bold text-white">500 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Levure de boulanger fraîche</span>
                    <span className="font-bold text-white">25 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Lait tiède</span>
                    <span className="font-bold text-white">200 ml</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre semoule</span>
                    <span className="font-bold text-white">100 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Œufs entiers</span>
                    <span className="font-bold text-white">2</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre mou</span>
                    <span className="font-bold text-white">175 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sel</span>
                    <span className="font-bold text-white">10 g</span>
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-[#D4AF37] mb-4 mt-8 uppercase tracking-wider text-xs">La Garniture</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Raisins secs</span>
                    <span className="font-bold text-white">100 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Kirsch (ou eau tiède)</span>
                    <span className="font-bold text-white">3 c.à.s</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Amandes entières (brutes)</span>
                    <span className="font-bold text-white">20</span>
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-[#D4AF37] mb-4 mt-8 uppercase tracking-wider text-xs">Finition</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre (pour le moule)</span>
                    <span className="font-bold text-white">QS</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre glace</span>
                    <span className="font-bold text-white">QS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Procédé Technique */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Procédé Technique
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. Préparation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Faites tremper</strong> les raisins secs dans le Kirsch et un peu d'eau tiède pendant <strong>1 heure</strong>. <strong>Égouttez-les bien</strong> avant utilisation. <strong>Beurrez généreusement</strong> le moule à Kouglof. <strong>Placez une amande entière</strong> dans chaque cannelure au fond du moule.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. Pétrissage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans la cuve du batteur, versez la <strong>farine</strong>, le <strong>sel</strong> d'un côté, le <strong>sucre</strong> de l'autre. Ajoutez la <strong>levure émiettée</strong>, les <strong>œufs</strong> et le <strong>lait tiède</strong>. <strong>Pétrissez au crochet 4 minutes en vitesse lente</strong>, puis <strong>6 minutes en vitesse moyenne</strong>. <strong>Incorporez le beurre mou</strong> en morceaux. <strong>Pétrissez de nouveau</strong> jusqu'à ce que la pâte se <strong>décolle des parois</strong> (environ 5-8 minutes).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Pointage (1ère Pousse)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Couvrez la cuve</strong>. Laissez lever la pâte <strong>1h30 à température ambiante (25°C)</strong>. Elle doit <strong>doubler de volume</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. Façonnage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Rompez la pâte</strong> avec le poing pour <strong>chasser le gaz</strong>. <strong>Incorporez les raisins égouttés</strong> en repliant la pâte. <strong>Formez une boule</strong>, percez un trou au centre avec le coude ou les doigts pour créer une couronne. <strong>Déposez la pâte</strong> dans le moule préparé.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Apprêt (2ème Pousse)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Laissez lever dans le moule <strong>environ 1h30</strong>. La pâte doit <strong>remonter jusqu'au bord du moule</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. Cuisson</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Enfournez à 180°C pendant 45 à 50 minutes</strong>. Si le dessus colore trop vite, <strong>couvrez d'aluminium après 30 minutes</strong>. Vérifiez la cuisson avec la lame d'un couteau (elle doit ressortir sèche).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">7. Finition</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Démoulez immédiatement</strong> sur une grille. Laissez refroidir complètement avant de <strong>saupoudrer de sucre glace</strong>.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LeKouglofAlsacien;