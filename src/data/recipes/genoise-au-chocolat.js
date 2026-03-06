const genoiseAuChocolat = {
  id: "genoise-au-chocolat",
  title: "Biscuit au chocolat",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "25 MIN",
  difficulty: "FACILE",
  description: "Cette recette permet de réaliser une demi-feuille. Un biscuit moelleux au chocolat idéal pour les montages d'entremets.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/07/ge%CC%81noise-chocolat.png",
  baseServings: 1, // Demi-feuille
  
  ingredients: [
    { name: "Blancs d'oeuf", amount: 120, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 80, unit: "g" },
    { name: "Cacao poudre", amount: 20, unit: "g" },
    { name: "Farine courante", amount: 50, unit: "g" },
    { name: "Fécule de pomme de terre", amount: 50, unit: "g" },
    { name: "Beurre fondu froid", amount: 10, unit: "g" }
  ],

  steps: [
    { 
      title: "PESÉE", 
      text: "Réaliser les pesées des ingrédients avec précision." 
    },
    { 
      title: "TAMISAGE", 
      text: "Tamiser le cacao, la farine et la fécule ensemble." 
    },
    { 
      title: "MERINGUE", 
      text: "Réaliser une meringue avec les blancs et serrer avec le sucre." 
    },
    { 
      title: "MÉLANGE", 
      text: "Ajouter les jaunes et fouetter légèrement à la main. Ajouter les poudres et le beurre fondu à la Maryse. Dresser sur une demi feuille ou dans un cercle entremets de 18 à 22cm de diamètre." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 190°C pendant 10 à 12 minutes." 
    }
  ],

  advices: ["Surveillez la cuisson, le biscuit doit rester souple."],
  chefQuote: "Le cacao assèche la pâte, la fécule apporte de la légèreté pour compenser.",
  equipment: ["Plaque de cuisson", "Batteur", "Tamis"]
};

export default genoiseAuChocolat;