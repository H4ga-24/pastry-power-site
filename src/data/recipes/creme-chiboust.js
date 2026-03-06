const cremeChiboust = {
  id: "creme-chiboust",
  title: "Crème Chiboust",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "15 MIN",
  difficulty: "DIFFICILE",
  description: "La crème traditionnelle du Saint-Honoré : une crème pâtissière collée à la gélatine et allégée à chaud avec une meringue italienne.",
  image: "https://img.cuisineaz.com/660x660/2022/06/16/i184280-69-creme-chiboust.jpeg",
  baseServings: 1, // Environ 800g
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule (crème)", amount: 50, unit: "g" },
    { name: "Poudre à crème (ou Maïzena)", amount: 25, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Blancs d'œufs", amount: 150, unit: "g" },
    { name: "Sucre semoule (meringue)", amount: 200, unit: "g" },
    { name: "Eau", amount: 65, unit: "g" }
  ],

  steps: [
    { 
      title: "La base", 
      text: "Réhydrater la gélatine. Réaliser une crème pâtissière (lait, jaunes, sucre crème, poudre à crème). Incorporer la gélatine hors du feu dans la crème chaude. Couvrir et garder tiède." 
    },
    { 
      title: "Le sirop", 
      text: "Cuire le sucre (meringue) et l'eau jusqu'à 121°C." 
    },
    { 
      title: "La meringue italienne", 
      text: "Monter les blancs. Verser le sirop à 121°C sur les blancs montés et fouetter jusqu'à obtenir une meringue ferme et brillante (bec d'oiseau)." 
    },
    { 
      title: "Le mélange final", 
      text: "Détendre la crème pâtissière (qui doit être encore tiède/chaude) avec un peu de meringue. Incorporer délicatement le reste de la meringue à la maryse." 
    },
    { 
      title: "Utilisation", 
      text: "Utiliser immédiatement (dressage à la poche à douille) car la crème prend très vite en refroidissant grâce à la gélatine." 
    }
  ],

  advices: [
    "C'est une crème technique : il faut synchroniser la pâtissière et la meringue. La pâtissière ne doit pas avoir refroidi sinon la gélatine figera et fera des grains."
  ],
  chefQuote: "Une fois pochée, la Chiboust peut être caramélisée au fer rouge ou au chalumeau, c'est ce qui fait le charme du Saint-Honoré.",
  equipment: [
    "Thermomètre sucre",
    "Batteur",
    "Casserole",
    "Poche à douille"
  ]
};

export default cremeChiboust;