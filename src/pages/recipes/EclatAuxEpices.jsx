import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChefHat, Users, Printer, Scale, ArrowLeft, Utensils, Info, AlertCircle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const EclatAuxEpices = () => {
  const { toast } = useToast();
  const [scale, setScale] = useState(1);
  const baseYield = 15; // parts (approximate for the frame size)

  const handlePrint = () => {
    window.print();
  };

  const handleScaleChange = (newScale) => {
    setScale(newScale);
    toast({
      title: "Quantités mises à jour",
      description: `Les ingrédients ont été recalculés pour ${Math.round(baseYield * newScale)} parts.`,
    });
  };

  // Helper to format quantity
  const q = (amount, unit = '') => {
    if (!amount) return '';
    const scaledAmount = Math.round(amount * scale * 10) / 10; // Round to 1 decimal
    return `${scaledAmount}${unit ? ' ' + unit : ''}`;
  };

  return (
    <>
      <Helmet>
        <title>L'Éclat aux Épices - Recette Exclusive - Maison Dorée</title>
        <meta name="description" content="Recette de l'entremets Éclat aux Épices : Biscuit chocolat épicé, coulis de poires, bavaroise pain d'épices et velours lait." />
      </Helmet>

      <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#121212] z-10" />
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
             <img 
              src="https://i.imgur.com/hCaQ2m2.png" 
              alt="L'Éclat aux Épices" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 px-4 md:px-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/patisserie/gateaux/entremets" className="inline-flex items-center text-white/80 hover:text-[#D4AF37] transition-colors mb-6 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux Entremets
              </Link>
              <div className="flex gap-3 mb-4">
                <Badge variant="default" className="bg-[#D4AF37] hover:bg-[#b5952f] text-black">NOUVEAU</Badge>
                <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37]">HIVER</Badge>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight">
                L'Éclat aux <span className="text-[#D4AF37]">Épices</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                Une harmonie hivernale parfaite alliant la douceur de la poire à la chaleur du pain d'épices, enveloppée dans un velours chocolat au lait.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl -mt-10 relative z-30">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 md:p-8 shadow-2xl flex flex-wrap justify-between items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Temps de préparation</p>
                <p className="text-xl font-medium">4H 00</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                <ChefHat className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Difficulté</p>
                <p className="text-xl font-medium">AVANCÉ</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                <Users className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Rendement</p>
                <p className="text-xl font-medium">1 cadre 37x28,5 cm</p>
              </div>
            </div>

            <div className="flex gap-3">
               <Button variant="outline" size="icon" onClick={handlePrint} className="border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                <Printer className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="ingredients" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-white/10 rounded-none h-auto p-0 mb-8">
                  <TabsTrigger value="ingredients" className="data-[state=active]:bg-transparent data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none px-6 py-4 text-lg font-light tracking-wide">
                    Ingrédients
                  </TabsTrigger>
                  <TabsTrigger value="preparation" className="data-[state=active]:bg-transparent data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none px-6 py-4 text-lg font-light tracking-wide">
                    Préparation
                  </TabsTrigger>
                  <TabsTrigger value="astuces" className="data-[state=active]:bg-transparent data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none px-6 py-4 text-lg font-light tracking-wide">
                    Astuces du Chef
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="ingredients" className="space-y-8">
                   <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 mb-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2 text-[#D4AF37]">
                          <Calculator className="w-5 h-5" />
                          <span className="font-medium">Calculateur de quantités</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 p-1 rounded-lg">
                          <button 
                            onClick={() => handleScaleChange(Math.max(0.5, scale - 0.5))}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded text-xl"
                          >-</button>
                          <span className="w-12 text-center font-mono">{scale}x</span>
                          <button 
                            onClick={() => handleScaleChange(scale + 0.5)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded text-xl"
                          >+</button>
                        </div>
                      </div>
                   </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 border-b border-white/10 pb-4">1. Biscuit Chocolat Épices</h3>
                      <ul className="space-y-3 font-light text-gray-300">
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Œufs entiers</span> <span>{q(250, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Sucre inverti</span> <span>{q(90, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Sucre semoule</span> <span>{q(125, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Poudre d'amandes</span> <span>{q(75, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Farine T55</span> <span>{q(120, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Cacao poudre</span> <span>{q(25, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Levure chimique</span> <span>{q(8, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Crème liquide 35%</span> <span>{q(120, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Beurre fondu</span> <span>{q(80, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Mélange 4 épices</span> <span>{q(5, 'g')}</span></li>
                        <li className="flex justify-between pb-2 text-[#D4AF37]/80 italic text-sm"><span>Chocolat noir 70% (pour chablonner)</span> <span>QS</span></li>
                      </ul>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 border-b border-white/10 pb-4">2. Coulis de Poires</h3>
                      <ul className="space-y-3 font-light text-gray-300">
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Purée de poire Williams</span> <span>{q(500, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Sucre semoule</span> <span>{q(50, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Pectine NH</span> <span>{q(8, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Jus de citron jaune</span> <span>{q(10, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Gélatine poudre (200 bloom)</span> <span>{q(4, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Eau d'hydratation</span> <span>{q(24, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Poires au sirop (dés)</span> <span>{q(200, 'g')}</span></li>
                      </ul>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 border-b border-white/10 pb-4">3. Bavaroise Pain d'Épices</h3>
                      <ul className="space-y-3 font-light text-gray-300">
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Lait entier</span> <span>{q(250, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Jaunes d'œufs</span> <span>{q(60, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Sucre semoule</span> <span>{q(30, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Mélange pain d'épices</span> <span>{q(8, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Gélatine poudre (200 bloom)</span> <span>{q(10, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Eau d'hydratation</span> <span>{q(60, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Chocolat blanc</span> <span>{q(90, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Crème fouettée 35%</span> <span>{q(450, 'g')}</span></li>
                      </ul>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 border-b border-white/10 pb-4">4. Appareil Velours Lait</h3>
                      <ul className="space-y-3 font-light text-gray-300">
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Chocolat lait 40%</span> <span>{q(250, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Beurre de cacao</span> <span>{q(250, 'g')}</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Colorant liposoluble (optionnel)</span> <span>QS</span></li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preparation" className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative pl-8 border-l border-[#D4AF37]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-sm">1</div>
                    <h3 className="text-2xl font-serif text-white mb-4">Biscuit Chocolat aux Épices</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                      <p>Dans la cuve du batteur muni du fouet, monter les œufs entiers avec le sucre inverti et le sucre semoule jusqu'à obtenir un mélange ruban, bien mousseux et blanchi.</p>
                      <p>Tamiser ensemble la poudre d'amandes, la farine, le cacao poudre, la levure chimique et le mélange 4 épices. Incorporer délicatement ces poudres au mélange d'œufs à l'aide d'une maryse.</p>
                      <p>Prélever une petite partie de l'appareil et la mélanger au beurre fondu tiède (45°C) et à la crème liquide pour faciliter l'incorporation. Reverser ce mélange dans la masse principale et mélanger délicatement.</p>
                      <p>Couler sur une plaque recouverte d'un tapis silicone ou papier cuisson (pour un cadre de 37x28,5 cm). Cuire au four ventilé à 170°C pendant environ 12 à 15 minutes. Laisser refroidir sur grille.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-8 border-l border-[#D4AF37]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-sm">2</div>
                    <h3 className="text-2xl font-serif text-white mb-4">Coulis de Poires</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                      <p>Hydrater la gélatine dans l'eau froide. Mélanger le sucre semoule avec la pectine NH.</p>
                      <p>Dans une casserole, chauffer la purée de poire à 40°C. Ajouter le mélange sucre-pectine en pluie tout en fouettant. Porter à ébullition et maintenir 1 minute.</p>
                      <p>Hors du feu, ajouter le jus de citron puis la masse gélatine fondue. Incorporer les dés de poires au sirop égouttés.</p>
                      <p>Couler dans un cadre de 35x26,5 cm (légèrement plus petit que l'entremets final pour l'insert). Surgeler.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-8 border-l border-[#D4AF37]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-sm">3</div>
                    <h3 className="text-2xl font-serif text-white mb-4">Bavaroise Pain d'Épices</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                      <p>Réaliser une crème anglaise : chauffer le lait avec les épices à pain d'épices. Blanchir les jaunes avec le sucre. Verser le lait chaud sur les jaunes, remettre en casserole et cuire à la nappe (82/84°C).</p>
                      <p>Hors du feu, ajouter la gélatine hydratée et essorée. Verser sur le chocolat blanc et mixer pour émulsionner. Laisser refroidir à 25/30°C.</p>
                      <p>Monter la crème liquide en chantilly mousseuse (pas trop ferme). Incorporer délicatement la crème fouettée à la crème anglaise collée refroidie.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative pl-8 border-l border-[#D4AF37]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-sm">4</div>
                    <h3 className="text-2xl font-serif text-white mb-4">Appareil Velours Lait</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                      <p>Fondre le chocolat au lait et le beurre de cacao séparément à 45°C.</p>
                      <p>Mélanger les deux masses. Ajouter le colorant si désiré et mixer. Utiliser au pistolet à environ 35/40°C.</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative pl-8 border-l border-[#D4AF37]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold text-sm">5</div>
                    <h3 className="text-2xl font-serif text-white mb-4">Montage et Finition</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                      <p>Chablonner le biscuit chocolat refroidi avec un peu de chocolat noir fondu. Laisser cristalliser.</p>
                      <p>Dans le cadre de 37x28,5 cm, placer le biscuit au fond (côté chablonné en dessous). Couler une fine couche de bavaroise pain d'épices.</p>
                      <p>Déposer l'insert de coulis de poires surgelé au centre. Recouvrir avec le reste de bavaroise pain d'épices, lisser à ras du cadre.</p>
                      <p>Surgeler l'entremets complet à cœur.</p>
                      <p>Démouler l'entremets, parer les bords si nécessaire. Pulvériser l'appareil velours lait sur l'entremets congelé pour obtenir l'effet velours.</p>
                      <p>Décorer avec des bâtons de cannelle, de l'anis étoilé et quelques chips de poire séchée.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="astuces">
                   <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#D4AF37]/20 rounded-full">
                        <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-[#D4AF37] mb-2">Les secrets du Chef</h3>
                        <p className="text-gray-400 text-sm">Pour réussir votre Éclat aux Épices à la perfection.</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Utensils className="w-4 h-4 text-[#D4AF37]" /> La Bavaroise</h4>
                        <p className="text-gray-300 font-light text-sm leading-relaxed">
                          Veillez à ce que la base anglaise soit bien refroidie (environ 25-30°C) avant d'incorporer la crème fouettée. Si elle est trop chaude, la crème va retomber et vous perdrez le côté aérien. Si elle est trop froide, la gélatine va commencer à prendre et vous aurez des grains.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2"><Utensils className="w-4 h-4 text-[#D4AF37]" /> Le Coulis</h4>
                        <p className="text-gray-300 font-light text-sm leading-relaxed">
                          Pour plus de peps, vous pouvez ajouter une pincée de poivre de Timut dans le coulis de poires. Ses notes d'agrumes (pamplemousse) se mariant divinement avec la poire et le chocolat.
                        </p>
                      </div>
                    </div>
                   </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 sticky top-24">
                <h3 className="text-xl font-serif text-white mb-4">Notes personnelles</h3>
                <textarea 
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-[#D4AF37]/50 transition-colors h-40 resize-none font-light"
                  placeholder="Ajoutez vos notes ici..."
                ></textarea>
                <div className="mt-4 flex gap-2">
                   <Button className="w-full bg-[#D4AF37] hover:bg-[#b5952f] text-black font-medium">Enregistrer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EclatAuxEpices;