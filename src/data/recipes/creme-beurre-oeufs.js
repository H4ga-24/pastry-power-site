const cremeBeurreOeufs = {
  id: "creme-beurre-oeufs",
  title: "Crème au Beurre (Pâte à Bombe)",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une version riche et onctueuse de la crème au beurre, réalisée sur une base de pâte à bombe (sirop versé sur jaunes d'œufs).",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/09/IMG_20210927_113242-1300x975.jpg",
  baseServings: 1, // Environ 500g
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Eau", amount: 50, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Œuf entier", amount: 50, unit: "g" },
    { name: "Beurre pommade", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "Le sirop", 
      text: "Cuire le sucre et l'eau jusqu'à 118°C." 
    },
    { 
      title: "La pâte à bombe", 
      text: "Verser le sirop bouillant sur les jaunes et l'œuf entier tout en fouettant vigoureusement au robot." 
    },
    { 
      title: "Le foisonnement", 
      text: "Continuer de fouetter jusqu'à ce que le mélange double de volume et refroidisse complètement." 
    },
    { 
      title: "L'incorporation", 
      text: "Incorporer progressivement le beurre pommade tout en fouettant jusqu'à l'obtention d'une crème lisse et soyeuse." 
    }
  ],

  advices: [
    "Cette crème au beurre est plus jaune et plus riche en goût que celle à la meringue italienne. Elle est parfaite pour le Moka au café."
  ],
  chefQuote: "Parfumez-la avec de l'extrait de café (Trablit) ou du praliné pour un résultat ultra gourmand.",
  equipment: [
    "Robot pâtissier",
    "Thermomètre sucre",
    "Casserole"
  ]
};

export default cremeBeurreOeufs;