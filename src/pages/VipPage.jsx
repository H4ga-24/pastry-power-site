import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Crown, Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const VipPage = () => {
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  // --- TES LIENS STRIPE ---
  const STRIPE_MONTHLY = "https://buy.stripe.com/8x214o2df3Mbg05dmL2B203"; // Ton lien actuel
  const STRIPE_ANNUAL = "https://buy.stripe.com/bJeaEY5pr1E35lrgyX2B204"; // 👈 N'oublie pas de coller ton lien annuel ici !

  // Fonction pour générer le bon lien avec l'ID utilisateur
  const getLink = (url) => {
    return session ? `${url}?client_reference_id=${session.user.id}` : url;
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-4">
      
      {/* 1. EN-TÊTE */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif">
          Devenez <span className="text-[#D4AF37]">Membre VIP</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Accédez à l'intégralité des recettes techniques et au support direct avec le chef.
        </p>
      </div>

      {/* 2. LES CARTES (Comparatif) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* --- CARTE MENSUELLE (Standard) --- */}
        <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl flex flex-col hover:border-[#D4AF37]/50 transition-colors">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-300 mb-2">Mensuel</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">4.90€</span>
              <span className="text-gray-500">/mois</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">Flexible, sans engagement.</p>
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-gray-400 text-sm"><Check size={16} /> Accès illimité</li>
            <li className="flex items-center gap-3 text-gray-400 text-sm"><Check size={16} /> Support prioritaire</li>
            <li className="flex items-center gap-3 text-gray-400 text-sm"><Check size={16} /> Nouveautés mensuelles</li>
          </ul>

          <a href={getLink(STRIPE_MONTHLY)} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold py-4 rounded transition-all uppercase tracking-widest text-sm">
              Choisir le Mensuel
            </button>
          </a>
        </div>

        {/* --- CARTE ANNUELLE (Mise en avant) --- */}
        <div className="bg-[#1a1a1a] border-2 border-[#D4AF37] p-8 rounded-xl flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] transform md:-translate-y-4">
          
          {/* BADGE PROMO */}
          <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-8 py-1 rotate-45 translate-x-8 translate-y-4 uppercase tracking-widest shadow-md">
            -15% Économisé
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
              <Crown size={20} className="fill-[#D4AF37]" />
              <h3 className="text-xl font-bold">Annuel</h3>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">50€</span>
              <span className="text-gray-500">/an</span>
            </div>
            {/* Le fameux argument de vente */}
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 border border-green-900/50 text-xs font-bold px-3 py-1.5 rounded-full mt-3">
               <Star size={12} className="fill-current" /> 2 MOIS OFFERTS
            </div>
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-[#D4AF37]" /> Tout du plan mensuel</li>
            {/* Ligne modifiée ici */}
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-[#D4AF37]" /> Paiement unique (Simplicité)</li>
            <li className="flex items-center gap-3 text-white text-sm"><Check size={16} className="text-[#D4AF37]" /> Zéro publicité</li>
          </ul>

          <a href={getLink(STRIPE_ANNUAL)} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#D4AF37] hover:bg-white hover:text-black text-black font-bold py-4 rounded transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg">
              S'abonner maintenant <ArrowRight size={16} />
            </button>
          </a>
        </div>

      </div>

      {/* 3. LIEN DE CONNEXION */}
      {!session && (
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Déjà un compte ? <Link to="/login" className="text-[#D4AF37] underline hover:text-white transition-colors">Connectez-vous</Link> pour lier votre abonnement.
          </p>
        </div>
      )}
    </div>
  );
};

export default VipPage;