const glacageExotique = {
  id: "glacage-exotique",
  title: "Glaçage Exotique",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: true,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un glaçage miroir lumineux et fruité à base de purée de mangue ou passion, idéal pour les entremets aux saveurs tropicales.",
  image: "https://cuisinedaubery.com/wp-content/uploads/2024/04/glacage-mangue_ALTERN09.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Purée de mangue/passion", amount: 150, unit: "g" },
    { name: "Eau", amount: 75, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 150, unit: "g" },
    { name: "Chocolat blanc de couverture", amount: 150, unit: "g" },
    { name: "Lait concentré sucré", amount: 100, unit: "g" },
    { name: "Gélatine en poudre (200 bloom)", amount: 10, unit: "g" },
    { name: "Eau d'hydratation", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Hydrater la gélatine en poudre dans l'eau d'hydratation froide. Laisser gonfler au réfrigérateur." 
    },
    { 
      title: "SIROP", 
      text: "Dans une casserole, cuire l'eau, le sucre et le glucose à 103°C." 
    },
    { 
      title: "MÉLANGE", 
      text: "Verser le sirop bouillant sur le mélange chocolat blanc, lait concentré, purée de fruit et masse gélatine." 
    },
    { 
      title: "EMULSION", 
      text: "Mixer au mixeur plongeant en restant bien au fond pour ne pas incorporer d'air. Le glaçage doit être lisse et brillant." 
    },
    { 
      title: "REPOS", 
      text: "Filmer au contact. Laisser cristalliser une nuit. Utiliser à 30-32°C." 
    }
  ],

  advices: ["Si la purée de fruit est très liquide, réduisez légèrement la quantité d'eau du sirop."],
  chefQuote: "La couleur jaune/orange naturelle du fruit suffit généralement, pas besoin de colorant.",
  equipment: ["Mixeur plongeant", "Thermomètre", "Pichet"]
};

export default glacageExotique;