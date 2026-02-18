import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, Lock, Crown, Loader2, BookOpen } from 'lucide-react'; // Ajout icônes
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";

// Imports internes
import { useAuth } from '../AuthContext'; 
import CookingMode from './CookingMode';
import GlossaryScanner from './GlossaryScanner'; 

// --- LE COMPOSANT PAYWALL (Le masque flou) ---
const PaywallBlur = ({ user }) => (
  <div className="relative mt-8 text-center overflow-hidden">
    {/* Faux texte flouté en arrière-plan */}
    <div className="filter blur-sm select-none opacity-30 space-y-6 px-4 h-64 overflow-hidden pointer-events-none">
      <h3 className="text-xl font-serif text-[#D4AF37]">1. Composition Chimique</h3>
      <p className="text-gray-300">
        La structure moléculaire change dès que la température atteint 60°C, provoquant une coagulation irréversible des protéines...
      </p>
      <h3 className="text-xl font-serif text-[#D4AF37]">2. Réactions de Maillard</h3>
      <p className="text-gray-300">
        Les sucres réducteurs interagissent avec les acides aminés pour créer cette saveur caractéristique de croûte dorée...
      </p>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* Le panneau de blocage par-dessus */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent flex flex-col items-center justify-center pt-10 z-10">
      <Crown className="w-12 h-12 text-[#D4AF37] mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] animate-pulse" />
      <h3 className="text-2xl font-serif text-white mb-2">Contenu Expert</h3>
      <p className="text-gray-400 mb-6 max-w-md px-4 text-sm leading-relaxed">
        Ce cours technique est réservé aux membres. Débloquez l'accès aux schémas, aux explications scientifiques et aux secrets de chef.
      </p>
      
      {/* Bouton d'action intelligent */}
      {!user ? (
         <Link to="/login">
            <Button className="bg-[#D4AF37] text-black font-bold px-8 py-6 rounded-none hover:bg-white transition-all uppercase tracking-widest shadow-lg">
                Se connecter pour lire la suite
            </Button>
         </Link>
      ) : (
         <a 
            href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} 
            target="_blank"
            rel="noopener noreferrer"
         >
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold px-8 py-6 rounded-none hover:scale-105 transition-transform uppercase tracking-widest shadow-lg flex items-center gap-3">
                <Lock size={18} /> Débloquer maintenant
            </Button>
         </a>
      )}
    </div>
  </div>
);

// --- CHARGEMENT DES FICHIERS ---
const modules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, import: 'default' });
const rawModules = import.meta.glob(['../pages/recipes/**/*.jsx', '../pages/technologie/**/*.jsx'], { eager: true, query: '?raw', import: 'default' });

