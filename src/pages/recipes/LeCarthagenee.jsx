import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeCarthagenee = () => {
  const [servings, setServings] = useState(3); // 3 entremets par défaut

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Le Carthagène",
    yield: "3 Entremets (1 x Ø16cm, 1 x Ø18cm, 1 x Ø20cm)",
    type: "Création signature - Mangue & Gingembre",
    prepTime: "4H 00",
    cookTime: "45 MIN",
    difficulty: "AVANCÉ",
    description: "Entremet élégant associant la douceur tropicale de la mangue au peps vivifiant du gingembre, avec un crémeux caramel onctueux et un biscuit financier doré au beurre noisette.",
    image: "https://images.unsplash.com/photo-1564327767378-abddd68f287d",
  };

  const ingredients = [
    { section: "Biscuit Financier Gingembre", items: [
      { name: 'Blancs d\'œufs', amount: 300, unit: 'g' },
      { name: 'Sucre glace', amount: 300, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 120, unit: 'g' },
      { name: 'Farine T55', amount: 120, unit: 'g' },
      { name: 'Gingembre frais râpé', amount: 30, unit: 'g' },
      { name: 'Gingembre en poudre', amount: 8, unit: 'g' },
      { name: 'Beurre noisette (tiède)', amount: 200, unit: 'g' },
      { name: 'Miel liquide', amount: 40, unit: 'g' },
      { name: 'Sel fin', amount: 2, unit: 'g' }
    ]},
    { section: "Crémeux Caramel au Gingembre", items: [
      { name: 'Sucre semoule', amount: 200, unit: 'g' },
      { name: 'Crème liquide 35% (chaude)', amount: 250, unit: 'g' },
      { name: 'Beurre demi-sel', amount: 60, unit: 'g' },
      { name: 'Jaunes d\'œufs', amount: 80, unit: 'g' },
      { name: 'Gingembre frais râpé', amount: 20, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 6, unit: 'g' },
      { name: 'Jus de citron', amount: 10, unit: 'g' }
    ]},
    { section: "Mousse Mangue", items: [
      { name: 'Purée de mangue', amount: 400, unit: 'g' },
      { name: 'Meringue italienne', amount: 150, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 400, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 10, unit: 'g' }
    ]},
    { section: "Finition et Décor", items: [
      { name: 'Mangue fraîche (tranches)', amount: 1, unit: 'pièce' },
      { name: 'Gingembre confit', amount: 50, unit: 'g' },
      { name: 'Tuiles caramel', amount: 6, unit: 'pièces' },
      { name: 'Feuille d\'or (optionnel)', amount: 3, unit: 'feuilles' },
      { name: 'Nappage neutre', amount: 100, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "1. Biscuit Financier Gingembre",
      text: "Préparer un beurre noisette en cuisant le beurre jusqu'à obtenir une belle couleur ambrée et un parfum de noisette. Filtrer et laisser tiédir. Dans un bol, tamiser ensemble le sucre glace, la poudre d'amande et la farine. Ajouter le gingembre en poudre et le sel. Incorporer les blancs d'œufs non montés en mélangeant délicatement. Ajouter le gingembre frais râpé et le miel. Verser le beurre noisette tiède en filet en mélangeant constamment. Répartir l'appareil dans 3 cercles beurrés et farinés (16cm, 18cm, 20cm) sur environ 1,5cm d'épaisseur. Cuire à 170°C pendant 18-22 minutes selon la taille. Le biscuit doit être doré et légèrement bombé. Laisser refroidir complètement avant démoulage."
    },
    {
      title: "2. Crémeux Caramel au Gingembre",
      text: "Hydrater la gélatine dans l'eau froide. Réaliser un caramel à sec avec le sucre dans une casserole à fond épais. Cuire jusqu'à obtenir une belle couleur ambrée (attention, ne pas brûler). Déglacer délicatement avec la crème chaude (attention aux projections). Ajouter le beurre demi-sel et le gingembre frais râpé. Porter à ébullition. Dans un bol, blanchir les jaunes d'œufs. Verser progressivement le mélange caramel-gingembre chaud sur les jaunes en fouettant. Remettre dans la casserole et cuire à 83°C en remuant constamment (nappe). Hors du feu, ajouter la gélatine essorée et le jus de citron. Mixer pour lisser. Couler dans 3 cercles filmés (14cm, 16cm, 18cm) sur 1cm d'épaisseur. Surgeler."
    },
    {
      title: "3. Mousse Mangue",
      text: "Hydrater la gélatine dans l'eau froide. Chauffer 1/3 de la purée de mangue (environ 130g). Ajouter la gélatine essorée et bien dissoudre. Incorporer le reste de purée froide. Mélanger. Laisser refroidir à température ambiante sans que la gélatine ne fige. Préparer une meringue italienne (cuire 240g de sucre avec 80g d'eau à 121°C, verser sur 90g de blancs montés). Monter la crème en chantilly mousseuse (pas trop ferme). Incorporer délicatement la meringue italienne à la purée de mangue gélatinée. Puis incorporer la crème fouettée en soulevant la masse. Utiliser immédiatement."
    },
    {
      title: "4. Montage et Finition",
      text: "Chemiser 3 cercles (16cm, 18cm, 20cm) avec des bandes de rhodoïd. Placer un disque de biscuit financier au fond de chaque cercle. Pocher une couche de mousse mangue (environ 1/3 de hauteur). Déposer au centre l'insert de crémeux caramel-gingembre congelé (bien centré). Recouvrir du reste de mousse mangue jusqu'en haut du cercle. Lisser la surface à la spatule. Réfrigérer 6h minimum (ou congeler 4h puis décongeler au frais 4h). Au moment du service : démouler délicatement. Disposer harmonieusement des tranches de mangue fraîche disposées en éventail, des morceaux de gingembre confit, et une tuile caramel verticale. Napper les fruits au pinceau avec le nappage neutre tiède. Poser délicatement une pointe de feuille d'or pour la touche finale."
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
        <div className="relative h-[60vh] w-full overflow-hidden rounded-sm mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-black/40 z-10"></div>
          <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{recipeData.title}</h1>
            <p className="text-gray-200 max-w-2xl mb-6 leading-relaxed">{recipeData.description}</p>
            <div className="flex flex-wrap gap-6 text-xs tracking-widest font-medium text-white/80">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#D4AF37]" /> {recipeData.yield}</div>
              <div className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" /> {recipeData.type}</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[350px_1fr] gap-16">
          <div className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm h-fit sticky top-24">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#121212] px-3 py-1 rounded-full">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-medium w-fit text-center min-w-[80px]">{servings} {servings === 1 ? 'Entremet' : 'Entremets'}</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37] hover:text-white transition-colors"><Plus className="w-3 h-3" /></button>
                </div>
             </div>
             <div className="space-y-6">
               {ingredients.map((section, idx) => (
                 <div key={idx}>
                   <h4 className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3 pb-2 border-b border-[#D4AF37]/20">{section.section}</h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                         <span className="leading-relaxed">{ing.name}</span>
                         <span className="text-white font-medium whitespace-nowrap ml-4">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white mb-6 pb-4 border-b border-white/10">Préparation</h2>
            {steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-serif font-medium">{index + 1}</span>
                  <div>
                    <h3 className="text-lg text-white font-serif mb-3">{step.title}</h3>
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
                           <li><strong className="text-white">Équilibre mangue-gingembre :</strong> Le gingembre ne doit pas dominer. Il apporte une note chaude et légèrement piquante qui sublime la douceur de la mangue sans la masquer.</li>
                           <li><strong className="text-white">Beurre noisette :</strong> La couleur du beurre noisette détermine l'intensité aromatique du financier. Visez une teinte ambrée profonde mais arrêtez la cuisson avant le point de fumée.</li>
                           <li><strong className="text-white">Technique de versement du caramel :</strong> Versez la crème chaude progressivement sur le caramel en remuant constamment. Si le caramel durcit, remettez sur feu doux quelques instants en fouettant.</li>
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
                          "Le Carthagène est un voyage sensoriel : la fraîcheur tropicale de la mangue rencontre la chaleur épicée du gingembre, tandis que le caramel apporte une profondeur gourmande. La clé réside dans l'harmonie des textures : le croustillant du biscuit financier, l'onctuosité du crémeux caramel et la légèreté aérienne de la mousse mangue. Chaque bouchée doit raconter une histoire."
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm mt-4">
                          <strong className="text-[#D4AF37]">Astuce présentation :</strong> Pour une finition spectaculaire, réalisez une fine tuile de caramel transparent avec quelques graines de sésame doré, et disposez-la verticalement sur l'entremets juste avant le service. L'effet visuel est saisissant.
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

export default LeCarthagenee;