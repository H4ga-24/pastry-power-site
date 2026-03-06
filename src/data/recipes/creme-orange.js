const cremeOrange = {
  id: "creme-orange",
  title: "Crème à l'Orange (Orange Curd)",
  category: "Pâtisserie",
  subCategory: ["Crèmes"], // Ou "Crémeux"
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Aussi appelée 'Orange Curd', cette crème onctueuse est riche en saveurs d'agrumes. Idéale pour les tartes meringuées ou en insert.",
  image: "https://www.mycake.fr/wp-content/uploads/2019/02/rs_CurdOrange_4x3.jpg",
  baseServings: 1, // Environ 500g
  
  ingredients: [
    { name: "Jus d'orange frais", amount: 200, unit: "g" },
    { name: "Zeste d'orange bio", amount: 1, unit: "pièce" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Oeufs entiers", amount: 120, unit: "g" },
    { name: "Beurre doux (froid)", amount: 100, unit: "g" },
    { name: "Gélatine (feuille)", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Réhydrater la gélatine. Zester l'orange et presser le jus." 
    },
    { 
      title: "La cuisson à la nappe", 
      text: "Dans une casserole, mélanger le jus d'orange, les zestes, le sucre et les œufs. Chauffer à feu doux en remuant constamment au fouet jusqu'à épaississement (83°C-84°C), comme une crème anglaise." 
    },
    { 
      title: "Le collage", 
      text: "Retirer du feu immédiatement. Ajouter la gélatine essorée et mélanger." 
    },
    { 
      title: "L'émulsion", 
      text: "Laisser redescendre la température à 40°C. Incorporer le beurre froid coupé en dés petit à petit tout en mixant au mixeur plongeant. C'est cette étape qui donne le soyeux." 
    },
    { 
      title: "Le stockage", 
      text: "Verser dans un pot ou pocher directement dans le fond de tarte. Réserver au frais." 
    }
  ],

  advices: [
    "Pour un résultat ultra lisse et brillant, ne sautez pas l'étape du mixeur plongeant."
  ],
  chefQuote: "Cette recette fonctionne aussi très bien avec du jus de clémentine ou de yuzu.",
  equipment: [
    "Casserole",
    "Mixeur plongeant",
    "Zesteur"
  ]
};

export default cremeOrange;