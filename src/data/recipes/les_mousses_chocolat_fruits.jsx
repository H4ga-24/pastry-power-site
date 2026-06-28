import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Info, AlertCircle, Minus, Plus, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// 🔥 CARTE D'IDENTITÉ POUR LE SCANNER
export const recipeData = {
  id: "les-mousses-chocolat-fruits",
  title: "Les Mousses Chocolat aux Fruits",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: true,
  prepTime: "40 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Tableau de dosage professionnel pour ganaches montées fruitées au chocolat au lait.",
  image: "/images/recipes/les-mousses-chocolat-fruits.png",
};

function LesMoussesChocolatFruits() {
  const [multiplier, setMultiplier] = useState(1);

  // 👉 LA CORRECTION EST ICI : On place la fonction de calcul tout en haut et on la sécurise
  const calculateAmount = (val) => {
    return Math.round(val * multiplier);
  };

  const tableData = [
    { name: "Ananas", puree: 1000, cream1: 480, glucose: 360, choco: 1785, gelatine: 25, cream2: 1680 },
    { name: "Banane", puree: 1000, cream1: 580, glucose: 480, choco: 2200, gelatine: 28, cream2: 2040 },
    { name: "Bergamote", puree: 1000, cream1: 560, glucose: 440, choco: 2000, gelatine: 28, cream2: 1880 },
    { name: "Cassis", puree: 1000, cream1: 580, glucose: 480, choco: 2200, gelatine: 28, cream2: 2040 },
    { name: "Citron jaune", puree: 1000, cream1: 610, glucose: 500, choco: 2280, gelatine: 28, cream2: 2140 },
    { name: "Citron vert", puree: 1000, cream1: 610, glucose: 500, choco: 2280, gelatine: 28, cream2: 2140 },
    { name: "Coco", puree: 1000, cream1: 540, glucose: 440, choco: 2000, gelatine: 28, cream2: 1880 },
    { name: "Framboise", puree: 1000, cream1: 580, glucose: 480, choco: 2200, gelatine: 30, cream2: 2040 },
    { name: "Passion", puree: 1000, cream1: 580, glucose: 480, choco: 2200, gelatine: 30, cream2: 2040 },
    { name: "Fruits tropicaux", puree: 1000, cream1: 540, glucose: 440, choco: 2000, gelatine: 28, cream2: 1880 },
    { name: "Kalamansi", puree: 1000, cream1: 610, glucose: 500, choco: 2280, gelatine: 28, cream2: 2140 },
    { name: "Mangue", puree: 1000, cream1: 580, glucose: 480, choco: 2200, gelatine: 30, cream2: 2040 },
    { name: "Yuzu", puree: 1000, cream1: 610, glucose: 500, choco: 2280, gelatine: 28, cream2: 2140 },
  ];

  const steps = [
    { title: "Base Chaude", text: "Chauffer la purée, le glucose et la Crème 1." },
    { title: "Gélification", text: "Ajouter la gélatine réhydratée dans le mélange chaud." },
    { title: "Émulsion", text: "Verser sur le chocolat au lait et mixer pour lisser la ganache." },
    { title: "Liaison", text: "À 35°C, incorporer la Crème 2 montée souple." }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-32 pb-20 font-sans">
      <Helmet><title>{recipeData.title} - Pastry Power</title></Helmet>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <Link to="/patisserie">
          <Button variant="ghost" className="text-[#D4AF37] mb-8 pl-0 hover:bg-transparent hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
        </Link>
        
        {/* HERO SECTION */}
        <div className="relative h-[40vh] rounded-sm overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter mb-4">{recipeData.title}</h1>
            <div className="flex gap-6 text-[10px] tracking-[0.2em] font-bold text-[#D4AF37]">
              <span className="flex items-center gap-2"><Clock size={14}/> {recipeData.prepTime}</span>
              <span className="flex items-center gap-2"><ChefHat size={14}/> {recipeData.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-12">
          {/* TABLEAU DE DOSAGE */}
          <div className="bg-[#1a1a1a] p-8 border border-white/5 rounded-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl font-serif italic">Calculateur de dosages</h2>
              <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded-full border border-[#D4AF37]/20">
                <button onClick={() => setMultiplier(m => Math.max(0.1, m - 0.1))} className="text-[#D4AF37]"><Minus size={16}/></button>
                <span className="font-serif text-xl min-w-[50px] text-center">x{multiplier.toFixed(1)}</span>
                <button onClick={() => setMultiplier(m => m + 0.1)} className="text-[#D4AF37]"><Plus size={16}/></button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#222] text-[#D4AF37] uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="p-5 sticky left-0 bg-[#222] z-20">Parfum</th>
                    <th className="p-5 text-center">Purée</th>
                    <th className="p-5 text-center">Crème 1</th>
                    <th className="p-5 text-center">Glucose</th>
                    <th className="p-5 text-center">Choco Lait</th>
                    <th className="p-5 text-center">Gélatine</th>
                    <th className="p-5 text-center">Crème 2 (montée)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableData.map((f, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="p-4 font-bold sticky left-0 bg-[#1a1a1a] group-hover:bg-[#252525] border-r border-white/5">{f.name}</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.puree)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.cream1)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.glucose)}g</td>
                      <td className="p-4 text-center text-[#D4AF37] font-bold">{calculateAmount(f.choco)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.gelatine)}g</td>
                      <td className="p-4 text-center text-white font-medium">{calculateAmount(f.cream2)}g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MÉTHODE */}
          <div className="max-w-4xl mx-auto w-full">
             <div className="grid md:grid-cols-2 gap-8">
               {steps.map((s, i) => (
                 <div key={i} className="flex gap-4 p-6 bg-[#1a1a1a] border border-white/5 rounded-sm">
                   <span className="text-3xl font-serif text-[#D4AF37]/20">{i+1}</span>
                   <div>
                     <h4 className="font-serif text-[#D4AF37] text-lg mb-1">{s.title}</h4>
                     <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LesMoussesChocolatFruits;