import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed, Table2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const PateDeFruits = () => {
  const [multiplier, setMultiplier] = useState(1); // Default to x1 (Base recipe from table)

  const recipeData = {
    category: "CONFISERIE • ARTISANALE",
    title: "Pâte de Fruits",
    yield: `Rendement variable selon le cadre (Tableau x${multiplier})`,
    type: "Confiserie Artisanale - Pâte de Fruits Maison",
    prepTime: "1H 00",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "La quintessence du fruit confit. Une texture fondante, un goût pur et intense. La maîtrise de la pectine jaune et de la cuisson au degré près est essentielle pour réussir cette confiserie d'exception.",
    image: "https://www.chocolaterie-charpot.fr/99-large_default/nos-pates-de-fruits-maison.jpg",
  };

  // Base data for 1 unit (1000g puree usually)
  // Structured based on the user's requested columns and standard professional charts (Boiron/Capfruit style)
  const fruitsData = [
    { name: "Abricot", puree: 1000, pectineMix: "120 / 24", jusPomme: 200, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Ananas 100%", puree: 1000, pectineMix: "125 / 24", jusPomme: 250, sucre: 1050, glucose: 240, acide: 30 },
    { name: "Banane 100%", puree: 1000, pectineMix: "130 / 26", jusPomme: 300, sucre: 1200, glucose: 260, acide: 15 },
    { name: "Bergamote 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Cassis", puree: 1000, pectineMix: "120 / 28", jusPomme: 250, sucre: 1100, glucose: 240, acide: 20 },
    { name: "Cerise noire 100%", puree: 1000, pectineMix: "100 / 24", jusPomme: 250, sucre: 1150, glucose: 230, acide: 30 },
    { name: "Citron jaune 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Citronnelle", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Cocktail Caraïbes au Rhum", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1050, glucose: 240, acide: 30 },
    { name: "Coco", puree: 1000, pectineMix: "125 / 24", jusPomme: 200, sucre: 1150, glucose: 240, acide: 20 },
    { name: "Figue 100% (2/3) / Framboise (1/3)", puree: 1000, pectineMix: "130 / 26", jusPomme: 300, sucre: 1150, glucose: 260, acide: 30 },
    { name: "Fraise", puree: 1000, pectineMix: "110 / 24", jusPomme: 250, sucre: 1050, glucose: 230, acide: 30 },
    { name: "Fraise des Bois", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1050, glucose: 240, acide: 30 },
    { name: "Fraise Mara des Bois", puree: 1000, pectineMix: "123 / 27", jusPomme: 240, sucre: 1050, glucose: 220, acide: 30 },
    { name: "Framboise", puree: 1000, pectineMix: "123 / 26", jusPomme: 290, sucre: 1000, glucose: 230, acide: 30 },
    { name: "Fruits du Soleil", puree: 1000, pectineMix: "120 / 24", jusPomme: 200, sucre: 1100, glucose: 230, acide: 30 },
    { name: "Fruits Rouges", puree: 1000, pectineMix: "130 / 26", jusPomme: 250, sucre: 1050, glucose: 240, acide: 30 },
    { name: "Fruits Tropicaux", puree: 1000, pectineMix: "140 / 28", jusPomme: 350, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Gingembre", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Goyave", puree: 1000, pectineMix: "110 / 28", jusPomme: 300, sucre: 1000, glucose: 210, acide: 30 },
    { name: "Grenade 100%", puree: 1000, pectineMix: "100 / 22", jusPomme: 150, sucre: 1000, glucose: 220, acide: 30 },
    { name: "Griotte (Grenadine)", puree: 1000, pectineMix: "110 / 26", jusPomme: 320, sucre: 1050, glucose: 230, acide: 20 },
    { name: "Groseille", puree: 1000, pectineMix: "135 / 27", jusPomme: 350, sucre: 1000, glucose: 230, acide: 20 },
    { name: "Kiwi 100%", puree: 1000, pectineMix: "150 / 30", jusPomme: 450, sucre: 1050, glucose: 280, acide: 30 },
    { name: "Litchi 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Mangue épicée", puree: 1000, pectineMix: "133 / 28", jusPomme: 330, sucre: 1100, glucose: 260, acide: 30 },
    { name: "Mangue 100%", puree: 1000, pectineMix: "150 / 30", jusPomme: 500, sucre: 1000, glucose: 290, acide: 30 },
    { name: "Melon", puree: 1000, pectineMix: "120 / 24", jusPomme: 200, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Mirabelle 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 260, acide: 30 },
    { name: "Mûre", puree: 1000, pectineMix: "110 / 26", jusPomme: 330, sucre: 1000, glucose: 230, acide: 20 },
    { name: "Myrtille", puree: 1000, pectineMix: "120 / 28", jusPomme: 330, sucre: 1000, glucose: 240, acide: 20 },
    { name: "Myrtille Cassis Cerise 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 300, sucre: 1050, glucose: 240, acide: 20 },
    { name: "Pamplemousse rose 100%", puree: 1000, pectineMix: "120 / 24", jusPomme: 200, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Papaye", puree: 1000, pectineMix: "122 / 26", jusPomme: 220, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Pêche blanche", puree: 1000, pectineMix: "125 / 24", jusPomme: 250, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Pêche sanguine", puree: 1000, pectineMix: "130 / 26", jusPomme: 300, sucre: 1100, glucose: 250, acide: 30 },
    { name: "Pêche Vigneron", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1100, glucose: 240, acide: 30 },
    { name: "Poire", puree: 1000, pectineMix: "125 / 24", jusPomme: 250, sucre: 1050, glucose: 240, acide: 30 },
    { name: "Pomme verte", puree: 1000, pectineMix: "120 / 26", jusPomme: 275, sucre: 1000, glucose: 240, acide: 15 },
    { name: "Potiron 100%", puree: 1000, pectineMix: "130 / 25", jusPomme: 280, sucre: 1180, glucose: 240, acide: 30 },
    { name: "Quetsche 100%", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 260, acide: 30 },
    { name: "Rhubarbe 100% (2/3) - Pomme (1/3)", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
    { name: "Violette", puree: 1000, pectineMix: "125 / 25", jusPomme: 250, sucre: 1150, glucose: 240, acide: 30 },
  ];

  const steps = [
    {
      title: "Dégorgement à la purée",
      text: "Décongeler la purée si nécessaire. Placer la purée de fruits et le jus de pomme (ou l'eau selon la recette) dans une grande casserole à fond épais ou un poêlon en cuivre. Commencer à chauffer doucement à 40°C."
    },
    {
      title: "Ajout en pluie fine",
      text: "Mélanger intimement la pectine jaune avec la petite partie du sucre (indiquée dans la colonne 'Mélange Sucre/Pectine'). Verser ce mélange en pluie fine sur la purée tiède tout en fouettant énergiquement pour éviter les grumeaux. Porter le tout à ébullition."
    },
    {
      title: "Cuisson & Apport de sucre cristal",
      text: "Une fois l'ébullition atteinte, ajouter le sucre cristallisé restant (la grande quantité) en plusieurs fois pour ne pas couper l'ébullition, puis ajouter le glucose. Cuire le tout en remuant sans cesse à la spatule ou au fouet pour éviter que cela n'attache au fond."
    },
    {
      title: "Cuisson finale",
      text: "Cuire jusqu'à la température de 107°C (ou 75° Brix au réfractomètre). C'est le point critique de la gélification. Dès que la température est atteinte, retirer du feu."
    },
    {
      title: "Acidification & Coulage",
      text: "Ajouter immédiatement la solution acide (mélange 50% eau / 50% acide citrique) et mélanger vivement. La réaction de gélification est quasi instantanée. Couler aussitôt dans un cadre inox (ex: 40x40cm pour 4x la recette, ou 40x60cm selon l'épaisseur désirée) posé sur une feuille Silpat ou un papier guitare."
    },
    {
      title: "Démoulage et découpe",
      text: "Laisser refroidir et cristalliser pendant 24h à température ambiante (ne pas mettre au frigo). Démouler en passant une lame fine autour du cadre. Détailler à la guitare ou au couteau en carrés, rectangles ou formes de votre choix."
    },
    {
      title: "Finition",
      text: "Rouler les morceaux découpés dans du sucre cristallisé. Laisser sécher les pâtes de fruits sucrées sur grille pendant 24h à 48h pour former une petite croûte de sucre qui les protégera."
    }
  ];

  const calculateAmount = (amountStr) => {
    // Handle split values like "120/24"
    if (typeof amountStr === 'string' && amountStr.includes('/')) {
      const [sugar, pectin] = amountStr.split('/').map(s => parseFloat(s.trim()));
      return `${(sugar * multiplier).toFixed(0)}g Sucre + ${(pectin * multiplier).toFixed(0)}g Pectine`;
    }
    // Handle normal numbers
    return (parseFloat(amountStr) * multiplier).toFixed(0);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <Link to="/confiserie">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Confiserie
          </Button>
        </Link>
        
        <div className="relative h-[50vh] w-full overflow-hidden rounded-sm mb-12">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
            <div className="flex flex-wrap gap-6 text-xs tracking-widest font-medium text-white/80">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#D4AF37]" /> {recipeData.yield}</div>
              <div className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" /> {recipeData.type}</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr] gap-16">
          
          {/* INGREDIENTS TABLE SECTION */}
          <div className="bg-[#1a1a1a] p-8 border border-white/5 rounded-sm">
             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Tableau des Recettes</h3>
                    <p className="text-gray-400 text-sm">Quantités en grammes. La solution acide est un mélange 50% eau + 50% acide citrique.</p>
                </div>
                
                <div className="flex items-center gap-4 bg-[#121212] px-6 py-3 rounded-full border border-[#D4AF37]/30">
                  <span className="text-gray-400 text-sm uppercase tracking-wider mr-2">Multiplicateur :</span>
                  <button 
                    onClick={() => setMultiplier(m => Math.max(0.5, m - 0.5))} 
                    className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-1 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-bold font-serif text-xl w-12 text-center">x{multiplier}</span>
                  <button 
                    onClick={() => setMultiplier(m => m + 0.5)} 
                    className="text-[#D4AF37] hover:bg-[#D4AF37]/10 p-1 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
             </div>

             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm border-collapse">
                 <thead>
                   <tr className="border-b border-white/10">
                     <th className="py-4 px-4 text-[#D4AF37] font-serif font-normal uppercase tracking-wider">Parfums</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Purée (g)</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Mélange Sucre/Pectine</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Jus Pomme (g)</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Sucre Cristal (g)</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Glucose (g)</th>
                     <th className="py-4 px-4 text-gray-300 font-medium">Sol. Acide (g)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {fruitsData.map((fruit, idx) => (
                     <tr key={idx} className="hover:bg-white/5 transition-colors">
                       <td className="py-3 px-4 text-white font-medium">{fruit.name}</td>
                       <td className="py-3 px-4 text-gray-400">{calculateAmount(fruit.puree)}</td>
                       <td className="py-3 px-4 text-[#D4AF37]">{calculateAmount(fruit.pectineMix)}</td>
                       <td className="py-3 px-4 text-gray-400">{calculateAmount(fruit.jusPomme)}</td>
                       <td className="py-3 px-4 text-gray-400">{calculateAmount(fruit.sucre)}</td>
                       <td className="py-3 px-4 text-gray-400">{calculateAmount(fruit.glucose)}</td>
                       <td className="py-3 px-4 text-gray-400">{calculateAmount(fruit.acide)}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
             
             <div className="mt-6 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded text-[#D4AF37] text-sm flex items-start gap-3">
                <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p><strong>Note pour le cadre :</strong> Pour remplir un cadre standard de 40x40cm (ou 40x60cm selon épaisseur), il est recommandé de multiplier les quantités de base par 4. Utilisez le sélecteur ci-dessus pour ajuster automatiquement toutes les valeurs.</p>
             </div>
          </div>

          {/* PREPARATION STEPS */}
          <div className="space-y-12 max-w-4xl mx-auto w-full">
            <h2 className="text-3xl font-serif text-white mb-8 border-b border-white/10 pb-4">Étapes de réalisation</h2>
            {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-6">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] font-serif text-lg bg-[#1a1a1a]">{index + 1}</span>
                  <div>
                    <h3 className="text-xl text-white font-serif mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-base">{step.text}</p>
                  </div>
                </motion.div>
            ))}

            <Tabs defaultValue="conseils" className="w-full mt-16">
                <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-4 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils et astuces</TabsTrigger>
                  <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-4 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Mot du chef</TabsTrigger>
                </TabsList>
                
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Les secrets de la réussite</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed text-sm">
                           <li><strong>La pectine jaune</strong> : Elle n'est pas interchangeable avec la pectine NH. La pectine jaune est irréversible et nécessite de l'acidité pour gélifier.</li>
                           <li><strong>L'acide</strong> : Si vous n'avez pas d'acide citrique en poudre, vous pouvez parfois le remplacer par du jus de citron (quantité double), mais le résultat est moins précis. La solution 50/50 se prépare en dissolvant 50g d'acide citrique poudre dans 50g d'eau chaude.</li>
                           <li><strong>Conservation</strong> : Une fois bien séchées et sucrées, les pâtes de fruits se conservent plusieurs semaines dans une boîte hermétique à l'abri de l'humidité.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">L'œil de l'expert</h4>
                        <p className="text-gray-400 leading-relaxed italic text-sm">
                          "La pâte de fruit est une science exacte. Le réfractomètre est votre meilleur ami ici : s'arrêter à 75° Brix garantit une texture parfaite, ni trop molle (qui coule et fermente), ni trop dure (sèche). Pour les fruits très acides comme le fruit de la passion ou le citron, on réduit l'acide ajouté car le fruit en contient déjà naturellement."
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PateDeFruits;