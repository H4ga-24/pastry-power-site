const cremeuxFramboise = {
  id: "cremeux-framboise",
  title: "Crémeux Framboise",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "La pureté du fruit dans une crème onctueuse. Ce crémeux offre une couleur vibrante et un goût intense, parfait pour équilibrer le sucre.",
  image: "https://www.mycake.fr/wp-content/uploads/2017/04/rs_Fourrage_GanacheFramboise_16x9.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Purée de framboise", amount: 250, unit: "g" },
    { name: "Jaunes d'œufs", amount: 50, unit: "g" },
    { name: "Œufs entiers", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" },
    { name: "Beurre doux", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "La cuisson", 
      text: "Chauffer la purée de framboise. Fouetter œufs, jaunes et sucre. Cuire le mélange à la nappe (83°C)." 
    },
    { 
      title: "Le collage", 
      text: "Ajouter la gélatine essorée hors du feu. Chinoiser pour retirer les éventuels grains d'œufs coagulés." 
    },
    { 
      title: "L'émulsion", 
      text: "Laisser tiédir à 40°C. Ajouter le beurre froid en dés et mixer longuement au mixeur plongeant." 
    },
    { 
      title: "Le repos", 
      text: "Couler en insert ou en verrine. Laisser prendre au froid au moins 4h." 
    }
  ],

  advices: [
    "Pour une couleur encore plus intense, vous pouvez ajouter une pointe de colorant rouge naturel, mais la framboise suffit généralement."
  ],
  chefQuote: "L'acidité de la framboise aide à la prise de la crème, ce qui permet de mettre un peu moins de gélatine que pour d'autres fruits.",
  equipment: [
    "Mixeur plongeant",
    "Chinois",
    "Casserole"
  ]
};

export default cremeuxFramboise;