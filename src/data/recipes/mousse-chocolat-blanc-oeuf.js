const mousseChocolatBlancOeuf = {
  id: "mousse-chocolat-blanc-oeuf",
  title: "Mousse Chocolat & Blancs",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "La mousse 'grand-mère' traditionnelle, très aérée et forte en chocolat, réalisée avec des blancs en neige.",
  image: "https://www.menezhom-atlantique.bzh/assets/uploads/sites/5/2022/11/mousse-au-chocolat-2.jpg",
  baseServings: 6, // personnes
  
  ingredients: [
    { name: "Chocolat noir 60-70%", amount: 200, unit: "g" },
    { name: "Oeufs (blancs et jaunes séparés)", amount: 6, unit: "pièces" },
    { name: "Sucre", amount: 30, unit: "g", note: "facultatif" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "CHOCOLAT", 
      text: "Faire fondre le chocolat au bain-marie." 
    },
    { 
      title: "JAUNES", 
      text: "Incorporer les jaunes d'œufs un par un dans le chocolat fondu tiède." 
    },
    { 
      title: "BLANCS", 
      text: "Monter les blancs en neige ferme avec une pincée de sel (et le sucre si désiré)." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer 1/3 des blancs vigoureusement pour détendre le chocolat, puis incorporer le reste délicatement à la maryse." 
    },
    { 
      title: "REPOS", 
      text: "Réserver au frais au moins 4 heures avant de servir." 
    }
  ],

  advices: ["Le chocolat ne doit pas être trop chaud lors de l'ajout des jaunes, sinon ils vont cuire."],
  chefQuote: "Une pointe de piment d'Espelette ou de fleur de sel peut sublimer le chocolat.",
  equipment: ["Bain-marie", "Batteur", "Maryse"]
};

export default mousseChocolatBlancOeuf;