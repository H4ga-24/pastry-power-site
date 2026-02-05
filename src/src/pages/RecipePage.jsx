import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, Printer, ArrowLeft, Sparkles } from 'lucide-react';
import { recipesData } from '../data/recipesData'; 
import { Button } from "@/components/ui/button";

const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = recipesData[recipeId];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#D4AF37] text-2xl font-serif mb-4">Recette introuvable</h2>
          <Link to="/patisserie" className="text-white hover:underline">Retour aux recettes</Link>
        </div>
      </div>
    );
  }

  const [servings, setServings] = useState(recipe.baseServings);
  const ratio = servings / recipe.baseServings;

  return (
    <>
      <Helmet><title>{recipe.title} - Maison Dorée</title></Helmet>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          <div className="absolute top-24 left-8 z-30">
            <Link to="/patisserie/bases/cremes">
              <Button variant="ghost" className="text-[#D4AF37] border border-[#D4AF37]/20 bg-black/40 backdrop-blur-md gap-2">
                <ArrowLeft size={18} /> RETOUR
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-12 left-8 right-8 max-w-6xl mx-auto">
            <span className="text-[#D4AF37] tracking-[0.3em] text-xs font-bold uppercase">{recipe.category}</span>
            <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6 italic">{recipe.title}</h1>
            <div className="flex gap-8 text-xs tracking-widest text-white/60 uppercase">
              <div className="flex items-center gap-2"><Clock size={14} className="text-[#D4AF37]"/> {recipe.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat size={14} className="text-[#D4AF37]"/> {recipe.difficulty}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 py-16 grid lg:grid-cols-3 gap-16">
          {/* Ingrédients */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#141414] border-t-2 border-[#D4AF37] p-8 shadow-xl">
              <h3 className="font-serif text-2xl mb-8">Ingrédients</h3>
              <div className="flex items-center justify-between bg-black/40 p-3 rounded mb-8 border border-white/5">
                <button onClick={() => setServings(Math.max(100, servings - 100))} className="text-[#D4AF37]"><Minus size={16}/></button>
                <span className="font-serif text-lg">{servings}g</span>
                <button onClick={() => setServings(servings + 100)} className="text-[#D4AF37]"><Plus size={16}/></button>
              </div>
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-gray-400">{ing.name}</span>
                    <span className="text-[#D4AF37]">{Math.round(ing.amount * ratio)} {ing.unit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Étapes */}
          <div className="lg:col-span-2 space-y-12">
            <p className="text-gray-400 italic font-light text-xl leading-relaxed border-l-2 border-[#D4AF37] pl-6 mb-16">
              "{recipe.description}"
            </p>
            {recipe.steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex gap-8 group">
                <span className="text-4xl font-serif text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors">{i + 1}</span>
                <div>
                  <h4 className="text-[#D4AF37] text-xs tracking-widest uppercase mb-2 font-bold">{step.title}</h4>
                  <p className="text-gray-300 font-light leading-relaxed text-lg">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
