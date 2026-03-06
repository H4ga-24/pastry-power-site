const painDeMie = {
  id: "pain-de-mie",
  title: "Pain de Mie",
  category: "Pâtisserie",
  subCategory: ["Pâtes"], // CORRIGÉ
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "35 MIN",
  difficulty: "MOYEN",
  description: "Un pain à la mie blanche, serrée et moelleuse, enrichi en lait, sucre et matière grasse. Parfait pour les toasts, croque-monsieur et canapés.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/pain-de-mie.jpg",
  baseServings: 1, // "1 pain"
  
  ingredients: [
    { name: "Farine T45 (ou gruau)", amount: 500, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 20, unit: "g" },
    { name: "Poudre de lait", amount: 15, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 20, unit: "g" },
    { name: "Eau", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 120, unit: "g" },
    { name: "Beurre", amount: 60, unit: "g" }
  ],

  steps: [
    { 
      title: "PÉTRISSAGE", 
      text: "Dans la cuve, mettre la farine, le sel, le sucre, la poudre de lait. Ajouter la levure émiettée (sans contact avec le sel), l'eau et le lait. Pétrir 5 min en vitesse lente." 
    },
    { 
      title: "AJOUT BEURRE", 
      text: "Quand la pâte est homogène, ajouter le beurre ramolli. Pétrir en vitesse moyenne jusqu'à décollement (environ 10 min). La pâte doit être lisse et élastique." 
    },
    { 
      title: "POINTAGE", 
      text: "Laisser pointer (lever) à température ambiante couvert d'un linge pendant 30 min à 1h." 
    },
    { 
      title: "FAÇONNAGE", 
      text: "Dégazer la pâte. Diviser si besoin (selon la taille du moule). Façonner en boudin ou en boules côte à côte. Placer dans un moule à pain de mie beurré." 
    },
    { 
      title: "APPRÊT", 
      text: "Laisser pousser dans un endroit tiède (25-28°C) jusqu'à ce que la pâte arrive au bord du moule. Fermer le couvercle coulissant si vous en avez un pour une forme carrée." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire au four ventilé à 200°C pendant 35 à 40 min. Démouler aussitôt sur grille." 
    }
  ],

  advices: ["Pour une croûte très fine (pain de mie anglais), utilisez un moule fermé avec couvercle."],
  chefQuote: "Le lait en poudre apporte du moelleux et une belle coloration de croûte.",
  equipment: ["Moule à pain de mie", "Robot pétrisseur"]
};

export default painDeMie;