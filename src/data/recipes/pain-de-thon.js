const painDeThon = {
  id: "pain-de-thon",
  title: "Pain de Thon",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "TRÈS FACILE",
  description: "Un cake salé classique, moelleux et économique, idéal pour les apéritifs ou les entrées.",
  image: "https://assets.magimix.com/files/rec_27840/photo_pain-thon-photo.jpg",
  baseServings: 1, // "Pour 1 moule à cake"

  ingredients: [
    { name: "Thon au naturel", amount: 300, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Oeufs", amount: 3, unit: "pcs" },
    { name: "Lait entier", amount: 100, unit: "ml" },
    { name: "Huile de tournesol", amount: 100, unit: "ml" },
    { name: "Levure chimique", amount: 11, unit: "g" }
  ],

  steps: [
    { 
      title: "APPAREIL", 
      text: "Mélanger les œufs, l'huile et le lait. Ajouter la farine et la levure." 
    },
    { 
      title: "GARNITURE", 
      text: "Incorporer le thon égoutté et émietté ainsi que le fromage." 
    },
    { 
      title: "CUISSON", 
      text: "Verser dans un moule et cuire à 180°C pendant 45 min." 
    }
  ],

  advices: ["Servez-le avec une mayonnaise maison citronnée."],
  chefQuote: "La recette parfaite pour un pique-nique ou un buffet froid.",
  equipment: ["Moule à cake", "Fouet", "Cul de poule"]
};

export default painDeThon;