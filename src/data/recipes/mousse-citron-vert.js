const mousseCitronVert = {
  id: "mousse-citron-vert",
  title: "Mousse Citron Vert",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse très rafraîchissante, parfaite pour terminer un repas copieux. Elle s'associe très bien avec la noix de coco ou la fraise.",
  image: "https://img.cuisineaz.com/1024x768/2016/07/14/i79813-mousse-citron-vert.jpg",
  baseServings: 1, // pour 1 entremets
  
  ingredients: [
    { name: "Jus de citron vert", amount: 120, unit: "ml" },
    { name: "Zestes de citron vert", amount: 2, unit: "pièces" },
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 4, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jaunes d'oeufs", amount: 3, unit: "pièces", note: "pour la base" }
  ],

  steps: [
    { 
      title: "CRÈME CITRON", 
      text: "Cuire le jus, les zestes, le sucre et les jaunes comme une crème pâtissière (85°C) pour faire une base." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine réhydratée dans la crème chaude. Bien mélanger." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser refroidir la base citron jusqu'à 30°C." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème liquide en chantilly souple." 
    },
    { 
      title: "INCORPORATION", 
      text: "Incorporer délicatement la chantilly à la base citron." 
    },
    { 
      title: "REPOS", 
      text: "Laisser prendre au froid pendant 4h minimum." 
    }
  ],

  advices: ["Attention à ne pas faire bouillir la crème citron, sinon les jaunes coagulent."],
  chefQuote: "Pour plus de fraîcheur, zestez un peu de citron vert frais sur la mousse au moment de servir.",
  equipment: ["Casserole", "Thermomètre", "Batteur"]
};

export default mousseCitronVert;