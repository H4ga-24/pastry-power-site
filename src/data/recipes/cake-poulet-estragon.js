const cakePouletEstragon = {
  id: "cake-poulet-estragon",
  title: "Cake Poulet & Estragon",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "1H 10",
  difficulty: "FACILE",
  description: "Un cake complet qui fait office de plat principal avec une salade. L'estragon apporte sa note anisée caractéristique.",
  image: "https://img.cuisineaz.com/660x660/2013/12/20/i64546-photo-de-cake-au-poulet-courgettes-et-estragon.jpeg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Blancs de poulet", amount: 200, unit: "g" },
    { name: "Estragon frais", amount: 50, unit: "g" },
    { name: "Échalote", amount: 1, unit: "pièce" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Huile (cuisson)", amount: 15, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Le poulet", 
      text: "Couper le poulet en dés. Ciseler l'échalote et l'estragon. Faire revenir le poulet et l'échalote dans le mélange beurre/huile. Ajouter l'estragon en fin de cuisson. Saler, poivrer." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure, œufs. Verser l'huile (100g) et le lait. Fouetter." 
    },
    { 
      title: "Finition", 
      text: "Incorporer le gruyère et la poêlée de poulet refroidie à la pâte." 
    },
    { 
      title: "Cuisson", 
      text: "Moule graissé. Cuire 1h10 à 180°C. Surveiller la coloration." 
    }
  ],

  advices: [
    "Si vous utilisez de l'estragon séché, divisez la quantité par deux car le goût est très concentré."
  ],
  chefQuote: "Parfait pour utiliser un reste de poulet rôti du dimanche, dans ce cas zappez l'étape de cuisson du poulet.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakePouletEstragon;