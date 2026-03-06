const cremeBavaroiseChocolatCannelle = {
  id: "creme-bavaroise-chocolat-cannelle",
  title: "Crème Bavaroise Chocolat Cannelle",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un mélange chaleureux et épicé, où la force du chocolat noir rencontre la douceur de la cannelle infusée.",
  image: "https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~0faa870e-5bb1-4b9f-aa8f-43751673f202.jpeg/400x400/quality/80/crop-from/center/creme-au-chocolat-et-a-la-cannelle.jpeg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Bâton de cannelle", amount: 1, unit: "pièce" },
    { name: "Chocolat noir 60%", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 40, unit: "g" },
    { name: "Gélatine (feuille)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Porter le lait à ébullition avec le bâton de cannelle brisé. Laisser infuser 15 minutes à couvert." 
    },
    { 
      title: "L'anglaise", 
      text: "Retirer la cannelle. Réaliser une crème anglaise avec les jaunes et le sucre." 
    },
    { 
      title: "Le chocolat", 
      text: "Verser l'anglaise chaude sur le chocolat noir. Ajouter la gélatine. Lisser." 
    },
    { 
      title: "Le montage", 
      text: "Refroidir à 30°C. Incorporer la crème fouettée mousseuse." 
    }
  ],

  advices: [
    "L'infusion à chaud est la meilleure méthode pour extraire le parfum boisé de la cannelle."
  ],
  chefQuote: "Une bavaroise idéale pour une bûche de Noël, associée à une compotée d'orange.",
  equipment: [
    "Casserole",
    "Chinois",
    "Fouet"
  ]
};

export default cremeBavaroiseChocolatCannelle;