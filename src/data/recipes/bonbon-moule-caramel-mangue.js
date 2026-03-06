const bonbonMouleCaramelMangue = {
  id: "bonbon-moule-caramel-mangue",
  title: "Bonbon Moulé Caramel Mangue",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: false,
  prepTime: "2H + 2H (Repos)",
  cookTime: "30 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une coque fine en chocolat au lait renfermant un cœur coulant de caramel exotique à la mangue. L'alliance parfaite entre la douceur lactée et le fruité acidulé.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8c854e72d9bd134985b3024ad0d26079.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Caramel" },
    { name: "Sirop de glucose", amount: 25, unit: "g", note: "Caramel" },
    { name: "Purée de mangue", amount: 85, unit: "g", note: "Chaude" },
    { name: "Crème fleurette 35%", amount: 45, unit: "g", note: "Chaude" },
    { name: "Beurre doux", amount: 25, unit: "g", note: "Finition" },
    { name: "Couverture Lait 40%", amount: 500, unit: "g", note: "Moulage" }
  ],

  steps: [
    { 
      title: "Le Caramel Mangue", 
      text: "Chauffer la crème et la purée de mangue ensemble (sans bouillir). Réaliser un caramel à sec (couleur blonde) avec le sucre et le glucose. Ne pas trop pousser la couleur pour préserver le goût du fruit." 
    },
    { 
      title: "Le Déglaçage", 
      text: "Déglacer le caramel avec le mélange crème/mangue chaud (attention aux projections). Cuire le tout jusqu'à 106°C précisément." 
    },
    { 
      title: "L'Emulsion", 
      text: "Hors du feu, attendre que la température redescende vers 45°C, puis incorporer le beurre coupé en dés et émulsionner au mixeur plongeant. Laisser refroidir à 27-28°C." 
    },
    { 
      title: "Le Moulage", 
      text: "Mouler les coques en chocolat lait. Laisser cristalliser." 
    },
    { 
      title: "Garnissage et Obturation", 
      text: "Pocher le caramel dans les coques (laisser 2mm). Laisser croûter 2h. Obturer avec du chocolat lait tempéré." 
    }
  ],

  advices: [
    "La température de 106°C est critique : en dessous, le caramel sera trop liquide ; au-dessus, trop dur."
  ],
  chefQuote: "La mangue apporte une onctuosité naturelle. Chauffez toujours le liquide avant de déglacer pour éviter le choc thermique.",
  equipment: [
    "Moule Polycarbonate",
    "Thermomètre",
    "Mixeur"
  ]
};

export default bonbonMouleCaramelMangue;