import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Scale, UtensilsCrossed, Info } from 'lucide-react';
import RecipeIngredients from '@/components/RecipeIngredients';

const BonbonSphereCitron = () => {
  const recipeData = {
    title: "Bonbon Chocolat Sphère Citron",
    category: "CHOCOLATERIE",
    prepTime: "2H + 24H (Cristallisation)",
    cookTime: "30 MIN",
    difficulty: "EXPERT",
    yield: "535 pièces",
    weight: "~6.2 kg",
    image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0e5f08dbe0e67a034ef4e8a02ac4fd72.jpg",
    description: "Une sphère élégante cachant une ganache citron lactée sur base caramel. L'acidité du fruit vient trancher la douceur du chocolat au lait pour un équilibre parfait."
  };

  const ingredients = [
    {
      title: "1. Ganache Citron Lactée",
      items: [
        { name: "Sucre semoule", qty: 800, unit: "g" },
        { name: "Sirop de glucose", qty: 250, unit: "g" },
        { name: "Purée de citron jaune (chaude)", qty: 750, unit: "g" },
        { name: "Chocolat Lait 40%", qty: 1600, unit: "g" },
        { name: "Beurre de cacao", qty: 100, unit: "g" },
        { name: "Beurre doux", qty: 300, unit: "g" },
        { name: "Sorbitol (stabilisateur)", qty: 100, unit: "g" }
      ]
    },
    {
      title: "2. Coque Chocolat & Décor",
      items: [
        { name: "Couverture Noir ou Lait (Moulage)", qty: 2500, unit: "g" },
        { name: "Beurre de cacao coloré (Vert/Jaune)", qty: 100, unit: "g" }
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
                      <p className="text-gray-400 text-xs">Le caramel citron est très réactif. Attention aux éclaboussures lors du déglaçage avec la purée de fruits.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
           {/* Ingrédients Dynamiques */}
           <RecipeIngredients 
             ingredients={ingredients} 
             initialYield={535}
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
                    <h4 className="text-xl text-white mb-4 font-serif">Réalisation de la ganache citron lactée</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Dans une casserole, cuire le sucre semoule et le glucose jusqu'à obtention d'un caramel à 175°C (couleur ambrée soutenue).
                       Déglacer prudemment avec la purée de citron préalablement chauffée. Bien mélanger pour dissoudre les éventuels morceaux de sucre.
                       Laisser redescendre la température du mélange caramel/citron vers 60-70°C.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Verser sur le chocolat lait, le beurre de cacao et le sorbitol. Réaliser l'émulsion au mixeur plongeant.
                       Lorsque la ganache atteint 40°C, incorporer le beurre doux en dés. Mixer à nouveau pour parfaire l'émulsion.
                       Filmer au contact et laisser cristalliser légèrement jusqu'à atteindre la température de pochage (28°C).
                    </p>
                 </div>

                 {/* Étape II */}
                 <div className="relative pl-8 border-l border-[#D4AF37]/20">
                    <span className="absolute -left-3 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#121212] border border-[#D4AF37] text-[#D4AF37] font-bold text-xs">II</span>
                    <h4 className="text-xl text-white mb-4 font-serif">Préparation de la coque en chocolat</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                       Nettoyer soigneusement les moules "Cabosse" ou "Sphère" au coton.
                       Mettre au point le beurre de cacao coloré (vert et jaune). Appliquer au doigt dans le moule pour créer un effet texturé naturel. Laisser cristalliser.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                       Mettre au point la couverture de moulage (Noir ou Lait). Mouler les coques finement, tapoter pour retirer les bulles d'air, retourner et laisser égoutter. Araser et laisser cristalliser.
                       Garnir les coques avec la ganache à 28°C maximum (laisser un espace de 1-2mm). Laisser croûter 24h à 17°C.
                       Obturer (fermer) les bonbons avec de la couverture mise au point.
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
                       <strong className="text-white block mb-2">Le Caramel à 175°C :</strong> C'est la température clé. En dessous, le goût caramel est trop faible face au citron. Au-dessus (180°C+), l'amertume devient désagréable. Utilisez un thermomètre précis.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Déglaçage Purée Chaude :</strong> Chauffez impérativement votre purée de citron avant de la verser sur le caramel. Si elle est froide, le choc thermique sera trop violent, le caramel va masser (durcir en bloc) et vous risquez des brûlures par projection.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Texture au Doigt :</strong> Pour un effet "Cabosse" naturel comme sur la photo, n'utilisez pas d'aérographe. Trempez votre doigt ganté (latex) dans le beurre de cacao tempéré et tapotez l'intérieur du moule. Cela crée un relief visuel organique.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Température de Garnissage :</strong> Ne garnissez JAMAIS au-dessus de 28°C. Si la ganache est trop chaude, elle va faire fondre votre fine coque en chocolat et détruire le brillant (blanchiment gras).
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Nettoyage des Moules :</strong> Un moule mal nettoyé = un bonbon terne. Lustrez chaque empreinte avec un coton démaquillant sec avant tout usage. C'est le secret de la brillance miroir.
                    </p>
                    <p>
                       <strong className="text-white block mb-2">Technique d'Operculage :</strong> Pour fermer les bonbons, chauffez très légèrement la surface du moule au décapeur thermique (juste 1 seconde) avant de verser le chocolat d'obturation. Cela assure une soudure parfaite entre la coque et le socle.
                    </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BonbonSphereCitron;