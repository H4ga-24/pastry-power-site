const mousseMirabelle = {
  id: "mousse-mirabelle",
  title: "Mousse Mirabelle",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse délicate au goût subtil de prune jaune, emblème de la Lorraine.",
  image: "https://www.panierdesaison.com/wp-content/uploads/2020/08/recette-mousse-mirabelle-facile-500x500.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de mirabelle", amount: 300, unit: "g" },
    { name: "Sucre", amount: 30, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Eau de vie Mirabelle", amount: 10, unit: "ml" }
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
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée et l'eau de vie." 
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

  advices: ["L'alcool est facultatif mais rehausse le parfum de la mirabelle."],
  chefQuote: "Gardez quelques mirabelles poêlées au beurre pour décorer.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseMirabelle;