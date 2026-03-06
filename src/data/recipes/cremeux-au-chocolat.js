const cremeuxAuChocolat = {
  id: "cremeux-au-chocolat",
  title: "Crémeux au Chocolat",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "La référence pour les amateurs de cacao. Une texture soyeuse et fondante, plus dense qu'une mousse mais plus légère qu'une ganache.",
  image: "https://www.casseroleetchocolat.fr/wp-content/uploads/2018/11/cremeux-chocolat-1.jpeg",
  baseServings: 1, // Environ 500g
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 150, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Chocolat noir 70%", amount: 140, unit: "g" }
  ],

  steps: [
    { 
      title: "La base", 
      text: "Hacher le chocolat. Réaliser une crème anglaise : chauffer lait et crème, verser sur jaunes et sucre, cuire à 83°C." 
    },
    { 
      title: "L'émulsion", 
      text: "Verser la crème anglaise chaude sur le chocolat. Attendre 1 minute. Mélanger à la maryse en créant un noyau élastique." 
    },
    { 
      title: "Le lissage", 
      text: "Finaliser l'émulsion au mixeur plongeant sans incorporer d'air pour un crémeux parfait." 
    },
    { 
      title: "Le repos", 
      text: "Laisser cristalliser au réfrigérateur plusieurs heures avant utilisation (pochage ou quenelle)." 
    }
  ],

  advices: [
    "Ne faites surtout pas bouillir la crème anglaise, sinon les œufs coagulent et donnent un goût d'omelette."
  ],
  chefQuote: "Ce crémeux est parfait pour garnir une tarte au chocolat ou pour être dressé en quenelle sur une assiette.",
  equipment: [
    "Mixeur plongeant",
    "Thermomètre",
    "Maryse"
  ]
};

export default cremeuxAuChocolat;