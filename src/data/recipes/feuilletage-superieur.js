const feuilletageSuperieur = {
  id: "feuilletage-superieur",
  title: "Feuilletage supérieur",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "4H",
  cookTime: "N/A",
  difficulty: "DIFFICILE",
  description: "Un feuilletage d'exception, riche et friable, idéal pour les mille-feuilles et les tartes fines.",
  image: "https://www.tendances-food.fr/wp-content/uploads/feuilletage-superieur-1300x862.png",
  baseServings: 1, // "1 Pâton"
  
  ingredients: [
    { name: "Farine type 55", amount: 500, unit: "g" },
    { name: "Beurre pommade", amount: 400, unit: "g" },
    { name: "Crème liquide", amount: 100, unit: "ml" },
    { name: "Eau", amount: 150, unit: "ml" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "DÉTREMPE.", 
      text: "Préparer la détrempe avec farine, sel, sucre, crème liquide et eau. Pétrir sans trop donner de corps." 
    },
    { 
      title: "REPOS.", 
      text: "Laisser reposer la détrempe 30 min au frais." 
    },
    { 
      title: "BEURRE.", 
      text: "Préparer le beurre pommade et lui donner une forme carrée." 
    },
    { 
      title: "ENROBAGE.", 
      text: "Enrober le beurre dans la détrempe (étaler la détrempe en croix, poser le beurre au centre, rabattre)." 
    },
    { 
      title: "LAMINAGE.", 
      text: "Effectuer les premiers tours de laminage (tour simple ou tour double)." 
    },
    { 
      title: "REPOS INTERMÉDIAIRE.", 
      text: "Laisser reposer entre chaque tour au frais (environ 30min à 1h)." 
    },
    { 
      title: "TOURAGE.", 
      text: "Effectuer 6 tours simples au total." 
    },
    { 
      title: "REPOS FINAL.", 
      text: "Laisser reposer 2h au froid avant utilisation pour éviter la rétraction." 
    }
  ],

  advices: ["La crème liquide dans la détrempe apporte une coloration plus dorée et un goût plus riche."],
  chefQuote: "Respectez bien les temps de repos pour éviter que la pâte ne se rétracte à la cuisson.",
  equipment: ["Rouleau à pâtisserie", "Brosse à farine"]
};

export default feuilletageSuperieur;