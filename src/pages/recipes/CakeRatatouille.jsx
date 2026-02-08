import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeRatatouille = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Tomate", amount: "1" },
    { name: "Oignon", amount: "1/2" },
    { name: "Aubergine", amount: "1/2" },
    { name: "Courgette", amount: "1/2" },
    { name: "Huile d'olive", amount: "30g" },
    { name: "Basilic", amount: "3 feuilles" },
    { name: "Cerfeuil", amount: "1 bouquet" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Ratatouille - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Ratatouille" src="https://img.cuisineaz.com/1024x1024/2015/03/11/i113715-cake-a-la-ratatouille.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Ratatouille</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H 15</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> FACILE</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#D4AF37]" /> 8 PERS</div>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5">
              <h3 className="text-xl font-serif mb-6 text-[#D4AF37]">Ingrédients</h3>
              <ul className="space-y-3 text-gray-300">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                    <span>{ing.name}</span>
                    <span className="font-medium text-[#D4AF37]">{ing.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-white">Préparation</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p><span className="text-[#D4AF37] font-bold">1.</span> Lavez et coupez les légumes (tomate, oignon, aubergine, courgette) en petits dés.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Faites-les revenir dans une poêle avec l'huile d'olive jusqu'à ce qu'ils soient tendres et aient rendu leur eau. Ajoutez le basilic et le cerfeuil ciselés en fin de cuisson. Laissez refroidir.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Préchauffez le four à 180°C. Dans un saladier, mélangez la farine et la levure chimique.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Ajoutez les œufs, l'huile neutre et le lait. Mélangez bien pour obtenir une pâte lisse.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Incorporez le gruyère râpé et la poêlée de légumes refroidie. Salez et poivrez.</p>
              <p><span className="text-[#D4AF37] font-bold">6.</span> Versez dans un moule à cake beurré et fariné. Enfournez pour environ 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeRatatouille;