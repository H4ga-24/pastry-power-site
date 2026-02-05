export const recipesData = {
  "creme-marrons": {
    category: "PÂTISSERIE • CRÈMES",
    title: "Crème aux marrons",
    prepTime: "20 MIN",
    cookTime: "10 MIN",
    difficulty: "MOYEN",
    description: "Une mousse onctueuse aux marrons (type Mont-Blanc), réalisée sur une base de pâte à bombe pour une texture aérienne et riche.",
    image: "https://assets.afcdn.com/recipe/20160916/10796_w1024h1024c1cx1500cy1000.webp",
    baseServings: 600,
    ingredients: [
      { name: 'Pâte de marrons', amount: 200, unit: 'g' },
      { name: 'Crème de marrons', amount: 100, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 60, unit: 'g' },
      { name: 'Sucre semoule', amount: 40, unit: 'g' },
      { name: 'Eau', amount: 30, unit: 'g' },
      { name: 'Beurre pommade', amount: 100, unit: 'g' }
    ],
    steps: [
      { title: "MÉLANGE", text: "Détendre la pâte de marrons avec la crème de marrons. Le mélange doit être lisse." },
      { title: "PÂTE À BOMBE", text: "Cuire l'eau et le sucre à 118°C. Verser sur les jaunes d'oeufs mousseux." },
      { title: "BEURRE", text: "Incorporer le beurre pommade dans la pâte à bombe refroidie." },
      { title: "FINITION", text: "Fouetter pour homogénéiser et utiliser avec une douille à nid." }
    ]
  },
  "creme-nougat": {
    category: "PÂTISSERIE • CRÈMES",
    title: "Crème au nougat",
    prepTime: "20 MIN",
    cookTime: "15 MIN",
    difficulty: "MOYEN",
    description: "Une crème riche et parfumée aux éclats d'amandes, de pistaches et de miel.",
    image: "https://www.cuisinetemeraire.fr/wp-content/uploads/2012/10/Pate-Nougat.jpg",
    baseServings: 600,
    ingredients: [
      { name: 'Lait entier', amount: 500, unit: 'g' },
      { name: 'Pâte de nougat', amount: 150, unit: 'g' },
      { name: 'Jaunes d\'oeufs', amount: 80, unit: 'g' },
      { name: 'Sucre semoule', amount: 50, unit: 'g' }
    ],
    steps: [
      { title: "FONTE", text: "Faire chauffer le lait avec la pâte de nougat pour la faire fondre." },
      { title: "MÉLANGE", text: "Fouetter les jaunes avec le sucre. Verser le lait chaud dessus." },
      { title: "CUISSON", text: "Porter à ébullition en fouettant jusqu'à épaississement." }
    ]
  }
};
