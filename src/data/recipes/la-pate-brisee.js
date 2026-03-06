const laPateBrisee = {
  id: "la-pate-brisee",
  title: "La pâte brisée",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "15 MIN + Repos",
  cookTime: "30 MIN",
  difficulty: "FACILE",
  description: "La plus simple et la plus neutre des pâtes à tarte. Composée simplement de farine, de beurre et d'eau, elle est friable et croustillante, parfaite pour les tartes salées ou rustiques.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/pate-brisee.jpg",
  baseServings: 1, // "1 Tarte"
  
  ingredients: [
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Beurre froid", amount: 125, unit: "g" },
    { name: "Sel fin", amount: 5, unit: "g" },
    { name: "Eau froide", amount: 60, unit: "g" },
    { name: "Jaune d'œuf (facultatif)", amount: 15, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION DU SABLE", 
      text: "Dans un saladier, mélanger la farine et le sel. Ajouter le beurre coupé en petits cubes. Écraser du bout des doigts jusqu'à obtenir une texture granuleuse (sablage)." 
    },
    { 
      title: "FONTAINE", 
      text: "Disposer le sablage en couronne sur le plan de travail ou creuser un puits dans le saladier." 
    },
    { 
      title: "MOUILLEMENT", 
      text: "Verser l'eau froide (et le jaune d'œuf si utilisé) au centre. Incorporer progressivement la farine aux liquides avec une corne ou les doigts." 
    },
    { 
      title: "FRASAGE", 
      text: "Écraser rapidement la pâte avec la paume de la main sur le plan de travail pour amalgamer le beurre sans trop pétrir. Stopper dès que la pâte est homogène." 
    },
    { 
      title: "REPOS", 
      text: "Former un galet plat, envelopper de film alimentaire et laisser reposer au frais au moins 30 minutes avant utilisation." 
    },
    { 
      title: "UTILISATION", 
      text: "Abaisser sur un plan fariné. Foncer le moule. Piquer le fond à la fourchette pour éviter qu'il ne gonfle à la cuisson." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à blanc ou garnie, généralement à 180°C-200°C selon la garniture." 
    }
  ],

  advices: ["Si la pâte est trop élastique, c'est qu'elle a été trop travaillée. Laissez-la reposer plus longtemps."],
  chefQuote: "Ajoutez une pincée de sucre pour une coloration plus dorée, même pour une tarte salée.",
  equipment: ["Rouleau à pâtisserie", "Moule à tarte"]
};

export default laPateBrisee;