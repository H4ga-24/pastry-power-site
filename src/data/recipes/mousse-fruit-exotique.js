const mousseFruitExotique = {
  id: "mousse-fruit-exotique",
  title: "Mousse Fruits Exotiques",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse onctueuse aux saveurs des îles (mangue, passion, ananas) pour un dessert frais et léger.",
  image: "https://assets.afcdn.com/recipe/20170404/41108_w1024h1024c1cx1296cy1936.webp",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de fruits exotiques", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans un grand volume d'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée de fruits exotiques avec le sucre." 
    },
    { 
      title: "INCORPORATION", 
      text: "Hors du feu, ajouter la gélatine essorée. Mélanger puis verser le reste de la purée froide." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème liquide en chantilly souple (baveuse)." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème montée à la purée gélifiée (quand elle est à environ 25°C)." 
    },
    { 
      title: "FINITION", 
      text: "Couler immédiatement dans vos moules ou verrines." 
    }
  ],

  advices: ["La texture 'baveuse' de la chantilly (pas trop ferme) est cruciale pour une mousse lisse."],
  chefQuote: "Un insert à la noix de coco au milieu apportera une touche encore plus tropicale.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseFruitExotique;