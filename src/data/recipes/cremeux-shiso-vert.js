const cremeuxShisoVert = {
  id: "cremeux-shiso-vert",
  title: "Crémeux Shiso Vert",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une création originale aux notes herbacées et poivrées caractéristiques du shiso, parfaite pour accompagner des agrumes (yuzu, citron vert) ou des fruits rouges.",
  image: "https://img-global.cpcdn.com/recipes/b02d5c2e75a6a9df/1200x630cq80/photo.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 200, unit: "g" },
    { name: "Lait entier", amount: 200, unit: "g" },
    { name: "Feuilles de Shiso vert", amount: 15, unit: "pièces" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 40, unit: "g" },
    { name: "Chocolat blanc 33%", amount: 120, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Chauffer le lait et la crème. Ajouter les feuilles de shiso ciselées. Filmer et laisser infuser 20 min." 
    },
    { 
      title: "La cuisson", 
      text: "Chinoiser en pressant bien. Compléter le poids si nécessaire. Cuire à l'anglaise avec jaunes et sucre (83°C)." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer la gélatine hydratée. Verser sur le chocolat blanc." 
    },
    { 
      title: "L'émulsion", 
      text: "Mixer pour lisser et homogénéiser." 
    }
  ],

  advices: [
    "Le shiso est fragile, ne le faites pas bouillir trop longtemps, l'infusion hors du feu préserve mieux ses arômes."
  ],
  chefQuote: "Une herbe japonaise fascinante qui apporte une fraîcheur unique, entre la menthe, le basilic et le cumin.",
  equipment: [
    "Chinois",
    "Casserole",
    "Mixeur"
  ]
};

export default cremeuxShisoVert;