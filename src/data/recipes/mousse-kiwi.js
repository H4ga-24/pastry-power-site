const mousseKiwi = {
  id: "mousse-kiwi",
  title: "Mousse Kiwi",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse originale et verte. Attention, le kiwi frais nécessite une cuisson pour neutraliser l'enzyme qui détruit la gélatine.",
  image: "https://img.cuisineaz.com/1024x1024/2017/05/09/i125862-mousse-de-kiwi.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de kiwi (cuite)", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 7, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CUISSON", 
      text: "Si vous utilisez des kiwis frais, mixez-les et portez à ébullition 2 minutes pour détruire l'enzyme actinidine. Sinon la mousse ne prendra jamais." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter le sucre et la gélatine essorée dans la purée chaude." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser refroidir jusqu'à température ambiante." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la purée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["L'enzyme actinidine est la même que dans l'ananas, la cuisson est obligatoire."],
  chefQuote: "Pour une couleur verte plus intense, ajoutez une pointe de colorant vert ou de thé matcha.",
  equipment: ["Casserole", "Mixeur", "Batteur"]
};

export default mousseKiwi;