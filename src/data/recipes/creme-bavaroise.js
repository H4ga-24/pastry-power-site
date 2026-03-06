const cremeBavaroise = {
  id: "creme-bavaroise",
  title: "Crème Bavaroise Vanille",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un grand classique des entremets. Une crème anglaise collée à la gélatine à laquelle on incorpore de la crème fouettée mousseuse. Légère et aérienne.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/bavaroise-vanille/bavaroise-vanille-1200.jpg",
  baseServings: 1, // Environ 600g
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "La crème anglaise", 
      text: "Chauffer le lait avec la vanille. Blanchir les jaunes avec le sucre. Verser le lait chaud dessus, reverser dans la casserole et cuire à la nappe (83°C)." 
    },
    { 
      title: "Le collage", 
      text: "Hors du feu, ajouter la gélatine réhydratée et essorée. Bien mélanger." 
    },
    { 
      title: "Le refroidissement", 
      text: "Débarrasser et laisser refroidir à température ambiante jusqu'à 25-30°C. La crème doit commencer à gélifier légèrement sur les bords." 
    },
    { 
      title: "Le mélange final", 
      text: "Monter la crème liquide en chantilly mousseuse (pas trop ferme). L'incorporer délicatement à la maryse dans la crème anglaise refroidie." 
    }
  ],

  advices: [
    "La température de mélange est cruciale : trop chaude, la crème fouettée fond. Trop froide, la gélatine fait des grains."
  ],
  chefQuote: "C'est la base de la Charlotte. Pour une texture encore plus fine, passez l'anglaise au chinois avant d'ajouter la gélatine.",
  equipment: [
    "Thermomètre",
    "Fouet",
    "Maryse",
    "Batteur"
  ]
};

export default cremeBavaroise;