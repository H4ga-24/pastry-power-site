const bonbonPassionGriottine = {
  id: "bonbon-passion-griottine",
  title: "Bonbon Chocolat Passion Griottine",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: true,
  prepTime: "2H + 24H (Cristallisation)",
  cookTime: "30 MIN",
  difficulty: "EXPERT",
  description: "L'alliance audacieuse de l'exotisme et du terroir. Une griottine alcoolisée entière nichée au cœur d'une ganache caramel-passion, sous une coque de chocolat noir croquante.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3505a02f07aaef90c26876afdf520f07.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 640, unit: "g", note: "Caramel" },
    { name: "Sirop de glucose", amount: 200, unit: "g", note: "Caramel" },
    { name: "Purée de fruit de la passion", amount: 600, unit: "g", note: "Chaude" },
    { name: "Chocolat Lait 40%", amount: 1280, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 80, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 240, unit: "g", note: "Ganache" },
    { name: "Sorbitol", amount: 80, unit: "g", note: "Ganache" },
    { name: "Griottines (Cerises à l'eau de vie)", amount: 714, unit: "pièces", note: "1 par bonbon" },
    { name: "Couverture Noire 65%", amount: 2500, unit: "g", note: "Moulage" }
  ],

  steps: [
    { 
      title: "Le Caramel Passion", 
      text: "Cuire sucre et glucose à 175°C (ambré rouge). Déglacer petit à petit avec la purée de passion chaude (attention aux projections). Refroidir le sirop à 70°C." 
    },
    { 
      title: "L'Emulsion", 
      text: "Verser sur chocolat lait, beurre de cacao et sorbitol. Mixer. À 40°C, ajouter le beurre. Filmer au contact et refroidir à 25°C." 
    },
    { 
      title: "Moulage et Garnissage", 
      text: "Mouler les coques en noir. Déposer une griottine parfaitement égouttée au fond. Pocher la ganache à 25°C par-dessus en laissant 1mm." 
    },
    { 
      title: "Fermeture", 
      text: "Laisser cristalliser 24h à 17°C. Obturer avec couverture noire tempérée." 
    }
  ],

  advices: [
    "Égouttez les griottines la veille sur papier absorbant, sinon l'alcool détrempera le bonbon de l'intérieur."
  ],
  chefQuote: "Le caramel doit être poussé à 175°C pour contrer l'acidité de la passion.",
  equipment: [
    "Moule Polycarbonate",
    "Thermomètre",
    "Mixeur"
  ]
};

export default bonbonPassionGriottine;