import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Users, Scale, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Arlequin = () => {
  return (
    <>
      <Helmet>
        <title>L'Arlequin (Pistache, Passion, Framboise) - Maison Dorée</title>
        <meta name="description" content="Recette exclusive de l'Arlequin : une harmonie de couleurs et de saveurs avec pistache, fruits de la passion et framboise." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f31e1f663893ced8b953a4ddb60456e7.png" 
              alt="L'Arlequin" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-black/20" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-4xl mx-auto w-full">
              <Link to="/patisserie/gateaux/entremets">
                <Button variant="ghost" className="text-white/80 hover:text-[#D4AF37] hover:bg-white/5 mb-6 pl-0">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour aux Entremets
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
                L'Arlequin
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Un entremets haut en couleur et en saveurs. L'alliance acidulée de la <strong>passion</strong> et de la <strong>framboise</strong> rencontre la douceur de la <strong>pistache</strong> dans un jeu de textures moelleuses et fondantes.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          
          {/* Infos Clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <Users className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rendement</span>
              <span className="text-white font-medium">5 Entremets (Ø12cm x H10cm)</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Préparation</span>
              <span className="text-white font-medium">5h00</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Scale className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Difficulté</span>
              <span className="text-white font-medium">Expert</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Thermometer className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Froid</span>
              <span className="text-white font-medium">24h au total</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients - Sidebar */}
            <div className="space-y-8">
              
              {/* Biscuit Financier Pistache */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">1. Biscuit Financier Pistache</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Sucre glace</span> <span className="font-bold text-white">240 g</span></li>
                  <li className="flex justify-between"><span>Poudre d'amande</span> <span className="font-bold text-white">90 g</span></li>
                  <li className="flex justify-between"><span>Farine T55</span> <span className="font-bold text-white">90 g</span></li>
                  <li className="flex justify-between"><span>Pâte de pistache pure</span> <span className="font-bold text-white">50 g</span></li>
                  <li className="flex justify-between"><span>Blancs d'œufs</span> <span className="font-bold text-white">240 g</span></li>
                  <li className="flex justify-between"><span>Beurre noisette (tiède)</span> <span className="font-bold text-white">150 g</span></li>
                </ul>
              </div>

              {/* Biscuit Joconde Pistache */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">2. Biscuit Joconde Pistache</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Oeufs entiers</span> <span className="font-bold text-white">250 g</span></li>
                  <li className="flex justify-between"><span>Sucre glace</span> <span className="font-bold text-white">190 g</span></li>
                  <li className="flex justify-between"><span>Poudre d'amande</span> <span className="font-bold text-white">150 g</span></li>
                  <li className="flex justify-between"><span>Pâte de pistache</span> <span className="font-bold text-white">40 g</span></li>
                  <li className="flex justify-between"><span>Farine</span> <span className="font-bold text-white">50 g</span></li>
                  <li className="flex justify-between"><span>Beurre fondu</span> <span className="font-bold text-white">35 g</span></li>
                  <li className="flex justify-between"><span>Blancs d'œufs</span> <span className="font-bold text-white">165 g</span></li>
                  <li className="flex justify-between"><span>Sucre semoule</span> <span className="font-bold text-white">25 g</span></li>
                </ul>
              </div>

              {/* Coulis Passion Mangue */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">3. Coulis Passion & Mangue</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Purée de fruit de la passion</span> <span className="font-bold text-white">125 g</span></li>
                  <li className="flex justify-between"><span>Purée de mangue</span> <span className="font-bold text-white">125 g</span></li>
                  <li className="flex justify-between"><span>Sucre semoule</span> <span className="font-bold text-white">30 g</span></li>
                  <li className="flex justify-between"><span>Gélatine (feuilles)</span> <span className="font-bold text-white">5 g</span></li>
                </ul>
              </div>

               {/* Coulis Framboise */}
               <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">4. Coulis Framboise</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Purée de framboise</span> <span className="font-bold text-white">250 g</span></li>
                  <li className="flex justify-between"><span>Sucre semoule</span> <span className="font-bold text-white">25 g</span></li>
                  <li className="flex justify-between"><span>Gélatine (feuilles)</span> <span className="font-bold text-white">5 g</span></li>
                </ul>
              </div>

              {/* Mousse Passion */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">5. Mousse Passion</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Purée de passion</span> <span className="font-bold text-white">200 g</span></li>
                  <li className="flex justify-between"><span>Meringue italienne</span> <span className="font-bold text-white">90 g</span></li>
                  <li className="flex justify-between"><span>Crème fouettée 35%</span> <span className="font-bold text-white">220 g</span></li>
                  <li className="flex justify-between"><span>Gélatine (feuilles)</span> <span className="font-bold text-white">6 g</span></li>
                </ul>
              </div>

              {/* Mousse Framboise */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-serif text-[#D4AF37] mb-4 border-b border-white/10 pb-2">6. Mousse Framboise</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Purée de framboise</span> <span className="font-bold text-white">200 g</span></li>
                  <li className="flex justify-between"><span>Meringue italienne</span> <span className="font-bold text-white">90 g</span></li>
                  <li className="flex justify-between"><span>Crème fouettée 35%</span> <span className="font-bold text-white">220 g</span></li>
                  <li className="flex justify-between"><span>Gélatine (feuilles)</span> <span className="font-bold text-white">6 g</span></li>
                </ul>
              </div>

            </div>

            {/* Procédé Technique - Main Content */}
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                 <h2 className="text-3xl font-serif text-white flex items-center gap-3">
                  <span className="text-[#D4AF37]">👨‍🍳</span> Progression
                </h2>
                <div className="flex gap-2">
                   <div className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                     Recette Signature
                   </div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="relative pl-8 border-l border-[#D4AF37]/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                <h3 className="text-xl font-medium text-[#D4AF37] mb-4">1. Biscuit Financier Pistache (Base)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Réaliser un beurre noisette et le laisser tiédir. Dans la cuve du batteur, mélanger le sucre glace, la poudre d'amande et la farine tamisés. Ajouter les blancs d'œufs non montés et la pâte de pistache. Mélanger à la feuille.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Incorporer le beurre noisette tiède. Couler sur une plaque (60x40) ou dans des cercles de 10cm de diamètre sur 1cm d'épaisseur. Cuire à 170°C pendant 12 à 15 minutes. Détailler 5 disques de 10cm de diamètre.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 border-l border-[#D4AF37]/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                <h3 className="text-xl font-medium text-[#D4AF37] mb-4">2. Biscuit Joconde Pistache (Décor)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Monter au ruban les œufs entiers, le sucre glace, la poudre d'amande et la pâte de pistache. Incorporer la farine et le beurre fondu. Monter les blancs d'œufs en neige ferme avec le sucre semoule.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Incorporer délicatement les blancs au premier mélange. Étaler finement (5mm) sur plaque. Cuire à 230°C (four chaud) pendant 6 à 8 minutes. Une fois refroidi, détailler des bandes de 10cm de hauteur pour chemiser l'intérieur des cercles de 12cm.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 border-l border-[#D4AF37]/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                <h3 className="text-xl font-medium text-[#D4AF37] mb-4">3. Inserts Coulis Gélifiés</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Pour chaque coulis :</strong> Chauffer les purées de fruits. Mélanger le sucre et la pectine (ou hydrater la gélatine). Ajouter le sucre dans les purées chaudes (40°C), porter à ébullition 1 min (si pectine) ou incorporer la gélatine hors du feu.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Couler dans des cercles de 10cm filmés (environ 0.5cm à 1cm d'épaisseur par disque). Il faut 5 disques de Passion/Mangue et 5 disques de Framboise. Surgeler.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-8 border-l border-[#D4AF37]/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                <h3 className="text-xl font-medium text-[#D4AF37] mb-4">4. Mousses Fruits (Passion & Framboise)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  La méthode est identique pour les deux mousses. Chauffer 1/3 de la purée de fruit, y fondre la gélatine hydratée. Mélanger avec le reste de purée froide.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Incorporer la meringue italienne (tiède ou froide) délicatement, puis la crème fouettée mousseuse. Utiliser immédiatement pour le montage.
                </p>
              </div>

               {/* Step 5 */}
               <div className="relative pl-8 border-l border-[#D4AF37]/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                <h3 className="text-xl font-medium text-[#D4AF37] mb-4">5. Montage & Finition</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Chemiser les cercles (ou tubes PVC) de 12cm de diamètre et 10cm de haut avec une bande de Rhodoïd, puis plaquer la bande de <strong>Biscuit Joconde Pistache</strong> contre la paroi.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Déposer un disque de <strong>Financier Pistache</strong> au fond. Pocher une couche de <strong>Mousse Framboise</strong>. Déposer un insert congelé de <strong>Coulis Passion/Mangue</strong>. Pocher une couche de <strong>Mousse Passion</strong>. Déposer un insert congelé de <strong>Coulis Framboise</strong>. Terminer par une fine couche de mousse ou de fruit frais si désiré.
                </p>
                 <div className="bg-[#D4AF37]/5 p-6 rounded-lg border border-[#D4AF37]/20 mt-6">
                    <h4 className="text-[#D4AF37] font-serif text-lg mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" /> Les Astuces du Chef
                    </h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                      <li>Pour un effet visuel parfait, assurez-vous que les inserts sont bien centrés et ne touchent pas le biscuit Joconde extérieur.</li>
                      <li>Imbibez légèrement le biscuit Joconde avec un sirop au Kirsch ou à la vanille pour plus de moelleux.</li>
                      <li>Décorez le dessus avec une abondance de framboises fraîches, des éclats de pistaches torréfiées et quelques pointes de feuille d'or.</li>
                    </ul>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arlequin;