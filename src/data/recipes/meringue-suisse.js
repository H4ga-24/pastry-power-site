const meringueSuisse = {
  id: "meringue-suisse",
  title: "Meringue Suisse",
  category: "Pâtisserie",
  subCategory: ["Mousses"], // Ou "Bases" ou "Meringues"
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "2H",
  difficulty: "MOYEN",
  description: "Une meringue dense et croquante, chauffée au bain-marie avant d'être montée. Idéale pour les décors de bûches (champignons, etc.).",
  image: "https://mapatisserie.fr/wp-content/uploads/2018/03/recette-meringue-suisse-20180319_190147-01.jpeg",
  baseServings: 1, // bol
  
  ingredients: [
    { name: "Blancs d'oeufs", amount: 100, unit: "g" },
    { name: "Sucre glace (ou semoule)", amount: 200, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Mélanger les blancs et le sucre dans un cul de poule." 
    },
    { 
      title: "BAIN-MARIE", 
      text: "Chauffer le mélange au bain-marie jusqu'à 55°C/60°C en fouettant constamment." 
    },
    { 
      title: "FOISONNEMENT", 
      text: "Retirer du feu et monter au batteur à grande vitesse jusqu'à refroidissement complet." 
    },
    { 
      title: "DRESSAGE", 
      text: "Dresser les formes souhaitées sur plaque." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire (sécher) au four à 100°C pendant 1h30 à 2h." 
    }
  ],

  advices: ["C'est la meringue la plus solide une fois sèche, parfaite pour les décors."],
  chefQuote: "La chauffe permet de dissoudre parfaitement le sucre et donne une texture très lisse.",
  equipment: ["Bain-marie", "Thermomètre", "Batteur"]
};

export default meringueSuisse;