const cakeSaumonOseille = {
  id: "cake-saumon-oseille",
  title: "Cake Saumon & Oseille",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "1H 10",
  difficulty: "MOYEN",
  description: "Un classique de la cuisine française revisité en cake. L'acidité de l'oseille balance parfaitement le gras du saumon.",
  image: "https://lespapillesdekaren.com/wp-content/uploads/2025/04/wp_57dab1_cake-au-saumon-et-a-l-oseille.JPG",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Saumon frais", amount: 200, unit: "g" },
    { name: "Oseille fraîche", amount: 200, unit: "g" },
    { name: "Beurre demi-sel", amount: 30, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "La fondue d'oseille", 
      text: "Laver et équeuter l'oseille. La faire fondre à la poêle dans le beurre jusqu'à ce qu'elle réduise (\"tombe\")." 
    },
    { 
      title: "Le saumon", 
      text: "Couper le saumon frais en dés de 1 à 2 cm." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure, œufs. Ajouter huile et lait. Fouetter." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer le gruyère, le saumon cru et l'oseille tiédie. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 1h10 à 180°C." 
    }
  ],

  advices: [
    "Si vous n'avez pas d'oseille fraîche, des épinards avec un filet de jus de citron feront l'affaire."
  ],
  chefQuote: "L'oseille fond littéralement à la cuisson et parfume toute la pâte.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeSaumonOseille;