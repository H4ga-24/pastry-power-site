const moelleuxChocolat = {
  id: "moelleux-chocolat",
  title: "Moelleux Chocolat",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"], // Ou "Gâteaux"
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "25 MIN",
  difficulty: "FACILE",
  description: "Un cœur tendre, une croûte fine, le plaisir intense du chocolat.",
  image: "https://assets.afcdn.com/recipe/20221003/135677_w1024h1024c1cx1160cy690cxt0cyt0cxb2120cyb1414.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Chocolat noir 65%", amount: 200, unit: "g" },
    { name: "Beurre", amount: 150, unit: "g" },
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Oeufs", amount: 4, unit: "pc" },
    { name: "Farine", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Fonte", 
      text: "Faire fondre le chocolat et le beurre ensemble au bain-marie ou micro-ondes." 
    },
    { 
      title: "Mélange", 
      text: "Fouetter les œufs et le sucre dans un cul-de-poule jusqu'à ce que le mélange blanchisse légèrement. Ajouter le mélange chocolat/beurre tiède." 
    },
    { 
      title: "Cuisson", 
      text: "Incorporer la farine tamisée. Verser dans un moule beurré et fariné. Cuire à 180°C environ 20-25 min. Le cœur doit rester tendre." 
    }
  ],

  advices: ["Ne cuisez pas trop longtemps, sinon il deviendra sec."],
  chefQuote: "Une pincée de fleur de sel rehausse le goût du chocolat.",
  equipment: ["Moule à manqué", "Fouet", "Bain-marie"]
};

export default moelleuxChocolat;