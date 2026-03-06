const insertCaramelExotique = {
  id: "insert-caramel-exotique",
  title: "Insert Caramel Exotique",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Un caramel fruité original où la crème est remplacée par une purée de fruits exotiques pour une explosion de saveurs.",
  image: "https://www.lesrecettesdevanessa.fr/wp-content/uploads/2023/05/Entremet-Chocolat-Exotique_recettes-de-vanessa.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Purée de passion/mangue", amount: 120, unit: "g" },
    { name: "Glucose", amount: 20, unit: "g" },
    { name: "Beurre", amount: 35, unit: "g" },
    { name: "Gélatine", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Chauffer la purée de fruits exotiques sans la faire bouillir. Hydrater la gélatine." 
    },
    { 
      title: "CARAMEL", 
      text: "Cuire le sucre et le glucose au caramel ambré." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Verser la purée chaude sur le caramel petit à petit en remuant vivement." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire le tout à 103°C pour assurer une bonne conservation et texture." 
    },
    { 
      title: "FINITION", 
      text: "Refroidir à 40°C, ajouter le beurre et la gélatine. Mixer pour lisser." 
    },
    { 
      title: "STOCKAGE", 
      text: "Couler en moule insert et congeler." 
    }
  ],

  advices: ["Le fruit de la passion est très acide, le caramel permet d'adoucir tout en gardant du peps."],
  chefQuote: "Mixez longuement avec le beurre pour créer une belle émulsion stable.",
  equipment: ["Casserole", "Mixeur plongeant", "Thermomètre"]
};

export default insertCaramelExotique;