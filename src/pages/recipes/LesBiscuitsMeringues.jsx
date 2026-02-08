import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Info, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const LesBiscuitsMeringues = () => {
  const recipeData = {
    category: "PÂTISSERIE • BASES",
    title: "Les Biscuits Meringués",
    prepTime: "30 MIN",
    cookTime: "VARIE",
    difficulty: "MOYEN",
    description: "Un tableau comparatif des grands classiques des biscuits à base de meringue : Succès, Progrès, Japonais, Macaron Cachemire et Dacquoises.",
    image: "https://www.qooq.com/sites/default/files/styles/main_photo/public/externals/5888.jpg",
  };

  const variations = [
    {
      name: "Succès",
      yield: "2 disques Ø 200",
      cooking: "20-25 min à 170°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "90g" },
        { name: "Sucre semoule", amount: "80g" },
        { name: "Poudre d'amandes", amount: "80g" },
        { name: "Farine", amount: "17g" },
        { name: "Vanille liquide", amount: "QS" },
      ]
    },
    {
      name: "Progrès",
      yield: "2 disques Ø 200",
      cooking: "20-25 min à 170°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "110g" },
        { name: "Sucre semoule", amount: "83g" },
        { name: "Poudre noisette", amount: "62g" },
        { name: "Poudre amande", amount: "62g" },
        { name: "Farine", amount: "17g" },
        { name: "Vanille liquide", amount: "QS" },
      ]
    },
    {
      name: "Japonais",
      yield: "2 disques Ø 200",
      cooking: "20-25 min à 170°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "110g" },
        { name: "Sucre semoule", amount: "100g" },
        { name: "Poudre noisette", amount: "65g" },
        { name: "Farine", amount: "17g" },
      ]
    },
    {
      name: "Macaron Cachemire",
      yield: "1 plaque 40x60 cm",
      cooking: "18 min à 180°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "500g" },
        { name: "Sucre semoule", amount: "250g" },
        { name: "Farine", amount: "250g" },
        { name: "Poudre d'amandes", amount: "300g" },
        { name: "Amandes brutes", amount: "150g" },
      ]
    },
    {
      name: "Dacquoise",
      yield: "2 disques Ø 200",
      cooking: "15-18 min à 180°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "90g" },
        { name: "Sucre semoule", amount: "35g" },
        { name: "Farine", amount: "20g" },
        { name: "Sucre glace", amount: "60g" },
        { name: "Poudre d'amande ou noisette", amount: "65g" },
      ]
    },
    {
      name: "Dacquoise coco ou russe",
      yield: "1 plaque 40x60 cm",
      cooking: "15-18 min à 180°C",
      ingredients: [
        { name: "Blancs d'œufs", amount: "250g" },
        { name: "Sucre semoule", amount: "85g" },
        { name: "Farine", amount: "15g" },
        { name: "Sucre glace", amount: "210g" },
        { name: "Poudre d'amande", amount: "85g" },
        { name: "Coco râpé", amount: "25g" },
      ]
    }
  ];

  const steps = [
    { title: "Préparation des poudres", text: "Tamiser ensemble la farine, les poudres de fruits secs (amande, noisette) et le sucre glace (si présent dans la recette). Pour le Macaron Cachemire, les amandes brutes peuvent être concassées grossièrement pour apporter du croquant." },
    { title: "Réalisation de la meringue", text: "Dans la cuve du batteur, commencer à monter les blancs d'œufs à vitesse moyenne. Lorsqu'ils deviennent mousseux, ajouter le sucre semoule en 3 fois (serrer les blancs). Continuer de fouetter jusqu'à obtenir une meringue ferme, lisse et brillante (bec d'oiseau)." },
    { title: "Mélange (Macaronnage)", text: "Verser les poudres tamisées en pluie sur la meringue. Incorporer délicatement à l'aide d'une maryse en soulevant la masse du centre vers l'extérieur tout en tournant le bol. Le mélange doit être homogène mais rester aérien pour ne pas faire retomber les blancs." },
    { title: "Dressage", text: "Garnir une poche munie d'une douille unie (n°10 ou n°12). Coucher les biscuits sur une plaque recouverte de papier cuisson ou d'un tapis silicone, selon la forme désirée (disques en escargot, bandes cartouchières, ou étalé à la spatule pour les feuilles entières)." },
    { title: "Cuisson", text: "Enfourner immédiatement dans un four ventilé préchauffé. Respecter les temps et températures indiqués pour chaque biscuit. Surveiller la coloration : ils doivent être légèrement dorés mais rester moelleux à cœur (sauf pour Succès/Progrès/Japonais qui gagnent à être un peu plus secs)." },
    { title: "Refroidissement", text: "Laisser refroidir sur grille avant de décoller délicatement le papier cuisson." }
  ];

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>
      
      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
              <div className="flex gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
                <div className="border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full">{recipeData.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 max-w-6xl pb-24 mt-12">
          
          <div className="mb-12 bg-[#1a1a1a] p-6 border-l-4 border-[#D4AF37] rounded-r-lg">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Note technique</h3>
                <p className="text-gray-400 font-light">
                  Ces biscuits reposent tous sur le même principe de base : une meringue (généralement française ou parfois suisse selon la tenue désirée) délicatement mélangée à des poudres tamisées. Suivez la méthode commune ci-dessous en appliquant les temps de cuisson spécifiques à chaque variante.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {variations.map((variant, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-white/5 rounded-lg overflow-hidden hover:border-[#D4AF37]/50 transition-colors duration-300 flex flex-col">
                <div className="bg-[#252525] p-4 border-b border-white/5">
                  <h3 className="text-xl font-serif text-[#D4AF37] mb-1">{variant.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Pour : {variant.yield}</p>
                    <div className="flex items-center gap-1 text-[#D4AF37] text-xs bg-[#D4AF37]/10 px-2 py-1 rounded">
                      <Thermometer className="w-3 h-3" />
                      <span>{variant.cooking}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {variant.ingredients.map((ing, i) => (
                      <li key={i} className="flex justify-between items-center text-sm border-b border-white/5 last:border-0 pb-2 last:pb-0">
                        <span className="text-gray-300">{ing.name}</span>
                        <span className="text-[#D4AF37] font-medium">{ing.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Steps Section */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Méthode de Préparation (Commune)</h2>
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  className="flex gap-6"
                >
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-sm flex-shrink-0 font-bold bg-[#1a1a1a]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-lg mb-2 uppercase tracking-wide">{step.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LesBiscuitsMeringues;