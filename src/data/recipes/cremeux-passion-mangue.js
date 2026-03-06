const cremeuxPassionMangue = {
  id: "cremeux-passion-mangue",
  title: "Crémeux Passion Mangue",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Le mariage parfait entre la douceur charnue de la mangue et l'acidité tranchante du fruit de la passion. Un classique indémodable.",
  image: "https://liliebakery.fr/wp-content/uploads/2023/12/Insert-cremeux-mangue-passion-Lilie-Bakery-1024x1536.jpg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Purée de passion", amount: 100, unit: "g" },
    { name: "Purée de mangue", amount: 150, unit: "g" },
    { name: "Œufs entiers", amount: 90, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 75, unit: "g" },
    { name: "Gélatine (feuille)", amount: 3, unit: "g" },
    { name: "Beurre doux", amount: 110, unit: "g" }
  ],

  steps: [
    { 
      title: "La cuisson des fruits", 
      text: "Mélanger les purées et chauffer. Fouetter œufs, jaunes et sucre. Verser les fruits chauds dessus, reverser dans la casserole et cuire à la nappe (84°C)." 
    },
    { 
      title: "Le collage", 
      text: "Ajouter la gélatine essorée hors du feu. Mélanger." 
    },
    { 
      title: "Le refroidissement", 
      text: "Laisser tiédir le mélange jusqu'à 35-40°C." 
    },
    { 
      title: "L'émulsion", 
      text: "Incorporer le beurre froid coupé en dés et mixer longuement pour obtenir une crème lisse et brillante." 
    }
  ],

  advices: [
    "C'est la base idéale pour un insert d'entremets exotique avec une mousse coco."
  ],
  chefQuote: "Le fruit de la passion apporte beaucoup d'acidité, ne réduisez pas trop le sucre sous peine d'avoir un crémeux agressif.",
  equipment: [
    "Mixeur plongeant",
    "Thermomètre",
    "Casserole"
  ]
};

export default cremeuxPassionMangue;