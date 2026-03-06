const mousseMandarine = {
  id: "mousse-mandarine",
  title: "Mousse Mandarine",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse légère et vitaminée, idéale en hiver pour terminer un repas copieux.",
  image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/01/RECETTE_mousse_mandarine.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de mandarine", amount: 300, unit: "g" },
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
      text: "Incorporer la chantilly à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Garnir votre entremets." 
    }
  ],

  advices: ["La mandarine est plus douce que l'orange, elle plaît beaucoup aux enfants."],
  chefQuote: "Un insert praliné au centre contraste à merveille avec la fraîcheur de la mandarine.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseMandarine;