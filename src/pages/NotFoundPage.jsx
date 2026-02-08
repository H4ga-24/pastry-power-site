import React from 'react';
import { Link } from 'react-router-dom';
import { CloudOff, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-center px-6">
      <div className="bg-[#1a1a1a] p-12 rounded-2xl border border-white/5 shadow-2xl max-w-lg w-full">
        <CloudOff size={80} className="text-[#D4AF37] mx-auto mb-8 opacity-80" />
        
        <h1 className="text-6xl font-serif text-white mb-4">404</h1>
        <h2 className="text-2xl text-[#D4AF37] font-bold uppercase tracking-widest mb-6">
          Oups, cette recette a brûlé !
        </h2>
        
        <p className="text-gray-400 mb-10 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée dans un autre four.
        </p>

        <Link to="/">
          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-white transition-all w-full flex items-center justify-center gap-3">
            <Home size={20} />
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;