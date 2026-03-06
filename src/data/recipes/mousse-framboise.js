const mousseFramboise = {
  id: "mousse-framboise",
  title: "Mousse Framboise",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse acidulée et parfumée, grand classique de la pâtisserie fruitière.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/mousse-framboise/mousse-framboise-640.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de framboise", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans l'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine. Mélanger avec le reste de purée." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly pas trop ferme." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème montée à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["Filtrez la purée si vous la faites maison pour enlever les pépins."],
  chefQuote: "Une pointe de vinaigre balsamique peut surprendre et exalter la framboise.",
  equipment: ["Casserole", "Chinois (si purée maison)", "Batteur"]
};

export default mousseFramboise;