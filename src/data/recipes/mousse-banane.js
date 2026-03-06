const mousseBanane = {
  id: "mousse-banane",
  title: "Mousse Banane",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse onctueuse et réconfortante. L'ajout de citron empêche l'oxydation de la banane.",
  image: "https://img.cuisineaz.com/660x660/2013/12/20/i39140-photo-de-mousse-de-banane.jpeg",
  baseServings: 1, // "Pour 1 cercle (20cm)"
  
  ingredients: [
    { name: "Bananes bien mûres", amount: 300, unit: "g" },
    { name: "Jus de citron", amount: 20, unit: "ml" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "MIXAGE", 
      text: "Mixer les bananes avec le jus de citron (très important pour éviter qu'elles noircissent) et le sucre." 
    },
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine. Chauffer une petite partie de la purée de banane, y fondre la gélatine essorée." 
    },
    { 
      title: "MÉLANGE", 
      text: "Mélanger avec le reste de la purée froide." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly et l'incorporer délicatement à la purée de banane." 
    },
    { 
      title: "REPOS", 
      text: "Réserver au frais au moins 4 heures." 
    }
  ],

  advices: ["Cette mousse se marie parfaitement avec le chocolat noir ou le caramel."],
  chefQuote: "Utilisez des bananes tigrées (bien mûres) pour un goût optimal.",
  equipment: ["Mixeur", "Batteur", "Cercle pâtissier"]
};

export default mousseBanane;