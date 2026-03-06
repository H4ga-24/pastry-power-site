const cremeuxEstragon = {
  id: "cremeux-estragon",
  title: "Crémeux Estragon",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "L'estragon apporte une note anisée surprenante et fraîche, qui sublime les desserts aux fruits rouges ou au citron.",
  image: "https://www.ateliersetsaveurs.com/uploads/recipes/culinary/pictures/large/965-20181015114128.jpg",
  baseServings: 6, // 6 verrines ou un insert de 18cm
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 200, unit: "g" },
    { name: "Lait entier", amount: 200, unit: "g" },
    { name: "Estragon frais", amount: 15, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 45, unit: "g" },
    { name: "Chocolat blanc", amount: 110, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Faire chauffer le lait et la crème. Ajouter l'estragon grossièrement ciselé. Couvrir et laisser infuser 20 minutes hors du feu." 
    },
    { 
      title: "La préparation", 
      text: "Filtrer (chinoiser) le mélange. Peser et compléter avec un peu de lait si le poids a diminué. Réhydrater la gélatine." 
    },
    { 
      title: "La cuisson", 
      text: "Verser le liquide sur les jaunes et le sucre mélangés. Cuire le tout à la nappe (83°C) comme une crème anglaise." 
    },
    { 
      title: "Le collage et l'émulsion", 
      text: "Hors du feu, ajouter la gélatine essorée. Verser le tout sur le chocolat blanc haché. Laisser fondre 1 min puis mixer pour lisser." 
    }
  ],

  advices: [
    "Utilisez de l'estragon frais uniquement, l'estragon séché donnerait un goût de foin désagréable."
  ],
  chefQuote: "Osez l'associer avec une compotée de fraises ou de rhubarbe, c'est divin.",
  equipment: [
    "Casserole",
    "Chinois étamine",
    "Mixeur plongeant"
  ]
};

export default cremeuxEstragon;