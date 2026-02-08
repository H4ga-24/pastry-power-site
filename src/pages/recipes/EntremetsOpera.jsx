import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EntremetsOpera = () => {
  const [servings, setServings] = useState(1); // 1 cadre

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Entremets Opéra",
    yield: "Pour un cadre de 40 x 60 cm",
    type: "Pâtisserie française classique",
    prepTime: "2H 30",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    description: "Le summum du raffinement parisien. Des couches successives de biscuit Joconde imbibé au café, de ganache chocolat et de crème au beurre café, le tout recouvert d'un glaçage intense.",
    image: "https://cdn.stoneline.de/thumbnail/e9/a5/e5/1727689765/gateau-opera_1920x1920.jpeg?ts=1727689805",
  };

  const ingredients = [
    { section: "Biscuit Joconde (3 feuilles 40x60)", items: [
      { name: 'Oeufs entiers', amount: 750, unit: 'g' },
      { name: 'Poudre d\'amande', amount: 500, unit: 'g' },
      { name: 'Sucre glace', amount: 500, unit: 'g' },
      { name: 'Blancs d\'oeufs', amount: 660, unit: 'g' },
      { name: 'Sucre semoule', amount: 100, unit: 'g' },
      { name: 'Farine T55', amount: 130, unit: 'g' },
      { name: 'Beurre fondu', amount: 100, unit: 'g' }
    ]},
    { section: "Sirop d'Imbibition Café", items: [
      { name: 'Eau', amount: 1000, unit: 'g' },
      { name: 'Sucre semoule', amount: 600, unit: 'g' },
      { name: 'Extrait de café', amount: 70, unit: 'g' }
    ]},
    { section: "Ganache Chocolat", items: [
      { name: 'Crème liquide 35%', amount: 600, unit: 'g' },
      { name: 'Chocolat noir 65%', amount: 600, unit: 'g' },
      { name: 'Trimoline (sucre inverti)', amount: 60, unit: 'g' }
    ]},
    { section: "Crème au Beurre Café (Pâte à bombe)", items: [
      { name: 'Jaunes d\'oeufs', amount: 240, unit: 'g' },
      { name: 'Sucre (pour sirop)', amount: 380, unit: 'g' },
      { name: 'Eau (pour sirop)', amount: 120, unit: 'g' },
      { name: 'Beurre pommade', amount: 900, unit: 'g' },
      { name: 'Extrait de café', amount: 40, unit: 'g' }
    ]},
    { section: "Glaçage 421", items: [
      { name: 'Pâte à glacer brune', amount: 500, unit: 'g' },
      { name: 'Chocolat noir couverture', amount: 500, unit: 'g' },
      { name: 'Huile de pépins de raisin', amount: 100, unit: 'g' }
    ]},
    { section: "Finition", items: [
      { name: 'Chocolat noir (chablon)', amount: 200, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "Préparation du Biscuit Joconde",
      text: "Monter les oeufs, la poudre d'amande et le sucre glace au ruban (environ 10 min). Incorporer la farine tamisée. Monter les blancs en neige avec le sucre semoule. Mélanger délicatement les deux masses. Ajouter le beurre fondu refroidi en fin de mélange. Étaler 850g d'appareil par plaque (3 plaques 40x60). Cuire à 230°C pendant 6 à 8 min. Laisser refroidir sur grille."
    },
    {
      title: "Sirop Café",
      text: "Bouillir l'eau et le sucre. Hors du feu, ajouter l'extrait de café. Réserver à température ambiante."
    },
    {
      title: "Ganache Chocolat",
      text: "Chauffer la crème avec la trimoline. Verser sur le chocolat haché en 3 fois pour créer une émulsion. Mixer pour lisser. Laisser cristalliser jusqu'à texture pommade (tartinable)."
    },
    {
      title: "Crème au Beurre Café",
      text: "Cuire l'eau et le sucre à 121°C. Verser sur les jaunes d'oeufs montés en versant sur la paroi de la cuve (Pâte à bombe). Fouetter jusqu'à complet refroidissement. Incorporer le beurre pommade petit à petit en foisonnant. Ajouter l'extrait de café. Lisser."
    },
    {
      title: "Montage - Étape 1",
      text: "Fondre le chocolat de chablonnage. L'étaler finement sur l'envers du premier biscuit Joconde. Laisser figer. Retourner ce biscuit (chocolat en dessous) et le placer au fond du cadre."
    },
    {
      title: "Montage - Étape 2",
      text: "Imbiber généreusement le premier biscuit avec le sirop café. Étaler une couche régulière de crème au beurre café (environ 600g). Poser le deuxième biscuit. Presser pour lisser."
    },
    {
      title: "Montage - Étape 3",
      text: "Imbiber le deuxième biscuit. Étaler la ganache chocolat (1000g). Poser le troisième biscuit. Presser. Imbiber ce dernier biscuit."
    },
    {
      title: "Montage - Étape 4",
      text: "Étaler la seconde couche de crème au beurre café sur le dessus. Lisser parfaitement à la règle pour avoir une surface plane et nette. Bloquer au grand froid (congélateur)."
    },
    {
      title: "Glaçage et Finition",
      text: "Fondre ensemble la pâte à glacer et le chocolat couverture à 45°C. Ajouter l'huile. Utiliser à 35-38°C. Verser sur l'entremets congelé et lisser en un seul passage à la palette coudée. Parer (couper) les bords pour révéler les couches nettes. Écrire 'Opéra' au cornet avec un peu de glaçage ou décorer de feuille d'or."
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
                           <li>Le chablonnage (couche de chocolat sous le biscuit du fond) est crucial : il rend l'entremets manipulable et empêche le sirop de coller au carton.</li>
                           <li>L'imbibage doit être généreux. Un Opéra sec est un Opéra raté. Le biscuit doit être "mouillé" mais pas détrempé.</li>
                           <li>Pour la découpe (parage), utilisez un couteau grand chef trempé dans l'eau chaude et essuyé. Nettoyez la lame entre chaque coupe.</li>
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
                          "L'Opéra est une question d'architecture. Les couches doivent être régulières et visibles à la coupe. La hauteur totale ne doit pas excéder 3,5 cm pour rester élégante en bouche. Utilisez un café expresso de très bonne qualité pour le sirop et la crème."
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
export default EntremetsOpera;