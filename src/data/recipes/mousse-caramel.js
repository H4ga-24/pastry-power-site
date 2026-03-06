const mousseCaramel = {
  id: "mousse-caramel",
  title: "Mousse Caramel",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse au caramel classique, douce et onctueuse, sans le côté salé, idéale pour les enfants.",
  image: "https://cache.marieclaire.fr/data/photo/w1000_ci/62/recette-mousse-caramel-beurre-sale.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Sucre en poudre", amount: 150, unit: "g" },
    { name: "Beurre doux", amount: 30, unit: "g" },
    { name: "Crème liquide (tiède)", amount: 100, unit: "ml" },
    { name: "Oeufs", amount: 3, unit: "pc" },
    { name: "Gélatine", amount: 1, unit: "feuille" }
  ],

  steps: [
    { 
      title: "CARAMEL", 
      text: "Réaliser un caramel à sec avec le sucre." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Hors du feu, ajouter le beurre puis la crème tiède. Remettre sur feu doux si besoin pour lisser." 
    },
    { 
      title: "GÉLATINE", 
      text: "Ajouter la gélatine essorée dans le caramel chaud." 
    },
    { 
      title: "JAUNES", 
      text: "Incorporer les jaunes d'œufs un par un dans le caramel tiédi en fouettant vivement." 
    },
    { 
      title: "BLANCS", 
      text: "Monter les blancs en neige ferme." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement les blancs au mélange caramel." 
    },
    { 
      title: "REPOS", 
      text: "Mettre au frais 3h minimum." 
    }
  ],

  advices: ["Faites attention à ne pas cuire les œufs dans le caramel : il doit avoir tiédi."],
  chefQuote: "Pour une texture plus mousseuse, utilisez uniquement les blancs d'œufs (sans les jaunes dans le caramel).",
  equipment: ["Casserole", "Batteur", "Verrines"]
};

export default mousseCaramel;