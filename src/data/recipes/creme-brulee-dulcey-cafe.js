const cremeBruleeDulceyCafe = {
  id: "creme-brulee-dulcey-cafe",
  title: "Crème Brûlée Dulcey Café",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Une variante gourmande mariant la douceur biscuitée du chocolat blond Dulcey à l'amertume subtile du café.",
  image: "https://encoreungateau.com/wp-content/uploads/2024/02/creme-brulee-cafe-recette-480x270.jpg",
  baseServings: 6, // 6 ramequins
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 350, unit: "g" },
    { name: "Lait entier", amount: 100, unit: "g" },
    { name: "Café grains (arabica)", amount: 20, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Chocolat Dulcey", amount: 90, unit: "g" },
    { name: "Cassonade", amount: 50, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "L'infusion café", 
      text: "Porter le lait et la crème à ébullition. Ajouter les grains de café concassés. Couvrir et laisser infuser 20 minutes hors du feu. Filtrer." 
    },
    { 
      title: "La ganache", 
      text: "Réchauffer le liquide infusé si nécessaire et le verser sur le chocolat Dulcey pour réaliser une émulsion (ganache)." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les jaunes avec le sucre. Verser la ganache liquide dessus. Mélanger doucement à la maryse pour éviter les bulles." 
    },
    { 
      title: "La cuisson", 
      text: "Verser dans des ramequins. Cuire au four ventilé à 95°C-100°C pendant 45 à 55 minutes. La crème doit être tremblotante." 
    },
    { 
      title: "Finition", 
      text: "Refroidir 4h. Saupoudrer de cassonade et caraméliser au chalumeau au moment de servir." 
    }
  ],

  advices: [
    "L'infusion de grains concassés donne un goût de café plus pur et moins amer que le café moulu ou soluble."
  ],
  chefQuote: "Le Dulcey apporte un côté 'confiture de lait' toasté qui s'accorde merveilleusement avec le café.",
  equipment: [
    "Ramequins",
    "Chinois",
    "Chalumeau"
  ]
};

export default cremeBruleeDulceyCafe;