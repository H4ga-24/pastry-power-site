import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Info, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LesMoussesChocolatFruits = () => {
  const recipeData = {
    category: "PÂTISSERIE • MOUSSES",
    title: "Les Mousses Chocolat aux Fruits",
    prepTime: "40 MIN",
    cookTime: "5 MIN",
    difficulty: "MOYEN",
    description: "Un tableau complet des dosages pour réaliser des mousses au chocolat au lait parfumées aux fruits. Une base technique indispensable pour varier les plaisirs.",
    image: "https://cache.marieclaire.fr/data/photo/w1000_ci/5f/mousses-au-chocolat-et-aux-framboises.jpg",
  };

  const tableData = [
    { name: "Ananas", puree: "1000", cream1: "480", glucose: "360", choco: "1785", gelatine: "25", cream2: "1680" },
    { name: "Banane", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "28", cream2: "2040" },
    { name: "Bergamote", puree: "1000", cream1: "560", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Cassis", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "28", cream2: "2040" },
    { name: "Citron jaune", puree: "1000", cream1: "610", glucose: "500", choco: "2280", gelatine: "28", cream2: "2140" },
    { name: "Citron vert", puree: "1000", cream1: "610", glucose: "500", choco: "2280", gelatine: "28", cream2: "2140" },
    { name: "Coco", puree: "1000", cream1: "540", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Cranberry et griotte", puree: "1000", cream1: "450", glucose: "330", choco: "1660", gelatine: "25", cream2: "1560" },
    { name: "Framboise", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "30", cream2: "2040" },
    { name: "Fruits de la passion", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "30", cream2: "2040" },
    { name: "Fruits tropicaux", puree: "1000", cream1: "540", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Gingembre", puree: "1000", cream1: "560", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Goyave", puree: "1000", cream1: "480", glucose: "360", choco: "1785", gelatine: "25", cream2: "1680" },
    { name: "Griotte", puree: "1000", cream1: "450", glucose: "330", choco: "1660", gelatine: "25", cream2: "1560" },
    { name: "Kalamansi", puree: "1000", cream1: "610", glucose: "500", choco: "2280", gelatine: "28", cream2: "2140" },
    { name: "Litchi", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "30", cream2: "2040" },
    { name: "Mandarine", puree: "1000", cream1: "450", glucose: "330", choco: "1660", gelatine: "25", cream2: "1560" },
    { name: "Mangue", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "30", cream2: "2040" },
    { name: "Mangue épicée", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "30", cream2: "2040" },
    { name: "Marron vanille", puree: "1000", cream1: "380", glucose: "315", choco: "1430", gelatine: "20", cream2: "1350" },
    { name: "Orange et orange amère", puree: "1000", cream1: "580", glucose: "480", choco: "2200", gelatine: "28", cream2: "2040" },
    { name: "Orange sanguine", puree: "1000", cream1: "540", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Poire", puree: "1000", cream1: "540", glucose: "440", choco: "2000", gelatine: "28", cream2: "1880" },
    { name: "Yuzu", puree: "1000", cream1: "610", glucose: "500", choco: "2280", gelatine: "28", cream2: "2140" },
  ];

  const steps = [
    { title: "Préparation de la base", text: "Chauffer la purée de fruit avec le glucose et la première partie de crème liquide (Cream 1)." },
    { title: "Gélification", text: "Ajouter la gélatine préalablement ramollie dans 5 fois son poids en eau froide (masse gélatine) dans le mélange chaud." },
    { title: "Émulsion", text: "Verser le mélange chaud sur le chocolat au lait (38%) en pistoles et mélanger soigneusement pour créer une émulsion lisse et brillante (ganache)." },
    { title: "Incorporation", text: "Laisser refroidir le mélange. À 35°C, ajouter délicatement la seconde partie de crème liquide (Cream 2) montée souple (baveuse)." },
    { title: "Dressage", text: "Mouler directement dans vos cercles, cadres ou verrines sans attendre, car la mousse prend rapidement." }
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
        <div className="container mx-auto px-4 max-w-7xl pb-24 mt-12">
          
          <div className="mb-12 bg-[#1a1a1a] p-6 border-l-4 border-[#D4AF37] rounded-r-lg">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif text-white mb-2">Note technique</h3>
                <p className="text-gray-400 font-light">
                  Ces recettes sont basées sur une ganache montée aux fruits. La température d'incorporation de la crème montée (35°C) est cruciale pour obtenir une texture parfaite, ni grainée ni liquide. Les poids sont donnés en grammes.
                </p>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-[#1e1e1e] border border-white/5 rounded-lg overflow-hidden mb-16 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#252525] border-b border-white/10">
                    <th className="p-4 text-[#D4AF37] font-serif font-normal text-lg sticky left-0 bg-[#252525] z-10">Nom du Fruit</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Purée (g)</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Crème 35% (Base) (g)</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Glucose (g)</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Chocolat Lait 38% (g)</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Gélatine 200B (g)</th>
                    <th className="p-4 text-gray-300 font-medium text-sm text-center">Crème 35% (Montée) (g)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-white sticky left-0 bg-[#1e1e1e] group-hover:bg-[#2a2a2a]">{row.name}</td>
                      <td className="p-4 text-gray-400 text-center">{row.puree}</td>
                      <td className="p-4 text-gray-400 text-center">{row.cream1}</td>
                      <td className="p-4 text-gray-400 text-center">{row.glucose}</td>
                      <td className="p-4 text-[#D4AF37] font-medium text-center">{row.choco}</td>
                      <td className="p-4 text-gray-400 text-center">{row.gelatine}</td>
                      <td className="p-4 text-gray-400 text-center">{row.cream2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#252525] border-t border-white/10 flex items-center gap-2 text-xs text-gray-500">
              <AlertCircle className="w-4 h-4" />
              <span>Astuce : Faites défiler horizontalement pour voir toutes les colonnes sur mobile.</span>
            </div>
          </div>

          {/* Steps Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Procédé de Fabrication</h2>
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  className="flex gap-6"
                >
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-lg flex-shrink-0 font-bold bg-[#1a1a1a]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-xl mb-2 uppercase tracking-wide">{step.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed text-lg">{step.text}</p>
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

export default LesMoussesChocolatFruits;