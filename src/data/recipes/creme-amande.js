const cremeAmande = {
  id: "creme-amande",
  title: "Crème d'Amande",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "25 MIN", // Temps de cuisson estimé dans une tarte
  difficulty: "FACILE",
  description: "La base de la galette des rois et des tartes amandine (Bourdaloue). Un mélange riche et fondant.",
  image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/E3B8F710-97E6-4EC2-9620-704C6389BB4A/Derivates/B58E50E2-EA68-4972-8E6C-E9DE1BD6BF52.jpg",
  baseServings: 1, // Environ 400g de crème
  
  ingredients: [
    { name: "Beurre pommade", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Poudre d'amande", amount: 100, unit: "g" },
    { name: "Œufs entiers", amount: 100, unit: "g" },
    { name: "Fécule de maïs (Maïzena)", amount: 10, unit: "g", note: "Facultatif" }
  ],

  steps: [
    { 
      title: "Le crémage", 
      text: "Dans un bol, travailler le beurre pommade avec le sucre jusqu'à obtenir une texture crémeuse. Ne pas trop foisonner (incorporer d'air) pour éviter que la crème ne gonfle trop et ne retombe à la cuisson." 
    },
    { 
      title: "Les poudres", 
      text: "Ajouter la poudre d'amande (et la fécule si utilisée). Mélanger." 
    },
    { 
      title: "Les œufs", 
      text: "Incorporer les œufs un par un en mélangeant bien entre chaque ajout pour éviter que la masse ne tranche (se sépare). Si elle tranche, chauffer légèrement le bol." 
    },
    { 
      title: "Utilisation", 
      text: "Utiliser immédiatement pour garnir un fond de tarte ou une galette, ou réserver au frais." 
    }
  ],

  advices: [
    "Le 'Tant pour Tant' est la règle d'or : même poids de beurre, sucre, poudre d'amande et œufs."
  ],
  chefQuote: "Ajoutez un bouchon de rhum brun pour parfumer votre crème d'amande, c'est ce qui fait toute la différence dans une galette.",
  equipment: [
    "Cul-de-poule",
    "Spatule ou Fouet"
  ]
};

export default cremeAmande;