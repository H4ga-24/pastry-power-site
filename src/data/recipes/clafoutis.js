const clafoutis = {
  id: "clafoutis",
  title: "Clafoutis aux Cerises",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"], // Limousin !
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Le dessert rustique par excellence. Les puristes gardent les noyaux pour plus de goût !",
  image: "https://www.hervecuisine.com/wp-content/uploads/2020/05/recette-clafoutis-facile.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Cerises (avec noyaux)", amount: 500, unit: "g" },
    { name: "Œufs entiers", amount: 4, unit: "pièces" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 250, unit: "ml" },
    { name: "Beurre fondu", amount: 40, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Laver et équeuter les cerises. Garder les noyaux." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les œufs et le sucre. Ajouter la farine, puis le beurre fondu et le lait petit à petit pour éviter les grumeaux. Ajouter la vanille." 
    },
    { 
      title: "Cuisson", 
      text: "Disposer les cerises dans un plat beurré. Verser l'appareil dessus. Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Les noyaux donnent un petit goût d'amande à la pâte en cuisant et empêchent le jus de cerise de détremper le clafoutis."
  ],
  chefQuote: "Servez-le tiède, c'est là qu'il est le meilleur.",
  equipment: [
    "Plat à gratin",
    "Fouet",
    "Cul-de-poule"
  ]
};

export default clafoutis;