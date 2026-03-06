const cakeSaumonCiboulette = {
  id: "cake-saumon-ciboulette",
  title: "Cake Saumon Fumé",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "55 MIN",
  difficulty: "FACILE",
  description: "Simple, frais et efficace. Le saumon fumé suffit à parfumer tout le cake.",
  image: "https://i0.wp.com/unepausehealthyf.com/wp-content/uploads/2021/04/cake-sale%CC%81-saumon-fume%CC%81-scaled.jpeg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Saumon fumé", amount: 200, unit: "g" },
    { name: "Ciboulette", amount: 10, unit: "brins" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Couper le saumon fumé en lanières ou en dés. Ciseler finement la ciboulette." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter les œufs, l'huile et le lait. Mélanger au fouet." 
    },
    { 
      title: "Finition", 
      text: "Ajouter le gruyère, le saumon et la ciboulette. Poivrer. Saler très peu." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule graissé. Cuire 55 min à 180°C." 
    }
  ],

  advices: [
    "Vous pouvez ajouter un zeste de citron pour apporter du peps."
  ],
  chefQuote: "Une valeur sûre des apéritifs dînatoires.",
  equipment: [
    "Moule à cake",
    "Ciseaux (pour la ciboulette)"
  ]
};

export default cakeSaumonCiboulette;