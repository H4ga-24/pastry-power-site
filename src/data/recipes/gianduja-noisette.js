const giandujaNoisette = {
  id: "gianduja-noisette",
  title: "Gianduja Noisette",
  category: "Confiserie",
  subCategory: ["Autres Confiseries"], // CatÃ©gorie ajoutÃ©e selon tes rÃ¨gles
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Le grand classique de la confiserie italienne. Une pÃ¢te onctueuse de noisettes et de chocolat, fondante Ã  souhait.",
  image: "https://encoreungateau.com/wp-content/uploads/2015/10/gianduja-recette-500x375.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Noisettes du PiÃ©mont (IGP)", amount: 200, unit: "g" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Chocolat couverture lait 40%", amount: 100, unit: "g" },
    { name: "Sel fin", amount: 1, unit: "pincÃ©e" }
  ],

  steps: [
    { 
      title: "TorrÃ©faction", 
      text: "TorrÃ©fier les noisettes au four Ã  150Â°C pendant 15 minutes. Les laisser refroidir. (La peau peut Ãªtre laissÃ©e pour plus de goÃ»t ou enlevÃ©e pour plus de finesse)." 
    },
    { 
      title: "Broyage", 
      text: "Mixer les noisettes froides avec le sucre glace et le sel dans un robot coupe puissant. On obtient d'abord une poudre." 
    },
    { 
      title: "PÃ¢te", 
      text: "Continuer de mixer jusqu'Ã  ce que l'huile des fruits ressorte et forme une pÃ¢te liquide et lisse (pralinÃ©). Attention Ã  ne pas surchauffer le robot." 
    },
    { 
      title: "MÃ©lange", 
      text: "Fondre le chocolat au lait Ã  45Â°C. Verser la pÃ¢te de noisette dessus. MÃ©langer intimement." 
    },
    { 
      title: "Cristallisation", 
      text: "Couler dans un cadre ou un moule. Laisser cristalliser Ã  16Â°C pendant 24h avant de dÃ©tailler." 
    }
  ],

  advices: ["Utilisez des noisettes de qualitÃ© (PiÃ©mont), c'est 80% du goÃ»t."],
  chefQuote: "Le gianduja craint la chaleur, travaillez dans une piÃ¨ce fraÃ®che.",
  equipment: ["Robot coupe (lame S)", "Four", "Cadre inox"]
};

export default giandujaNoisette;
