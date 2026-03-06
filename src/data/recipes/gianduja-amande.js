const giandujaAmande = {
  id: "gianduja-amande",
  title: "Gianduja Amande",
  category: "Confiserie",
  subCategory: ["Confiserie Diverse"], // Catégorie adaptée
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une alternative douce au classique gianduja noisette. Le fondant de l'amande associé au chocolat au lait pour des intérieurs de bonbons ou des tartinables d'exception.",
  image: "https://empreintesucree.fr/wp-content/uploads/2017/01/1-gianduja-maison-recette-patisserie-empreinte-sucree.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Amandes brutes", amount: 200, unit: "g" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Chocolat couverture lait 40%", amount: 100, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Huile de pépin de raisin (si besoin)", amount: 1, unit: "QS" }
  ],

  steps: [
    { 
      title: "Torréfaction", 
      text: "Torréfier les amandes brutes au four à 150°C pendant 15 minutes. Laisser refroidir complètement." 
    },
    { 
      title: "Broyage (Tant pour tant)", 
      text: "Mixer les amandes froides avec le sucre glace et la fleur de sel dans un robot coupe (lame S). Procéder par à-coups pour ne pas chauffer la masse. On obtient d'abord une poudre." 
    },
    { 
      title: "Pâte d'amande", 
      text: "Continuer de mixer jusqu'à ce que l'huile des amandes ressorte et forme une pâte souple et brillante. Si le robot chauffe trop, faire des pauses." 
    },
    { 
      title: "Mélange chocolat", 
      text: "Fondre le chocolat au lait (45°C). Verser la pâte d'amande sur le chocolat fondu. Mélanger vigoureusement (émulsionner) à la maryse. Si le mélange est trop sec, ajouter un filet d'huile neutre." 
    },
    { 
      title: "Cristallisation", 
      text: "Verser dans un cadre ou un moule. Laisser cristalliser à 16-18°C pendant 24h avant de découper ou d'utiliser." 
    }
  ],

  advices: ["Utilisez des amandes brutes (avec la peau) pour un goût plus prononcé."],
  chefQuote: "Le gianduja craint l'humidité, conservez-le bien emballé.",
  equipment: ["Robot coupe (lame S)", "Four", "Spatule"]
};

export default giandujaAmande;