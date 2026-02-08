import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeAspergesGirolles = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "3g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Asperges pointes", amount: "150g" },
    { name: "Girolles", amount: "100g" },
    { name: "Beurre", amount: "20g" },
    { name: "Echalote", amount: "1" },
    { name: "Thym", amount: "3g" },
    { name: "Graines coriandre hachées", amount: "10" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Asperges Girolles - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Asperges Girolles" src="https://static.750g.com/images/1200-630/3acc5362272b9e86cea229db61b7222b/cake-aux-asperges-et-au-colin.png" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Asperges & Girolles</h1>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Faites blanchir les pointes d'asperges quelques minutes dans l'eau bouillante. Nettoyez les girolles. Ciselez l'échalote.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Dans une poêle avec le beurre, faites revenir l'échalote et les girolles. Ajoutez le thym et les graines de coriandre. Laissez cuire jusqu'à évaporation de l'eau des champignons.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Préchauffez le four à 180°C. Mélangez la farine et la levure dans un bol.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Ajoutez les œufs, l'huile et le lait. Mélangez bien.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Incorporez le gruyère, les asperges et la poêlée de girolles. Salez et poivrez.</p>
              <p><span className="text-[#D4AF37] font-bold">6.</span> Versez dans un moule à cake et enfournez pour 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeAspergesGirolles;