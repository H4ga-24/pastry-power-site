const cremeuxVanilleChocolatBlanc = {
  id: "cremeux-vanille-chocolat-blanc",
  title: "Crémeux Vanille Chocolat Blanc",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Une texture soyeuse et très gourmande, alliant la douceur lactée du chocolat blanc à la rondeur de la vanille.",
  image: "https://mapatisserie.fr/wp-content/uploads/2025/12/ganache-montee-chocolat-blanc-06.webp",
  baseServings: 6, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 200, unit: "g" },
    { name: "Lait entier", amount: 200, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Chocolat blanc 33%", amount: 250, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Hydrater la gélatine. Hacher le chocolat blanc s'il n'est pas en pistoles." 
    },
    { 
      title: "Infusion", 
      text: "Chauffer le lait et la crème avec la gousse de vanille grattée. Laisser infuser 10 min à couvert." 
    },
    { 
      title: "Cuisson", 
      text: "Réaliser une crème anglaise : verser le liquide chaud sur les jaunes et le sucre mélangés, puis cuire à 83°C." 
    },
    { 
      title: "Mélange", 
      text: "Ajouter la gélatine essorée hors du feu. Verser sur le chocolat blanc en 3 fois." 
    },
    { 
      title: "Emulsion", 
      text: "Mixer au mixeur plongeant pour obtenir une texture parfaitement lisse et brillante." 
    }
  ],

  advices: [
    "Le chocolat blanc est très sucré, c'est pourquoi la quantité de sucre ajouté est faible."
  ],
  chefQuote: "C'est la garniture idéale pour une tarte aux fruits rouges (fraise, framboise).",
  equipment: [
    "Mixeur plongeant",
    "Casserole"
  ]
};

export default cremeuxVanilleChocolatBlanc;