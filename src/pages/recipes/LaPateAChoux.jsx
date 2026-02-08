import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaPateAChoux = () => {
  const baseServings = 500; // Grammes de pâte environ
  const [servings, setServings] = useState(baseServings);

  const recipeData = {
    category: "PÂTISSERIE • GÂTEAUX",
    title: "La Pâte à Choux",
    prepTime: "20 MIN",
    cookTime: "25 MIN",
    difficulty: "MOYEN",
    description: "La recette mère indispensable. Une pâte précuite sur le feu (desséchée) puis hydratée aux œufs, qui gonfle grâce à la vapeur emprisonnée lors de la cuisson.",
    image: "https://gourmantissimes.com/wp-content/uploads/2013/07/2013-07-06-IMG-4465.jpg",
  };

  const ingredients = [
    { name: 'Eau', amount: 125, unit: 'g' },
    { name: 'Lait entier', amount: 125, unit: 'g' },
    { name: 'Beurre doux', amount: 100, unit: 'g' },
    { name: 'Sel fin', amount: 4, unit: 'g' },
    { name: 'Sucre semoule', amount: 5, unit: 'g' },
    { name: 'Farine T55', amount: 150, unit: 'g' },
    { name: 'Oeufs entiers', amount: 250, unit: 'g' }
  ];

  const steps = [
    {
      title: "Ébullition des liquides",
      text: "Dans une casserole à fond épais, versez l'eau, le lait, le sel, le sucre et le beurre coupé en petits dés. Portez le mélange à franche ébullition. Le beurre doit être totalement fondu avant que l'ébullition ne soit trop forte pour éviter l'évaporation excessive."
    },
    {
      title: "La Panade",
      text: "Hors du feu, jetez la farine tamisée en une seule fois dans le liquide bouillant. Mélangez vivement à la spatule jusqu'à ce qu'il n'y ait plus de farine sèche visible."
    },
    {
      title: "Le Desséchage",
      text: "Remettez la casserole sur feu moyen. Remuez sans cesse avec la spatule en écrasant la pâte contre les parois et le fond. La pâte doit se décoller des parois et former une boule lisse. Une fine pellicule doit se former au fond de la casserole (2 à 3 minutes)."
    },
    {
      title: "Incorporation des œufs",
      text: "Débarrassez la panade dans un cul-de-poule (ou la cuve du robot avec la feuille). Laissez tiédir quelques instants. Incorporez les œufs battus en 4 ou 5 fois, en mélangeant énergiquement entre chaque ajout. Attendez que l'œuf soit absorbé avant d'en rajouter."
    },
    {
      title: "Le contrôle de texture",
      text: "La pâte est prête lorsqu'elle est lisse, brillante et forme un 'bec d'oiseau' ou un ruban cassant lorsqu'on soulève la spatule. Tracez un sillon dans la pâte avec le doigt : il doit se refermer doucement."
    },
    {
      title: "Dressage et Cuisson",
      text: "Mettez en poche à douille immédiatement. Dressez sur plaque graissée ou tapis silicone. Enfournez à 180°C (four statique de préférence) pour 25 à 40 min selon la taille. N'ouvrez jamais la porte du four pendant les 20 premières minutes."
    }
  ];

  const calculateAmount = (baseAmount) => {
    return ((baseAmount * servings) / baseServings).toFixed(0);
  };

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
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-serif text-xl text-white">Ingrédients</h3>
                 <div className="flex items-center gap-3 bg-[#121212] px-3 py-1 rounded-full">
                   <button onClick={() => setServings(s => Math.max(100, s - 100))} className="text-[#D4AF37]"><Minus className="w-3 h-3" /></button>
                   <span className="text-sm font-medium min-w-[3rem] text-center">{servings}g</span>
                   <button onClick={() => setServings(s => s + 100)} className="text-[#D4AF37]"><Plus className="w-3 h-3" /></button>
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
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Préparation</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] font-serif">{index + 1}</span>
                    <div>
                      <h3 className="text-lg text-white font-serif mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

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
                           <li>Le desséchage de la panade est crucial : une fine pellicule doit impérativement se former au fond de la casserole pour garantir une bonne tenue.</li>
                           <li>Ne versez jamais le dernier œuf d'un coup. La quantité d'œuf nécessaire peut varier selon la dessiccation de la pâte. Arrêtez-vous dès que la pâte forme un 'bec d'oiseau' lisse et brillant.</li>
                           <li>N'ouvrez jamais la porte du four pendant les 20 premières minutes de cuisson, le choc thermique ferait retomber vos choux instantanément.</li>
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
                          "La pâte à choux est souvent redoutée, mais elle est en réalité très logique. Tout est question d'équilibre hydrique. Une fois la texture 'bec d'oiseau' maîtrisée, c'est la porte ouverte à des milliers de desserts, du plus simple au plus sophistiqué."
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
    </div>
  );
};

export default LaPateAChoux;