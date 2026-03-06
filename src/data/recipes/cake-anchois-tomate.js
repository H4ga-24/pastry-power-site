const cakeAnchoisTomate = {
  id: "cake-anchois-tomate",
  title: "Cake Anchois, Tomates & Olives",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Un cake salé aux saveurs provençales, idéal pour l'apéritif ou un pique-nique.",
  image: "https://www.torchonsetserviettes.fr/wp-content/uploads/2020/11/cake5-scaled.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale (pâte)", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Filets d'anchois", amount: 100, unit: "g" },
    { name: "Tomates", amount: 2, unit: "pièces" },
    { name: "Olives noires dénoyautées", amount: 50, unit: "g" },
    { name: "Huile d'olive (garniture)", amount: 15, unit: "g" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les garnitures", 
      text: "Épépiner les tomates et les couper en dés. Couper les anchois en morceaux et les olives en rondelles." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger la farine et la levure. Ajouter les œufs, les 100g d'huile et le lait. Mélanger au fouet pour obtenir une pâte lisse." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer le gruyère, les tomates, les anchois et les olives. Ajouter les 15g d'huile. Poivrer (ne pas saler à cause des anchois)." 
    },
    { 
      title: "La cuisson", 
      text: "Verser dans un moule à cake graissé. Cuire à 180°C pendant 45 minutes." 
    }
  ],

  advices: [
    "Ne salez surtout pas la pâte, les anchois et le fromage apportent déjà tout le sel nécessaire."
  ],
  chefQuote: "Pour un cake encore plus moelleux, vous pouvez tiédir le lait avant de l'incorporer.",
  equipment: [
    "Moule à cake",
    "Cul-de-poule",
    "Fouet"
  ]
};

export default cakeAnchoisTomate;