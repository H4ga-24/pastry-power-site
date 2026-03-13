const pateTartinerAmandeNoisette = {
  id: "pate-tartiner-amande-noisette",
  title: "Pâte à Tartiner Amande Noisette",
  category: "Confiserie",
  subCategory: ["Autres Confiseries"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  yield: "2 pots de 350g",
  image: "https://www.tendances-food.fr/wp-content/uploads/2024/07/pate-a-tartiner-noisette.jpg",
  description: "Une pâte à tartiner maison onctueuse, riche en fruits secs torréfiés, sans huile de palme et bien meilleure que celle du commerce.",
  ingredients: [
    {
      title: "Fruits secs",
      items: [
        { name: "Noisettes entières", qty: 200, unit: "g" },
        { name: "Amandes entières", qty: 100, unit: "g" },
        { name: "Sucre glace", qty: 150, unit: "g" }
      ]
    },
    {
      title: "Chocolat & Finition",
      items: [
        { name: "Cacao en poudre non sucré", qty: 25, unit: "g" },
        { name: "Poudre de lait (facultatif)", qty: 25, unit: "g" },
        { name: "Huile de pépin de raisin", qty: 30, unit: "g" },
        { name: "Chocolat au lait 40%", qty: 100, unit: "g" },
        { name: "Fleur de sel", qty: "1 pincée", unit: "" }
      ]
    }
  ],
  steps: [
    "**Torréfaction** : Préchauffer le four à 160°C. Étaler les noisettes et les amandes sur une plaque. Torréfier pendant 15 à 20 minutes jusqu'à ce qu'elles soient bien dorées à cœur (couper une noisette pour vérifier). À la sortie du four, frotter les noisettes dans un torchon pour retirer le maximum de peau.",
    "**Le praliné maison** : Mettre les fruits secs refroidis dans un mixeur puissant (robot coupe) avec le sucre glace. Mixer par à-coups. On obtient d'abord une poudre, puis une pâte épaisse, et enfin une pâte liquide et fluide (le praliné). Cela peut prendre 10 à 15 minutes selon le robot. Faire des pauses pour ne pas surchauffer le moteur.",
    "**Finition** : Faire fondre le chocolat au lait au bain-marie ou micro-ondes (45°C). Ajouter le chocolat fondu dans le mixeur avec le praliné. Ajouter le cacao, la poudre de lait, le sel et l'huile. Mixer à nouveau quelques secondes pour homogénéiser et émulsionner le tout.",
    "**Cristallisation** : Verser immédiatement dans des pots en verre propres et secs. Laisser cristalliser à température ambiante (environ 20°C) pendant 24h avant de consommer pour obtenir la texture idéale."
  ]
};

export default pateTartinerAmandeNoisette;