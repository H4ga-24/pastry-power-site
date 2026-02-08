import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed, Printer, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const LeMarbrePistacheChocolatLait = () => {
  const [servings, setServings] = useState(3); // Default 3 entremets
  const { toast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleAddToFavorites = () => {
    toast({
      title: "Ajouté aux favoris",
      description: "Cette recette a été ajoutée à votre carnet de recettes.",
      duration: 3000,
    });
  };

  const recipeData = {
    category: "PÂTISSERIE • ENTREMETS",
    title: "Le Marbré Pistache Chocolat Lait",
    yield: "3 entremets (1 x 16cm, 1 x 18cm, 1 x 20cm)",
    type: "Création signature - Effet Marbré",
    prepTime: "5H 00",
    cookTime: "40 MIN",
    difficulty: "EXPERT",
    description: "Une création visuelle et gustative saisissante. L'alliance douce et réconfortante du chocolat au lait rencontre la finesse de la pistache dans un jeu de textures aériennes, le tout reposant sur un croustillant praliné addictif.",
    image: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
  };

  const ingredients = [
    { section: "Biscuit Pistache", items: [
      { name: 'Pâte d\'amande 50%', amount: 260, unit: 'g' },
      { name: 'Pâte de pistache', amount: 85, unit: 'g' },
      { name: 'Oeufs entiers', amount: 220, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 45, unit: 'g' },
      { name: 'Fécule de maïs', amount: 45, unit: 'g' },
      { name: 'Beurre doux', amount: 85, unit: 'g' },
      { name: 'Blancs d\'oeufs', amount: 160, unit: 'g' },
      { name: 'Sucre semoule', amount: 65, unit: 'g' }
    ]},
    { section: "Croustillant Lait Noisette", items: [
      { name: 'Praliné noisette 60%', amount: 300, unit: 'g' },
      { name: 'Chocolat lait 40%', amount: 120, unit: 'g' },
      { name: 'Feuilletine (crêpes dentelles)', amount: 150, unit: 'g' },
      { name: 'Fleur de sel', amount: 3, unit: 'g' }
    ]},
    { section: "Anglaise de Base (pour les 2 mousses)", items: [
      { name: 'Lait entier', amount: 500, unit: 'g' },
      { name: 'Crème liquide 35%', amount: 500, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 200, unit: 'g' },
      { name: 'Sucre semoule', amount: 100, unit: 'g' }
    ]},
    { section: "Bavaroise Lait", items: [
      { name: 'Anglaise de base (chaude)', amount: 600, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 10, unit: 'g' },
      { name: 'Chocolat lait 40%', amount: 280, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 450, unit: 'g' }
    ]},
    { section: "Bavaroise Pistache", items: [
      { name: 'Anglaise de base (chaude)', amount: 600, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 12, unit: 'g' },
      { name: 'Pâte de pistache pure', amount: 100, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 450, unit: 'g' }
    ]},
    { section: "Glaçage Lait", items: [
      { name: 'Eau', amount: 150, unit: 'g' },
      { name: 'Sucre semoule', amount: 300, unit: 'g' },
      { name: 'Sirop de glucose', amount: 300, unit: 'g' },
      { name: 'Lait concentré sucré', amount: 200, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 20, unit: 'g' },
      { name: 'Chocolat lait 40%', amount: 300, unit: 'g' },
      { name: 'Nappage neutre', amount: 100, unit: 'g' }
    ]},
    { section: "Finition", items: [
      { name: 'Pistaches hachées', amount: 50, unit: 'g' },
      { name: 'Feuille d\'or', amount: 3, unit: 'feuilles' }
    ]}
  ];

  const steps = [
    {
      title: "1. Biscuit Pistache",
      text: "Dans la cuve du batteur avec la feuille, détendre la pâte d'amande et la pâte de pistache avec les œufs entiers ajoutés petit à petit. Une fois le mélange lisse, foisonner au fouet en ajoutant les jaunes. Monter les blancs en neige avec le sucre. Incorporer une partie des blancs au premier mélange, ajouter la fécule tamisée, puis le reste des blancs délicatement. Terminer par le beurre fondu froid. Couler dans 3 cercles de diamètre 14, 16 et 18 cm. Cuire à 170°C environ 15-20 min."
    },
    {
      title: "2. Croustillant Lait Noisette",
      text: "Fondre le chocolat au lait à 45°C. Mélanger avec le praliné noisette. Ajouter la feuilletine émiettée et la fleur de sel. Mélanger délicatement. Étaler immédiatement une fine couche sur chaque disque de biscuit pistache refroidi. Réserver au congélateur."
    },
    {
      title: "3. Anglaise de Base",
      text: "Porter le mélange lait et crème à ébullition. Verser sur les jaunes d'oeufs préalablement blanchis avec le sucre. Reverser le tout dans la casserole et cuire à la nappe (84°C) en vannant constamment. Chinoiser immédiatement et diviser la masse en deux parts égales (environ 600g chacune) pour les deux bavaroises."
    },
    {
      title: "4. Bavaroise Lait",
      text: "Dans la première moitié d'anglaise chaude (600g), ajouter la gélatine hydratée et essorée. Verser sur le chocolat au lait haché (ou pistoles). Émulsionner au mixeur plongeant. Refroidir à 25°C/30°C. Incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "5. Bavaroise Pistache",
      text: "Dans la seconde moitié d'anglaise chaude (600g), ajouter la gélatine hydratée et essorée, ainsi que la pâte de pistache. Mixer pour bien lisser. Refroidir à 25°C/30°C. Incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "6. Glaçage Lait",
      text: "Cuire l'eau, le sucre et le glucose à 103°C. Verser sur le lait concentré, la gélatine hydratée et essorée, le chocolat au lait et le nappage neutre. Mixer sans incorporer d'air (mixeur plongeant immergé). Filmer au contact et réserver 24h au frais. Utiliser à 30-32°C."
    },
    {
      title: "7. Montage et Finition",
      text: "Montage à l'envers dans des cercles de 16, 18 et 20 cm chemisés de rhodoïd. Technique du marbrage : Mettre les deux mousses en poche sans douille. Pocher simultanément les deux mousses en spirale ou en points aléatoires dans le fond du cercle, puis passer brièvement une petite spatule pour créer l'effet marbré sans tout mélanger. Remplir aux 3/4. Déposer l'insert biscuit/croustillant (croustillant vers la mousse). Lisser à ras. Surgeler à cœur. Démouler, glacer avec le glaçage lait à 32°C. Décorer la base de pistaches hachées."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings) / 3).toFixed(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
            <Link to="/patisserie/gateaux/entremets">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-white pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux Entremets</Button>
            </Link>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrint} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Printer className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" onClick={handleAddToFavorites} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Star className="w-4 h-4" /></Button>
            </div>
        </div>
        
        <div className="relative h-[70vh] w-full overflow-hidden rounded-xl mb-12 group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent z-10"></div>
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover transform transition-transform duration-700" 
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-4"
            >
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase px-3 py-1 border border-[#D4AF37] rounded-full bg-[#D4AF37]/10 backdrop-blur-md">
                    {recipeData.category}
                </span>
                <span className="text-white/80 text-xs font-medium tracking-wider flex items-center gap-1">
                   <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Recette Signature
                </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif text-white mb-6 font-bold tracking-tight drop-shadow-lg"
            >
              {recipeData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 max-w-2xl mb-8 leading-relaxed text-lg font-light drop-shadow-md"
            >
              {recipeData.description}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90 bg-black/30 backdrop-blur-md p-6 rounded-xl w-fit border border-white/10"
            >
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37]" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-[#D4AF37]" /> {recipeData.yield}</div>
              <div className="flex items-center gap-2"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> {recipeData.type}</div>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 border border-white/5 rounded-2xl h-fit sticky top-24 shadow-2xl">
             <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h3 className="font-serif text-2xl text-white">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#252525] px-4 py-2 rounded-full border border-white/5 shadow-inner">
                  <button onClick={() => setServings(s => Math.max(1, s - 1))} className="text-[#D4AF37] hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="text-sm font-bold w-fit text-center min-w-[80px]">{servings} {servings === 1 ? 'Entremet' : 'Entremets'}</span>
                  <button onClick={() => setServings(s => s + 1)} className="text-[#D4AF37] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
             </div>
             <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
               {ingredients.map((section, idx) => (
                 <div key={idx}>
                   <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2 sticky top-0 bg-[#1a1a1a] py-2 z-10">
                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span>
                     {section.section}
                   </h4>
                   <ul className="space-y-3 text-sm text-gray-400">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:bg-white/5 px-3 py-2 rounded transition-colors duration-300">
                         <span className="leading-relaxed font-medium text-gray-300">{ing.name}</span>
                         <span className="text-[#D4AF37] font-bold whitespace-nowrap ml-4 bg-[#252525] px-2 py-1 rounded text-xs border border-[#D4AF37]/20">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#8a6e1f] text-black w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg shadow-[#D4AF37]/20">P</span>
              Progression
            </h2>
            
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1.5 h-auto rounded-xl border border-white/5 mb-10 shadow-lg">
                <TabsTrigger value="steps" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-lg uppercase tracking-widest text-xs font-bold transition-all duration-300">Étapes de réalisation</TabsTrigger>
                <TabsTrigger value="tips" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-lg uppercase tracking-widest text-xs font-bold transition-all duration-300">L'Expertise du Chef</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-6">
                {steps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: index * 0.1 }} 
                      className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/5 group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <span className="text-9xl font-serif text-[#D4AF37]">{index + 1}</span>
                      </div>
                      <div className="flex gap-6 relative z-10">
                        <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#252525] text-[#D4AF37] font-serif font-bold text-xl border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-lg">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl text-white font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                          <p className="text-gray-300 leading-relaxed text-base font-light">{step.text}</p>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="tips">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/5 p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="flex items-start gap-8 relative z-10">
                      <div className="bg-[#D4AF37]/10 p-5 rounded-2xl border border-[#D4AF37]/20 backdrop-blur-sm">
                        <Lightbulb className="w-10 h-10 text-[#D4AF37]" />
                      </div>
                      <div className="space-y-8">
                        <h4 className="text-3xl font-serif text-white">Le Secret du Marbrage Parfait</h4>
                        <div className="grid gap-6">
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">La Température</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Vos deux bavaroises doivent être exactement à la même température (environ 25-30°C) et avoir la même texture au moment du montage. Si l'une est plus liquide que l'autre, le marbrage sera raté.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">Le Geste</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Ne cherchez pas à trop mélanger. Le but est de voir distinctement les deux couleurs à la découpe. Quelques coups de spatule brefs et irréguliers suffisent amplement.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">L'Insert</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Appuyez légèrement sur l'insert biscuit lors du montage pour faire remonter un peu de mousse sur les bords et assurer une finition nette au démoulage.</p>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-white/5 mt-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent"></div>
               <Quote className="w-16 h-16 text-[#D4AF37] opacity-20 flex-shrink-0" />
               <p className="text-gray-300 italic text-xl font-light leading-relaxed relative z-10">
                 "Ce marbré n'est pas qu'un exercice de style visuel. C'est la recherche de l'équilibre parfait : chaque bouchée offre une proportion différente de pistache et de chocolat, créant une expérience de dégustation toujours renouvelée et jamais monotone."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeMarbrePistacheChocolatLait;