const biscuitSacher = {
  id: "biscuit-sacher",
  title: "Biscuit Sacher",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: true, // Recette premium et riche
  prepTime: "25 MIN",
  cookTime: "15-20 MIN",
  difficulty: "MOYEN",
  description: "D'origine autrichienne, ce biscuit au chocolat dense et ultra-fondant est enrichi de pâte d'amande. Il offre une mache exceptionnelle pour les entremets très chocolatés.",
  image: "https://empreintesucree.fr/wp-content/uploads/2019/04/1-sachertorte-entremets-chocolat-recette-patisserie-empreinte-sucree.jpg",
  baseServings: 1, // 1 plaque ou 2 cercles
  
  ingredients: [
    { name: "Pâte d'amande 50%", amount: 150, unit: "g" },
    { name: "Sucre glace", amount: 50, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Œufs entiers", amount: 50, unit: "g" },
    { name: "Blancs d'œufs", amount: 120, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Chocolat noir 65%", amount: 60, unit: "g" },
    { name: "Beurre", amount: 60, unit: "g" },
    { name: "Farine T55", amount: 50, unit: "g" },
    { name: "Cacao en poudre", amount: 20, unit: "g", note: "Non sucré" }
  ],

  steps: [
    { 
      title: "La Pâte d'amande", 
      text: "Dans la cuve du batteur muni de la feuille, détendre la pâte d'amande avec le sucre glace. Ajouter progressivement les jaunes et les œufs entiers pour obtenir une pâte lisse et blanchie." 
    },
    { 
      title: "Le Chocolat", 
      text: "Faire fondre ensemble le chocolat noir et le beurre au bain-marie (ou au micro-ondes à faible puissance). Le mélange doit être tiède (45°C), pas brûlant." 
    },
    { 
      title: "Le Mélange des masses", 
      text: "Verser le chocolat/beurre fondu dans l'appareil à la pâte d'amande. Bien mélanger." 
    },
    { 
      title: "La Meringue", 
      text: "Monter les blancs en neige avec le sucre semoule. Ils doivent être souples." 
    },
    { 
      title: "L'Incorporation finale", 
      text: "Ajouter 1/3 des blancs à l'appareil chocolaté pour le détendre. Tamiser la farine et le cacao au-dessus de la cuve. Mélanger délicatement à la maryse, puis ajouter le reste des blancs." 
    },
    { 
      title: "La Cuisson", 
      text: "Couler l'appareil sur plaque ou dans des cercles beurrés. Cuire à 180°C pendant 15 à 20 minutes. Le biscuit doit être pris mais garder son moelleux à cœur." 
    }
  ],

  advices: [
    "Pour détendre la pâte d'amande facilement sans faire de grumeaux, chauffez légèrement vos œufs entiers et jaunes au bain-marie avant de les incorporer petit à petit.",
    "C'est un biscuit qui se congèle à la perfection et qui ressort encore plus moelleux."
  ],
  chefQuote: "Le Sacher est un biscuit de caractère. Dans l'entremets viennois d'origine, on l'associe toujours à une confiture d'abricot acidulée pour casser la richesse du chocolat et de l'amande.",
  equipment: [
    "Batteur (outil feuille et fouet)",
    "Bain-marie",
    "Maryse",
    "Tamis"
  ]
};

export default biscuitSacher;