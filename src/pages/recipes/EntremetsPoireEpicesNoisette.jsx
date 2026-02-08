import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EntremetsPoireEpicesNoisette = () => {
  const [servings, setServings] = useState(4); // 4 entremets (Recipe base yield)

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Entremets Poire, Épices & Noisette",
    yield: "4 Entremets de Ø 22 cm",
    type: "Entremets de Saison - Pain d'épices, Poire, Chocolat Lait",
    prepTime: "4H 00",
    cookTime: "1H 00",
    difficulty: "AVANCÉ",
    description: "Un hymne à l'automne et à l'hiver. La fraîcheur de la poire confite rencontre la chaleur des épices et la gourmandise du chocolat au lait, le tout soutenu par le croquant de la noisette.",
    image: "https://www.cuisineaddict.com/img/advcms/matrices/media/1096.jpg",
  };

  const ingredients = [
    { section: "Poires Confites au Cognac", items: [
      { name: 'Poires (cubes)', amount: 600, unit: 'g' },
      { name: 'Sucre semoule', amount: 80, unit: 'g' },
      { name: 'Beurre', amount: 40, unit: 'g' },
      { name: 'Cognac', amount: 20, unit: 'g' },
      { name: 'Vanille (gousse)', amount: 1, unit: 'pc' },
      { name: 'Gélatine', amount: 6, unit: 'g' }
    ]},
    { section: "Crémeux Lacté", items: [
      { name: 'Crème liquide', amount: 250, unit: 'g' },
      { name: 'Lait', amount: 250, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 100, unit: 'g' },
      { name: 'Sucre', amount: 50, unit: 'g' },
      { name: 'Chocolat Lait 40%', amount: 300, unit: 'g' },
      { name: 'Gélatine', amount: 6, unit: 'g' }
    ]},
    { section: "Biscuit Pain d'Épices", items: [
      { name: 'Lait', amount: 220, unit: 'g' },
      { name: 'Sucre', amount: 180, unit: 'g' },
      { name: 'Miel', amount: 180, unit: 'g' },
      { name: 'Farine', amount: 200, unit: 'g' },
      { name: 'Farine de seigle', amount: 50, unit: 'g' },
      { name: 'Mélange 4 épices', amount: 8, unit: 'g' },
      { name: 'Bicarbonate', amount: 6, unit: 'g' },
      { name: 'Beurre fondue', amount: 120, unit: 'g' }
    ]},
    { section: "Streusel Noisette", items: [
      { name: 'Beurre', amount: 100, unit: 'g' },
      { name: 'Cassonade', amount: 100, unit: 'g' },
      { name: 'Poudre de noisette', amount: 100, unit: 'g' },
      { name: 'Farine', amount: 100, unit: 'g' }
    ]},
    { section: "Mousse Poire", items: [
      { name: 'Purée de poire', amount: 500, unit: 'g' },
      { name: 'Sucre', amount: 50, unit: 'g' },
      { name: 'Gélatine', amount: 12, unit: 'g' },
      { name: 'Alcool de poire (Williamine)', amount: 20, unit: 'g' },
      { name: 'Crème fouettée', amount: 500, unit: 'g' }
    ]},
    { section: "Glaçage & Finition", items: [
      { name: 'Nappage neutre', amount: 300, unit: 'g' },
      { name: 'Colorant jaune/ocre', amount: 2, unit: 'g' },
      { name: 'Macarons Chocolat (garnis)', amount: 12, unit: 'pcs' },
      { name: 'Décors chocolat', amount: 1, unit: 'lot' }
    ]}
  ];

  const steps = [
    {
      title: "Les Biscuits & Inserts (J-1)",
      text: "Poires Confites : Sauter les dés de poire au beurre et sucre. Flamber au Cognac. Ajouter la vanille. Cuire jusqu'à tendreté. Ajouter la gélatine hydratée. Mouler dans 4 cercles de 18cm. Congeler. Biscuit Pain d'épices : Chauffer lait, sucre, miel. Verser sur les poudres tamisées. Ajouter le beurre fondu. Cuire sur plaque 40x60cm à 170°C, 15 min. Détailler 4 disques de 18cm. Streusel : Sabler tous les ingrédients. Cuire à 160°C jusqu'à coloration dorée. Émietter."
    },
    {
      title: "Mousse & Crémeux (J-1)",
      text: "Crémeux Lacté : Réaliser une crème anglaise (cuisson 83°C) avec lait, crème, jaunes, sucre. Verser sur le chocolat lait et la gélatine hydratée. Mixer. Couler sur les poires confites congelées (dans les cercles de 18cm). Remettre au grand froid. Mousse Poire : Chauffer une partie de la purée avec le sucre, y fondre la gélatine hydratée. Mélanger au reste de purée froide et l'alcool. Incorporer la crème fouettée mousseuse."
    },
    {
      title: "Montage & Finitions",
      text: "Montage à l'envers : Dans 4 cercles de 22cm filmés, pocher une couche de mousse poire. Déposer l'insert congelé (Poire/Crémeux) côté crémeux contre la mousse. Ajouter un peu de mousse. Déposer le disque de pain d'épices imbibé légèrement de sirop (eau/sucre/épices). Parsemer de streusel noisette pour le croustillant final (ou le coller au chocolat sur le biscuit). Lisser. Congeler. Glaçage : Chauffer le nappage neutre avec le colorant. Glacer les entremets congelés. Décorer avec des macarons chocolat sur le pourtour ou le dessus, et des décors en chocolat fin."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount / 4) * servings).toFixed(1);

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
                           <li>Pour le pain d'épices, ne travaillez pas trop la pâte une fois la farine ajoutée pour éviter qu'elle ne devienne élastique.</li>
                           <li>Soyez généreux sur le flambage des poires : le Cognac apporte une note boisée essentielle qui lie le fruit aux épices.</li>
                           <li>Le streusel doit être bien cuit (doré) pour conserver son croustillant une fois enfermé dans l'entremets. Vous pouvez l'isoler avec une fine couche de beurre de cacao fondu.</li>
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
                          "Cet entremets est un dessert de réconfort. L'accord poire-chocolat lait est un classique, mais le pain d'épices lui donne ce caractère festif et chaleureux. Le streusel noisette est là pour réveiller le palais avec sa texture sableuse et torréfiée."
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
export default EntremetsPoireEpicesNoisette;