const glacageNoir = {
  id: "glacage-noir",
  title: "Glaçage Noir (Miroir Cacao)",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "DIFFICILE",
  description: "Le classique glaçage miroir noir intense, réalisé à base de cacao en poudre pour une couleur ébène profonde et brillante.",
  image: "https://mapatisserie.fr/wp-content/uploads/2016/05/IMG_20160425_073459.jpg",
  baseServings: 600, // g
  
  ingredients: [
    { name: "Eau", amount: 120, unit: "g" },
    { name: "Sucre semoule", amount: 360, unit: "g" },
    { name: "Crème liquide 35% MG", amount: 240, unit: "g" },
    { name: "Cacao en poudre non sucré", amount: 120, unit: "g" },
    { name: "Gélatine feuille (200 bloom)", amount: 12, unit: "g" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Hydrater les feuilles de gélatine dans un grand volume d'eau froide." 
    },
    { 
      title: "SIROP", 
      text: "Dans une grande casserole, mélanger l'eau et le sucre. Porter à ébullition jusqu'à 103°C." 
    },
    { 
      title: "CACAO", 
      text: "Ajouter le cacao en poudre tamisé et la crème liquide tiède. Mélanger." 
    },
    { 
      title: "EBULLITION", 
      text: "Redonner une ébullition pour bien dissoudre le cacao." 
    },
    { 
      title: "FINITION", 
      text: "Hors du feu, ajouter la gélatine essorée. Laisser refroidir un peu puis mixer longuement au mixeur plongeant sans faire de bulles. Chinoiser. Repos 24h. Utiliser à 30-35°C." 
    }
  ],

  advices: ["Le tamisage du cacao est indispensable pour éviter les petits grains disgracieux sur le glaçage."],
  chefQuote: "C'est le glaçage le plus noir et le plus brillant, mais aussi le plus amer.",
  equipment: ["Grande casserole", "Tamis", "Mixeur plongeant", "Chinois"]
};

export default glacageNoir;