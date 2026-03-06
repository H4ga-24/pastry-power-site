const genoise = {
  id: "genoise",
  title: "Génoise",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "25 MIN",
  difficulty: "FACILE",
  description: "La base classique par excellence pour de nombreux entremets et gâteaux garnis.",
  image: "https://img.cuisineaz.com/1024x1024/2016/04/28/i58827-genoise.webp",
  baseServings: 1, 
  
  ingredients: [
    { name: "Oeufs", amount: 4, unit: "pièces" },
    { name: "Sucre", amount: 125, unit: "g" },
    { name: "Farine", amount: 125, unit: "g" },
    { name: "Beurre fondu (facultatif)", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Préparer tous les ingrédients et préchauffer le four à 180°C." 
    },
    { 
      title: "MÉLANGE", 
      text: "Fouetter les oeufs et le sucre au bain-marie jusqu'à atteindre 50°C." 
    },
    { 
      title: "FOISONNEMENT", 
      text: "Battre le mélange au robot jusqu'à refroidissement complet et obtention d'un ruban." 
    },
    { 
      title: "INCORPORATION", 
      text: "Incorporer délicatement la farine tamisée à la maryse." 
    },
    { 
      title: "CUISSON", 
      text: "Verser dans le moule et cuire 20 à 25 minutes." 
    }
  ],

  advices: ["Le mélange œufs-sucre doit tripler de volume pour une génoise légère."],
  chefQuote: "Beurrez et farinez bien le moule pour un démoulage parfait.",
  equipment: ["Moule à manqué", "Batteur", "Bain-marie", "Maryse"]
};

export default genoise;