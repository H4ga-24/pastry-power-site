const cakeSaintJacques = {
  id: "cake-saint-jacques",
  title: "Cake Saint-Jacques & Poireaux",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "1H 10",
  difficulty: "MOYEN",
  description: "Un cake de fête très raffiné. La douceur du poireau et la saveur délicate de la Saint-Jacques relevée par le curry.",
  image: "https://i.f1g.fr/media/cms/1200x630_crop/2022/02/07/1717f8a6b852a6ce9896fa6eab703c86568c1b14665b66ae22cf31417f709e4b.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Parmesan râpé", amount: 50, unit: "g" },
    { name: "Poireaux", amount: 150, unit: "g" },
    { name: "Curry en poudre", amount: 5, unit: "g" },
    { name: "Beurre demi-sel", amount: 20, unit: "g" },
    { name: "Huile d'olive", amount: 15, unit: "g" },
    { name: "Eau", amount: 100, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "La fondue de poireaux", 
      text: "Émincer finement les poireaux. Les faire suer dans le beurre et l'huile d'olive. Mouiller avec l'eau, couvrir et laisser cuire jusqu'à évaporation complète." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et curry. Ajouter œufs, huile (100g) et lait. Fouetter." 
    },
    { 
      title: "Mélange", 
      text: "Incorporer le parmesan, la fondue de poireaux et les noix de Saint-Jacques (crues, coupées en dés si grosses, ou entières si petites pétoncles)." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 1h10 à 180°C." 
    }
  ],

  advices: [
    "Utilisez des petites pétoncles ou coupez les Saint-Jacques en dés de 1cm pour qu'elles cuisent uniformément dans la pâte."
  ],
  chefQuote: "Le curry et la Saint-Jacques sont un mariage classique qui fonctionne à merveille ici.",
  equipment: [
    "Poêle (sauteuse)",
    "Moule à cake"
  ]
};

export default cakeSaintJacques;