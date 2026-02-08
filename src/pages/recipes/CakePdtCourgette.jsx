import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakePdtCourgette = () => {
  const ingredients = [
    { name: "Oeufs", amount: "8" },
    { name: "Crème épaisse", amount: "1/2 litre" },
    { name: "Beurre", amount: "50g" },
    { name: "Farine", amount: "100g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Pommes de terre", amount: "2" },
    { name: "Courgettes", amount: "2" },
    { name: "Huile d'olive", amount: "30g" },
    { name: "Muscade", amount: "1 pincée" },
    { name: "Persil et cerfeuil", amount: "2 branches" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake P. de Terre Courgettes Bain-Marie - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Pdt Courgette" src="https://static.comment-economiser.fr/images/photos_astuces/cake-courgette-pdt-6609.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake P. de Terre & Courgette</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H 30</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Épluchez les pommes de terre et lavez les courgettes. Coupez-les en fines rondelles. Faites-les précuire 10 min dans l'eau bouillante salée ou à la poêle avec l'huile d'olive.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Préchauffez le four à 180°C (bain-marie). Dans un saladier, battez les 8 œufs avec la crème épaisse.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Ajoutez la farine, le beurre fondu, la muscade, le sel, le poivre et les herbes ciselées. Mélangez bien.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère et les légumes précuits. Versez dans un moule à cake.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Placez le moule dans un grand plat rempli d'eau chaude (bain-marie) et enfournez pour 1 heure environ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakePdtCourgette;