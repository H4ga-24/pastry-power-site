import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Video, PlayCircle, Mail, ChefHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 text-sm font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* COLONNE 1 : MARQUE */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="bg-[#D4AF37] p-2 rounded-full text-black">
                <ChefHat size={20} />
              </div>
              <span className="text-lg font-serif font-bold text-white tracking-widest">PASTRY <span className="text-[#D4AF37]">POWER</span></span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              La référence technique pour les passionnés de pâtisserie. 
              Recettes, chimie alimentaire et savoir-faire professionnel.
            </p>
          </div>

          {/* COLONNE 2 : EXPLORER */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Explorer</h3>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/patisserie" className="hover:text-[#D4AF37] transition-colors">Toutes les Recettes</Link></li>
              <li><Link to="/technologie" className="hover:text-[#D4AF37] transition-colors">Technologie Culinaire</Link></li>
              <li><Link to="/a-propos" className="hover:text-[#D4AF37] transition-colors">Qui suis-je ?</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-[#D4AF37] transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : RÉSEAUX SOCIAUX */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">Suivez-nous</h3>
            <ul className="space-y-4 text-gray-500">
              
              {/* INSTAGRAM */}
              <li>
                <a href="https://www.instagram.com/_pastrypower" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-3">
                  <Instagram size={18} /> Instagram
                </a>
              </li>

              {/* YOUTUBE */}
              <li>
                <a href="https://www.youtube.com/@PastryPowerr" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-3">
                  <Youtube size={18} /> YouTube
                </a>
              </li>

              {/* TIKTOK */}
              <li>
                <a href="https://www.tiktok.com/@pastrypower_" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-3">
                  <Video size={18} /> TikTok
                </a>
              </li>

              {/* DAILYMOTION */}
              <li>
                <a href="https://www.dailymotion.com/pastrypower" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-3">
                  <PlayCircle size={18} /> Dailymotion
                </a>
              </li>

              {/* EMAIL */}
              <li className="pt-4 border-t border-white/10 mt-4">
                <a href="mailto:pastrypower76@gmail.com" className="hover:text-[#D4AF37] transition-colors flex items-center gap-3">
                  <Mail size={18}/> Nous contacter
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs flex flex-col items-center gap-2">
          <p>© {currentYear} Pastry Power. Tous droits réservés.</p>
          <p>Fait avec passion en Normandie.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;