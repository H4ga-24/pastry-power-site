import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat } from 'lucide-react';

const PainEpices = () => {
  const recipeData = {
    category: "PÂTISSERIE • GÂTEAUX DE VOYAGE",
    title: "Pain d'épices",
    prepTime: "20 MIN",
    cookTime: "55 MIN",
    difficulty: "FACILE",
    description: "Le véritable pain d'épice, riche en miel et aux parfums envoûtants de cannelle, d'anis et de girofle.",
    image: "https://www.agrilait.fr/wp-content/uploads/2021/08/recette-pain-d-epice-agrilait-scaled-1-1600x1067.jpg",
  };

  const ingredients = [
    { name: "Miel de forêt", amount: "250g" },
    { name: "Farine de seigle", amount: "125g" },
    { name: "Farine de blé T55", amount: "125g" },
    { name: "Lait entier", amount: "100g" },
    { name: "Sucre cassonade", amount: "50g" },
    { name: "Beurre", amount: "50g" },
    { name: "Mélange 4 épices", amount: "10g" },
    { name: "Bicarbonate de soude", amount: "8g" },
    { name: "Zestes d'orange", amount: "1/2" }
  ];

  const steps = [
    { title: "Préparation liquide", text: "Dans une casserole, faire chauffer doucement le lait, le beurre, le sucre et le miel jusqu'à ce que le tout soit fondu et homogène." },
    { title: "Préparation sèche", text: "Dans un bol, mélanger les farines, les épices et le bicarbonate de soude." },
    { title: "Mélange", text: "Verser le mélange liquide chaud sur les poudres tout en fouettant énergiquement pour éviter les grumeaux. Ajouter les zestes." },
    { title: "Cuisson", text: "Verser dans un moule à cake beurré et fariné. Cuire à 160°C pendant environ 50 à 60 minutes." },
    { title: "Repos", text: "Démouler tiède et emballer dans du film alimentaire. Attendre 24h avant de déguster pour que les arômes se diffusent." }
  ];

  return (
    <>
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        <div className="relative h-[50vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
              <div className="flex gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl pb-24 mt-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="bg-[#1a1a1a] p-6 border-l-4 border-[#D4AF37] sticky top-24">
                <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
                <ul className="space-y-3">
                  {ingredients.map((ing, i) => (
                    <li key={i} className="flex justify-between text-sm border-b border-white/5 pb-2"><span className="text-gray-300">{ing.name}</span><span className="text-[#D4AF37]">{ing.amount}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-2 space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                   <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif font-bold flex-shrink-0">{i+1}</div>
                   <div><h3 className="text-[#D4AF37] text-lg mb-2 uppercase tracking-wide font-serif">{step.title}</h3><p className="text-gray-400 font-light text-lg leading-relaxed">{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PainEpices;