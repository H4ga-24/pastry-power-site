const moussePamplemousse = {
  id: "mousse-pamplemousse",
  title: "Mousse Pamplemousse",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse fraîche et légèrement amère, parfaite pour une fin de repas légère.",
  image: "https://img.cuisineaz.com/660x660/2018/12/12/i145118-mousse-pamplemousse-rose.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Jus de pamplemousse rose", amount: 250, unit: "ml" },
    { name: "Sucre", amount: 60, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Sucre glace", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans un bol d'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers du jus de pamplemousse avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de jus froid." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly avec le sucre glace." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la chantilly au jus gélifié refroidi." 
    },
    { 
      title: "FINITION", 
      text: "Couler en verrines ou utiliser pour un entremets." 
    }
  ],

  advices: ["Le pamplemousse rose est plus doux que le jaune."],
  chefQuote: "Une pointe de Campari peut accentuer agréablement l'amertume.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default moussePamplemousse;