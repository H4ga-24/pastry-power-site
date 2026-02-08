import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 👇 1. On importe le nouveau composant de recherche
import SearchModal from './SearchModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  // 👇 2. Nouvel état pour gérer l'ouverture de la recherche
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Accueil', path: '/' },
    { 
      title: 'Pâtisserie', 
      path: '/patisserie', 
      submenu: [
        { title: '--- BASES ---', path: '/patisserie', isLabel: true },
        { title: 'Biscuits', path: '/patisserie/biscuit' },
        { title: 'Pâtes', path: '/patisserie/pate' },
        { title: 'Crèmes', path: '/patisserie/creme' },
        { title: 'Glaçages', path: '/patisserie/glacage' },
        { title: 'Mousses', path: '/patisserie/mousse' },
        { title: 'Inserts', path: '/patisserie/insert' },
        { title: 'Crémeux', path: '/patisserie/cremeux' },
        { title: '--- GÂTEAUX ---', path: '/patisserie', isLabel: true },
        { title: 'Petits Fours Secs', path: '/patisserie/petit-four' },
        { title: 'Gâteaux de Voyage', path: '/patisserie/voyage' },
        { title: 'Cakes Salés', path: '/patisserie/cake-sale' },
        { title: 'Pâte à Choux', path: '/patisserie/choux' },
        { title: 'Tartes', path: '/patisserie/tarte' },
        { title: 'Entremets', path: '/patisserie/entremets' },
        { title: 'Desserts Régionaux', path: '/patisserie/regional' }
      ]
    },
    { 
      title: 'Technologie', 
      path: '/patisserie/technologie',
      submenu: [
        { title: 'Farines', path: '/patisserie/farine' },
        { title: 'Sucres', path: '/patisserie/sucre' },
        { title: 'Corps Gras', path: '/patisserie/gras' },
        { title: 'Œufs', path: '/patisserie/oeuf' },
        { title: 'Gélifiants', path: '/patisserie/gelifiant' },
        { title: 'Poudres Levantes', path: '/patisserie/levure' },
        { title: 'Chocolat (Tech)', path: '/patisserie/tech-chocolat' }
      ]
    },
    { 
      title: 'Confiserie', 
      path: '/patisserie/confiserie',
      submenu: [
        { title: 'Macarons', path: '/patisserie/macaron' },
        { title: 'Autres Confiseries', path: '/patisserie/confiserie-diverse' }
      ]
    },
    { 
      title: 'Chocolaterie', 
      path: '/patisserie/chocolaterie', 
      submenu: [] 
    },
    { 
      title: 'Cuisine', 
      path: '/patisserie/cuisine',
      submenu: [
        { title: 'Traiteur', path: '/patisserie/traiteur' },
        { title: 'Sauces', path: '/patisserie/sauce' }
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121212]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#D4AF37] p-2 rounded-full text-black group-hover:bg-white transition-colors duration-500">
              <ChefHat size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white tracking-widest group-hover:text-[#D4AF37] transition-colors">PASTRY</span>
              <span className="text-[10px] text-[#D4AF37] tracking-[0.3em] uppercase group-hover:text-white transition-colors">POWER</span>
            </div>
          </Link>

          {/* MENU BUREAU */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  to={item.path} 
                  className={`text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-1 py-2
                    ${location.pathname.includes(item.path) && item.path !== '/' ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {item.title}
                  {item.submenu && item.submenu.length > 0 && <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />}
                </Link>

                {/* SOUS-MENU */}
                {item.submenu && item.submenu.length > 0 && (
                  <AnimatePresence>
                    {activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                      >
                        <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-lg shadow-2xl overflow-hidden p-2 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
                          {item.submenu.map((sub, subIndex) => (
                            sub.isLabel ? 
                            <div key={subIndex} className="px-4 py-2 text-[10px] text-[#D4AF37] font-bold border-b border-white/10 mt-2 mb-1 text-center bg-white/5">{sub.title}</div>
                            :
                            <Link 
                              key={subIndex} 
                              to={sub.path}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-[#D4AF37] hover:bg-white/5 rounded transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* ICONES & MOBILE */}
          <div className="flex items-center gap-4">
            
            {/* 👇 3. LE BOUTON RECHERCHE ACTIVE */}
            <button 
              className="text-white hover:text-[#D4AF37] transition-colors p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>

            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE (Reste inchangé) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-[#121212] z-40 flex flex-col pt-24 px-6 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-8 pb-10">
                {navItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3 border-b border-white/5 pb-4">
                    <Link 
                      to={item.path} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-serif text-white hover:text-[#D4AF37]"
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="flex flex-col gap-3 pl-4 border-l border-[#D4AF37]/20">
                        {item.submenu.map((sub, subIndex) => (
                          !sub.isLabel &&
                          <Link 
                            key={subIndex} 
                            to={sub.path} 
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-gray-500 uppercase tracking-widest"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 👇 4. LE MODAL DE RECHERCHE EST AJOUTÉ ICI */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;