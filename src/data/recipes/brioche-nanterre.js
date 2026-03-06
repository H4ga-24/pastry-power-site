const briocheNanterre = {
  id: "brioche-nanterre",
  title: "Brioche Nanterre (Pur Beurre)",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"], // Ou "Pâtes" (Levées)
  isVip: true,
  prepTime: "40 MIN",
  restTime: "12 HEURES (Pointage)",
  cookTime: "30 MIN",
  difficulty: "DIFFICILE",
  description: "La brioche classique rectangulaire composée de boules accolées. Une mie filante, riche en beurre et fondante.",
  image: "https://www.meilleurduchef.com/mdc/photo/recette/brioche-nanterre/brioche-nanterre-1200.jpg",
  baseServings: 8, // 1 grosse brioche
  
  ingredients: [
    { name: "Farine T45 (Gruau/Force)", amount: 250, unit: "g" },
    { name: "Sel", amount: 5, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 10, unit: "g" },
    { name: "Œufs entiers (froids)", amount: 150, unit: "g", note: "3 œufs" },
    { name: "Beurre doux (froid)", amount: 125, unit: "g" },
    { name: "Jaune d'œuf (dorure)", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "Le pétrissage", 
      text: "Dans la cuve, mettre farine, sel, sucre, levure (ne pas toucher sel/levure) et œufs. Pétrir au crochet 10 min à vitesse lente puis moyenne. La pâte doit se décoller." 
    },
    { 
      title: "L'incorporation du beurre", 
      text: "Ajouter le beurre froid coupé en dés petit à petit tout en pétrissant. Pétrir encore 10-15 min jusqu'à ce que la pâte claque contre les parois et soit élastique." 
    },
    { 
      title: "Le pointage (froid)", 
      text: "Bouler la pâte. Laisser lever 1h à température ambiante, puis dégazer (écraser) et mettre au frigo toute la nuit (indispensable pour le goût et la manipulation)." 
    },
    { 
      title: "Le façonnage", 
      text: "Diviser en 8 boules de 60g environ. Les disposer en quinconce (2 par 2) dans un moule à cake beurré." 
    },
    { 
      title: "L'apprêt et cuisson", 
      text: "Laisser lever 1h30 à 2h à 28°C (four éteint avec bol d'eau chaude). Dorer à l'œuf. Cuire 30 min à 170°C." 
    }
  ],

  advices: [
    "Ne tentez pas cette recette sans un bon robot pétrisseur, la pâte est très collante et nécessite un pétrissage intensif."
  ],
  chefQuote: "Le secret de la mie filante ? La farine de force (riche en gluten) et le repos au froid.",
  equipment: [
    "Robot pétrisseur (crochet)",
    "Moule à cake",
    "Pinceau"
  ]
};

export default briocheNanterre;