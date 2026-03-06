const sauceAuPoivre = {
  id: "sauce-au-poivre",
  title: "La Sauce au Poivre",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Un grand classique de bistrot. Une sauce onctueuse et relevée, parfaite pour napper une entrecôte, un filet de bœuf ou un magret de canard.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/ce6c82585435ec8d26ba4329761a5ee3.jpg",
  baseServings: 4, // personnes (estimé pour une sauce)
  
  ingredients: [
    { name: "Grains de poivre (concassés)", amount: 1, unit: "c.à.s", note: "Mignonnette" },
    { name: "Échalote", amount: 1, unit: "pce", note: "Hachée" },
    { name: "Fond de veau ou bouillon", amount: 250, unit: "ml" },
    { name: "Crème épaisse (30% MG)", amount: 250, unit: "ml" },
    { name: "Beurre", amount: 1, unit: "c.à.s" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Cognac ou Armagnac", amount: 1, unit: "verre", note: "Optionnel" }
  ],

  steps: [
    { 
      title: "La Base Aromatique", 
      text: "Chauffez une poêle à feu moyen et faites fondre le beurre. Ajoutez l'échalote hachée et faites-la revenir (suer) jusqu'à ce qu'elle soit translucide et légèrement dorée, sans la brûler." 
    },
    { 
      title: "La Torréfaction", 
      text: "Ajoutez les grains de poivre concassés dans la poêle avec les échalotes. Faites-les revenir brièvement (30 secondes à 1 minute)." 
    },
    { 
      title: "Le Déglacage", 
      text: "Versez le fond de veau (ou bouillon) dans la poêle. Augmentez le feu pour porter à ébullition. Réduisez ensuite le feu à moyen-doux et laissez mijoter quelques minutes. Le liquide doit réduire légèrement pour concentrer les saveurs." 
    },
    { 
      title: "Le Crémage", 
      text: "Ajoutez la crème épaisse et mélangez bien. Laissez cuire à feu doux. La sauce va épaissir petit à petit jusqu'à obtenir une consistance 'nappante' (elle doit accrocher à la cuillère)." 
    },
    { 
      title: "L'Assaisonnement", 
      text: "Goûtez la sauce. Ajoutez du sel selon votre goût (le bouillon étant souvent déjà salé, ayez la main légère au début). Retirez du feu dès que la consistance vous plaît." 
    }
  ],

  advices: ["La chaleur libère les huiles essentielles du poivre et décuple ses arômes lors de la torréfaction."],
  chefQuote: "Si vous utilisez du Cognac, versez-le juste avant le bouillon et laissez l'alcool s'évaporer quelques secondes pour garder le parfum sans l'amertume de l'alcool.",
  equipment: ["Poêle", "Spatule"]
};

export default sauceAuPoivre;