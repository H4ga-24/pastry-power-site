import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Atom, Scale, Lightbulb, ChefHat, AlertTriangle, Snowflake, Thermometer, FlaskConical, Leaf, Flame } from 'lucide-react';

// 👇 DONNÉES DE LA PAGE (Menu) 👇
export const recipeData = {
  title: "L'Agar-Agar",
  category: "Technologie - Gélifiants",
  description: "L'algue rouge au pouvoir gélifiant puissant et cassant. Alternative végétale.",
  image: "https://www.valpibio.com/wp-content/uploads/2015/06/agar-agar.jpg",
  prepTime: "Théorie",
  difficulty: "Niveau 1"
};

const AgarAgarPage = () => {
  return (
    <>
      <Helmet>
        {/* 👇 Pastry Power ici ! */}
        <title>Fiche Technique : L'Agar-agar - Pastry Power</title>
        <meta name="description" content="Fiche technique détaillée sur l'agar-agar en pâtisserie : origine, pouvoir gélifiant, hystérésis et règles d'utilisation." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://www.valpibio.com/wp-content/uploads/2015/06/agar-agar.jpg" 
            alt="L'Agar-agar" 
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
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Fiche Technique : L'Agar-agar</h1>
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
              <h2 className="text-3xl font-serif text-white">1. Histoire & Origine : L'Algue Rouge</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg font-light space-y-6">
              <p>
                L'Agar-agar (ou E406) est un gélifiant 100% végétal extrait d'algues rouges (Rodophycées).
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                        L'Anecdote Japonaise :
                    </h4>
                    <p className="text-sm text-gray-400">
                        Découvert par hasard au Japon au 17ème siècle. Un aubergiste aurait jeté des restes de soupe d'algues dans la neige. Le lendemain, après le gel et le dégel au soleil, il ne restait qu'une substance blanche sèche. Une fois réhydratée, elle redonnait une gelée parfaite. Le "Kanten" était né.
                    </p>
                </div>
                 <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-wider flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-[#D4AF37]" />
                        Le Favori Végétal :
                    </h4>
                    <p className="text-sm text-gray-400">
                        C'est l'alternative n°1 à la gélatine pour les régimes végétariens, végans et halal, car il ne contient aucune matière animale.
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
                C'est un polymère de galactose (un sucre complexe).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 font-serif text-[#D4AF37]">Critère</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Agar-agar</th>
                    <th className="p-4 border-b border-white/10 font-serif text-gray-200">Note</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Pouvoir Gélifiant</td>
                    <td className="p-4 border-b border-white/5 font-bold text-[#D4AF37]">8 à 10 fois supérieur</td>
                    <td className="p-4 border-b border-white/5">Il est ultra-puissant. 1g d'agar = 8g de gélatine.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Origine</td>
                    <td className="p-4 border-b border-white/5">Végétale (Algue)</td>
                    <td className="p-4 border-b border-white/5">Animale (Porc/Bœuf).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Calorie</td>
                    <td className="p-4 border-b border-white/5">Quasi nul</td>
                    <td className="p-4 border-b border-white/5">Très faible.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Goût/Odeur</td>
                    <td className="p-4 border-b border-white/5">Neutre</td>
                    <td className="p-4 border-b border-white/5">Neutre.</td>
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
              <h2 className="text-3xl font-serif text-white">3. Propriétés Physico-Chimiques : La Cassure</h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg font-light">L'Agar-agar crée un gel très différent de la gélatine.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-red-400" />
                        A. L'Hystérésis (Écart Thermique)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est sa propriété physique la plus étrange. Il y a un grand écart entre sa température de fonte et de prise.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>Activation :</strong> Il doit bouillir (90°C - 100°C) pour s'activer.</p>
                        <p><strong>Gélification :</strong> Il fige en refroidissant vers 40°C.</p>
                        <p><strong>Refonte :</strong> Une fois gélifié, il ne refond qu'à 85°C.</p>
                        <p className="italic text-[#D4AF37]"><strong>Conséquence :</strong> Vous pouvez servir une mousse à l'agar-agar chaude (jusqu'à 80°C), elle tiendra debout ! Impossible avec la gélatine qui fond à 35°C.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5">
                    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                        <Snowflake className="w-5 h-5 text-blue-400" />
                        B. La Texture (Le Croquant)
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        C'est le défaut majeur pour la pâtisserie fine française.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <p><strong>En bouche :</strong> Le gel d'agar ne fond pas à la température du corps. Il faut le mâcher.</p>
                        <p><strong>Sensation :</strong> Il donne une texture "cassante", "courte" et parfois granuleuse si mal dosé. On l'évite dans les bavarois crémeux, on le privilégie dans les flans, les gelées de fruits fermes ou la cuisine moléculaire.</p>
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
            
             <div className="bg-[#1a1a1a] p-4 rounded-sm border-l-4 border-yellow-500 mb-6">
                 <p className="text-gray-300 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Attention à la balance de précision ! Une erreur de 1 gramme peut transformer votre dessert en balle de caoutchouc.
                 </p>
             </div>

            <div className="overflow-x-auto">
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
                    <td className="p-4 border-b border-white/5 font-bold text-white">Gelées de fruits</td>
                    <td className="p-4 border-b border-white/5">4g à 6g par litre</td>
                    <td className="p-4 border-b border-white/5">Gelée ferme qu'on peut couper au couteau (cubes).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Flans / Crèmes</td>
                    <td className="p-4 border-b border-white/5">2g à 4g par litre</td>
                    <td className="p-4 border-b border-white/5">Texture prise mais souple.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/5 font-bold text-white">Confitures allégées</td>
                    <td className="p-4 border-b border-white/5">1g à 2g par kg</td>
                    <td className="p-4 border-b border-white/5">Permet de gélifier avec peu de sucre et peu de cuisson.</td>
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
                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-red-500/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Flame className="w-4 h-4 text-red-500" />
                        L'Ébullition Obligatoire
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                        Si vous délayez l'agar dans un liquide chaud sans le faire bouillir au moins 30 secondes à 1 minute, il ne prendra pas (ou très mal).
                    </p>
                    <p className="text-gray-400 text-sm font-bold">
                        Le séchage de l'algue nécessite une réhydratation thermique violente.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-[#D4AF37]/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <FlaskConical className="w-4 h-4 text-[#D4AF37]" />
                        L'Acidité
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Comme pour la gélatine, les milieux très acides (Citron, Fruit de la passion) affaiblissent le gel. Il faut augmenter légèrement la dose dans ces cas-là.
                    </p>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-sm border-l-2 border-green-400/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                         <Leaf className="w-4 h-4 text-green-400" />
                        Le Synergie
                    </h3>
                    <p className="text-gray-400 text-sm">
                        L'agar-agar devient très élastique et moins cassant si on le mélange avec beaucoup de sucre. C'est pour cela que les pâtes de fruits à l'agar sont plus agréables que les gelées peu sucrées.
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AgarAgarPage;