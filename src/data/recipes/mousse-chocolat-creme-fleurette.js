const mousseChocolatCremeFleurette = {
  id: "mousse-chocolat-creme-fleurette",
  title: "Mousse Chocolat Crème Fleurette",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "0 MIN",
  difficulty: "FACILE",
  description: "Une mousse sans œufs, très crémeuse, basée sur une ganache allégée à la crème fouettée. Parfaite pour ceux qui évitent les œufs crus.",
  image: "https://res.cloudinary.com/valrhona/image/upload/c_limit,f_auto,fl_progressive,q_auto,w_800/prod/var/site/storage/images/9/2/2/3/163229-1-fre-WO/Valrhona.com-Lexique-Recette-Mousse.jpg",
  baseServings: 1, // pour 1 entremets
  
  ingredients: [
    { name: "Chocolat noir", amount: 200, unit: "g" },
    { name: "Crème liquide (pour ganache)", amount: 100, unit: "ml" },
    { name: "Crème liquide 35% (pour monter)", amount: 300, unit: "ml" }
  ],

  steps: [
    { 
      title: "GANACHE", 
      text: "Faire bouillir les 100ml de crème et verser sur le chocolat haché. Émulsionner pour obtenir une ganache lisse." 
    },
    { 
      title: "TEMPÉRATURE", 
      text: "Laisser la ganache refroidir jusqu'à environ 35°C-40°C." 
    },
    { 
      title: "CRÈME FOUETTÉE", 
      text: "Monter les 300ml de crème liquide bien froide en chantilly souple." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème montée à la ganache tiédie à l'aide d'une maryse." 
    },
    { 
      title: "REPOS", 
      text: "Dresser immédiatement ou laisser prendre au froid." 
    }
  ],

  advices: ["Si la ganache est trop froide, elle va grainer au contact de la chantilly (paillettes de chocolat)."],
  chefQuote: "C'est la base idéale pour garnir un gâteau à étages (layer cake).",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseChocolatCremeFleurette;