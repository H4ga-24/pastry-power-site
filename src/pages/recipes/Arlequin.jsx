import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Clock, ChefHat, Scale } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Pour le Mode Cuisine & SEO) ---
export const recipeData = {
  title: "L'Arlequin",
  category: "PÂTISSERIE • ENTREMETS",
  prepTime: "5H + Congel",
  cookTime: "20 MIN",
  difficulty: "EXPERT",
  description: "Un entremets haut en couleur : l'alliance acidulée de la passion et de la framboise rencontre la douceur de la pistache dans un jeu de textures moelleuses et fondantes.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f31e1f663893ced8b953a4ddb60456e7.png",
  isVip: true // 💎 Recette VIP
};

export const ingredients = [
  // --- Financier Pistache ---
  { name: "Sucre glace", amount: 240, unit: "g", note: "Financier Pistache" },
  { name: "Poudre d'amande", amount: 90, unit: "g", note: "Financier Pistache" },
  { name: "Farine T55", amount: 90, unit: "g", note: "Financier Pistache" },
  { name: "Pâte de pistache pure", amount: 50, unit: "g", note: "Financier Pistache" },
  { name: "Blancs d'œufs", amount: 240, unit: "g", note: "Financier Pistache" },
  { name: "Beurre noisette", amount: 150, unit: "g", note: "Financier Pistache" },
  
  // --- Biscuit Joconde Pistache ---
  { name: "Oeufs entiers", amount: 250, unit: "g", note: "Biscuit Joconde" },
  { name: "Sucre glace", amount: 190, unit: "g", note: "Biscuit Joconde" },
  { name: "Poudre d'amande", amount: 150, unit: "g", note: "Biscuit Joconde" },
  { name: "Pâte de pistache", amount: 40, unit: "g", note: "Biscuit Joconde" },
  { name: "Farine T45", amount: 50, unit: "g", note: "Biscuit Joconde" },
  { name: "Beurre fondu", amount: 35, unit: "g", note: "Biscuit Joconde" },
  { name: "Blancs d'œufs", amount: 165, unit: "g", note: "Biscuit Joconde" },
  { name: "Sucre semoule", amount: 25, unit: "g", note: "Biscuit Joconde" },
  
  // --- Coulis Gélifiés (Inserts) ---
  { name: "Purée Passion", amount: 125, unit: "g", note: "Coulis Passion" },
  { name: "Purée Mangue", amount: 125, unit: "g", note: "Coulis Passion" },
  { name: "Purée Framboise", amount: 250, unit: "g", note: "Coulis Framboise" },
  { name: "Sucre (Total)", amount: 55, unit: "g", note: "Coulis (27g + 28g)" },
  { name: "Gélatine (Total)", amount: 10, unit: "g", note: "Coulis (5g + 5g)" },
  
  // --- Mousses Fruits ---
  { name: "Purée Passion", amount: 200, unit: "g", note: "Mousse Passion" },
  { name: "Purée Framboise", amount: 200, unit: "g", note: "Mousse Framboise" },
  { name: "Meringue Italienne (Total)", amount: 180, unit: "g", note: "Mousses (90g + 90g)" },
  { name: "Crème fouettée 35% (Total)", amount: 440, unit: "g", note: "Mousses (220g + 220g)" },
  { name: "Gélatine (Total)", amount: 12, unit: "g", note: "Mousses (6g + 6g)" }
];

