const laPateACroissants = {
  id: "la-pate-a-croissants",
  title: "La pâte à croissants",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "1H + Repos",
  cookTime: "15 MIN",
  difficulty: "DIFFICILE",
  description: "La Pâte Levée Feuilletée (PLF) est la base de la viennoiserie. Elle combine la technique de la pâte levée (brioche) et celle du feuilletage (tourage) pour obtenir des croissants légers, croustillants et alvéolés.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/croissants.png",
  baseServings: 12, // "12 croissants"
  
  ingredients: [
    { name: "Farine de force (T45)", amount: 500, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Levure fraîche", amount: 20, unit: "g" },
    { name: "Eau froide", amount: 130, unit: "g" },
    { name: "Lait froid", amount: 130, unit: "g" },
    { name: "Beurre (pour la détrempe)", amount: 50, unit: "g" },
    { name: "Beurre de tourage (sec)", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "DÉTREMPE", 
      text: "Dans la cuve du batteur, mélanger la farine, le sel, le sucre, la levure émiettée, le beurre pommade, l'eau et le lait froids. Pétrir environ 3 min en 1ère vitesse puis 6 min en 2ème vitesse. La pâte doit être lisse et élastique (24°C max)." 
    },
    { 
      title: "POINTAGE", 
      text: "Laisser pointer 30 min à température ambiante. Rompre la pâte, l'étaler grossièrement, filmer et placer au réfrigérateur une nuit (ou au moins 4h) pour bloquer la fermentation." 
    },
    { 
      title: "ENCHÂSSAGE", 
      text: "Étaler le beurre de tourage froid mais malléable en carré. Étaler la détrempe froide en un rectangle deux fois plus grand. Poser le beurre au centre, replier la détrempe par-dessus pour l'enfermer." 
    },
    { 
      title: "TOURAGE", 
      text: "Allonger la pâte. Réaliser un tour double (pliage en 4). Laisser reposer 30 min au frais. Réaliser ensuite un tour simple (pliage en 3). Laisser reposer 30 min au frais." 
    },
    { 
      title: "DÉTAILLAGE ET FAÇONNAGE", 
      text: "Étaler la pâte à 3,5mm d'épaisseur. Détailler des triangles isocèles (base 12cm, hauteur 25cm). Rouler les croissants de la base vers la pointe." 
    },
    { 
      title: "APPRÊT", 
      text: "Dorer à l'œuf. Laisser pousser 2h à 2h30 à 26°C-27°C (humidité idéale 75%). Les croissants doivent trembloter." 
    },
    { 
      title: "CUISSON", 
      text: "Dorer une seconde fois délicatement. Cuire au four ventilé à 170°C pendant 15 à 18 minutes." 
    }
  ],

  advices: ["Travaillez dans une pièce fraîche pour que le beurre ne fonde pas.", "Ne forcez jamais sur la pâte, si elle se rétracte, remettez-la au frais."],
  chefQuote: "Un bon croissant se reconnaît à ses alvéoles régulières et à sa couleur ambrée.",
  equipment: ["Rouleau à pâtisserie", "Brosse à farine", "Couteau de tour"]
};

export default laPateACroissants;