import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gougere = () => {
  const baseServings = 6;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • APÉRITIF",
    title: "Gougère au Comté",
    prepTime: "25 MIN",
    cookTime: "30 MIN",
    difficulty: "FACILE",
    description: "Une pâte à choux salée, enrichie de Comté affiné et parfumée à la muscade. Un classique bourguignon parfait pour l'apéritif.",
    image: "https://www.saveursfrance.com/wp-content/uploads/2025/11/hassan8524_closeup_zoomed-in_amateur_photo_from_pinterest_style_316e9e48-ab0f-45b8-91d4-335f307516bf-1.webp",
  };

  const ingredients = [
    { name: 'Eau', amount: 125, unit: 'g' },
    { name: 'Lait', amount: 125, unit: 'g' },
    { name: 'Beurre', amount: 100, unit: 'g' },
    { name: 'Farine T55', amount: 150, unit: 'g' },
    { name: 'Oeufs', amount: 250, unit: 'g' },
    { name: 'Comté râpé (vieux)', amount: 150, unit: 'g' },
    { name: 'Sel fin', amount: 5, unit: 'g' },
    { name: 'Noix de muscade', amount: 1, unit: 'pincée' },
    { name: 'Poivre noir', amount: 2, unit: 'tours' }
  ];

  const steps = [
    {
      title: "Réalisation de la pâte",
      text: "Dans une casserole, portez à ébullition l'eau, le lait, le sel, le poivre et le beurre. Hors du feu, ajoutez la farine. Desséchez sur le feu 2 minutes. Débarrassez et incorporez les œufs un par un."
    },
    {
      title: "Assaisonnement",
      text: "Lorsque la pâte est lisse, ajoutez la muscade râpée et les 3/4 du Comté râpé. Mélangez bien à la spatule pour répartir le fromage uniformément."
    },
    {
      title: "Dressage",
      text: "Mettez en poche avec une douille unie large (10-12mm). Dressez des choux individuels de 4cm ou une grande couronne sur une plaque graissée."
    },
    {
      title: "Finition",
      text: "Dorez les choux à l'œuf battu. Parsemez le reste du Comté râpé sur le dessus."
    },
    {
      title: "Cuisson",
      text: "Enfournez à 180°C pendant 25 à 30 minutes. Les gougères doivent être bien dorées. Servez tiède."
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
                           <li>Ne lésinez pas sur la qualité du fromage : un Comté fruité affiné de 12 à 18 mois changera radicalement le goût de vos gougères.</li>
                           <li>Si vous souhaitez préparer vos gougères à l'avance, congelez-les crues une fois dressées sur plaque. Vous pourrez les cuire directement sans décongélation (comptez 5 minutes de cuisson supplémentaires).</li>
                           <li>La noix de muscade est essentielle, râpez-la fraîchement pour un parfum plus intense.</li>
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
                          "La gougère doit avoir du caractère. N'hésitez pas à bien poivrer la pâte et à être généreux sur la muscade, le fromage a besoin de répondant pour ne pas être écœurant."
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
export default Gougere;