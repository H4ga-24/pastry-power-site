import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { buffer } from 'micro';

// Webhook Stripe → met à jour profiles.is_premium dans Supabase.
//
// Événements gérés (à cocher dans Stripe > Développeurs > Webhooks > ton endpoint) :
//   - checkout.session.completed       → l'abonné devient Premium
//   - customer.subscription.updated    → réactivation, ou perte d'accès si l'abonnement est annulé / impayé
//   - customer.subscription.deleted    → fin d'abonnement : l'accès Premium est retiré
//   - invoice.payment_failed           → paiement échoué : accès retiré seulement si Stripe a clos l'abonnement

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Statuts Stripe pour lesquels l'accès VIP doit être coupé / maintenu.
const ENDED_STATUSES = ['canceled', 'unpaid', 'incomplete_expired'];
const ACTIVE_STATUSES = ['active', 'trialing'];

async function setPremium(userId, isPremium) {
  const { error } = await supabase
    .from('profiles')
    .update({ is_premium: isPremium })
    .eq('id', userId);
  if (error) throw new Error(`Supabase (is_premium) : ${error.message}`);
  console.log(`✅ Utilisateur ${userId} → is_premium = ${isPremium}`);
}

// Mémorise l'identifiant client Stripe sur le profil. Facultatif : si la colonne
// stripe_customer_id n'existe pas, on continue sans (l'accès Premium ne doit jamais en dépendre).
async function saveCustomerId(userId, customerId) {
  if (!customerId) return;
  const { error } = await supabase
    .from('profiles')
    .update({ stripe_customer_id: customerId })
    .eq('id', userId);
  if (error) console.warn(`stripe_customer_id non enregistré (${error.message})`);
}

// Retrouve l'utilisateur Supabase lié à un abonnement Stripe.
async function findUserId({ customerId, subscriptionId }) {
  // 1. Par l'identifiant client enregistré sur le profil
  if (customerId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId)
      .limit(1);
    if (!error && data?.length) return data[0].id;
  }

  // 2. Par la session de paiement d'origine (elle porte l'id utilisateur dans client_reference_id)
  try {
    if (subscriptionId) {
      const sessions = await stripe.checkout.sessions.list({ subscription: subscriptionId, limit: 1 });
      const ref = sessions.data[0]?.client_reference_id;
      if (ref) return ref;
    }
    if (customerId) {
      const sessions = await stripe.checkout.sessions.list({ customer: customerId, limit: 10 });
      const ref = sessions.data.find((s) => s.client_reference_id)?.client_reference_id;
      if (ref) return ref;
    }
  } catch (err) {
    console.warn(`Recherche de session Stripe impossible : ${err.message}`);
  }

  return null;
}

async function handleSubscriptionChange(subscription) {
  const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer?.id;
  const ended = ENDED_STATUSES.includes(subscription.status);
  const active = ACTIVE_STATUSES.includes(subscription.status);
  if (!ended && !active) return; // past_due, incomplete… : Stripe relance encore le paiement, on ne touche à rien

  const userId = await findUserId({ customerId, subscriptionId: subscription.id });
  if (!userId) {
    console.warn(`Aucun utilisateur trouvé pour l'abonnement ${subscription.id} (client ${customerId})`);
    return;
  }

  // Sécurité : on ne retire l'accès que si le client n'a plus aucun autre abonnement actif.
  if (ended && customerId) {
    const others = await stripe.subscriptions.list({ customer: customerId, status: 'active', limit: 1 });
    if (others.data.some((s) => s.id !== subscription.id)) return;
  }

  await setPremium(userId, active);
}

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
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`⚠️  Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.client_reference_id;
        if (userId) {
          await setPremium(userId, true);
          const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;
          await saveCustomerId(userId, customerId);
        }
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        // Un abonnement supprimé arrive avec le statut "canceled".
        await handleSubscriptionChange(
          event.type === 'customer.subscription.deleted'
            ? { ...subscription, status: 'canceled' }
            : subscription
        );
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const subscriptionId = typeof invoice.subscription === 'string'
          ? invoice.subscription
          : invoice.subscription?.id || invoice.parent?.subscription_details?.subscription;
        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          await handleSubscriptionChange(subscription);
        }
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error(`Erreur de traitement (${event.type}) : ${err.message}`);
    // 500 → Stripe renverra l'événement plus tard
    return res.status(500).send('Error processing event');
  }

  res.status(200).json({ received: true });
}
