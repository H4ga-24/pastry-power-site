const cakeJambonOlive = {
  id: "cake-jambon-olive",
  title: "Cake Jambon & Olives",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "LA recette universelle du cake salé. Simple, efficace et appréciée de tous, petits et grands.",
  image: "https://www.academiedugout.fr/media/11995/cake-olive-2.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Dés de jambon", amount: 200, unit: "g" },
    { name: "Olives vertes (ou noires)", amount: 75, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Garniture", 
      text: "Égoutter les olives et les couper en rondelles si nécessaire." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger la farine et la levure. Ajouter les œufs, l'huile et le lait. Mélanger vigoureusement." 
    },
    { 
      title: "Mélange", 
      text: "Ajouter le gruyère, les dés de jambon et les olives. Saler (peu) et poivrer." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule beurré et fariné. Cuire environ 45 min à 180°C." 
    }
  ],

  advices: [
    "Pour éviter que les olives ne tombent au fond, vous pouvez les fariner légèrement avant de les incorporer (même astuce que pour les fruits confits)."
  ],
  chefQuote: "C'est la base parfaite. Vous pouvez y ajouter des cornichons coupés en dés pour une version 'charcutière'.",
  equipment: [
    "Moule à cake",
    "Fouet"
  ]
};

export default cakeJambonOlive;