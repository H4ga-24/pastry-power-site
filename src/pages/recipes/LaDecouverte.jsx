import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaDecouverte = () => {
  const [servings, setServings] = useState(3); // 3 entremets by default

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "La Découverte",
    yield: "3 entremets (16cm, 18cm, 20cm)",
    type: "Création signature - Caramel & Cumin",
    prepTime: "4H 30",
    cookTime: "45 MIN",
    difficulty: "EXPERT",
    description: "Une aventure gustative audacieuse. La chaleur du caramel au beurre salé rencontre la subtilité épicée du cumin, sur un fond croustillant praliné-sésame. Un équilibre parfait entre douceur et caractère.",
    image: "https://images.unsplash.com/photo-1606807286281-3aa6a8e7d7a9",
  };

  const ingredients = [
    { section: "Biscuit Praliné Sésame", items: [
      { name: 'Blancs d\'œufs', amount: 150, unit: 'g' },
      { name: 'Sucre semoule', amount: 50, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 100, unit: 'g' },
      { name: 'Sucre glace', amount: 100, unit: 'g' },
      { name: 'Praliné sésame', amount: 80, unit: 'g' },
      { name: 'Graines de sésame torréfiées', amount: 30, unit: 'g' },
      { name: 'Farine T55', amount: 40, unit: 'g' }
    ]},
    { section: "Croustillant Lait Noisette", items: [
      { name: 'Praliné noisette 60%', amount: 200, unit: 'g' },
      { name: 'Chocolat lait 40%', amount: 80, unit: 'g' },
      { name: 'Feuilletine (crêpes dentelles)', amount: 100, unit: 'g' },
      { name: 'Fleur de sel', amount: 2, unit: 'g' },
      { name: 'Zeste d\'orange', amount: 1, unit: 'pièce' }
    ]},
    { section: "Crémeux Caramel Beurre Salé & Coco", items: [
      { name: 'Sucre semoule', amount: 250, unit: 'g' },
      { name: 'Crème liquide 35% (chaude)', amount: 300, unit: 'g' },
      { name: 'Purée de coco', amount: 100, unit: 'g' },
      { name: 'Beurre demi-sel', amount: 80, unit: 'g' },
      { name: 'Jaunes d\'œufs', amount: 100, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 7, unit: 'g' }
    ]},
    { section: "Crème Onctueuse Cumin", items: [
      { name: 'Lait entier', amount: 500, unit: 'g' },
      { name: 'Graines de cumin torréfiées', amount: 10, unit: 'g' },
      { name: 'Jaunes d\'œufs', amount: 100, unit: 'g' },
      { name: 'Sucre semoule', amount: 80, unit: 'g' },
      { name: 'Maïzena', amount: 40, unit: 'g' },
      { name: 'Beurre doux', amount: 200, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 6, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 300, unit: 'g' }
    ]},
    { section: "Glaçage & Finition", items: [
      { name: 'Nappage miroir neutre', amount: 300, unit: 'g' },
      { name: 'Colorant brun (optionnel)', amount: 2, unit: 'g' },
      { name: 'Graines de sésame doré', amount: 20, unit: 'g' },
      { name: 'Tuiles caramel fines', amount: 3, unit: 'pièces' }
    ]}
  ];

  const steps = [
    {
      title: "1. Biscuit Praliné Sésame",
      text: "Monter les blancs en neige en serrant avec le sucre semoule. Tamiser ensemble la poudre d'amande, le sucre glace et la farine. Incorporer délicatement aux blancs. Prélever une petite partie de la masse et la mélanger au praliné sésame pour détendre ce dernier, puis réincorporer au mélange principal. Ajouter les graines de sésame torréfiées. Dresser dans 3 cercles (14cm, 16cm, 18cm) beurrés. Cuire à 170°C pendant 15-18 min. Laisser refroidir."
    },
    {
      title: "2. Croustillant Lait Noisette",
      text: "Fondre le chocolat au lait à 45°C. Mélanger avec le praliné noisette. Ajouter la feuilletine émiettée, la fleur de sel et le zeste d'orange fraîchement râpé. Mélanger délicatement pour bien enrober la feuilletine sans l'écraser. Étaler immédiatement une fine couche sur chaque disque de biscuit froid. Réserver au frais pour cristalliser."
    },
    {
      title: "3. Crémeux Caramel Beurre Salé & Coco",
      text: "Réaliser un caramel à sec avec le sucre (couleur ambrée soutenue). Déglacer avec la crème chaude et la purée de coco préalablement mélangées. Ajouter le beurre demi-sel. Verser sur les jaunes d'œufs battus. Remettre à cuire à la nappe (84°C). Ajouter la gélatine hydratée et essorée hors du feu. Mixer pour lisser. Couler dans 3 inserts (12cm, 14cm, 16cm) chemisés. Surgeler à cœur."
    },
    {
      title: "4. Crème Onctueuse Cumin",
      text: "Torréfier les graines de cumin à la poêle. Infuser dans le lait chaud pendant 20 min. Chinoiser. Réaliser une crème pâtissière avec le lait infusé, les jaunes, le sucre et la maïzena. Ajouter la gélatine hydratée hors du feu. Refroidir à 35°C. Incorporer le beurre pommade au mixeur plongeant pour émulsionner. Incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "5. Montage et Finition",
      text: "Montage à l'envers : Dans les cercles filmés (16cm, 18cm, 20cm), pocher une couche de crème onctueuse cumin au fond et sur les bords. Insérer le palet de crémeux caramel coco surgelé. Recouvrir d'un peu de crème. Terminer par le biscuit avec son croustillant (côté croustillant contre la crème). Lisser à ras. Surgeler. Démouler, glacer avec le nappage neutre (coloré brun clair si désiré). Décorer la base avec des graines de sésame doré et planter une tuile caramel fine."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings) / 3).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/patisserie/gateaux/entremets">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux Entremets</Button>
        </Link>
        <div className="relative h-[60vh] w-full overflow-hidden rounded-sm mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover transform transition-transform duration-700" 
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block"
            >
              {recipeData.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6 font-bold tracking-tight"
            >
              {recipeData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 max-w-2xl mb-8 leading-relaxed text-lg font-light"
            >
              {recipeData.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90"
            >
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-[#D4AF37]" /> {recipeData.yield}</div>
              <div className="flex items-center gap-2"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> {recipeData.type}</div>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          <div className="bg-[#1a1a1a] p-8 border border-white/5 rounded-xl h-fit sticky top-24 shadow-2xl">
             <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#252525] px-4 py-2 rounded-full border border-white/5">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="text-sm font-bold w-fit text-center min-w-[80px]">{servings} {servings === 1 ? 'Entremet' : 'Entremets'}</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
             </div>
             <div className="space-y-8">
               {ingredients.map((section, idx) => (
                 <div key={idx}>
                   <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                     <span className="w-1 h-4 bg-[#D4AF37] rounded-full"></span>
                     {section.section}
                   </h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:bg-white/5 px-2 rounded transition-colors">
                         <span className="leading-relaxed">{ing.name}</span>
                         <span className="text-white font-bold whitespace-nowrap ml-4 bg-[#252525] px-2 py-1 rounded text-xs">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-4">
              <span className="bg-[#D4AF37] text-black w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">P</span>
              Progression
            </h2>
            
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1 h-auto rounded-lg border border-white/5 mb-8">
                <TabsTrigger value="steps" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-md uppercase tracking-widest text-xs font-bold transition-all">Étapes</TabsTrigger>
                <TabsTrigger value="tips" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-md uppercase tracking-widest text-xs font-bold transition-all">Conseils du Chef</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-8">
                {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: index * 0.1 }} 
                      className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all hover:shadow-lg group"
                    >
                      <div className="flex gap-6">
                        <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#252525] text-[#D4AF37] font-serif font-bold text-xl border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl text-white font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed text-base">{step.text}</p>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="tips">
                <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-xl shadow-2xl">
                    <div className="flex items-start gap-6">
                      <div className="bg-[#D4AF37]/10 p-4 rounded-full">
                        <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-2xl font-serif text-white">Les secrets de la réussite</h4>
                        <ul className="grid gap-6">
                           <li className="bg-[#252525] p-5 rounded-lg border-l-4 border-[#D4AF37]">
                             <strong className="text-white block mb-2 text-lg">Dosage du cumin</strong> 
                             <p className="text-gray-400 text-sm">Le cumin est une épice puissante. Commencez par la quantité indiquée et goûtez votre infusion. Le but est d'avoir une note de fond chaleureuse qui ne masque pas le caramel.</p>
                           </li>
                           <li className="bg-[#252525] p-5 rounded-lg border-l-4 border-[#D4AF37]">
                             <strong className="text-white block mb-2 text-lg">Cuisson du sucre</strong> 
                             <p className="text-gray-400 text-sm">Pour le crémeux, poussez la cuisson du caramel assez loin (ambré foncé, mais pas brûlé) pour contrer la douceur de la purée de coco et apporter du caractère.</p>
                           </li>
                           <li className="bg-[#252525] p-5 rounded-lg border-l-4 border-[#D4AF37]">
                             <strong className="text-white block mb-2 text-lg">Croustillant sésame</strong> 
                             <p className="text-gray-400 text-sm">Le praliné sésame peut être dense. N'hésitez pas à le détendre légèrement au bain-marie avant de le mélanger à l'appareil à biscuit pour une incorporation homogène.</p>
                           </li>
                        </ul>
                      </div>
                    </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 mt-12 flex items-center gap-6">
               <Quote className="w-10 h-10 text-[#D4AF37] opacity-50" />
               <p className="text-gray-400 italic text-lg font-light">
                 "La Découverte est née d'un voyage. L'association inattendue du caramel et du cumin surprend d'abord, puis séduit par son évidence. C'est un gâteau de caractère pour ceux qui aiment sortir des sentiers battus."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaDecouverte;