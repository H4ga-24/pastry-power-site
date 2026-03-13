const bonbonPecanPie = {
  id: "bonbon-pecan-pie",
  title: "Bonbon Chocolat PÃ©can Pie",
  category: "Chocolaterie",
  subCategory: [],
  isVip: true,
  prepTime: "2H",
  cookTime: "45 MIN",
  difficulty: "AVANCÃ‰",
  description: "Un bi-couche gourmand : caramel vanille onctueux et pralinÃ© pÃ©can croustillant, enrobÃ© de chocolat noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/06e08202c0ddee0236bec58bc395cb43.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 800, unit: "g" },
    { name: "Sirop de glucose DE60", amount: 800, unit: "g" },
    { name: "CrÃ¨me liquide 35%", amount: 1200, unit: "g" },
    { name: "Gousses de vanille", amount: 5, unit: "piÃ¨ces" },
    { name: "Sorbitol poudre", amount: 80, unit: "g" },
    { name: "Beurre de cacao", amount: 150, unit: "g" },
    { name: "Beurre doux", amount: 300, unit: "g" },
    { name: "Fleur de sel", amount: 8, unit: "g" },
    { name: "Noix de pÃ©can torrÃ©fiÃ©es", amount: 1500, unit: "g" },
    { name: "Sucre caramel", amount: 1000, unit: "g" },
    { name: "Couverture Lait 40%", amount: 600, unit: "g" },
    { name: "Brisures de sablÃ©", amount: 300, unit: "g" },
    { name: "Couverture Noire 64%", amount: 2500, unit: "g" }
  ],

  steps: [
    { 
      title: "Le Caramel Vanille", 
      text: "Infuser vanille dans crÃ¨me. Cuire sucre et glucose Ã  185Â°C. DÃ©cuire avec crÃ¨me chaude, sorbitol, sel. Recuire Ã  106Â°C. Ajouter beurres Ã  40Â°C. Couler en cadre (4mm)." 
    },
    { 
      title: "Le PralinÃ© PÃ©can", 
      text: "RÃ©aliser le pralinÃ©. MÃ©langer avec couverture lait et beurre de cacao fondus (26Â°C). Ajouter sablÃ©. Couler sur le caramel (6mm)." 
    },
    { 
      title: "Finition", 
      text: "Cristalliser 24h. Chablonner, dÃ©tailler. Enrober noir avec dÃ©cor pÃ©can." 
    }
  ],

  advices: [
    "Ne descendez pas la cuisson du caramel sous 105Â°C pour garantir la tenue Ã  la dÃ©coupe."
  ],
  chefQuote: "TorrÃ©fiez bien les pÃ©cans pour qu'elles existent face au caramel.",
  equipment: [
    "Cadre 34x34cm",
    "Guitare",
    "ThermomÃ¨tre"
  ]
};

export default bonbonPecanPie;
