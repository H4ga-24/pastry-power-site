const craquelinPateChoux = {
  id: "craquelin-pate-choux",
  title: "Craquelin pour Pâte à Choux",
  category: "Pâtisserie",
  subCategory: ["Pâtes"], // C'est une pâte de base additionnelle
  isVip: false,
  prepTime: "15 MIN",
  restTime: "20 MIN (Congélateur)",
  cookTime: "0 MIN", // Se cuit avec le chou
  difficulty: "FACILE",
  description: "Le secret des choux modernes bien ronds et croustillants. Une fine couche de pâte sucrée qui se pose sur le chou avant cuisson.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/12/IMG_20221212_081945-975x1300.jpg",
  baseServings: 1, // Pour environ 20-30 choux
  
  ingredients: [
    { name: "Beurre pommade", amount: 45, unit: "g" },
    { name: "Sucre cassonade", amount: 45, unit: "g" },
    { name: "Farine T55", amount: 110, unit: "g" } // Quantité farine souvent égale au total beurre+sucre ou un peu plus. Ici recette source respectée.
  ],

  steps: [
    { 
      title: "Le crémage", 
      text: "Mélanger le beurre pommade et la cassonade à la spatule ou à la feuille du batteur jusqu'à homogénéité." 
    },
    { 
      title: "L'ajout de farine", 
      text: "Ajouter la farine et mélanger sans trop travailler la pâte pour ne pas la rendre élastique. On veut une pâte sablonneuse qui s'amalgame." 
    },
    { 
      title: "L'abaisse", 
      text: "Étaler très finement (2mm d'épaisseur) entre deux feuilles de papier cuisson." 
    },
    { 
      title: "Le blocage", 
      text: "Placer au congélateur pendant 20 minutes pour que la plaque durcisse." 
    },
    { 
      title: "Le détaillage", 
      text: "Détailler des disques du diamètre de vos choux à l'emporte-pièce. Poser sur les choux crus et cuire aussitôt." 
    }
  ],

  advices: [
    "Le craquelin permet au chou de se développer uniformément sans éclater de manière anarchique."
  ],
  chefQuote: "Vous pouvez colorer votre craquelin avec du colorant poudre pour différencier vos parfums de choux.",
  equipment: [
    "Rouleau à pâtisserie",
    "Emporte-pièce rond",
    "Papier cuisson"
  ]
};

export default craquelinPateChoux;