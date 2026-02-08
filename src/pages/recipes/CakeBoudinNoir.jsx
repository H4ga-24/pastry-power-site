import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeBoudinNoir = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Pomme reinette", amount: "1" },
    { name: "Beurre", amount: "20g" },
    { name: "Boudin noir", amount: "200g" },
    { name: "Eau", amount: "5cl" },
    { name: "Crème fraîche", amount: "15g" },
    { name: "Sel", amount: "1 pincée" },
    { name: "Poivre", amount: "1 pincée" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Boudin Noir Pomme - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Boudin Noir" src="https://www.delicimo.fr/wp-content/uploads/2017/06/IMG_1830.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Boudin Noir & Pomme</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H 10</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Épluchez et coupez la pomme en dés. Enlevez la peau du boudin et coupez-le en rondelles ou dés. Faites-les revenir dans le beurre.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Préchauffez le four à 180°C. Dans un saladier, mélangez farine et levure.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Ajoutez les œufs, l'huile, le lait, l'eau et la crème fraîche. Mélangez bien.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère râpé et le mélange boudin/pommes. Salez et poivrez.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake et enfournez pour 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeBoudinNoir;