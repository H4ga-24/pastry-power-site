const glacageChocolatNoir = {
  id: "glacage-chocolat-noir",
  title: "Glaçage Chocolat Noir (Couverture)",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un glaçage miroir classique au chocolat de couverture, offrant un goût chocolaté plus fin que la version cacao.",
  image: "https://res.cloudinary.com/valrhona/image/upload/c_limit,f_auto,fl_progressive,q_auto,w_800/prod/var/site/storage/images/2/3/2/3/163232-1-fre-WO/Valrhona.com-Lexique-Recette-Gla%C3%A7age.jpg",
  baseServings: 600, // g
  
  ingredients: [
    { name: "Eau", amount: 75, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 150, unit: "g" },
    { name: "Lait concentré sucré", amount: 100, unit: "g" },
    { name: "Chocolat noir de couverture (64-70%)", amount: 150, unit: "g" },
    { name: "Gélatine en poudre", amount: 10, unit: "g" },
    { name: "Eau d'hydratation", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Hydrater la gélatine avec l'eau froide. Hacher le chocolat noir ou utiliser des pistoles." 
    },
    { 
      title: "SIROP", 
      text: "Dans une casserole, porter l'eau, le sucre et le sirop de glucose à 103°C." 
    },
    { 
      title: "ASSEMBLAGE", 
      text: "Verser le sirop bouillant sur le chocolat noir et le lait concentré sucré dans un pichet." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter la masse gélatine. Laisser fondre un instant puis mixer soigneusement au mixeur plongeant sans incorporer d'air pour lisser le glaçage." 
    },
    { 
      title: "REPOS", 
      text: "Laisser cristalliser au réfrigérateur 24h. Utiliser réchauffé à 35°C." 
    }
  ],

  advices: ["Utilisez un chocolat de couverture fluide pour un nappage fin."],
  chefQuote: "Ce glaçage est moins amer que celui au cacao poudre, plus consensuel.",
  equipment: ["Mixeur plongeant", "Thermomètre", "Pichet"]
};

export default glacageChocolatNoir;