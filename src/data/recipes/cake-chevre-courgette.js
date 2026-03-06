const cakeChevreCourgette = {
  id: "cake-chevre-courgette",
  title: "Cake Chèvre & Courgette",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Le grand classique de l'été. La courgette apporte une humidité qui garde ce cake frais très longtemps.",
  image: "https://odelices.ouest-france.fr/images/recettes/cake-courgettes-chevre.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Fromage de chèvre (bûche)", amount: 200, unit: "g" },
    { name: "Courgette", amount: 1, unit: "pièce" },
    { name: "Huile d'olive (poêle)", amount: 30, unit: "g" },
    { name: "Cerfeuil", amount: 1, unit: "bouquet" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les courgettes", 
      text: "Laver et couper la courgette en dés (garder la peau). Les faire revenir à l'huile d'olive pour les sécher un peu. Couper le chèvre en dés. Ciselez le cerfeuil." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et œufs. Verser l'huile et le lait tiédi progressivement." 
    },
    { 
      title: "Mélange", 
      text: "Incorporez le gruyère, les courgettes tiédies, le chèvre et le cerfeuil." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Ne pelez pas la courgette, la peau verte apporte de la couleur et de la tenue aux dés."
  ],
  chefQuote: "Si vous n'avez pas de cerfeuil, de la menthe fraîche fonctionne divinement bien avec le chèvre et la courgette.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeChevreCourgette;