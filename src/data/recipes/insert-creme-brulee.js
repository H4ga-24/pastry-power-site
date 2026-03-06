const insertCremeBrulee = {
  id: "insert-creme-brulee",
  title: "Insert Crème Brûlée",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "La texture crémeuse et vanillée de la crème brûlée, adaptée en insert congelable pour vos entremets.",
  image: "https://quandnadcuisine.fr/wp-content/uploads/2021/01/buche-chocolat-insert-creme-brulee1-1-500x500.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 250, unit: "ml" },
    { name: "Lait entier", amount: 50, unit: "ml" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pc" },
    { name: "Gélatine", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "INFUSION", 
      text: "Chauffer la crème et le lait avec la vanille. Laisser infuser 15 min." 
    },
    { 
      title: "BLANCHIR", 
      text: "Fouetter les jaunes et le sucre." 
    },
    { 
      title: "CUISSON", 
      text: "Verser le liquide chaud sur les jaunes, remettre sur feu doux et cuire à la nappe (82°C) comme une crème anglaise." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter la gélatine hydratée hors du feu. Couler dans un moule insert." 
    },
    { 
      title: "CONGÉLATION", 
      text: "Placer au congélateur au moins 4h avant montage." 
    }
  ],

  advices: ["La gélatine est ajoutée ici pour permettre le démoulage après congélation, une vraie crème brûlée n'en a pas besoin."],
  chefQuote: "Infusez la vanille la veille à froid dans la crème pour un goût encore plus intense.",
  equipment: ["Casserole", "Thermomètre", "Moule insert"]
};

export default insertCremeBrulee;