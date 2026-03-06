const eclair = {
  id: "eclair",
  title: "L'Éclair",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"],
  isVip: false,
  prepTime: "1H",
  cookTime: "35 MIN",
  difficulty: "MOYEN",
  description: "Le grand classique de la pâtisserie. Un chou allongé cuit à la perfection, garni d'une crème pâtissière onctueuse et glacé au fondant.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/eclair-chocolat/eclair-chocolat-1200.jpg",
  baseServings: 8,
  
  ingredients: [
    { name: "Pâte à choux", amount: 450, unit: "g" },
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Poudre à crème/Maïzena", amount: 45, unit: "g" },
    { name: "Beurre", amount: 50, unit: "g" },
    { name: "Chocolat noir 65%", amount: 100, unit: "g" },
    { name: "Fondant pâtissier", amount: 350, unit: "g" },
    { name: "Sirop de sucre (30°B)", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "Dressage des éclairs", 
      text: "Utilisez une douille cannelée de 14mm (PF14) pour des éclairs réguliers qui ne craquent pas. Dressez des boudins de 12 à 13 cm de long sur plaque légèrement graissée, bien espacés. Coupez la pâte proprement à la fin du dressage." 
    },
    { 
      title: "Cuisson", 
      text: "Enfournez à 170°C chaleur ventilée. Cuisez environ 35 à 45 minutes sans ouvrir. Les éclairs doivent être bien dorés et sonner creux. Laissez refroidir sur grille." 
    },
    { 
      title: "Crème pâtissière au chocolat", 
      text: "Faites bouillir le lait. Fouettez les jaunes avec le sucre et la poudre à crème. Versez le lait chaud dessus, remettez en casserole et faites épaissir à feu moyen (1 min d'ébullition). Hors du feu, ajoutez le chocolat haché et le beurre. Mixez, filmez au contact et refroidissez rapidement." 
    },
    { 
      title: "Garnissage", 
      text: "Percez 3 trous au dos des éclairs. Fouettez la crème froide pour la lisser. Remplissez une poche sans douille (ou petite douille unie). Garnissez généreusement les éclairs jusqu'à ce qu'ils soient lourds et que la crème ressorte légèrement." 
    },
    { 
      title: "Le Glaçage", 
      text: "Réchauffez le fondant au bain-marie à 35°C (pas plus, sinon il ternit). Ajoutez un peu de cacao poudre dissous dans du sirop pour la couleur et détendez si nécessaire. Trempez le dessus de l'éclair, essuyez les bords avec le doigt pour un contour net." 
    }
  ],

  advices: [
    "Ne jamais ouvrir le four pendant les 20 premières minutes de cuisson, sinon la pâte à choux retombe."
  ],
  chefQuote: "Pour un glaçage ultra-brillant, ajoutez une cuillère à café de sirop de glucose dans le fondant.",
  equipment: [
    "Poche à douille",
    "Douille PF14 (cannelée)",
    "Thermomètre"
  ]
};

export default eclair;