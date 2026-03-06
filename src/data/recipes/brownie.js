const brownie = {
  id: "brownie",
  title: "Brownie aux Noix de Pécan",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "20-25 MIN",
  difficulty: "FACILE",
  description: "Un gâteau de voyage d'origine américaine, ultra dense et riche. Une fine croûte craquante sur le dessus et un cœur fondant intensément chocolaté.",
  image: "https://www.meilleurduchef.com/images/recettes/brownie-chocolat-pecan/brownie-chocolat-pecan-1200x800.jpg",
  baseServings: 8, // 1 cadre de 20x20cm
  
  ingredients: [
    { name: "Chocolat noir 65%", amount: 200, unit: "g" },
    { name: "Beurre doux", amount: 150, unit: "g" },
    { name: "Sucre cassonade", amount: 150, unit: "g" },
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 60, unit: "g" },
    { name: "Cacao en poudre", amount: 20, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Noix de pécan", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "Torréfaction", 
      text: "Torréfier les noix de pécan au four à 150°C pendant 10 minutes. Les hacher grossièrement une fois refroidies." 
    },
    { 
      title: "La fonte", 
      text: "Faire fondre doucement le chocolat noir et le beurre au bain-marie. Bien lisser le mélange." 
    },
    { 
      title: "Le blanchiment", 
      text: "Dans un cul-de-poule, fouetter les œufs entiers avec la cassonade (sans chercher à trop faire monter le mélange, on veut une texture dense, pas aérienne)." 
    },
    { 
      title: "Le mélange liquide", 
      text: "Verser le mélange beurre/chocolat tiède sur les œufs sucrés et mélanger à la maryse." 
    },
    { 
      title: "Les poudres", 
      text: "Ajouter la farine et le cacao tamisés, ainsi que la fleur de sel. Incorporer enfin les noix de pécan torréfiées." 
    },
    { 
      title: "La cuisson", 
      text: "Couler dans un cadre ou un moule chemisé de 20x20cm. Cuire à 170°C pendant 20 à 25 minutes. Le centre doit paraître encore un peu sous-cuit." 
    }
  ],

  advices: [
    "Pour une coupe bien nette et une texture fudge (fondante), laissez reposer le brownie quelques heures au réfrigérateur avant de le découper et de le déguster à température ambiante."
  ],
  chefQuote: "L'erreur classique est de trop cuire le brownie en attendant que la lame du couteau ressorte sèche. S'il est sec à la sortie du four, il sera étouffe-chrétien une fois refroidi. Fiez-vous au temps de cuisson !",
  equipment: [
    "Cadre inox 20x20cm",
    "Bain-marie",
    "Fouet",
    "Maryse"
  ]
};

export default brownie;