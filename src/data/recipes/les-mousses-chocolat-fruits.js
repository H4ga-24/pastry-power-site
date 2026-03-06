const lesMoussesChocolatFruits = {
  id: "les-mousses-chocolat-fruits",
  title: "Les Mousses Chocolat aux Fruits (Tableau)",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "40 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un tableau complet des dosages pour réaliser des mousses au chocolat au lait parfumées aux fruits. Une base technique indispensable pour varier les plaisirs.",
  image: "https://cache.marieclaire.fr/data/photo/w1000_ci/5f/mousses-au-chocolat-et-aux-framboises.jpg",
  baseServings: 1, // Base pour 1kg de purée
  
  // Je structure les ingrédients pour refléter la méthode générique
  ingredients: [
    { name: "Purée de fruit", amount: 1000, unit: "g", note: "Base fruit" },
    { name: "Crème liquide 35% (1)", amount: 580, unit: "g", note: "Moyenne (varie selon fruit)" },
    { name: "Glucose", amount: 480, unit: "g", note: "Moyenne" },
    { name: "Chocolat lait", amount: 2200, unit: "g", note: "Moyenne" },
    { name: "Gélatine", amount: 30, unit: "g", note: "Moyenne" },
    { name: "Crème fouettée 35% (2)", amount: 2040, unit: "g", note: "Moyenne" }
  ],

  steps: [
    { 
      title: "PRINCIPE", 
      text: "Chauffer la crème (1), le glucose et la purée de fruit. Verser sur le chocolat pour réaliser une ganache. Ajouter la gélatine hydratée. Refroidir à 35°C. Incorporer la crème fouettée (2)." 
    },
    { 
      title: "Dosage Framboise/Passion/Mangue", 
      text: "Purée 1000g / Crème(1) 580g / Glucose 480g / Choco 2200g / Gélatine 30g / Crème(2) 2040g." 
    },
    { 
      title: "Dosage Citron/Kalamansi", 
      text: "Purée 1000g / Crème(1) 610g / Glucose 500g / Choco 2280g / Gélatine 28g / Crème(2) 2140g." 
    },
    { 
      title: "Dosage Coco", 
      text: "Purée 1000g / Crème(1) 540g / Glucose 440g / Choco 2000g / Gélatine 28g / Crème(2) 1880g." 
    },
    { 
      title: "Dosage Ananas/Goyave", 
      text: "Purée 1000g / Crème(1) 480g / Glucose 360g / Choco 1785g / Gélatine 25g / Crème(2) 1680g." 
    }
  ],

  advices: ["L'acidité des fruits nécessite d'ajuster le gras (chocolat/crème) pour l'équilibre."],
  chefQuote: "Une ganache fruitée bien réalisée est la clé d'une mousse stable.",
  equipment: ["Casserole", "Mixeur plongeant", "Batteur"]
};

export default lesMoussesChocolatFruits;