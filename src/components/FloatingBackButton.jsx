import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FloatingBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🚫 On ne l'affiche PAS sur la page d'accueil
  if (location.pathname === '/') return null;

  // 🚫 On ne l'affiche PAS sur les pages principales de menu (optionnel, supprime ces lignes si tu le veux partout)
  // const mainPages = ['/patisserie', '/technologie', '/confiserie', '/chocolaterie', '/cuisine'];
  // if (mainPages.includes(location.pathname)) return null;

  return (
    // Ce bouton flotte en bas à gauche de l'écran (ou en haut à gauche sous le menu)
    <div className="fixed bottom-8 left-8 z-50 print:hidden animate-in fade-in duration-500">
      <Button 
        onClick={() => navigate(-1)}
        className="bg-[#D4AF37] hover:bg-white hover:text-black text-black font-bold rounded-full w-12 h-12 p-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center transition-all hover:scale-110"
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingBackButton;