import React, { useEffect } from 'react';
import { PlayCircle, Award, Users, TrendingUp, ChefHat } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20 relative overflow-hidden">
      
      {/* FOND GRAPHIQUE SUBTIL (Pour habiller sans photo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-[120px] opacity-5 pointer-events-none" />
      <ChefHat className="absolute top-1/3 right-[-10%] text-white/5 w-[600px] h-[600px] rotate-12 pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <span className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
          L'Origine du Mouvement
        </span>
        <h1 className="text-6xl md:text-9xl font-serif mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 leading-tight">
          PASTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8a701f]">POWER</span>
        </h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full animate-in fade-in zoom-in duration-700 delay-200" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* --- SECTION STATS (La Preuve Sociale) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 text-center group hover:border-[#D4AF37]/50 transition-colors">
            <Users className="w-10 h-10 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <span className="block text-5xl font-serif font-bold text-white mb-2">160K+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Passionnés sur TikTok</span>
          </div>
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 text-center group hover:border-[#D4AF37]/50 transition-colors">
            <TrendingUp className="w-10 h-10 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <span className="block text-5xl font-serif font-bold text-white mb-2">M+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Vues cumulées</span>
          </div>
          <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 text-center group hover:border-[#D4AF37]/50 transition-colors">
            <Award className="w-10 h-10 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <span className="block text-5xl font-serif font-bold text-white mb-2">100%</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">Rigueur Technique</span>
          </div>
        </div>

        {/* --- LE MANIFESTE (Storytelling Centré) --- */}
        <div className="max-w-3xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            "Pourquoi se limiter à 60 secondes ?"
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <p>
              Tout a commencé sur un écran de téléphone. Avec <strong>Pastry Power</strong>, j'ai voulu partager ma vision de la pâtisserie : moderne, décomplexée, mais techniquement irréprochable.
            </p>
            <p>
              Très vite, vous avez été <strong>160 000</strong> à rejoindre l'aventure sur TikTok. Vos questions, vos retours et votre envie d'apprendre m'ont poussé à voir plus grand.
            </p>
            
            <div className="py-8">
              <span className="text-6xl text-[#D4AF37] font-serif leading-none">“</span>
              <p className="text-2xl text-white font-serif italic px-8">
                Une vidéo courte peut donner envie, mais elle ne suffit pas toujours pour comprendre la chimie d'une ganache ou la structure d'un entremets.
              </p>
            </div>

            <p>
              C'est pour cela que j'ai créé cette plateforme. Ici, je ne suis pas limité par le temps. Je peux décortiquer chaque geste, expliquer chaque réaction et vous offrir les outils que j'aurais rêvé avoir à mes débuts.
            </p>
            <p>
              Derrière chaque recette publiée, il y a des heures de tests, de ratés, et de réussites, le tout condensé pour vous faire gagner du temps. Bienvenue dans la dimension supérieure de la pâtisserie.
            </p>
          </div>

          {/* SIGNATURE */}
          <div className="pt-12">
            <p className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-2">Alexandre Perreau</p>
            <p className="text-gray-500 text-sm">Fondateur & Créateur de Contenu</p>
          </div>

          {/* CALL TO ACTION */}
          <div className="pt-8 flex flex-wrap justify-center gap-6">
            <a href="https://www.tiktok.com/@pastrypower_" target="_blank" rel="noreferrer">
              <Button className="bg-[#D4AF37] text-black hover:bg-white border-none rounded-full px-10 py-6 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-lg shadow-[#D4AF37]/20">
                <PlayCircle className="w-5 h-5 mr-2" /> Rejoindre le TikTok
              </Button>
            </a>
            <Link to="/patisserie">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-[#D4AF37] rounded-full px-10 py-6 font-bold uppercase tracking-wider text-sm transition-all">
                Explorer les Recettes
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;