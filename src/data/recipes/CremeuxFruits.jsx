import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Info, AlertCircle, Minus, Plus, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// 🔥 CARTE D'IDENTITÉ POUR LE SCANNER
export const recipeData = {
  id: "les-cremeux-aux-fruits",
  title: "Les Crémeux aux Fruits",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un tableau complet de proportions pour réaliser des crémeux onctueux avec une large variété de fruits et légumes.",
  image: "https://lapetitecolin.fr/wp-content/uploads/2023/05/IMG_20230311_092339-1024x768.jpg"
};

function CremeuxFruits() {
  const [multiplier, setMultiplier] = useState(1);

  // Fonction de calcul sécurisée placée en haut
  const calculateAmount = (val) => {
    return Math.round(val * multiplier);
  };

  const tableData = [
    { name: "Abricot", puree: 1000, jaunes: 160, oeufs: 220, sucre: 180, gelatine: 10, beurre: 350 },
    { name: "Ananas", puree: 1000, jaunes: 180, oeufs: 240, sucre: 200, gelatine: 12, beurre: 350 },
    { name: "Banane", puree: 1000, jaunes: 140, oeufs: 180, sucre: 150, gelatine: 8, beurre: 300 },
    { name: "Bergamote", puree: 1000, jaunes: 220, oeufs: 280, sucre: 350, gelatine: 14, beurre: 500 },
    { name: "Cassis", puree: 1000, jaunes: 180, oeufs: 220, sucre: 250, gelatine: 12, beurre: 400 },
    { name: "Cerise", puree: 1000, jaunes: 160, oeufs: 220, sucre: 200, gelatine: 11, beurre: 350 },
    { name: "Citron", puree: 1000, jaunes: 220, oeufs: 300, sucre: 350, gelatine: 15, beurre: 500 },
    { name: "Clémentine", puree: 1000, jaunes: 200, oeufs: 250, sucre: 250, gelatine: 13, beurre: 400 },
    { name: "Coing", puree: 1000, jaunes: 160, oeufs: 200, sucre: 180, gelatine: 10, beurre: 350 },
    { name: "Cranberry", puree: 1000, jaunes: 180, oeufs: 220, sucre: 280, gelatine: 12, beurre: 400 },
    { name: "Figue", puree: 1000, jaunes: 150, oeufs: 200, sucre: 160, gelatine: 9, beurre: 320 },
    { name: "Fraise", puree: 1000, jaunes: 180, oeufs: 230, sucre: 200, gelatine: 12, beurre: 380 },
    { name: "Framboise", puree: 1000, jaunes: 190, oeufs: 240, sucre: 240, gelatine: 12, beurre: 400 },
    { name: "Passion", puree: 1000, jaunes: 220, oeufs: 280, sucre: 320, gelatine: 14, beurre: 500 },
    { name: "Goyave", puree: 1000, jaunes: 160, oeufs: 210, sucre: 190, gelatine: 11, beurre: 350 },
    { name: "Grenade", puree: 1000, jaunes: 170, oeufs: 220, sucre: 220, gelatine: 12, beurre: 380 },
    { name: "Groseille", puree: 1000, jaunes: 180, oeufs: 230, sucre: 260, gelatine: 12, beurre: 400 },
    { name: "Kiwi", puree: 1000, jaunes: 170, oeufs: 220, sucre: 220, gelatine: 12, beurre: 380 },
    { name: "Litchi", puree: 1000, jaunes: 150, oeufs: 190, sucre: 150, gelatine: 10, beurre: 300 },
    { name: "Mandarine", puree: 1000, jaunes: 200, oeufs: 250, sucre: 240, gelatine: 13, beurre: 400 },
    { name: "Mangue", puree: 1000, jaunes: 160, oeufs: 210, sucre: 180, gelatine: 10, beurre: 350 },
    { name: "Melon", puree: 1000, jaunes: 160, oeufs: 200, sucre: 180, gelatine: 12, beurre: 350 },
    { name: "Mûre", puree: 1000, jaunes: 180, oeufs: 230, sucre: 230, gelatine: 12, beurre: 400 },
    { name: "Myrtille", puree: 1000, jaunes: 170, oeufs: 220, sucre: 220, gelatine: 11, beurre: 380 },
    { name: "Orange", puree: 1000, jaunes: 200, oeufs: 260, sucre: 250, gelatine: 13, beurre: 420 },
    { name: "Pamplemousse", puree: 1000, jaunes: 210, oeufs: 270, sucre: 280, gelatine: 13, beurre: 450 },
    { name: "Papaye", puree: 1000, jaunes: 160, oeufs: 200, sucre: 180, gelatine: 10, beurre: 340 },
    { name: "Pêche", puree: 1000, jaunes: 160, oeufs: 220, sucre: 180, gelatine: 10, beurre: 350 },
    { name: "Poire", puree: 1000, jaunes: 150, oeufs: 200, sucre: 160, gelatine: 10, beurre: 340 },
    { name: "Pomme", puree: 1000, jaunes: 160, oeufs: 210, sucre: 180, gelatine: 10, beurre: 360 },
  ];

  const steps = [
    { title: "Préparation & Cuisson", text: "Chauffer la purée de fruit dans une casserole. Dans un cul-de-poule, mélanger les œufs, les jaunes et le sucre sans blanchir. Verser une partie de la purée chaude sur le mélange d'œufs, reverser le tout dans la casserole et cuire à la nappe (83°C/85°C) en remuant constamment, comme une crème anglaise." },
    { title: "Collage & Refroidissement", text: "Hors du feu, ajouter la gélatine préalablement hydratée et essorée. Chinoiser la préparation dans un récipient haut. Laisser refroidir à température ambiante jusqu'à atteindre environ 35°C / 40°C." },
    { title: "Émulsion", text: "Ajouter le beurre froid coupé en dés. Mixer à l'aide d'un mixeur plongeant en restant bien au fond pour ne pas incorporer d'air, jusqu'à obtenir une texture lisse, brillante et parfaitement homogène." },
    { title: "Stockage", text: "Couler immédiatement dans vos inserts, cadres ou moules, ou filmer au contact et réserver au réfrigérateur pour une utilisation ultérieure (pochage après cristallisation)." }
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
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3 block">Technique Professionnelle</span>
            <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter mb-4">{recipeData.title}</h1>
            <div className="flex gap-6 text-[10px] tracking-[0.2em] font-bold text-[#D4AF37]">
              <span className="flex items-center gap-2 uppercase"><Clock size={14}/> {recipeData.prepTime}</span>
              <span className="flex items-center gap-2 uppercase"><ChefHat size={14}/> {recipeData.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-12">
          {/* TABLEAU DE DOSAGE */}
          <div className="bg-[#1a1a1a] p-8 border border-white/5 rounded-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-serif italic mb-1">Calculateur de dosages</h2>
                <p className="text-gray-400 text-sm">Base calculée pour 1000g de purée. Valeurs en grammes.</p>
              </div>
              <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded-full border border-[#D4AF37]/20">
                <button onClick={() => setMultiplier(m => Math.max(0.1, m - 0.1))} className="text-[#D4AF37] hover:scale-110 transition-transform"><Minus size={16}/></button>
                <span className="font-serif text-xl min-w-[50px] text-center">x{multiplier.toFixed(1)}</span>
                <button onClick={() => setMultiplier(m => m + 0.1)} className="text-[#D4AF37] hover:scale-110 transition-transform"><Plus size={16}/></button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#222] text-[#D4AF37] uppercase text-[10px] tracking-widest">
                  <tr>
                    <th className="p-5 sticky left-0 bg-[#222] z-20">Fruit</th>
                    <th className="p-5 text-center">Purée</th>
                    <th className="p-5 text-center">Jaunes</th>
                    <th className="p-5 text-center">Œufs Entiers</th>
                    <th className="p-5 text-center">Sucre</th>
                    <th className="p-5 text-center">Gélatine</th>
                    <th className="p-5 text-center">Beurre</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tableData.map((f, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="p-4 font-bold sticky left-0 bg-[#1a1a1a] group-hover:bg-[#252525] border-r border-white/5 uppercase tracking-tighter text-[13px]">{f.name}</td>
                      <td className="p-4 text-center text-[#D4AF37] font-semibold">{calculateAmount(f.puree)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.jaunes)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.oeufs)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.sucre)}g</td>
                      <td className="p-4 text-center text-gray-400">{calculateAmount(f.gelatine)}g</td>
                      <td className="p-4 text-center text-[#D4AF37] font-semibold">{calculateAmount(f.beurre)}g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-5 bg-[#D4AF37]/5 border-l-2 border-[#D4AF37] rounded-sm text-gray-400 text-sm flex items-start gap-4 italic">
              <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <p>La technique reste identique pour chaque recette, seuls les dosages s'adaptent à l'acidité et à la teneur en eau de chaque fruit.</p>
            </div>
          </div>

          {/* MÉTHODE */}
          <div className="max-w-4xl mx-auto w-full">
             <h2 className="text-3xl font-serif text-white mb-10 text-center uppercase tracking-widest">Procédé de réalisation</h2>
             <div className="grid md:grid-cols-2 gap-8">
               {steps.map((s, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }} 
                    className="flex gap-4 p-6 bg-[#1a1a1a] border border-white/5 rounded-sm"
                  >
                   <span className="text-4xl font-serif text-[#D4AF37]/20 flex-shrink-0">{i+1}</span>
                   <div>
                     <h4 className="font-serif text-[#D4AF37] text-lg mb-2 tracking-wide uppercase">{s.title}</h4>
                     <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CremeuxFruits;