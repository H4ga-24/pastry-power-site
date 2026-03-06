const biscuitCuillere = {
  id: "biscuit-cuillere",
  title: "Biscuit Cuillère",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10-12 MIN",
  difficulty: "FACILE",
  description: "Le grand classique de la pâtisserie française, indispensable pour les charlottes et tiramisus. Sa texture est légère, moelleuse à cœur et perles de sucre croquantes en surface.",
  image: "https://www.meilleurduchef.com/images/recettes/biscuit-cuillere/biscuit-cuillere-1200x800.jpg", // Image d'illustration si manquante
  baseServings: 1, // 1 plaque ou 1 cartouchière
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 120, unit: "g" },
    { name: "Sucre semoule (pour les blancs)", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule (pour les jaunes)", amount: 20, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: "", unit: "q.s.", note: "Pour le perlage" }
  ],

  steps: [
    { 
      title: "La Meringue Française", 
      text: "Monter les blancs en neige. Dès qu'ils deviennent mousseux, ajouter le sucre (100g) en 3 fois pour les serrer. La meringue doit former un bec d'oiseau lisse et brillant." 
    },
    { 
      title: "Les Jaunes", 
      text: "Dans un autre récipient, blanchir légèrement les jaunes d'œufs avec les 20g de sucre restants." 
    },
    { 
      title: "Le Mélange", 
      text: "Verser les jaunes blanchis sur la meringue. Mélanger très délicatement à la maryse, en soulevant la masse de bas en haut pour ne pas casser les blancs." 
    },
    { 
      title: "Les Poudres", 
      text: "Incorporer immédiatement la farine préalablement tamisée, toujours à la maryse et avec beaucoup de délicatesse." 
    },
    { 
      title: "Le Dressage", 
      text: "Mettre l'appareil dans une poche munie d'une douille unie de 10 à 12mm. Dresser des cartouchières (bâtonnets collés les uns aux autres) ou des disques sur une plaque recouverte de papier cuisson." 
    },
    { 
      title: "Le Perlage et la Cuisson", 
      text: "Saupoudrer généreusement de sucre glace une première fois. Attendre 5 minutes et saupoudrer une deuxième fois. Cuire à 200°C pendant 10 à 12 minutes." 
    }
  ],

  // Les 3 catégories obligatoires standardisées
  advices: [
    "Le double poudrage de sucre glace est le secret absolu pour obtenir le fameux \"perlé\" craquant du biscuit cuillère. Respectez bien le temps de repos de 5 minutes entre les deux passages."
  ],
  chefQuote: "Travaillez la pâte le moins possible une fois la farine ajoutée pour ne pas faire retomber les blancs. Le pochage et la mise au four doivent être immédiats, cette pâte n'attend pas !",
  equipment: [
    "Poche à douille",
    "Douille unie 10 ou 12mm",
    "Maryse souple",
    "Tamis fin",
    "Batteur électrique"
  ]
};

export default biscuitCuillere;