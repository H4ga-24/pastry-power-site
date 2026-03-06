const tarteletteOrange = {
  id: "tartelette-orange",
  title: "Tartelette à l'Orange",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "20 MIN",
  difficulty: "MOYEN",
  description: "Une alternative douce et parfumée à la tarte au citron. L'orange curd, onctueux et riche en zestes, est couronné de suprêmes d'orange frais.",
  image: "https://www.aureliencohen.fr/wp-content/uploads/2020/02/Tartelettes-orange-sanguine-poivre-de-timut-2-683x1024.jpg",
  baseServings: 6, // tartelettes
  
  ingredients: [
    { name: "Pâte sablée", amount: 300, unit: "g" },
    { name: "Jus d'orange frais", amount: 200, unit: "ml" },
    { name: "Zeste d'orange", amount: 2, unit: "pcs" },
    { name: "Oeufs", amount: 3, unit: "pcs" },
    { name: "Sucre semoule", amount: 120, unit: "g" },
    { name: "Beurre", amount: 100, unit: "g" },
    { name: "Maïzena", amount: 10, unit: "g" },
    { name: "Suprêmes d'orange", amount: 12, unit: "pcs", note: "Décor" }
  ],

  steps: [
    { 
      title: "Cuisson des fonds", 
      text: "Foncer 6 cercles à tartelette avec la pâte sablée. Cuire à blanc à 170°C pendant 15 à 20 min jusqu'à belle coloration dorée." 
    },
    { 
      title: "Orange Curd", 
      text: "Dans une casserole, mélanger le jus d'orange, les zestes, le sucre, la maïzena et les œufs. Cuire à feu doux en fouettant constamment jusqu'à épaississement (82°C)." 
    },
    { 
      title: "Émulsion", 
      text: "Hors du feu, laisser tiédir la crème (40°C). Incorporer le beurre coupé en dés et mixer longuement au mixeur plongeant pour lisser et aérer la crème." 
    },
    { 
      title: "Montage", 
      text: "Garnir les fonds de tartelettes refroidis avec le crémeux à l'orange. Lisser à la spatule et laisser figer au frais." 
    },
    { 
      title: "Finition", 
      text: "Disposer harmonieusement des suprêmes d'orange frais (quartiers sans la peau blanche) sur le dessus. Zester un peu d'orange verte ou sanguine pour la couleur." 
    }
  ],

  advices: ["L'orange est moins acide que le citron, c'est pourquoi on y ajoute un peu de maïzena pour aider à la tenue du crémeux."],
  chefQuote: "Pour un visuel percutant, utilisez des oranges sanguines quand c'est la saison !",
  equipment: ["Mixeur plongeant", "Zesteur (Microplane)"]
};

export default tarteletteOrange;