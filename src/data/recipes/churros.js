const churros = {
  id: "churros",
  title: "Churros",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Techniquement c'est une pâte à choux frite
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Le beignet espagnol croustillant à l'extérieur et moelleux à l'intérieur, roulé dans le sucre cannelle.",
  image: "https://www.latelierderoxane.com/blog/wp-content/uploads/img_7069-787x590.jpg",
  baseServings: 4, 
  
  ingredients: [
    { name: "Eau", amount: 250, unit: "g" },
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Sel fin", amount: 2, unit: "g" },
    { name: "Huile neutre (pâte)", amount: 10, unit: "g" },
    { name: "Huile de friture", amount: 1, unit: "L" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Finition" },
    { name: "Cannelle en poudre", amount: 5, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "La pâte", 
      text: "Bouillir l'eau, le sel et l'huile. Verser sur la farine et mélanger vigoureusement pour obtenir une pâte compacte." 
    },
    { 
      title: "Dressage", 
      text: "Mettre en poche avec une douille cannelée solide (étoile). C'est dur à pocher, c'est normal." 
    },
    { 
      title: "Cuisson", 
      text: "Chauffer l'huile à 180°C. Couper des bâtonnets de pâte aux ciseaux directement au-dessus du bain d'huile. Frire jusqu'à coloration dorée." 
    },
    { 
      title: "Finition", 
      text: "Égoutter sur papier absorbant et rouler immédiatement dans le mélange sucre-cannelle." 
    }
  ],

  advices: [
    "Utilisez une poche à douille très solide ou une presse à churros, la pâte est très dense."
  ],
  chefQuote: "Attention aux éclaboussures. La pâte doit être bien desséchée pour éviter qu'elle n'éclate dans l'huile.",
  equipment: [
    "Friteuse ou sauteuse",
    "Poche à douille solide",
    "Ciseaux"
  ]
};

export default churros;