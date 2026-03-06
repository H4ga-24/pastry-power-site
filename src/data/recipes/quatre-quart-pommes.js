const quatreQuartPommes = {
  id: "quatre-quart-pommes",
  title: "Quatre-quart aux pommes",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "40 MIN",
  difficulty: "FACILE",
  description: "Le gâteau familial par excellence, moelleux et généreux en fruits.",
  image: "https://www.elle-et-vire.com/uploads/cache/1920x1200/uploads/recip/recipe/3479/6242cdbfd58bc_pazapah-1.jpg",
  baseServings: 6, // personnes
  
  ingredients: [
    { name: "Oeufs entiers", amount: 200, unit: "g", note: "(env. 4 pcs)" },
    { name: "Sucre semoule", amount: 200, unit: "g" },
    { name: "Farine T55", amount: 200, unit: "g" },
    { name: "Beurre demi-sel", amount: 200, unit: "g" },
    { name: "Levure chimique", amount: 6, unit: "g" },
    { name: "Pommes (Golden)", amount: 3, unit: "pièces" },
    { name: "Cassonade (finition)", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Faire fondre le beurre et le laisser tiédir. Éplucher les pommes et les couper en dés ou lamelles selon votre préférence." 
    },
    { 
      title: "Appareil", 
      text: "Fouetter les œufs avec le sucre jusqu'à blanchiment. Ajouter la farine tamisée avec la levure." 
    },
    { 
      title: "Finition Pâte", 
      text: "Incorporer le beurre fondu refroidi. Mélanger jusqu'à obtenir une pâte homogène." 
    },
    { 
      title: "Montage", 
      text: "Verser la moitié de la pâte dans un moule beurré. Déposer une couche de pommes. Recouvrir du reste de pâte et finir avec le reste des pommes." 
    },
    { 
      title: "Cuisson", 
      text: "Saupoudrer de cassonade pour caraméliser le dessus. Cuire à 180°C pendant 40-45 minutes (vérifier au couteau)." 
    }
  ],

  advices: ["Comme son nom l'indique, les 4 ingrédients de base (œufs, sucre, farine, beurre) ont le même poids. Pesez vos œufs et adaptez le reste !"],
  chefQuote: "Le beurre demi-sel apporte un vrai relief qui balance le sucre de la pomme.",
  equipment: ["Moule à manqué ou à cake", "Fouet", "Économe"]
};

export default quatreQuartPommes;