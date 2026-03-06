const cakeLardBanane = {
  id: "cake-lard-banane",
  title: "Cake Lard, Banane & Cacahuète",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Un cake exotique et surprenant qui joue sur les contrastes : le fumé du lard, la douceur de la banane et le croquant de la cacahuète.",
  image: "https://storage.canalblog.com/57/50/692736/80741540_o.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 80, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Lardons fumés", amount: 150, unit: "g" },
    { name: "Banane", amount: 1, unit: "pièce" },
    { name: "Gingembre râpé", amount: 5, unit: "g" },
    { name: "Cacahuètes grillées", amount: 20, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "Garniture", 
      text: "Faire revenir les lardons à la poêle sans matière grasse. Égoutter le gras. Couper la banane en dés." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et œufs. Ajouter l'huile et le lait. Lisser la pâte." 
    },
    { 
      title: "Mélange final", 
      text: "Incorporer le gruyère, les lardons, les dés de banane, le gingembre râpé et les cacahuètes. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Choisissez une banane pas trop mûre pour qu'elle ne se transforme pas en purée à la cuisson."
  ],
  chefQuote: "L'apéritif idéal pour accompagner un cocktail au rhum ou une bière ambrée.",
  equipment: [
    "Poêle",
    "Râpe",
    "Moule à cake"
  ]
};

export default cakeLardBanane;