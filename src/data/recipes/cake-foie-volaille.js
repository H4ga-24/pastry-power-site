const cakeFoieVolaille = {
  id: "cake-foie-volaille",
  title: "Cake Foie de Volaille & Pignons",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Un cake de caractère, façon terrine chaude. Les foies de volaille déglacés au Porto apportent une richesse incroyable.",
  image: "https://img.cuisineaz.com/1024x768/2015/04/15/i91265-cake-aux-pignons-de-pin-fromage-et-pesto.webp",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 80, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Foies de volaille", amount: 200, unit: "g" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Échalote", amount: 1, unit: "pièce" },
    { name: "Pignons de pin", amount: 50, unit: "g" },
    { name: "Porto", amount: 15, unit: "g" },
    { name: "Basilic frais", amount: 3, unit: "feuilles" },
    { name: "Menthe fraîche", amount: 2, unit: "feuilles" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Cuisson des foies", 
      text: "Nettoyer les foies. Faire revenir l'échalote ciselée et les foies dans le beurre. Déglacer au Porto. Laisser refroidir et couper en dés." 
    },
    { 
      title: "Torréfaction", 
      text: "Torréfier légèrement les pignons de pin à la poêle à sec." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure, œufs, huile et lait pour obtenir une pâte lisse." 
    },
    { 
      title: "Finition", 
      text: "Incorporer le gruyère, les foies, les pignons et les herbes ciselées. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Ne cuisez pas trop les foies à la poêle, ils doivent rester rosés car ils cuiront à nouveau au four."
  ],
  chefQuote: "Les herbes fraîches (basilic et menthe) sont essentielles pour apporter de la fraîcheur et couper le goût ferreux du foie.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeFoieVolaille;