import React, { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Link } from 'react-router-dom';
import { Lock, Crown, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkPremium(session.user.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) checkPremium(session.user.id);
      else setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkPremium = async (userId) => {
    // 🚨 CORRECTION ICI : On cherche 'is_vip' au lieu de 'is_premium'
    const { data } = await supabase
      .from('profiles')
      .select('is_vip') 
      .eq('id', userId)
      .single();
    
    // On met à jour l'état avec la bonne colonne
    if (data) setIsPremium(data.is_vip);
    setLoading(false);
  };

  if (loading) return <div className="h-screen bg-[#121212] flex items-center justify-center"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;

  // CAS 1 : Pas connecté
  if (!session) {
    return (
      <div className="h-screen bg-[#121212] flex flex-col items-center justify-center text-white p-4">
        <Lock className="w-16 h-16 text-[#D4AF37] mb-6" />
        <h2 className="text-3xl font-serif mb-4">Contenu Réservé</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">Connectez-vous pour accéder aux recettes exclusives.</p>
        <Link to="/login">
          <Button className="bg-[#D4AF37] text-black font-bold px-8 py-6 rounded-none hover:bg-[#b8962e]">Se connecter</Button>
        </Link>
      </div>
    );
  }

  // CAS 2 : Connecté mais PAS VIP
  if (!isPremium) {
    return (
      <div className="h-screen bg-[#121212] flex flex-col items-center justify-center text-white p-4">
        <Crown className="w-16 h-16 text-[#D4AF37] mb-6" />
        <h2 className="text-3xl font-serif mb-4">Devenez Membre VIP</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Cette recette fait partie de la collection Masterclass. Abonnez-vous pour y accéder.
        </p>
        
        {/* Lien Stripe avec ID Utilisateur */}
        <a 
          href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${session?.user?.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-[#D4AF37] text-black font-bold px-8 py-6 text-lg rounded-none hover:bg-[#b8962e] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            S'abonner (4.90€ / mois)
          </Button>
        </a>
        <button onClick={() => supabase.auth.signOut()} className="mt-6 text-sm text-gray-500 hover:text-white underline">
          Se déconnecter
        </button>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;