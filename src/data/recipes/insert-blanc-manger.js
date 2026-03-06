const insertBlancManger = {
  id: "insert-blanc-manger",
  title: "Insert Blanc-Manger",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une préparation délicate et lactée à l'amande ou au coco, offrant une texture soyeuse et un goût subtil.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8nbIGhx5NgFwrx0hIxxW6LQGymQReaupTnCF5LBRm-UqRQ_YfT0aqqSOIFC2bBU_nJ18VC94niWMlryyLkZUCmIZIUj8xgVQeAIZTY-LbI8_F1oO2SsLbQVK0q7v0ao3zP8rflhPOOWGB/s1600/buchecoco90.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Lait d'amande", amount: 200, unit: "ml" },
    { name: "Crème liquide", amount: 100, unit: "ml" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine", amount: 4, unit: "g" },
    { name: "Extrait d'amande amère", amount: 2, unit: "gouttes" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Hydrater la gélatine dans l'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Porter à ébullition le lait d'amande, la crème et le sucre." 
    },
    { 
      title: "GÉLATINE", 
      text: "Hors du feu, ajouter la gélatine essorée et l'extrait d'amande. Bien mélanger." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser tiédir légèrement à température ambiante en remuant de temps en temps." 
    },
    { 
      title: "MOULAGE", 
      text: "Verser dans le moule insert et placer au congélateur pendant au moins 4h." 
    }
  ],

  advices: ["Filtrez la préparation avant de couler pour enlever la peau qui a pu se former."],
  chefQuote: "Infusez des amandes torréfiées dans le lait chaud 10 min avant de filtrer pour un goût naturel intense.",
  equipment: ["Casserole", "Fouet", "Moule insert"]
};

export default insertBlancManger;