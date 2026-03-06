const crumbleAmande = {
  id: "crumble-amande",
  title: "Crumble Amande",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "30 MIN",
  difficulty: "FACILE",
  description: "Le crumble aux amandes est un véritable atout pour sublimer une grande variété de préparations pâtissières. Grâce à sa texture sablée, à la fois légère et croustillante, il apporte un contraste exquis.",
  image: "https://assets.afcdn.com/recipe/20160404/56530_w1024h768c1cx1128cy2275cxt0cyt0cxb2151cyb3000.jpg",
  baseServings: 1, // Pour une tarte ou une plaque
  
  ingredients: [
    { name: "Beurre doux (froid)", amount: 150, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Sel fin", amount: 1, unit: "g" },
    { name: "Poudre d'amande", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "La pesée", 
      text: "Mélanger tous les ingrédients secs (farine, sucre, poudre d'amande, sel) dans un cul-de-poule." 
    },
    { 
      title: "Le sablage", 
      text: "Ajouter le beurre froid coupé en petits dés. Sabler le mélange du bout des doigts jusqu'à obtenir une texture grumeleuse grossière. Ne pas pétrir pour ne pas faire une boule de pâte." 
    },
    { 
      title: "La cuisson", 
      text: "Étaler sur une plaque de cuisson. Cuire 30 min à 180°C jusqu'à belle coloration dorée." 
    },
    { 
      title: "Utilisation", 
      text: "Laisser refroidir (il durcit en refroidissant). Utiliser pour saupoudrer des verrines, des fruits rôtis ou comme base reconstituée." 
    }
  ],

  advices: [
    "Vous pouvez remplacer la poudre d'amande par de la poudre de noisette ou de pistache pour varier les plaisirs."
  ],
  chefQuote: "Pour un crumble bien régulier, passez la pâte crue au travers d'une grille à grosses mailles (ou crible) avant de cuire.",
  equipment: [
    "Cul-de-poule",
    "Plaque de cuisson"
  ]
};

export default crumbleAmande;