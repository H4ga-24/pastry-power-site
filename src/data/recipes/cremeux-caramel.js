const cremeuxCaramel = {
  id: "cremeux-caramel",
  title: "Crémeux Caramel",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "La gourmandise à l'état pur. Un caramel cuit à sec, déglacé à la crème et enrichi de jaunes d'œufs pour une texture fondante.",
  image: "https://www.aureliencohen.fr/wp-content/uploads/2020/02/Entremets-vanille-caramel-speculoos-2-683x1024.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 130, unit: "g" },
    { name: "Crème liquide 35%", amount: 350, unit: "g" },
    { name: "Jaunes d'œufs", amount: 70, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "Le caramel", 
      text: "Chauffer la crème. Réaliser un caramel à sec avec le sucre jusqu'à une belle couleur ambrée." 
    },
    { 
      title: "Le déglaçage", 
      text: "Déglacer le caramel en versant la crème chaude petit à petit en remuant vivement." 
    },
    { 
      title: "La cuisson", 
      text: "Verser ce caramel liquide sur les jaunes d'œufs battus, remettre dans la casserole et cuire à la nappe (84°C)." 
    },
    { 
      title: "Finition", 
      text: "Hors du feu, ajouter la gélatine et le sel. Mixer et laisser refroidir." 
    }
  ],

  advices: [
    "Attention au déglaçage : la vapeur est brûlante. Utilisez une casserole à bords hauts et versez la crème doucement."
  ],
  chefQuote: "Un crémeux caramel doit avoir une pointe d'amertume (caramel poussé) pour ne pas être écœurant.",
  equipment: [
    "Casserole haute",
    "Thermomètre",
    "Mixeur"
  ]
};

export default cremeuxCaramel;