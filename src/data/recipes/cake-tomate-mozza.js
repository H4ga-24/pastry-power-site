const cakeTomateMozza = {
  id: "cake-tomate-mozza",
  title: "Cake Tomate, Mozzarella & Basilic",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "55 MIN",
  difficulty: "FACILE",
  description: "Les saveurs de l'Italie dans un cake moelleux. La mozzarella apporte un côté filant irrésistible.",
  image: "https://cuisinedaubery.com/wp-content/uploads/2024/03/cake-italien_ALTERN09.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Mozzarella (boule)", amount: 200, unit: "g" },
    { name: "Tomates", amount: 2, unit: "pièces" },
    { name: "Huile d'olive (poêle)", amount: 15, unit: "g" },
    { name: "Basilic frais", amount: 2, unit: "branches" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation garniture", 
      text: "Couper les tomates en dés et les faire revenir à l'huile pour évaporer l'eau de végétation. Couper la mozzarella en cubes. Ciseler le basilic." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure, œufs. Verser l'huile et le lait. Fouetter." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer le gruyère, les tomates refroidies, la mozzarella et le basilic." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 55 min à 180°C." 
    }
  ],

  advices: [
    "Utilisez de la mozzarella \"cucina\" (en pain) plutôt que des boules dans l'eau si vous voulez éviter qu'elle ne rende trop d'eau."
  ],
  chefQuote: "Un cake à déguster tiède pour profiter du fromage fondu.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeTomateMozza;