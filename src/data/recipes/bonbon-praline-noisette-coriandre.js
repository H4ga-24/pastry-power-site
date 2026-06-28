const bonbonPralineNoisetteCoriandre = {
  id: "bonbon-praline-noisette-coriandre",
  title: "Bonbon Praliné Noisette & Coriandre",
  category: "Chocolaterie",
  subCategory: [],
  isVip: true,
  prepTime: "1H 30",
  cookTime: "30 MIN",
  difficulty: "AVANCà‰",
  description: "Un praliné à  l'ancienne aux noisettes entières, subtilement parfumé à  la coriandre.",
  image: "/images/recipes/bonbon-praline-noisette-coriandre.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Noisettes entières", amount: 2100, unit: "g" },
    { name: "Sucre semoule", amount: 1200, unit: "g" },
    { name: "Eau", amount: 450, unit: "g" },
    { name: "Sorbitol poudre", amount: 75, unit: "g" },
    { name: "Graines de coriandre", amount: 54, unit: "g" },
    { name: "Chocolat lait 40%", amount: 720, unit: "g" },
    { name: "Beurre de cacao Mycryo", amount: 360, unit: "g" },
    { name: "Lait en poudre 0%", amount: 105, unit: "g" },
    { name: "Couverture Noire 64%", amount: 1000, unit: "g" }
  ],

  steps: [
    { 
      title: "Cuisson Praliné", 
      text: "Cuire sucre, eau, sorbitol à  118Â°C. Ajouter noisettes et coriandre. Sabler puis caraméliser (ambré foncé)." 
    },
    { 
      title: "Broyage", 
      text: "Refroidir. Broyer pour garder du grain. Mélanger avec chocolat lait fondu, Mycryo et lait poudre." 
    },
    { 
      title: "Cadrage", 
      text: "Couler à  24-26Â°C dans un cadre. Laisser cristalliser 24-48h." 
    },
    { 
      title: "Finition", 
      text: "Chablonner, détailler et enrober noir." 
    }
  ],

  advices: [
    "La torréfaction se fait dans le sucre bouillant, c'est ce qui donne le goà»t unique."
  ],
  chefQuote: "La coriandre apporte une note florale qui coupe le gras du praliné.",
  equipment: [
    "Casserole cuivre",
    "Robot coupe",
    "Cadre"
  ]
};

export default bonbonPralineNoisetteCoriandre;
