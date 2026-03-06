const cakeSaumonFume = {
  id: "cake-saumon-fume",
  title: "Cake Saumon Fumé & Harengs",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "55 MIN",
  difficulty: "FACILE",
  description: "Une version nordique du cake au poisson, avec du raifort pour le piquant et de l'aneth pour la fraîcheur.",
  image: "https://www.clickmiam.fr/images/recettes/cake-saumon-fume.webp",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Saumon fumé", amount: 150, unit: "g" },
    { name: "Harengs marinés", amount: 50, unit: "g" },
    { name: "Raifort râpé", amount: 3, unit: "g" },
    { name: "Aneth frais", amount: 1, unit: "branche" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Couper le saumon et les harengs en petits morceaux. Ciseler l'aneth." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter œufs, huile, lait et raifort râpé. Mélanger." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer le gruyère, les poissons et l'aneth. Poivrer (ne pas saler du tout)." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 55 min à 180°C dans un moule à cake." 
    }
  ],

  advices: [
    "Les harengs sont très salés, il est impératif de ne pas rajouter de sel dans l'appareil."
  ],
  chefQuote: "Le raifort apporte ce petit goût poivré typique qui réveille le gras du poisson.",
  equipment: [
    "Moule à cake",
    "Fouet"
  ]
};

export default cakeSaumonFume;