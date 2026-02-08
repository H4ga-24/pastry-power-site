import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonPralinePistache = () => {
  const recipeData = {
    title: "Bonbon Praliné Pistache & Pâte d'Amande",
    category: "CHOCOLATERIE",
    prepTime: "24H (Repos) + 2H",
    cookTime: "30 MIN",
    difficulty: "AVANCÉ",
    yield: "80 pièces",
    weight: "~1.2 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6602fa78c747e52c6aa45139ecfde50b.png",
    description: "Une création bicolore sophistiquée. L'alliance d'une pâte d'amande pistache fondante maison et d'un praliné pistache croustillant, enrobés de chocolat noir pour un contraste visuel et gustatif saisissant."
  };

  const ingredients = [
    {
      title: "1. Masse Pâte d'Amande Pistache",
      items: [
        { name: "Pâte d'amande 50%", qty: 450, unit: "g" },
        { name: "Pâte de pistache pure", qty: 80, unit: "g" },
        { name: "Kirsch (facultatif)", qty: 20, unit: "g" },
        { name: "Sucre glace (si nécessaire)", qty: 20, unit: "g" }
      ]
    },
    {
      title: "2. Sirop de Collage",
      items: [
        { name: "Sucre semoule", qty: 50, unit: "g" },
        { name: "Eau", qty: 50, unit: "g" }
      ]
    },
    {
      title: "3. Masse Praliné Pistache",
      items: [
        { name: "Praliné Pistache 42%", qty: 400, unit: "g" },
        { name: "Couverture Ivoire 35%", qty: 100, unit: "g" },
        { name: "Beurre de cacao", qty: 20, unit: "g" },
        { name: "Éclats de pistaches torréfiées", qty: 50, unit: "g" }
      ]
    },
    {
      title: "4. Chablonnage",
      items: [
        { name: "Couverture Noire 64% (Mise au point)", qty: 100, unit: "g" }
      ]
    },
    {
      title: "5. Décors Relief",
      items: [
        { name: "Couverture Ivoire (Mise au point)", qty: 150, unit: "g" }
      ]
    },
    {
      title: "6. Enrobage",
      items: [
        { name: "Couverture Noire 64% (Enrobage)", qty: 800, unit: "g" },
        { name: "Pistaches entières émondées (Décor)", qty: 80, unit: "pce" }
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
                      <p className="text-gray-400 text-xs">Montage en cadre bi-couche. Nécessite une coupe franche au couteau. Conservation: 3 semaines à 16°C.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={80}
             yieldUnit="pièces"
             step={10}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">La Pâte d'Amande Pistache (J-1)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans la cuve du batteur muni de la feuille, ramollir la pâte d'amande. Ajouter progressivement la pâte de pistache et le Kirsch.
                       Mélanger jusqu'à obtenir une masse homogène et lisse. Si la masse est trop collante, ajouter un peu de sucre glace.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Étaler cette masse dans un cadre de 34x34 cm sur une épaisseur de 5mm environ. Lisser parfaitement la surface. Laisser croûter légèrement à l'air libre pendant 24h.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Collage et le Praliné</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Réaliser un sirop de collage en portant à ébullition l'eau et le sucre. Laisser refroidir.
                       Au pinceau, imbiber très légèrement la surface de la pâte d'amande pistache avec le sirop froid.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Fondre la couverture ivoire et le beurre de cacao à 40°C. Mélanger avec le praliné pistache tempéré à 26°C. Ajouter les éclats de pistaches.
                       Couler cette masse pralinée sur la pâte d'amande dans le cadre. Lisser immédiatement à la règle.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Finition Intérieur et Découpe</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Laisser cristalliser le tout 24h à 16°C (température cave à chocolat).
                       Le lendemain, chablonner la face praliné avec une fine couche de couverture noire tempérée.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Retourner le cadre, décadrer. Détailler au couteau ou à la guitare des rectangles de 1.5 cm x 3.5 cm ou des carrés selon le design souhaité.
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation au Trempage/Relief (Optionnel)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Pour un effet texturé comme sur la photo : avant enrobage, pocher des petits boudins ou traits de chocolat ivoire tempéré sur le dessus de chaque bonbon (côté pâte d'amande).
                       Laisser cristalliser. Cela créera le relief sous l'enrobage final.
                    </p>
                 </div>

                 {/* Étape V */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">V</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Tempérer la couverture noire.
                       Enrober chaque bonbon. Déposer sur feuille guitare.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déposer immédiatement une belle pistache verte émondée sur le dessus avant la cristallisation complète.
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
                       <strong className="text-white block mb-2">Maturation de la Pâte d'Amande :</strong> Ne négligez pas le temps de repos de la pâte d'amande étalée. Elle doit "croûter" pour ne pas s'écraser à la découpe et pour éviter que l'humidité ne migre vers le praliné.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Le Sirop de Collage :</strong> Il doit être appliqué en couche très fine, presque invisible. Trop de sirop fera glisser les couches l'une sur l'autre lors de la dégustation. Pas assez, et le bonbon se dédoublera.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Qualité des Pistaches :</strong> Utilisez des pistaches de Sicile ou d'Iran pour leur couleur vert émeraude intense et leur goût puissant. Émondez-les vous-même pour garantir leur fraîcheur et leur couleur.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Effet Relief :</strong> L'astuce des traits de chocolat blanc sous l'enrobage noir donne un aspect très professionnel et moderne, rappelant les nervures d'une coque. Assurez-vous que le relief est bien dur avant d'enrober.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "La pistache est un ingrédient noble qui mérite d'être mis en valeur. Ici, on joue sur deux textures : le moelleux de la pâte d'amande parfumée et le croquant gras du praliné."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonPralinePistache;