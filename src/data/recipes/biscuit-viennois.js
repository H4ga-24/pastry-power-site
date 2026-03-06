const biscuitViennois = {
  id: "biscuit-viennois",
  title: "Biscuit Viennois",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10-12 MIN",
  difficulty: "MOYEN",
  description: "Un biscuit d'une souplesse extrême, très alvéolé et léger. C'est l'alternative parfaite au biscuit roulé classique pour des montages plus aériens et délicats.",
  image: "https://www.empreintesucree.fr/wp-content/uploads/2018/05/1-biscuit-viennois-recette-patisserie-empreinte-sucree.jpg",
  baseServings: 1, // 1 plaque 40x60
  
  ingredients: [
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Œufs entiers", amount: 120, unit: "g" },
    { name: "Sucre semoule (pour les jaunes)", amount: 80, unit: "g" },
    { name: "Blancs d'œufs", amount: 120, unit: "g" },
    { name: "Sucre semoule (pour les blancs)", amount: 50, unit: "g" },
    { name: "Farine T55", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Le ruban", 
      text: "Dans la cuve du batteur, fouetter les jaunes d'œufs, les œufs entiers et la première partie du sucre (80g) pendant une dizaine de minutes. L'appareil doit blanchir, tripler de volume et former un ruban épais." 
    },
    { 
      title: "La meringue", 
      text: "Monter les blancs d'œufs en neige en incorporant progressivement les 50g de sucre restants pour obtenir une meringue souple (bec d'oiseau)." 
    },
    { 
      title: "Le premier mélange", 
      text: "Détendre l'appareil aux jaunes avec un tiers de la meringue française en mélangeant délicatement à la maryse." 
    },
    { 
      title: "Les poudres", 
      text: "Tamiser la farine au-dessus de la préparation et l'incorporer avec beaucoup de douceur en soulevant la masse." 
    },
    { 
      title: "Le mélange final", 
      text: "Ajouter le reste de la meringue et plier délicatement l'ensemble pour obtenir une masse homogène et très aérienne." 
    },
    { 
      title: "La cuisson", 
      text: "Étaler sur une plaque chemisée de papier cuisson à l'aide d'une spatule coudée. Cuire à 190°C pendant 10 à 12 minutes." 
    }
  ],

  advices: [
    "Pour un résultat optimal, utilisez des œufs à température ambiante, ils monteront beaucoup mieux et retiendront plus d'air."
  ],
  chefQuote: "L'absence de matière grasse ajoutée rend ce biscuit très perméable. Il est fantastique pour absorber les sirops d'imbibage sans s'effriter au montage.",
  equipment: [
    "Batteur (outil fouet)",
    "Plaque de cuisson 40x60",
    "Spatule coudée",
    "Maryse"
  ]
};

export default biscuitViennois;