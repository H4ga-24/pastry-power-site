const bonbonPralinePistache = {
  id: "bonbon-praline-pistache",
  title: "Bonbon PralinÃ© Pistache & PÃ¢te d'Amande",
  category: "Chocolaterie",
  subCategory: [],
  isVip: true,
  prepTime: "24H + 2H",
  cookTime: "30 MIN",
  difficulty: "AVANCÃ‰",
  description: "Alliance bicolore : pÃ¢te d'amande pistache et pralinÃ© pistache, enrobÃ©s de noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6602fa78c747e52c6aa45139ecfde50b.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "PÃ¢te d'amande 50%", amount: 450, unit: "g" },
    { name: "PÃ¢te de pistache", amount: 80, unit: "g" },
    { name: "Kirsch", amount: 20, unit: "g" },
    { name: "PralinÃ© Pistache 42%", amount: 400, unit: "g" },
    { name: "Couverture Ivoire", amount: 100, unit: "g" },
    { name: "Beurre de cacao", amount: 20, unit: "g" },
    { name: "Ã‰clats de pistaches", amount: 50, unit: "g" },
    { name: "Couverture Noire", amount: 800, unit: "g" }
  ],

  steps: [
    { 
      title: "PÃ¢te d'Amande", 
      text: "MÃ©langer pÃ¢te d'amande, pÃ¢te de pistache, Kirsch. Ã‰taler (5mm). CroÃ»ter 24h." 
    },
    { 
      title: "Montage", 
      text: "Coller au sirop lÃ©ger. MÃ©langer pralinÃ©, couverture ivoire fondue, beurre de cacao, Ã©clats. Couler dessus." 
    },
    { 
      title: "Finition", 
      text: "Cristalliser 24h. DÃ©tailler et enrober noir." 
    }
  ],

  advices: [
    "Appliquez le sirop de collage en couche trÃ¨s fine pour Ã©viter le glissement."
  ],
  chefQuote: "Pochez des traits de chocolat blanc sur le dessus avant enrobage pour le relief.",
  equipment: [
    "Cadre",
    "Batteur"
  ]
};

export default bonbonPralinePistache;
