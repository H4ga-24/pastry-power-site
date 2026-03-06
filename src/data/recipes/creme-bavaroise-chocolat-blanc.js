const cremeBavaroiseChocolatBlanc = {
  id: "creme-bavaroise-chocolat-blanc",
  title: "Crème Bavaroise Chocolat Blanc",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une version douce et crémeuse, idéale en association avec des fruits rouges acidulés (framboises, groseilles).",
  image: "https://www.lesfoodies.com/_recipeimage/283930/bavarois-framboise-chocolat-blanc-2.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Chocolat blanc", amount: 150, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Gélatine (feuille)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" },
    { name: "Vanille", amount: 1, unit: "g" }
  ],

  steps: [
    { 
      title: "L'anglaise", 
      text: "Réaliser une crème anglaise avec le lait, les jaunes, la vanille et le sucre (quantité réduite car le chocolat est sucré)." 
    },
    { 
      title: "L'émulsion", 
      text: "Verser l'anglaise chaude sur le chocolat blanc haché. Laisser fondre, ajouter la gélatine essorée et lisser au fouet." 
    },
    { 
      title: "Refroidissement", 
      text: "Laisser tiédir le mélange jusqu'à environ 25-30°C." 
    },
    { 
      title: "Montage", 
      text: "Incorporer délicatement la crème liquide montée en chantilly souple." 
    }
  ],

  advices: [
    "Attention au sucre : le chocolat blanc en apporte beaucoup, ne rajoutez pas de sucre dans la chantilly."
  ],
  chefQuote: "Parfaite avec un insert gélifié à la framboise ou au fruit de la passion.",
  equipment: [
    "Casserole",
    "Cul-de-poule",
    "Maryse"
  ]
};

export default cremeBavaroiseChocolatBlanc;