export const steps = [
  { 
    title: "Le Financier Pistache (Base)", 
    text: "Réaliser un beurre noisette et le laisser tiédir (45°C). Dans un cul-de-poule, mélanger le sucre glace, la poudre d'amande, la farine et les blancs d'œufs non montés. Ajouter la pâte de pistache, puis le beurre noisette. Couler dans 5 cercles de 10cm de diamètre beurrés. Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir." 
  },
  { 
    title: "Le Biscuit Joconde Pistache (Tour)", 
    text: "Au batteur, monter les œufs entiers, le sucre glace, la poudre d'amande et la pâte de pistache jusqu'au ruban (10 min). Incorporer la farine tamisée puis le beurre fondu tiède. Monter les blancs en neige ferme avec le sucre semoule et les incorporer délicatement. Étaler sur plaque (40x60cm) sur 5mm d'épaisseur. Cuire à 230°C pendant 6 à 8 minutes. Détailler des bandes de 4,5cm de haut." 
  },
  { 
    title: "Les Inserts Coulis", 
    text: "Hydrater la gélatine. Chauffer 1/3 de la purée passion/mangue, y fondre 5g de gélatine essorée et 27g de sucre. Mélanger au reste de purée froide. Couler 5 disques de Ø10cm (1cm épaisseur). Surgeler. Répéter l'opération pour la framboise avec le reste des ingrédients." 
  },
  { 
    title: "Les Mousses de Fruits", 
    text: "Chauffer 1/3 de la purée passion, y fondre 6g de gélatine hydratée. Mélanger au reste de purée froide. Incorporer 90g de meringue italienne, puis 220g de crème fouettée mousseuse. Répéter l'opération à l'identique pour la mousse framboise. Utiliser immédiatement." 
  },
  { 
    title: "Le Montage", 
    text: "Chemiser 5 cercles de Ø12cm avec du Rhodoïd et une bande de Joconde. Placer un disque de Financier au fond. Pocher une couche de mousse Framboise. Déposer un insert Passion congelé. Pocher une couche de mousse Passion. Déposer un insert Framboise congelé. Lisser à ras avec le reste de mousse. Surgeler." 
  },
  { 
    title: "La Finition", 
    text: "Démouler les entremets congelés. Napper le dessus avec un nappage neutre ou un glaçage rouge/jaune. Décorer avec des framboises fraîches, des éclats de pistaches vertes et des pointes de feuille d'or." 
  }
];

// --- 2. LE VISUEL ---
const Arlequin = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10" />
        <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase block">{recipeData.category}</span>
               {recipeData.isVip && (
                  <span className="bg-[#D4AF37] text-black px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm tracking-wider">
                      Exclusif VIP
                  </span>
               )}
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">{recipeData.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
              <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
              <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.difficulty}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE : INGRÉDIENTS */}
          <div className="md:col-span-4 space-y-8">
             <div className="sticky top-24">
                <RecipeIngredients 
                    ingredients={ingredients} 
                    baseServings={5} 
                    unitLabel="entremets" 
                />
             </div>
          </div>

          {/* COLONNE DROITE : ÉTAPES */}
          <div className="md:col-span-8">
            <div className="space-y-12 mb-16">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl flex-shrink-0 group-hover:border-[#D4AF37] transition-colors">{i+1}</div>
                    <div>
                      <h3 className="text-white text-xl mb-3 font-serif">{step.title}</h3>
                      <p className="text-gray-400 font-light text-lg leading-relaxed">{step.text}</p>
                    </div>
                </div>
              ))}
            </div>

            {/* TABS */}
            <Tabs defaultValue="conseils" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils</TabsTrigger>
                <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Le Chef</TabsTrigger>
                <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Ustensiles</TabsTrigger>
              </TabsList>
              
              <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Astuces de montage</h4>
                      <ul className="space-y-3 text-gray-400 leading-relaxed text-sm">
                         <li>Assurez-vous que les inserts de coulis sont bien centrés et ne touchent pas le biscuit Joconde extérieur pour que la découpe soit nette et l'esthétique parfaite.</li>
                         <li>Imbibez légèrement le biscuit Joconde avec un sirop léger au Kirsch pour qu'il adhère mieux à la mousse et reste moelleux.</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">L'idée</h4>
                      <p className="text-gray-400 leading-relaxed italic">
                        "L'Arlequin est un jeu de couleurs et de saveurs. Ne lésinez pas sur la qualité de la pistache (Pure Sicile ou Iran) car c'est elle qui porte tout le dessert face à l'acidité des fruits."
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ustensiles" className="mt-0 focus-visible:outline-none">
                  <div className="flex items-start gap-4">
                    <Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h4 className="text-lg font-serif text-white">Matériel</h4>
                      <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercles inox Ø10cm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercles inox Ø12cm</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Rhodoïd (h 4.5cm)</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Robot pâtissier</li>
                      </ul>
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

export default Arlequin;