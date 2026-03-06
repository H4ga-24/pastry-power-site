const moussePomme = {
  id: "mousse-pomme",
  title: "Mousse Pomme",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une mousse légère au goût de compote de pomme, typique de la Normandie.",
  image: "https://www.metro.ca/userfiles/image/recipes/Mousse-pommes-264.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Pommes (compote fine)", amount: 300, unit: "g" },
    { name: "Sucre (selon acidité)", amount: 30, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Calvados (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "PRÉPARATION", 
      text: "Si vous partez de pommes fraîches, faites une compote bien lisse et mixée. Chauffer une partie." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine essorée dans la compote chaude. Mélanger avec le reste de compote froide et le Calvados." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la compote gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["Utilisez des pommes à cuire qui compotent bien (Boskoop, Canada)."],
  chefQuote: "Une couche de caramel au beurre salé sous cette mousse est incontournable.",
  equipment: ["Casserole", "Mixeur plongeant", "Batteur"]
};

export default moussePomme;