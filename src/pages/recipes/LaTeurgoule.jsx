import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ChefHat, Thermometer, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LaTeurgoule = () => {
  return (
    <>
      <Helmet>
        <title>La Teurgoule (Normandie) - Maison Dorée</title>
        <meta name="description" content="Recette traditionnelle de la Teurgoule : le célèbre riz au lait normand à la cannelle, cuit longuement au four." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-gray-300 font-sans">
        {/* Hero Section */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <div className="absolute inset-0">
            <img 
              src="https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/30be3f25abc534e5a963ef9e583d5c0f.jpg" 
              alt="La Teurgoule" 
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
                La Teurgoule (Normandie)
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                Le célèbre <strong>riz au lait normand à la cannelle</strong>, cuit <strong>très lentement au four</strong> dans une terrine en grès. Les grains de riz fondent littéralement dans le lait pour créer une <strong>texture crémeuse</strong> sous une <strong>croûte dorée</strong>.
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
              <span className="text-white font-medium">10 minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cuisson</span>
              <span className="text-white font-medium">5h00 à 6h00 (Indispensable)</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Thermometer className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Température</span>
              <span className="text-white font-medium">110°C - 120°C</span>
            </div>
             <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <Utensils className="w-6 h-6 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Matériel</span>
              <span className="text-white font-medium">Terrine en grès</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
            
            {/* Ingrédients */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                  <span className="text-[#D4AF37]">🛒</span> Ingrédients
                </h2>
                <p className="text-sm text-gray-500 mb-4">(Pour une terrine familiale)</p>
                <ul className="space-y-4 text-gray-300">
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Lait entier (Indispensable pour l'onctuosité)</span>
                    <span className="font-bold text-white">2 Litres</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Riz rond (Riz à dessert)</span>
                    <span className="font-bold text-white">150 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sucre en poudre</span>
                    <span className="font-bold text-white">170 g</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Cannelle en poudre (rase ou bombée selon goût)</span>
                    <span className="font-bold text-white">2 c.à.c</span>
                  </li>
                  <li className="pb-3 border-b border-white/5 flex justify-between items-center">
                    <span>Sel</span>
                    <span className="font-bold text-white">1 pincée</span>
                  </li>
                </ul>
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
                  <h3 className="text-xl font-medium text-white mb-3">1. Préparation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Préchauffez votre four à 110°C ou 120°C</strong> (th. 3-4). La chaleur doit être <strong>douce</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">2. L'Assemblage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dans la <strong>terrine en grès</strong>, versez le <strong>riz rond (non rincé)</strong>, le <strong>sucre</strong>, le <strong>sel</strong> et la <strong>cannelle en poudre</strong>. <strong>Mélangez ces ingrédients secs</strong> directement au fond du plat.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">3. Le Mouillage</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Versez les 2 litres de lait entier froid progressivement</strong> sur le mélange, tout en <strong>remuant doucement avec une cuillère en bois ou un fouet</strong> pour bien <strong>dissoudre le sucre</strong> et <strong>répartir la cannelle</strong> (qui a tendance à flotter).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">4. La Cuisson Longue</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Enfournez la terrine à mi-hauteur</strong>. <strong>Laissez cuire pendant 5 à 6 heures</strong>. Le lait va réduire très lentement. Une <strong>croûte brune, épaisse et caramélisée</strong> va se former sur le dessus : <strong>ne la percez pas, ne remuez pas</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">5. Vérification</h3>
                  <p className="text-gray-400 leading-relaxed">
                    La Teurgoule est cuite quand elle n'est plus liquide (elle ne doit plus <strong>trembloter comme de l'eau</strong>, mais avoir une <strong>consistance de crème prise</strong>). Le riz doit avoir <strong>absorbé la quasi-totalité du lait</strong>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#121212] border-2 border-[#D4AF37]" />
                  <h3 className="text-xl font-medium text-white mb-3">6. Service</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sortez du four et <strong>laissez tiédir ou refroidir complètement</strong> dans la terrine. La Teurgoule se déguste traditionnellement <strong>tiède ou froide</strong>, avec un verre de cidre ou de jus de pomme.
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

export default LaTeurgoule;