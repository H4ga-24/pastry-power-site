const craquantBreton = {
  id: "craquant-breton",
  title: "Craquant Breton",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "12 MIN",
  difficulty: "FACILE",
  description: "Une spécialité bretonne légère, très fine et extrêmement croustillante, aux éclats de noisettes. Idéal pour utiliser des blancs d'œufs.",
  image: "https://www.tresorsdesregions.com/3585-medium_default/craquant-breton-150g.jpg",
  baseServings: 30, // Environ 30 petits tas
  
  ingredients: [
    { name: "Sucre semoule", amount: 200, unit: "g" },
    { name: "Farine T55", amount: 40, unit: "g" },
    { name: "Blancs d'œufs", amount: 60, unit: "g", note: "Env. 2 blancs" },
    { name: "Noisettes hachées", amount: 100, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "Les poudres", 
      text: "Dans un bol, mélanger le sucre, la farine et les noisettes hachées." 
    },
    { 
      title: "Le liant", 
      text: "Ajouter les blancs d'œufs (non battus) et la vanille. Mélanger à la spatule juste pour obtenir une pâte homogène. Ne pas fouetter." 
    },
    { 
      title: "Le dressage", 
      text: "Déposer des petits tas (valeur d'une cuillère à café) sur une plaque avec papier cuisson ou Silpat. Espacer généreusement car ils s'étalent beaucoup." 
    },
    { 
      title: "La cuisson", 
      text: "Cuire à 180°C pendant 10 à 12 minutes. Les biscuits vont s'étaler, buller et caraméliser." 
    },
    { 
      title: "Le refroidissement", 
      text: "Laisser refroidir complètement sur une surface plane avant de décoller. Ils durcissent en refroidissant." 
    }
  ],

  advices: [
    "Conservez-les dans une boîte en fer hermétique, ils craignent énormément l'humidité."
  ],
  chefQuote: "C'est un biscuit très fin, presque une tuile. Surveillez la couleur : un beau caramel blond est signe de croustillant.",
  equipment: [
    "Plaque de cuisson",
    "Cuillère à café"
  ]
};

export default craquantBreton;