const cakeChevreNoixRaisins = {
  id: "cake-chevre-noix-raisins",
  title: "Cake Chèvre, Noix & Raisins",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Un cake automnal très gourmand. Le croquant des noix et la douceur des raisins s'accordent parfaitement avec le fromage de chèvre.",
  image: "https://img.cuisineaz.com/660x660/2018/10/01/i143099-cake-chevre-noix-et-raisins.jpeg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 3, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Fromage de chèvre (bûche)", amount: 200, unit: "g" },
    { name: "Cerneaux de noix", amount: 50, unit: "g" },
    { name: "Raisins secs", amount: 50, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "Garniture", 
      text: "Couper le fromage de chèvre en dés. Concasser grossièrement les noix." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger la farine et la levure. Ajouter les œufs, l'huile et le lait. Mélanger jusqu'à obtenir une pâte homogène." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer le gruyère, le chèvre, les noix et les raisins secs. Assaisonner légèrement." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule à cake. Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Vous pouvez faire gonfler les raisins secs dans un peu de thé ou d'eau tiède avant de les incorporer pour plus de moelleux."
  ],
  chefQuote: "Un classique des buffets qui plaît toujours par son équilibre sucré-salé.",
  equipment: [
    "Moule à cake",
    "Cul-de-poule"
  ]
};

export default cakeChevreNoixRaisins;