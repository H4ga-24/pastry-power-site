const mousseMangue = {
  id: "mousse-mangue",
  title: "Mousse Mangue",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse solaire et fruitée, très appréciée pour son onctuosité naturelle.",
  image: "https://img.cuisineaz.com/1024x768/2013/12/20/i87595-mousse-a-la-mangue.jpeg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de mangue", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron vert", amount: 10, unit: "ml" }
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
      text: "Ajouter la gélatine essorée. Mélanger avec le reste de purée froide et le citron." 
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

  advices: ["La mangue Alphonso est la meilleure variété pour la pâtisserie."],
  chefQuote: "Le citron vert est indispensable pour casser le côté parfois 'lourd' de la mangue.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseMangue;