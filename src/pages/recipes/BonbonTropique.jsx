import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonTropique = () => {
  const recipeData = {
    title: "Bonbon Tropique (Fraise & Pamplemousse)",
    category: "CHOCOLATERIE",
    prepTime: "2H 30",
    cookTime: "40 MIN",
    difficulty: "EXPERT",
    yield: "720 pièces (Cadre 34x34 cm)",
    weight: "~7 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/984357cb94617ab514d713ee79520a0b.png",
    description: "Une fraîcheur intense. L'acidité vibrante du pamplemousse et la douceur de la fraise se déclinent en deux textures : une pâte de fruit fondante et une ganache soyeuse, le tout sous une coque croquante."
  };

  const ingredients = [
    {
      title: "1. Pâte de Fruit Fraise Pamplemousse",
      items: [
        { name: "Pulpe de fraise", qty: 400, unit: "g" },
        { name: "Pulpe de pamplemousse rose", qty: 400, unit: "g" },
        { name: "Sucre semoule (1)", qty: 100, unit: "g" },
        { name: "Pectine jaune", qty: 22, unit: "g" },
        { name: "Sucre semoule (2)", qty: 900, unit: "g" },
        { name: "Sirop de glucose DE60", qty: 250, unit: "g" },
        { name: "Solution acide (acide tartrique 50%)", qty: 22, unit: "g" }
      ]
    },
    {
      title: "2. Ganache Fraise Pamplemousse",
      items: [
        { name: "Pulpe de fraise", qty: 350, unit: "g" },
        { name: "Pulpe de pamplemousse", qty: 150, unit: "g" },
        { name: "Sucre inverti (Trimoline)", qty: 80, unit: "g" },
        { name: "Sorbitol poudre", qty: 60, unit: "g" },
        { name: "Couverture Blanche (Ivoire 35%)", qty: 950, unit: "g" },
        { name: "Beurre de cacao", qty: 60, unit: "g" },
        { name: "Beurre doux", qty: 100, unit: "g" }
      ]
    },
    {
      title: "3. Enrobage",
      items: [
        { name: "Couverture Blanche ou Blonde (Dulcey)", qty: 2500, unit: "g" },
        { name: "Beurre de cacao coloré (décor)", qty: "QS", unit: "" }
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
                      <p className="text-gray-400 text-xs">Bi-couche. Hauteur PDF : 4mm. Hauteur Ganache : 6mm. Utilisation d'un cadre superposable recommandée.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={720}
             yieldUnit="pièces"
             step={50}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Pâte de Fruit Fraise Pamplemousse</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chauffer les pulpes de fruits à 40°C. Ajouter le mélange sucre(1) + pectine en pluie fine tout en fouettant. Porter à ébullition.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Ajouter le sucre(2) en plusieurs fois, puis le glucose. Cuire le tout à 107°C (ou 75° Brix au réfractomètre). Hors du feu, ajouter la solution acide pour déclencher la gélification.
                       Couler immédiatement dans un cadre (hauteur 4mm) sur une feuille silpat ou guitare. Laisser prendre (environ 1h).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Ganache Fraise Pamplemousse</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, chauffer les pulpes, le sucre inverti et le sorbitol à 40°C (ne pas faire bouillir pour préserver le goût frais du fruit).
                       Faire fondre partiellement la couverture blanche et le beurre de cacao (à environ 40°C).
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Verser le liquide sur le chocolat en réalisant une émulsion à la maryse. Parfaire l'émulsion au mixeur plongeant. À 35°C, ajouter le beurre doux coupé en dés. Mixer à nouveau.
                       Couler la ganache (à 30°C) directement sur la pâte de fruit froide dans le cadre (hauteur totale 10mm). Laisser cristalliser 24h à 16-18°C.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Détaillage et Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Chablonner le côté ganache avec une fine couche de couverture blanche tempérée. Retourner le cadre. Décadrer.
                       Détailler à la guitare ou au couteau des carrés ou rectangles. Séparer les intérieurs.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Tempérer la couverture d'enrobage (Blanche ou Blonde). Enrober les bonbons. Avant cristallisation, marquer d'un trait de couleur rouge ou rose (au beurre de cacao) ou poser un décor pour rappeler le fruit.
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
                       <strong className="text-white block mb-2">Maîtrise de l'AW (Activité de l'eau) :</strong> C'est crucial pour un bonbon aux fruits. La pâte de fruit a une AW basse (grâce à la cuisson sucre), la ganache a une AW plus haute. Chablonez bien le fond et assurez-vous que l'enrobage est hermétique pour éviter le dessèchement ou la fermentation.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">L'Acidité :</strong> Ne négligez pas l'acide tartrique dans la pâte de fruit. C'est lui qui active la pectine mais surtout qui "réveille" le goût du fruit qui a été "éteint" par la grande quantité de sucre.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de coulages :</strong> Ne coulez jamais une ganache chaude (plus de 32°C) sur une pâte de fruit. Cela ferait fondre la surface de la pâte de fruit et créerait une couche de séparation glissante ("savonneuse") qui ferait que votre bonbon se dédoublerait à la découpe.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Finition :</strong> Pour une finition impeccable comme sur la photo (demi-sphère), il faut utiliser la technique du moulage et non du cadrage/enrobage : mouler les coques, pocher la pâte de fruit fluide, laisser croûter, pocher la ganache, laisser cristalliser, puis obturer.
                    </p>
                 </div>
              </div>

              {/* Mot du Chef */}
              <div className="mt-8 text-center px-12 py-10 border-t border-b border-white/5">
                 <p className="font-serif text-xl italic text-gray-300">
                    "Un bonbon qui explose en bouche. La vivacité du pamplemousse attaque les papilles, immédiatement adoucie par la rondeur lactée de la ganache ivoire. C'est un jeu de contrastes fascinant."
                 </p>
                 <p className="mt-4 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">Le Chef Chocolatier</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonTropique;