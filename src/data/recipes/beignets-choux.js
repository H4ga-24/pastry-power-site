const beignetsChoux = {
  id: "beignets-choux",
  title: "Beignets de Pâte à Choux",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"],
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Aussi appelés 'Pets de nonne', ces petites boules de pâte à choux frites soufflent à la cuisson pour devenir incroyablement légères et aériennes.",
  image: "https://www.ticino.ch/pictures/infoturistica/verybig4/tortelli-4.jpg",
  isVip: false,
  baseServings: 6,
  
  ingredients: [
    { name: "Pâte à choux crue", amount: 400, unit: "g", note: "Recette de base (voir Pâte à Choux)" },
    { name: "Huile de friture", amount: 1, unit: "L", note: "Pépins de raisin ou Tournesol" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Enrobage" },
    { name: "Sucre glace", amount: 20, unit: "g", note: "Finition (facultatif)" }
  ],

  steps: [
    { title: "La Pâte à Choux", text: "Réaliser une pâte à choux classique (eau/lait, beurre, sel, sucre, farine, œufs). La particularité pour les beignets : il faut bien la dessécher à la casserole pour qu'elle contienne moins d'eau libre et n'absorbe pas trop d'huile à la friture." },
    { title: "Le Bain d'Huile", text: "Verser l'huile dans une friteuse ou une grande casserole à bords hauts. Chauffer à 170°C. C'est la température critique : trop chaud, ils brûlent sans cuire à cœur ; trop froid, ils boivent l'huile." },
    { title: "Le Façonnage", text: "À l'aide de deux petites cuillères ou d'une poche à douille (sans douille ou 10mm), former des petites boules de la taille d'une noix. Couper la pâte aux ciseaux à la sortie de la poche directement au-dessus de l'huile. Ne surchargez pas le bain (max 10 à la fois)." },
    { title: "La Cuisson (Le Soufflé)", text: "Les beignets vont plonger, puis remonter et gonfler. Ils ont la particularité de se retourner tout seuls lorsqu'une face est cuite ! Laissez frire 5 à 6 minutes jusqu'à une belle coloration dorée uniforme." },
    { title: "L'Enrobage", text: "Sortir les beignets avec une écumoire et les déposer sur du papier absorbant pour retirer l'excédent de gras. Roulez-les immédiatement (encore chauds) dans le sucre semoule pour qu'il cristallise et adhère bien." }
  ],

  advices: [
    "Ne surchargez jamais le bain d'huile. Si vous mettez trop de beignets d'un coup, la température de l'huile chute brutalement, et les beignets absorbent le gras au lieu de saisir."
  ],
  chefQuote: "Le secret des pets de nonne, c'est l'emprisonnement de la vapeur. Une pâte bien desséchée à la casserole + une friture chaude = une explosion de volume.",
  equipment: [
    "Friteuse ou Casserole",
    "Thermomètre sonde",
    "Écumoire (Araignée)",
    "Papier absorbant"
  ]
};

export default beignetsChoux;