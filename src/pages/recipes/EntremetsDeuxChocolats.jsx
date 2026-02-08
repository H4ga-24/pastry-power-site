import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EntremetsDeuxChocolats = () => {
  const [servings, setServings] = useState(1); // 1 entremets

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Entremets Deux Chocolats",
    yield: "1 Entremets de 20 cm - 8/10 parts (Poids total mousse visé ~750g)",
    type: "Classique CAP - Insert Crémeux, Mousse Base Anglaise, Glaçage",
    prepTime: "2H 30",
    cookTime: "30 MIN",
    difficulty: "MOYEN",
    description: "L'alliance parfaite de deux chocolats. Un insert fondant au chocolat noir caché dans une mousse bavaroise au chocolat au lait, sur une dacquoise moelleuse. Un grand classique.",
    image: "https://images.unsplash.com/photo-1713274782299-0b97a3e435f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const ingredients = [
    { section: "Insert Crémeux Chocolat Noir (Cercle 16cm)", items: [
      { name: 'Crème liquide 35%', amount: 125, unit: 'g' },
      { name: 'Lait entier', amount: 125, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 50, unit: 'g' },
      { name: 'Sucre semoule', amount: 30, unit: 'g' },
      { name: 'Chocolat noir 65%', amount: 120, unit: 'g' }
    ]},
    { section: "Biscuit Dacquoise Amande (Cercle 18cm)", items: [
      { name: 'Blancs d\'oeufs', amount: 100, unit: 'g' },
      { name: 'Sucre semoule', amount: 30, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 80, unit: 'g' },
      { name: 'Sucre glace', amount: 80, unit: 'g' },
      { name: 'Farine', amount: 20, unit: 'g' }
    ]},
    { section: "Mousse Bavaroise Chocolat au Lait", items: [
      { name: 'Lait entier', amount: 250, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 60, unit: 'g' },
      { name: 'Sucre semoule', amount: 40, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 5, unit: 'g' },
      { name: 'Chocolat au lait 40%', amount: 250, unit: 'g' },
      { name: 'Crème fouettée', amount: 350, unit: 'g' }
    ]},
    { section: "Glaçage Noir Brillant", items: [
      { name: 'Eau', amount: 100, unit: 'g' },
      { name: 'Sucre semoule', amount: 180, unit: 'g' },
      { name: 'Cacao en poudre', amount: 60, unit: 'g' },
      { name: 'Crème liquide', amount: 130, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 8, unit: 'g' }
    ]},
    { section: "Décors Mendiants & Finitions", items: [
      { name: 'Chocolat tempéré (noir/lait)', amount: 100, unit: 'g' },
      { name: 'Fruits secs (noisettes, pistaches...)', amount: 50, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "J-1 : Insert Crémeux Chocolat Noir",
      text: "Réaliser une crème anglaise : chauffer lait et crème. Blanchir jaunes et sucre. Cuire l'ensemble à la nappe (83°C). Verser sur le chocolat noir haché. Mixer pour lisser. Couler dans un cercle de 16cm filmé. Congeler."
    },
    {
      title: "J-1 : Biscuit Dacquoise",
      text: "Monter les blancs en neige, serrer avec le sucre semoule. Incorporer délicatement les poudres tamisées (amande, sucre glace, farine). Dresser un disque de 18cm. Cuire à 180°C environ 12-15 min. Laisser refroidir."
    },
    {
      title: "J-1 : Mousse Bavaroise Chocolat au Lait",
      text: "Hydrater la gélatine. Réaliser une crème anglaise avec le lait, les jaunes et le sucre (cuisson 83°C). Ajouter la gélatine hors du feu. Verser sur le chocolat au lait. Emulsionner. Laisser refroidir à 30/35°C. Incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "J-1 : Montage à l'envers",
      text: "Dans un cercle de 20cm filmé et chemisé de rhodoïd : couler une partie de la mousse bavaroise. Déposer l'insert crémeux congelé (centré). Recouvrir du reste de mousse. Terminer par le disque de dacquoise (appuyer légèrement pour que la mousse remonte sur les bords). Lisser. Congeler à cœur (minimum 4h, idéalement une nuit)."
    },
    {
      title: "Jour J : Glaçage Noir Brillant",
      text: "Hydrater la gélatine. Porter à ébullition l'eau, le sucre, le cacao et la crème (103°C). Ajouter la gélatine hors du feu. Mixer sans incorporer d'air. Utiliser à 30/35°C sur l'entremets congelé et décerclé."
    },
    {
      title: "Finition et Décor",
      text: "Déposer l'entremets glacé sur un carton or ou un plat. Réaliser des disques ou formes en chocolat tempéré, y coller des fruits secs pour l'effet 'mendiant'. Disposer harmonieusement sur l'entremets. Laisser décongeler 4h au réfrigérateur avant dégustation."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings)).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/patisserie/gateaux/entremets">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux Entremets</Button>
        </Link>
        <div className="relative h-[60vh] w-full overflow-hidden rounded-sm mb-12">
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
        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          <div className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm h-fit">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#121212] px-3 py-1 rounded-full">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37]"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-medium w-fit text-center">{servings} Entremets</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37]"><Plus className="w-3 h-3" /></button>
                </div>
             </div>
             <div className="space-y-6">
               {ingredients.map((section, idx) => (
                 <div key={idx}>
                   <h4 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">{section.section}</h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                         <span>{ing.name}</span>
                         <span className="text-white font-medium">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
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
                           <li>Pour une mousse bavaroise parfaite, attendez que la base anglaise chocolatée descende à 30/35°C avant d'incorporer la crème montée. Trop chaud, la crème retombe. Trop froid, la gélatine fige et fait des grains.</li>
                           <li>L'insert doit être plus petit que le cercle principal (ici 16cm pour un entremets de 20cm) pour être bien masqué par la mousse.</li>
                           <li>Le glaçage doit être coulé sur un entremets *parfaitement* congelé pour qu'il prenne instantanément et soit brillant.</li>
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
                          "Ce gâteau joue sur le contraste : l'amertume et l'onctuosité dense du crémeux noir contre la douceur aérée de la bavaroise lait. La dacquoise apporte la mâche nécessaire. C'est un exercice de style classique mais redoutable."
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
export default EntremetsDeuxChocolats;