const speculoos = {
  id: "speculoos",
  title: "Spéculoos",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Le célèbre biscuit belge aux épices, cassonade et cannelle, délicieux avec le café.",
  image: "https://adc-dev-images-recipes.s3.eu-west-1.amazonaws.com/rep_fotolia_4983_speculoos_biscuit.jpg",
  baseServings: 20, // pièces
  
  ingredients: [
    { name: "Farine", amount: 350, unit: "g" },
    { name: "Cassonade brune", amount: 250, unit: "g" },
    { name: "Beurre", amount: 250, unit: "g" },
    { name: "Oeuf", amount: 1, unit: "pièce" },
    { name: "Cannelle", amount: 1, unit: "c.à.s" },
    { name: "Mélange 4 épices", amount: 0.5, unit: "c.à.c" },
    { name: "Levure chimique", amount: 5, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Mélanger le beurre pommade avec la cassonade et les épices." 
    },
    { 
      title: "OEUF", 
      text: "Ajouter l'œuf et bien incorporer." 
    },
    { 
      title: "POUDRES", 
      text: "Ajouter la farine, la levure et le sel. Mélanger sans trop travailler la pâte." 
    },
    { 
      title: "REPOS", 
      text: "Former une boule, filmer et laisser reposer au frais 1h minimum." 
    },
    { 
      title: "DÉTAILLAGE", 
      text: "Étaler la pâte sur 3-4mm d'épaisseur et découper des formes à l'emporte-pièce." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 170°C pendant 12 à 15 minutes." 
    }
  ],

  advices: ["Ne négligez pas le temps de repos : il permet aux épices de diffuser leurs arômes et à la pâte de durcir pour un découpage net."],
  chefQuote: "La cassonade brune est indispensable : c'est elle qui donne cette saveur caramélisée typique et cette texture croquante.",
  equipment: ["Rouleau à pâtisserie", "Emporte-pièces", "Plaque de cuisson"]
};

export default speculoos;