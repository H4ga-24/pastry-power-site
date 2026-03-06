const chouquette = {
  id: "chouquette",
  title: "Chouquettes",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Ou "Viennoiserie" selon ta logique, mais "Pâte à Choux" est plus technique
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "25 MIN",
  difficulty: "FACILE",
  description: "Le petit plaisir du goûter. Un chou léger, doré et généreusement recouvert de grains de sucre croquants.",
  image: "https://www.latelierderoxane.com/blog/wp-content/uploads/img_7084-787x590.jpg",
  baseServings: 30, // 30 chouquettes
  
  ingredients: [
    { name: "Eau", amount: 125, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Beurre doux", amount: 100, unit: "g" },
    { name: "Sel fin", amount: 4, unit: "g" },
    { name: "Sucre semoule", amount: 15, unit: "g" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Œufs entiers", amount: 250, unit: "g" },
    { name: "Sucre perlé (grains)", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "La panade", 
      text: "Porter à ébullition l'eau, le lait, le beurre, le sel et le sucre. Hors du feu, ajouter la farine en une fois. Mélanger vivement." 
    },
    { 
      title: "Le dessèchement", 
      text: "Remettre sur le feu 1 min pour dessécher la pâte." 
    },
    { 
      title: "L'incorporation", 
      text: "Incorporer les œufs petit à petit jusqu'à obtenir une pâte lisse, brillante et qui forme un ruban (ou crête de coq)." 
    },
    { 
      title: "Le dressage", 
      text: "Dresser des petits choux de 3cm. Dorer à l'œuf. Couvrir généreusement de sucre grain. Taper la plaque pour enlever l'excédent." 
    },
    { 
      title: "La cuisson", 
      text: "Cuire à 180°C pendant 20 à 25 minutes sans ouvrir la porte. Laisser refroidir sur grille." 
    }
  ],

  advices: [
    "N'hésitez pas à mettre beaucoup de sucre grain, cela empêche aussi le chou de se déformer."
  ],
  chefQuote: "Une pâte à choux réussie doit être 'tenue' mais souple. Si elle est trop liquide, les chouquettes seront plates.",
  equipment: [
    "Poche à douille (unie 10mm)",
    "Casserole",
    "Spatule"
  ]
};

export default chouquette;