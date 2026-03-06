const cremeMousseline = {
  id: "creme-mousseline",
  title: "Crème Mousseline",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "25 MIN",
  restTime: "1 HEURE",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une crème pâtissière foisonnée avec du beurre pour plus de légèreté et de tenue. Incontournable pour le Fraisier et le Paris-Brest.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/creme-mousseline-1300x632.jpg",
  baseServings: 1, // Environ 600g
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Jaunes d'œufs", amount: 50, unit: "g" },
    { name: "Maïzena", amount: 25, unit: "g" },
    { name: "Beurre doux (chaud)", amount: 25, unit: "g" },
    { name: "Beurre pommade (montage)", amount: 100, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "La pâtissière", 
      text: "Réaliser une crème pâtissière classique avec le lait, sucre, jaunes, maïzena et vanille." 
    },
    { 
      title: "Le premier beurre", 
      text: "Hors du feu, incorporer le premier beurre (25g) dans la crème chaude. Filmer au contact et laisser refroidir à température ambiante (environ 20°C)." 
    },
    { 
      title: "L'alignement", 
      text: "S'assurer que la crème pâtissière et le beurre pommade restant (100g) sont à la même température. C'est CRUCIAL pour éviter les grains." 
    },
    { 
      title: "Le foisonnement", 
      text: "Fouetter le beurre pommade pour le crémer. Ajouter progressivement la crème pâtissière lissée tout en continuant de fouetter à vitesse moyenne." 
    },
    { 
      title: "La finition", 
      text: "Continuer de fouetter 2 à 3 minutes à vitesse rapide pour aérer (foisonner) la mousseline. Elle doit blanchir et devenir légère." 
    }
  ],

  advices: [
    "Si la mousseline tranche (fait des grains), réchauffez légèrement le bol avec un chalumeau ou un sèche-cheveux tout en fouettant."
  ],
  chefQuote: "Pour un Paris-Brest, remplacez la vanille par du praliné (environ 75g) ajouté à la fin du foisonnement.",
  equipment: [
    "Robot pâtissier",
    "Fouet",
    "Maryse"
  ]
};

export default cremeMousseline;