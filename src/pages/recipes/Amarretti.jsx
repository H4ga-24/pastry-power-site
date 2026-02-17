import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Quote, Utensils, Users, Clock, ChefHat, Scale } from 'lucide-react';
import RecipeIngredients from '../../components/RecipeIngredients';

// --- 1. LES DONNÉES (Pour le Mode Cuisine & SEO) ---
export const recipeData = {
  title: "L'Amarretti",
  category: "PÂTISSERIE • ENTREMETS",
  prepTime: "4H + Repos",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "Une création exclusive où la douceur du biscuit noisette rencontre l'acidité parfumée d'une compotée de griottes et l'onctuosité d'une mousse légère au lait d'amande.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3c901d5843ce9d7c979b087d04c101de.png",
  isVip: true // C'est un entremets complexe, mérite d'être VIP
};

export const ingredients = [
  // --- Biscuit Noisette ---
  { name: "Blancs d'oeufs", amount: 90, unit: "g", note: "Biscuit Noisette" },
  { name: "Sucre glace", amount: 50, unit: "g", note: "Biscuit Noisette" },
  { name: "Poudre de noisettes", amount: 50, unit: "g", note: "Biscuit Noisette" },
  { name: "Farine T45", amount: 20, unit: "g", note: "Biscuit Noisette" },
  { name: "Beurre noisette", amount: 20, unit: "g", note: "Biscuit Noisette" },
  
  // --- Compotée Griottes ---
  { name: "Griottes (surgelées ou fraîches)", amount: 200, unit: "g", note: "Insert Griotte" },
  { name: "Sucre semoule", amount: 30, unit: "g", note: "Insert Griotte" },
  { name: "Pectine NH", amount: 3, unit: "g", note: "Insert Griotte" },
  { name: "Jus de citron", amount: 5, unit: "g", note: "Insert Griotte" },
  
  // --- Crème Lait d'Amande ---
  { name: "Lait d'amande", amount: 250, unit: "g", note: "Mousse Amande" },
  { name: "Sucre semoule", amount: 40, unit: "g", note: "Mousse Amande" },
  { name: "Jaunes d'oeufs", amount: 40, unit: "g", note: "Mousse Amande" },
  { name: "Gélatine (feuilles 200 Bloom)", amount: 4, unit: "g", note: "Mousse Amande" },
  { name: "Crème liquide 35%", amount: 200, unit: "g", note: "Mousse Amande" },
  { name: "Amaretto", amount: 10, unit: "g", note: "Mousse Amande (facultatif)" },
  
  // --- Glaçage Miroir ---
  { name: "Eau", amount: 75, unit: "g", note: "Glaçage" },
  { name: "Sucre semoule", amount: 150, unit: "g", note: "Glaçage" },
  { name: "Glucose", amount: 150, unit: "g", note: "Glaçage" },
  { name: "Lait concentré sucré", amount: 100, unit: "g", note: "Glaçage" },
  { name: "Gélatine (feuilles 200 Bloom)", amount: 10, unit: "g", note: "Glaçage" },
  { name: "Chocolat blanc", amount: 150, unit: "g", note: "Glaçage" }
];

export const steps = [
  { 
    title: "Le Biscuit Noisette", 
    text: "Réaliser un beurre noisette et le laisser tiédir. Monter les blancs en neige ferme en serrant avec le sucre glace. Incorporer délicatement la poudre de noisettes et la farine tamisées à la maryse. Terminer par le beurre noisette tiède. Etaler sur 1cm d'épaisseur et cuire à 170°C pendant 12 à 15 minutes. Détailler un disque de Ø16cm." 
  },
  { 
    title: "L'Insert Griotte", 
    text: "Dans une casserole, chauffer les griottes avec une partie du sucre et le jus de citron. À 40°C, ajouter le mélange sucre restant + Pectine NH en pluie. Porter à ébullition pendant 1 minute tout en remuant. Couler dans un cercle de Ø14cm filmé et congeler à cœur (minimum 2h)." 
  },
  { 
    title: "La Crème Légère Amande", 
    text: "Hydrater la gélatine. Réaliser une crème anglaise : chauffer le lait d'amande, verser sur le mélange jaunes + sucre, et cuire à la nappe (83°C). Ajouter la gélatine essorée (et l'Amaretto) hors du feu. Refroidir à 25°C - 30°C. Monter la crème liquide en chantilly mousseuse (pas trop ferme) et l'incorporer délicatement à la crème anglaise tiède." 
  },
  { 
    title: "Le Glaçage Miroir Rouge", 
    text: "Hydrater la gélatine. Cuire l'eau, le sucre et le glucose à 103°C. Verser sur le lait concentré, la gélatine essorée et le chocolat blanc (et le colorant rouge). Mixer au mixeur plongeant sans incorporer d'air. Filmer au contact et laisser reposer 24h au frais pour une brillance optimale. Utilisation à 30°C - 32°C." 
  },
  { 
    title: "Le Montage (A l'envers)", 
    text: "Dans un cercle de Ø18cm filmé : Pocher une couche de mousse amande au fond et sur les bords. Déposer l'insert griotte congelé au centre. Recouvrir d'un peu de mousse. Fermer avec le disque de biscuit noisette. Lisser à ras. Surgeler une nuit." 
  },
  { 
    title: "La Finition", 
    text: "Réchauffer le glaçage à 30°C - 32°C. Démouler l'entremets congelé, le placer sur une grille et glacer immédiatement. Décorer la base avec des amandes effilées torréfiées ou des brisures de biscuit." 
  }
];

// --- 2. LE VISUEL ---
const Amarretti = () => {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-white">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10" />
        <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block">{recipeData.category}</span>
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">{recipeData.title}</h1>
            <div className="flex flex-wrap gap-8 text-sm tracking-widest font-medium text-white/90">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.prepTime}</span></div>
              <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.cookTime}</span></div>
              <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{recipeData.difficulty}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE : INGRÉDIENTS */}
          <div className="md:col-span-4 space-y-8">
             <div className="sticky top-24">
                <RecipeIngredients 
                    ingredients={ingredients} 
                    baseServings={1} 
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
                <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Conseils</TabsTrigger>
                <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Le Chef</TabsTrigger>
                <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold">Matériel</TabsTrigger>
              </TabsList>
              <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                <TabsContent value="conseils" className="mt-0">
                    <div className="flex items-start gap-4">
                        <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <div className="space-y-4">
                            <h4 className="text-lg font-serif text-white">Astuces Miroir</h4>
                            <p className="text-gray-400 leading-relaxed">Le glaçage doit être utilisé entre 30 et 32°C sur un entremets sorti directement du congélateur. S'il est trop chaud, il coule trop vite (transparence). S'il est trop froid, il fige en faisant des vagues.</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="chef" className="mt-0">
                    <div className="flex items-start gap-4">
                        <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <div className="space-y-4">
                            <h4 className="text-lg font-serif text-white">L'équilibre</h4>
                            <p className="text-gray-400 leading-relaxed italic">"L'Amarretti joue sur le contraste entre la rondeur sucrée de l'amande et le pep's acidulé de la griotte. C'est un dessert qui demande de la précision sur le sucre."</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="ustensiles" className="mt-0">
                    <div className="flex items-start gap-4">
                        <Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <div className="space-y-4">
                            <h4 className="text-lg font-serif text-white">Matériel Requis</h4>
                            <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercle Ø18cm (h 4.5cm)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Cercle Ø14cm (Insert)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Mixeur plongeant</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>Thermomètre sonde</li>
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

export default Amarretti;