const cremeBavaroiseCacao = {
  id: "creme-bavaroise-cacao",
  title: "Crème Bavaroise au Cacao",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une bavaroise intense en goût chocolaté grâce à l'utilisation de cacao en poudre amer. Moins grasse qu'une mousse au chocolat classique.",
  image: "https://www.maspatule.com/blog/wp-content/uploads/2022/10/BLOG-IMG_MISE_EN_AVT-mousse-bavaroise-chocolat.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Cacao en poudre non sucré", amount: 30, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Gélatine (feuille)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Mélanger le cacao en poudre avec une partie du sucre pour éviter les grumeaux." 
    },
    { 
      title: "L'anglaise cacao", 
      text: "Fouetter les jaunes avec le reste du sucre. Ajouter le mélange cacao/sucre. Verser le lait chaud dessus, mélanger et cuire à la nappe (83°C)." 
    },
    { 
      title: "Le collage", 
      text: "Ajouter la gélatine réhydratée hors du feu. Donner un coup de mixeur plongeant si nécessaire pour lisser le cacao." 
    },
    { 
      title: "Finition", 
      text: "Refroidir à 30°C. Incorporer la crème fouettée mousseuse." 
    }
  ],

  advices: [
    "Utilisez un cacao de très bonne qualité (type Valrhona ou Barry) pour éviter l'effet 'poudreux' en bouche."
  ],
  chefQuote: "Idéale pour des entremets légers où l'on cherche la force du cacao sans la lourdeur du beurre de cacao.",
  equipment: [
    "Casserole",
    "Mixeur plongeant",
    "Fouet"
  ]
};

export default cremeBavaroiseCacao;