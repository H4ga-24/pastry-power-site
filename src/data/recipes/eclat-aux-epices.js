const eclatAuxEpices = {
  id: "eclat-aux-epices",
  title: "L'Éclat aux Épices",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "3H", // Note: Source dit "PREP: 3H" dans le badge mais "4H 00" dans la carte info. J'ai gardé 3H.
  cookTime: "40 MIN",
  difficulty: "AVANCÉ",
  description: "Une création chaleureuse alliant la douceur de la poire à la force du pain d'épices, enrobée d'une mousse chocolat lait subtilement épicée.",
  image: "https://i.imgur.com/hCaQ2m2.png",
  baseServings: 15,
  
  ingredients: [
    { name: "Purée de poire", amount: 250, unit: "g", note: "Insert Poire" },
    { name: "Dés de poires (sirop/fraîches)", amount: 150, unit: "g", note: "Insert Poire" },
    { name: "Sucre semoule", amount: 40, unit: "g", note: "Insert Poire" },
    { name: "Pectine NH", amount: 4, unit: "g", note: "Insert Poire" },
    { name: "Vanille / Badiane", amount: 1, unit: "QS", note: "Insert Poire" },
    { name: "Oeufs entiers", amount: 100, unit: "g", note: "Biscuit Chocolat" },
    { name: "Sucre inverti (Trimoline)", amount: 35, unit: "g", note: "Biscuit Chocolat" },
    { name: "Sucre semoule", amount: 35, unit: "g", note: "Biscuit Chocolat" },
    { name: "Poudre d'amande", amount: 30, unit: "g", note: "Biscuit Chocolat" },
    { name: "Farine T55", amount: 50, unit: "g", note: "Biscuit Chocolat" },
    { name: "Cacao poudre", amount: 10, unit: "g", note: "Biscuit Chocolat" },
    { name: "Levure chimique", amount: 3, unit: "g", note: "Biscuit Chocolat" },
    { name: "Crème liquide", amount: 50, unit: "g", note: "Biscuit Chocolat" },
    { name: "Beurre fondu", amount: 40, unit: "g", note: "Biscuit Chocolat" },
    { name: "Chocolat noir 65% fondu", amount: 30, unit: "g", note: "Biscuit Chocolat" },
    { name: "Lait entier", amount: 250, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Jaunes d'oeufs", amount: 60, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Sucre semoule", amount: 40, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Mélange 4 épices", amount: 5, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Crème fouettée", amount: 250, unit: "g", note: "Bavaroise Pain d'épices" },
    { name: "Brisures de pain d'épices", amount: 80, unit: "g", note: "Bavaroise Pain d'épices" }
  ],

  steps: [
    { 
      title: "L'Insert Poire (J-1)", 
      text: "Chauffer la purée de poire à 40°C. Ajouter le mélange sucre + pectine en pluie. Porter à ébullition 1 minute. Ajouter les dés de poires et les épices. Couler dans un cadre ou un moule insert inférieur à la taille finale. Bloquer au congélateur." 
    },
    { 
      title: "Le Biscuit Moelleux", 
      text: "Mélanger les oeufs avec les sucres. Ajouter la poudre d'amande. Tamiser farine, cacao et levure, ajouter. Incorporer la crème, puis le beurre fondu et le chocolat fondu (45°C). Cuire sur plaque à 170°C environ 12-15 min. Détailler à la taille de l'entremets." 
    },
    { 
      title: "La Bavaroise Épicée", 
      text: "Réaliser une crème anglaise avec le lait, les jaunes, le sucre et les épices (cuire à 83°C). Ajouter la gélatine hydratée. Refroidir à 25°C. Incorporer la crème fouettée mousseuse délicatement, puis les brisures de pain d'épices à la fin." 
    },
    { 
      title: "Montage à l'envers", 
      text: "Chemiser le cercle ou le moule. Couler une partie de la bavaroise au fond. Déposer l'insert poire congelé. Appuyer légèrement. Recouvrir avec le reste de bavaroise. Déposer le biscuit chocolat en dernier (il sera le socle). Lisser et bloquer au congélateur une nuit. Finition : Pulvériser un velours chocolat lait ou un glaçage miroir caramel. Décorer avec des bâtons de cannelle et de l'or." 
    }
  ],

  advices: [
    "Torréfiez légèrement les épices à sec avant de les infuser dans le lait pour décupler leurs arômes."
  ],
  chefQuote: "L'ajout de brisures de pain d'épices dans la mousse apporte une texture surprenante et renforce le goût.",
  equipment: [
    "Cercle entremets",
    "Mixeur plongeant",
    "Thermomètre"
  ]
};

export default eclatAuxEpices;