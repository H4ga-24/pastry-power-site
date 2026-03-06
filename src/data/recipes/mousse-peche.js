const moussePeche = {
  id: "mousse-peche",
  title: "Mousse Pêche",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse délicate à la pêche blanche ou jaune, saveur d'été par excellence.",
  image: "https://img.cuisineaz.com/660x495/2015/07/21/i10965-mousse-aux-peches.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de pêche", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
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
      text: "Chauffer une partie de la purée avec le sucre." 
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
      text: "Incorporer délicatement la crème à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["La pêche blanche est plus parfumée mais s'oxyde plus vite."],
  chefQuote: "Une brunoise de pêche fraîche ajoutée à la fin apporte de la fraîcheur.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default moussePeche;