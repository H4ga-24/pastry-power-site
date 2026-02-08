import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeChevreCourgette = () => {
  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "150g" },
    { name: "Levure chimique", amount: "10g" },
    { name: "Huile", amount: "100g" },
    { name: "Lait", amount: "125g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Chèvre", amount: "200g" },
    { name: "Courgette", amount: "1" },
    { name: "Huile d'olive", amount: "30g" },
    { name: "Bouquet cerfeuil", amount: "1" },
    { name: "Sel", amount: "1 pincée" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Cake Chèvre & Courgette - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Cake Chèvre Courgette" src="https://odelices.ouest-france.fr/images/recettes/cake-courgettes-chevre.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Cake Chèvre & Courgette</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 55 MIN</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Lavez et coupez la courgette en petits dés (sans l'éplucher). Faites-les revenir dans l'huile d'olive quelques minutes pour qu'ils rendent leur eau. Coupez le chèvre en dés. Ciselez le cerfeuil.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Préchauffez le four à 180°C. Dans un saladier, mélangez farine et levure. Ajoutez les œufs et mélangez.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Versez l'huile et le lait tiédi progressivement en remuant. Assaisonnez avec le sel et le poivre.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère, les dés de courgette, le chèvre et le cerfeuil.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake et faites cuire 45 minutes environ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeChevreCourgette;