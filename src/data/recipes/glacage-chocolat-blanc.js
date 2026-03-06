const glacageChocolatBlanc = {
  id: "glacage-chocolat-blanc",
  title: "Glaçage Chocolat Blanc",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "La base parfaite du glaçage miroir. Il peut être coloré selon vos envies ou laissé blanc (avec du dioxyde de titane pour un blanc pur).",
  image: "https://www.recettes-chocolats.com/hbstrg/2024/12/Glacage-chocolat-blanc.webp",
  baseServings: 800, // g
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 150, unit: "g" },
    { name: "Eau", amount: 75, unit: "g" },
    { name: "Lait concentré sucré", amount: 100, unit: "g" },
    { name: "Chocolat blanc couverture", amount: 150, unit: "g" },
    { name: "Gélatine en poudre", amount: 10, unit: "g" },
    { name: "Eau d'hydratation", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "MASSE GÉLATINE", 
      text: "Mélanger la gélatine en poudre avec l'eau d'hydratation bien froide. Laisser figer au moins 20 minutes au frigo." 
    },
    { 
      title: "SIROP", 
      text: "Dans une casserole, cuire l'eau, le sucre et le glucose à 103°C précis." 
    },
    { 
      title: "MÉLANGE", 
      text: "Dans un récipient haut (type pichet), mettre le chocolat blanc haché, le lait concentré et la masse gélatine coupée en morceaux." 
    },
    { 
      title: "EMULSION", 
      text: "Verser le sirop bouillant sur les ingrédients dans le pichet. Attendre 1 minute puis mixer au mixeur plongeant en restant au fond pour éviter les bulles." 
    },
    { 
      title: "REPOS", 
      text: "Filmer au contact. Laisser cristalliser une nuit au réfrigérateur. Le lendemain, réchauffer doucement et utiliser entre 30°C et 35°C." 
    }
  ],

  advices: ["Sans colorant blanc (dioxyde de titane), ce glaçage sera naturellement ivoire/jaune pâle."],
  chefQuote: "L'ennemi du glaçage, ce sont les bulles d'air. Ne remontez jamais le pied du mixeur.",
  equipment: ["Thermomètre", "Mixeur plongeant", "Casserole"]
};

export default glacageChocolatBlanc;