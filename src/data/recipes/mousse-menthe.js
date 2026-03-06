const mousseMenthe = {
  id: "mousse-menthe",
  title: "Mousse Menthe",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse très fraîche obtenue par infusion de menthe fraîche dans la crème.",
  image: "https://www.lesfoodies.com/_recipeimage/14862/mousse-a-la-menthe-2x-1124.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Lait entier", amount: 150, unit: "ml" },
    { name: "Menthe fraîche (botte)", amount: 1, unit: "pc" },
    { name: "Jaunes d'œufs", amount: 3, unit: "pc" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "INFUSION", 
      text: "Faire bouillir le lait, ajouter la menthe, couvrir et laisser infuser 15 min." 
    },
    { 
      title: "ANGLAISE", 
      text: "Filtrer, réchauffer le lait. Verser sur le mélange jaunes/sucre. Cuire à la nappe (82°C)." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée dans la crème anglaise chaude. Laisser refroidir." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème liquide en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer la chantilly à la crème anglaise menthe refroidie (25°C)." 
    },
    { 
      title: "FINITION", 
      text: "Utiliser immédiatement." 
    }
  ],

  advices: ["Si vous voulez une couleur verte, ajoutez une pointe de colorant, car l'infusion donne une couleur crème."],
  chefQuote: "Cette mousse est parfaite avec des copeaux de chocolat noir (After Eight).",
  equipment: ["Casserole", "Chinois", "Thermomètre"]
};

export default mousseMenthe;