const giandujaAmande = {
  id: "gianduja-amande",
  title: "Gianduja Amande",
  category: "Confiserie",
  subCategory: ["Autres Confiseries"], // CatÃ©gorie adaptÃ©e
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Une alternative douce au classique gianduja noisette. Le fondant de l'amande associÃ© au chocolat au lait pour des intÃ©rieurs de bonbons ou des tartinables d'exception.",
  image: "https://empreintesucree.fr/wp-content/uploads/2017/01/1-gianduja-maison-recette-patisserie-empreinte-sucree.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Amandes brutes", amount: 200, unit: "g" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Chocolat couverture lait 40%", amount: 100, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Huile de pÃ©pin de raisin (si besoin)", amount: 1, unit: "QS" }
  ],

  steps: [
    { 
      title: "TorrÃ©faction", 
      text: "TorrÃ©fier les amandes brutes au four Ã  150Â°C pendant 15 minutes. Laisser refroidir complÃ¨tement." 
    },
    { 
      title: "Broyage (Tant pour tant)", 
      text: "Mixer les amandes froides avec le sucre glace et la fleur de sel dans un robot coupe (lame S). ProcÃ©der par Ã -coups pour ne pas chauffer la masse. On obtient d'abord une poudre." 
    },
    { 
      title: "PÃ¢te d'amande", 
      text: "Continuer de mixer jusqu'Ã  ce que l'huile des amandes ressorte et forme une pÃ¢te souple et brillante. Si le robot chauffe trop, faire des pauses." 
    },
    { 
      title: "MÃ©lange chocolat", 
      text: "Fondre le chocolat au lait (45Â°C). Verser la pÃ¢te d'amande sur le chocolat fondu. MÃ©langer vigoureusement (Ã©mulsionner) Ã  la maryse. Si le mÃ©lange est trop sec, ajouter un filet d'huile neutre." 
    },
    { 
      title: "Cristallisation", 
      text: "Verser dans un cadre ou un moule. Laisser cristalliser Ã  16-18Â°C pendant 24h avant de dÃ©couper ou d'utiliser." 
    }
  ],

  advices: ["Utilisez des amandes brutes (avec la peau) pour un goÃ»t plus prononcÃ©."],
  chefQuote: "Le gianduja craint l'humiditÃ©, conservez-le bien emballÃ©.",
  equipment: ["Robot coupe (lame S)", "Four", "Spatule"]
};

export default giandujaAmande;
