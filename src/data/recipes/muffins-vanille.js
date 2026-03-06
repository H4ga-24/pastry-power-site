const muffinsVanille = {
  id: "muffins-vanille",
  title: "Muffins Vanille",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "20 MIN",
  difficulty: "FACILE",
  description: "La base parfaite : des muffins simples, aérés et délicatement parfumés.",
  image: "https://assets.afcdn.com/recipe/20160426/2659_w1024h1024c1cx1527cy2295.jpg",
  baseServings: 12,
  
  ingredients: [
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Levure chimique", amount: 11, unit: "g" },
    { name: "Oeufs", amount: 2, unit: "pc" },
    { name: "Lait", amount: 200, unit: "ml" },
    { name: "Huile végétale", amount: 80, unit: "ml" },
    { name: "Extrait de vanille", amount: 1, unit: "càs" }
  ],

  steps: [
    { 
      title: "Secs", 
      text: "Mélanger la farine, le sucre et la levure dans un bol." 
    },
    { 
      title: "Liquides", 
      text: "Mélanger les œufs, le lait, l'huile et la vanille dans un autre bol." 
    },
    { 
      title: "Assemblage", 
      text: "Verser le mélange liquide sur le sec. Mélanger rapidement sans trop insister (la pâte doit rester grumeleuse)." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans des moules à muffins munis de caissettes. Cuire à 200°C pendant 20 minutes." 
    }
  ],

  advices: ["Ajoutez des myrtilles ou des framboises surgelées directement dans la pâte sans décongélation."],
  chefQuote: "Une pâte grumeleuse = un muffin aéré.",
  equipment: ["Moule à muffins", "Fouet"]
};

export default muffinsVanille;