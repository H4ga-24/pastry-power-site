import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const LandingPage = () => {
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
      image: "https://images.unsplash.com/photo-1768676124314-b19c46ba7cd8?q=80&w=1472&auto=format&fit=crop",
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
    },
    { 
      title: "Alternative", 
      image: "https://images.unsplash.com/photo-1606101204907-19e00aa49db2?q=80&w=687&auto=format&fit=crop",
      link: "/alternative"
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
            <h2 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm mb-4 font-bold">
              Pastry Power
            </h2>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
              L'Art de la <br/>
              <span className="text-[#D4AF37] italic font-light">Pâtisserie</span>
            </h1>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
            
            <div className="flex gap-3 justify-center">
                <Link to="/patisserie">
                <button className="bg-[#D4AF37] text-[#121212] px-6 md:px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-xs md:text-sm">
                    Découvrir
                </button>
                </Link>
                <button onClick={scrollToShop} className="border border-[#D4AF37] text-[#D4AF37] px-6 md:px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs md:text-sm">
                    Boutique
                </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION CATÉGORIES --- */}
      <section className="py-12 lg:py-20 px-4 max-w-[1600px] mx-auto bg-[#121212]">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Catégories <span className="text-[#D4AF37] italic">Principales</span>
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37]/50 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {categories.map((cat, index) => (
            <Link 
              to={cat.link} 
              key={index} 
              className="relative group overflow-hidden rounded-lg h-[220px] md:h-[400px] border border-white/5 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 transition-transform duration-300">
                <h3 className="text-lg md:text-2xl font-serif text-white mb-1 group-hover:text-[#D4AF37]">
                  {cat.title}
                </h3>
                <div className="w-6 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- SECTION BOUTIQUE --- */}
      <section id="shop-section" className="py-12 lg:py-24 px-4 relative overflow-hidden bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="text-[#D4AF37] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-2 block">
              Support Professionnel
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">La Boutique</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-8 items-stretch">
            
            {/* 1. CARTE PÂTISSERIE */}
            <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden flex flex-col">
               <div className="h-32 lg:h-48 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800" alt="Carnet Pâtisserie" className="w-full h-full object-cover opacity-70" />
               </div>
               <div className="p-5 lg:p-8 flex flex-col flex-grow">
                 <h3 className="text-xl font-serif text-white mb-2">L'Art de la Pâtisserie</h3>
                 <p className="text-gray-400 text-xs mb-4 flex-grow line-clamp-2 lg:line-clamp-none">Le guide complet : +100 recettes et fiches techniques.</p>
                 <a href="https://alex24.podia.com/carnet-recette" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white/10 text-white hover:bg-white hover:text-black font-bold py-3 text-[10px] tracking-widest transition-all rounded-sm uppercase">
                        Voir le carnet
                    </button>
                 </a>
               </div>
            </div>

            {/* 2. CARTE BOULANGERIE */}
            <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden flex flex-col">
               <div className="h-32 lg:h-48 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1636906227201-f3ec32645129?q=80&w=687&auto=format&fit=crop" alt="Carnet Boulangerie" className="w-full h-full object-cover opacity-70" />
               </div>
               <div className="p-5 lg:p-8 flex flex-col flex-grow">
                 <h3 className="text-xl font-serif text-white mb-2">Secrets de Boulangerie</h3>
                 <p className="text-gray-400 text-xs mb-4 flex-grow line-clamp-2 lg:line-clamp-none">+60 recettes pour maîtriser le pain et la viennoiserie.</p>
                 <a href="https://alex24.podia.com/carnet-boulangerie" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-white/10 text-white hover:bg-white hover:text-black font-bold py-3 text-[10px] tracking-widest transition-all rounded-sm uppercase">
                        Voir le carnet
                    </button>
                 </a>
               </div>
            </div>

            {/* 3. CARTE VIP (PRIX CORRIGÉ) */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#000] border border-[#D4AF37]/40 rounded-xl overflow-hidden flex flex-col relative shadow-lg">
               <div className="absolute top-3 right-3 bg-[#D4AF37] text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase z-20">
                 Populaire
               </div>
               <div className="p-6 lg:p-8 flex flex-col flex-grow items-center text-center">
                 <Crown size={32} className="text-[#D4AF37] mb-3" />
                 <h3 className="text-2xl font-serif text-white mb-1">Club <span className="text-[#D4AF37]">VIP</span></h3>
                 
                 {/* PRIX OFFICIEL 4.90€ */}
                 <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-white">4.90€</span>
                    <span className="text-gray-400 text-xs">/ mois</span>
                 </div>
                 
                 <p className="text-gray-300 text-[11px] mb-6 leading-relaxed">Accès illimité aux recettes signatures et support direct.</p>
                 
                 {/* REDIRECTION VERS L'INSCRIPTION VIP */}
                 <Link to="/vip" className="w-full mt-auto">
                      <button className="w-full bg-[#D4AF37] text-black hover:bg-white font-bold py-4 text-xs tracking-widest shadow-xl transition-all rounded-sm uppercase">
                          S'abonner
                      </button>
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;