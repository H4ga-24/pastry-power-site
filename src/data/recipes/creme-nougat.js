const cremeNougat = {
  id: "creme-nougat",
  title: "Crème Pâtissière au Nougat",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une crème riche et parfumée aux éclats d'amandes, de pistaches et de miel, idéale pour garnir des choux ou des macarons.",
  image: "https://www.cuisinetemeraire.fr/wp-content/uploads/2012/10/Pate-Nougat.jpg",
  baseServings: 1, // Environ 600g
  
  ingredients: [
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Pâte de nougat (ou nougat mou)", amount: 150, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Poudre à crème (ou Maïzena)", amount: 45, unit: "g" },
    { name: "Beurre doux", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "La fonte", 
      text: "Dans une casserole, faire chauffer le lait avec la pâte de nougat coupée en petits morceaux. Remuer jusqu'à ce que le nougat soit fondu." 
    },
    { 
      title: "Le blanchiment", 
      text: "Fouetter les jaunes avec le sucre jusqu'à blanchiment. Ajouter la poudre à crème." 
    },
    { 
      title: "La liaison", 
      text: "Verser la moitié du lait au nougat chaud sur les jaunes. Mélanger et reverser le tout dans la casserole." 
    },
    { 
      title: "La cuisson", 
      text: "Porter à ébullition en fouettant constamment et cuire 2 minutes à ébullition pour épaissir et pasteuriser." 
    },
    { 
      title: "La finition", 
      text: "Hors du feu, incorporer le beurre. Débarrasser, filmer au contact et laisser refroidir." 
    }
  ],

  advices: [
    "Si vous utilisez du nougat dur, mixez-le en poudre fine avant de l'ajouter au lait, sinon il ne fondra pas bien."
  ],
  chefQuote: "Les petits morceaux d'amandes qui ne fondent pas apportent une mâche très agréable dans la crème.",
  equipment: [
    "Casserole",
    "Fouet",
    "Film alimentaire"
  ]
};

export default cremeNougat;