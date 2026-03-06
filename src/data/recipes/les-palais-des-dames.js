const lesPalaisDesDames = {
  id: "les-palais-des-dames",
  title: "Les palais des dames",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "12 MIN",
  difficulty: "MOYEN",
  description: "Des biscuits moelleux originaires du Nord, garnis d'un glaçage royal et parfois de fruits confits.",
  image: "https://static.750g.com/images/1200-630/43b0a2eabaed41fe32489244054bce9f/palets-de-dames.png",
  baseServings: 20,
  
  ingredients: [
    { name: "Beurre mou", amount: 125, unit: "g" },
    { name: "Sucre", amount: 125, unit: "g" },
    { name: "Oeufs", amount: 2, unit: "pcs" },
    { name: "Farine", amount: 150, unit: "g" },
    { name: "Confiture d'abricot", amount: 100, unit: "g", note: "nappage" },
    { name: "Sucre glace", amount: 100, unit: "g", note: "glaçage" },
    { name: "Eau ou Kirsch", amount: 20, unit: "ml", note: "glaçage" }
  ],

  steps: [
    { 
      title: "PÂTE", 
      text: "Crémer le beurre et le sucre. Ajouter les œufs puis la farine. La pâte doit être lisse." 
    },
    { 
      title: "DRESSAGE", 
      text: "Dresser des palets ronds sur une plaque à la poche à douille." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 10 à 12 minutes. Ils doivent rester pâles." 
    },
    { 
      title: "NAPPAGE", 
      text: "À la sortie du four, badigeonner finement de confiture d'abricot chaude." 
    },
    { 
      title: "GLAÇAGE", 
      text: "Mélanger le sucre glace avec le liquide. Napper les biscuits refroidis avec ce glaçage." 
    }
  ],

  advices: ["Le glaçage doit être assez épais pour rester blanc, mais assez fluide pour se lisser."],
  chefQuote: "Une petite cerise confite au centre avant que le glaçage ne fige, c'est la touche traditionnelle.",
  equipment: ["Poche à douille", "Douille unie 10mm", "Pinceau"]
};

export default lesPalaisDesDames;