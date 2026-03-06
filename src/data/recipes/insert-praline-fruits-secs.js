const insertPralineFruitsSecs = {
  id: "insert-praline-fruits-secs",
  title: "Insert Praliné Fruits Secs",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une couche gourmande de praliné riche en fruits secs torréfiés, pour un insert croquant et savoureux.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/entremets-tablette-praline-noisette-caramel/entremets-tablette-praline-noisette-caramel-1200.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Praliné amande/noisette", amount: 150, unit: "g" },
    { name: "Chocolat au lait", amount: 50, unit: "g" },
    { name: "Beurre de cacao", amount: 10, unit: "g" },
    { name: "Noisettes torréfiées", amount: 30, unit: "g" },
    { name: "Amandes torréfiées", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "TORRÉFACTION", 
      text: "Torréfier les noisettes et amandes au four à 150°C pendant 15 min. Hacher grossièrement." 
    },
    { 
      title: "FONTE", 
      text: "Fondre le chocolat au lait et le beurre de cacao ensemble." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer le praliné au chocolat fondu." 
    },
    { 
      title: "AJOUTS", 
      text: "Ajouter les fruits secs hachés et mélanger." 
    },
    { 
      title: "COULAGE", 
      text: "Couler dans le moule insert et faire prendre au froid." 
    }
  ],

  advices: ["Le beurre de cacao aide à la prise et donne du cassant."],
  chefQuote: "Hachez les fruits secs au couteau pour avoir des morceaux irréguliers plus gourmands.",
  equipment: ["Four", "Couteau", "Moule insert"]
};

export default insertPralineFruitsSecs;