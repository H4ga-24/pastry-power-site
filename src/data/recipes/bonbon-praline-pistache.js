const bonbonPralinePistache = {
  id: "bonbon-praline-pistache",
  title: "Bonbon Praliné Pistache & Pâte d'Amande",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: true,
  prepTime: "24H + 2H",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "Alliance bicolore : pâte d'amande pistache et praliné pistache, enrobés de noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6602fa78c747e52c6aa45139ecfde50b.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Pâte d'amande 50%", amount: 450, unit: "g" },
    { name: "Pâte de pistache", amount: 80, unit: "g" },
    { name: "Kirsch", amount: 20, unit: "g" },
    { name: "Praliné Pistache 42%", amount: 400, unit: "g" },
    { name: "Couverture Ivoire", amount: 100, unit: "g" },
    { name: "Beurre de cacao", amount: 20, unit: "g" },
    { name: "Éclats de pistaches", amount: 50, unit: "g" },
    { name: "Couverture Noire", amount: 800, unit: "g" }
  ],

  steps: [
    { 
      title: "Pâte d'Amande", 
      text: "Mélanger pâte d'amande, pâte de pistache, Kirsch. Étaler (5mm). Croûter 24h." 
    },
    { 
      title: "Montage", 
      text: "Coller au sirop léger. Mélanger praliné, couverture ivoire fondue, beurre de cacao, éclats. Couler dessus." 
    },
    { 
      title: "Finition", 
      text: "Cristalliser 24h. Détailler et enrober noir." 
    }
  ],

  advices: [
    "Appliquez le sirop de collage en couche très fine pour éviter le glissement."
  ],
  chefQuote: "Pochez des traits de chocolat blanc sur le dessus avant enrobage pour le relief.",
  equipment: [
    "Cadre",
    "Batteur"
  ]
};

export default bonbonPralinePistache;