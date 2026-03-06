const mousseOrangeSanguine = {
  id: "mousse-orange-sanguine",
  title: "Mousse Orange Sanguine",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse acidulée avec une légère amertume et une belle couleur rouge orangé.",
  image: "https://img.cuisineaz.com/660x660/2013/12/20/i74001-mousse-a-l-orange.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée d'orange sanguine", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
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
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée." 
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

  advices: ["L'orange sanguine est saisonnière (janvier-mars), profitez-en !"],
  chefQuote: "Quelques suprêmes d'orange sanguine en décor rappelleront le fruit frais.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseOrangeSanguine;