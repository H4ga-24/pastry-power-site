const sableDiamants = {
  id: "sable-diamants",
  title: "Sablé diamants",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN + 1H",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Des sablés au beurre riches et fondants, roulés dans le sucre cristal pour un pourtour scintillant comme des diamants.",
  image: "https://ateliersdeludo.fr/wp-content/uploads/2021/04/sables-diamant-1.jpg",
  baseServings: 30, // portions
  
  ingredients: [
    { name: "Beurre pommade", amount: 250, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Farine", amount: 330, unit: "g" },
    { name: "Jaune d'œuf", amount: 1, unit: "pc" },
    { name: "Vanille", amount: 1, unit: "c.à.c" },
    { name: "Sucre cristal (finition)", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Mélanger le beurre pommade avec le sucre glace et la vanille." 
    },
    { 
      title: "LIAISON", 
      text: "Ajouter le jaune d'œuf." 
    },
    { 
      title: "FARINE", 
      text: "Incorporer la farine rapidement sans corser la pâte." 
    },
    { 
      title: "ROULAGE", 
      text: "Former des boudins réguliers d'environ 4cm de diamètre. Filmer et réfrigérer 1h." 
    },
    { 
      title: "FINITION", 
      text: "Badigeonner les boudins d'un peu d'eau ou de blanc d'œuf, puis les rouler dans le sucre cristal." 
    },
    { 
      title: "DÉCOUPE", 
      text: "Couper des tranches de 1cm d'épaisseur." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 170°C pendant 15 minutes. Les bords doivent être dorés." 
    }
  ],

  advices: ["Roulez bien les boudins de pâte de manière régulière sur le plan de travail pour avoir des diamants parfaitement ronds."],
  chefQuote: "Le secret d'un bon sablé, c'est l'utilisation d'un beurre de très bonne qualité et de ne surtout pas trop pétrir la pâte.",
  equipment: ["Film alimentaire", "Couteau d'office", "Plaque de cuisson"]
};

export default sableDiamants;