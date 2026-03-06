const rochersPralinesMaison = {
  id: "rochers-pralines-maison",
  title: "Rochers Pralinés",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "2H + 12H (Repos)",
  cookTime: "20 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Le summum de la gourmandise chocolatée. Un cœur de praliné maison fondant aux amandes et noisettes, enrobé d'une couverture craquante aux éclats d'amandes torréfiés.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6d079e1bc36c8005876ca938736c33c0.png",
  baseServings: 200, // pièces
  
  ingredients: [
    { name: "Amandes brutes", amount: 400, unit: "g", note: "Praliné" },
    { name: "Noisettes brutes", amount: 400, unit: "g", note: "Praliné" },
    { name: "Sucre semoule", amount: 550, unit: "g", note: "Praliné" },
    { name: "Eau", amount: 150, unit: "g", note: "Praliné" },
    { name: "Couverture Lactée 40%", amount: 400, unit: "g", note: "Cœur" },
    { name: "Beurre de cacao", amount: 50, unit: "g", note: "Cœur" },
    { name: "Couverture Lait ou Noir", amount: 700, unit: "g", note: "Enrobage" },
    { name: "Amandes hachées (grains)", amount: 200, unit: "g", note: "Enrobage" },
    { name: "Huile de pépin de raisin", amount: 20, unit: "g", note: "Enrobage (facultatif)" }
  ],

  steps: [
    { 
      title: "1. Praliné Maison", 
      text: "Torréfier les fruits secs. Cuire un sirop (eau+sucre) à 118°C. Ajouter les fruits secs, sabler, puis caraméliser. Mixer la masse refroidie pour obtenir un praliné 50/50 fluide." 
    },
    { 
      title: "2. Masse Intérieure", 
      text: "Fondre la couverture lactée (400g) et le beurre de cacao. Ajouter 1kg de praliné maison. Tempérer cette masse (tableage) pour qu'elle cristallise correctement. Dresser à la poche en petites boules ou couler en moule demi-sphère. Laisser cristalliser 12h." 
    },
    { 
      title: "3. Le Glaçage Rocher", 
      text: "Torréfier les amandes hachées. Tempérer la couverture (700g), ajouter l'huile et les amandes froides." 
    },
    { 
      title: "4. Enrobage", 
      text: "Piquer les cœurs praliné avec une pique ou utiliser une fourchette, les plonger dans le glaçage rocher. Laisser cristalliser à 17°C." 
    }
  ],

  advices: ["Si votre intérieur praliné est trop mou pour être enrobé, passez-le 15 minutes au congélateur avant le trempage."],
  chefQuote: "Contrairement à la recette précédente, il n'y a pas de feuilletine à l'intérieur, c'est un pur cœur fondant qui s'oppose à la coque rocher.",
  equipment: ["Robot coupe", "Poche à douille", "Thermomètre"]
};

export default rochersPralinesMaison;