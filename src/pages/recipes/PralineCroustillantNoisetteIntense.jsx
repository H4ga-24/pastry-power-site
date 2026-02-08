import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const PralineCroustillantNoisetteIntense = () => {
  const recipeData = {
    title: "Praliné Croustillant Noisette Intense",
    category: "CHOCOLATERIE",
    prepTime: "1H + 24H (Cristallisation)",
    cookTime: "15 MIN (Torréfaction)",
    difficulty: "AVANCÉ",
    yield: "160 bonbons",
    weight: "~1.8 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/b5d042ecdd3b83e40ed2c330fce9affc.jpg",
    description: "Un bonbon texturé à la puissance aromatique intense. Un praliné noisette croustillant enrichi de Royaltine, surmonté d'une noisette entière torréfiée pour un relief gourmand sous une fine couche de chocolat lait."
  };

  const ingredients = [
    {
      title: "1. Masse Praliné Croustillant",
      items: [
        { name: "Praliné Noisette 60% (Fruits)", qty: 1000, unit: "g" },
        { name: "Couverture Lait 40%", qty: 300, unit: "g" },
        { name: "Beurre de cacao", qty: 50, unit: "g" },
        { name: "Pailleté Feuilletine (Royaltine)", qty: 350, unit: "g" }
      ]
    },
    {
      title: "2. Chablonnage / Socle",
      items: [
        { name: "Couverture Lait (mise au point)", qty: 100, unit: "g" }
      ]
    },
    {
      title: "3. Décors / Relief",
      items: [
        { name: "Noisettes entières torréfiées", qty: 160, unit: "pce" },
        { name: "Chocolat tempéré (collage)", qty: 50, unit: "g" }
      ]
    },
    {
      title: "4. Enrobage",
      items: [
        { name: "Couverture Lait 40%", qty: 1500, unit: "g" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/chocolaterie">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Chocolaterie
          </Button>
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-sm overflow-hidden h-[400px] border border-white/10 relative group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
             <img src={recipeData.image} alt={recipeData.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="flex flex-col justify-center">
             <span className="text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">{recipeData.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{recipeData.title}</h1>
             <p className="text-gray-400 mb-8 text-lg font-light">{recipeData.description}</p>
             <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Prep: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
             
             <div className="mt-8 p-4 bg-[#1a1a1a] border-l-2 border-[#D4AF37] rounded-r-sm">
                <div className="flex items-start gap-3">
                   <Info className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                   <div>
                      <h4 className="font-bold text-white text-sm mb-1">Info Technique</h4>
                      <p className="text-gray-400 text-xs">Utiliser un cadre de 10mm d'épaisseur. La masse doit cristalliser 24h avant découpe pour une texture parfaite.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={160}
             yieldUnit="bonbons"
             step={20}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Masse Praliné (J-1)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Fondre la couverture lait et le beurre de cacao à 45°C. Laisser redescendre vers 35°C.
                       Mélanger délicatement au praliné noisette (température ambiante).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Vérifier la température du mélange (max 30°C-32°C).
                       Incorporer la Pailleté Feuilletine (Royaltine) délicatement à la maryse pour ne pas l'écraser.
                       Couler immédiatement dans un cadre de 34x34cm (hauteur 10mm) posé sur une feuille guitare.
                       Lisser et laisser cristalliser 24h à 16°C (pièce fraîche ou cave à chocolat).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Chablonnage et Découpe</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Le lendemain, retirer le cadre.
                       Étaler une très fine couche de couverture lait tempérée (mise au point) sur la surface (chablonnage).
                       Dès que le chocolat commence à figer (satiné), retourner la plaque sur une feuille de papier cuisson.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Détailler à la guitare ou au couteau en carrés (ex: 2.5 x 2.5 cm) ou à l'emporte-pièce hexagonal pour une forme plus moderne.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Pose des Noisettes (Relief)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       À l'aide d'un cornet ou d'une poche avec une petite douille unie, déposer une goutte de couverture tempérée au centre de chaque bonbon détaillé.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Poser immédiatement une noisette entière torréfiée sur le point de chocolat.
                       Appuyer très légèrement pour fixer. Laisser figer complètement le collage (quelques minutes au frais si nécessaire).
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture lait (Fondre 45°C {"->"} Refroidir 27°C {"->"} Réchauffer 29-30°C).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tremper les bonbons un par un. Tapoter légèrement la fourchette pour retirer l'excédent, en veillant à bien napper le relief de la noisette.
                       Déposer délicatement sur feuille guitare. Laisser cristalliser.
                    </p>
                 </div>
              </div>

              {/* Conseils du Chef */}
              <div className="mt-16 p-8 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                 <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                    <ChefHat className="w-6 h-6 text-[#D4AF37]" /> Astuces et Conseils du Chef
                 </h3>
                 <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
                    <p>
                       <strong className="text-white block mb-2">Incorporation Royaltine :</strong> Le geste doit être souple. Ne battez jamais au fouet ! Utilisez une maryse et soulevez la masse. Si vous brisez les paillettes, vous perdez le volume et le croustillant sera dense et dur au lieu d'être aérien.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Tablage de la Masse :</strong> Si votre mélange praliné/chocolat est trop chaud ({">"}32°C) quand vous ajoutez la feuilletine, elle va ramollir. Assurez-vous d'être proche de 28-30°C pour garder le croustillant intact.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Chablonnage Fin :</strong> Le socle (chablon) sert à manipuler le bonbon sans se salir les doigts lors de l'enrobage et facilite la glisse sur la fourchette. Il doit être invisible à la dégustation : raclez bien à la spatule pour avoir l'épaisseur d'une feuille de papier.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Relief Noisette :</strong> Choisissez des noisettes de petit calibre ("Romaines" ou "Piemont" calibre 13/15) pour ne pas déséquilibrer la taille de la bouchée. Le relief crée une difficulté à l'enrobage : le chocolat a tendance à couler du sommet. L'enrobage doit être assez visqueux (bon point de température basse).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Mise au point Lait :</strong> Le chocolat au lait est plus sensible. Travaillez-le à 29.5°C exactement. À 30.5°C il peut être trop liquide et ne pas couvrir assez ; à 28°C il épaissit trop vite.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Technique "Glissé-Déposé" :</strong> Lors de la dépose du bonbon enrobé, glissez la fourchette sur le papier sur 1 cm avant de la retirer. Cela "coupe" la queue du chocolat et évite la formation d'un "pied" disgracieux autour du bonbon.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default PralineCroustillantNoisetteIntense;