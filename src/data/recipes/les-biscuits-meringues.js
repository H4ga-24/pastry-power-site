const lesBiscuitsMeringues = {
  id: "les-biscuits-meringues",
  title: "Les Biscuits Meringués (Comparatif)",
  category: "Pâtisserie",
  subCategory: ["Biscuits"], // "Bases" dans le fichier, je mappe sur "Biscuits" ou "Pâtes" selon tes catégories valides
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "VARIE",
  difficulty: "MOYEN",
  description: "Un tableau comparatif des grands classiques des biscuits à base de meringue : Succès, Progrès, Japonais, Macaron Cachemire et Dacquoises.",
  image: "https://www.qooq.com/sites/default/files/styles/main_photo/public/externals/5888.jpg",
  baseServings: 1, // Base unitaire pour le tableau
  
  // Note: Comme c'est un tableau comparatif, je mets une structure générique ici, 
  // mais idéalement il faudrait une recette par type. Je mets le "Succès" en exemple principal.
  ingredients: [
    { name: "Blancs d'œufs", amount: 90, unit: "g", note: "Succès (pour 2 disques Ø20)" },
    { name: "Sucre semoule", amount: 80, unit: "g", note: "Succès" },
    { name: "Poudre d'amandes", amount: 80, unit: "g", note: "Succès" },
    { name: "Farine", amount: 17, unit: "g", note: "Succès" },
    { name: "Vanille liquide", amount: 1, unit: "QS", note: "Succès" },
    // Variante Progrès
    { name: "Blancs d'œufs", amount: 110, unit: "g", note: "Progrès (pour 2 disques Ø20)" },
    { name: "Sucre semoule", amount: 83, unit: "g", note: "Progrès" },
    { name: "Poudre noisette", amount: 62, unit: "g", note: "Progrès" },
    { name: "Poudre amande", amount: 62, unit: "g", note: "Progrès" },
    { name: "Farine", amount: 17, unit: "g", note: "Progrès" }
  ],

  steps: [
    { 
      title: "PRINCIPE GÉNÉRAL", 
      text: "Tous ces biscuits suivent la même méthode : monter les blancs en neige ferme, serrer avec une partie du sucre. Incorporer délicatement les poudres (amande/noisette + sucre + farine) tamisées." 
    },
    { 
      title: "Succès", 
      text: "Amande + Farine. Cuisson 20-25 min à 170°C. Texture moelleuse et dense." 
    },
    { 
      title: "Progrès", 
      text: "Amande + Noisette + Farine. Cuisson 20-25 min à 170°C. Goût plus corsé grâce à la noisette." 
    },
    { 
      title: "Japonais", 
      text: "Noisette + Farine. Cuisson 20-25 min à 170°C. Souvent utilisé pour les petits fours." 
    },
    { 
      title: "Dacquoise", 
      text: "Amande + Sucre Glace (pas de farine ou très peu). Cuisson 15-18 min à 180°C. Cœur moelleux, extérieur croustillant." 
    }
  ],

  advices: ["Tamisez toujours les poudres pour éviter de faire retomber les blancs."],
  chefQuote: "Le choix du biscuit dépend de la garniture : un Succès pour une crème au beurre, une Dacquoise pour une mousse fruitée.",
  equipment: ["Batteur", "Poche à douille", "Plaque de cuisson"]
};

export default lesBiscuitsMeringues;