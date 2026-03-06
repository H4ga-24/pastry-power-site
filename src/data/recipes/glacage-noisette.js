const glacageNoisette = {
  id: "glacage-noisette",
  title: "Glaçage Noisette (Rocher)",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "Un glaçage gourmand avec morceaux (type Rocher), à base de chocolat au lait et d'éclats de noisettes torréfiées. Parfait pour les cakes de voyage.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/glacage-pate-glacer/glacage-pate-glacer-640.jpg",
  baseServings: 400, // g
  
  ingredients: [
    { name: "Chocolat au lait (40%)", amount: 250, unit: "g" },
    { name: "Huile de pépins de raisin", amount: 50, unit: "g" },
    { name: "Praliné noisette", amount: 50, unit: "g" },
    { name: "Noisettes hachées torréfiées", amount: 80, unit: "g" }
  ],

  steps: [
    { 
      title: "FONTE", 
      text: "Faire fondre le chocolat au lait au bain-marie ou au micro-ondes (45°C max)." 
    },
    { 
      title: "MÉLANGE", 
      text: "Ajouter le praliné noisette au chocolat fondu et mélanger pour homogénéiser." 
    },
    { 
      title: "HUILE", 
      text: "Incorporer l'huile de pépins de raisin. Elle permet de fluidifier le glaçage et de le rendre plus souple à la coupe." 
    },
    { 
      title: "GRAINS", 
      text: "Ajouter les noisettes hachées préalablement torréfiées (froides)." 
    },
    { 
      title: "UTILISATION", 
      text: "Utiliser ce glaçage autour de 35°C pour napper des cakes ou des entremets congelés." 
    }
  ],

  advices: ["Assurez-vous que le cake soit bien froid (voire congelé) pour que le glaçage fige rapidement."],
  chefQuote: "L'huile de pépins de raisin est neutre, mais vous pouvez utiliser de l'huile de noisette pour renforcer le goût.",
  equipment: ["Bol", "Spatule", "Grille à pâtisserie"]
};

export default glacageNoisette;