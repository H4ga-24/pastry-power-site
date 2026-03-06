const moussePapaye = {
  id: "mousse-papaye",
  title: "Mousse Papaye",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse tropicale douce et onctueuse, à la saveur musquée caractéristique de la papaye.",
  image: "https://i0.wp.com/www.diabetemagazine.fr/wp-content/uploads/2017/05/moussepapaye-pistache.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de papaye", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron vert", amount: 15, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer une partie de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée et le citron vert." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["Le citron vert est indispensable pour relever le goût de la papaye qui peut être fade."],
  chefQuote: "La papaye s'oxyde vite, travaillez rapidement ou ajoutez de l'acide ascorbique.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default moussePapaye;