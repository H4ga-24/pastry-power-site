const mousseCerise = {
  id: "mousse-cerise",
  title: "Mousse Cerise",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse délicate à la griotte ou à la cerise noire, idéale pour revisiter la Forêt Noire en version entremets.",
  image: "https://img-3.journaldesfemmes.fr/N8NeHSS2J2HiWGgdSsTmj8WAjUU=/750x500/79b11d88441243da966fe650d52d5e92/ccmcms-jdf/39694281.jpg",
  baseServings: 1, // "Pour 1 cercle (20cm)"
  
  ingredients: [
    { name: "Purée de cerise (ou griotte)", amount: 300, unit: "g" },
    { name: "Sucre", amount: 50, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Kirsch (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans l'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée de cerise avec le sucre. Ajouter la gélatine essorée hors du feu." 
    },
    { 
      title: "MÉLANGE", 
      text: "Mélanger avec le reste de la purée froide et le Kirsch." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser épaissir légèrement à température ambiante." 
    },
    { 
      title: "CHANTILLY", 
      text: "Monter la crème en chantilly pas trop ferme." 
    },
    { 
      title: "INCORPORATION", 
      text: "Incorporer délicatement la chantilly à la purée de cerise." 
    }
  ],

  advices: ["Utilisez de la purée de griotte pour plus de peps, la cerise douce peut être un peu plate en mousse."],
  chefQuote: "Ajoutez quelques cerises amarena hachées dans la mousse pour la texture.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseCerise;