const macaronFruitsDesBois = {
  id: "macaron-fruits-des-bois",
  title: "Macaron aux Fruits des Bois",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "Une explosion de saveurs fruitées avec une confiture maison aux fruits des bois nichée dans une coque violette intense.",
  image: "https://plus.unsplash.com/premium_photo-1703690569954-9cd782cd927e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  baseServings: 70, // coques
  
  ingredients: [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "Coques" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques" },
    { name: "Colorant Jaune", amount: 35, unit: "gouttes", note: "Coques" },
    { name: "Colorant Rouge", amount: 65, unit: "gouttes", note: "Coques" },
    { name: "Colorant Bleu", amount: 25, unit: "gouttes", note: "Coques" },
    { name: "Colorant Noir", amount: 15, unit: "gouttes", note: "Coques" },
    { name: "Pulpe de fruits des bois", amount: 50, unit: "g", note: "Garniture" },
    { name: "Groseilles", amount: 50, unit: "g", note: "Garniture" },
    { name: "Fraises des bois", amount: 125, unit: "g", note: "Garniture" },
    { name: "Myrtilles", amount: 125, unit: "g", note: "Garniture" },
    { name: "Framboises", amount: 100, unit: "g", note: "Garniture" },
    { name: "Mûres", amount: 100, unit: "g", note: "Garniture" },
    { name: "Sucre semoule", amount: 150, unit: "g", note: "Garniture" },
    { name: "Pectine jaune", amount: 10, unit: "g", note: "Garniture" },
    { name: "Sucre semoule (pour pectine)", amount: 30, unit: "g", note: "Garniture" },
    { name: "Acide tartrique", amount: 5, unit: "gouttes", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques Violettes", 
      text: "Broyer et tamiser le tant pour tant et le sucre glace. Monter les blancs avec la crème de tartre et 10% du sucre. Ajouter le mélange de colorants. Serrer avec le reste du sucre. Incorporer les poudres. Macaronner. Dresser. Cuire à 150°C (4-5 min fermé, 12-14 min ouvert)." 
    },
    { 
      title: "Confiture Fruits des Bois", 
      text: "Dans une casserole, chauffer les pulpes et les fruits entiers avec le sucre (150g). À 40°C, ajouter le mélange sucre(30g)+pectine en pluie. Porter à ébullition. Cuire jusqu'à 103°C (ou consistance confiture). Ajouter l'acide tartrique en fin de cuisson. Refroidir." 
    },
    { 
      title: "Montage", 
      text: "Garnir les coques avec la confiture refroidie (qui aura gélifié). Réserver 24h au frais." 
    }
  ],

  advices: ["La pectine jaune est idéale pour les pâtes de fruits et confitures fermes, elle donne une bonne tenue au macaron."],
  chefQuote: "L'acide tartrique active la pectine, vous pouvez le remplacer par du jus de citron.",
  equipment: ["Robot coupe", "Casserole", "Poche à douille"]
};

export default macaronFruitsDesBois;