const mousseLitchi = {
  id: "mousse-litchi",
  title: "Mousse Litchi",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse blanche délicate au parfum floral de litchi, souvent associée à la rose ou la framboise.",
  image: "https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/04/Mousse-de-litchis-%C3%A0-la-rose-163879-2.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de litchi", amount: 300, unit: "g" },
    { name: "Sucre", amount: 30, unit: "g" },
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
      text: "Chauffer 1/3 de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine essorée. Mélanger avec le reste de purée froide." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly souple." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la base litchi." 
    },
    { 
      title: "FINITION", 
      text: "Couler en moules." 
    }
  ],

  advices: ["Le litchi est très sucré naturellement, goûtez avant d'ajouter le sucre."],
  chefQuote: "C'est la base de l'Ispahan (Litchi-Rose-Framboise).",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseLitchi;