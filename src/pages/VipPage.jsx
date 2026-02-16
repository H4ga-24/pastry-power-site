import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Crown, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VipPage = () => {
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  // Ton lien Stripe
  const stripeBaseUrl = "https://buy.stripe.com/8x214o2df3Mbg05dmL2B203"; // Vérifie que c'est le bon lien
  const finalStripeUrl = session 
    ? `${stripeBaseUrl}?client_reference_id=${session.user.id}`
    : stripeBaseUrl;

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texte vendeur */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif">
            Devenez <span className="text-[#D4AF37]">Membre VIP</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Accédez à l'intégralité des recettes techniques, aux masterclasses et au support direct avec le chef.
          </p>
          <ul className="space-y-3">
            {["Accès illimité aux recettes", "Support prioritaire", "Nouveautés chaque mois"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <Check size={16} className="text-[#D4AF37]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Carte d'abonnement */}
        <div className="bg-[#1a1a1a] border border-[#D4AF37]/30 p-8 rounded-lg text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1">POPULAIRE</div>
          <Crown size={48} className="mx-auto text-[#D4AF37] mb-4" />
          <h3 className="text-2xl font-serif mb-2">Pâtisserie Pro</h3>
          <div className="text-4xl font-bold mb-6">4.90€ <span className="text-sm font-normal text-gray-500">/mois</span></div>
          
          <a href={finalStripeUrl} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#D4AF37] hover:bg-white hover:text-black text-black font-bold py-4 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              S'abonner maintenant <ArrowRight size={16} />
            </button>
          </a>
          
          {!session && (
            <p className="mt-4 text-xs text-gray-500">
              Déjà un compte ? <Link to="/login" className="text-[#D4AF37] underline">Connectez-vous</Link>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default VipPage;