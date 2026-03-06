const mousseMure = {
  id: "mousse-mure",
  title: "Mousse Mûre",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse violette au goût intense et sauvage de sous-bois.",
  image: "https://img.cuisineaz.com/660x495/2013/12/20/i67732-mousse-aux-mures.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de mûre", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine. Mélanger avec le reste de purée et le citron." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer la crème montée à la purée de mûre." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["Comme pour la framboise, filtrez si vous faites la purée vous-même pour ôter les grains."],
  chefQuote: "Le citron aide à fixer la belle couleur violette.",
  equipment: ["Casserole", "Batteur", "Chinois"]
};

export default mousseMure;