import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Crown, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const UserMenu = () => {
  const [user, setUser] = useState(null);
  const [isVip, setIsVip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  // 1. On crée une référence pour savoir où est le menu
  const menuRef = useRef(null);

  // 2. Gestion du "Clic en dehors" pour fermer
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si le menu est ouvert ET que le clic est en dehors de notre zone (ref)
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // On ajoute l'écouteur d'événement
    document.addEventListener('mousedown', handleClickOutside);
    
    // Nettoyage quand le composant disparaît
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkVipStatus(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) checkVipStatus(session.user.id);
      else setIsVip(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkVipStatus = async (userId) => {
    // 🚨 CORRECTION ICI : On cherche la bonne colonne 'is_premium'
    const { data } = await supabase
      .from('profiles')
      .select('is_premium') 
      .eq('id', userId)
      .single();
    
    // On met à jour l'état (si data.is_premium est true, isVip devient true)
    if (data) setIsVip(data.is_premium);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
    navigate('/');
  };

  if (!user) {
    return (
      <div className="flex gap-4">
        <Button 
          onClick={() => navigate('/login')}
          className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          Se connecter
        </Button>
        <Button 
          onClick={() => navigate('/login')}
          className="bg-[#D4AF37] text-black hover:bg-[#B8962E] font-bold"
        >
          S'inscrire
        </Button>
      </div>
    );
  }

  return (
    // 3. On attache la référence (ref) au conteneur principal
    <div className="relative" ref={menuRef}>
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white hover:bg-[#2a2a2a]"
      >
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
            {isVip ? (
              <div className="bg-[#D4AF37]/20 text-[#D4AF37] p-3 rounded border border-[#D4AF37] flex items-center justify-center gap-2">
                <Crown className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider">Membre VIP</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-gray-800 text-gray-400 p-2 rounded text-xs border border-gray-700">
                  Membre Standard
                </div>
                <p className="text-xs text-gray-300">Passez au niveau supérieur.</p>
                <Button 
                  onClick={() => { setIsOpen(false); navigate('/vip'); }}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Devenir VIP
                </Button>
              </div>
            )}
          </div>

          <Button 
            onClick={handleLogout}
            className="w-full bg-red-900/20 text-red-500 hover:bg-red-900/40 border border-red-900/50 flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Se déconnecter
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;