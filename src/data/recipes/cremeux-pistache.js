const cremeuxPistache = {
  id: "cremeux-pistache",
  title: "Crémeux Pistache",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un crémeux d'une onctuosité incomparable, révélant toute la puissance aromatique de la pistache torréfiée.",
  image: "https://mapatisserie.fr/wp-content/uploads/2025/02/recette-creme-mousseline-pistache-04.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 250, unit: "g" },
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Pâte de pistache 100%", amount: 60, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" }
  ],

  steps: [
    { 
      title: "La crème anglaise", 
      text: "Chauffer lait et crème. Fouetter jaunes et sucre. Cuire à la nappe (83°C)." 
    },
    { 
      title: "Le mélange", 
      text: "Hors du feu, ajouter la gélatine essorée et la pâte de pistache. Bien mélanger pour dissoudre la pâte." 
    },
    { 
      title: "Le lissage", 
      text: "Mixer au mixeur plongeant pour parfaire l'émulsion et obtenir une texture lisse et verte." 
    },
    { 
      title: "Le repos", 
      text: "Couler en moule ou réserver au frais (filmé au contact) pendant au moins 4h." 
    }
  ],

  advices: [
    "Utilisez une pâte de pistache 100% pure (sans sucre ajouté) pour un vrai goût de fruit sec et une couleur naturelle."
  ],
  chefQuote: "Ce crémeux se marie parfaitement avec des framboises fraîches ou un confit de griottes.",
  equipment: [
    "Mixeur plongeant",
    "Casserole"
  ]
};

export default cremeuxPistache;