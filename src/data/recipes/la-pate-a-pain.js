const laPateAPain = {
  id: "la-pate-a-pain",
  title: "La pâte à pain",
  category: "patisserie", // "Boulangerie" n'est pas dans ta liste stricte mais c'est cohérent pâtisserie
  subCategory: ["Pâtes"], // "Bases" n'est pas dans ta liste stricte pâtisserie mais c'est cohérent boulangerie
  isVip: false,
  prepTime: "20 MIN + Repos",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "La recette de base pour réaliser du pain blanc maison, type baguette de tradition, avec une croûte croustillante et une mie alvéolée.",
  image: "https://www.francine.com/wp-content/uploads/2018/09/009_pate-a-pain.jpg",
  baseServings: 3, // "3 baguettes ou 1 gros pain"
  
  ingredients: [
    { name: "Farine T65", amount: 500, unit: "g" },
    { name: "Eau tempérée", amount: 350, unit: "g" },
    { name: "Sel fin", amount: 9, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 10, unit: "g" }
  ],

  steps: [
    { 
      title: "FRASAGE", 
      text: "Mélanger l'eau et la farine grossièrement. Laisser reposer 30 min (autolyse) pour développer l'extensibilité." 
    },
    { 
      title: "PÉTRISSAGE", 
      text: "Ajouter le sel et la levure émiettée. Pétrir 10 min au robot ou à la main jusqu'à obtenir une pâte lisse qui ne colle plus trop aux doigts." 
    },
    { 
      title: "POINTAGE", 
      text: "Laisser lever la pâte dans un saladier couvert d'un linge humide pendant 1h30 à 2h. Faire un rabat (replier la pâte sur elle-même) à mi-parcours." 
    },
    { 
      title: "DIVISION ET FAÇONNAGE", 
      text: "Verser délicatement la pâte sur le plan fariné. Diviser en pâtons sans trop dégazer. Façonner en baguettes ou en boule." 
    },
    { 
      title: "APPRÊT", 
      text: "Laisser lever à nouveau 45 min à 1h sur une couche (tissu fariné)." 
    },
    { 
      title: "SCARIFICATION ET CUISSON", 
      text: "Inciser le pain (grignes). Enfourner à 240°C avec un bol d'eau dans le four pour créer de la vapeur (coup de buée). Cuire 20-25 min." 
    }
  ],

  advices: ["La vapeur est essentielle pour une belle croûte dorée et croustillante."],
  chefQuote: "L'autolyse (repos farine+eau) facilite le pétrissage et améliore le goût.",
  equipment: ["Robot pétrisseur (facultatif)", "Couche (tissu lin)", "Lame de rasoir"]
};

export default laPateAPain;