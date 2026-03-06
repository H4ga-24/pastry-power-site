const moussePoire = {
  id: "mousse-poire",
  title: "Mousse Poire",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse subtile à la poire Williams, idéale pour accompagner le chocolat ou le caramel.",
  image: "https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/160/mousse-de-poires.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de poire Williams", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Alcool de Poire (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer une partie de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine essorée. Mélanger avec le reste de purée et l'alcool." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["La poire Williams est la plus parfumée pour les mousses."],
  chefQuote: "Un cœur coulant au chocolat au centre de cette mousse est divin.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default moussePoire;