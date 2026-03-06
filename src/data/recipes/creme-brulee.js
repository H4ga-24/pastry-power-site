const cremeBrulee = {
  id: "creme-brulee",
  title: "Crème Brûlée Vanille",
  category: "Pâtisserie",
  subCategory: ["Crèmes"], // Aussi "Entremets" ou "Desserts Restaurant"
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "1 HEURE",
  difficulty: "FACILE",
  description: "Le grand classique indémodable : une crème vanille onctueuse cachée sous une fine couche de caramel croquant.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/creme-caramel-1300x583.jpg",
  baseServings: 4, // 4 ramequins
  
  ingredients: [
    { name: "Crème liquide entière 35%", amount: 400, unit: "g" },
    { name: "Lait entier", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 70, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" },
    { name: "Cassonade", amount: 50, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Fendre la gousse de vanille et gratter les grains. Faire chauffer la crème et le lait avec la vanille. Laisser infuser 15 min." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les jaunes et le sucre jusqu'à blanchiment. Verser le mélange lait/crème chaud dessus tout en remuant." 
    },
    { 
      title: "La cuisson", 
      text: "Verser dans des ramequins plats. Cuire au bain-marie au four à 100°C pendant environ 1h. La crème doit être prise mais encore tremblotante comme un flan." 
    },
    { 
      title: "La finition", 
      text: "Laisser refroidir complètement au frais (4h min). Au moment de servir, saupoudrer de cassonade et caraméliser au chalumeau." 
    }
  ],

  advices: [
    "Ne brûlez pas trop le sucre, il deviendrait amer. Une fine couche craquante suffit."
  ],
  chefQuote: "La crème doit être servie très froide avec le caramel chaud. C'est ce contraste thermique qui est délicieux.",
  equipment: [
    "Ramequins",
    "Chalumeau",
    "Fouet"
  ]
};

export default cremeBrulee;