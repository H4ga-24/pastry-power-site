const insertCaramelFleurDeSel = {
  id: "insert-caramel-fleur-de-sel",
  title: "Insert Caramel Fleur de Sel",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un cœur coulant et onctueux au bon goût de caramel, relevé par la fleur de sel pour un équilibre parfait.",
  image: "https://www.scrapcooking.fr/modules/prestablog/views/img/grid-for-1-7/up-img/533.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Crème liquide 35%", amount: 120, unit: "ml" },
    { name: "Beurre doux", amount: 30, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Gélatine", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "CARAMEL", 
      text: "Réaliser un caramel à sec avec le sucre dans une casserole à fond épais jusqu'à une couleur ambrée." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Chauffer la crème liquide. Verser doucement sur le caramel hors du feu pour décuire (attention aux projections)." 
    },
    { 
      title: "CUISSON", 
      text: "Remettre sur feu doux pour bien dissoudre les éventuels morceaux de caramel." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter la fleur de sel et le beurre. Hors du feu, ajouter la gélatine hydratée. Laisser refroidir avant de couler en moule." 
    }
  ],

  advices: ["Pour un cœur très coulant, réduisez la gélatine à 1g."],
  chefQuote: "La fleur de sel doit être ajoutée à la fin pour garder son croquant.",
  equipment: ["Casserole", "Fouet", "Moules demi-sphères"]
};

export default insertCaramelFleurDeSel;