const biscuitChocolatSansFarine = {
  id: "biscuit-chocolat-sans-farine",
  title: "Biscuit Chocolat Sans Farine",
  category: "Alternative",
  subCategory: ["Biscuits", "Sans Gluten"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "20 MIN",
  difficulty: "FACILE",
  description: "Un biscuit intense en chocolat, dense et fondant. L'absence de farine le rend incroyablement moelleux et adapté aux intolérants au gluten.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/07/biscuit-chocolat-sans-farine.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Beurre (pour émulsion)", amount: 200, unit: "g" },
    { name: "Sucre (type noisette)", amount: 50, unit: "g" },
    { name: "Sucre (pour émulsion)", amount: 100, unit: "g" },
    { name: "Beurre (ajout)", amount: 50, unit: "g" },
    { name: "Chocolat de couverture 68%", amount: 270, unit: "g" },
    { name: "Sucre glace", amount: 50, unit: "g" }
  ],

  steps: [
    { title: "FONDRE LE CHOCOLAT", text: "Faire fondre le chocolat de couverture 68% au bain-marie ou au micro-ondes (doucement, par tranches de 30 secondes) avec les 50g de beurre d'ajout." },
    { title: "CRÉMAGE", text: "Dans la cuve du batteur, mélanger le premier beurre (pommade) avec les différents sucres (noisette, emul et glace) pour obtenir une texture crémeuse et homogène." },
    { title: "INCORPORATION", text: "Incorporer le mélange chocolat/beurre fondu à la préparation crémeuse. Mélanger délicatement pour ne pas incorporer trop d'air." },
    { title: "MOULAGE", text: "Graisser un moule (ou utiliser un cercle sur tapis silicone). Verser l'appareil à l'intérieur et lisser la surface." },
    { title: "CUISSON", text: "Cuire 20 minutes à 170°C (chaleur ventilée). Le cœur doit rester légèrement tremblotant, il figera en refroidissant." },
    { title: "FINITION", text: "Laisser refroidir complètement avant de démouler, car le gâteau est très fragile lorsqu'il est chaud à cause de l'absence de gluten (structure)." }
  ],

  advices: [
    "Sans farine, la structure du gâteau repose entièrement sur le beurre et le chocolat qui figent en refroidissant. Ne démoulez jamais à chaud !",
    "Ce gâteau se conserve très bien quelques jours et gagne même en texture après 24h au frais."
  ],
  chefQuote: "C'est la preuve qu'on peut faire de la haute pâtisserie sans farine. La texture est unique, à mi-chemin entre la truffe au chocolat et le brownie. Servez-le avec une crème anglaise pour contraster.",
  equipment: [
    "Moule à manqué",
    "Batteur (feuille)",
    "Maryse",
    "Bain-marie"
  ]
};

export default biscuitChocolatSansFarine;