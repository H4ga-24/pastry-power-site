const cremeuxVerveine = {
  id: "cremeux-verveine",
  title: "Crémeux Verveine",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une fraîcheur citronnée très élégante grâce à la verveine fraîche, idéale pour des desserts d'été légers (pêche, abricot).",
  image: "https://mesdelices.fr/wp-content/uploads/2016/09/cr%C3%A8me-verveine-optimis%C3%A9e-680x453.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 200, unit: "g" },
    { name: "Lait entier", amount: 200, unit: "g" },
    { name: "Verveine fraîche (feuilles)", amount: 15, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 40, unit: "g" },
    { name: "Chocolat blanc", amount: 100, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Chauffer le lait et la crème. Ajouter les feuilles de verveine. Laisser infuser 30 min à couvert." 
    },
    { 
      title: "La filtration", 
      text: "Chinoiser et presser les feuilles pour extraire le goût. Réajuster le poids du liquide avec du lait si nécessaire." 
    },
    { 
      title: "La cuisson", 
      text: "Cuire à l'anglaise (83°C) avec les jaunes et le sucre." 
    },
    { 
      title: "Le mélange", 
      text: "Ajouter la gélatine essorée. Verser sur le chocolat blanc." 
    },
    { 
      title: "L'émulsion", 
      text: "Mixer soigneusement." 
    }
  ],

  advices: [
    "Froissez légèrement les feuilles de verveine avant de les mettre dans le lait pour libérer les huiles essentielles."
  ],
  chefQuote: "Un mariage sublime avec la framboise ou la pêche blanche.",
  equipment: [
    "Chinois",
    "Casserole",
    "Mixeur plongeant"
  ]
};

export default cremeuxVerveine;