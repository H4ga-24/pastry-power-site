const mousseMyrtille = {
  id: "mousse-myrtille",
  title: "Mousse Myrtille",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse à la couleur violet profond, douce et peu acide.",
  image: "https://odelices.ouest-france.fr/images/recettes/mousse_de_myrtilles_a_l_agar_agar.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de myrtille", amount: 300, unit: "g" },
    { name: "Sucre", amount: 45, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron", amount: 15, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine. Mélanger avec le reste de purée et le citron." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer la crème à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Dresser." 
    }
  ],

  advices: ["La myrtille sauvage a beaucoup plus de goût et de couleur que la myrtille de culture."],
  chefQuote: "Associez cette mousse à un biscuit sablé breton pour le contraste de texture.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseMyrtille;