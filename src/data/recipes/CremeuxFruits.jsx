import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CremeuxFruits = () => {
  const recipeData = {
    title: "Les Crémeux aux Fruits",
    category: "PÂTISSERIE • CRÉMEUX",
    prepTime: "25 MIN",
    cookTime: "10 MIN",
    difficulty: "MOYEN",
    description: "Un tableau complet de proportions pour réaliser des crémeux onctueux avec une large variété de fruits et légumes. La technique reste identique, seuls les dosages s'adaptent à l'acidité et à la teneur en eau de chaque fruit.",
    image: "https://lapetitecolin.fr/wp-content/uploads/2023/05/IMG_20230311_092339-1024x768.jpg"
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
    { name: "Fruit de la passion", puree: 1000, jaunes: 220, oeufs: 280, sucre: 320, gelatine: 14, beurre: 500 },
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

  return (
    <>
      <Helmet>
        <title>{recipeData.title} - Maison Dorée</title>
        <meta name="description" content={recipeData.description} />
      </Helmet>
      
      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          
          <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <Link to="/patisserie/bases/cremeux" className="inline-flex items-center text-gray-300 hover:text-[#D4AF37] transition-colors mb-6 text-sm tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux crémeux
              </Link>
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-4xl leading-tight">{recipeData.title}</h1>
              <div className="flex flex-wrap items-center gap-8 text-xs tracking-widest font-medium text-white/80">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.prepTime} PRÉPARATION</span></div>
                <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /><span>{recipeData.cookTime} CUISSON</span></div>
                <div className="border border-[#D4AF37] text-[#D4AF37] px-3 py-1 rounded-full text-[10px]">{recipeData.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 max-w-6xl pb-24">
          
          {/* Introduction */}
          <div className="flex gap-4 mb-16 max-w-4xl ml-auto">
            <span className="text-[#D4AF37] text-6xl font-serif leading-none">“</span>
            <p className="text-gray-300 font-light text-lg italic leading-relaxed pt-4">{recipeData.description}</p>
          </div>

          {/* Table Section */}
          <div className="mb-20">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#222]">
                <h3 className="text-xl font-serif text-[#D4AF37]">Tableau des Proportions</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Info className="w-4 h-4" />
                  <span>Tous les poids sont en grammes (g)</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-gray-400 border-b border-white/5">
                      <th className="p-4 font-medium text-white">Fruit / Légume</th>
                      <th className="p-4 font-medium text-center">Purée</th>
                      <th className="p-4 font-medium text-center">Jaunes</th>
                      <th className="p-4 font-medium text-center">Œufs</th>
                      <th className="p-4 font-medium text-center">Sucre</th>
                      <th className="p-4 font-medium text-center">Gélatine</th>
                      <th className="p-4 font-medium text-center">Beurre</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                    {tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium text-white border-r border-white/5">{row.name}</td>
                        <td className="p-4 text-center text-[#D4AF37] font-medium">{row.puree}</td>
                        <td className="p-4 text-center">{row.jaunes}</td>
                        <td className="p-4 text-center">{row.oeufs}</td>
                        <td className="p-4 text-center">{row.sucre}</td>
                        <td className="p-4 text-center">{row.gelatine}</td>
                        <td className="p-4 text-center text-[#D4AF37] font-medium">{row.beurre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4">Procédé de réalisation</h2>
             <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-lg group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">1</div>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-xl mb-3">Préparation & Cuisson</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-2">Chauffer la purée de fruit dans une casserole.</p>
                    <p className="text-gray-400 font-light leading-relaxed">Dans un cul-de-poule, mélanger les œufs, les jaunes et le sucre sans blanchir. Verser une partie de la purée chaude sur le mélange d'œufs, reverser le tout dans la casserole et cuire à la nappe (83°C/85°C) en remuant constamment, comme une crème anglaise.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-lg group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">2</div>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-xl mb-3">Collage & Refroidissement</h3>
                    <p className="text-gray-400 font-light leading-relaxed">Hors du feu, ajouter la gélatine préalablement hydratée et essorée. Chinoiser la préparation dans un récipient haut. Laisser refroidir à température ambiante jusqu'à atteindre environ 35°C / 40°C.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-lg group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">3</div>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-xl mb-3">Emulsion</h3>
                    <p className="text-gray-400 font-light leading-relaxed">Ajouter le beurre froid coupé en dés. Mixer à l'aide d'un mixeur plongeant en restant bien au fond pour ne pas incorporer d'air, jusqu'à obtenir une texture lisse, brillante et parfaitement homogène.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-lg group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">4</div>
                  </div>
                  <div>
                    <h3 className="text-[#D4AF37] font-serif text-xl mb-3">Stockage</h3>
                    <p className="text-gray-400 font-light leading-relaxed">Couler immédiatement dans vos inserts, cadres ou moules, ou filmer au contact et réserver au réfrigérateur pour une utilisation ultérieure (pochage après cristallisation).</p>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CremeuxFruits;