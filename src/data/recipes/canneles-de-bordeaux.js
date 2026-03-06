const cannelesDeBordeaux = {
  id: "canneles-de-bordeaux",
  title: "Cannelés de Bordeaux",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"],
  isVip: true,
  prepTime: "25 MIN",
  restTime: "24 HEURES",
  cookTime: "50 MIN",
  difficulty: "MOYEN",
  description: "Le fameux petit gâteau bordelais, à la croûte caramélisée et craquante, et au cœur tendre parfumé au rhum et à la vanille.",
  image: "https://assets.afcdn.com/recipe/20230621/143653_w1024h1024c1cx960cy540cxt0cyt0cxb1920cyb1080.jpg",
  baseServings: 16, 
  
  ingredients: [
    { name: "Lait entier", amount: 500, unit: "ml" },
    { name: "Beurre doux", amount: 50, unit: "g" },
    { name: "Sucre semoule", amount: 250, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 2, unit: "pièces" },
    { name: "Œufs entiers", amount: 2, unit: "pièces" },
    { name: "Rhum brun", amount: 50, unit: "ml" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Faire bouillir le lait avec la gousse de vanille fendue et grattée, et le beurre." 
    },
    { 
      title: "Le mélange", 
      text: "Dans un cul-de-poule, mélanger la farine et le sucre. Ajouter les œufs entiers et les jaunes. Mélanger." 
    },
    { 
      title: "La détenta", 
      text: "Verser le lait bouillant sur le mélange œufs/sucre tout en fouettant doucement pour obtenir une pâte fluide type crêpe, sans grumeaux." 
    },
    { 
      title: "Le parfum", 
      text: "Laisser tiédir, puis ajouter le rhum." 
    },
    { 
      title: "Le repos (INDISPENSABLE)", 
      text: "Filmer et laisser reposer 24h au réfrigérateur. C'est l'étape clé pour que la pâte ne gonfle pas trop à la cuisson." 
    },
    { 
      title: "La cuisson", 
      text: "Remplir les moules à cannelés aux 3/4. Cuire 10 min à 240°C (choc thermique) puis 40 à 50 min à 180°C. Démouler chaud." 
    }
  ],

  advices: [
    "Si vous utilisez des moules en silicone, la croûte sera moins croustillante qu'avec des moules en cuivre ou en aluminium."
  ],
  chefQuote: "Le secret, c'est le repos. Une pâte reposée donnera un cannelé qui ne déborde pas et cuit uniformément.",
  equipment: [
    "Moules à cannelés",
    "Casserole",
    "Fouet"
  ]
};

export default cannelesDeBordeaux;