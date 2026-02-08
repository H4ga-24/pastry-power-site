import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed, Printer, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const EntremetsBavaroisVanille = () => {
  const [servings, setServings] = useState(1); // 1 entremets
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
    title: "Entremets Bavarois Vanille & Cœur Chocolat",
    yield: "1 Entremets de 20 cm",
    type: "Classique CAP - Montage avec cartouchière de biscuit apparente",
    prepTime: "2H 30",
    cookTime: "30 MIN",
    difficulty: "MOYEN",
    description: "Un classique indémodable du CAP Pâtissier. Une mousse bavaroise onctueuse à la vanille qui cache un cœur fondant de crémeux chocolat, le tout entouré d'une cartouchière de biscuit à la cuillère moelleux.",
    image: "https://www.maspatule.com/blog/wp-content/uploads/2023/05/IMG_4440-03-1440x811.jpeg",
  };

  const ingredients = [
    { section: "Insert Crémeux Chocolat (Cercle 16cm)", items: [
      { name: 'Crème liquide 35%', amount: 125, unit: 'g' },
      { name: 'Lait entier', amount: 125, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 50, unit: 'g' },
      { name: 'Sucre semoule', amount: 30, unit: 'g' },
      { name: 'Chocolat noir 65%', amount: 120, unit: 'g' }
    ]},
    { section: "Biscuit à la Cuillère (2 disques 16cm + cartouchière)", items: [
      { name: 'Blancs d\'oeufs', amount: 120, unit: 'g' },
      { name: 'Sucre semoule', amount: 100, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 80, unit: 'g' },
      { name: 'Farine T55', amount: 100, unit: 'g' },
      { name: 'Sucre glace (pour poudrage)', amount: 50, unit: 'g' }
    ]},
    { section: "Bavaroise Vanille", items: [
      { name: 'Lait entier', amount: 250, unit: 'g' },
      { name: 'Gousse de vanille', amount: 1, unit: 'pc' },
      { name: 'Jaunes d\'oeufs', amount: 60, unit: 'g' },
      { name: 'Sucre semoule', amount: 60, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 6, unit: 'g' },
      { name: 'Crème liquide 35% montée', amount: 250, unit: 'g' }
    ]},
    { section: "Sirop d'Imbibition", items: [
      { name: 'Eau', amount: 50, unit: 'g' },
      { name: 'Sucre', amount: 50, unit: 'g' },
      { name: 'Vanille liquide', amount: 5, unit: 'g' }
    ]},
    { section: "Glaçage Noir Brillant (Optionnel sur l'insert ou décor)", items: [
      { name: 'Eau', amount: 50, unit: 'g' },
      { name: 'Sucre', amount: 90, unit: 'g' },
      { name: 'Cacao poudre', amount: 30, unit: 'g' },
      { name: 'Crème liquide', amount: 65, unit: 'g' },
      { name: 'Gélatine', amount: 4, unit: 'g' }
    ]}
  ];

  const steps = [
    {
      title: "J-1 : Insert Crémeux Chocolat",
      text: "Réaliser une crème anglaise : chauffer lait et crème. Blanchir jaunes et sucre. Cuire l'ensemble à la nappe (83°C). Verser sur le chocolat noir haché. Mixer pour lisser. Couler dans un cercle de 16cm filmé. Congeler."
    },
    {
      title: "Le Biscuit à la Cuillère",
      text: "Monter les blancs en neige ferme, serrer avec le sucre. Ajouter délicatement les jaunes battus, puis la farine tamisée en pluie à la maryse. Dresser sur plaque : 2 disques de 16cm et une bande (cartouchière) légèrement plus haute que le cercle (4.5cm) et assez longue pour le tour (pi x 20cm). Saupoudrer de sucre glace deux fois. Cuire à 180°C pendant 10-12 min. Laisser refroidir."
    },
    {
      title: "La Bavaroise Vanille",
      text: "Hydrater la gélatine. Réaliser une crème anglaise avec le lait, la vanille grattée, les jaunes et le sucre (cuisson 83°C). Ajouter la gélatine hors du feu. Chinoiser et laisser refroidir à 25/30°C (consistance nappante mais pas figée). Incorporer délicatement la crème montée mousseuse."
    },
    {
      title: "Montage",
      text: "Dans un cercle de 20cm posé sur carton or : placer la cartouchière de biscuit sur le pourtour intérieur (côté poudré contre le cercle). Placer un premier disque de biscuit au fond. Imbiber de sirop. Couler une partie de la bavaroise. Placer l'insert crémeux congelé. Recouvrir de bavaroise presque jusqu'en haut. Placer le second disque de biscuit (imbibé). Lisser à ras avec le reste de bavaroise si nécessaire ou laisser le biscuit apparent selon le style voulu. Réserver au froid positif (4h) ou négatif."
    },
    {
      title: "Finitions",
      text: "Si l'entremets a été congelé, le glacer ou le floquer velours (optionnel). Sinon, décorer simplement avec des fruits frais, des copeaux de chocolat, ou des motifs en glaçage noir cornet sur le dessus. Retirer le cercle délicatement."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings)).toFixed(0);

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
        
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl mb-12 group shadow-2xl">
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
                  <span className="text-sm font-bold w-fit text-center min-w-[80px]">{servings} Entremets</span>
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
                        <h4 className="text-3xl font-serif text-white">Les secrets de la réussite</h4>
                        <div className="grid gap-6">
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">La cartouchière parfaite</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">La cartouchière doit être coupée bien droite à la base pour tenir parfaitement verticale dans le cercle. Une bonne astuce est de la dresser légèrement plus haute que le cercle pour un visuel élégant.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">La légèreté de la bavaroise</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Ne montez pas trop votre crème fouettée : elle doit être "mousseuse" (texture bec d'oiseau souple) pour s'incorporer facilement à la bavaroise sans grainer. L'incorporation doit être douce et progressive.</p>
                           </div>
                           <div className="bg-[#252525]/50 p-6 rounded-xl border-l-4 border-[#D4AF37] backdrop-blur-sm">
                             <strong className="text-[#D4AF37] block mb-2 text-lg font-serif">Le rôle de l'insert</strong> 
                             <p className="text-gray-300 text-sm leading-relaxed">Si vous n'avez pas le temps de congeler l'insert, vous pouvez pocher le crémeux directement au centre, mais la coupe sera moins nette. La congélation assure un cœur bien défini à la découpe.</p>
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
                 "Cet entremets joue sur la douceur. La vanille doit être généreuse (n'hésitez pas à laisser infuser la gousse longtemps dans le lait). Le contraste de texture entre le biscuit moelleux extérieur et la bavaroise fondante est la signature de ce dessert type 'Charlotte'."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EntremetsBavaroisVanille;