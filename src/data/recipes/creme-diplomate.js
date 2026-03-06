const cremeDiplomate = {
  id: "creme-diplomate",
  title: "Crème Diplomate",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "30 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une crème pâtissière collée à la gélatine et allégée avec de la crème fouettée. C'est la base de nombreux entremets comme le Fraisier ou la tarte aux fruits.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/09/piplomate.png",
  baseServings: 1, // Environ 600g
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" },
    { name: "Jaunes d'œufs", amount: 50, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Maïzena", amount: 25, unit: "g" },
    { name: "Beurre doux", amount: 20, unit: "g" },
    { name: "Gélatine (feuille)", amount: 4, unit: "g" },
    { name: "Crème liquide 35%", amount: 200, unit: "g" }
  ],

  steps: [
    { 
      title: "La pâtissière", 
      text: "Réaliser une crème pâtissière : Infuser vanille/lait. Blanchir jaunes/sucre, ajouter maïzena. Cuire le mélange jusqu'à épaississement." 
    },
    { 
      title: "Le collage", 
      text: "Hors du feu, ajouter la gélatine réhydratée et essorée, ainsi que le beurre. Mélanger." 
    },
    { 
      title: "Le refroidissement", 
      text: "Débarrasser sur plaque, filmer au contact et mettre au froid. Elle doit descendre en température (20-25°C) mais ne pas être totalement figée." 
    },
    { 
      title: "Le lissage et mélange", 
      text: "Fouetter vigoureusement la pâtissière refroidie pour la lisser. Monter la crème liquide en chantilly souple. Incorporer la chantilly délicatement à la maryse." 
    }
  ],

  advices: [
    "Si votre pâtissière est trop froide et figée (bloc), fouettez-la un bon moment pour la réchauffer un peu par friction avant d'incorporer la chantilly."
  ],
  chefQuote: "Une crème diplomate se poche immédiatement. Une fois prise au froid, elle ne peut plus être travaillée sans perdre sa texture.",
  equipment: [
    "Batteur",
    "Fouet",
    "Maryse"
  ]
};

export default cremeDiplomate;