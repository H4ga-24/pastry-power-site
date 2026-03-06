const appareilCremePriseSucree = {
  id: "appareil-creme-prise-sucree",
  title: "Appareil à Crème Prise Sucrée",
  category: "Pâtisserie", 
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "35 MIN",
  difficulty: "TRÈS FACILE",
  description: "Aussi appelée 'migaine', c'est l'appareil indispensable pour les tartes aux fruits (alsacienne, normande) ou les clafoutis fondants.",
  image: "https://rockthebretzel.com/wp-content/uploads/2014/11/Tarte-alsacienne-3-1-450x375.jpg",
  baseServings: 450, // mL
  
  ingredients: [
    { name: "Oeufs entiers", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Crème liquide 35%", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 50, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ],

  steps: [
    {
      title: "Mélange des œufs",
      text: "Dans un cul-de-poule, fouetter les œufs entiers avec le sucre semoule. L'objectif est de dissoudre le sucre sans faire blanchir l'appareil pour éviter d'emprisonner trop d'air."
    },
    {
      title: "Liaison des liquides",
      text: "Ajouter la crème liquide, le lait entier et l'extrait de vanille. Mélanger doucement au fouet jusqu'à obtenir un appareil parfaitement lisse et homogène."
    },
    {
      title: "Mise en place",
      text: "Disposer vos fruits sur un fond de tarte (cuit ou cru selon la recette choisie). Verser délicatement l'appareil sur les fruits jusqu'à 2-3 mm du bord."
    },
    {
      title: "Cuisson",
      text: "Enfourner immédiatement à 180°C. Cuire jusqu'à ce que l'appareil soit coagulé (il ne doit plus être liquide au centre lorsqu'on bouge légèrement la plaque)."
    }
  ],

  advices: [
    "Pour un goût plus rustique, vous pouvez remplacer 20g de sucre par du miel ou du sucre roux. Pour les tartes aux pommes, l'ajout d'une pincée de cannelle ou d'un trait de Calvados dans l'appareil est vivement recommandé."
  ],
  chefQuote: ""
};

export default appareilCremePriseSucree;