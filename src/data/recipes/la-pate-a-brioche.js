const laPateABrioche = {
  id: "la-pate-a-brioche",
  title: "La pâte à brioche",
  category: "Pâtisserie",
  subCategory: ["Pâtes"], // Selon ton fichier
  isVip: false,
  prepTime: "40 MIN + Repos",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "La brioche est une viennoiserie à pâte levée et fermentée, riche en beurre et en oeufs. Sa réussite dépend d'un pétrissage intensif et d'une longue fermentation.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/pate-a-brioche-1.jpg",
  baseServings: 8, // "1 Brioche ou 8 parts"
  
  ingredients: [
    { name: "Farine de gruau (T45)", amount: 500, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Levure boulangère", amount: 20, unit: "g" },
    { name: "Oeufs", amount: 300, unit: "g" },
    { name: "Beurre", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "FRASAGE", 
      text: "Dans la cuve du batteur, réunir la farine, le sel, le sucre, la levure (sans contact direct sel/levure) et les oeufs froids. Mélanger à vitesse lente 3 min jusqu'à hydratation complète." 
    },
    { 
      title: "PÉTRISSAGE", 
      text: "Pétrir à vitesse moyenne jusqu'à ce que la pâte se décolle des parois de la cuve (environ 10-15 min). Elle doit devenir élastique et résistante." 
    },
    { 
      title: "INCORPORATION DU BEURRE", 
      text: "Ajouter le beurre pommade (mou mais pas fondu) coupé en morceaux. Pétrir à nouveau jusqu'à ce que le beurre soit parfaitement incorporé et que la pâte se décolle à nouveau des parois (claquage)." 
    },
    { 
      title: "POINTAGE (1ère POUSSE)", 
      text: "Laisser pointer la pâte à température ambiante (24°C) pendant 30 min à 1h. Elle doit commencer à gonfler." 
    },
    { 
      title: "DÉGAZAGE ET FROID", 
      text: "Rompre la pâte (dégazer) en l'aplatissant. Filmer au contact et placer au réfrigérateur pendant au moins 2h (idéalement une nuit) pour bloquer la fermentation et raffermir le beurre (facilite le façonnage)." 
    },
    { 
      title: "FAÇONNAGE ET APPRÊT", 
      text: "Façonner selon la forme désirée (Nanterre, Tête, Tresse). Laisser pousser (apprêt) dans un endroit tiède (25-27°C) jusqu'à ce qu'elle double de volume." 
    },
    { 
      title: "CUISSON", 
      text: "Dorer à l'oeuf. Cuire à 180°C pendant 25 à 35 min selon la taille. La brioche doit sonner creux." 
    }
  ],

  advices: ["Utilisez des oeufs froids pour limiter la montée en température de la pâte lors du pétrissage intensif."],
  chefQuote: "Le secret d'une mie filante réside dans le réseau glutineux : il faut pétrir longtemps avant de mettre le beurre.",
  equipment: ["Robot pétrisseur (crochet)", "Corne", "Moule à brioche"]
};

export default laPateABrioche;