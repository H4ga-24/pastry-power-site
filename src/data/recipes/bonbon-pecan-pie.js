const bonbonPecanPie = {
  id: "bonbon-pecan-pie",
  title: "Bonbon Chocolat Pécan Pie",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: true,
  prepTime: "2H",
  cookTime: "45 MIN",
  difficulty: "AVANCÉ",
  description: "Un bi-couche gourmand : caramel vanille onctueux et praliné pécan croustillant, enrobé de chocolat noir.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/06e08202c0ddee0236bec58bc395cb43.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 800, unit: "g" },
    { name: "Sirop de glucose DE60", amount: 800, unit: "g" },
    { name: "Crème liquide 35%", amount: 1200, unit: "g" },
    { name: "Gousses de vanille", amount: 5, unit: "pièces" },
    { name: "Sorbitol poudre", amount: 80, unit: "g" },
    { name: "Beurre de cacao", amount: 150, unit: "g" },
    { name: "Beurre doux", amount: 300, unit: "g" },
    { name: "Fleur de sel", amount: 8, unit: "g" },
    { name: "Noix de pécan torréfiées", amount: 1500, unit: "g" },
    { name: "Sucre caramel", amount: 1000, unit: "g" },
    { name: "Couverture Lait 40%", amount: 600, unit: "g" },
    { name: "Brisures de sablé", amount: 300, unit: "g" },
    { name: "Couverture Noire 64%", amount: 2500, unit: "g" }
  ],

  steps: [
    { 
      title: "Le Caramel Vanille", 
      text: "Infuser vanille dans crème. Cuire sucre et glucose à 185°C. Décuire avec crème chaude, sorbitol, sel. Recuire à 106°C. Ajouter beurres à 40°C. Couler en cadre (4mm)." 
    },
    { 
      title: "Le Praliné Pécan", 
      text: "Réaliser le praliné. Mélanger avec couverture lait et beurre de cacao fondus (26°C). Ajouter sablé. Couler sur le caramel (6mm)." 
    },
    { 
      title: "Finition", 
      text: "Cristalliser 24h. Chablonner, détailler. Enrober noir avec décor pécan." 
    }
  ],

  advices: [
    "Ne descendez pas la cuisson du caramel sous 105°C pour garantir la tenue à la découpe."
  ],
  chefQuote: "Torréfiez bien les pécans pour qu'elles existent face au caramel.",
  equipment: [
    "Cadre 34x34cm",
    "Guitare",
    "Thermomètre"
  ]
};

export default bonbonPecanPie;