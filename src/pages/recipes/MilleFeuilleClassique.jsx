import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MilleFeuilleClassique = () => {
  const [servings, setServings] = useState(1); // 1 Mille-feuille (4-6 people)

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Mille-feuille Classique (Vanille & Marbrage)",
    yield: "1 Mille-feuille (4 à 6 personnes)",
    type: "Pâtisserie Française Classique - Feuilletage, Crème Pâtissière, Glaçage Royal",
    prepTime: "2H 00",
    cookTime: "40 MIN",
    difficulty: "AVANCÉ",
    description: "Le summum de la texture : un feuilletage caramélisé croustillant qui contraste avec l'onctuosité d'une crème pâtissière vanille, le tout couronné par le mythique glaçage marbré.",
    image: "https://img.cuisineaz.com/660x660/2022/09/30/i188300-sans-titre-2022-09-30t115159-287.png",
  };

  const ingredients = [
    { section: "Le Feuilletage", items: [
      { name: 'Pâte feuilletée (maison ou commerce)', amount: 500, unit: 'g' },
      { name: 'Sucre glace (pour caraméliser)', amount: 50, unit: 'g' }
    ]},
    { section: "La Crème Pâtissière", items: [
      { name: 'Lait entier', amount: 500, unit: 'g' },
      { name: 'Gousse de vanille', amount: 1, unit: 'pc' },
      { name: 'Jaunes d\'oeufs', amount: 80, unit: 'g' },
      { name: 'Sucre semoule', amount: 100, unit: 'g' },
      { name: 'Maïzena (Fécule de maïs)', amount: 50, unit: 'g' },
      { name: 'Beurre doux (froid)', amount: 50, unit: 'g' }
    ]},
    { section: "Le Glaçage Marbré", items: [
      { name: 'Sucre glace', amount: 200, unit: 'g' },
      { name: 'Eau (ou blanc d\'oeuf)', amount: 30, unit: 'g' },
      { name: 'Chocolat noir fondue', amount: 30, unit: 'g' },
      { name: 'Nappage neutre (facultatif, brillance)', amount: 10, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "Cuisson du Feuilletage",
      text: "Étaler la pâte feuilletée sur une plaque de cuisson recouverte de papier sulfurisé (épaisseur 2-3mm). Piquer généreusement la pâte avec une fourchette. Poser une seconde feuille de papier sulfurisé et une seconde plaque par-dessus pour empêcher la pâte de trop gonfler. Cuire à 200°C pendant 20 min. Retirer la plaque du dessus, saupoudrer de sucre glace, et remettre au four (sans la plaque du dessus) à 230°C quelques minutes pour caraméliser (surveillance constante !). Laisser refroidir sur grille."
    },
    {
      title: "La Crème Pâtissière",
      text: "Faire bouillir le lait avec la gousse de vanille grattée. Fouetter les jaunes et le sucre jusqu'à blanchiment, puis ajouter la Maïzena. Verser le lait bouillant sur le mélange en fouettant. Reverser le tout dans la casserole et cuire à feu moyen sans cesser de fouetter jusqu'à épaississement (faire bouillir 2 minutes). Hors du feu, incorporer le beurre froid en dés. Filmer au contact et refroidir rapidement."
    },
    {
      title: "Préparation au Montage",
      text: "Détendre la crème pâtissière refroidie au fouet pour la rendre lisse. Parer (couper) le rectangle de pâte feuilletée cuit pour obtenir des bords nets, puis le diviser en 3 rectangles de dimensions identiques (ex: 10x24cm)."
    },
    {
      title: "Montage et Finition",
      text: "Pocher la crème pâtissière sur le premier rectangle de pâte. Poser le second rectangle, appuyer légèrement. Pocher une seconde couche de crème. Poser le troisième rectangle (côté le plus plat vers le haut pour le glaçage). Glaçage : Mélanger sucre glace et eau pour obtenir une pâte blanche nappante assez épaisse (fondant). L'étaler sur le dessus à la spatule. Tracer immédiatement des lignes parallèles de chocolat fondu au cornet. Rayer avec la pointe d'un couteau dans un sens puis dans l'autre pour créer le marbrage. Parer les côtés pour une finition nette."
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
                  <span className="text-sm font-medium w-fit text-center">{servings} Gâteau(x)</span>
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
                           <li>La caramélisation de la pâte est l'étape clé : elle imperméabilise le feuilletage (l'empêchant de ramollir au contact de la crème) et apporte ce goût caractéristique.</li>
                           <li>Ne montez votre mille-feuille qu'au dernier moment si possible, ou conservez-le au frais maximum 24h. Le contraste croustillant/moelleux est éphémère.</li>
                           <li>Pour couper des parts nettes sans écraser la crème : utilisez un couteau scie pour scier délicatement la couche de pâte du dessus avant d'enfoncer la lame pour la crème.</li>
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
                          "Le Mille-feuille est un test de patience et de précision. Un bon mille-feuille ne s'écrase pas à la découpe, le feuilletage doit être sec et très cuit (brun, pas doré). Le glaçage doit rester fin pour ne pas apporter un excès de sucre inutile."
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
export default MilleFeuilleClassique;