const leKougelhopf = {
  id: "le-kougelhopf",
  title: "Le Kougelhopf",
  category: "Pâtisserie",
  subCategory: ["Pâtes"], // Selon ton fichier
  isVip: false,
  prepTime: "45 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Le kougelhopf est une brioche à pâte levée, spécialité alsacienne, cuite dans un moule en terre cuite émaillée spécifique qui lui donne sa forme haute, cannelée et creusée en son milieu.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/10/kouglof-.jpg",
  baseServings: 5, // 5 pieces (selon le fichier, même si les quantités font penser à 1 gros ou 2 moyens)
  
  ingredients: [
    { name: "Farine T45 (Poolish)", amount: 100, unit: "g" },
    { name: "Lait (Poolish)", amount: 120, unit: "g" },
    { name: "Levure boulangère (Poolish)", amount: 20, unit: "g" },
    { name: "Farine T45 (Pâte)", amount: 400, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Sel fin", amount: 12, unit: "g" },
    { name: "Oeufs", amount: 150, unit: "g" },
    { name: "Beurre", amount: 175, unit: "g" },
    { name: "Raisins secs", amount: 100, unit: "g" },
    { name: "Amandes entières", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "RÉALISATION DE LA POOLISH", 
      text: "Chauffer le lait à 25°C. Délayer la levure dans le lait, puis ajouter la farine (100g). Mélanger et laisser pousser 30 minutes jusqu'à ce que le mélange double de volume et bulle." 
    },
    { 
      title: "PÉTRISSAGE INITIAL", 
      text: "Dans la cuve du batteur, verser la farine restante (400g), le sel, le sucre, les oeufs et la poolish. Pétrir au crochet jusqu'à ce que la pâte se décolle des parois (environ 8-10 min)." 
    },
    { 
      title: "INCORPORATION DU BEURRE", 
      text: "Ajouter le beurre pommade en morceaux. Pétrir à nouveau jusqu'à ce que la pâte se décolle complètement et soit lisse et élastique. Incorporer les raisins secs (préalablement macérés si souhaité) en fin de pétrissage." 
    },
    { 
      title: "POINTAGE", 
      text: "Laisser pointer la pâte à température ambiante pendant 1 heure couvert d'un linge." 
    },
    { 
      title: "FAÇONNAGE ET APPRÊT", 
      text: "Beurrer généreusement le moule à Kougelhopf et déposer une amande entière dans chaque cannelure au fond. Bouler la pâte, faire un trou au milieu et la placer dans le moule. Laisser pousser (apprêt) environ 1h30 (la pâte doit arriver en haut du moule)." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire au four préchauffé à 180°C pendant environ 45 minutes. Si le dessus colore trop vite, couvrir d'aluminium. Démouler dès la sortie du four." 
    }
  ],

  advices: ["La poolish permet d'obtenir une mie plus filante et une meilleure conservation."],
  chefQuote: "Un moule en terre cuite traditionnel alsacien donne une cuisson plus douce et homogène.",
  equipment: ["Moule à Kougelhopf", "Robot pétrisseur"]
};

export default leKougelhopf;