const tuile = {
  id: "tuile",
  title: "Tuiles aux amandes",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "15 MIN + 1H",
  cookTime: "8 MIN",
  difficulty: "MOYEN",
  description: "Le petit four sec par excellence : fin, croquant, généreux en amandes et courbé délicatement dès la sortie du four.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/tuiles-amandes/tuiles-amandes-etape-18-480.jpg",
  baseServings: 20, // pièces
  
  ingredients: [
    { name: "Sucre en poudre", amount: 125, unit: "g" },
    { name: "Amandes effilées", amount: 125, unit: "g" },
    { name: "Blancs d'œufs", amount: 2, unit: "pièces" },
    { name: "Beurre fondu", amount: 25, unit: "g" },
    { name: "Farine", amount: 20, unit: "g" },
    { name: "Vanille", amount: 1, unit: "c.à.c" }
  ],

  steps: [
    { 
      title: "MÉLANGE", 
      text: "Mélanger le sucre, la farine et les amandes effilées délicatement (sans briser les amandes)." 
    },
    { 
      title: "LIANT", 
      text: "Ajouter les blancs d'œufs non montés et la vanille, puis le beurre fondu refroidi." 
    },
    { 
      title: "REPOS", 
      text: "Laisser reposer la pâte 1h au frais. Le beurre va figer légèrement et la pâte va s'épaissir, facilitant le dressage." 
    },
    { 
      title: "DRESSAGE", 
      text: "Étaler des petits tas de pâte (environ 1 c.à.s) très finement en disques sur une plaque. L'astuce : étalez-les à l'aide d'une fourchette trempée dans l'eau pour que ça ne colle pas." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 6 à 8 minutes jusqu'à une belle coloration dorée uniforme (surveiller de près, ça brûle vite)." 
    },
    { 
      title: "MISE EN FORME", 
      text: "Dès la sortie du four (pendant que c'est encore chaud et mou), décoller les tuiles à la spatule et les poser immédiatement sur un rouleau à pâtisserie (ou une gouttière à tuiles) pour leur donner leur forme courbée." 
    }
  ],

  advices: ["Ne cuisez qu'une petite plaque (4 à 6 tuiles) à la fois, sinon les dernières figeront avant que vous n'ayez eu le temps de les courber."],
  chefQuote: "Une bonne tuile doit être fine comme du papier. Si elle est trop épaisse au centre, elle sera molle.",
  equipment: ["Gouttière à tuiles (ou rouleau à pâtisserie)", "Spatule fine", "Plaque anti-adhésive"]
};

export default tuile;