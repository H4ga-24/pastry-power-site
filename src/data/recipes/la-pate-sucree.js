const laPateSucree = {
  id: "la-pate-sucree",
  title: "La pâte sucrée",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "20 MIN + Repos",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Une pâte friable et fondante, plus riche en sucre que la pâte sablée, idéale pour les tartes aux fruits, au chocolat ou au citron.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/pate-sucree.jpg",
  baseServings: 1, // "1 Tarte"
  
  ingredients: [
    { name: "Beurre pommade", amount: 120, unit: "g" },
    { name: "Sucre glace", amount: 80, unit: "g" },
    { name: "Poudre d'amande", amount: 30, unit: "g" },
    { name: "Sel fin", amount: 1, unit: "g" },
    { name: "Oeuf entier", amount: 50, unit: "g" },
    { name: "Farine T55", amount: 200, unit: "g" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Dans la cuve du batteur muni de la feuille, mélanger le beurre pommade avec le sucre glace et le sel jusqu'à obtenir une texture crémeuse homogène." 
    },
    { 
      title: "AJOUTS", 
      text: "Ajouter la poudre d'amande et l'oeuf. Mélanger brièvement pour émulsionner l'ensemble." 
    },
    { 
      title: "INCORPORATION FARINE", 
      text: "Verser la farine en une fois. Mélanger à vitesse lente juste le temps que la pâte s'amalgame, sans insister pour ne pas la rendre élastique." 
    },
    { 
      title: "FRASAGE", 
      text: "Déposer la pâte sur le plan de travail et la fraser (écraser avec la paume de la main) 1 ou 2 fois pour s'assurer que le beurre est bien incorporé." 
    },
    { 
      title: "REPOS", 
      text: "Former un galet plat, filmer au contact et laisser reposer au moins 2h au froid (idéalement une nuit) avant utilisation." 
    },
    { 
      title: "CUISSON", 
      text: "Foncer un cercle à tarte. Cuire à blanc à 160°C pendant 20-25 minutes pour un fond doré uniformément." 
    }
  ],

  advices: ["Utilisez du sucre glace plutôt que du sucre semoule pour une texture plus fine et moins cassante."],
  chefQuote: "Le secret d'une belle pâte sucrée est de ne jamais la corser (ne pas trop la travailler).",
  equipment: ["Robot pâtissier (feuille)", "Corne", "Rouleau à pâtisserie"]
};

export default laPateSucree;