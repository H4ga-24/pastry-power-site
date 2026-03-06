const financierAuMiel = {
  id: "financier-au-miel",
  title: "Financier au miel",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Des financiers moelleux où le sucre est remplacé partiellement par du miel pour une saveur unique.",
  image: "https://www.miels-et-saveurs.fr/wp-content/uploads/financiers-au-miel.jpg",
  baseServings: 12,
  
  ingredients: [
    { name: "Beurre", amount: 150, unit: "g" },
    { name: "Poudre d'amande", amount: 80, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Farine", amount: 50, unit: "g" },
    { name: "Miel", amount: 50, unit: "g" },
    { name: "Blancs d'œufs", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "BEURRE NOISETTE", 
      text: "Réaliser un beurre noisette dans une casserole, puis laisser tiédir." 
    },
    { 
      title: "MÉLANGE SEC", 
      text: "Dans un bol, mélanger la poudre d'amande, le sucre glace et la farine tamisée." 
    },
    { 
      title: "LIQUIDES", 
      text: "Ajouter les blancs d'œufs non montés, puis le miel liquide." 
    },
    { 
      title: "FINITION", 
      text: "Incorporer le beurre noisette filtré." 
    },
    { 
      title: "CUISSON", 
      text: "Verser dans des moules et cuire à 180°C pendant 12 à 15 minutes." 
    }
  ],

  advices: ["Choisissez un miel fort (châtaignier, sapin) pour plus de caractère."],
  chefQuote: "Le beurre noisette est prêt quand il chante (arrête de crépiter) et sent la noisette grillée.",
  equipment: ["Casserole", "Moules à financiers", "Fouet"]
};

export default financierAuMiel;