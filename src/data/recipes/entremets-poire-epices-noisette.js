const entremetsPoireEpicesNoisette = {
  id: "entremets-poire-epices-noisette",
  title: "Entremets Poire, Épices & Noisette",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "4H 00",
  cookTime: "1H 00",
  difficulty: "AVANCÉ",
  description: "Un hymne à l'automne et à l'hiver. La fraîcheur de la poire confite rencontre la chaleur des épices et la gourmandise du chocolat au lait, le tout soutenu par le croquant de la noisette.",
  image: "https://www.cuisineaddict.com/img/advcms/matrices/media/1096.jpg",
  baseServings: 4, // "4 Entremets de Ø 22 cm"
  
  ingredients: [
    { name: "Poires (cubes)", amount: 600, unit: "g", note: "Poires Confites" },
    { name: "Sucre semoule", amount: 80, unit: "g", note: "Poires Confites" },
    { name: "Beurre", amount: 40, unit: "g", note: "Poires Confites" },
    { name: "Cognac", amount: 20, unit: "g", note: "Poires Confites" },
    { name: "Vanille (gousse)", amount: 1, unit: "pc", note: "Poires Confites" },
    { name: "Gélatine", amount: 6, unit: "g", note: "Poires Confites" },
    { name: "Crème liquide", amount: 250, unit: "g", note: "Crémeux Lacté" },
    { name: "Lait", amount: 250, unit: "g", note: "Crémeux Lacté" },
    { name: "Jaunes d'oeufs", amount: 100, unit: "g", note: "Crémeux Lacté" },
    { name: "Sucre", amount: 50, unit: "g", note: "Crémeux Lacté" },
    { name: "Chocolat Lait 40%", amount: 300, unit: "g", note: "Crémeux Lacté" },
    { name: "Gélatine", amount: 6, unit: "g", note: "Crémeux Lacté" },
    { name: "Lait", amount: 220, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Sucre", amount: 180, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Miel", amount: 180, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Farine", amount: 200, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Farine de seigle", amount: 50, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Mélange 4 épices", amount: 8, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Bicarbonate", amount: 6, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Beurre fondue", amount: 120, unit: "g", note: "Biscuit Pain d'épices" },
    { name: "Beurre", amount: 100, unit: "g", note: "Streusel Noisette" },
    { name: "Cassonade", amount: 100, unit: "g", note: "Streusel Noisette" },
    { name: "Poudre de noisette", amount: 100, unit: "g", note: "Streusel Noisette" },
    { name: "Farine", amount: 100, unit: "g", note: "Streusel Noisette" },
    { name: "Purée de poire", amount: 500, unit: "g", note: "Mousse Poire" },
    { name: "Sucre", amount: 50, unit: "g", note: "Mousse Poire" },
    { name: "Gélatine", amount: 12, unit: "g", note: "Mousse Poire" },
    { name: "Alcool de poire (Williamine)", amount: 20, unit: "g", note: "Mousse Poire" },
    { name: "Crème fouettée", amount: 500, unit: "g", note: "Mousse Poire" },
    { name: "Nappage neutre", amount: 300, unit: "g", note: "Glaçage" },
    { name: "Colorant jaune/ocre", amount: 2, unit: "g", note: "Glaçage" }
  ],

  steps: [
    { 
      title: "Les Biscuits & Inserts (J-1)", 
      text: "Poires Confites : Sauter les dés de poire au beurre et sucre. Flamber au Cognac. Ajouter la vanille. Cuire jusqu'à tendreté. Ajouter la gélatine hydratée. Mouler dans 4 cercles de 18cm. Congeler. Biscuit Pain d'épices : Chauffer lait, sucre, miel. Verser sur les poudres tamisées. Ajouter le beurre fondu. Cuire sur plaque 40x60cm à 170°C, 15 min. Détailler 4 disques de 18cm. Streusel : Sabler tous les ingrédients. Cuire à 160°C jusqu'à coloration dorée. Émietter." 
    },
    { 
      title: "Mousse & Crémeux (J-1)", 
      text: "Crémeux Lacté : Réaliser une crème anglaise (cuisson 83°C) avec lait, crème, jaunes, sucre. Verser sur le chocolat lait + gélatine. Mixer. Mousse Poire : Chauffer une partie de la purée avec le sucre et la gélatine. Refroidir. Ajouter l'alcool puis la crème montée." 
    }
  ],

  advices: ["Le biscuit pain d'épices est dense, imbibez-le légèrement avec le jus des poires confites."],
  chefQuote: "L'alcool de poire est facultatif mais il exalte le goût du fruit.",
  equipment: ["Cercles 22cm", "Cercles 18cm", "Batteur"]
};

export default entremetsPoireEpicesNoisette;