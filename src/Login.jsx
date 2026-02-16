import React, { useState } from 'react';
import { supabase } from './supabase'; 
import { Button } from "@/components/ui/button";
import { Crown, Mail, Lock, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // <--- Importation pour la navigation

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // <--- Initialisation du hook

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Ajout de l'option pour rediriger vers la page VIP après confirmation mail
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: 'https://pastrypower.fr/vip' 
      }
    });
    if (error) setMessage(error.message);
    else setMessage("Vérifie ta boîte mail pour confirmer l'inscription !");
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset message

    // 1. Connexion de base
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    
    if (authError) {
      setMessage(authError.message);
      setLoading(false);
      return;
    }

    // 2. Vérification du statut VIP dans la table 'profiles'
    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('is_vip')
        .eq('id', authData.user.id)
        .single();

      // S'il y a une erreur ou si le profil n'existe pas, on considère qu'il n'est pas VIP
      // et on l'envoie vers la page d'abonnement par sécurité.
      if (profileError || !profile) {
        navigate('/vip'); 
      } else {
        // 3. Redirection intelligente
        if (profile.is_vip === true) {
          navigate('/'); // Si VIP -> Accueil
        } else {
          navigate('/vip'); // Si pas VIP -> Page d'abonnement
        }
      }
    } catch (error) {
      console.error("Erreur de redirection:", error);
      navigate('/vip'); // En cas de pépin, on envoie vers l'offre
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-white/5 p-8 rounded-sm shadow-2xl">
        <div className="text-center mb-8">
          <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-white uppercase tracking-tighter">Pastry Power</h1>
          <p className="text-gray-500 text-sm mt-2 font-light">Rejoignez l'élite de la pâtisserie</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                type="email" 
                placeholder="chef@pastry.com"
                className="w-full bg-[#121212] border border-white/10 rounded-none p-3 pl-10 text-white focus:border-[#D4AF37] outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#121212] border border-white/10 rounded-none p-3 pl-10 text-white focus:border-[#D4AF37] outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {message && <p className="text-xs text-center text-[#D4AF37] bg-[#D4AF37]/10 p-2">{message}</p>}

          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={handleLogin}
              disabled={loading}
              className="bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-none h-12"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Se connecter"}
            </Button>
            <Button 
              onClick={handleSignUp}
              disabled={loading}
              className="bg-[#D4AF37] text-black hover:bg-[#B8962E] rounded-none h-12 font-bold"
            >
              S'inscrire
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;