const glacageFruitsRouges = {
  id: "glacage-fruits-rouges",
  title: "Glaçage Fruits Rouges",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: false, // Non spécifié dans le fichier, false par défaut
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un glaçage rouge intense et brillant, parfait pour un entremets à la framboise ou à la fraise, réalisé avec une touche de purée de fruits.",
  image: "https://tout-gourmand.fr/media/cache/voir_recette/media/images/recettes/42077-tout-gourmand-entremet-chocolat-blanc-et-fruits-rouges.webp",
  baseServings: 700, // g
  
  ingredients: [
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Sirop de glucose", amount: 150, unit: "g" },
    { name: "Eau", amount: 50, unit: "g" },
    { name: "Purée de fruits rouges", amount: 50, unit: "g" },
    { name: "Lait concentré sucré", amount: 100, unit: "g" },
    { name: "Chocolat blanc", amount: 150, unit: "g" },
    { name: "Gélatine (200 bloom)", amount: 10, unit: "g" },
    { name: "Eau d'hydratation", amount: 60, unit: "g" },
    { name: "Colorant rouge liposoluble", amount: 2, unit: "g" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Mélanger la gélatine poudre et l'eau d'hydratation. Laisser figer." 
    },
    { 
      title: "SIROP", 
      text: "Cuire l'eau, le sucre, le glucose et la purée de fruits rouges à 103°C." 
    },
    { 
      title: "MÉLANGE", 
      text: "Verser sur le chocolat blanc, le lait concentré, la gélatine et le colorant." 
    },
    { 
      title: "EMULSION", 
      text: "Mixer soigneusement sans faire de bulles. Passer au chinois si nécessaire pour enlever les grains de fruits éventuels." 
    },
    { 
      title: "REPOS", 
      text: "Repos 24h au frais. Utilisation à 30-35°C." 
    }
  ],

  advices: ["Le colorant est nécessaire car la purée seule donne une couleur terne une fois mélangée au chocolat blanc."],
  chefQuote: "Pour un rouge profond, utilisez un colorant 'Rouge Fraise' ou 'Rouge Framboise' de qualité professionnelle.",
  equipment: ["Mixeur plongeant", "Casserole", "Thermomètre"]
};

export default glacageFruitsRouges;