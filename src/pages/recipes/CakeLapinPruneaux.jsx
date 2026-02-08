import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeLapinPruneaux = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Lapin (cuit/désossé)", amount: "200g" },
    { name: "Cresson", amount: "150g" },
    { name: "Pruneaux", amount: "80g" },
    { name: "Huile d'olive", amount: "15g" },
    { name: "Sarriette", amount: "2g" },
    { name: "Sel", amount: "2 pincées" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Lapin Pruneaux Cresson - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Lapin Pruneaux" src="https://www.pleinevie.fr/wp-content/uploads/pleinevie/2019/01/recette-cake-aux-pruneaux-magret-canard-cresson.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Lapin, Pruneaux & Cresson</h1>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Préchauffez le four à 180°C. Coupez la chair de lapin en petits dés. Hachez grossièrement le cresson lavé. Coupez les pruneaux en morceaux.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Dans une poêle avec l'huile d'olive, faites revenir rapidement les dés de lapin avec la sarriette. Salez, poivrez.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Dans un saladier, fouettez les œufs, la farine et la levure. Ajoutez petit à petit l'huile et le lait tiédi. Mélangez jusqu'à obtenir une pâte homogène.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère râpé, puis le lapin, les pruneaux et le cresson à l'appareil.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake non graissé (ou chemisé) et faites cuire 45 à 50 minutes. Vérifiez la cuisson avec la lame d'un couteau.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeLapinPruneaux;