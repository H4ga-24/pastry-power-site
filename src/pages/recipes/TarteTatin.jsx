import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TarteTatin = () => {
  return (
    <>
      <Helmet>
        <title>La Tarte Tatin (Centre-Val de Loire) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle de la Tarte Tatin : la célèbre tarte renversée aux pommes caramélisées du Centre-Val de Loire." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/1a5ca5539663852108e731c91b138d9b.jpg" 
              alt="La Tarte Tatin" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/patisserie/gateaux/desserts-regionaux">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Desserts Régionaux
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                La Tarte Tatin (Centre-Val de Loire)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                La célèbre <strong>tarte renversée des sœurs Tatin</strong>. Des <strong>pommes fondantes caramélisées au beurre</strong>, recouvertes d'une <strong>pâte croustillante</strong>.
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
              <span className="text-white font-medium">25 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">35 à 40 min</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-white font-medium">10 minutes</span>
            </div>
             <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Thermometer className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Température</span>
              <span className="text-white font-medium">180°C</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <p className="text-sm text-gray-500 mb-4">(Pour 6 à 8 personnes)</p>
                
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="pb-3 border-b border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span>Pommes</span>
                      <span className="font-bold text-white">1,5 kg</span>
                    </div>
                    <span className="text-xs text-gray-500 italic">Variété qui tient la cuisson : Golden, Royal Gala ou Reine des Reinettes</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Pâte Feuilletée (pure beurre) ou Brisée</span>
                    <span className="font-bold text-white">1</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre en poudre</span>
                    <span className="font-bold text-white">150 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Beurre demi-sel (coupé en dés)</span>
                    <span className="font-bold text-white">100 g</span>
                  </li>
                </ul>

                <div className="bg-[#1a1a1a] p-4 rounded border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                    <Utensils className="w-4 h-4" />
                    <span className="font-medium uppercase text-xs tracking-wider">Matériel Requis</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Un moule à manqué (bords hauts) compatible feu et four, ou une poêle à manche amovible.
                  </p>
                </div>
              </div>
            </div>

            {/* Procédé Technique */}
            <div className="space-y-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-[#D4AF37]">👨‍🍳</span> Procédé Technique
              </h2>

              <div className="relative pl-8 border-l border-[#D4AF37]/20 space-y-10">
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">1. Préparation des pommes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Épluchez les pommes</strong>, ôtez le cœur et les pépins. <strong>Coupez-les en deux</strong> (ou en quartiers si elles sont très grosses).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. Le Caramel (Directement dans le moule)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans votre moule (s'il va sur le feu) ou dans une casserole, mettez le <strong>sucre et le beurre</strong>. Faites chauffer à feu moyen jusqu'à l'obtention d'un <strong>caramel blond/ambré mousseux</strong>. Retirez du feu. (Si vous avez fait le caramel dans une casserole séparée, versez-le maintenant dans le fond de votre moule à tarte).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Montage des pommes</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Disposez les morceaux de pommes <strong>directement sur le caramel, très serrés</strong>, sur la tranche ou côté bombé vers le fond du moule. 
                    <br/><span className="text-[#D4AF37] text-sm mt-2 block italic">Note : Les pommes réduisent à la cuisson, il faut donc "blinder" le moule, quitte à superposer une deuxième couche s'il reste des pommes.</span>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. La Pâte</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Déroulez la pâte feuilletée</strong>. Posez-la sur les pommes. <strong>Faites glisser les bords de la pâte à l'intérieur du moule</strong>, entre les pommes et la paroi (c'est ce qui fera le "trottoir" de la tarte). <strong>Piquez le dessus de la pâte</strong> avec une fourchette ou un couteau pour laisser la vapeur s'échapper.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Cuisson</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Enfournez à 180°C pendant 35 à 40 minutes</strong>. La pâte doit être bien <strong>dorée et gonflée</strong>. On doit voir le <strong>caramel bouillonner sur les côtés</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. Le Démoulage (Le moment de vérité)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sortez la tarte du four. <strong>Laissez reposer 10 minutes</strong> (le caramel doit figer un peu pour ne pas couler partout). Posez un grand plat de service sur le moule. <strong>D'un geste rapide et assuré, retournez l'ensemble</strong>. Retirez le moule délicatement. Servez <strong>tiède</strong> (avec une cuillère de crème fraîche épaisse ou une boule de glace vanille).
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

export default TarteTatin;