const farBreton = {
  id: "far-breton",
  title: "Far Breton",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"], // Correction appliquée
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "1H",
  difficulty: "FACILE",
  description: "Un classique de la Bretagne, dense et crémeux, garni de pruneaux.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/far-breton/far-breton-1200.jpg",
  baseServings: 8,
  
  ingredients: [
    { name: "Pruneaux dénoyautés", amount: 200, unit: "g" },
    { name: "Farine T55", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Oeufs", amount: 4, unit: "pièces" },
    { name: "Lait entier", amount: 750, unit: "ml" },
    { name: "Beurre demi-sel", amount: 40, unit: "g" },
    { name: "Rhum ambré", amount: 20, unit: "ml" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Faire macérer les pruneaux dans le rhum (facultatif) pendant 30 minutes. Préchauffer le four à 180°C." 
    },
    { 
      title: "Appareil", 
      text: "Mélanger la farine et le sucre. Ajouter les œufs un à un, puis délayer progressivement avec le lait pour éviter les grumeaux." 
    },
    { 
      title: "Cuisson", 
      text: "Verser la pâte dans un plat beurré. Répartir les pruneaux. Parsemer de noisettes de beurre. Cuire 1h jusqu'à ce que le dessus soit bien doré." 
    }
  ],

  advices: ["Utilisez du beurre demi-sel pour respecter la tradition bretonne."],
  chefQuote: "Le far est meilleur le lendemain, une fois qu'il a bien raffermi.",
  equipment: ["Plat à gratin", "Fouet", "Cul-de-poule"]
};

export default farBreton;