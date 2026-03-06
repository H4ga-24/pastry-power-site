const biscuitAuxNoix = {
  id: "biscuit-aux-noix",
  title: "Biscuit aux Noix",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Un biscuit riche et savoureux, monté sur une base de meringue française. Idéal comme base pour un entremets d'automne ou au café.",
  image: "https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/126/biscuit-aux-noix-2.jpg",
  baseServings: 1, // Pour 1 plaque
  
  ingredients: [
    { name: "Poudre de noix", amount: 150, unit: "g" },
    { name: "Sucre glace", amount: 150, unit: "g" },
    { name: "Oeufs entiers", amount: 3, unit: "pièces" },
    { name: "Blancs d'oeufs", amount: 3, unit: "pièces" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Farine", amount: 40, unit: "g" },
    { name: "Beurre fondu", amount: 30, unit: "g" }
  ],

  steps: [
    { title: "MÉLANGE", text: "Fouetter les oeufs entiers avec le sucre glace et la poudre de noix jusqu'à blanchiment." },
    { title: "MERINGUE", text: "Monter les blancs avec le sucre semoule." },
    { title: "INCORPORATION 1", text: "Mélanger délicatement les deux masses." },
    { title: "INCORPORATION 2", text: "Ajouter la farine tamisée puis le beurre fondu." },
    { title: "CUISSON", text: "Étaler sur plaque et cuire à 190°C pendant 15-20 minutes." }
  ],

  advices: [
    "Bien mixer les noix finement pour éviter les morceaux dans le biscuit qui pourraient le fragiliser."
  ],
  chefQuote: "Torréfier légèrement la poudre de noix avant utilisation pour plus de goût.",
  equipment: [
    "Plaque de cuisson",
    "Batteur",
    "Maryse"
  ]
};

export default biscuitAuxNoix;