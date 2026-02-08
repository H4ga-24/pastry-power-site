import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed, Printer, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const LeDesirBaileys = () => {
  const [servings, setServings] = useState(1); // Default 1 cadre
  const { toast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleAddToFavorites = () => {
    toast({
      title: "Ajouté aux favoris",
      description: "Cette recette a été ajoutée à votre carnet de recettes.",
      duration: 3000,
    });
  };

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Le Désir Bailey's",
    yield: "1 cadre de 37 x 28,5 cm (environ 12 à 15 parts)",
    type: "Entremets Prestige",
    prepTime: "2H 30",
    cookTime: "15 MIN",
    difficulty: "AVANCÉ",
    description: "L'élégance à l'état pur. Une mousse légère et parfumée au Bailey's associée à un biscuit 'Safari' intense en cacao, le tout enveloppé d'un velours noir mystérieux. Un dessert sophistiqué pour les amateurs de liqueurs crémeuses.",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0739838a3f34c2628a4cc80a5c54445f.png",
  };

  const ingredients = [
    { section: "Biscuit Safari Chocolat", items: [
      { name: 'Oeufs entiers', amount: 375, unit: 'g' },
      { name: 'Sucre semoule', amount: 160, unit: 'g' },
      { name: 'Chocolat noir 50%', amount: 125, unit: 'g' },
      { name: 'Beurre doux', amount: 125, unit: 'g' },
      { name: 'Farine T55', amount: 80, unit: 'g' }
    ]},
    { section: "Mousse Chocolat Bailey's", items: [
      { name: 'Jaunes d\'oeufs', amount: 120, unit: 'g' },
      { name: 'Sirop à 30°B (sirop de sucre)', amount: 135, unit: 'g' },
      { name: 'Liqueur Bailey\'s', amount: 150, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 20, unit: 'g' },
      { name: 'Chocolat couverture lactée', amount: 280, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 950, unit: 'g' }
    ]},
    { section: "Appareil à Pulvériser (Velours)", items: [
      { name: 'Chocolat noir couverture', amount: 350, unit: 'g' },
      { name: 'Beurre de cacao', amount: 150, unit: 'g' },
      { name: 'Colorant liposoluble noir (optionnel)', amount: 2, unit: 'g' }
    ]},
    { section: "Finition", items: [
      { name: 'Copeaux de chocolat noir', amount: 50, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "1. Biscuit Safari Chocolat",
      text: "Monter les œufs entiers avec le sucre semoule au ruban (le mélange doit tripler de volume et blanchir). Faire fondre le chocolat et le beurre ensemble à 45°C. Prélever une petite partie des œufs montés et les mélanger vigoureusement au mélange chocolat/beurre pour l'alléger. Reverser le tout dans la masse principale d'œufs et mélanger délicatement à la maryse. Incorporer la farine tamisée en pluie fine. Étaler sur une plaque recouverte de papier cuisson (pour un cadre de 37x28,5 cm, prévoir une plaque standard 40x60 cm pour pouvoir parer). Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir."
    },
    {
      title: "2. Mousse Chocolat Bailey's",
      text: "Réhydrater la gélatine. Réaliser une pâte à bombe : pocher les jaunes d'œufs avec le sirop à 30°B (mélange d'eau et de sucre densité 1.26) au bain-marie jusqu'à 84°C, puis monter au batteur jusqu'à refroidissement complet. Faire chauffer légèrement le Bailey's et y dissoudre la gélatine essorée. Verser sur le chocolat au lait fondu à 45°C pour réaliser une ganache. Incorporer cette ganache à la pâte à bombe. Enfin, incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "3. Appareil à Pulvériser (Velours)",
      text: "Fondre le chocolat de couverture et le beurre de cacao séparément. Les mélanger ensemble. Ajouter le colorant liposoluble si désiré et mixer pour homogénéiser. Filtrer. Utiliser à une température de 40°C à 45°C dans un pistolet à peinture alimentaire."
    },
    {
      title: "4. Montage et Finition",
      text: "Dans le cadre inox chemisé de rhodoïd : Déposer le biscuit Safari au fond (ajusté aux dimensions du cadre). Couler la mousse Bailey's par-dessus. Lisser à la palette coudée. Surgeler à cœur (minimum 4 heures, idéalement une nuit). Démouler l'entremets surgelé. Pulvériser l'appareil velours sur l'entremets congelé pour obtenir l'effet velours. Parer les bords pour avoir des couches nettes. Décorer avec des copeaux de chocolat noir ou selon l'inspiration."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings)).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
            <Link to="/patisserie/gateaux/entremets">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-white pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux Entremets</Button>
            </Link>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrint} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Printer className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" onClick={handleAddToFavorites} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Star className="w-4 h-4" /></Button>
            </div>
        </div>
        
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl mb-12 group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover transform transition-transform duration-700" 
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-4"
            >
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase px-3 py-1 border border-[#D4AF37] rounded-full bg-[#D4AF37]/10 backdrop-blur-md">
                    {recipeData.category}
                </span>
                <span className="text-white/80 text-xs font-medium tracking-wider flex items-center gap-1">
                   <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Recette Prestige
                </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif text-white mb-6 font-bold tracking-tight drop-shadow-lg"
            >
              {recipeData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 max-w-2xl mb-8 leading-relaxed text-lg font-light drop-shadow-md"
            >
              {recipeData.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90 bg-black/30 backdrop-blur-md p-6 rounded-xl w-fit border border-white/10"
            >
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-[#D4AF37]" /> {recipeData.yield}</div>
              <div className="flex items-center gap-2"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> {recipeData.type}</div>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 border border-white/5 rounded-2xl h-fit sticky top-24 shadow-2xl">
             <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#252525] px-4 py-2 rounded-full border border-white/5 shadow-inner">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="text-sm font-bold w-fit text-center min-w-[80px]">{servings} Cadre</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
             </div>
             <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
               {ingredients.map((section, idx) => (
                 <div key={idx}>
                   <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2 sticky top-0 bg-[#1a1a1a] py-2 z-10">
                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span>
                     {section.section}
                   </h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:bg-white/5 px-3 py-2 rounded transition-colors duration-300">
                         <span className="leading-relaxed font-medium text-gray-300">{ing.name}</span>
                         <span className="text-[#D4AF37] font-bold whitespace-nowrap ml-4 bg-[#252525] px-2 py-1 rounded text-xs border border-[#D4AF37]/20">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#8a6e1f] text-black w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg shadow-[#D4AF37]/20">P</span>
              Progression
            </h2>
            
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1.5 h-auto rounded-xl border border-white/5 mb-10 shadow-lg">
                <TabsTrigger value="steps" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-lg uppercase tracking-widest text-xs font-bold transition-all duration-300">Étapes de réalisation</TabsTrigger>
                <TabsTrigger value="tips" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-lg uppercase tracking-widest text-xs font-bold transition-all duration-300">Astuces du Chef</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-6">
                {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: index * 0.1 }} 
                      className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/5 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <span className="text-9xl font-serif text-[#D4AF37]">{index + 1}</span>
                      </div>
                      <div className="flex gap-6 relative z-10">
                        <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#252525] text-[#D4AF37] font-serif font-bold text-xl border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-lg">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl text-white font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                          <p className="text-gray-300 leading-relaxed text-base font-light">{step.text}</p>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="tips">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/5 p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="flex items-start gap-8 relative z-10">
                      <div className="bg-[#D4AF37]/10 p-5 rounded-2xl border border-[#D4AF37]/20 backdrop-blur-sm">
                        <Lightbulb className="w-10 h-10 text-[#D4AF37]" />
                      </div>
                      <div className="space-y-8">
                        <h4 className="text-3xl font-serif text-white">Réussir sa mousse au Bailey's</h4>
                        <div className="grid gap-6">
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">Attention à l'alcool</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Ne faites pas bouillir le Bailey's, chauffez-le juste assez pour fondre la gélatine (environ 50°C). Une température trop élevée évaporerait l'alcool et modifierait le goût caractéristique.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">Température de mélange</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Assurez-vous que votre mélange pâte à bombe + ganache est redescendu aux alentours de 30°C avant d'incorporer la crème fouettée, sinon la crème risque de retomber et la mousse perdra sa légèreté.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">Effet Velours</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Pour un effet velours réussi, le choc thermique est essentiel. L'entremets doit sortir directement du congélateur (-18°C) et l'appareil doit être entre 40 et 45°C. Pulvérisez à environ 20-30 cm de distance.</p>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 mt-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent"></div>
               <Quote className="w-16 h-16 text-[#D4AF37] opacity-20 flex-shrink-0" />
               <p className="text-gray-300 italic text-xl font-light leading-relaxed relative z-10">
                 "Le Désir est un entremets de contraste : le noir profond du velours cache la douceur lactée de la liqueur irlandaise. C'est un dessert d'adulte, sophistiqué et réconfortant à la fois."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeDesirBaileys;