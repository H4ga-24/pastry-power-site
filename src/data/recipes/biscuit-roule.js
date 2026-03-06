const biscuitRoule = {
  id: "biscuit-roule",
  title: "Biscuit Roulé",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10-12 MIN",
  difficulty: "FACILE",
  description: "Le biscuit souple par excellence. Sa technique d'incorporation lui permet d'être roulé à chaud ou à froid sans jamais se casser. Indispensable pour les bûches de Noël !",
  image: "https://www.encuisinant.com/wp-content/uploads/2020/12/biscuit-roule.jpg",
  baseServings: 1, // 1 plaque
  
  ingredients: [
    { name: "Jaunes d'œufs", amount: 100, unit: "g" },
    { name: "Sucre semoule (pour les jaunes)", amount: 50, unit: "g" },
    { name: "Blancs d'œufs", amount: 150, unit: "g" },
    { name: "Sucre semoule (pour les blancs)", amount: 75, unit: "g" },
    { name: "Farine T55", amount: 75, unit: "g" },
    { name: "Huile neutre (pépin de raisin)", amount: 30, unit: "g", note: "Facultatif mais recommandé" }
  ],

  steps: [
    { 
      title: "Le Blanchiment", 
      text: "Blanchir fortement les jaunes avec la première partie du sucre (50g) jusqu'à ce que le mélange double de volume et s'éclaircisse." 
    },
    { 
      title: "La Meringue", 
      text: "Monter les blancs en neige en ajoutant les 75g de sucre en trois fois. Ils doivent être fermes mais rester souples." 
    },
    { 
      title: "Le Détente", 
      text: "Mélanger vigoureusement un quart des blancs montés dans l'appareil aux jaunes pour détendre la masse. Si vous utilisez de l'huile, ajoutez-la à ce moment-là." 
    },
    { 
      title: "Le Mélange", 
      text: "Ajouter la farine tamisée, puis incorporer délicatement le reste des blancs montés à l'aide d'une maryse." 
    },
    { 
      title: "La Cuisson", 
      text: "Étaler uniformément sur une plaque chemisée de papier cuisson (environ 1 cm d'épaisseur). Enfourner à 190°C pendant 10 à 12 minutes." 
    },
    { 
      title: "Le Roulage", 
      text: "Dès la sortie du four, retourner le biscuit sur un torchon propre et légèrement humide ou sur une nouvelle feuille de papier cuisson. Décoller doucement le papier de cuisson et rouler le biscuit immédiatement." 
    }
  ],

  advices: [
    "L'ajout d'une petite quantité d'huile (contrairement au beurre qui fige en refroidissant) permet de conserver l'humidité et l'extrême souplesse du biscuit même après passage au réfrigérateur.",
    "Pensez à puncher (imbiber) légèrement votre biscuit avec un sirop avant de le garnir de votre crème."
  ],
  chefQuote: "Ne sur-cuisez pas ce biscuit. Dès qu'il est blond et qu'il rebondit légèrement sous la pression du doigt, il est prêt. Une minute de trop et il se fissurera lors du roulage.",
  equipment: [
    "Plaque de cuisson",
    "Spatule coudée",
    "Torchon propre (pour le roulage)",
    "Maryse"
  ]
};

export default biscuitRoule;