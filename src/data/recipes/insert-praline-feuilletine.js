const insertPralineFeuilletine = {
  id: "insert-praline-feuilletine",
  title: "Insert Praliné Feuilletine",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "TRÈS FACILE",
  description: "Le fameux croustillant praliné, un classique indémodable pour apporter de la mâche à vos gâteaux.",
  image: "https://sweetlycakes.com/wp-content/uploads/2022/12/croustillantpraline-9.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Praliné noisette", amount: 100, unit: "g" },
    { name: "Chocolat au lait 40%", amount: 50, unit: "g" },
    { name: "Feuilletine (crêpes dentelles)", amount: 60, unit: "g" },
    { name: "Fleur de sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "FONTE", 
      text: "Faire fondre le chocolat au lait au bain-marie (ou micro-ondes par tranches de 30s)." 
    },
    { 
      title: "MÉLANGE", 
      text: "Mélanger le chocolat fondu avec le praliné noisette." 
    },
    { 
      title: "AJOUTS", 
      text: "Incorporer la feuilletine émiettée et la fleur de sel délicatement." 
    },
    { 
      title: "ÉTALAGE", 
      text: "Étaler la préparation entre deux feuilles de papier cuisson ou dans le fond d'un cercle." 
    },
    { 
      title: "CRISTALLISATION", 
      text: "Laisser prendre au réfrigérateur ou congélateur avant montage." 
    }
  ],

  advices: ["Étalez le croustillant le plus finement possible pour qu'il soit agréable à la dégustation."],
  chefQuote: "Le chocolat isole la crêpe dentelle de l'humidité de la mousse, gardant le croustillant intact.",
  equipment: ["Bol", "Spatule", "Rouleau à pâtisserie"]
};

export default insertPralineFeuilletine;