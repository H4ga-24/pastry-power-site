const madeleine = {
  id: "madeleine",
  title: "Madeleine",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Le petit gâteau traditionnel lorrain, moelleux et bossu, parfait pour le goûter.",
  image: "https://www.giallozafferano.fr/images/203-20386/madeleine_1200x800.jpg",
  baseServings: 24,
  
  ingredients: [
    { name: "Œufs", amount: 3, unit: "pc" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Farine T55", amount: 200, unit: "g" },
    { name: "Levure chimique", amount: 8, unit: "g" },
    { name: "Beurre fondu tiède", amount: 150, unit: "g" },
    { name: "Lait", amount: 50, unit: "ml" },
    { name: "Zeste de citron", amount: 1, unit: "pc" }
  ],

  steps: [
    { 
      title: "BLANCHIR", 
      text: "Fouetter les œufs avec le sucre jusqu'à ce que le mélange blanchisse." 
    },
    { 
      title: "LIQUIDES", 
      text: "Ajouter le lait et le zeste de citron." 
    },
    { 
      title: "SECS", 
      text: "Incorporer la farine et la levure tamisées." 
    },
    { 
      title: "BEURRE", 
      text: "Ajouter le beurre fondu et tiédi. Mélanger jusqu'à obtenir une pâte lisse." 
    },
    { 
      title: "REPOS (IMPORTANT)", 
      text: "Laisser reposer la pâte au réfrigérateur pendant au moins 2 heures (idéalement une nuit). C'est le choc thermique qui crée la bosse." 
    },
    { 
      title: "DRESSAGE", 
      text: "Beurrer et fariner les moules à madeleines (sauf si silicone). Remplir les empreintes aux 3/4." 
    },
    { 
      title: "CUISSON", 
      text: "Enfourner à four très chaud (220°C) pendant 4-5 minutes, puis baisser à 180°C pour finir la cuisson (environ 5-6 min)." 
    }
  ],

  advices: ["Ne zappez pas le repos au froid, c'est le secret de la bosse emblématique."],
  chefQuote: "Pour encore plus de gourmandise, trempez la base des madeleines cuites dans du chocolat fondu.",
  equipment: ["Moule à madeleines", "Fouet", "Poche à douille"]
};

export default madeleine;