const macaronCarotte = {
  id: "macaron-carotte",
  title: "Macaron Carotte",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: true,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "Une création originale mariant la douceur naturelle de la carotte à l'onctuosité du chocolat blanc. Une couleur vibrante pour un goût surprenant.",
  image: "src/assets/macaron-carotte.jpg",
  baseServings: 70, // coques
  
  ingredients: [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "Coques (50% amande/50% sucre glace)" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques" },
    { name: "Colorant Orange", amount: 2, unit: "g", note: "Coques" },
    { name: "Poudre de carotte", amount: 5, unit: "g", note: "Coques (facultatif)" },
    { name: "Jus de carotte frais", amount: 200, unit: "g", note: "Garniture" },
    { name: "Chocolat blanc couverture", amount: 350, unit: "g", note: "Garniture" },
    { name: "Crème liquide 35%", amount: 80, unit: "g", note: "Garniture" },
    { name: "Beurre", amount: 40, unit: "g", note: "Garniture" },
    { name: "Miel d'acacia", amount: 20, unit: "g", note: "Garniture" },
    { name: "Zeste d'orange", amount: 0.5, unit: "pièce", note: "Garniture" },
    { name: "Cannelle", amount: 1, unit: "pincée", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques", 
      text: "Au robot-coupe, broyer finement le tant pour tant amandes avec le sucre glace. Tamiser. Monter les blancs avec la crème de tartre et 10% du sucre. Ajouter le colorant quand ça mousse. Serrer avec le reste du sucre (meringue ferme). Incorporer les poudres à la maryse (macaronner). Dresser sur plaque. Laisser croûter 30 min. Cuire 12-14 min à 150°C." 
    },
    { 
      title: "Garniture (Ganache Carotte)", 
      text: "Réduire le jus de carotte de moitié à feu doux (obtenir 100g de concentré). Chauffer la crème avec le miel et les zestes. Verser sur le chocolat blanc fondu avec le jus réduit. Emulsionner. Ajouter le beurre et la cannelle. Mixer. Laisser cristalliser au frais 4h." 
    },
    { 
      title: "Montage", 
      text: "Garnir une coque généreusement avec la ganache carotte. Refermer avec une deuxième coque. Réserver au frais 24h avant dégustation." 
    }
  ],

  advices: ["La réduction du jus est essentielle pour concentrer le goût sans mouiller la ganache."],
  chefQuote: "Un mariage surprenant qui rappelle le Carrot Cake.",
  equipment: ["Robot coupe", "Poche à douille", "Tapis de cuisson"]
};

export default macaronCarotte;