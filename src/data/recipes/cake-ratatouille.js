const cakeRatatouille = {
  id: "cake-ratatouille",
  title: "Cake Ratatouille",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "1H 15",
  difficulty: "MOYEN",
  description: "Un cake ensoleillé qui sent bon la Provence. Les légumes rôtis apportent une texture fondante incroyable.",
  image: "https://img.cuisineaz.com/1024x1024/2015/03/11/i113715-cake-a-la-ratatouille.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Tomate", amount: 1, unit: "pièce" },
    { name: "Oignon", amount: 50, unit: "g", note: "1/2 pièce" },
    { name: "Aubergine", amount: 100, unit: "g", note: "1/2 pièce" },
    { name: "Courgette", amount: 100, unit: "g", note: "1/2 pièce" },
    { name: "Huile d'olive", amount: 30, unit: "g", note: "Pour poêler" },
    { name: "Basilic frais", amount: 3, unit: "feuilles" },
    { name: "Cerfeuil", amount: 1, unit: "bouquet" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "La ratatouille express", 
      text: "Laver et couper tous les légumes en petits dés (brunoise). Faire revenir l'oignon, puis ajouter aubergine, courgette et enfin tomate dans l'huile d'olive. Laisser compoter jusqu'à évaporation de l'eau. Laisser refroidir." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger la farine et la levure. Ajouter les œufs, l'huile (100g) et le lait. Fouetter pour lisser." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer le gruyère, les légumes refroidis et les herbes ciselées. Assaisonner." 
    },
    { 
      title: "La cuisson", 
      text: "Verser dans un moule à cake. Cuire 1h15 à 180°C (couvrir d'alu à mi-cuisson si ça dore trop)." 
    }
  ],

  advices: [
    "Coupez les légumes vraiment petits pour qu'ils se répartissent bien et ne tombent pas tous au fond."
  ],
  chefQuote: "C'est encore meilleur le lendemain quand les parfums ont diffusé dans la pâte.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeRatatouille;