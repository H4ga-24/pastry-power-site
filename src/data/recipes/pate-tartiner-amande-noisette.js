const pateTartinerAmandeNoisette = {
  id: "pate-tartiner-amande-noisette",
  title: "Pâte à Tartiner Amande Noisette",
  category: "Confiserie",
  subCategory: ["Autres Confiseries"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Une pâte à tartiner maison onctueuse, riche en fruits secs torréfiés, sans huile de palme et bien meilleure que celle du commerce.",
  image: "/images/recipes/pate-tartiner-amande-noisette.png",
  baseServings: 700, // g (environ 2 pots de 350g)
  
  ingredients: [
    { name: "Noisettes entières", amount: 200, unit: "g" },
    { name: "Amandes entières", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 150, unit: "g" },
    { name: "Chocolat au lait 40%", amount: 100, unit: "g" },
    { name: "Huile de pépin de raisin", amount: 30, unit: "g" },
    { name: "Cacao en poudre non sucré", amount: 25, unit: "g" },
    { name: "Poudre de lait", amount: 25, unit: "g", note: "optionnel" },
    { name: "Fleur de sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "TORRÉFACTION", 
      text: "Préchauffer le four à 160°C. Étaler les noisettes et les amandes sur une plaque. Torréfier pendant 15 à 20 minutes jusqu'à ce qu'elles soient bien dorées à cœur (couper une noisette pour vérifier). À la sortie du four, frotter les noisettes dans un torchon pour retirer le maximum de peau." 
    },
    { 
      title: "LE PRALINÉ MAISON", 
      text: "Mettre les fruits secs refroidis dans un mixeur puissant (robot coupe) avec le sucre glace. Mixer par à-coups. On obtient d'abord une poudre, puis une pâte épaisse, et enfin une pâte liquide et fluide (le praliné). Cela peut prendre 10 à 15 minutes selon le robot. Faire des pauses pour ne pas surchauffer le moteur." 
    },
    { 
      title: "FINITION", 
      text: "Faire fondre le chocolat au lait au bain-marie ou micro-ondes (45°C). Ajouter le chocolat fondu dans le mixeur avec le praliné. Ajouter le cacao, la poudre de lait, le sel et l'huile. Mixer à nouveau quelques secondes pour homogénéiser et émulsionner le tout." 
    },
    { 
      title: "CRISTALLISATION", 
      text: "Verser immédiatement dans des pots en verre propres et secs. Laisser cristalliser à température ambiante (environ 20°C) pendant 24h avant de consommer pour obtenir la texture idéale." 
    }
  ],

  advices: [
    "Faites des pauses lors du mixage pour ne pas surchauffer votre robot, ce qui ferait ressortir l'huile des fruits secs de manière excessive et donnerait un goût de brûlé."
  ],
  chefQuote: "Une fois cristallisée, ne la mettez jamais au frigo ! Gardez-la toujours à température ambiante pour qu'elle reste parfaitement tartinable.",
  equipment: ["Four", "Robot coupe puissant", "Pots en verre"]
};

export default pateTartinerAmandeNoisette;