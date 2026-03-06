const crepesSansGluten = {
  id: "crepes-sans-gluten",
  title: "Crêpes Légères (Sans Gluten)",
  category: "Alternative",
  subCategory: ["Sans Gluten"],
  isVip: false,
  prepTime: "10 MIN",
  restTime: "1 HEURE",
  cookTime: "20 MIN",
  difficulty: "TRÈS FACILE",
  description: "Des crêpes fines, dorées et incroyablement légères. Le mélange riz-maïzena remplace la farine de blé à la perfection sans changer le goût.",
  image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1470&auto=format&fit=crop",
  baseServings: 4, // Pour environ 12-15 crêpes
  
  ingredients: [
    { name: "Farine de Riz demi-complet", amount: 150, unit: "g" },
    { name: "Fécule de Maïs (Maïzena)", amount: 100, unit: "g" },
    { name: "Sucre en poudre", amount: 40, unit: "g" },
    { name: "Œufs entiers", amount: 4, unit: "pièces" },
    { name: "Lait demi-écrémé (ou Soja)", amount: 500, unit: "g" },
    { name: "Beurre fondu (ou Huile)", amount: 40, unit: "g" },
    { name: "Sel fin", amount: 2, unit: "pincées" },
    { name: "Vanille ou Rhum", amount: 10, unit: "g", note: "Facultatif" }
  ],

  steps: [
    { 
      title: "Les poudres", 
      text: "Dans un grand saladier, tamiser ensemble la farine de riz et la fécule de maïs. Ajouter le sucre et le sel. Former un puits." 
    },
    { 
      title: "Le mélange", 
      text: "Casser les œufs dans le puits. Commencer à fouetter doucement au centre en incorporant petit à petit les farines." 
    },
    { 
      title: "La détente", 
      text: "Verser le lait très progressivement tout en continuant de fouetter pour éviter les grumeaux. La pâte doit être fluide et lisse." 
    },
    { 
      title: "La finition", 
      text: "Ajouter le beurre fondu (et l'arôme choisi). Mélanger vigoureusement." 
    },
    { 
      title: "Le repos (CRUCIAL)", 
      text: "Laisser reposer la pâte 1 heure. La farine de riz a besoin de temps pour s'hydrater et s'assouplir." 
    },
    { 
      title: "La cuisson", 
      text: "Cuire dans une poêle bien chaude graissée, 1 à 2 min par face." 
    }
  ],

  advices: [
    "La pâte sans gluten a tendance à sédimenter (la farine tombe au fond). Remuez bien la pâte à la louche avant chaque crêpe."
  ],
  chefQuote: "Vous ne sentirez pas la différence avec des crêpes classiques, elles sont même souvent plus digestes.",
  equipment: [
    "Poêle à crêpes",
    "Fouet",
    "Louche"
  ]
};

export default crepesSansGluten;