const biscuitJoconde = {
  id: "biscuit-joconde",
  title: "Biscuit Joconde",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "8-10 MIN",
  difficulty: "MOYEN",
  description: "Le biscuit star de l'entremets Opéra ! Riche en amandes, il est souple, fin et absorbe parfaitement les sirops de punchage sans se désagréger.",
  image: "https://empreintesucree.fr/wp-content/uploads/2018/05/1-biscuit-joconde-recette-patisserie-empreinte-sucree.jpg", // Image d'illustration
  baseServings: 1, // 1 plaque 40x60cm
  
  ingredients: [
    { name: "Œufs entiers", amount: 150, unit: "g" },
    { name: "Poudre d'amandes", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 30, unit: "g" },
    { name: "Beurre fondu", amount: 20, unit: "g" },
    { name: "Blancs d'œufs", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g", note: "Pour serrer les blancs" }
  ],

  steps: [
    { 
      title: "Le Tant-pour-tant", 
      text: "Dans la cuve du batteur, fouetter les œufs entiers avec la poudre d'amandes et le sucre glace tamisés. Faire monter l'appareil pendant environ 10 minutes jusqu'à ce qu'il fasse le ruban." 
    },
    { 
      title: "La Meringue", 
      text: "Dans un autre cul-de-poule, monter les blancs d'œufs. Dès qu'ils moussent, ajouter le sucre semoule pour obtenir une meringue souple (bec d'oiseau)." 
    },
    { 
      title: "Le Mélange", 
      text: "Incorporer délicatement la farine tamisée à l'appareil aux amandes. Ajouter ensuite le beurre fondu refroidi." 
    },
    { 
      title: "L'Incorporation finale", 
      text: "Ajouter la meringue française en pliant doucement la masse à l'aide d'une maryse pour conserver tout le volume." 
    },
    { 
      title: "La Cuisson", 
      text: "Étaler finement (3 à 5 mm) sur une plaque recouverte de papier cuisson. Cuire à 200°C ou 220°C pendant 8 à 10 minutes. Le biscuit doit être légèrement doré mais pas sec." 
    }
  ],

  advices: [
    "Pour un Opéra au café, vous pouvez remplacer 10g de farine par du cacao en poudre non sucré, ou ajouter un trait d'extrait de café dans l'appareil aux œufs.",
    "Débarrassez le biscuit de sa plaque chaude dès la sortie du four pour stopper la cuisson, sinon il deviendra cassant."
  ],
  chefQuote: "Un bon Joconde se cuit à four très chaud et très rapidement. C'est le choc thermique qui garantit son moelleux inimitable. Si votre four est trop froid, le biscuit va sécher.",
  equipment: [
    "Plaque de cuisson 40x60cm",
    "Spatule coudée",
    "Batteur électrique",
    "Tamis"
  ]
};

export default biscuitJoconde;