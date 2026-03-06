const pateABaba = {
  id: "pate-a-baba",
  title: "La pâte à baba",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "45 MIN + Repos",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Le baba est un gâteau à pâte levée, riche en beurre et en œufs, qui a la particularité d'être séché après cuisson pour être ensuite imbibé d'un sirop alcoolisé (souvent au rhum).",
  image: "https://www.undejeunerdesoleil.com/wp-content/uploads/2016/04/Baba_rhum_recette.jpg",
  baseServings: 8,
  
  ingredients: [
    { name: "Farine de force (T45)", amount: 250, unit: "g" },
    { name: "Sel fin", amount: 5, unit: "g" },
    { name: "Sucre semoule", amount: 20, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 12, unit: "g" },
    { name: "Lait entier (tiède)", amount: 80, unit: "g" },
    { name: "Œufs entiers", amount: 100, unit: "g" },
    { name: "Beurre pommade", amount: 80, unit: "g" }
  ],

  steps: [
    { title: "PRÉPARATION DU LEVAIN (FACULTATIF)", text: "Délayer la levure dans le lait tiède. Mélanger avec un peu de farine prélevée sur la recette pour obtenir une petite pâte molle. Laisser doubler de volume (environ 20 min)." },
    { title: "PÉTRISSAGE", text: "Dans la cuve du batteur avec le crochet, réunir la farine, le sel, le sucre, les œufs et le levain (ou le mélange lait/levure). Pétrir jusqu'à ce que la pâte se décolle des parois." },
    { title: "INCORPORATION DU BEURRE", text: "Ajouter le beurre pommade en morceaux. Pétrir à nouveau jusqu'à ce que la pâte soit lisse, élastique et brillante (le réseau glutineux doit être bien formé)." },
    { title: "POINTAGE", text: "Couvrir la cuve d'un linge ou d'un film alimentaire. Laisser pousser la pâte dans un endroit tiède (25-28°C) pendant environ 30 à 45 minutes. Elle doit doubler de volume." },
    { title: "DRESSAGE", text: "Rompre la pâte (dégazer) pour lui redonner son volume initial. Garnir des moules à baba (bouchon ou savarin) beurrés à mi-hauteur à l'aide d'une poche à douille." },
    { title: "APPRÊT ET CUISSON", text: "Laisser pousser à nouveau dans les moules jusqu'à ce que la pâte atteigne le bord (environ 30 min). Cuire à 180°C pendant 20 à 25 minutes jusqu'à une belle coloration dorée." },
    { title: "SÉCHAGE", text: "Démouler aussitôt sur une grille. Laisser les babas rassir (sécher) pendant au moins 24h avant de les imbiber, cela permet une meilleure absorption du sirop sans qu'ils ne se délitent." }
  ],

  advices: ["Ne remplissez pas trop les moules, le baba gonfle beaucoup au four."],
  chefQuote: "Un baba bien sec boit mieux le sirop qu'un baba frais.",
  equipment: ["Moules à baba (bouchons)", "Robot pétrisseur (crochet)", "Poche à douille"]
};

export default pateABaba;