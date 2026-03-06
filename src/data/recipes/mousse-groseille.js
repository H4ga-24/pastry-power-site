const mousseGroseille = {
  id: "mousse-groseille",
  title: "Mousse Groseille",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse très acidulée et colorée, parfaite pour réveiller les papilles.",
  image: "https://assets.afcdn.com/recipe/20150727/63157_w1024h1024c1cx1250cy1664.webp",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de groseille", amount: 300, unit: "g" },
    { name: "Sucre", amount: 60, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Couler en moules ou cercles." 
    }
  ],

  advices: ["La groseille est très acide, n'hésitez pas à goûter et rectifier le sucre si besoin."],
  chefQuote: "Pour adoucir, vous pouvez remplacer 50g de purée de groseille par de la purée de fraise.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseGroseille;