import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const OrangesConfitesOrangettes = () => {
  const recipeData = {
    title: "Oranges Confites & Orangettes",
    category: "CHOCOLATERIE",
    prepTime: "8 Jours + 24H (Séchage)",
    cookTime: "30 MIN / Jour",
    difficulty: "EXPERT",
    yield: "2 kg (écorces)",
    weight: "~3.5 kg fini",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7e694ad1cc3c3fc50e9cfc869a0609db.png",
    description: "L'art du confisage traditionnel. Des écorces d'oranges gorgées de sirop pendant 8 jours pour une texture tendre et translucide, enrobées d'une fine couche de chocolat noir croquant."
  };

  const ingredients = [
    {
      title: "1. Préparation & Blanchiment",
      items: [
        { name: "Écorces d'oranges (quartiers)", qty: 2000, unit: "g" },
        { name: "Eau de blanchiment", qty: 5, unit: "L" },
        { name: "Sel fin (pour le dernier bain)", qty: 10, unit: "g" }
      ]
    },
    {
      title: "2. Le Sirop de Confisage (Sur 8 jours)",
      items: [
        { name: "Eau (Départ)", qty: 2000, unit: "g" },
        { name: "Sucre Semoule (Départ + Ajouts)", qty: 2500, unit: "g" },
        { name: "Glucose Cristal (Fin de process)", qty: 400, unit: "g" }
      ]
    },
    {
      title: "3. Finition Orangettes",
      items: [
        { name: "Couverture Noire 65-70%", qty: 1500, unit: "g" },
        { name: "Poudre d'amande torréfiée (Opt.)", qty: 300, unit: "g" }
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
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /> <span>Process: {recipeData.prepTime}</span></div>
                <div className="flex items-center gap-3"><UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> <span>Cuisson: {recipeData.cookTime}</span></div>
                <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.difficulty}</span></div>
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /> <span>{recipeData.yield}</span></div>
             </div>
             
             <div className="mt-8 p-4 bg-[#1a1a1a] border-l-2 border-[#D4AF37] rounded-r-sm">
                <div className="flex items-start gap-3">
                   <Info className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                   <div>
                      <h4 className="font-bold text-white text-sm mb-1">Info Technique</h4>
                      <p className="text-gray-400 text-xs">Le confisage nécessite un densimètre ou un réfractomètre pour mesurer le sirop. Ne jamais faire bouillir le sirop avec les fruits dedans.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={2000}
             yieldUnit="g écorces"
             step={500}
           />

           {/* Étapes */}
           <div className="space-y-12">
              <h3 className="font-serif text-3xl text-white border-b border-[#D4AF37]/30 pb-4">Étapes de Réalisation</h3>
              
              <div className="space-y-10">
                 {/* Étape I */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">I</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation et Blanchiment (Jour 1)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Couper les oranges en 4 quartiers. Retirer délicatement la pulpe pour ne garder que l'écorce (zeste + ziste blanc).
                       Placer les écorces dans une grande casserole, couvrir d'eau froide. Porter à ébullition, égoutter. Répéter l'opération 3 fois.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Lors du 3ème bain, ajouter le sel. Laisser frémir jusqu'à ce que les écorces soient tendres (test de l'aiguille : elle doit traverser sans résistance).
                       Égoutter soigneusement et laisser refroidir.
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Le Confisage (Jours 1 à 8)</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       <strong>Jour 1 :</strong> Préparer un sirop léger (2L eau + 800g sucre), porter à ébullition. Verser chaud sur les écorces disposées dans un bac. (Densité ~18°B).<br/>
                       <strong>Jours 2 à 4 :</strong> Égoutter les fruits (réserver le sirop). Ajouter 200g-300g de sucre au sirop, porter à ébullition. Verser sur les fruits. (Augmenter de 2-3°B par jour).<br/>
                       <strong>Jours 5 à 6 :</strong> Continuer l'opération en ajoutant le reste du sucre. Ajouter le glucose au Jour 6 pour empêcher la cristallisation.<br/>
                       <strong>Jours 7 à 8 :</strong> Le sirop doit atteindre une consistance de "miel liquide" (env. 30-32°B ou 70-72°Brix). Les fruits doivent être translucides.
                    </p>
                 </div>

                 {/* Étape III */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">III</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation à l'Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Égoutter les écorces sur grille pendant 24h. Le sirop doit s'écouler.
                       Tailler les quartiers en lanières régulières (cossettes) d'environ 5-6mm de large.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Laisser sécher les cossettes à l'air libre (ou en étuve ventilée très douce 30°C) jusqu'à ce qu'elles ne soient plus collantes au toucher ("amoureuses").
                       Si elles sont trop humides, le chocolat n'adhérera pas ou blanchira.
                    </p>
                 </div>

                 {/* Étape IV */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">IV</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Enrobage</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Mettre au point la couverture noire (50°C {"->"} 28°C {"->"} 31-32°C).
                       Tremper les cossettes une par une à l'aide d'une fourchette à tremper (2 ou 3 dents).
                       Tapoter pour retirer l'excédent de chocolat.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Déposer délicatement sur feuille guitare. Laisser cristalliser à 17°C.
                       Option : Rouler immédiatement dans le cacao poudre ou la poudre d'amande torréfiée avant cristallisation pour une finition différente.
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
                       <strong className="text-white block mb-2">Blanchiment & Désamertumisation :</strong> Ne négligez pas les 3 bains. C'est ce qui retire l'amertume du ziste (partie blanche). Si vous goûtez après le 3ème bain et que c'est encore trop amer, faites-en un 4ème. Le sel aide à ouvrir les pores de la peau.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Progression Baumé (Osmose) :</strong> On augmente la densité du sirop progressivement (de 18°B à 32°B) pour remplacer l'eau du fruit par du sucre par osmose. Si on va trop vite (sirop trop dense au début), le sucre "ferre" le fruit : l'extérieur durcit et l'intérieur reste sec et pourrit.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Rôle du Glucose :</strong> Le glucose (ajouté vers la fin) empêche le saccharose de recristalliser (masser) à l'intérieur du fruit lors de la conservation. Il assure le moelleux dans le temps.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Séchage des Cossettes :</strong> Crucial ! Si votre orangette suinte le sirop sous le chocolat, c'est la catastrophe (fermentation et décollement). Le séchage peut prendre 24h à 48h. La surface doit être sèche comme une pâte de fruit.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Variation Amande :</strong> Pour une touche rustique et gourmande, torréfiez légèrement de la poudre d'amande au four. Roulez l'orangette fraîchement enrobée dedans au lieu de la poser. Cela masque les imperfections et ajoute un goût grillé divin.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Mise au point Noir :</strong> Utilisez un chocolat fluide (3 ou 4 gouttes). L'enrobage doit être très fin pour ne pas masquer le goût du fruit confit. L'orangette doit craquer, puis fondre.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default OrangesConfitesOrangettes;