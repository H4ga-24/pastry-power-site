import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeOceane = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Fruits de mer (crevette/moule/calamar)", amount: "210g" },
    { name: "Beurre", amount: "20g" },
    { name: "Gousse d'ail", amount: "1" },
    { name: "Persil (branches)", amount: "2" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Océane - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Océane" src="https://assets.afcdn.com/story/20220329/2166842_w1200h630c1cx600cy400cxt0cyt0cxb1200cyb800.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Océane</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Faites revenir le mélange de fruits de mer dans le beurre avec l'ail haché et le persil ciselé pendant quelques minutes. Laissez refroidir.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Préchauffez le four à 180°C. Dans un bol, mélangez la farine et la levure chimique.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Ajoutez les œufs, mélangez, puis incorporez l'huile et le lait tiède pour obtenir une pâte fluide.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère râpé et le mélange de fruits de mer. Salez et poivrez.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake beurré et faites cuire 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeOceane;