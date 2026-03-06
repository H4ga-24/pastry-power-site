const tarteAbricotPistache = {
  id: "tarte-abricot-pistache",
  title: "Tarte Abricot Pistache",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "L'association de la pistache douce et de l'abricot acidulé est un grand classique des tartes estivales de boutique.",
  image: "https://ateliersdeludo.fr/wp-content/uploads/2023/06/Tarte-Abricot-Pistache.jpg",
  baseServings: 6, // 1 tarte 22-24cm
  
  ingredients: [
    { name: "Pâte sucrée", amount: 300, unit: "g" },
    { name: "Beurre pommade", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Poudre d'amande", amount: 50, unit: "g" },
    { name: "Poudre de pistache", amount: 50, unit: "g" },
    { name: "Pâte de pistache", amount: 20, unit: "g" },
    { name: "Oeufs", amount: 2, unit: "pc" },
    { name: "Abricots (frais ou sirop)", amount: 500, unit: "g" },
    { name: "Pistaches concassées", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "Fonçage", 
      text: "Foncer un cercle à tarte de 22-24cm avec la pâte sucrée. Piquer le fond et réserver au frais 30 minutes." 
    },
    { 
      title: "Crème de pistache", 
      text: "Dans un bol, mélanger le beurre pommade avec le sucre. Ajouter la poudre d'amande, la poudre de pistache et la pâte de pistache. Incorporer les œufs un à un sans trop fouetter (pour éviter de faire gonfler la crème à la cuisson)." 
    },
    { 
      title: "Garnissage", 
      text: "Étaler la crème de pistache sur le fond de tarte cru." 
    },
    { 
      title: "Disposition des fruits", 
      text: "Couper les abricots en deux (si frais, les dénoyauter). Les disposer face bombée vers le haut sur la crème de pistache, en les enfonçant légèrement." 
    },
    { 
      title: "Cuisson", 
      text: "Enfourner à 180°C pendant 35 à 40 minutes. La crème doit être dorée et les abricots rôtis." 
    },
    { 
      title: "Finition", 
      text: "À la sortie du four, parsemer d'éclats de pistaches vertes torréfiées pour le croquant et la couleur." 
    }
  ],

  advices: ["Si vos abricots frais sont très acides, saupoudrez-les d'un peu de sucre cassonade avant la cuisson."],
  chefQuote: "Le fait de mélanger poudre d'amande et poudre de pistache permet d'alléger le coût tout en gardant une texture parfaite, la pâte de pistache apportant l'arôme intense.",
  equipment: ["Cercle à tarte", "Cul-de-poule", "Fouet"]
};

export default tarteAbricotPistache;