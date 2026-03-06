const mousseRizImperatrice = {
  id: "mousse-riz-imperatrice",
  title: "Mousse Riz à l'Impératrice",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "40 MIN",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Une version aérée et raffinée du riz au lait, enrichie de crème anglaise collée et de fruits confits.",
  image: "https://odelices.ouest-france.fr/images/recettes/2015/riz_a_l_imperatrice_aux_fruits_confits_et_chantilly5.jpg",
  baseServings: 6, // personnes
  
  ingredients: [
    { name: "Riz rond", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 500, unit: "ml" },
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 3, unit: "pc" },
    { name: "Crème liquide entière", amount: 200, unit: "ml" },
    { name: "Gélatine", amount: 3, unit: "feuilles" },
    { name: "Fruits confits", amount: 50, unit: "g" },
    { name: "Kirsch", amount: 1, unit: "c.à.s" }
  ],

  steps: [
    { 
      title: "RIZ AU LAIT", 
      text: "Cuire le riz dans l'eau bouillante 3 min, égoutter. Cuire ensuite dans le lait chaud 20 min." 
    },
    { 
      title: "ANGLAISE", 
      text: "Blanchir les jaunes avec le sucre. Verser un peu de lait de cuisson, remettre tout à cuire à la nappe (85°C)." 
    },
    { 
      title: "GÉLATINE", 
      text: "Ajouter la gélatine ramollie hors du feu. Laisser refroidir." 
    },
    { 
      title: "GARNITURE", 
      text: "Macerer les fruits confits dans le Kirsch. Ajouter au mélange refroidi." 
    },
    { 
      title: "FINITION", 
      text: "Monter la crème en chantilly et l'incorporer délicatement. Mouler et réfrigérer." 
    }
  ],

  advices: ["Le riz doit être très tendre, prolongez la cuisson si nécessaire."],
  chefQuote: "C'est un dessert vintage qui revient à la mode dans les grands palaces.",
  equipment: ["Casserole", "Batteur", "Moule à charlotte"]
};

export default mousseRizImperatrice;