const cremeuxCafe = {
  id: "cremeux-cafe",
  title: "Crémeux Café",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un crémeux intense aux notes torréfiées, réalisé par infusion de grains de café pour une saveur pure et sans amertume.",
  image: "https://i.pinimg.com/originals/e4/51/41/e45141b6fdcd365220cc07c25e98ad47.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 250, unit: "g" },
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Grains de café", amount: 50, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Chocolat au lait 40%", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Concasser les grains de café. Chauffer le lait et la crème, ajouter le café, couvrir et infuser 20 min. Chinoiser et compléter le poids si nécessaire." 
    },
    { 
      title: "La cuisson", 
      text: "Chauffer à nouveau le liquide. Fouetter jaunes et sucre. Verser le liquide chaud dessus et cuire à la nappe (83°C)." 
    },
    { 
      title: "Le mélange", 
      text: "Hors du feu, ajouter la gélatine hydratée. Verser sur le chocolat au lait haché." 
    },
    { 
      title: "La finition", 
      text: "Mixer soigneusement. Laisser cristalliser au frais 4h min." 
    }
  ],

  advices: [
    "Le chocolat au lait apporte de la rondeur et une texture plus crémeuse que si l'on utilisait uniquement de la gélatine."
  ],
  chefQuote: "Utilisez un très bon café Arabica, l'infusion à chaud va en extraire tous les arômes volatils.",
  equipment: [
    "Chinois étamine",
    "Mixeur plongeant",
    "Casserole"
  ]
};

export default cremeuxCafe;