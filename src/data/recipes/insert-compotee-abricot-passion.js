const insertCompoteeAbricotPassion = {
  id: "insert-compotee-abricot-passion",
  title: "Insert Compotée Abricot Passion",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un insert riche en fruits avec des morceaux d'abricots fondants, réveillés par le peps du fruit de la passion.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/entremet-paques/entremet-paques-640.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Abricots frais ou au sirop", amount: 300, unit: "g" },
    { name: "Purée de passion", amount: 50, unit: "g" },
    { name: "Sucre cassonade", amount: 30, unit: "g" },
    { name: "Pectine NH", amount: 4, unit: "g" },
    { name: "Vanille", amount: 0.5, unit: "gousse" }
  ],

  steps: [
    { 
      title: "DÉCOUPE", 
      text: "Couper les abricots en petits dés réguliers." 
    },
    { 
      title: "CUISSON", 
      text: "Dans une casserole, compoter les dés d'abricots avec la purée de passion et la vanille à feu moyen." 
    },
    { 
      title: "PECTINE", 
      text: "Mélanger le sucre et la pectine. Verser en pluie sur les fruits chauds (40°C)." 
    },
    { 
      title: "EBULLITION", 
      text: "Porter à ébullition 1 minute pour activer la pectine." 
    },
    { 
      title: "MOULAGE", 
      text: "Couler dans un cercle ou un moule insert. Congeler." 
    }
  ],

  advices: ["Si vous utilisez des abricots au sirop, réduisez la quantité de sucre."],
  chefQuote: "La pectine NH est thermoréversible, vous pourrez refondre l'insert si besoin.",
  equipment: ["Casserole", "Couteau d'office", "Moule insert"]
};

export default insertCompoteeAbricotPassion;