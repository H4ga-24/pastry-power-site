import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeSaintJacques = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Parmesan", amount: "50g" },
    { name: "Poireaux", amount: "150g" },
    { name: "Curry", amount: "5g" },
    { name: "Beurre 1/2 sel", amount: "20g" },
    { name: "Huile d'olive", amount: "15g" },
    { name: "Eau", amount: "10cl" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Saint-Jacques Poireaux - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Saint-Jacques" src="https://i.f1g.fr/media/cms/1200x630_crop/2022/02/07/1717f8a6b852a6ce9896fa6eab703c86568c1b14665b66ae22cf31417f709e4b.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Saint-Jacques & Poireaux</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H 10</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Préchauffez le four à 180°C. Émincez finement les poireaux. Dans une poêle, faites revenir les poireaux dans le mélange beurre et huile d'olive.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Ajoutez l'eau et le curry, puis laissez réduire jusqu'à évaporation complète du liquide. Laissez refroidir.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Dans un saladier, mélangez la farine et la levure. Incorporez les œufs un à un, puis versez petit à petit l'huile et le lait tiédi en mélangeant au fouet pour obtenir une pâte lisse.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le parmesan râpé à la pâte. Ajoutez ensuite la fondue de poireaux (et les noix de Saint-Jacques coupées en morceaux si vous en utilisez des fraîches, ou entières si pétoncles).</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Salez, poivrez. Versez dans un moule à cake beurré et fariné. Enfournez pour environ 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeSaintJacques;