const noisettesCaramelChocolat = {
  id: "noisettes-caramel-chocolat",
  title: "Noisettes Caramel & Chocolat (Clusters)",
  category: "Chocolaterie",
  subCategory: ["Confiseries diverses"],
  isVip: false,
  prepTime: "1H 30",
  cookTime: "30 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une gourmandise rustique et addictive. Des noisettes entières torréfiées à cœur, caramélisées au sucre cuit et à la vanille, assemblées en petits rochers (clusters) puis enrobées de chocolat lait.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/1df5539c0b26e3a4dcff5ceadc8d6a2a.png",
  baseServings: 1000, // pièces
  
  ingredients: [
    { name: "Noisettes entières (petits calibres)", amount: 4500, unit: "g", note: "Masse" },
    { name: "Sucre semoule", amount: 2500, unit: "g", note: "Masse" },
    { name: "Eau", amount: 750, unit: "g", note: "Masse" },
    { name: "Gousses de vanille", amount: 5, unit: "pce", note: "Masse" },
    { name: "Beurre demi-sel", amount: 300, unit: "g", note: "Masse" },
    { name: "Fleur de sel", amount: 20, unit: "g", note: "Masse" },
    { name: "Couverture Lait 40%", amount: 4000, unit: "g", note: "Enrobage" }
  ],

  steps: [
    { 
      title: "1. Torréfaction", 
      text: "Torréfier les noisettes au four (150°C) pour exalter les arômes. Les garder tièdes." 
    },
    { 
      title: "2. Caramel", 
      text: "Cuire l'eau, le sucre et la vanille au grand boulé (121°C) ou jusqu'à début de caramel. Ajouter les noisettes. Sabler le sucre (il doit blanchir autour des fruits). Continuer la cuisson en remuant constamment jusqu'à ce que le sucre refonde et caramélise (enrobage brillant)." 
    },
    { 
      title: "3. Finition Masse", 
      text: "Ajouter le beurre et la fleur de sel hors du feu pour stopper la cuisson et séparer les noisettes. Débarrasser sur marbre ou feuille silpat." 
    },
    { 
      title: "4. Enrobage", 
      text: "Mettre au point le chocolat au lait. Mélanger les noisettes caramélisées froides avec le chocolat tempéré. Dresser en petits tas (clusters) à la cuillère sur feuille guitare." 
    }
  ],

  advices: ["Utilisez des noisettes du Piémont pour un goût incomparable."],
  chefQuote: "Le sablage est l'étape clé : il faut être patient et remuer sans cesse pour que le caramel enrobe chaque noisette uniformément.",
  equipment: ["Casserole cuivre (idéal)", "Spatule exoglass", "Thermomètre"]
};

export default noisettesCaramelChocolat;