import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeFoieVolaille = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "80g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Foies de volaille", amount: "200g" },
    { name: "Beurre", amount: "20g" },
    { name: "Echalote", amount: "1" },
    { name: "Pignons de pin", amount: "50g" },
    { name: "Basilic", amount: "3 feuilles" },
    { name: "Porto", amount: "15g" },
    { name: "Menthe", amount: "2 feuilles" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Foie de Volaille - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Foie Volaille" src="https://img.cuisineaz.com/1024x768/2015/04/15/i91265-cake-aux-pignons-de-pin-fromage-et-pesto.webp" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Foie de Volaille & Pignons</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H 15</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> MOYEN</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Nettoyez les foies de volaille. Ciselez l'échalote. Faites revenir l'échalote et les foies dans le beurre. Déglacez avec le Porto.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Coupez les foies cuits en dés. Torréfiez légèrement les pignons de pin à la poêle. Ciselez le basilic et la menthe.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Préchauffez le four à 180°C. Préparez l'appareil à cake en mélangeant farine, levure, œufs, huile et lait.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère, les foies, les pignons et les herbes à la pâte. Assaisonnez.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule et enfournez pour 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeFoieVolaille;