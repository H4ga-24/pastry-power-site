import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ForetNoireClassique = () => {
  const [servings, setServings] = useState(1); // 1 gâteau

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Forêt Noire Classique",
    yield: "1 Gâteau de 22/24 cm - 8 à 10 parts",
    type: "Entremets à étages - Génoise Cacao, Chantilly, Cerises",
    prepTime: "1H 30",
    cookTime: "25 MIN",
    difficulty: "MOYEN",
    description: "Le Schwarzwälder Kirschtorte authentique. Une génoise cacao ultra-légère, imbibée de kirsch, garnie de griottes acidulées et d'une chantilly aérienne, le tout recouvert de copeaux de chocolat.",
    image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/542A75A4-DD41-4E02-A931-D84C68D2EA0C/Derivates/6142ef34-e877-4894-8ae0-6b25bda63029.jpg",
  };

  const ingredients = [
    { section: "Génoise Cacao (Moule 22/24cm)", items: [
      { name: 'Oeufs entiers', amount: 300, unit: 'g (6 pc)' },
      { name: 'Sucre semoule', amount: 180, unit: 'g' },
      { name: 'Farine T55', amount: 150, unit: 'g' },
      { name: 'Cacao en poudre non sucré', amount: 30, unit: 'g' }
    ]},
    { section: "Sirop d'Imbibition", items: [
      { name: 'Eau', amount: 150, unit: 'g' },
      { name: 'Sucre semoule', amount: 150, unit: 'g' },
      { name: 'Kirsch', amount: 30, unit: 'g' }
    ]},
    { section: "Crème Chantilly", items: [
      { name: 'Crème liquide 35% MG (froide)', amount: 750, unit: 'g' },
      { name: 'Sucre glace', amount: 60, unit: 'g' },
      { name: 'Kirsch (facultatif)', amount: 20, unit: 'g' }
    ]},
    { section: "Garniture & Finition", items: [
      { name: 'Griottes au sirop (égouttées)', amount: 350, unit: 'g' },
      { name: 'Copeaux de chocolat noir', amount: 150, unit: 'g' },
      { name: 'Sucre glace (décor)', amount: 10, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "La Génoise Cacao",
      text: "Dans un cul-de-poule au bain-marie, fouetter les oeufs et le sucre jusqu'à atteindre 45/50°C. Retirer du feu et fouetter au batteur électrique jusqu'à complet refroidissement (le mélange doit tripler de volume et former le ruban). Tamiser la farine et le cacao ensemble. Incorporer délicatement aux oeufs montés à l'aide d'une maryse, en soulevant la masse. Verser dans un moule beurré et fariné. Cuire à 180°C pendant environ 25-30 minutes. Démouler sur grille et laisser refroidir totalement (idéalement, la préparer la veille)."
    },
    {
      title: "Le Sirop & La Chantilly",
      text: "Sirop : Porter l'eau et le sucre à ébullition. Laisser refroidir puis ajouter le Kirsch. Chantilly : Monter la crème liquide bien froide avec le sucre glace (et le kirsch si désiré) jusqu'à obtenir une texture ferme mais onctueuse. Réserver au frais."
    },
    {
      title: "Montage",
      text: "Couper la génoise en 3 disques horizontaux égaux. Poser le premier disque sur le plat de service. Imbiber généreusement de sirop. Étaler une couche de chantilly. Répartir la moitié des griottes. Recouvrir d'un peu de chantilly. Poser le deuxième disque. Imbiber. Étaler chantilly + reste des griottes. Poser le troisième disque. Imbiber légèrement."
    },
    {
      title: "Finition",
      text: "Masquer entièrement le gâteau (dessus et côtés) avec le reste de chantilly. Lisser à la spatule. Recouvrir les bords et le centre de copeaux de chocolat (s'aider de la main ou d'une corne). Pocher des rosaces de chantilly sur le pourtour supérieur. Déposer une griotte sur chaque rosace. Saupoudrer légèrement de sucre glace si désiré."
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
                           <li>Préparez votre génoise la veille et filmez-la une fois refroidie. Elle sera beaucoup plus facile à découper en tranches régulières sans s'effriter.</li>
                           <li>Utilisez de vraies griottes (légèrement acides) et non des cerises confites trop sucrées. Le contraste avec la chantilly sucrée est essentiel.</li>
                           <li>Pour faire vos copeaux : utilisez un économe sur une tablette de chocolat ou une plaque pâtissière légèrement tiédie par la paume de la main.</li>
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
                          "La Forêt Noire n'est pas qu'un assemblage, c'est un équilibre. Il ne faut pas noyer le biscuit de sirop, mais il ne doit pas être sec pour autant. Le Kirsch doit parfumer subtilement sans brûler le palais. C'est un gâteau rustique qui demande de la finesse."
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
export default ForetNoireClassique;