const DynamicPage = () => {
  const { id } = useParams();
  
  // 🚀 Utilisation de AuthContext (Rapide !)
  const { user, isPremium, loading: authLoading } = useAuth();

  const [RecipeComponent, setRecipeComponent] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const recipeContentRef = useRef(null);

  useEffect(() => {
    const loadRecipe = async () => {
      let foundPath = null;
      for (const path in modules) {
        if (path.includes(`/${id}.jsx`)) {
          foundPath = path;
          break;
        }
      }

      if (foundPath) {
        setRecipeComponent(() => modules[foundPath]);
        const rawCode = rawModules[foundPath];
        
        const cleanText = (text) => text ? text.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\(?=\s|\()/g, "").replace(/\\n/g, " ").replace(/\s+/g, " ").trim() : "";
        const extractString = (key, source) => {
          const match = source.match(new RegExp(`${key}:\\s*(["'])([\\s\\S]*?)\\1`));
          return match ? cleanText(match[2]) : null;
        };

        // Détection VIP
        const vipMatch = rawCode.match(/(?:isVip|vip):\s*true/);
        const isRecipeVip = !!vipMatch;

        const isTechFile = foundPath.includes('/technologie/');
        const title = extractString('title', rawCode) || "Contenu";
        const description = extractString('description', rawCode) || "";
        const image = extractString('image', rawCode) || "";

        // Extraction Ingrédients & Étapes (Pour les recettes uniquement)
        let ingredients = [], steps = [];
        if (!isTechFile) {
            const ingMatch = rawCode.match(/const ingredients\s*=\s*\[([\s\S]*?)\];/);
            if (ingMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(ingMatch[1])) !== null) {
                    const name = extractString('name', match[1]);
                    const amount = match[1].match(/amount:\s*(\d+(?:\.\d+)?|["'][^"']*["'])/);
                    const unit = extractString('unit', match[1]);
                    if (name) ingredients.push(amount ? `${name} (${amount[1].replace(/["']/g, "")}${unit ? ' ' + unit : ''})` : name);
                }
            }
            const stepMatch = rawCode.match(/const steps\s*=\s*\[([\s\S]*?)\];/);
            if (stepMatch) {
                const objectRegex = /\{([\s\S]*?)\}/g;
                let match;
                while ((match = objectRegex.exec(stepMatch[1])) !== null) {
                    const t = extractString('title', match[1]);
                    const txt = extractString('text', match[1]);
                    if (txt) steps.push(t ? `${t} : ${txt}` : txt);
                }
            }
            // Fallbacks (Vieux format)
            if (ingredients.length === 0) {
               let liMatch; const r = /<li[^>]*>([\s\S]*?)<\/li>/g;
               while ((liMatch = r.exec(rawCode)) !== null) {
                 const t = liMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                 if (!t.includes('{') && t.length > 2) ingredients.push(cleanText(t));
               }
            }
            if (steps.length === 0) {
               let sMatch; const r = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
               while ((sMatch = r.exec(rawCode)) !== null) steps.push(`${cleanText(sMatch[1])} : ${cleanText(sMatch[2].replace(/<[^>]+>/g, '').trim())}`);
            }
        }

        setExtractedData({ title, description, image, ingredients, steps, isTech: isTechFile, isVip: isRecipeVip });
      }
    };

    loadRecipe();
    window.scrollTo(0, 0);
  }, [id]);

  // SEO JSON-LD
  const generateStructuredData = () => {
    if (!extractedData || extractedData.isTech) return null;
    return JSON.stringify({
      "@context": "https://schema.org/", "@type": "Recipe", "name": extractedData.title, "image": [extractedData.image], "description": extractedData.description, "author": { "@type": "Person", "name": "Pastry Power" }, "recipeIngredient": extractedData.ingredients, "recipeInstructions": extractedData.steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "text": s }))
    });
  };

  if (!RecipeComponent || authLoading) return <div className="text-white text-center mt-20 flex justify-center"><Loader2 className="animate-spin" /></div>;

  // --- LOGIQUE DE RENDU ---

  // CAS 1 : RECETTE VIP (Blocage Total)
  // Si c'est une recette (pas une techno) et qu'elle est VIP et que l'user n'est pas Premium
  if (!extractedData?.isTech && extractedData?.isVip && !isPremium) {
    return (
      <div className="min-h-screen bg-[#121212] pt-20 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 blur-xl scale-110"><img src={extractedData.image} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative z-10 max-w-lg bg-[#1a1a1a]/90 backdrop-blur-md p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl animate-in fade-in zoom-in duration-500">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-2">{extractedData.title}</h2>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">Recette Exclusive VIP</div>
            <p className="text-gray-300 mb-8 leading-relaxed">Cette recette fait partie de la collection <strong>Masterclass</strong>. Abonnez-vous pour y accéder.</p>
            {!user ? (
                <div className="space-y-4">
                    <Link to="/login"><Button className="w-full bg-[#D4AF37] text-black font-bold h-12 hover:bg-white transition-all">Se connecter</Button></Link>
                    <p className="text-sm text-gray-500">Pas encore de compte ? <Link to="/vip" className="text-[#D4AF37] hover:underline">Voir les offres</Link></p>
                </div>
            ) : (
                <div className="space-y-4">
                    <a href={`https://buy.stripe.com/8x214o2df3Mbg05dmL2B203?client_reference_id=${user.id}`} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-bold h-12 shadow-lg hover:scale-105 transition-transform">Débloquer (4.90€ / mois)</Button>
                    </a>
                    <button onClick={signOut} className="text-sm text-gray-500 hover:text-white underline mt-4">Se déconnecter</button>
                </div>
            )}
        </div>
      </div>
    );
  }

  // CAS 2 : TECHNOLOGIE (Blocage Partiel "Paywall Journal")
  if (extractedData?.isTech) {
      // On bloque si c'est VIP et pas payé
      const shouldBlock = extractedData.isVip && !isPremium;

      return (
        <div className="min-h-screen bg-[#121212] pt-24 px-6 pb-20">
            <Helmet>
                <title>{extractedData.title} | Pastry Power</title>
                <meta name="description" content={extractedData.description} />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                {/* 1. Header (Toujours visible) */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        <BookOpen size={14} /> Technologie
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{extractedData.title}</h1>
                    {extractedData.image && (
                        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
                            <img src={extractedData.image} alt={extractedData.title} className="w-full h-full object-cover opacity-80" />
                        </div>
                    )}
                    {/* Intro / Chapeau (Toujours visible) */}
                    <div className="bg-[#1a1a1a] p-8 rounded-xl border-l-4 border-[#D4AF37] text-left">
                        <p className="text-xl text-gray-300 italic font-serif leading-relaxed">
                            {extractedData.description}
                        </p>
                    </div>
                </div>

                {/* 2. Contenu (Masqué ou Visible) */}
                {shouldBlock ? (
                    <PaywallBlur user={user} />
                ) : (
                    <div className="prose prose-invert prose-gold max-w-none prose-lg text-gray-300 leading-loose" ref={recipeContentRef}>
                        <RecipeComponent />
                        {/* Le scanner ne s'active que si le contenu est visible */}
                        <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
                    </div>
                )}
            </div>
        </div>
      );
  }

  // CAS 3 : RECETTE STANDARD (Toujours visible)
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Helmet>
        <title>{extractedData.title} | Pastry Power</title>
        <meta name="description" content={extractedData.description} />
        <script type="application/ld+json">{generateStructuredData()}</script>
      </Helmet>

      <div ref={recipeContentRef}>
        <RecipeComponent />
      </div>

      <GlossaryScanner targetRef={recipeContentRef} trigger={id} />
      
      {extractedData.steps.length > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsCookingMode(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-lg flex items-center gap-3 font-bold uppercase tracking-widest hover:bg-white transition-colors group"
        >
          <PlayCircle size={24} />
          <span className="text-sm">Mode Cuisine</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isCookingMode && <CookingMode recipe={extractedData} onClose={() => setIsCookingMode(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default DynamicPage;