const moussePassion = {
  id: "mousse-passion",
  title: "Mousse Passion",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse au caractère exotique affirmé, très acide et parfumée.",
  image: "https://assets.afcdn.com/recipe/20170404/41108_w1024h1024c1cx1296cy1936.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de fruit de la passion", amount: 250, unit: "g" },
    { name: "Sucre", amount: 60, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans un grand volume d'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer une petite partie de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine essorée. Mélanger avec le reste de purée." 
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

  advices: ["Si vous utilisez des fruits frais, filtrez bien les graines noires."],
  chefQuote: "Cette mousse est idéale pour contrebalancer un biscuit très sucré comme un succès.",
  equipment: ["Casserole", "Batteur", "Chinois (si fruits frais)"]
};

export default moussePassion;