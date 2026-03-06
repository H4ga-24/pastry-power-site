const lesCookies = {
  id: "les-cookies",
  title: "Les cookies",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Des cookies à l'américaine, croustillants sur les bords et moelleux à cœur, généreux en pépites de chocolat.",
  image: "https://wallpapers.com/images/featured/2440x1440-cookies-background-3l6u9ghwo2oltjgv.jpg",
  baseServings: 15,
  
  ingredients: [
    { name: "Beurre mou", amount: 120, unit: "g" },
    { name: "Cassonade", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 50, unit: "g" },
    { name: "Œuf", amount: 1, unit: "pc" },
    { name: "Farine T55", amount: 200, unit: "g" },
    { name: "Levure chimique", amount: 5, unit: "g" },
    { name: "Pépites de chocolat", amount: 150, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Mélanger le beurre mou avec la cassonade et le sucre semoule jusqu'à obtenir une texture homogène." 
    },
    { 
      title: "OEUF", 
      text: "Ajouter l'œuf et mélanger." 
    },
    { 
      title: "SECS", 
      text: "Incorporer la farine mélangée à la levure et au sel. Mélanger brièvement." 
    },
    { 
      title: "GARNITURE", 
      text: "Ajouter les pépites de chocolat et mélanger rapidement pour les répartir." 
    },
    { 
      title: "FAÇONNAGE", 
      text: "Former des boules de pâte d'environ 40-50g et les disposer espacées sur une plaque de cuisson." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 9 à 11 minutes. Les centres doivent paraître encore un peu mous à la sortie du four." 
    }
  ],

  advices: ["Ne travaillez pas trop la pâte une fois la farine ajoutée pour garder le moelleux."],
  chefQuote: "La cassonade apporte cette texture 'chewy' caractéristique des cookies US.",
  equipment: ["Plaque de cuisson", "Fouet", "Cuillère à glace (pour doser)"]
};

export default lesCookies;