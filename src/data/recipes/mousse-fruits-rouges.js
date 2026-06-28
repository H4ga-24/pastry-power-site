const mousseFruitsRouges = {
  id: "mousse-fruits-rouges",
  title: "Mousse aux Fruits Rouges",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: true,
  prepTime: "30 MIN",
  restTime: "4 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse aérienne et fruitée sur base de meringue italienne (pour la tenue et la légèreté) et de purée de fruits.",
  image: "/images/recettes/mousse-fruits-rouges.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Purée de fruits rouges", amount: 300, unit: "g" },
    { name: "Gélatine (feuille)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "g" },
    { name: "Sucre semoule", amount: 120, unit: "g", note: "Meringue" },
    { name: "Eau", amount: 40, unit: "g", note: "Meringue" },
    { name: "Blancs d'œufs", amount: 60, unit: "g", note: "Meringue" }
  ],

  steps: [
    { 
      title: "La base fruit", 
      text: "Chauffer 1/3 de la purée de fruits. Y dissoudre la gélatine réhydratée. Mélanger avec le reste de purée froide." 
    },
    { 
      title: "La meringue italienne", 
      text: "Cuire sucre et eau à 118°C. Verser sur les blancs montés et fouetter jusqu'à refroidissement." 
    },
    { 
      title: "Le mélange 1", 
      text: "Incorporer délicatement la meringue italienne à la purée de fruits (qui doit être à température ambiante, pas figée)." 
    },
    { 
      title: "Le mélange 2", 
      text: "Monter la crème en chantilly souple. L'incorporer au mélange précédent." 
    },
    { 
      title: "Finition", 
      text: "Couler immédiatement en cercle ou verrines." 
    }
  ],

  advices: [
    "C'est la recette professionnelle pour les entremets. La meringue italienne apporte une texture beaucoup plus fine que le sucre seul."
  ],
  chefQuote: "Si votre purée est très acide (cassis, passion), augmentez légèrement la meringue pour sucrer davantage.",
  equipment: [
    "Thermomètre",
    "Batteur",
    "Cercle"
  ]
};

export default mousseFruitsRouges;