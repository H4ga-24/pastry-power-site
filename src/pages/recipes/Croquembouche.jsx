import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Croquembouche = () => {
  const baseServings = 20; // Personnes (environ 3-4 choux par personne)
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • PIÈCE MONTÉE",
    title: "Croquembouche",
    prepTime: "3H",
    cookTime: "1H",
    difficulty: "EXPERT",
    description: "La pièce montée traditionnelle des grands événements. Une pyramide majestueuse de choux garnis, cimentée au caramel croquant.",
    image: "https://laviechantilly.fr/wp-content/uploads/2025/09/2025-09-09-11-51-25_.jpg",
  };

  const ingredients = [
    { name: 'Pâte à choux', amount: 800, unit: 'g' },
    { name: 'Crème pâtissière Vanille', amount: 1200, unit: 'g' },
    { name: 'Sucre (Caramel)', amount: 500, unit: 'g' },
    { name: 'Glucose', amount: 150, unit: 'g' },
    { name: 'Eau', amount: 150, unit: 'g' },
    { name: 'Nougatine (base)', amount: 300, unit: 'g' }
  ];

  const steps = [
    {
      title: "Préparation des choux",
      text: "Dressez environ 60 à 80 petits choux réguliers. Cuisez-les bien secs pour qu'ils ne ramollissent pas après garnissage. Garnissez-les de crème pâtissière aromatisée (vanille, grand-marnier, etc.) par le dessous."
    },
    {
      title: "Cuisson du sucre",
      text: "Dans une casserole propre, cuisez le sucre, l'eau et le glucose jusqu'à obtenir un caramel blond clair. Arrêtez la cuisson en trempant le cul de la casserole dans l'eau froide."
    },
    {
      title: "Glaçage",
      text: "Trempez le sommet de chaque chou dans le caramel et posez-les (côté caramel) sur une feuille silicone ou un plan huilé pour obtenir une surface plate et brillante."
    },
    {
      title: "Montage",
      text: "Utilisez un cône en inox huilé ou montez à main levée. Trempez le côté des choux dans le caramel chaud pour les coller entre eux. Commencez par une base solide en cercle, puis montez en réduisant le diamètre progressivement."
    },
    {
      title: "Décor",
      text: "Réalisez des cheveux d'ange (sucre filé) avec une fourchette trempée dans le caramel, ou collez des fleurs en sucre/nougatine."
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
                  <button onClick={() => setServings(s => Math.max(5, s - 5))} className="text-[#D4AF37]"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-medium w-4 text-center">{servings}</span>
                  <button onClick={() => setServings(s => s + 5)} className="text-[#D4AF37]"><Plus className="w-3 h-3" /></button>
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
                           <li>Utilisez un cône (moule) huilé pour monter la pièce montée plus facilement et assurer sa régularité.</li>
                           <li>Ne garnissez pas les choux trop longtemps à l'avance pour éviter que le caramel ne fonde (il craint l'humidité du frigo).</li>
                           <li>Si votre caramel durcit dans la casserole, réchauffez-le très doucement sans le remuer pour ne pas le faire masser (cristalliser).</li>
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
                          "C'est une véritable architecture de sucre. Le caramel est votre ciment, il doit être couleur ambre clair : trop pâle il sera collant et la pièce s'effondrera, trop foncé il sera amer."
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
export default Croquembouche;