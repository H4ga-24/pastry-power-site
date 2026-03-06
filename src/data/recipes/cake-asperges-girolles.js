const cakeAspergesGirolles = {
  id: "cake-asperges-girolles",
  title: "Cake Asperges & Girolles",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Un cake forestier et printanier très parfumé grâce à la poêlée de champignons.",
  image: "https://static.750g.com/images/1200-630/3acc5362272b9e86cea229db61b7222b/cake-aux-asperges-et-au-colin.png",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 3, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Pointes d'asperges", amount: 150, unit: "g" },
    { name: "Girolles", amount: 100, unit: "g" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Échalote", amount: 1, unit: "pièce" },
    { name: "Thym", amount: 3, unit: "g" },
    { name: "Graines coriandre", amount: 10, unit: "pièces" }
  ],

  steps: [
    { 
      title: "Légumes", 
      text: "Blanchir les asperges. Poêler les girolles et l'échalote au beurre avec thym et coriandre jusqu'à évaporation de l'eau." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure. Ajouter œufs, huile, lait. Lisser." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer gruyère, asperges et poêlée de girolles refroidie. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Faites bien rendre l'eau aux champignons, sinon ils détremperont le cake."
  ],
  chefQuote: "La coriandre et le thym dans la poêlée de champignons changent tout !",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeAspergesGirolles;