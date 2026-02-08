import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EntremetsFramboiseRhubarbe = () => {
  const [servings, setServings] = useState(1); // 1 lot = 2 entremets

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Entremets Framboise & Rhubarbe",
    yield: "2 Entremets de Ø 18 cm (ou 1 cadre 40x30)",
    type: "Entremets Glacé - Base Dacquoise, Insert Rhubarbe, Mousse Fruit Meringuée",
    prepTime: "3H 00",
    cookTime: "40 MIN",
    difficulty: "AVANCÉ",
    description: "L'acidité vive de la rhubarbe rencontre la douceur parfumée de la framboise. Un jeu de textures entre le moelleux de la dacquoise, le fondant de la compotée et la légèreté d'une mousse aux fruits sur base de meringue italienne.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzBx-BwKMJdhTxVfvjV5LtJ5KzWldxaojlYjnxfeEGUQomBIG2MjS-jFP4vz-3yjt8pmzqbfj7c29087TAhqirL6RAo5T13k3F_X3hlKHtBZf4zMiG3TmttCRx0EWZLSkqrNUH47dC3cDX/s1600/IMG_0007.jpg",
  };

  const ingredients = [
    { section: "Insert Compotée Rhubarbe (2 disques 16cm)", items: [
      { name: 'Rhubarbe fraîche (épluchée)', amount: 400, unit: 'g' },
      { name: 'Sucre semoule', amount: 80, unit: 'g' },
      { name: 'Jus de citron', amount: 10, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 4, unit: 'g' },
      { name: 'Fraise ou Framboise (pour la couleur)', amount: 50, unit: 'g' }
    ]},
    { section: "Dacquoise Amande (2 disques 16cm)", items: [
      { name: 'Blancs d\'oeufs', amount: 150, unit: 'g' },
      { name: 'Sucre semoule', amount: 50, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 135, unit: 'g' },
      { name: 'Sucre glace', amount: 135, unit: 'g' }
    ]},
    { section: "Biscuit à la Cuillère (Optionnel - Cartouchière)", items: [
      { name: 'Blancs d\'oeufs', amount: 120, unit: 'g' },
      { name: 'Sucre semoule', amount: 100, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 80, unit: 'g' },
      { name: 'Farine T55', amount: 100, unit: 'g' }
    ]},
    { section: "Sirop d'Imbibition Framboise", items: [
      { name: 'Purée de framboise', amount: 100, unit: 'g' },
      { name: 'Eau', amount: 50, unit: 'g' },
      { name: 'Sucre', amount: 30, unit: 'g' },
      { name: 'Liqueur de framboise (facultatif)', amount: 10, unit: 'g' }
    ]},
    { section: "Mousse Framboise (Base Meringue Italienne)", items: [
      { name: 'Purée de framboise', amount: 500, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 12, unit: 'g' },
      { name: 'Blancs d\'oeufs (Meringue)', amount: 100, unit: 'g' },
      { name: 'Sucre (Meringue)', amount: 200, unit: 'g' },
      { name: 'Eau (Meringue)', amount: 60, unit: 'g' },
      { name: 'Crème liquide 35% montée', amount: 400, unit: 'g' }
    ]},
    { section: "Glaçage Miroir Rouge & Finitions", items: [
      { name: 'Sucre', amount: 300, unit: 'g' },
      { name: 'Glucose', amount: 300, unit: 'g' },
      { name: 'Eau', amount: 150, unit: 'g' },
      { name: 'Lait concentré sucré', amount: 200, unit: 'g' },
      { name: 'Chocolat blanc', amount: 300, unit: 'g' },
      { name: 'Gélatine', amount: 18, unit: 'g' },
      { name: 'Colorant rouge hydrosoluble', amount: 5, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "Les Biscuits & Inserts (J-1)",
      text: "Insert Rhubarbe : Couper la rhubarbe en tronçons. Cuire à feu doux avec le sucre et les fruits rouges jusqu'à compotée (garder quelques morceaux). Ajouter la gélatine hydratée hors du feu. Couler dans 2 cercles de 16cm filmés. Congeler. Dacquoise : Monter les blancs, serrer avec le sucre semoule. Incorporer délicatement poudres tamisées (amande+glace). Dresser 2 disques de 16cm. Cuire 12-15 min à 180°C."
    },
    {
      title: "La Mousse Framboise & Montage",
      text: "Chauffer 1/3 de la purée de framboise, y fondre la gélatine hydratée. Mélanger au reste de purée froide. Réaliser une meringue italienne (cuire eau+sucre à 118°C, verser sur blancs montés). Incorporer la purée gélifiée (à 25°C) dans la meringue italienne, puis ajouter délicatement la crème fouettée. Montage (à l'envers) : Dans des cercles de 18cm filmés, couler une partie de la mousse. Déposer l'insert rhubarbe congelé. Recouvrir de mousse. Terminer par le disque de dacquoise. Lisser. Congeler à cœur."
    },
    {
      title: "Glaçage et Finitions",
      text: "Glaçage : Cuire eau, sucre, glucose à 103°C. Verser sur le lait concentré et la gélatine hydratée. Verser sur le chocolat blanc et le colorant. Mixer, filmer au contact. Utiliser à 30/32°C. Sortir les entremets du congélateur, décercler, poser sur grille. Glacer entièrement. Décorer avec des fruits frais, des copeaux de chocolat blanc ou des macarons."
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
                  <span className="text-sm font-medium w-fit text-center">{servings} Lot(s)</span>
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
                           <li>Pour l'insert rhubarbe : ne le mixez pas trop finement. Garder des morceaux apporte de la mâche et une surprise acidulée à la dégustation.</li>
                           <li>La température est cruciale pour le glaçage. Trop chaud (40°C), il coulera trop vite et ne couvrira pas les bords. Trop froid (25°C), il figera en paquets. Visez 30-32°C.</li>
                           <li>Utilisez une meringue italienne pour la mousse aux fruits : elle apporte une texture beaucoup plus légère et stable qu'une simple chantilly aux fruits.</li>
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
                          "C'est un entremets printanier par excellence. L'équilibre réside dans le dosage du sucre de la compotée : la rhubarbe doit rester piquante pour contrer le sucre de la meringue et du glaçage. Visuellement, le rouge profond du glaçage annonce la couleur."
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
export default EntremetsFramboiseRhubarbe;