import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
// --- INFOS POUR LE SCANNER ---
/*
const recipeData = {
  title: "La Sauce Tomate Maison",
  category: "SAUCES",
  image: "https://images.unsplash.com/photo-1608949621308-c54d112c808a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "La base absolue de la cuisine méditerranéenne, idéale pour pâtes et pizzas."
};
*/
const SauceTomateMaison = () => {
  return (
    <>
      <Helmet>
        <title>La Sauce Tomate Maison - Maison Dorée</title>
        <meta name="description" content="Recette de la Sauce Tomate Maison : la base absolue de la cuisine méditerranéenne, idéale pour pâtes et pizzas." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1608949621308-c54d112c808a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="La Sauce Tomate Maison" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/cuisine/sauces">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Sauces
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                La Sauce Tomate Maison
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                La base absolue de la <strong>cuisine méditerranéenne</strong>. Bien meilleure que les pots industriels, cette sauce accompagne vos <strong>pâtes, pizzas, et plats mijotés</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Infos Clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Préparation</span>
              <span className="text-white font-medium">15 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">25 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Facile</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Users className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Portions</span>
              <span className="text-white font-medium">Pour 6 personnes</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">800 g</span> de Tomates <span className="text-sm text-gray-500">(bien mûres de préférence)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2</span> Oignons
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">2</span> Gousses d'ail
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">8</span> Brins de persil plat
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Bouquet de Basilic frais
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Huile d'olive <span className="text-sm text-gray-500">(pour la finition)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Sel et Poivre du moulin
                  </li>
                </ul>
              </div>
            </div>

            {/* Étapes */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Étapes de Préparation
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. La Mise en Place</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Lavez</strong> les tomates et <strong>coupez-les</strong> en dés grossiers (gardez le jus !). <strong>Pelez et émincez</strong> les oignons. <strong>Pelez et hachez</strong> l'ail dégermé. <strong>Lavez</strong> le persil et le basilic, puis <strong>ciselez-les</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. La Cuisson</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    Dans une casserole profonde, <strong>versez les tomates</strong> avec leur jus, les oignons, l'ail et le persil. <strong>Portez à ébullition</strong> à feu vif. Une fois que ça bout, <strong>baissez le feu</strong> et <strong>couvrez partiellement</strong> (laissez un peu de vapeur s'échapper). <strong>Laissez mijoter</strong> environ 20 minutes en remuant de temps en temps.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Note : Si la sauce réduit trop et attache au fond, ajoutez un petit fond d'eau.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. La Texture et l'Assaisonnement</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Passez la sauce au moulin à légumes</strong> (grille fine ou moyenne) pour retirer les peaux et obtenir une texture veloutée. <strong>Remettez la sauce</strong> dans la casserole. <strong>Ajoutez le sel, le poivre et le basilic frais ciselé</strong>. <strong>Laissez mijoter</strong> encore 5 minutes à feu doux pour concentrer les saveurs.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. La Finition</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Retirez la casserole du feu</strong>. Ajoutez un filet d'<strong>huile d'olive crue</strong> pour le parfum et la brillance, <strong>mélangez une dernière fois</strong>. C'est prêt !
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SauceTomateMaison;