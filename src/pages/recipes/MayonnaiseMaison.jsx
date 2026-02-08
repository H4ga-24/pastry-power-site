import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Scale } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MayonnaiseMaison = () => {
  return (
    <>
      <Helmet>
        <title>Mayonnaise Maison - Maison Dorée</title>
        <meta name="description" content="Recette classique de la mayonnaise maison : une émulsion froide stable, base de nombreuses sauces." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/4bab0dd2583c8929df512f3d8fce6e78.jpg" 
              alt="Mayonnaise Maison" 
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
                Mayonnaise Maison
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le grand classique <strong>indispensable</strong>. Une <strong>émulsion froide stable</strong> qui sert de base à de nombreuses autres sauces (Cocktail, Tartare, Andalouse...). Rien ne vaut le goût et la texture d'une mayonnaise faite main.
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
              <span className="text-white font-medium">5 à 10 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <ChefHat className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Moyenne <span className="text-gray-500">(demande un coup de main énergique)</span></span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Conservation</span>
              <span className="text-white font-medium">24h à 48h maximum au frais</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Scale className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Texture</span>
              <span className="text-white font-medium">Ferme et onctueuse</span>
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
                    <span className="font-bold text-white">25 cl</span> d'Huile de tournesol <span className="text-sm text-gray-500">(ou arachide, une huile neutre)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1</span> Jaune d'œuf <span className="text-sm text-gray-500">(à température ambiante de préférence)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">15 g</span> de Moutarde <span className="text-sm text-gray-500">(une bonne cuillère à café)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">1 c.à.s</span> de Vinaigre <span className="text-sm text-gray-500">(blanc ou de cidre)</span>
                  </li>
                  <li className="pb-3 border-b border-white/5">
                    <span className="font-bold text-white">Q.S.P</span> Sel
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
                  <h3 className="text-xl font-medium text-white mb-3">1. La Base (Le Noyau)</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    Dans un bol ou un cul-de-poule, <strong>mettez le jaune d'œuf, la moutarde, une pincée de sel et la moitié du vinaigre</strong>. <strong>Mélangez</strong> ces ingrédients au fouet pour obtenir une base homogène.
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    Astuce : Laissez reposer ce mélange 1 minute avant de commencer, cela aide l'émulsion.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. Le Départ de l'Émulsion</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    <strong>Commencez à fouetter énergiquement</strong> le mélange tout en incorporant l'huile <strong>très doucement</strong> (en filet fin ou goutte à goutte au début).
                  </p>
                  <p className="text-gray-500 italic text-sm">
                    C'est l'étape critique : l'huile doit être parfaitement absorbée par le jaune pour que la mayonnaise "prenne".
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. La Montée</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Une fois que la sauce commence à <strong>épaissir</strong> et que l'émulsion est stable, vous pouvez <strong>verser le reste de l'huile</strong> (environ 1/3 par 1/3) plus rapidement, sans cesser de <strong>fouetter vigoureusement</strong>. La mayonnaise doit devenir <strong>ferme et tenir dans le fouet</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. La Finition (Le Blanchiment)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Pour terminer, <strong>ajoutez le reste du vinaigre</strong> tout en fouettant. Cela va légèrement "blanchir" la mayonnaise (l'éclaircir) et détendre un peu sa texture si elle est trop ferme.
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

export default MayonnaiseMaison;