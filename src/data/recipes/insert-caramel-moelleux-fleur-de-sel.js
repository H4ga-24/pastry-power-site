const insertCaramelMoelleuxFleurDeSel = {
  id: "insert-caramel-moelleux-fleur-de-sel",
  title: "Insert Caramel Moelleux Fleur de Sel",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une texture de caramel 'toffee' tendre et moelleux, qui ne durcit pas au froid, parfait pour les bûches.",
  image: "https://thefrenchpatissier.com/wp-content/uploads/2019/12/coupe-buche-noisette-vue-cote-1.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 30, unit: "g" },
    { name: "Crème liquide", amount: 100, unit: "g" },
    { name: "Beurre", amount: 70, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pc" }
  ],

  steps: [
    { 
      title: "CUISSON", 
      text: "Cuire le sucre, le glucose et un peu d'eau à 185°C (caramel foncé)." 
    },
    { 
      title: "DÉCUISSON", 
      text: "Ajouter la crème chauffée avec la vanille, faire attention aux éclaboussures." 
    },
    { 
      title: "RECUISSON", 
      text: "Cuire l'ensemble à 118°C pour obtenir la texture moelleuse." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter le beurre et la fleur de sel. Mixer. Couler dans un cadre ou un moule insert." 
    }
  ],

  advices: ["La température de recuisson détermine la dureté : plus c'est chaud, plus c'est dur."],
  chefQuote: "Le glucose empêche le caramel de recristalliser (masser).",
  equipment: ["Casserole", "Thermomètre", "Mixeur plongeant"]
};

export default insertCaramelMoelleuxFleurDeSel;