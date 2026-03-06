const cakeThonPoivron = {
  id: "cake-thon-poivron",
  title: "Cake Thon & Poivrons",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "60 MIN",
  difficulty: "FACILE",
  description: "Le cake \"fond de placard\" par excellence, coloré et savoureux, parfait pour un pique-nique improvisé.",
  image: "https://img.over-blog-kiwi.com/0/65/19/23/20190719/ob_d7ac80_cake-thon-poivron-olive.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Thon au naturel (égoutté)", amount: 200, unit: "g" },
    { name: "Poivron vert", amount: 50, unit: "g" },
    { name: "Poivron rouge", amount: 50, unit: "g" },
    { name: "Huile d'olive (poêle)", amount: 15, unit: "g" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les poivrons", 
      text: "Couper les poivrons en petits dés. Les faire revenir rapidement à l'huile d'olive pour les attendrir." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure, œufs. Ajouter huile et lait. Lisser." 
    },
    { 
      title: "Finition", 
      text: "Émietter le thon grossièrement. L'ajouter à la pâte avec les poivrons et le fromage. Mélanger." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 1h à 180°C dans un moule beurré." 
    }
  ],

  advices: [
    "Égouttez très soigneusement le thon, pressez-le même un peu, pour ne pas détremper la pâte."
  ],
  chefQuote: "Ajoutez quelques olives vertes pour encore plus de goût.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeThonPoivron;