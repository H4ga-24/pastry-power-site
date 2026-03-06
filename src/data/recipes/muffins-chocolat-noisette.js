const muffinsChocolatNoisette = {
  id: "muffins-chocolat-noisette",
  title: "Muffins Pépites & Noisette",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "20 MIN",
  difficulty: "FACILE",
  description: "Le goûter parfait : moelleux, croquant et riche en chocolat.",
  image: "https://empreintesucree.fr/wp-content/uploads/2022/02/1-muffins-chocolat-noisettes-recette-empreinte-sucree.jpg",
  baseServings: 12,
  
  ingredients: [
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Cacao poudre", amount: 30, unit: "g" },
    { name: "Levure chimique", amount: 11, unit: "g" },
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Oeufs", amount: 2, unit: "pc" },
    { name: "Lait", amount: 200, unit: "ml" },
    { name: "Huile végétale", amount: 80, unit: "ml" },
    { name: "Pépites chocolat", amount: 100, unit: "g" },
    { name: "Noisettes concassées", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Mélange Sec", 
      text: "Dans un grand bol, mélanger la farine, le cacao, la levure chimique et le sucre." 
    },
    { 
      title: "Mélange Liquide", 
      text: "Dans un autre bol, battre les œufs avec le lait et l'huile." 
    },
    { 
      title: "Assemblage", 
      text: "Verser les liquides sur les secs. Mélanger grossièrement à la spatule (il doit rester des grumeaux). Ajouter les pépites et les noisettes." 
    },
    { 
      title: "Cuisson", 
      text: "Remplir les moules à muffins aux 3/4. Cuire à 200°C pendant 20 minutes." 
    }
  ],

  advices: ["Le secret des muffins bombés est de ne pas trop mélanger la pâte."],
  chefQuote: "L'huile végétale garde les muffins moelleux plus longtemps que le beurre.",
  equipment: ["Moule à muffins", "Caissettes papier"]
};

export default muffinsChocolatNoisette;