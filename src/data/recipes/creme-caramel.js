const cremeCaramel = {
  id: "creme-caramel",
  title: "Crème au Caramel",
  category: "Pâtisserie",
  subCategory: ["Crèmes"], // Ou "Entremets" ou "Desserts Restaurant"
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "35 MIN",
  difficulty: "MOYEN",
  description: "Un dessert d'enfance indémodable : une crème prise au four nappée d'un caramel liquide maison.",
  image: "https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/41/fotolia_60132005_subscription_monthly_xxl.jpg",
  baseServings: 4, 
  
  ingredients: [
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Jaunes d'œufs", amount: 2, unit: "pièces" },
    { name: "Sucre semoule", amount: 80, unit: "g", note: "Pour la crème" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Pour le caramel" },
    { name: "Eau", amount: 20, unit: "g", note: "Pour le caramel" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "Le caramel", 
      text: "Cuire les 100g de sucre et l'eau jusqu'à obtention d'un caramel ambré. Verser immédiatement au fond des ramequins pour napper le fond." 
    },
    { 
      title: "L'infusion", 
      text: "Faire bouillir le lait avec la vanille. Laisser infuser 10 min." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les œufs, les jaunes et le sucre (80g) sans faire mousser (pour éviter les bulles à la cuisson). Verser le lait chaud dessus en remuant." 
    },
    { 
      title: "La cuisson", 
      text: "Filtrer l'appareil et le verser dans les ramequins sur le caramel durci. Cuire au bain-marie au four à 150°C pendant 30 à 40 minutes. La crème doit être tremblotante." 
    }
  ],

  advices: [
    "Ne fouettez pas trop l'appareil, sinon vous aurez une croûte mousseuse désagréable sur le dessus après cuisson."
  ],
  chefQuote: "Démoulez la crème après un repos complet au frais (au moins 4h) pour que le caramel se liquéfie et nappe le dessert.",
  equipment: [
    "Ramequins",
    "Plat à bain-marie",
    "Casserole"
  ]
};

export default cremeCaramel;