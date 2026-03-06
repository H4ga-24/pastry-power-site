const cakeAuxFruits = {
  id: "cake-aux-fruits",
  title: "Cake aux Fruits Confits",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "1H 10",
  difficulty: "MOYEN",
  description: "Le cake anglais traditionnel riche en fruits confits et raisins macérés.",
  image: "https://patissland.fr/cdn/shop/articles/recette-traditionnelle-du-cake-aux-fruits-patissland.webp",
  baseServings: 10, 
  
  ingredients: [
    { name: "Beurre pommade", amount: 250, unit: "g" },
    { name: "Sucre cassonade", amount: 200, unit: "g" },
    { name: "Œufs entiers", amount: 250, unit: "g" },
    { name: "Farine T55", amount: 320, unit: "g" },
    { name: "Levure chimique", amount: 8, unit: "g" },
    { name: "Fruits confits (cubes)", amount: 200, unit: "g" },
    { name: "Raisins secs", amount: 100, unit: "g" },
    { name: "Rhum ambré", amount: 50, unit: "g" },
    { name: "Cerises confites", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Macération", 
      text: "La veille, faire macérer raisins et fruits confits dans le rhum." 
    },
    { 
      title: "Crémage", 
      text: "Mélanger beurre pommade et cassonade jusqu'à homogénéité." 
    },
    { 
      title: "Émulsion", 
      text: "Ajouter les œufs un à un en fouettant vivement." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer farine tamisée avec levure. Mélanger sans corser." 
    },
    { 
      title: "Garniture", 
      text: "Égoutter les fruits, les fariner légèrement et les incorporer délicatement." 
    },
    { 
      title: "Cuisson", 
      text: "Moule beurré. Cuire 1h10 à 160°C. Vérifier au couteau." 
    }
  ],

  advices: [
    "Fariner les fruits les empêche de tomber au fond du moule pendant la cuisson."
  ],
  chefQuote: "Ce gâteau se bonifie avec le temps. Emballez-le hermétiquement, il sera meilleur après 48h.",
  equipment: [
    "Moule à cake",
    "Batteur (feuille)"
  ]
};

export default cakeAuxFruits;