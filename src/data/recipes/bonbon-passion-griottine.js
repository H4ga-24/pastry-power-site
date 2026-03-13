const bonbonPassionGriottine = {
  id: "bonbon-passion-griottine",
  title: "Bonbon Chocolat Passion Griottine",
  category: "Chocolaterie",
  subCategory: [],
  isVip: true,
  prepTime: "2H + 24H (Cristallisation)",
  cookTime: "30 MIN",
  difficulty: "EXPERT",
  description: "L'alliance audacieuse de l'exotisme et du terroir. Une griottine alcoolisÃ©e entiÃ¨re nichÃ©e au cÅ“ur d'une ganache caramel-passion, sous une coque de chocolat noir croquante.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3505a02f07aaef90c26876afdf520f07.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 640, unit: "g", note: "Caramel" },
    { name: "Sirop de glucose", amount: 200, unit: "g", note: "Caramel" },
    { name: "PurÃ©e de fruit de la passion", amount: 600, unit: "g", note: "Chaude" },
    { name: "Chocolat Lait 40%", amount: 1280, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 80, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 240, unit: "g", note: "Ganache" },
    { name: "Sorbitol", amount: 80, unit: "g", note: "Ganache" },
    { name: "Griottines (Cerises Ã  l'eau de vie)", amount: 714, unit: "piÃ¨ces", note: "1 par bonbon" },
    { name: "Couverture Noire 65%", amount: 2500, unit: "g", note: "Moulage" }
  ],

  steps: [
    { 
      title: "Le Caramel Passion", 
      text: "Cuire sucre et glucose Ã  175Â°C (ambrÃ© rouge). DÃ©glacer petit Ã  petit avec la purÃ©e de passion chaude (attention aux projections). Refroidir le sirop Ã  70Â°C." 
    },
    { 
      title: "L'Emulsion", 
      text: "Verser sur chocolat lait, beurre de cacao et sorbitol. Mixer. Ã€ 40Â°C, ajouter le beurre. Filmer au contact et refroidir Ã  25Â°C." 
    },
    { 
      title: "Moulage et Garnissage", 
      text: "Mouler les coques en noir. DÃ©poser une griottine parfaitement Ã©gouttÃ©e au fond. Pocher la ganache Ã  25Â°C par-dessus en laissant 1mm." 
    },
    { 
      title: "Fermeture", 
      text: "Laisser cristalliser 24h Ã  17Â°C. Obturer avec couverture noire tempÃ©rÃ©e." 
    }
  ],

  advices: [
    "Ã‰gouttez les griottines la veille sur papier absorbant, sinon l'alcool dÃ©trempera le bonbon de l'intÃ©rieur."
  ],
  chefQuote: "Le caramel doit Ãªtre poussÃ© Ã  175Â°C pour contrer l'aciditÃ© de la passion.",
  equipment: [
    "Moule Polycarbonate",
    "ThermomÃ¨tre",
    "Mixeur"
  ]
};

export default bonbonPassionGriottine;
