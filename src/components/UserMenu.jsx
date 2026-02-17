import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Crown, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from '../AuthContext'; // 👈 UTILISATION DU HOOK

const UserMenu = () => {
  const { user, isPremium, signOut } = useAuth(); // 👈 SIMPLE ET RAPIDE
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) {
    return (
      <div className="flex gap-4">
        <Button onClick={() => navigate('/login')} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
          Se connecter
        </Button>
        <Button onClick={() => navigate('/login')} className="bg-[#D4AF37] text-black hover:bg-[#B8962E] font-bold">
          S'inscrire
        </Button>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white hover:bg-[#2a2a2a]">
        <User className="w-4 h-4" />
        Mon Compte
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#1a1a1a] border border-[#D4AF37]/30 shadow-xl rounded-md p-6 z-50">
          <div className="text-center border-b border-white/10 pb-4 mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-2">
              <User className="text-[#D4AF37]" />
            </div>
            <p className="text-sm text-gray-400 truncate">{user.email}</p>
          </div>

          <div className="mb-6 text-center">
            {isPremium ? ( // ✅ CORRECTION : isPremium
              <div className="bg-[#D4AF37]/20 text-[#D4AF37] p-3 rounded border border-[#D4AF37] flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider">Membre VIP</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-gray-800 text-gray-400 p-2 rounded text-xs border border-gray-700">
                  Membre Standard
                </div>
                <Button onClick={() => { setIsOpen(false); navigate('/vip'); }} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Devenir VIP
                </Button>
              </div>
            )}
          </div>

          <Button onClick={() => { signOut(); setIsOpen(false); navigate('/'); }} className="w-full bg-red-900/20 text-red-500 hover:bg-red-900/40 border border-red-900/50 flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Se déconnecter
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;