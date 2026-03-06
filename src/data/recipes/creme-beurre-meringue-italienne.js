const cremeBeurreMeringueItalienne = {
  id: "creme-beurre-meringue-italienne",
  title: "Crème au Beurre (Meringue Italienne)",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "30 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "La reine des crèmes au beurre : légère, aérienne et parfaitement stable. Idéale pour garnir macarons, choux et entremets.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/creme-au-beurre-meringue-italienne.jpg",
  baseServings: 1, // Environ 500g
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Eau", amount: 50, unit: "g" },
    { name: "Blancs d'œufs", amount: 70, unit: "g" },
    { name: "Beurre pommade", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "Le sirop", 
      text: "Dans une casserole, cuire le sucre et l'eau jusqu'à 118°C (petit boulé)." 
    },
    { 
      title: "La meringue italienne", 
      text: "Pendant que le sirop cuit, commencer à monter les blancs. Verser le sirop à 118°C en filet sur les blancs tout en fouettant à vitesse moyenne." 
    },
    { 
      title: "Le refroidissement", 
      text: "Fouetter jusqu'à refroidissement complet de la meringue (environ 30-40°C). Elle doit former un bec d'oiseau brillant." 
    },
    { 
      title: "L'émulsion", 
      text: "Incorporer le beurre pommade petit à petit dans la meringue en fouettant continuellement jusqu'à obtenir une crème lisse, homogène et foisonnée." 
    }
  ],

  advices: [
    "Le beurre doit être à la même température que la meringue (température ambiante) pour s'incorporer sans trancher."
  ],
  chefQuote: "Si la crème tranche (aspect granuleux), passez un coup de chalumeau sur le bol du batteur tout en fouettant, elle redeviendra lisse.",
  equipment: [
    "Robot pâtissier",
    "Thermomètre sucre",
    "Casserole"
  ]
};

export default cremeBeurreMeringueItalienne;