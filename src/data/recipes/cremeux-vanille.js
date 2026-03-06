const cremeuxVanille = {
  id: "cremeux-vanille",
  title: "Crémeux Vanille",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "La base absolue de la pâtisserie fine. Une texture veloutée et un parfum de vanille envoûtant pour garnir choux, tartes ou entremets.",
  image: "https://mapatisserie.fr/wp-content/uploads/2024/02/recette-cremeux-vanille-01.jpg",
  baseServings: 6, // 6 parts ou 1 insert de 18cm
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 250, unit: "g" },
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Jaunes d'œufs", amount: 90, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Gousses de vanille", amount: 2, unit: "pièces" },
    { name: "Beurre doux", amount: 40, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Chauffer le lait et la crème avec les gousses de vanille grattées. Laisser infuser 30 min à couvert pour bien développer les arômes." 
    },
    { 
      title: "La cuisson", 
      text: "Chauffer à nouveau le liquide. Verser sur les jaunes et le sucre blanchis. Cuire à la nappe à 83°C." 
    },
    { 
      title: "Le collage", 
      text: "Ajouter la gélatine essorée hors du feu. Chinoiser la préparation pour retirer les gousses." 
    },
    { 
      title: "L'émulsion", 
      text: "Lorsque la crème atteint 40°C, ajouter le beurre et mixer au mixeur plongeant pour lisser et donner du brillant." 
    },
    { 
      title: "Le repos", 
      text: "Filmer au contact et réserver au frais au moins 6h." 
    }
  ],

  advices: [
    "Utilisez de la vanille Bourbon ou Tahiti selon vos goûts, mais soyez généreux : c'est l'âme de la recette."
  ],
  chefQuote: "Le petit ajout de beurre en fin de recette apporte une rondeur en bouche incomparable.",
  equipment: [
    "Mixeur plongeant",
    "Casserole",
    "Chinois"
  ]
};

export default cremeuxVanille;