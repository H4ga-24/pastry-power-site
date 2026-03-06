const cremeFrangipane = {
  id: "creme-frangipane",
  title: "Crème Frangipane",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "25 MIN", // Cuisson dans la galette
  difficulty: "FACILE",
  description: "L'incontournable garniture de la galette des rois : un mélange savoureux de crème d'amande et de crème pâtissière.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/creme-frangipane/creme-frangipane-1200.jpg",
  baseServings: 1, // Environ 600g
  
  ingredients: [
    { name: "Crème d'amande", amount: 400, unit: "g" },
    { name: "Crème pâtissière", amount: 200, unit: "g" },
    { name: "Rhum brun", amount: 10, unit: "g", note: "Facultatif" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Réaliser d'abord une crème pâtissière et la laisser refroidir. Réaliser une crème d'amande (beurre, sucre, poudre d'amande, œufs)." 
    },
    { 
      title: "Le mélange", 
      text: "Lisser la crème pâtissière froide au fouet pour qu'elle n'ait plus de grumeaux. L'incorporer délicatement à la crème d'amande (ratio classique : 2/3 amande, 1/3 pâtissière)." 
    },
    { 
      title: "L'aromatisation", 
      text: "Ajouter le rhum ou quelques gouttes d'amande amère et mélanger pour homogénéiser." 
    }
  ],

  advices: [
    "La crème pâtissière apporte du moelleux et de la légèreté à la crème d'amande qui peut être un peu lourde et grasse seule."
  ],
  chefQuote: "C'est le secret d'une galette qui ne sèche pas. Préparez-la la veille, les arômes se diffuseront mieux.",
  equipment: [
    "Cul-de-poule",
    "Fouet",
    "Spatule"
  ]
};

export default cremeFrangipane;