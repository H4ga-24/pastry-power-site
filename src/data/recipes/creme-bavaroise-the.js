const cremeBavaroiseThe = {
  id: "creme-bavaroise-the",
  title: "Crème Bavaroise au Thé",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une variante raffinée et aromatique de la bavaroise, infusée au thé (Matcha, Earl Grey ou Jasmin) pour une saveur subtile et délicate.",
  image: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/1389/the-matcha-flickr_5606499581_bce32056a7_b.jpg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Thé (Matcha ou Earl Grey)", amount: 10, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Chauffer le lait à frémissement. Ajouter le thé et laisser infuser 10 minutes à couvert. Filtrer si nécessaire (pour le thé en feuilles) et repeser pour avoir 250g de liquide." 
    },
    { 
      title: "L'anglaise au thé", 
      text: "Fouetter les jaunes et le sucre. Verser le lait infusé chaud dessus. Cuire le tout à la nappe (83°C) sans bouillir." 
    },
    { 
      title: "Le collage", 
      text: "Incorporer la gélatine réhydratée et essorée dans la crème anglaise chaude. Mélanger soigneusement." 
    },
    { 
      title: "Le refroidissement", 
      text: "Laisser refroidir la crème anglaise à température ambiante jusqu'à 25-30°C." 
    },
    { 
      title: "Le montage", 
      text: "Monter la crème liquide en chantilly souple. Incorporer délicatement à la base refroidie." 
    }
  ],

  advices: [
    "Pour le Matcha, fouettez-le dans un peu de lait chaud avant de l'ajouter au reste pour éviter les grumeaux."
  ],
  chefQuote: "Une bavaroise au thé Jasmin s'accorde divinement avec une compotée de pêche blanche.",
  equipment: [
    "Casserole",
    "Chinois (si thé en feuilles)",
    "Fouet"
  ]
};

export default cremeBavaroiseThe;