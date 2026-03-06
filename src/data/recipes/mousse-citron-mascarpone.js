const mousseCitronMascarpone = {
  id: "mousse-citron-mascarpone",
  title: "Mousse Citron Mascarpone",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "0 MIN",
  difficulty: "FACILE",
  description: "Une mousse onctueuse et acidulée, mariage parfait entre la douceur du mascarpone et le peps du citron.",
  image: "https://assets.afcdn.com/recipe/20201203/116055_w1024h768c1cx960cy540cxt0cyt0cxb1920cyb1080.webp",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Mascarpone", amount: 250, unit: "g" },
    { name: "Oeufs", amount: 3, unit: "pc" },
    { name: "Sucre en poudre", amount: 100, unit: "g" },
    { name: "Citrons (jus et zeste)", amount: 2, unit: "pc" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Séparer les blancs des jaunes d'oeufs. Zester et presser les citrons." 
    },
    { 
      title: "MÉLANGE", 
      text: "Fouetter les jaunes avec le sucre jusqu'à blanchiment. Ajouter le mascarpone, le jus et le zeste de citron." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter les blancs en neige ferme avec une pincée de sel." 
    },
    { 
      title: "FINITION", 
      text: "Incorporer délicatement les blancs à la crème au mascarpone à l'aide d'une maryse." 
    },
    { 
      title: "REPOS", 
      text: "Répartir dans des verrines et réfrigérer au moins 4h." 
    }
  ],

  advices: ["Sortez le mascarpone un peu à l'avance pour qu'il soit plus facile à travailler."],
  chefQuote: "Cette mousse peut aussi servir de garniture pour un tiramisu au citron.",
  equipment: ["Batteur", "Zesteur", "Verrines"]
};

export default mousseCitronMascarpone;