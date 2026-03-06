const insertAppareilNoix = {
  id: "insert-appareil-noix",
  title: "Insert Appareil Noix",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: true,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une garniture riche et parfumée aux noix torréfiées, parfaite pour les tartes d'automne ou les entremets rustiques.",
  image: "https://patisserieconte.com/wp-content/uploads/patisserie-individuelle-noix.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Cerneaux de noix", amount: 150, unit: "g" },
    { name: "Sucre", amount: 80, unit: "g" },
    { name: "Crème liquide", amount: 80, unit: "ml" },
    { name: "Miel", amount: 30, unit: "g" },
    { name: "Beurre", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "TORRÉFACTION", 
      text: "Torréfier les noix au four à 160°C pendant 10-15 min. Les concasser grossièrement." 
    },
    { 
      title: "CARAMEL", 
      text: "Dans une casserole, cuire le sucre et le miel jusqu'à obtenir un caramel blond." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Décuire avec la crème liquide chaude et le beurre." 
    },
    { 
      title: "MÉLANGE", 
      text: "Ajouter les noix torréfiées et cuire quelques minutes à feu doux pour enrober." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Couler dans des moules ou sur un fond de tarte et laisser refroidir." 
    }
  ],

  advices: ["Attention aux éclaboussures lors de l'ajout de la crème dans le caramel chaud."],
  chefQuote: "Remplacez une partie du sucre par du sucre complet (muscovado) pour une note réglissée.",
  equipment: ["Casserole", "Spatule", "Four"]
};

export default insertAppareilNoix;