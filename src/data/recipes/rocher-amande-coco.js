const rocherAmandeCoco = {
  id: "rocher-amande-coco",
  title: "Rocher amande ou coco",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "TRÈS FACILE",
  description: "Des bouchées rustiques aux amandes effilées ou à la noix de coco, liées par des blancs d'œufs.",
  image: "https://www.labellevie.com/media/recipes/images/186.jpg",
  baseServings: 20, // pièces
  
  ingredients: [
    { name: "Amandes hachées ou coco râpée", amount: 250, unit: "g" },
    { name: "Sucre", amount: 200, unit: "g" },
    { name: "Blancs d'œufs", amount: 2, unit: "pcs" },
    { name: "Vanille", amount: 1, unit: "c.à.c" },
    { name: "Miel", amount: 1, unit: "c.à.s", note: "facultatif" }
  ],

  steps: [
    { 
      title: "MÉLANGE", 
      text: "Mélanger le sucre avec les fruits secs choisis (amandes hachées ou coco)." 
    },
    { 
      title: "LIAISON", 
      text: "Ajouter les blancs d'œufs, la vanille et le miel. Mélanger jusqu'à obtenir une pâte compacte." 
    },
    { 
      title: "FAÇONNAGE", 
      text: "Former des petits tas irréguliers sur une plaque de cuisson." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 12 à 15 minutes jusqu'à ce qu'ils soient bien dorés." 
    }
  ],

  advices: ["Ne montez pas les blancs en neige ! Ils doivent juste servir de colle."],
  chefQuote: "Une recette anti-gaspillage parfaite pour utiliser des restes de blancs d'œufs.",
  equipment: ["Cul-de-poule", "Spatule", "Plaque de cuisson"]
};

export default rocherAmandeCoco;