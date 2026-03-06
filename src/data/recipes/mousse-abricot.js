const mousseAbricot = {
  id: "mousse-abricot",
  title: "Mousse Abricot",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse fruitée et légère, mettant en valeur la saveur acidulée de l'abricot. Idéale pour les entremets d'été.",
  image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/D8818736-E6CD-4DA8-B447-BF091BB16C6B/Derivates/95127F03-131E-468A-A292-61034CF1F8D1.jpg",
  baseServings: 1, // pour 1 entremets standard
  
  ingredients: [
    { name: "Purée d'abricot", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Sucre glace", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "HYDRATATION", 
      text: "Faire tremper la gélatine dans un grand bol d'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer 1/3 de la purée d'abricot avec le sucre. Hors du feu, ajouter la gélatine essorée." 
    },
    { 
      title: "MÉLANGE", 
      text: "Verser le mélange chaud dans le reste de la purée froide. Laisser tiédir à 25-30°C." 
    },
    { 
      title: "CHANTILLY", 
      text: "Monter la crème liquide bien froide en chantilly souple avec le sucre glace." 
    },
    { 
      title: "INCORPORATION", 
      text: "Incorporer délicatement la chantilly à la purée gélifiée à l'aide d'une maryse." 
    },
    { 
      title: "DRESSAGE", 
      text: "Couler immédiatement dans vos moules ou verrines." 
    }
  ],

  advices: ["Si la purée est très acide, vous pouvez augmenter légèrement la quantité de sucre."],
  chefQuote: "L'abricot se marie très bien avec le romarin ou la lavande en infusion.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseAbricot;