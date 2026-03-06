const mousseCassis = {
  id: "mousse-cassis",
  title: "Mousse Cassis",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse à la couleur violette intense et au goût puissant, parfaite en association avec le marron ou la poire.",
  image: "https://www.vici-restauration.com/wp-content/uploads/2024/05/recettes_mousse_cassis_entreprise_montagne_03-04-2021.jpg",
  baseServings: 1, // "Pour 1 cercle (20cm)"
  
  ingredients: [
    { name: "Purée de cassis", amount: 250, unit: "g" },
    { name: "Meringue italienne", amount: 150, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 200, unit: "ml" }
  ],

  steps: [
    { 
      title: "HYDRATATION", 
      text: "Faire tremper la gélatine dans l'eau froide." 
    },
    { 
      title: "COLLAGE", 
      text: "Chauffer une partie de la purée de cassis, y dissoudre la gélatine. Mélanger au reste de la purée." 
    },
    { 
      title: "MERINGUE", 
      text: "Préparer une meringue italienne (sucre cuit à 118°C versé sur les blancs)." 
    },
    { 
      title: "MÉLANGE 1", 
      text: "Incorporer délicatement la meringue italienne à la purée gélifiée." 
    },
    { 
      title: "MÉLANGE 2", 
      text: "Incorporer ensuite la crème fouettée." 
    },
    { 
      title: "DRESSAGE", 
      text: "Utiliser immédiatement." 
    }
  ],

  advices: ["L'ajout de meringue italienne donne une texture plus aérée que la crème seule, parfaite pour équilibrer l'acidité du cassis."],
  chefQuote: "Si le cassis est trop acide, augmentez légèrement la quantité de meringue.",
  equipment: ["Casserole", "Batteur", "Thermomètre (pour la meringue)"]
};

export default mousseCassis;