const cakeChampignons = {
  id: "cake-champignons",
  title: "Cake Champignons de Paris",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Un cake forestier très simple, relevé par une persillade.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/cake-champignons/cake-champignons-1200.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Champignons de Paris", amount: 250, unit: "g" },
    { name: "Ail", amount: 1, unit: "gousse" },
    { name: "Persil", amount: 1, unit: "branche" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "La poêlée", 
      text: "Émincer les champignons. Les faire sauter à la poêle avec l'ail haché et le persil jusqu'à évaporation totale de l'eau. Saler, poivrer." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter œufs, huile et lait tiède. Mélanger." 
    },
    { 
      title: "Finition", 
      text: "Incorporer le gruyère et les champignons cuits." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C dans un moule beurré." 
    }
  ],

  advices: [
    "Il est impératif de faire rendre l'eau aux champignons avant de les mettre dans la pâte, sinon le cake sera détrempé."
  ],
  chefQuote: "Une base simple qui peut être enrichie avec des lardons ou des noix.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeChampignons;