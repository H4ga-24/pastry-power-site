import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChouxCreme = () => {
  const baseServings = 8;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • GÂTEAUX",
    title: "Choux à la Crème",
    prepTime: "45 MIN",
    cookTime: "30 MIN",
    difficulty: "MOYEN",
    description: "Le chou moderne, recouvert d'un craquelin croustillant et garni d'une crème légère (Diplomate ou Chantilly Mascarpone).",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7d0a6d533f4d3e9d29b33c1a24aed322/Derivates/e2d49242fce10af2266dd38cb72860b5dbfccc55.jpg",
  };

  const ingredients = [
    { name: 'Pâte à choux', amount: 400, unit: 'g' },
    { name: 'Beurre (Craquelin)', amount: 80, unit: 'g' },
    { name: 'Cassonade (Craquelin)', amount: 100, unit: 'g' },
    { name: 'Farine (Craquelin)', amount: 100, unit: 'g' },
    { name: 'Crème liquide 35%', amount: 400, unit: 'g' },
    { name: 'Mascarpone', amount: 100, unit: 'g' },
    { name: 'Sucre glace', amount: 50, unit: 'g' },
    { name: 'Vanille gousse', amount: 1, unit: 'pc' }
  ];

  const steps = [
    {
      title: "Réalisation du Craquelin",
      text: "Mélangez le beurre pommade, la cassonade et la farine jusqu'à obtenir une pâte homogène. Étalez finement (2mm) entre deux feuilles de papier cuisson. Congelez. Détaillez des disques du diamètre de vos choux."
    },
    {
      title: "Cuisson des choux",
      text: "Dressez des boules de pâte à choux régulières. Posez un disque de craquelin congelé sur chaque chou. Enfournez 30 min à 170°C. Le craquelin va fondre, envelopper le chou et former une croûte sucrée et croustillante."
    },
    {
      title: "Chantilly Mascarpone Vanille",
      text: "Dans une cuve bien froide, versez la crème, le mascarpone, le sucre glace et les graines de la gousse de vanille. Montez au fouet progressivement jusqu'à obtenir une crème ferme qui tient bien."
    },
    {
      title: "Découpe",
      text: "Une fois les choux refroidis, découpez le tiers supérieur (le chapeau) à l'aide d'un couteau scie."
    },
    {
      title: "Garnissage et Finition",
      text: "Pochez la crème généreusement à l'intérieur du chou avec une douille cannelée, en formant une belle rosace qui dépasse. Reposez délicatement le chapeau et saupoudrez d'un voile de sucre glace."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings) / baseServings).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/patisserie/gateaux/pate-a-choux">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour</Button>
        </Link>
        <div className="relative h-[60vh] w-full overflow-hidden rounded-sm mb-12">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
            <div className="flex gap-6 text-xs tracking-widest font-medium text-white/80">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> {recipeData.difficulty}</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          <div className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm h-fit">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#121212] px-3 py-1 rounded-full">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37]"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-medium w-4 text-center">{servings}</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37]"><Plus className="w-3 h-3" /></button>
                </div>
             </div>
             <ul className="space-y-3 text-sm text-gray-400">
               {ingredients.map((ing, i) => (
                 <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                   <span>{ing.name}</span>
                   <span className="text-white font-medium">{calculateAmount(ing.amount)} {ing.unit}</span>
                 </li>
               ))}
             </ul>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white mb-6">Préparation</h2>
            {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] font-serif">{index + 1}</span>
                  <div>
                    <h3 className="text-lg text-white font-serif mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
            ))}

            <Tabs defaultValue="conseils" className="w-full mt-12">
                <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                  <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils et astuces</TabsTrigger>
                  <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Mot du chef</TabsTrigger>
                </TabsList>
                
                <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0">
                  <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                      <div className="space-y-4">
                        <h4 className="text-lg font-serif text-white">Les secrets de la réussite</h4>
                        <ul className="space-y-3 text-gray-400 leading-relaxed text-sm">
                           <li>Le craquelin est magique : il assure une pousse régulière et gomme les défauts de dressage. Préparez-le en grande quantité, il se conserve très bien au congélateur.</li>
                           <li>Si vous ne souhaitez pas couper les choux, percez le fond et garnissez-les à la poche avant de poser une pointe de crème sur le dessus pour le décor.</li>
                           <li>Pour une crème chantilly parfaite, placez votre bol et le fouet au congélateur 10 minutes avant de monter la crème.</li>
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
                          "Le craquelin a révolutionné le chou à la crème. Il apporte cette texture croustillante qui contraste merveilleusement avec le moelleux de la pâte et l'onctuosité de la crème. N'hésitez pas à le colorer pour varier les plaisirs visuels."
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
export default ChouxCreme;