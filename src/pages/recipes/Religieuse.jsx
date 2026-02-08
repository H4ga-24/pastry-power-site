import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Religieuse = () => {
  const baseServings = 4;
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • CLASSIQUES",
    title: "Religieuse",
    prepTime: "1H 45",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "L'élégance à la française. Deux choux superposés garnis de crème pâtissière, glacés au fondant et décorés d'une collerette de crème au beurre.",
    image: "https://www.paul-reygrobellet.fr/WORDPRESS/wp-content/uploads/2019/04/patissier-religieuse-tradition-reygrobellet.jpg",
  };

  const ingredients = [
    { name: 'Pâte à choux', amount: 300, unit: 'g' },
    { name: 'Crème pâtissière', amount: 500, unit: 'g' },
    { name: 'Arôme (Café ou Chocolat)', amount: 20, unit: 'g' },
    { name: 'Fondant pâtissier', amount: 300, unit: 'g' },
    { name: 'Beurre pommade', amount: 100, unit: 'g' },
    { name: 'Sucre glace', amount: 50, unit: 'g' }
  ];

  const steps = [
    {
      title: "Cuisson des corps",
      text: "Dressez des gros choux de 5-6 cm (le corps) et des petits choux de 3 cm (la tête). Enfournez 25-35 min à 170°C. Séchez bien les choux."
    },
    {
      title: "Garniture",
      text: "Aromatisez votre crème pâtissière au café ou au chocolat. Percez le fond des choux. Garnissez généreusement les gros et les petits choux."
    },
    {
      title: "Glaçage",
      text: "Mettez au point le fondant (35°C) coloré selon le parfum. Trempez le dessus des gros et des petits choux. Laissez figer le glaçage."
    },
    {
      title: "Crème au beurre",
      text: "Fouettez le beurre pommade avec le sucre glace (et un peu d'arôme) jusqu'à blanchiment. Mettez en poche avec une petite douille cannelée."
    },
    {
      title: "Montage",
      text: "Déposez le petit chou sur le gros chou (le fondant permet parfois de coller, sinon une pointe de crème au beurre). Pochez des petites flammes de crème au beurre tout autour de la jonction pour former la collerette."
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
                           <li>Le glaçage doit avoir la bonne consistance : ni trop liquide (il coule), ni trop épais (il ne brille pas). Testez toujours sur un chou "raté" avant de glacer les autres.</li>
                           <li>Utilisez le fondant tiède comme "colle" pour fixer le petit chou sur le gros, c'est plus stable que la crème au beurre seule.</li>
                           <li>Pour la collerette, utilisez une crème au beurre très souple et une petite douille cannelée pour un rendu délicat.</li>
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
                          "La religieuse est la haute couture de la pâtisserie française. La régularité des choux est primordiale pour l'esthétique. Un beau glaçage bien brillant est la signature d'un travail soigné."
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
export default Religieuse;