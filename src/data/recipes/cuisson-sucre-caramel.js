const cuissonSucreCaramel = {
  id: "cuisson-sucre-caramel",
  title: "Cuisson Sucre Caramel (Glaçage)",
  category: "Pâtisserie",
  subCategory: ["Glaçages"], // Ou Confiserie Diverse, mais Glaçage est pertinent pour les choux
  isVip: true,
  prepTime: "5 MIN",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "Le caramel 'grand cassé' utilisé pour coller les choux des pièces montées et les glacer pour obtenir ce craquant vitrifié caractéristique.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/caramel-a-croquembouche/caramel-a-croquembouche-1200.jpg",
  baseServings: 1, // Pour glacer ~30 choux
  
  ingredients: [
    { name: "Sucre morceaux (n°4)", amount: 300, unit: "g" },
    { name: "Eau", amount: 100, unit: "g" },
    { name: "Sirop de glucose", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "La dissolution", 
      text: "Mettre l'eau, le sucre et le glucose dans une casserole propre (en cuivre de préférence). Chauffer doucement pour dissoudre le sucre sans éclabousser les bords." 
    },
    { 
      title: "La cuisson", 
      text: "Porter à ébullition. Écumer si nécessaire. Cuire jusqu'à obtention d'une couleur blond clair. Attention, la coloration va très vite à la fin." 
    },
    { 
      title: "L'arrêt de cuisson", 
      text: "Dès que la couleur est atteinte, tremper le fond de la casserole dans un récipient d'eau froide pour stopper net la cuisson." 
    },
    { 
      title: "L'utilisation", 
      text: "Utiliser immédiatement pour glacer ou coller. Si le caramel durcit trop, le réchauffer très doucement." 
    }
  ],

  advices: [
    "Le glucose empêche le sucre de masser (recristalliser) et apporte de la souplesse."
  ],
  chefQuote: "Ne remuez jamais un sirop de sucre avec une cuillère pendant la cuisson, cela le ferait masser. Contentez-vous de tourner la casserole.",
  equipment: [
    "Casserole cuivre ou inox",
    "Thermomètre confiseur (facultatif)"
  ]
};

export default cuissonSucreCaramel;