import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
};

// On initialise Stripe et Supabase avec les clés secrètes (Côté Serveur uniquement)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Clé Admin (très importante)
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Vérification que c'est bien Stripe qui parle
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`⚠️  Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Si le paiement est validé
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id; // On récupère l'ID envoyé par ton bouton

    if (userId) {
      // On débloque l'utilisateur dans Supabase
      const { error } = await supabase
        .from('profiles')
        .update({ is_premium: true })
        .eq('id', userId);

      if (error) {
        console.error('Erreur Supabase:', error);
        return res.status(500).send('Error updating user');
      }
      console.log(`✅ Succès : L'utilisateur ${userId} est maintenant VIP.`);
    }
  }

  res.status(200).json({ received: true });
}