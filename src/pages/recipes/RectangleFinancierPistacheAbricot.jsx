import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RectangleFinancierPistacheAbricot = () => {
  const [servings, setServings] = useState(1); // 1 cadre = 14 parts

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Rectangle Financier Pistache, Abricot & Dulcey",
    yield: "1 Cadre de 9 x 55 cm (14 parts)",
    type: "Finger / Entremets Boutique - Biscuit, Croustillant, Insert Fruit, Bavaroise",
    prepTime: "2H 30",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "L'élégance d'un format 'Finger' allongé. La douceur biscuitée du chocolat blond Dulcey enveloppe l'acidité franche de l'abricot, le tout reposant sur un socle intense de pistache.",
    image: "https://www.tendances-food.fr/wp-content/uploads/2022/05/pistache-abricot.jpg",
  };

  const ingredients = [
    { section: "Biscuit Financier Pistache", items: [
      { name: 'Beurre noisette', amount: 150, unit: 'g' },
      { name: 'Blancs d\'oeufs', amount: 150, unit: 'g' },
      { name: 'Sucre glace', amount: 140, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 60, unit: 'g' },
      { name: 'Pâte de pistache pure', amount: 40, unit: 'g' },
      { name: 'Farine T55', amount: 50, unit: 'g' },
      { name: 'Levure chimique', amount: 2, unit: 'g' }
    ]},
    { section: "Croustillant Pistache", items: [
      { name: 'Pâte de pistache', amount: 50, unit: 'g' },
      { name: 'Chocolat blanc', amount: 30, unit: 'g' },
      { name: 'Feuilletine (crêpes dentelles)', amount: 60, unit: 'g' },
      { name: 'Pistaches concassées', amount: 20, unit: 'g' },
      { name: 'Fleur de sel', amount: 1, unit: 'pincée' }
    ]},
    { section: "Insert Compotée d'Abricots", items: [
      { name: 'Purée d\'abricot', amount: 250, unit: 'g' },
      { name: 'Oreillons d\'abricots (dés)', amount: 100, unit: 'g' },
      { name: 'Sucre semoule', amount: 40, unit: 'g' },
      { name: 'Pectine NH', amount: 4, unit: 'g' },
      { name: 'Jus de citron', amount: 10, unit: 'g' }
    ]},
    { section: "Bavaroise Chocolat Dulcey", items: [
      { name: 'Lait entier', amount: 125, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 30, unit: 'g' },
      { name: 'Sucre', amount: 15, unit: 'g' },
      { name: 'Chocolat Dulcey (Valrhona)', amount: 170, unit: 'g' },
      { name: 'Gélatine', amount: 4, unit: 'g' },
      { name: 'Crème liquide 35% montée', amount: 250, unit: 'g' }
    ]},
    { section: "Finitions & Décors", items: [
      { name: 'Nappage neutre', amount: 100, unit: 'g' },
      { name: 'Abricots frais ou au sirop', amount: 5, unit: 'pcs' },
      { name: 'Pistaches vertes émondées', amount: 20, unit: 'g' },
      { name: 'Chocolat Dulcey (décor)', amount: 50, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "Biscuit & Croustillant",
      text: "Financier : Réaliser un beurre noisette, laisser tiédir. Mélanger les poudres (sucre glace, amande, farine, levure). Ajouter les blancs non montés, la pâte de pistache, puis le beurre noisette filtré. Couler dans le cadre 9x55cm posé sur Silpat. Cuire 12-15 min à 170°C. Laisser refroidir sans démouler. Croustillant : Fondre le chocolat blanc, mélanger avec la pâte de pistache. Incorporer délicatement la feuilletine, le sel et les éclats de pistache. Étaler finement sur le biscuit financier refroidi. Bloquer au froid."
    },
    {
      title: "Inserts & Sirops",
      text: "Compotée : Chauffer la purée et les dés d'abricots à 40°C. Ajouter le mélange sucre + pectine en pluie. Porter à ébullition 1 min. Ajouter le jus de citron. Couler dans un moule insert (tube ou rectangle plus petit que le cadre principal) ou couler directement sur le croustillant figé si montage à plat. Congeler."
    },
    {
      title: "Mousse & Montage",
      text: "Bavaroise Dulcey : Réaliser une crème anglaise (Lait, jaunes, sucre cuits à 83°C). Ajouter la gélatine hydratée. Verser sur le chocolat Dulcey haché. Émulsionner. Laisser refroidir à 30/35°C. Incorporer la crème montée mousseuse. Montage : Si montage en cadre : Pocher une partie de la mousse sur le croustillant (si insert moulé à part, le poser maintenant et recouvrir de mousse). Lisser à ras du cadre. Congeler."
    },
    {
      title: "Finition",
      text: "Démouler la bande congelée. Pulvériser un velours chocolat blanc/dulcey ou glacer avec un glaçage miroir neutre ou abricot. Détailler en parts individuelles de 4cm de large. Décorer chaque part avec un quartier d'abricot lustré au nappage neutre, une pointe de ganache montée pistache (facultatif) et quelques éclats de pistache verte."
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
                  <span className="text-sm font-medium w-fit text-center">{servings} Cadre(s)</span>
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
                           <li>Le chocolat Dulcey (chocolat blond) a un goût biscuité unique qui s'accorde merveilleusement avec l'abricot. Si vous n'en avez pas, un chocolat blanc caramélisé maison ou un chocolat au lait très doux (type Jivara) peut faire l'affaire, mais le goût sera différent.</li>
                           <li>Pour une découpe nette des parts individuelles (fingers), assurez-vous que l'entremets est parfaitement congelé et utilisez un couteau à grande lame passé sous l'eau chaude et essuyé.</li>
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
                          "Ce format 'finger' est très tendance en boutique. Il permet une dégustation élégante et met en valeur les strates de textures : le moelleux du financier, le craquant du croustillant, le fondant de l'insert et l'onctuosité de la bavaroise."
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
export default RectangleFinancierPistacheAbricot;