import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Crown, Lock, Loader2, Eye, EyeOff } from 'lucide-react';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    const type = hashParams.get('type');

    if (type === 'recovery' && accessToken) {
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ error }) => {
        if (error) setMessage('Lien invalide ou expiré. Refaites une demande.');
      });
    } else {
      setMessage('Lien invalide ou expiré. Refaites une demande.');
    }
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setMessage('Le mot de passe doit faire au moins 6 caractères.');
      return;
    }
    if (password !== confirm) {
      setMessage('Les mots de passe ne correspondent pas.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setMessage(error.message);
    else {
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-white/5 p-8 rounded-sm shadow-2xl">
        <div className="text-center mb-8">
          <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h1 className="text-3xl font-serif text-white uppercase tracking-tighter">Pastry Power</h1>
          <p className="text-gray-500 text-sm mt-2 font-light">Nouveau mot de passe</p>
        </div>

        {success ? (
          <div className="text-center space-y-4">
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-6 rounded-sm">
              <p className="text-white text-sm">Mot de passe mis à jour avec succès !</p>
              <p className="text-gray-500 text-xs mt-2">Redirection en cours…</p>
            </div>
          </div>
        ) : (
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Nouveau mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-[#121212] border border-white/10 rounded-none p-3 pl-10 pr-10 text-white focus:border-[#D4AF37] outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-[#D4AF37] transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Confirmer le mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-[#121212] border border-white/10 rounded-none p-3 pl-10 text-white focus:border-[#D4AF37] outline-none transition-all"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>

            {message && <p className="text-xs text-center text-[#D4AF37] bg-[#D4AF37]/10 p-2">{message}</p>}

            <Button
              onClick={handleReset}
              disabled={loading}
              className="w-full bg-[#D4AF37] text-black hover:bg-[#B8962E] rounded-none h-12 font-bold"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Mettre à jour le mot de passe"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
