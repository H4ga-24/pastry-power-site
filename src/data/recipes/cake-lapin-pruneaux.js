const cakeLapinPruneaux = {
  id: "cake-lapin-pruneaux",
  title: "Cake Lapin, Pruneaux & Cresson",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Un cake raffiné utilisant des restes de lapin cuit. L'association lapin-pruneaux est un classique de la gastronomie française.",
  image: "https://www.pleinevie.fr/wp-content/uploads/pleinevie/2019/01/recette-cake-aux-pruneaux-magret-canard-cresson.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Chair de lapin cuite", amount: 200, unit: "g" },
    { name: "Cresson", amount: 150, unit: "g" },
    { name: "Pruneaux dénoyautés", amount: 80, unit: "g" },
    { name: "Huile d'olive (poêle)", amount: 15, unit: "g" },
    { name: "Sarriette", amount: 2, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation garniture", 
      text: "Couper la chair de lapin en dés. Hacher le cresson. Couper les pruneaux. Faire revenir le lapin à la poêle avec l'huile d'olive et la sarriette." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les œufs, la farine et la levure. Ajouter l'huile (100g) et le lait tiédi. Mélanger." 
    },
    { 
      title: "Finition", 
      text: "Incorporer le gruyère, le lapin refroidi, les pruneaux et le cresson." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 à 50 min à 180°C dans un moule chemisé." 
    }
  ],

  advices: [
    "C'est une excellente recette 'anti-gaspi' pour utiliser un reste de lapin chasseur ou à la moutarde."
  ],
  chefQuote: "Le cresson apporte une note poivrée qui dynamise le côté sucré du pruneau.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeLapinPruneaux;