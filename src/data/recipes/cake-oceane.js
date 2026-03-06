const cakeOceane = {
  id: "cake-oceane",
  title: "Cake Océane",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "60 MIN",
  difficulty: "MOYEN",
  description: "Un cake aux saveurs marines, garni d'un cocktail de fruits de mer pour un apéritif original.",
  image: "https://assets.afcdn.com/story/20220329/2166842_w1200h630c1cx600cy400cxt0cyt0cxb1200cyb800.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Cocktail fruits de mer", amount: 210, unit: "g", note: "Crevette, moule, calamar" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Gousse d'ail", amount: 1, unit: "pièce" },
    { name: "Persil", amount: 2, unit: "branches" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "La garniture", 
      text: "Faire revenir le cocktail de fruits de mer dans le beurre avec l'ail haché et le persil ciselé. Laisser l'eau s'évaporer complètement. Laisser refroidir." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger la farine et la levure. Ajouter les œufs, l'huile et le lait. Fouetter pour lisser la pâte." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer le gruyère et les fruits de mer refroidis. Saler et poivrer." 
    },
    { 
      title: "La cuisson", 
      text: "Verser dans un moule à cake. Cuire 1h à 180°C (ou 170°C chaleur tournante)." 
    }
  ],

  advices: [
    "Utilisez un mélange de fruits de mer surgelé de bonne qualité, mais égouttez-le bien après la cuisson à la poêle."
  ],
  chefQuote: "Une pointe de piment d'Espelette relèvera parfaitement les saveurs iodées.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeOceane;