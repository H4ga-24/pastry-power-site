import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Minus, Plus, ArrowLeft, Lightbulb, Quote, Scale, UtensilsCrossed, Printer, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

// On sort les données pour aider le scanner
export const recipeData = {
  category: "PÂTISSERIE • ENTREMETS",
  title: "Le Désir Kalamansi",
  yield: "1 cadre de 37 x 28,5 cm (environ 12 à 15 parts)",
  type: "Entremets Prestige",
  prepTime: "2H 45",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "Une explosion de fraîcheur exotique. L'acidité vibrante du Kalamansi rencontre la douceur d'une mousse au chocolat au lait, le tout reposant sur un biscuit 'Safari' intense. Une finition velours chocolat pour une élégance parfaite.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6b04d01df81eaf60028ec8382d3aa4d2.png",
};

const LeDesirKalamansi = () => {
  const [servings, setServings] = useState(1);
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

  const ingredients = [
    { section: "Biscuit Safari Chocolat", items: [
      { name: 'Oeufs entiers', amount: 375, unit: 'g' },
      { name: 'Sucre semoule', amount: 160, unit: 'g' },
      { name: 'Chocolat noir 50%', amount: 125, unit: 'g' },
      { name: 'Beurre doux', amount: 125, unit: 'g' },
      { name: 'Farine T55', amount: 80, unit: 'g' }
    ]},
    { section: "Mousse Chocolat Kalamansi", items: [
      { name: 'Purée de Kalamansi', amount: 250, unit: 'g' },
      { name: 'Sucre inverti (Trimoline)', amount: 40, unit: 'g' },
      { name: 'Gélatine (feuilles)', amount: 12, unit: 'g' },
      { name: 'Chocolat couverture lactée 40%', amount: 380, unit: 'g' },
      { name: 'Crème fouettée 35%', amount: 550, unit: 'g' }
    ]},
    { section: "Appareil Velours (Finition)", items: [
      { name: 'Chocolat noir couverture', amount: 350, unit: 'g' },
      { name: 'Beurre de cacao', amount: 150, unit: 'g' },
      { name: 'Colorant brun (facultatif)', amount: 2, unit: 'g' }
    ]},
    { section: "Montage et Finition", items: [
      { name: 'Zestes de citron vert (décor)', amount: 1, unit: 'pc' },
      { name: 'Feuille d\'or', amount: 1, unit: 'feuille' }
    ]}
  ];

  const steps = [
    {
      title: "1. Biscuit Safari Chocolat",
      text: "Monter les œufs entiers avec le sucre semoule au ruban (le mélange doit tripler de volume et blanchir). Faire fondre le chocolat et le beurre ensemble à 45°C. Prélever une petite partie des œufs montés et les mélanger vigoureusement au mélange chocolat/beurre pour l'alléger. Reverser le tout dans la masse principale d'œufs et mélanger délicatement à la maryse. Incorporer la farine tamisée en pluie fine. Étaler sur une plaque recouverte de papier cuisson (pour un cadre de 37x28,5 cm). Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir sur grille."
    },
    {
      title: "2. Mousse Chocolat Kalamansi",
      text: "Réhydrater la gélatine dans de l'eau froide. Dans une casserole, chauffer une partie de la purée de Kalamansi (environ 1/3) avec le sucre inverti jusqu'à 50°C. Hors du feu, ajouter la gélatine essorée. Verser ce mélange sur la purée froide restante pour tempérer l'ensemble. Fondre le chocolat au lait à 45°C. Verser progressivement la purée de fruit sur le chocolat en réalisant une émulsion à la maryse (comme une ganache). Mixer pour parfaire l'émulsion si besoin. Lorsque le mélange est à 30/35°C, incorporer délicatement la crème fouettée mousseuse."
    },
    {
      title: "3. Appareil Velours (Finition)",
      text: "Fondre le chocolat de couverture et le beurre de cacao séparément à 50°C. Les mélanger ensemble. Ajouter le colorant si nécessaire et mixer pour bien homogénéiser. Filtrer au chinois étamine. Utiliser à une température comprise entre 40°C et 45°C dans un pistolet à peinture alimentaire."
    },
    {
      title: "4. Montage et Finition",
      text: "Chemiser le cadre inox de rhodoïd. Déposer le biscuit Safari au fond. Couler la mousse chocolat Kalamansi par-dessus jusqu'à hauteur du cadre. Lisser soigneusement à la grande spatule ou à la règle. Surgeler à cœur (minimum 6 heures ou une nuit). Démouler l'entremets congelé. Pulvériser immédiatement l'appareil velours sur toute la surface pour créer l'effet texturé. Décorer avec quelques zestes de citron vert frais et une touche de feuille d'or pour le contraste."
    }
  ];

  const calculateAmount = (baseAmount) => ((baseAmount * servings)).toFixed(0);

  return (
    // AJOUT: print:text-black pour s'assurer que le texte est lisible
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20 print:bg-white print:text-black print:pt-0">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER : On cache à l'impression */}
        <div className="flex justify-between items-center mb-8 print:hidden">
            <Link to="/patisserie/gateaux/entremets">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-white pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour aux Entremets</Button>
            </Link>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrint} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Printer className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" onClick={handleAddToFavorites} className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"><Star className="w-4 h-4" /></Button>
            </div>
        </div>
        
        {/* IMAGE : On réduit la hauteur à l'impression (print:h-64) */}
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl mb-12 group shadow-2xl print:h-64 print:mb-6 print:shadow-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent z-10 print:hidden"></div>
          <motion.img 
            src={recipeData.image} 
            alt={recipeData.title} 
            className="w-full h-full object-cover transform transition-transform duration-700" 
          />
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-16 print:p-4 print:static">
            
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 font-bold tracking-tight drop-shadow-lg print:text-black print:text-4xl print:mb-2 print:drop-shadow-none">
              {recipeData.title}
            </h1>
            
            <p className="text-gray-200 max-w-2xl mb-8 leading-relaxed text-lg font-light drop-shadow-md print:text-black print:text-sm print:mb-4 print:drop-shadow-none">
              {recipeData.description}
            </p>
            
            {/* INFOS : On force la couleur noire et on enlève le fond */}
            <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90 bg-black/30 backdrop-blur-md p-6 rounded-xl w-fit border border-white/10 print:bg-transparent print:text-black print:border-black/20 print:p-2 print:gap-4">
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#D4AF37] print:text-black" /> {recipeData.prepTime}</div>
              <div className="flex items-center gap-2"><ChefHat className="w-5 h-5 text-[#D4AF37] print:text-black" /> {recipeData.difficulty}</div>
              <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-[#D4AF37] print:text-black" /> {recipeData.yield}</div>
            </div>
          </div>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 print:block">
          
          {/* COLONNE INGRÉDIENTS */}
          {/* TRÈS IMPORTANT : print:max-h-none print:overflow-visible pour tout afficher */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 border border-white/5 rounded-2xl h-fit sticky top-24 shadow-2xl print:bg-white print:border-black print:static print:shadow-none print:mb-8 print:p-0">
             <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 print:border-black/20">
                <h3 className="font-serif text-2xl text-white print:text-black">Ingrédients</h3>
                <div className="flex items-center gap-3 bg-[#252525] px-4 py-2 rounded-full border border-white/5 shadow-inner print:bg-transparent print:border-none print:shadow-none">
                  <span className="text-sm font-bold w-fit text-center min-w-[80px] print:text-black">Pour {servings} Cadre(s)</span>
                </div>
             </div>

             <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar print:max-h-none print:overflow-visible">
               {ingredients.map((section, idx) => (
                 <div key={idx} className="print:break-inside-avoid">
                   <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2 sticky top-0 bg-[#1a1a1a] py-2 z-10 print:bg-white print:text-black print:static print:border-b print:border-black">
                     <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 print:bg-black"></span>
                     {section.section}
                   </h4>
                   <ul className="space-y-3 text-sm text-gray-400 print:text-black">
                     {section.items.map((ing, i) => (
                       <li key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 px-3 py-2 rounded print:border-black/10 print:px-0">
                         <span className="leading-relaxed font-medium text-gray-300 print:text-black">{ing.name}</span>
                         <span className="text-[#D4AF37] font-bold whitespace-nowrap ml-4 bg-[#252525] px-2 py-1 rounded text-xs border border-[#D4AF37]/20 print:bg-transparent print:text-black print:border-black/20">{calculateAmount(ing.amount)} {ing.unit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>

          {/* COLONNE PROGRESSION */}
          <div className="space-y-12 print:space-y-6">
            <h2 className="text-4xl font-serif text-white mb-8 flex items-center gap-4 print:text-black print:text-2xl print:mb-4">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#8a6e1f] text-black w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg shadow-[#D4AF37]/20 print:hidden">P</span>
              <span className="print:hidden">Progression</span>
              <span className="hidden print:block font-bold border-b border-black pb-2 w-full">Progression de la recette</span>
            </h2>
            
            <Tabs defaultValue="steps" className="w-full">
              {/* On cache la navigation des onglets */}
              <TabsList className="grid w-full grid-cols-2 bg-[#1a1a1a] p-1.5 h-auto rounded-xl border border-white/5 mb-10 shadow-lg print:hidden">
                <TabsTrigger value="steps">Étapes</TabsTrigger>
                <TabsTrigger value="tips">Astuces</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-6 print:block">
                {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 group relative overflow-hidden print:bg-white print:border-black print:p-4 print:mb-4 print:break-inside-avoid"
                    >
                      <div className="flex gap-6 relative z-10">
                        <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#252525] text-[#D4AF37] font-serif font-bold text-xl border border-[#D4AF37]/20 print:bg-black print:text-white print:w-8 print:h-8 print:text-sm print:border-none">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl text-white font-serif mb-4 print:text-black print:text-lg print:mb-2 print:font-bold">{step.title}</h3>
                          <p className="text-gray-300 leading-relaxed text-base font-light print:text-black">{step.text}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </TabsContent>

              <TabsContent value="tips" className="print:hidden">
                 {/* Astuces cachées à l'impression */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeDesirKalamansi;