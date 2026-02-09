
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CremeMarrons = () => {
  const baseServings = 600; // g
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • CRÈMES",
    title: "Crème aux marrons",
    vip: true,
    prepTime: "20 MIN",
    cookTime: "10 MIN",
    difficulty: "MOYEN",
    description: "Une mousse onctueuse aux marrons (type Mont-Blanc), réalisée sur une base de pâte à bombe pour une texture aérienne et riche.",
    image: "https://assets.afcdn.com/recipe/20160916/10796_w1024h1024c1cx1500cy1000.webp",
  };

  const ingredients = [
    { name: 'Pâte de marrons', amount: 200, unit: 'g' },
    { name: 'Crème de marrons', amount: 100, unit: 'g' },
    { name: 'Jaunes d\'oeufs', amount: 60, unit: 'g' },
    { name: 'Sucre semoule', amount: 40, unit: 'g' },
    { name: 'Eau', amount: 30, unit: 'g' },
    { name: 'Beurre pommade', amount: 100, unit: 'g' },
    { name: 'Rhum ambré (facultatif)', amount: 10, unit: 'g' }
  ];

  const steps = [
    {
      title: "MÉLANGE MARRONS.",
      text: "Détendre la pâte de marrons avec la crème de marrons et le rhum. Le mélange doit être lisse."
    },
    {
      title: "PÂTE À BOMBE.",
      text: "Cuire l'eau et le sucre à 118°C. Verser sur les jaunes d'oeufs mousseux tout en fouettant jusqu'à refroidissement complet."
    },
    {
      title: "BEURRE.",
      text: "Incorporer le beurre pommade dans la pâte à bombe refroidie en fouettant."
    },
    {
      title: "ASSEMBLAGE.",
      text: "Ajouter le mélange aux marrons dans la crème au beurre légère. Fouetter pour homogénéiser."
    },
    {
      title: "UTILISATION.",
      text: "Utiliser avec une douille à nid (vermicelle) pour réaliser des Mont-Blancs."
    }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(baseAmount % 1 === 0 ? 0 : 1);
  };

  const increment = () => setServings(prev => prev + 100);
  const decrement = () => setServings(prev => (prev > 100 ? prev - 100 : 100));

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          
          <div className="absolute top-24 left-4 md:left-8 z-30">
            <Link to="/patisserie/bases/cremes">
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10 gap-2 bg-black/20 backdrop-blur-md border border-white/5">
                <ArrowLeft className="w-5 h-5" />
                Retour
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm md:text-base text-gray-300 mb-2">{recipeData.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipeData.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipeData.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  <span>{recipeData.cookTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>{recipeData.difficulty}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="steps" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
                  <TabsTrigger value="steps">Étapes</TabsTrigger>
                  <TabsTrigger value="tips">Conseils</TabsTrigger>
                </TabsList>

                <TabsContent value="steps" className="space-y-6 mt-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-300">{step.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="tips" className="space-y-4 mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Conseil de température</h4>
                        <p className="text-gray-300">La pâte à bombe doit être complètement refroidie avant d'incorporer le beurre pour éviter qu'il ne fonde.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Qualité des marrons</h4>
                        <p className="text-gray-300">Utilisez des marrons de bonne qualité pour un meilleur goût. Les marrons de Ardèche sont particulièrement recommandés.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Conservation</h4>
                        <p className="text-gray-300">La crème aux marrons se conserve 2-3 jours au réfrigérateur dans un récipient hermétique.</p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24 bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Ingrédients</h2>

                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <span className="text-gray-300">Pour {servings}g</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decrement}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{servings}</span>
                    <button
                      onClick={increment}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex justify-between items-center py-2 border-b border-white/5"
                    >
                      <span className="text-gray-300">{ingredient.name}</span>
                      <span className="font-semibold">
                        {calculateAmount(ingredient.amount)} {ingredient.unit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={() => window.print()}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  Imprimer
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CremeMarrons;
