const cremeuxExotique = {
  id: "cremeux-exotique",
  title: "Crémeux Exotique",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une explosion de saveurs tropicales, alliant la douceur de la mangue et le peps du fruit de la passion dans une texture fondante.",
  image: "https://cuisinedaubery.com/wp-content/uploads/2024/05/cremeux_manguecitronvert_ALTERN09.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Purée de fruits exotiques", amount: 250, unit: "g", note: "Passion/Mangue" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Œufs entiers", amount: 75, unit: "g" },
    { name: "Sucre semoule", amount: 70, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" },
    { name: "Beurre doux", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "La base", 
      text: "Hydrater la gélatine. Chauffer la purée de fruits dans une casserole." 
    },
    { 
      title: "La cuisson", 
      text: "Fouetter les œufs, les jaunes et le sucre. Verser la purée chaude dessus. Reverser dans la casserole et cuire à la nappe (83-84°C)." 
    },
    { 
      title: "Le collage", 
      text: "Hors du feu, ajouter la gélatine essorée. Bien mélanger. Laisser tiédir le mélange vers 40°C." 
    },
    { 
      title: "L'émulsion", 
      text: "Incorporer le beurre froid coupé en dés. Mixer longuement au mixeur plongeant sans incorporer d'air pour une texture parfaite." 
    }
  ],

  advices: [
    "Si vous utilisez une purée sucrée (10%), vous pouvez réduire légèrement la quantité de sucre de la recette."
  ],
  chefQuote: "La température d'incorporation du beurre est clé : trop chaud, il fond et rend le crémeux gras ; trop froid, il ne s'incorpore pas."
  ,
  equipment: [
    "Mixeur plongeant",
    "Thermomètre",
    "Casserole"
  ]
};

export default cremeuxExotique;