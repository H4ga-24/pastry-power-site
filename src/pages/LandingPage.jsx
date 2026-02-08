import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChefHat, BookOpen, Crown, Check, Download, Lock, Wheat, Cake } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Assure-toi d'avoir cet import si tu utilises les composants Shadcn, sinon utilise les balises <button> classiques comme ci-dessous

const LandingPage = () => {
  // Les 5 catégories principales
  const categories = [
    { 
      title: "Pâtisserie", 
      image: "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?q=80&w=764&auto=format&fit=crop",
      link: "/patisserie"
    },
    { 
      title: "Technologie", 
      image: "https://images.unsplash.com/photo-1603900702646-701378265860?q=80&w=687&auto=format&fit=crop", 
      link: "/technologie" 
    },
    { 
      title: "Confiserie", 
      image: "https://images.unsplash.com/photo-1768676124314-b19c46ba7cd8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/confiserie"
    },
    { 
      title: "Chocolaterie", 
      image: "https://plus.unsplash.com/premium_photo-1667031518595-9cb4b0d504ef?q=80&w=687&auto=format&fit=crop",
      link: "/chocolaterie"
    },
    { 
      title: "Cuisine", 
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=687&auto=format&fit=crop",
      link: "/cuisine"
    }
  ];

  const scrollToShop = () => {
    const section = document.getElementById('shop-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#000000] z-0"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold">
              Pastry Power
            </h2>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
              L'Art de la <br/>
              <span className="text-[#D4AF37] italic font-light">Pâtisserie</span>
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Explorez un univers où la technique rencontre l'émotion. 
              Des recettes d'exception pour les passionnés du goût.
            </p>
            
            <div className="flex gap-4 justify-center">
                <Link to="/patisserie">
                <button className="bg-[#D4AF37] text-[#121212] px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    Découvrir
                </button>
                </Link>
                <button onClick={scrollToShop} className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                    Boutique
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION CATÉGORIES --- */}
      <section className="py-20 px-4 md:px-8 bg-[#121212]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Catégories <span className="text-[#D4AF37] italic">Principales</span>
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37]/50 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1800px] mx-auto h-[600px] md:h-[500px]">
          {categories.map((cat, index) => (
            <Link 
              to={cat.link} 
              key={index} 
              className="relative group overflow-hidden rounded-xl h-full border border-white/5 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {cat.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- SECTION BOUTIQUE & VIP --- */}
      <section id="shop-section" className="py-24 px-6 relative overflow-hidden bg-[#1a1a1a]">
        {/* Fond décoratif */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Passez au niveau supérieur
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">La Boutique du Chef</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Des supports professionnels pour accélérer votre progression.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. CARTE PÂTISSERIE (Podia) */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 group flex flex-col">
               <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800" alt="Carnet Pâtisserie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#252525] p-2 rounded-lg text-[#D4AF37] border border-[#D4AF37]/20"><Cake size={24} /></div>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">E-Book</span>
                 </div>
                 
                 <h3 className="text-2xl font-serif text-white mb-4">L'Art de la Pâtisserie</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                   Chaque recette est accompagnée de ses explications détaillées sur la réalisation du produit. Un guide indispensable.
                 </p>
                 
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-gray-300 text-xs">
                      <Check className="text-[#D4AF37] w-3 h-3" /> +100 Recettes de bases
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-xs">
                      <Check className="text-[#D4AF37] w-3 h-3" /> Fiches Techniques Détaillées
                    </li>
                 </ul>

                 <a href="https://alex24.podia.com/carnet-recette" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white text-black hover:bg-[#D4AF37] hover:text-white font-bold py-4 text-sm tracking-wide transition-all duration-300 rounded-sm uppercase">
                       Voir le carnet
                    </button>
                 </a>
               </div>
            </div>

            {/* 2. CARTE BOULANGERIE (Podia) */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 group flex flex-col">
               <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1636906227201-f3ec32645129?q=80&w=687&auto=format&fit=crop" alt="Carnet Boulangerie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#252525] p-2 rounded-lg text-[#D4AF37] border border-[#D4AF37]/20"><Wheat size={24} /></div>
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">E-Book</span>
                 </div>
                 
                 <h3 className="text-2xl font-serif text-white mb-4">Secrets de Boulangerie</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                   Chaque recette est accompagnée de ses explications détaillées sur la réalisation du produit. Maîtrisez la fermentation.
                 </p>
                 
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-gray-300 text-xs">
                      <Check className="text-[#D4AF37] w-3 h-3" /> +60 Recettes (Pain, Pizza, Brioche)
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-xs">
                      <Check className="text-[#D4AF37] w-3 h-3" /> Viennoiserie & Tourage
                    </li>
                 </ul>

                 <a href="https://alex24.podia.com/carnet-boulangerie" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white text-black hover:bg-[#D4AF37] hover:text-white font-bold py-4 text-sm tracking-wide transition-all duration-300 rounded-sm uppercase">
                       Voir le carnet
                    </button>
                 </a>
               </div>
            </div>

            {/* 3. CARTE VIP (Stripe) */}
            <div className="bg-gradient-to-br from-[#121212] to-[#000] border border-[#D4AF37]/30 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)] transition-all duration-500 group flex flex-col relative">
               <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                  Le Top
               </div>
               <div className="h-48 relative overflow-hidden bg-[#D4AF37]/5 flex items-center justify-center">
                  <Crown size={64} className="text-[#D4AF37] opacity-80" />
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                 <h3 className="text-3xl font-serif text-white mb-2">Club <span className="text-[#D4AF37]">VIP</span></h3>
                 <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-white">9.90€</span>
                    <span className="text-gray-400">/ mois</span>
                 </div>
                 
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-[#D4AF37] pl-4 flex-grow">
                   L'expérience ultime. Accédez à des recettes exclusives "Signature", des conseils techniques approfondis et le support direct du chef.
                 </p>
                 
                 <div className="space-y-3 mb-8 bg-[#252525]/50 p-4 rounded-lg">
                    <div className="flex items-center gap-3 text-white text-xs">
                      <Star className="text-[#D4AF37] w-3 h-3 fill-[#D4AF37]" /> 
                      <span>De nouvelles recettes ajoutées chaque mois</span>
                    </div>
                    <div className="flex items-center gap-3 text-white text-xs">
                      <Lock className="text-[#D4AF37] w-3 h-3" /> 
                      <span>Fiches techniques détaillées</span>
                    </div>
                 </div>

                 <a href="https://buy.stripe.com/TON_LIEN_ICI" target="_blank" rel="noopener noreferrer">
                      <button className="w-full bg-[#D4AF37] text-black hover:bg-white hover:text-black font-bold py-4 text-sm tracking-wide shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 rounded-sm uppercase">
                         S'abonner
                      </button>
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;