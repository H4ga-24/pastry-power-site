const tarteTatin = {
  id: "tarte-tatin",
  title: "La Tarte Tatin (Centre-Val de Loire)",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "Recette traditionnelle de la Tarte Tatin : la célèbre tarte renversée aux pommes caramélisées du Centre-Val de Loire.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/1a5ca5539663852108e731c91b138d9b.jpg",
  baseServings: 6, // personnes
  
  ingredients: [
    { name: "Pommes (Golden, Royal Gala ou Reine des Reinettes)", amount: 1.5, unit: "kg" },
    { name: "Pâte Feuilletée (ou Brisée)", amount: 1, unit: "pce" },
    { name: "Sucre en poudre", amount: 150, unit: "g" },
    { name: "Beurre demi-sel", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation des pommes", 
      text: "Épluchez les pommes, ôtez le cœur et les pépins. Coupez-les en deux (ou en quartiers si elles sont très grosses)." 
    },
    { 
      title: "Le Caramel (Directement dans le moule)", 
      text: "Dans votre moule (s'il va sur le feu) ou dans une casserole, mettez le sucre et le beurre. Faites chauffer à feu moyen jusqu'à l'obtention d'un caramel blond/ambré mousseux. Retirez du feu." 
    },
    { 
      title: "Le Montage des pommes", 
      text: "Disposez les morceaux de pommes directement sur le caramel, très serrés, sur la tranche ou côté bombé vers le fond du moule. Les pommes réduisent à la cuisson, il faut donc 'blinder' le moule, quitte à superposer une deuxième couche." 
    },
    { 
      title: "La Pâte", 
      text: "Déroulez la pâte. Posez-la sur les pommes. Faites glisser les bords de la pâte à l'intérieur du moule, entre les pommes et la paroi (c'est ce qui fera le 'trottoir' de la tarte). Piquez le dessus de la pâte avec une fourchette." 
    },
    { 
      title: "Cuisson", 
      text: "Enfournez à 180°C pendant 35 à 40 minutes. La pâte doit être bien dorée et gonflée. On doit voir le caramel bouillonner sur les côtés." 
    },
    { 
      title: "Le Démoulage", 
      text: "Sortez la tarte du four. Laissez reposer 10 minutes pour que le caramel fige un peu. Posez un plat de service sur le moule. D'un geste rapide, retournez l'ensemble. Servez tiède." 
    }
  ],

  advices: ["Si votre caramel est trop liquide à la sortie du four, remettez le moule sur le feu (gaz/plaque) 2 minutes pour faire réduire le jus avant de démouler."],
  chefQuote: "Une Tatin réussie a des pommes fondantes à cœur, confites dans le beurre et le sucre, contrastant avec le croustillant de la pâte cuite à l'étouffée.",
  equipment: ["Moule à Tatin ou poêle allant au four", "Économe"]
};

export default tarteTatin;