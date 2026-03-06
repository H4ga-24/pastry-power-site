const giandujaNoisette = {
  id: "gianduja-noisette",
  title: "Gianduja Noisette",
  category: "Confiserie",
  subCategory: ["Confiserie Diverse"], // Catégorie ajoutée selon tes règles
  isVip: true,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Le grand classique de la confiserie italienne. Une pâte onctueuse de noisettes et de chocolat, fondante à souhait.",
  image: "https://encoreungateau.com/wp-content/uploads/2015/10/gianduja-recette-500x375.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Noisettes du Piémont (IGP)", amount: 200, unit: "g" },
    { name: "Sucre glace", amount: 200, unit: "g" },
    { name: "Chocolat couverture lait 40%", amount: 100, unit: "g" },
    { name: "Sel fin", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "Torréfaction", 
      text: "Torréfier les noisettes au four à 150°C pendant 15 minutes. Les laisser refroidir. (La peau peut être laissée pour plus de goût ou enlevée pour plus de finesse)." 
    },
    { 
      title: "Broyage", 
      text: "Mixer les noisettes froides avec le sucre glace et le sel dans un robot coupe puissant. On obtient d'abord une poudre." 
    },
    { 
      title: "Pâte", 
      text: "Continuer de mixer jusqu'à ce que l'huile des fruits ressorte et forme une pâte liquide et lisse (praliné). Attention à ne pas surchauffer le robot." 
    },
    { 
      title: "Mélange", 
      text: "Fondre le chocolat au lait à 45°C. Verser la pâte de noisette dessus. Mélanger intimement." 
    },
    { 
      title: "Cristallisation", 
      text: "Couler dans un cadre ou un moule. Laisser cristalliser à 16°C pendant 24h avant de détailler." 
    }
  ],

  advices: ["Utilisez des noisettes de qualité (Piémont), c'est 80% du goût."],
  chefQuote: "Le gianduja craint la chaleur, travaillez dans une pièce fraîche.",
  equipment: ["Robot coupe (lame S)", "Four", "Cadre inox"]
};

export default giandujaNoisette;