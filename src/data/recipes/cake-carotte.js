const cakeCarotte = {
  id: "cake-carotte",
  title: "Cake Salé Carotte & Cumin",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Un cake lumineux et parfumé où la douceur de la carotte est relevée par le cumin.",
  image: "https://fourneauxetfourchettes.fr/wp-content/uploads/2020/12/32C3B9E8-FC30-43BC-B346-CFFA6A6A92CB-scaled.jpeg",
  baseServings: 6, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 180, unit: "g" },
    { name: "Levure chimique", amount: 11, unit: "g" },
    { name: "Huile d'olive", amount: 100, unit: "g" },
    { name: "Lait tiède", amount: 100, unit: "g" },
    { name: "Carottes râpées", amount: 200, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Cumin en poudre", amount: 4, unit: "g", note: "1 c.à.c" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Éplucher et râper finement les carottes." 
    },
    { 
      title: "L'appareil", 
      text: "Fouetter les œufs, la farine, la levure, le sel, le poivre et le cumin. Incorporer petit à petit l'huile et le lait tiède." 
    },
    { 
      title: "Mélange", 
      text: "Ajouter les carottes râpées crues et le gruyère. Mélanger à la spatule." 
    },
    { 
      title: "Cuisson", 
      text: "Moule huilé. Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Râpez les carottes assez finement pour qu'elles cuisent bien à cœur et apportent du moelleux à la pâte."
  ],
  chefQuote: "Le cumin est le meilleur ami de la carotte, dosez-le selon votre goût mais ne l'oubliez pas !",
  equipment: [
    "Râpe",
    "Moule à cake",
    "Fouet"
  ]
};

export default cakeCarotte;