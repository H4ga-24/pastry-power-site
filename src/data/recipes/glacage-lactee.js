const glacageLactee = {
  id: "glacage-lactee",
  title: "Glaçage Lactée",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un glaçage miroir au chocolat au lait, doux et brillant, idéal pour les entremets praliné, noisette ou fruits exotiques.",
  image: "https://mapatisserie.fr/wp-content/uploads/2016/07/IMG_20160812_224809.jpg",
  baseServings: 800, // g
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 150, unit: "g" },
    { name: "Eau", amount: 75, unit: "g" },
    { name: "Lait concentré sucré", amount: 100, unit: "g" },
    { name: "Chocolat au lait (40%)", amount: 150, unit: "g" },
    { name: "Gélatine en poudre", amount: 10, unit: "g" },
    { name: "Eau d'hydratation", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Mélanger la gélatine en poudre avec l'eau d'hydratation bien froide. Réserver au froid 20 minutes." 
    },
    { 
      title: "SIROP", 
      text: "Dans une casserole, cuire l'eau, le sucre et le glucose à 103°C." 
    },
    { 
      title: "MÉLANGE", 
      text: "Dans un pichet, mettre le chocolat au lait (pistoles ou haché), le lait concentré et la masse gélatine. Verser le sirop chaud dessus." 
    },
    { 
      title: "EMULSION", 
      text: "Laisser fondre 1 minute puis mixer au mixeur plongeant en gardant la tête immergée pour éviter les bulles." 
    },
    { 
      title: "REPOS", 
      text: "Filmer au contact et laisser cristalliser une nuit au frigo. Utiliser à 30-35°C." 
    }
  ],

  advices: ["Ce glaçage est plus clair qu'un glaçage chocolat noir, il a une belle couleur caramel/lactée."],
  chefQuote: "Assurez-vous que votre entremets est bien congelé (-18°C) avant de verser le glaçage.",
  equipment: ["Mixeur plongeant", "Thermomètre", "Casserole"]
};

export default glacageLactee;