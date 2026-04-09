import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Scale, Lightbulb, Users, Minus, Plus, Utensils, Quote, Play, Pause, RotateCcw, Timer } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CookingMode from './CookingMode';

const parseCookTime = (timeStr) => {
  if (!timeStr) return 0;
  const str = timeStr.toLowerCase().trim();
  let minutes = 0;
  if (str.includes('h')) {
    const parts = str.split('h');
    minutes += (parseInt(parts[0]) || 0) * 60;
    const mins = parts[1].replace(/[^0-9]/g, '');
    if (mins) minutes += parseInt(mins);
  } else if (str.includes('min')) {
    minutes += parseInt(str.replace(/[^0-9]/g, '')) || 0;
  }
  return minutes * 60;
};

const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const SITE_URL = 'https://pastrypower.fr';

const RecipeLayout = ({ recipe }) => {
  const [servings, setServings] = useState(recipe?.baseServings || 1);
  const [showCookingMode, setShowCookingMode] = useState(false);

  const initialTime = parseCookTime(recipe?.cookTime);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(parseCookTime(recipe?.cookTime));
    setIsTimerRunning(false);
  }, [recipe?.cookTime]);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(initialTime);
  };

  const updateServings = (change) => {
    const newServings = servings + change;
    if (newServings >= 1) setServings(newServings);
  };

  const scaleIngredient = (amount, base) => {
    if (!amount || isNaN(amount)) return amount;
    const scaled = (amount * servings) / base;
    return Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace('.0', '');
  };

  if (!recipe) return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
      Chargement...
    </div>
  );

  const pageUrl = `${SITE_URL}/recipe/${recipe.id}`;

  // --- JSON-LD Schema.org Recipe ---
  // Permet d'apparaître dans le carrousel de recettes Google
  const schemaRecipe = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description || '',
    image: recipe.image ? [recipe.image] : [],
    author: {
      '@type': 'Organization',
      name: 'Pastry Power',
      url: SITE_URL,
    },
    url: pageUrl,
    ...(recipe.prepTime && {
      prepTime: `PT${recipe.prepTime.replace(/\s/g, '').toUpperCase()}`,
    }),
    ...(recipe.cookTime && {
      cookTime: `PT${recipe.cookTime.replace(/\s/g, '').toUpperCase()}`,
    }),
    recipeCategory: Array.isArray(recipe.subCategory)
      ? recipe.subCategory[0]
      : (recipe.subCategory || recipe.category || 'Pâtisserie'),
    recipeCuisine: 'Française',
    recipeIngredient: (recipe.ingredients || []).map(ing =>
      `${ing.amount || ''} ${ing.unit || ''} ${ing.name}`.trim()
    ),
    recipeInstructions: (recipe.steps || []).map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title || `Étape ${i + 1}`,
      text: step.text || '',
    })),
    keywords: [
      recipe.category,
      ...(Array.isArray(recipe.subCategory) ? recipe.subCategory : [recipe.subCategory]),
      'pâtisserie',
      'recette',
    ].filter(Boolean).join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{recipe.title} - Pastry Power</title>
        <meta name="description" content={recipe.description} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph — aperçu sur WhatsApp, Facebook, Instagram */}
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={`${recipe.title} - Pastry Power`} />
        <meta property="og:description" content={recipe.description} />
        <meta property="og:url"         content={pageUrl} />
        <meta property="og:site_name"   content="Pastry Power" />
        <meta property="og:locale"      content="fr_FR" />
        {recipe.image && <meta property="og:image" content={recipe.image} />}

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={`${recipe.title} - Pastry Power`} />
        <meta name="twitter:description" content={recipe.description} />
        {recipe.image && <meta name="twitter:image" content={recipe.image} />}

        {/* JSON-LD Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaRecipe)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans pt-20">

        {/* HERO */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent z-10"></div>
          {recipe.image && (
            <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4 block animate-fade-in">
                {recipe.category} • {Array.isArray(recipe.subCategory) ? recipe.subCategory.join(" / ") : recipe.subCategory}
              </span>
              <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">{recipe.title}</h1>

              <div className="flex flex-wrap items-center gap-8 text-sm tracking-widest font-medium text-white/90 mb-8">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipe.prepTime} PREP</span></div>
                {recipe.cookTime && <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#D4AF37]" /><span>{recipe.cookTime} CUISSON</span></div>}
                {recipe.restTime && <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#D4AF37]" /><span>{recipe.restTime} REPOS</span></div>}
                <div className="flex items-center gap-3"><Scale className="w-5 h-5 text-[#D4AF37]" /><span>{recipe.difficulty}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENU */}
        <div className="container mx-auto px-4 max-w-6xl pb-24 mt-16">
          <div className="grid md:grid-cols-12 gap-12">

            {/* INGRÉDIENTS */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5 sticky top-24">

                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <Users className="w-5 h-5" />
                    <span className="font-serif text-lg">Portions</span>
                  </div>
                  <div className="flex items-center gap-4 bg-[#252525] rounded-full px-2 py-1">
                    <Button variant="ghost" size="icon" onClick={() => updateServings(-1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full"><Minus className="w-4 h-4" /></Button>
                    <span className="font-bold text-lg min-w-[2ch] text-center">{servings}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateServings(1)} className="text-white hover:text-[#D4AF37] h-8 w-8 rounded-full"><Plus className="w-4 h-4" /></Button>
                  </div>
                </div>

                <h3 className="text-xl font-serif text-white mb-6">Ingrédients</h3>
                <ul className="space-y-4">
                  {recipe.ingredients && recipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex flex-col text-sm pb-2 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-light">{ing.name}</span>
                        <span className="text-[#D4AF37] font-medium">
                          {scaleIngredient(ing.amount, recipe.baseServings || 1)} {ing.unit}
                        </span>
                      </div>
                      {ing.note && <span className="text-xs text-gray-500 italic mt-1">{ing.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ÉTAPES */}
            <div className="md:col-span-8">

              {initialTime > 0 && (
                <div className={`mb-12 p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 ${isTimerRunning ? 'bg-[#D4AF37]/10 border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'bg-[#1a1a1a] border-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${isTimerRunning ? 'bg-[#D4AF37] text-black animate-pulse' : 'bg-gray-800 text-[#D4AF37]'}`}>
                      <Timer className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg">Cuisson</h4>
                      <p className="text-gray-400 text-sm">Précision recommandée</p>
                    </div>
                  </div>

                  <div className={`font-mono text-5xl tracking-widest font-light ${timeLeft === 0 ? 'text-red-500' : 'text-[#D4AF37]'}`}>
                    {formatTime(timeLeft)}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleTimer}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white"
                      title={isTimerRunning ? "Mettre en pause" : "Démarrer"}
                    >
                      {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={resetTimer}
                      className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white"
                      title="Réinitialiser"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-12 mb-16">
                {recipe.steps && recipe.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl flex-shrink-0 group-hover:border-[#D4AF37] transition-colors">{i + 1}</div>
                    <div>
                      <h3 className="text-white text-xl mb-3 font-serif">{step.title}</h3>
                      <p className="text-gray-400 font-light text-lg leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Tabs defaultValue="conseils" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-[#1a1a1a] p-1 h-auto rounded-none border border-white/5">
                    <TabsTrigger value="conseils" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Conseils</TabsTrigger>
                    {recipe.chefQuote && <TabsTrigger value="chef" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Le Chef</TabsTrigger>}
                    {recipe.equipment && <TabsTrigger value="ustensiles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-gray-400 py-3 rounded-none uppercase tracking-widest text-xs font-bold transition-all">Matériel</TabsTrigger>}
                  </TabsList>

                  <div className="bg-[#1a1a1a] border-x border-b border-white/5 p-8 mt-0 min-h-[200px]">
                    <TabsContent value="conseils" className="mt-0 focus-visible:outline-none">
                      <div className="flex items-start gap-4">
                        <Lightbulb className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <div className="space-y-4">
                          <h4 className="text-lg font-serif text-white">Astuces de réussite</h4>
                          {Array.isArray(recipe.advices) ? (
                            <ul className="space-y-3 text-gray-400 leading-relaxed list-disc pl-5">
                              {recipe.advices.map((adv, idx) => <li key={idx}>{adv}</li>)}
                            </ul>
                          ) : (
                            <p className="text-gray-400 leading-relaxed">{recipe.advices}</p>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    {recipe.chefQuote && (
                      <TabsContent value="chef" className="mt-0 focus-visible:outline-none">
                        <div className="flex items-start gap-4">
                          <Quote className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                          <div className="space-y-4">
                            <h4 className="text-lg font-serif text-white">L&apos;avis du Chef</h4>
                            <p className="text-gray-400 leading-relaxed italic">&quot;{recipe.chefQuote}&quot;</p>
                          </div>
                        </div>
                      </TabsContent>
                    )}

                    {recipe.equipment && (
                      <TabsContent value="ustensiles" className="mt-0 focus-visible:outline-none">
                        <div className="flex items-start gap-4">
                          <Utensils className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                          <div className="space-y-4">
                            <h4 className="text-lg font-serif text-white">Matériel recommandé</h4>
                            <ul className="grid grid-cols-2 gap-2 text-gray-400">
                              {recipe.equipment?.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>{item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    )}
                  </div>
                </Tabs>
              </div>

            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCookingMode(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#D4AF37] text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 flex items-center gap-3 shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
      >
        <Play className="w-5 h-5" fill="currentColor" />
        Mode Cuisine
      </button>

      {showCookingMode && (
        <CookingMode recipe={recipe} servings={servings} onClose={() => setShowCookingMode(false)} />
      )}
    </>
  );
};

export default RecipeLayout;