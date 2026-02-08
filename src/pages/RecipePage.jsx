import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes'; // On importe nos données

const RecipePage = () => {
  const { recipeId } = useParams();
  
  // On cherche la recette correspondante
  const recipe = recipes.find(r => r.id === recipeId);

  // Si la recette n'existe pas
  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl text-red-500 mb-4">Recette introuvable</h2>
        <Link to="/patisserie" className="text-yellow-500 hover:underline">Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/patisserie" className="text-gray-500 hover:text-yellow-500 mb-8 block">← Retour</Link>
        
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">{recipe.title}</h1>
        <span className="bg-gray-800 text-xs px-3 py-1 rounded-full uppercase tracking-widest text-gray-300 mb-8 inline-block">
          {recipe.category}
        </span>
        
        <p className="text-xl text-gray-300 mb-12 italic border-l-4 border-yellow-600 pl-4">
          {recipe.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingrédients */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500 border-b border-gray-700 pb-2">Ingrédients</h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Étapes */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Préparation</h3>
            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex">
                  <span className="text-5xl font-bold text-gray-800 mr-4 -mt-2">{index + 1}</span>
                  <p className="text-gray-300 mt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;