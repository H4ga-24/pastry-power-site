const cremePatissiere = {
  id: "creme-patissiere",
  title: "Crème Pâtissière Vanille",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "La mère de toutes les crèmes. Indispensable pour garnir choux, éclairs, religieuses et fonds de tarte.",
  image: "https://images.radio-canada.ca/v1/alimentation/recette/16x9/creme-patissiere-vanille.jpg",
  baseServings: 1, // Environ 700g
  
  ingredients: [
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g" },
    { name: "Poudre à crème (ou Maïzena)", amount: 45, unit: "g" },
    { name: "Beurre doux", amount: 50, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "L'infusion", 
      text: "Faire chauffer le lait avec la gousse de vanille grattée. Laisser infuser 10 minutes hors du feu." 
    },
    { 
      title: "Le blanchiment", 
      text: "Fouetter les jaunes avec le sucre jusqu'à blanchiment. Ajouter la poudre à crème et fouetter de nouveau pour obtenir un mélange lisse." 
    },
    { 
      title: "Le mélange", 
      text: "Verser la moitié du lait chaud (filtré) sur le mélange œufs/poudre tout en fouettant. Reverser le tout dans la casserole." 
    },
    { 
      title: "La cuisson", 
      text: "Porter à ébullition sans cesser de fouetter énergiquement. Cuire 2 minutes à partir de l'ébullition pour pasteuriser." 
    },
    { 
      title: "La finition", 
      text: "Hors du feu, ajouter le beurre froid et mélanger. Débarrasser sur une plaque, filmer au contact et refroidir rapidement." 
    }
  ],

  advices: [
    "Le refroidissement rapide est essentiel pour éviter le développement bactérien. Étalez la crème finement sur une plaque filmée."
  ],
  chefQuote: "Pour une crème ultra lisse, donnez un coup de mixeur plongeant après avoir ajouté le beurre.",
  equipment: [
    "Casserole",
    "Fouet",
    "Film alimentaire"
  ]
};

export default cremePatissiere;