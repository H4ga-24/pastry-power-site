import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PainDeThon = () => {
  const ingredients = [
    { name: "Thon", amount: "300g" },
    { name: "Gruyère", amount: "100g" },
    { name: "Farine", amount: "100g" },
    { name: "Oeufs", amount: "3" },
    { name: "Lait", amount: "100g" },
    { name: "Huile", amount: "100g" },
    { name: "Levure chimique", amount: "10g" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>Pain de Thon - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/patisserie/gateaux/gateaux-de-voyage/cakes-sales">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt="Pain de Thon" src="https://assets.magimix.com/files/rec_27840/photo_pain-thon-photo.jpg" />
            <h1 className="text-4xl font-serif mb-6 text-white">Pain de Thon</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 50 MIN</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> TRÈS FACILE</div>
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
              <p><span className="text-[#D4AF37] font-bold">1.</span> Préchauffez le four à 180°C. Émiettez le thon.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Dans un saladier, mélangez la farine et la levure chimique.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Ajoutez les œufs, l'huile et le lait. Mélangez bien.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Incorporez le gruyère râpé et le thon émietté. Mélangez.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake et enfournez pour 40 à 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainDeThon;