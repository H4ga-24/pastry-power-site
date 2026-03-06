const cakeLardonsPruneaux = {
  id: "cake-lardons-pruneaux",
  title: "Cake Lardons & Pruneaux",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Le mariage rustique du fumé et du fruit sec. Une valeur sûre pour les pique-niques.",
  image: "https://www.fashioncooking.fr/wp-content/uploads/2010/06/Cakepruneaux3.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Lardons fumés", amount: 200, unit: "g" },
    { name: "Pruneaux dénoyautés", amount: 80, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation garniture", 
      text: "Faire revenir les lardons à sec pour les dégraisser. Couper les pruneaux en morceaux." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure. Ajouter les œufs, l'huile et le lait. Mélanger au fouet." 
    },
    { 
      title: "Finition", 
      text: "Ajouter le gruyère, les lardons égouttés et les pruneaux. Saler légèrement et poivrer." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C. Démouler tiède." 
    }
  ],

  advices: [
    "Dégraisser les lardons est important pour ne pas avoir un cake trop huileux."
  ],
  chefQuote: "Simple et efficace. Vous pouvez remplacer les pruneaux par des dattes pour une variante plus sucrée.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeLardonsPruneaux;