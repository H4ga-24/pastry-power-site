const mousseCaramelBeurreSale = {
  id: "mousse-caramel-beurre-sale",
  title: "Mousse Caramel Beurre Salé",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse gourmande au goût intense de caramel, relevée par une pointe de sel de Guérande.",
  image: "https://assets.afcdn.com/recipe/20160420/11068_w1024h576c1cx1920cy1920.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Sucre en poudre", amount: 150, unit: "g" },
    { name: "Beurre demi-sel", amount: 40, unit: "g" },
    { name: "Crème liquide (pour décuire)", amount: 100, unit: "ml" },
    { name: "Crème liquide (pour monter)", amount: 200, unit: "ml" },
    { name: "Gélatine", amount: 2, unit: "feuilles" },
    { name: "Fleur de sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "CARAMEL", 
      text: "Faire un caramel à sec avec le sucre jusqu'à couleur ambrée." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Ajouter le beurre en morceaux puis la crème chaude (100ml) en faisant attention aux projections." 
    },
    { 
      title: "GÉLATINE", 
      text: "Ajouter la gélatine ramollie dans le caramel chaud. Ajouter la fleur de sel. Laisser tiédir." 
    },
    { 
      title: "CHANTILLY", 
      text: "Monter le reste de la crème (200ml) en chantilly pas trop ferme." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la chantilly au caramel tiédi (environ 30°C)." 
    },
    { 
      title: "FINITION", 
      text: "Verser en verrines et laisser prendre au frais." 
    }
  ],

  advices: ["Si le caramel est trop chaud, la chantilly va fondre. S'il est trop froid, il va figer en grains."],
  chefQuote: "Poussez le caramel assez loin (couleur foncée) pour que le goût ressorte malgré la crème.",
  equipment: ["Casserole", "Batteur", "Verrines"]
};

export default mousseCaramelBeurreSale;