const mousseGoyave = {
  id: "mousse-goyave",
  title: "Mousse Goyave",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse tropicale au parfum unique de goyave rose, douce et florale.",
  image: "https://static.750g.com/images/1200-675/ac0e50ca19c6323fa9b1a5c603071939/mousse-chocolat-blanc-et-goyave.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de goyave", amount: 300, unit: "g" },
    { name: "Sucre", amount: 35, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron vert", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "PRÉPARATION", 
      text: "Chauffer une partie de la purée de goyave avec le sucre." 
    },
    { 
      title: "INCORPORATION", 
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée et le citron vert." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly souple." 
    },
    { 
      title: "FINALISATION", 
      text: "Incorporer délicatement la chantilly à la purée de goyave refroidie." 
    },
    { 
      title: "DRESSAGE", 
      text: "Verser dans les moules." 
    }
  ],

  advices: ["La goyave a une texture un peu granuleuse, le mélange avec la crème l'adoucit parfaitement."],
  chefQuote: "Associez-la à une dacquoise coco pour un voyage complet.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseGoyave;