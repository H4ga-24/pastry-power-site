const genoiseChocolatMDC = {
  id: "genoise-chocolat-mdc",
  title: "Génoise au chocolat (Classique)",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "La génoise au chocolat est un classique de la pâtisserie française. C'est un biscuit moelleux et aéré, idéal pour confectionner des gâteaux fourrés ou des forêts noires.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/genoise-chocolat/genoise-chocolat-1200.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Oeufs", amount: 4, unit: "pièces" },
    { name: "Sucre", amount: 125, unit: "g" },
    { name: "Farine", amount: 90, unit: "g" },
    { name: "Cacao amer", amount: 30, unit: "g" },
    { name: "Beurre (pour le moule)", amount: 30, unit: "g" },
    { name: "Farine (pour le moule)", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Pour réaliser cette recette de génoise au chocolat, commencer par préparer tous les ingrédients." 
    },
    { 
      title: "GRAISSAGE", 
      text: "Faire fondre le beurre. Graisser le fond du moule à manqué et les parois au pinceau. Fariner le moule." 
    },
    { 
      title: "MÉLANGE", 
      text: "Mélanger le sucre et les œufs dans un cul de poule. Fouetter au fouet à main sur un bain-marie jusqu'à 50°C." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Terminer de battre au batteur électrique jusqu'à complet refroidissement." 
    },
    { 
      title: "INCORPORATION", 
      text: "Tamiser la farine et le cacao. Incorporer délicatement avec une spatule type maryse. Verser dans le moule." 
    },
    { 
      title: "CUISSON", 
      text: "Enfourner à four chaud à 180°C pendant 20 à 25 minutes. Vérifier la cuisson avec la lame d'un couteau." 
    },
    { 
      title: "DÉMOULAGE", 
      text: "Retirer du four et démouler sur une grille. Laisser refroidir." 
    }
  ],

  advices: ["Ne tapez pas le moule avant d'enfourner, cela ferait retomber les bulles d'air."],
  chefQuote: "Une génoise bien réussie n'a pas besoin de levure chimique.",
  equipment: ["Moule à manqué", "Batteur", "Bain-marie", "Tamis"]
};

export default genoiseChocolatMDC;