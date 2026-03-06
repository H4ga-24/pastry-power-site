const lesCongolais = {
  id: "les-congolais",
  title: "Les Congolais",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "15 MIN",
  difficulty: "TRÈS FACILE",
  description: "Des rochers à la noix de coco, croustillants à l'extérieur et moelleux à l'intérieur. Un classique indémodable.",
  image: "https://mallaurydalmasso.com/wp-content/uploads/2025/01/Recette-congolais-recette-rochers-coco.jpg",
  baseServings: 15,
  
  ingredients: [
    { name: "Noix de coco râpée", amount: 200, unit: "g" },
    { name: "Sucre en poudre", amount: 150, unit: "g" },
    { name: "Blancs d'œufs", amount: 3, unit: "pcs" },
    { name: "Compote de pomme", amount: 1, unit: "cs", note: "astuce moelleux" },
    { name: "Vanille", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "MÉLANGE SEC", 
      text: "Mélanger la noix de coco et le sucre dans un saladier." 
    },
    { 
      title: "LIQUIDES", 
      text: "Ajouter les blancs d'œufs non montés, la vanille et la compote." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer légèrement le mélange au bain-marie jusqu'à 50°C pour exalter les arômes (facultatif mais recommandé)." 
    },
    { 
      title: "FAÇONNAGE", 
      text: "Former des petites pyramides ou rochers avec les doigts humidifiés." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 12 à 15 minutes. Les pointes doivent être dorées." 
    }
  ],

  advices: ["La compote est le secret pour qu'ils ne soient pas secs le lendemain."],
  chefQuote: "Pour les plus gourmands, trempez la base dans du chocolat noir fondu.",
  equipment: ["Saladier", "Plaque de cuisson"]
};

export default lesCongolais;