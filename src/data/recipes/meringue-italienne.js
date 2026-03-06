const meringueItalienne = {
  id: "meringue-italienne",
  title: "Meringue Italienne",
  category: "Pâtisserie",
  subCategory: ["Mousses"], // Ou "Bases" ou "Meringues"
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une meringue cuite par un sirop de sucre bouillant, idéale pour les macarons, les tartes meringuées et les mousses.",
  image: "https://sweet-salty-lkc.com/wp-content/uploads/2025/05/Meringue-Italienne-Facile-Recette-Inratable-et-Gourmande-5-e1749396585282.jpg",
  baseServings: 1, // bol
  
  ingredients: [
    { name: "Sucre semoule", amount: 250, unit: "g" },
    { name: "Eau", amount: 80, unit: "g" },
    { name: "Blancs d'oeufs", amount: 125, unit: "g" }
  ],

  steps: [
    { 
      title: "SIROP", 
      text: "Cuire le sucre et l'eau dans une casserole jusqu'à 118°C/121°C." 
    },
    { 
      title: "BLANCS", 
      text: "Commencer à monter les blancs quand le sirop atteint 110°C." 
    },
    { 
      title: "VERSAGE", 
      text: "Verser le sirop bouillant en filet sur les blancs tout en fouettant à vitesse moyenne (attention aux projections)." 
    },
    { 
      title: "FOISONNEMENT", 
      text: "Augmenter la vitesse et fouetter jusqu'à refroidissement complet de la meringue (environ 30-35°C)." 
    },
    { 
      title: "UTILISATION", 
      text: "Utiliser immédiatement pour macaronner, garnir ou décorer." 
    }
  ],

  advices: ["Le thermomètre à sucre est indispensable pour la précision du sirop."],
  chefQuote: "C'est la meringue la plus stable et la plus hygiénique car les blancs sont pasteurisés par le sirop.",
  equipment: ["Thermomètre à sucre", "Robot pâtissier", "Casserole"]
};

export default meringueItalienne;