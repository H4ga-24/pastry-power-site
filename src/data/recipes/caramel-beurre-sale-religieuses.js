const caramelBeurreSaleReligieuses = {
  id: "caramel-beurre-sale-religieuses",
  title: "Caramel Beurre Salé (Insert)",
  category: "Pâtisserie",
  subCategory: ["Inserts"], // Ou "Garnitures" si tu crées cette catégorie, mais "Inserts" est cohérent avec ton système
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Un caramel coulant mais qui se tient, idéal pour insérer au cœur d'une religieuse, d'un chou ou d'un macaron. L'équilibre parfait sucré-salé.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2023/05/caramel-beurre-sale-14-religieuses-cap-patissier-1176x1300.jpg",
  baseServings: 20, // Pour 20 religieuses
  
  ingredients: [
    { name: "Sucre semoule", amount: 200, unit: "g" },
    { name: "Glucose", amount: 40, unit: "g", note: "Optionnel" },
    { name: "Crème liquide 35%", amount: 200, unit: "g" },
    { name: "Gousse de vanille", amount: 0.5, unit: "pièce" },
    { name: "Beurre doux (froid)", amount: 150, unit: "g" },
    { name: "Fleur de sel", amount: 3, unit: "g" }
  ],

  steps: [
    { 
      title: "La crème", 
      text: "Faire chauffer la crème liquide avec la vanille." 
    },
    { 
      title: "Le caramel", 
      text: "Réaliser un caramel à sec avec le sucre et le glucose jusqu'à obtenir une couleur ambrée foncée (mais pas brûlée)." 
    },
    { 
      title: "Le déglaçage", 
      text: "Hors du feu, déglacer avec la crème chaude en faisant attention aux projections. Bien mélanger." 
    },
    { 
      title: "L'émulsion", 
      text: "Laisser tiédir le mélange vers 50°C, puis incorporer le beurre froid coupé en dés et la fleur de sel. Mixer au mixeur plongeant pour lisser et émulsionner. Réserver au frais." 
    }
  ],

  advices: [
    "Le glucose empêche le sucre de masser (cristalliser), mais n'est pas obligatoire si vous maîtrisez la cuisson du sucre."
  ],
  chefQuote: "Attendez que le caramel soit bien froid pour le pocher, il aura épaissi et ne coulera pas partout.",
  equipment: [
    "Casserole",
    "Mixeur plongeant"
  ]
};

export default caramelBeurreSaleReligieuses;