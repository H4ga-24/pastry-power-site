const cremeuxFleurOranger = {
  id: "cremeux-fleur-oranger",
  title: "Crémeux Fleur d'Oranger",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Un parfum délicat qui évoque la Méditerranée, idéal pour des desserts orientaux revisités ou pour accompagner des fruits secs.",
  image: "https://www.elle-et-vire.com/uploads/cache/930w/uploads/recip/recipe/1830/cr-me-l-orange-1-1920x1200.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 250, unit: "g" },
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Eau de fleur d'oranger", amount: 25, unit: "g" },
    { name: "Jaunes d'œufs", amount: 90, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Chocolat blanc", amount: 80, unit: "g" }
  ],

  steps: [
    { 
      title: "La crème anglaise", 
      text: "Chauffer le lait et la crème. Fouetter jaunes et sucre. Cuire le mélange à la nappe (83°C)." 
    },
    { 
      title: "Le parfum", 
      text: "Hors du feu, ajouter l'eau de fleur d'oranger (ne pas la faire bouillir pour conserver ses arômes volatils)." 
    },
    { 
      title: "Le collage", 
      text: "Incorporer la gélatine réhydratée. Verser le tout sur le chocolat blanc." 
    },
    { 
      title: "L'émulsion", 
      text: "Attendre 1 minute que le chocolat fonde, puis mixer pour obtenir une texture lisse et soyeuse." 
    }
  ],

  advices: [
    "Utilisez une eau de fleur d'oranger de qualité (distillée), pas un arôme artificiel qui a souvent un goût chimique."
  ],
  chefQuote: "Ce crémeux se marie très bien avec une dacquoise amande ou pistache.",
  equipment: [
    "Casserole",
    "Mixeur plongeant",
    "Cul-de-poule"
  ]
};

export default cremeuxFleurOranger;