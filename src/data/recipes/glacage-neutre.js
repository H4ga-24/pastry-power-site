const glacageNeutre = {
  id: "glacage-neutre",
  title: "Glaçage Neutre (Nappage)",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "10 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "Un nappage transparent essentiel pour protéger les fruits de l'oxydation, faire briller les tartes ou détendre d'autres glaçages.",
  image: "https://encoreungateau.com/wp-content/uploads/2022/12/recette-nappage-neutre-maison.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Eau", amount: 250, unit: "g" },
    { name: "Sucre semoule", amount: 200, unit: "g" },
    { name: "Sirop de glucose", amount: 50, unit: "g" },
    { name: "Pectine NH", amount: 8, unit: "g" },
    { name: "Jus de citron", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "MÉLANGE SEC", 
      text: "Dans un petit bol, mélanger intimement une partie du sucre (environ 50g) avec la pectine NH. Cela évite les grumeaux." 
    },
    { 
      title: "CHAUFFE", 
      text: "Dans une casserole, chauffer l'eau, le reste du sucre et le glucose jusqu'à environ 40-50°C." 
    },
    { 
      title: "PECTINE", 
      text: "Verser le mélange sucre/pectine en pluie tout en fouettant." 
    },
    { 
      title: "EBULLITION", 
      text: "Porter à ébullition et maintenir 1 à 2 minutes pour activer la pectine. Ajouter le jus de citron en fin de cuisson." 
    },
    { 
      title: "STOCKAGE", 
      text: "Débarrasser et laisser refroidir. Se conserve au frais. S'utilise chaud (45-50°C) au pinceau ou en versant." 
    }
  ],

  advices: ["Si le nappage fige trop au frigo, réchauffez-le avec un peu d'eau pour le détendre."],
  chefQuote: "C'est la recette pro pour faire briller les tartes aux fruits comme en boutique.",
  equipment: ["Casserole", "Fouet", "Pinceau"]
};

export default glacageNeutre;