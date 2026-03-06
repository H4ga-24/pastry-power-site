const batonMarechaux = {
  id: "baton-marechaux",
  title: "Bâtons de maréchaux",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Un classique de la biscuiterie française. Une meringue française serrée aux amandes et noisettes, dressée en bâtonnets, croquante à l'extérieur et moelleuse à cœur.",
  image: "https://empreintesucree.fr/wp-content/uploads/2018/03/1-batons-marechal-recette-patisserie-empreinte-sucree-1.jpg",
  baseServings: 20,
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Poudre d'amandes", amount: 50, unit: "g" },
    { name: "Poudre de noisettes", amount: 50, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Amandes hachées", amount: 50, unit: "g", note: "Pour le décor" }
  ],

  steps: [
    { title: "Les Poudres", text: "Tamiser ensemble le sucre glace, la poudre d'amandes et la poudre de noisettes." },
    { title: "La Meringue", text: "Monter les blancs en neige. Quand ils commencent à mousser, serrer progressivement avec le sucre semoule jusqu'à obtenir une meringue bien ferme (bec d'oiseau)." },
    { title: "Le Macaronnage", text: "Incorporer délicatement les poudres tamisées à la meringue à l'aide d'une maryse. Soulever la masse de bas en haut pour ne pas casser les blancs." },
    { title: "Le Dressage", text: "Mettre l'appareil dans une poche munie d'une douille unie de 10mm. Dresser des bâtonnets de 6 à 7 cm de long sur une plaque recouverte de papier cuisson." },
    { title: "La Finition", text: "Parsemer généreusement d'amandes hachées. Saupoudrer légèrement de sucre glace." },
    { title: "La Cuisson", text: "Cuire à 170°C pendant 12 à 15 minutes. Les bâtons doivent être légèrement dorés mais rester souples à cœur." }
  ],

  advices: [
    "Passez vos amandes et noisettes hachées 10 minutes au four à 150°C avant de les incorporer. Cela décuple les arômes et garantit un croquant exceptionnel (en plus d'éviter qu'elles ne ramollissent la meringue)."
  ],
  chefQuote: "Veillez à ce que vos blancs soient parfaitement montés et serrés. Si la meringue est trop liquide, les bâtons vont s'étaler à la cuisson et perdre leur relief caractéristique.",
  equipment: [
    "Poche à douille",
    "Douille lisse 10mm",
    "Batteur électrique",
    "Maryse"
  ]
};

export default batonMarechaux;