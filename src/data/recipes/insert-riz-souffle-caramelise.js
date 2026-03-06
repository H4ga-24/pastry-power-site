const insertRizSouffleCaramelise = {
  id: "insert-riz-souffle-caramelise",
  title: "Insert Riz Soufflé Caramélisé",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Un insert croustillant apportant une texture légère et croquante, idéal pour contraster avec des mousses onctueuses.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2023/05/IMG_20230511_095646-1-1249x1300.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Riz soufflé", amount: 50, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Beurre demi-sel", amount: 15, unit: "g" },
    { name: "Chocolat au lait (liant)", amount: 40, unit: "g" }
  ],

  steps: [
    { 
      title: "CARAMEL", 
      text: "Réaliser un caramel à sec avec le sucre." 
    },
    { 
      title: "ENROBAGE", 
      text: "Ajouter le beurre pour arrêter la cuisson, puis verser immédiatement sur le riz soufflé." 
    },
    { 
      title: "MÉLANGE", 
      text: "Mélanger délicatement pour enrober chaque grain sans les écraser." 
    },
    { 
      title: "LIANT", 
      text: "Une fois tiédi, ajouter le chocolat au lait fondu pour lier l'ensemble." 
    },
    { 
      title: "MOULAGE", 
      text: "Tasser la préparation dans le fond d'un cercle ou d'un moule. Réserver au frais pour figer." 
    }
  ],

  advices: ["Travaillez vite une fois le caramel versé, car il durcit rapidement."],
  chefQuote: "Le riz soufflé caramélisé reste croustillant plus longtemps que le riz nature.",
  equipment: ["Casserole", "Spatule", "Cercle pâtissier"]
};

export default insertRizSouffleCaramelise;