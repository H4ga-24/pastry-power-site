const mousseKalamansi = {
  id: "mousse-kalamansi",
  title: "Mousse Kalamansi",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse d'agrume puissante et aromatique, entre la mandarine et le citron vert.",
  image: "https://www.elle-et-vire.com/uploads/cache/1920x1200/uploads/recip/recipe/2100/5e78cad23beb5_5e451e9d99e22-finger-kalamansi.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de kalamansi", amount: 250, unit: "g" },
    { name: "Sucre", amount: 70, unit: "g" },
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
      text: "Chauffer une petite partie de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée pour refroidir." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la base kalamansi." 
    },
    { 
      title: "FINITION", 
      text: "Dresser aussitôt." 
    }
  ],

  advices: ["Le kalamansi est très puissant, on en met souvent un peu moins que d'autres purées de fruits."],
  chefQuote: "Une meringue italienne peut être ajoutée pour plus de légèreté et de douceur.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseKalamansi;