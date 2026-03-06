const biscuitDeSavoie = {
  id: "biscuit-de-savoie",
  title: "Biscuit de Savoie",
  category: "Pâtisserie",
  subCategory: ["Biscuits", "Gâteaux de Voyage", "Desserts Régionaux"], // 🔥 La nouveauté est ici !
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "30-40 MIN",
  difficulty: "FACILE",
  description: "Gâteau régional ultra-léger et aérien, sans aucune matière grasse ajoutée. Sa croûte est légèrement croustillante et son cœur d'un moelleux incomparable.",
  image: "https://www.undejeunerdesoleil.com/wp-content/uploads/2019/02/Biscuit_de_Savoie_recette.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule (pour les jaunes)", amount: 100, unit: "g" },
    { name: "Blancs d'œufs", amount: 120, unit: "g" },
    { name: "Sucre semoule (pour les blancs)", amount: 40, unit: "g" },
    { name: "Farine T55", amount: 40, unit: "g" },
    { name: "Fécule de pomme de terre", amount: 40, unit: "g" },
    { name: "Zeste de citron jaune", amount: 1, unit: "pièce", note: "Non traité" }
  ],

  steps: [
    { 
      title: "Préparation du moule", 
      text: "Beurrer généreusement un moule à manqué ou un moule à savarin. Verser du sucre en poudre à l'intérieur et faire tourner pour bien chemiser les parois. Tapoter pour retirer l'excédent." 
    },
    { 
      title: "L'Appareil aux jaunes", 
      text: "Dans un cul-de-poule, blanchir longuement les jaunes d'œufs avec les 100g de sucre jusqu'à ce que le mélange triple de volume et forme un ruban. Ajouter les zestes de citron finement râpés." 
    },
    { 
      title: "La Meringue", 
      text: "Monter les blancs en neige en ajoutant progressivement les 40g de sucre pour bien les serrer." 
    },
    { 
      title: "Le Mélange final", 
      text: "Incorporer une petite partie des blancs au mélange de jaunes pour le détendre. Ajouter ensuite la farine et la fécule tamisées, puis le reste des blancs, en mélangeant très délicatement à la maryse." 
    },
    { 
      title: "La Cuisson", 
      text: "Verser dans le moule chemisé de sucre et lisser la surface. Cuire à 160°C pendant 30 à 40 minutes selon la taille du moule. Démouler tiède sur une grille." 
    }
  ],

  advices: [
    "Le secret d'une belle croûte fondante et croustillante réside dans le moule : chemisez-le impérativement avec du sucre en poudre au lieu de l'habituelle farine.",
    "N'ouvrez surtout pas la porte du four pendant les 25 premières minutes de cuisson, le biscuit retomberait instantanément."
  ],
  chefQuote: "Tout réside dans l'incorporation de l'air ! Comme il n'y a pas de levure chimique, c'est la délicatesse avec laquelle vous allez incorporer vos blancs montés qui garantira l'incroyable volume de ce gâteau historique.",
  equipment: [
    "Moule à manqué ou à savarin",
    "Râpe Microplane (pour les zestes)",
    "Batteur électrique",
    "Maryse souple"
  ]
};

export default biscuitDeSavoie;