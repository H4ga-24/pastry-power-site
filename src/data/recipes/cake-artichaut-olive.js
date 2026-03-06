const cakeArtichautOlive = {
  id: "cake-artichaut-olive",
  title: "Cake Artichauts & Olives",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Une recette raffinée mettant en valeur le cœur d'artichaut citronné.",
  image: "https://yummix.fr/wp-content/uploads/2022/03/cake-artichauts-olives-romarin.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 50, unit: "g" },
    { name: "Fonds d'artichauts", amount: 250, unit: "g" },
    { name: "Olives noires", amount: 50, unit: "g" },
    { name: "Jus de citron", amount: 1, unit: "pièce" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Couper les fonds d'artichauts en dés et citronner. Couper les olives." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter œufs, huile et lait. Fouetter." 
    },
    { 
      title: "Finition", 
      text: "Incorporer gruyère, artichauts et olives. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C dans un moule beurré." 
    }
  ],

  advices: [
    "Citronnez bien les artichauts pour éviter qu'ils ne noircissent (s'ils sont frais)."
  ],
  chefQuote: "Utilisez des fonds d'artichauts en conserve de bonne qualité pour gagner du temps, mais rincez-les bien.",
  equipment: [
    "Moule à cake",
    "Fouet"
  ]
};

export default cakeArtichautOlive;