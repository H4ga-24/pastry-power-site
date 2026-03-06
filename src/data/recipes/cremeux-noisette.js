const cremeuxNoisette = {
  id: "cremeux-noisette",
  title: "Crémeux Noisette",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un crémeux ultra-gourmand au goût profond de noisette torréfiée, apporté par un praliné de qualité. Une texture dense et fondante.",
  image: "https://www.maspatule.com/blog/wp-content/uploads/2025/02/Template_Blog_portrait-7.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Crème liquide 35%", amount: 125, unit: "g" },
    { name: "Jaunes d'œufs", amount: 50, unit: "g" },
    { name: "Sucre semoule", amount: 20, unit: "g" },
    { name: "Praliné noisette 60%", amount: 120, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Hydrater la gélatine. Placer le praliné dans un récipient haut." 
    },
    { 
      title: "La crème anglaise", 
      text: "Chauffer lait et crème. Fouetter jaunes et sucre. Cuire le tout à la nappe (83°C)." 
    },
    { 
      title: "Le mélange", 
      text: "Hors du feu, ajouter la gélatine. Verser la crème chaude sur le praliné." 
    },
    { 
      title: "L'émulsion", 
      text: "Mixer immédiatement au mixeur plongeant pour créer une émulsion parfaite et lisse." 
    },
    { 
      title: "La cristallisation", 
      text: "Laisser prendre au frais 12h pour que la texture soit optimale." 
    }
  ],

  advices: [
    "Pour un goût plus pur, remplacez la moitié du praliné par de la pâte de noisette pure."
  ],
  chefQuote: "Ce crémeux est parfait pour garnir des choux (Paris-Brest revisité) ou en insert dans un entremets chocolat.",
  equipment: [
    "Mixeur plongeant",
    "Casserole"
  ]
};

export default cremeuxNoisette;