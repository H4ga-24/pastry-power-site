const mousseChocolatPateABombe = {
  id: "mousse-chocolat-pate-a-bombe",
  title: "Mousse Chocolat Pâte à Bombe",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "40 MIN",
  cookTime: "5 MIN",
  difficulty: "AVANCÉ",
  description: "Une mousse riche et onctueuse réalisée avec une pâte à bombe (sirop cuit sur jaunes d'œufs), offrant une texture soyeuse parfaite pour les entremets.",
  image: "https://lapetitecolin.fr/wp-content/uploads/2023/05/IMG_20230402_102627-scaled.jpg",
  baseServings: 1, // pour 1 entremets
  
  ingredients: [
    { name: "Chocolat noir 70%", amount: 200, unit: "g" },
    { name: "Crème fleurette 35%", amount: 400, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 80, unit: "g" },
    { name: "Sirop (sucre + eau)", amount: 100, unit: "g" } // Note : "Sirop" ici réfère probablement au sucre à cuire
  ],

  steps: [
    { 
      title: "CHOCOLAT", 
      text: "Faire fondre le chocolat au bain-marie à 45°C-50°C." 
    },
    { 
      title: "PÂTE À BOMBE", 
      text: "Cuire le sucre et un peu d'eau à 118°C. Verser sur les jaunes d'œufs tout en fouettant jusqu'à refroidissement complet (ruban)." 
    },
    { 
      title: "CRÈME FOUETTÉE", 
      text: "Monter la crème fleurette en chantilly mousseuse (pas trop ferme)." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer une partie de la crème fouettée dans le chocolat fondu (45°C), puis ajouter la pâte à bombe délicatement." 
    },
    { 
      title: "FINITION", 
      text: "Terminer en incorporant le reste de la crème fouettée à la maryse." 
    }
  ],

  advices: ["Le foisonnement des jaunes est crucial pour la légèreté de la mousse."],
  chefQuote: "C'est la mousse des pros : tenue parfaite, goût intense et texture fondante.",
  equipment: ["Thermomètre à sucre", "Robot pâtissier", "Bain-marie"]
};

export default mousseChocolatPateABombe;