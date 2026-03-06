const profiteroles = {
  id: "profiteroles",
  title: "Profiteroles",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // "Gâteaux" corrigé en Pâte à Choux
  isVip: false,
  prepTime: "40 MIN",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Le dessert de bistrot par excellence : des choux frais garnis de glace vanille minute, nappés d'une sauce chocolat chaude et intense.",
  image: "https://images.squarespace-cdn.com/content/v1/5c39ee350dbda39a391afb4b/1591280610667-XE0I1IMUO4CTAUXTBZ7D/Profiteroles_Blog-3.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Pâte à choux", amount: 300, unit: "g" },
    { name: "Glace vanille", amount: 500, unit: "ml" },
    { name: "Chocolat noir 70%", amount: 200, unit: "g" },
    { name: "Crème liquide entière", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 50, unit: "g" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Amandes effilées", amount: 40, unit: "g" }
  ],

  steps: [
    { 
      title: "Cuisson des choux", 
      text: "Dressez des petits choux réguliers de 3 à 4 cm de diamètre sur une plaque. Dorez légèrement à l'œuf battu. Enfournez à 180°C pendant 20 à 25 minutes. Ils doivent être bien dorés et secs. Laissez refroidir sur grille." 
    },
    { 
      title: "Préparation de la sauce chocolat", 
      text: "Hachez le chocolat. Portez à ébullition le mélange lait et crème. Versez en 3 fois sur le chocolat en créant une émulsion à la maryse. Ajoutez le beurre en fin de mélange pour la brillance. Maintenez au bain-marie tiède." 
    },
    { 
      title: "Torréfaction des amandes", 
      text: "Faites dorer les amandes effilées dans une poêle chaude sans matière grasse, ou au four à 160°C pendant 10 minutes. Surveillez la coloration." 
    },
    { 
      title: "Découpe des choux", 
      text: "À l'aide d'un couteau scie, coupez les choux refroidis en deux horizontalement (au 2/3 de la hauteur)." 
    },
    { 
      title: "Dressage minute", 
      text: "Au moment de servir, déposez une belle boule de glace vanille sur la base de chaque chou. Reposez le chapeau. Disposez 3 choux par assiette. Versez généreusement la sauce chocolat chaude dessus et parsemez d'amandes grillées." 
    }
  ],

  advices: ["Pour gagner du temps au service, vous pouvez pré-bouler la glace et la remettre au congélateur sur une plaque."],
  chefQuote: "Le secret d'une bonne profiterole, c'est le contraste chaud-froid au moment de la dégustation.",
  equipment: ["Poche à douille", "Cuillère à glace", "Couteau scie"]
};

export default profiteroles;