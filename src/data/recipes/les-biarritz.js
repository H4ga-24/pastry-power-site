const lesBiarritz = {
  id: "les-biarritz",
  title: "Les Biarritz",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "De délicats biscuits plats aux amandes et citron, dont le dessous est nappé de chocolat noir.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFfugVfq3PiU-gPp-EPHP6RQdHEKHL0lIhONdDru6Dglb3daESvB_qp7r4DR2oemI27FsyDzQRV0P4J2KLxPQbbg1nb2rqV-q5Bfni_TtWLwgEJZEohDuBNAWM_Nyo54RpVwVk7y7yfHg3/s400/biarritz.JPG",
  baseServings: 24, // "24 biscuits"
  
  ingredients: [
    { name: "Poudre d'amande", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Farine", amount: 20, unit: "g" },
    { name: "Blancs d'œufs", amount: 70, unit: "g" },
    { name: "Zeste de citron", amount: 0.5, unit: "pc" },
    { name: "Chocolat noir de couverture", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "MÉLANGE", 
      text: "Mélanger la poudre d'amande, le sucre glace et la farine." 
    },
    { 
      title: "INCORPORATION", 
      text: "Ajouter les blancs d'œufs non montés et le zeste de citron. Mélanger pour obtenir une pâte lisse." 
    },
    { 
      title: "DRESSAGE", 
      text: "Dresser de très fins disques de pâte (comme des langues de chat rondes) sur une plaque." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 8 à 10 minutes. Les bords doivent dorer." 
    },
    { 
      title: "CHOCOLAT", 
      text: "Faire fondre le chocolat et le tempérer si possible." 
    },
    { 
      title: "FINITION", 
      text: "Tremper le dessous (côté plat) de chaque biscuit refroidi dans le chocolat, lisser à la spatule et laisser figer chocolat vers le haut." 
    }
  ],

  advices: ["Pour des biscuits bien ronds, vous pouvez utiliser un chablon en plastique."],
  chefQuote: "Le tempérage du chocolat est essentiel pour qu'il reste brillant et cassant à température ambiante.",
  equipment: ["Plaque de cuisson", "Spatule", "Poche à douille (opt)"]
};

export default lesBiarritz;