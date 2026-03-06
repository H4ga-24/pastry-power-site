const cakeRoquefortLardNoix = {
  id: "cake-roquefort-lard-noix",
  title: "Cake Roquefort, Lard & Noix",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "60 MIN",
  difficulty: "MOYEN",
  description: "Un cake de caractère, puissant et rustique. L'huile de noix dans la pâte renforce le goût du fruit sec.",
  image: "https://lespapillesdekaren.com/wp-content/uploads/2025/04/wp_a5af49_cake-au-roquefort-et-aux-noix.JPG",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 30, unit: "g" },
    { name: "Huile de noix", amount: 50, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Roquefort", amount: 150, unit: "g" },
    { name: "Cerneaux de noix", amount: 30, unit: "g" },
    { name: "Lardons fumés", amount: 50, unit: "g" },
    { name: "Huile (poêle)", amount: 10, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Garniture", 
      text: "Faire rissoler les lardons. Émietter grossièrement le Roquefort et les noix." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter œufs, les deux huiles (végétale + noix) et le lait. Mélanger." 
    },
    { 
      title: "Finition", 
      text: "Incorporer le gruyère, le Roquefort, les noix et les lardons. Poivrer généreusement (attention au sel)." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 1h à 180°C dans un moule beurré." 
    }
  ],

  advices: [
    "Ne salez presque pas, le Roquefort et le lard sont déjà très salés."
  ],
  chefQuote: "L'huile de noix change tout, ne la remplacez pas si possible !",
  equipment: [
    "Moule à cake",
    "Poêle"
  ]
};

export default cakeRoquefortLardNoix;