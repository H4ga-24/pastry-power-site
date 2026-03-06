const mousseFromageBlanc = {
  id: "mousse-fromage-blanc",
  title: "Mousse Fromage Blanc",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "0 MIN",
  difficulty: "TRÈS FACILE",
  description: "Un nuage de légèreté, très frais, idéal pour accompagner un coulis de fruits rouges ou du miel.",
  image: "https://assets.afcdn.com/recipe/20160420/64057_w1024h1024c1cx2592cy1728.webp",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Fromage blanc 40%", amount: 300, unit: "g" },
    { name: "Crème liquide 35%", amount: 200, unit: "ml" },
    { name: "Sucre glace", amount: 60, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pc" },
    { name: "Zeste de citron (facultatif)", amount: 0.5, unit: "pc" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Fouetter le fromage blanc pour le lisser avec les graines de vanille et le zeste." 
    },
    { 
      title: "CHANTILLY", 
      text: "Monter la crème liquide bien froide en chantilly ferme avec le sucre glace." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la chantilly au fromage blanc à l'aide d'une maryse." 
    },
    { 
      title: "DRESSAGE", 
      text: "Dresser en coupes ou verrines." 
    },
    { 
      title: "REPOS", 
      text: "Réserver au frais 2h avant de servir." 
    }
  ],

  advices: ["Égouttez un peu le fromage blanc s'il rend de l'eau."],
  chefQuote: "Remplacez le sucre glace par du miel pour une version plus douce.",
  equipment: ["Fouet", "Batteur", "Verrines"]
};

export default mousseFromageBlanc;