const cremeAnglaise = {
  id: "creme-anglaise",
  title: "Crème Anglaise",
  category: "Pâtisserie",
  subCategory: ["Crèmes"], // Pourrait aussi être "Sauces" en cuisine, mais ici pâtisserie
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une sauce onctueuse à la vanille, base des îles flottantes, des glaces et accompagnement idéal des fondants au chocolat.",
  image: "https://mapatisserie.fr/wp-content/uploads/2025/05/recette-creme-anglaise-10.jpg",
  baseServings: 4, // 500ml
  
  ingredients: [
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Jaunes d'œufs", amount: 100, unit: "g", note: "Env. 5 jaunes" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Fendre la gousse de vanille et gratter les graines. Mettre le tout (gousse + graines) dans le lait et porter à ébullition. Laisser infuser 10 min hors du feu." 
    },
    { 
      title: "Le blanchiment", 
      text: "Fouetter les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse légèrement." 
    },
    { 
      title: "La liaison", 
      text: "Verser le lait chaud (débarrassé de la gousse) sur les jaunes tout en fouettant." 
    },
    { 
      title: "La cuisson à la nappe", 
      text: "Reverser le tout dans la casserole. Cuire à feu doux en remuant sans cesse avec une spatule (vanner) jusqu'à atteindre 83°C. La crème doit napper la cuillère. Ne jamais faire bouillir." 
    },
    { 
      title: "Le refroidissement", 
      text: "Passer immédiatement au chinois (tamis) dans un récipient froid pour stopper la cuisson." 
    }
  ],

  advices: [
    "Si votre crème tranche (grumeaux), passez-la quelques secondes au mixeur plongeant pour rattraper l'émulsion."
  ],
  chefQuote: "La température précise est 83°C. Au-delà de 85°C, les œufs coagulent et vous obtenez une omelette sucrée !",
  equipment: [
    "Thermomètre sonde",
    "Casserole",
    "Spatule (Maryse)",
    "Chinois"
  ]
};

export default cremeAnglaise;