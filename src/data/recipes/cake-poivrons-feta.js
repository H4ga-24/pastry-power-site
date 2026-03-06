const cakePoivronsFeta = {
  id: "cake-poivrons-feta",
  title: "Cake Poivrons, Feta & Olives",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "60 MIN",
  difficulty: "FACILE",
  description: "Les saveurs de la Grèce dans un cake. Le trio poivron-feta-olive fonctionne à merveille pour un cake d'été.",
  image: "https://www.cookomix.com/wp-content/uploads/mediapress/members/1/379/cake-proivrons-feta-olives-noires-thermomix-800x600.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Poivrons (rouge & vert)", amount: 2, unit: "pièces" },
    { name: "Huile d'olive", amount: 30, unit: "g", note: "Pour poêler" },
    { name: "Feta", amount: 150, unit: "g" },
    { name: "Olives noires", amount: 50, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les poivrons", 
      text: "Laver, épépiner et couper les poivrons en petits dés. Les faire fondre à la poêle dans l'huile d'olive jusqu'à ce qu'ils soient tendres. Laisser refroidir." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et œufs. Incorporer l'huile (100g) et le lait progressivement." 
    },
    { 
      title: "La garniture", 
      text: "Couper la feta en cubes et les olives en rondelles. Ajouter à la pâte avec le gruyère et les poivrons." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule. Cuire 1h à 180°C." 
    }
  ],

  advices: [
    "Ne salez presque pas la pâte, la feta et les olives apportent déjà beaucoup de sel."
  ],
  chefQuote: "Pour plus de goût, vous pouvez faire griller la peau des poivrons au four avant de les utiliser, mais c'est plus long.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakePoivronsFeta;