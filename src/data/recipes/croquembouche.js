const croquembouche = {
  id: "croquembouche",
  title: "Croquembouche (Pièce Montée)",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Ou "Desserts de Fête"
  isVip: true,
  prepTime: "3 HEURES",
  cookTime: "1 HEURE",
  difficulty: "EXPERT",
  description: "La pièce montée traditionnelle des grands événements. Une pyramide majestueuse de choux garnis, cimentée au caramel croquant.",
  image: "https://laviechantilly.fr/wp-content/uploads/2025/09/2025-09-09-11-51-25_.jpg",
  baseServings: 20, // 60 à 80 choux
  
  ingredients: [
    { name: "Pâte à choux", amount: 800, unit: "g" },
    { name: "Crème pâtissière Vanille", amount: 1200, unit: "g" },
    { name: "Sucre (Caramel)", amount: 500, unit: "g" },
    { name: "Glucose", amount: 150, unit: "g" },
    { name: "Eau", amount: 150, unit: "g" },
    { name: "Nougatine", amount: 300, unit: "g", note: "Pour le socle (facultatif)" }
  ],

  steps: [
    { 
      title: "Préparation des choux", 
      text: "Dresser et cuire environ 60 à 80 petits choux. Ils doivent être bien secs. Les garnir de crème pâtissière par le dessous." 
    },
    { 
      title: "Cuisson du sucre", 
      text: "Cuire le sucre, l'eau et le glucose jusqu'à obtenir un caramel blond clair. Stopper la cuisson en trempant le fond de la casserole dans l'eau froide." 
    },
    { 
      title: "Le glaçage", 
      text: "Tremper le sommet de chaque chou dans le caramel et les poser (côté caramel) sur une feuille silicone ou un plan huilé pour avoir un dessus plat et brillant." 
    },
    { 
      title: "Le montage", 
      text: "Tremper le côté des choux dans le caramel chaud pour les coller entre eux. Monter en pyramide (autour d'un cône ou à main levée)." 
    },
    { 
      title: "Le décor", 
      text: "Décorer avec des cheveux d'ange (sucre filé) ou des fleurs en sucre." 
    }
  ],

  advices: [
    "Ne travaillez pas dans une pièce humide, le caramel fondrait et la pièce risquerait de s'effondrer."
  ],
  chefQuote: "La régularité des choux est le secret d'une belle pièce montée. Utilisez un gabarit pour les dresser.",
  equipment: [
    "Cône inox (facultatif)",
    "Casserole sucre",
    "Poche à douille"
  ]
};

export default croquembouche;