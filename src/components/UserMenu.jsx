import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Crown, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const UserMenu = () => {
  const [user, setUser] = useState(null);
  const [isVip, setIsVip] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Pour ouvrir/fermer la fenêtre
  const navigate = useNavigate();

  // 1. On vérifie si l'utilisateur est connecté et son statut
  useEffect(() => {
    // Récupérer la session actuelle
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkVipStatus(session.user.id);
    });

    // Écouter les changements (connexion/déconnexion)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) checkVipStatus(session.user.id);
      else setIsVip(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Fonction pour vérifier si VIP dans la table 'profiles'
  const checkVipStatus = async (userId) => {
    const { data } = await supabase
      .from('profiles')
      .select('is_vip')
      .eq('id', userId)
      .single();
    
    if (data) setIsVip(data.is_vip);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
    navigate('/'); // Retour à l'accueil
  };

  // --- RENDU VISUEL ---

  // CAS 1 : L'utilisateur n'est PAS connecté
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
          onClick={() => navigate('/login')} // Ou une route /register si tu en as une distincte
          className="bg-[#D4AF37] text-black hover:bg-[#B8962E] font-bold"
        >
          S'inscrire
        </Button>
      </div>
    );
  }

  // CAS 2 : L'utilisateur EST connecté
  return (
    <div className="relative">
      {/* Bouton Mon Compte */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white hover:bg-[#2a2a2a]"
      >
        <User className="w-4 h-4" />
        Mon Compte
      </Button>

      {/* La fenêtre (Modale) qui s'ouvre */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-[#1a1a1a] border border-[#D4AF37]/30 shadow-xl rounded-md p-6 z-50">
          
          {/* En-tête avec Email */}
          <div className="text-center border-b border-white/10 pb-4 mb-4">
            <div className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center mx-auto mb-2">
              <User className="text-[#D4AF37]" />
            </div>
            <p className="text-sm text-gray-400 truncate">{user.email}</p>
          </div>

          {/* Affichage du Statut */}
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

          {/* Bouton Déconnexion */}
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