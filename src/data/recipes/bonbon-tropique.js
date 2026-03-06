const bonbonTropique = {
  id: "bonbon-tropique",
  title: "Bonbon Tropique (Fraise & Pamplemousse)",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: true,
  prepTime: "2H 30",
  cookTime: "40 MIN",
  difficulty: "EXPERT",
  description: "L'acidité vibrante du pamplemousse et la douceur de la fraise en deux textures : pâte de fruit fondante et ganache soyeuse.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/984357cb94617ab514d713ee79520a0b.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Pulpe de fraise", amount: 750, unit: "g" },
    { name: "Pulpe de pamplemousse", amount: 550, unit: "g" },
    { name: "Sucre semoule", amount: 1000, unit: "g" },
    { name: "Pectine jaune", amount: 22, unit: "g" },
    { name: "Sirop de glucose", amount: 250, unit: "g" },
    { name: "Acide tartrique", amount: 22, unit: "g" },
    { name: "Couverture Blanche", amount: 950, unit: "g" },
    { name: "Beurre doux", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "La Pâte de Fruit", 
      text: "Cuire 400g de pulpe de chaque fruit avec sucre/pectine. Ajouter le glucose. Cuire à 107°C. Ajouter l'acide. Couler en cadre (4mm)." 
    },
    { 
      title: "La Ganache", 
      text: "Chauffer le reste des pulpes à 40°C. Émulsionner sur le chocolat blanc fondu. Ajouter le beurre à 35°C." 
    },
    { 
      title: "Le Montage", 
      text: "Couler la ganache (à 30°C max) sur la pâte de fruit froide. Laisser cristalliser 24h." 
    },
    { 
      title: "Finition", 
      text: "Détailler et enrober avec une couverture blanche ou blonde (Dulcey)." 
    }
  ],

  advices: [
    "Ne coulez jamais la ganache chaude (>32°C) sur la pâte de fruit, sinon la surface va fondre."
  ],
  chefQuote: "L'acide tartrique est indispensable pour 'réveiller' le goût du fruit masqué par le sucre.",
  equipment: [
    "Réfractomètre",
    "Cadre",
    "Mixeur"
  ]
};

export default bonbonTropique;