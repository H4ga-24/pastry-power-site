const mousseMelon = {
  id: "mousse-melon",
  title: "Mousse Melon",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse estivale originale, très fraîche et parfumée, type melon charentais.",
  image: "https://sf1.viepratique.fr/wp-content/uploads/sites/2/2013/10/187997.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de melon", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Porto (facultatif)", amount: 10, unit: "ml" }
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
      text: "Incorporer la gélatine essorée. Mélanger avec le reste de purée et le Porto." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la chantilly à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["Le porto rehausse merveilleusement le goût du melon sans dominer."],
  chefQuote: "Servez avec quelques billes de melon frais et une feuille de menthe.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseMelon;