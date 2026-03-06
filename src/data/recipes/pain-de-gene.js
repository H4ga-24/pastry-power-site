const painDeGene = {
  id: "pain-de-gene",
  title: "Pain de gène",
  category: "Pâtisserie",
  subCategory: ["Biscuits"], // Reste en Biscuits (c'est un biscuit amande)
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "Le Pain de Gênes est un biscuit d'origine Italienne, au goût très subtil et qui sert de base à certains gâteaux et dessert à l'assiette. Prévoir deux doses pour votre carnet de recettes du cap pâtissier.",
  image: "https://www.tendances-food.fr/wp-content/uploads/pain-de-gene-tendances-food-1300x1300.jpg",
  baseServings: 1, // "Masse obtenue 277g"
  
  ingredients: [
    { name: "Pâte d'amande 50%", amount: 90, unit: "g" },
    { name: "Sucre glace", amount: 25, unit: "g" },
    { name: "Oeufs", amount: 25, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 42, unit: "g" },
    { name: "Blancs d'oeuf", amount: 50, unit: "g" },
    { name: "Sucre semoule", amount: 25, unit: "g" },
    { name: "Farine courante", amount: 25, unit: "g" },
    { name: "Beurre fondu froid", amount: 20, unit: "g" },
    { name: "Masse obtenue", amount: 277, unit: "g", note: "(Indicatif)" }
  ],

  steps: [
    { 
      title: "MONTAGE DE LA MASSE AMANDE", 
      text: "Réchauffer légèrement la pâte d'amande au micro-onde. Détendre la pâte d'amande progressivement à la feuille au batteur mélangeur en ajoutant les oeufs, les jaunes et le sucre progressivement." 
    },
    { 
      title: "EMULSION", 
      text: "Monter cette masse au fouet, débarrasser la masse et nettoyer la cuve pour monter les blancs." 
    },
    { 
      title: "RÉALISATION DE LA MERINGUE", 
      text: "Monter les blancs et serrer avec le sucre semoule." 
    },
    { 
      title: "MÉLANGE", 
      text: "Ajouter délicatement la meringue dans la masse amandes." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter le beurre fondu froid en fin de mélange." 
    },
    { 
      title: "CUISSON", 
      text: "Couler sur une feuille de papier sulfurisée (30 sur 40 cm pour une dose) ou dans un moule à génoise beurré fariné chemisé d'amandes effilées de 22cm de diamètre. (Prévoir deux doses pour cette taille de moule). Cuisson sur feuille 18mn 200°C. Cuisson en cercle 30mn à 180°C." 
    },
    { 
      title: "DÉMOULAGE", 
      text: "Décercler sur grille." 
    }
  ],

  advices: ["La pâte d'amande doit être à 50% de fruit minimum pour une bonne texture."],
  chefQuote: "Un grand classique du CAP Pâtissier, maîtrisez l'émulsion de la pâte d'amande.",
  equipment: ["Batteur (feuille et fouet)", "Moule à génoise"]
};

export default painDeGene;