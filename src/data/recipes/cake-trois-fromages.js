const cakeTroisFromages = {
  id: "cake-trois-fromages",
  title: "Cake aux 3 Fromages",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "55 MIN",
  difficulty: "FACILE",
  description: "Pour les amateurs de fromage ! Un cake riche et puissant avec du caractère.",
  image: "https://www.ramenelapopotte.com/sites/default/files/cake_courgette_3_fromages_coupe_zoom.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Bleu d'Auvergne", amount: 100, unit: "g" },
    { name: "Mimolette (vieille si possible)", amount: 100, unit: "g" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les fromages", 
      text: "Couper le Bleu et la Mimolette en petits dés." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et œufs. Ajouter huile et lait. Mélanger vigoureusement." 
    },
    { 
      title: "Finition", 
      text: "Ajouter les trois fromages (Gruyère, Bleu, Mimolette). Poivrer généreusement. Ne pas saler." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule graissé. Cuire 55 min à 180°C." 
    }
  ],

  advices: [
    "Surtout pas de sel ! Les fromages en contiennent déjà énormément."
  ],
  chefQuote: "La mimolette apporte une belle couleur orange à la coupe.",
  equipment: [
    "Moule à cake",
    "Cul-de-poule"
  ]
};

export default cakeTroisFromages;