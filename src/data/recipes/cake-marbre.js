const cakeMarbre = {
  id: "cake-marbre",
  title: "Cake marbré",
  category: "Pâtisserie",
  subCategory: ["Gâteaux de Voyage"],
  isVip: false, // J'ai mis false par défaut, tu peux changer si besoin
  prepTime: "25 MIN",
  cookTime: "45 MIN",
  difficulty: "MOYEN",
  description: "Un classique intemporel alliant vanille et cacao pour le goûter.",
  image: "https://recettes.precuttech.com/wp-content/uploads/2025/04/Cake-marbre-ultra-moelleux-img1.jpg",
  baseServings: 8,
  
  ingredients: [
    { name: "Beurre pommade", amount: 150, unit: "g" },
    { name: "Sucre glace", amount: 150, unit: "g" },
    { name: "Poudre d'amande", amount: 30, unit: "g" },
    { name: "Oeufs entiers", amount: 165, unit: "g", note: "environ 3 œufs" },
    { name: "Farine T55", amount: 180, unit: "g" },
    { name: "Levure chimique", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 80, unit: "g" },
    { name: "Cacao poudre", amount: 20, unit: "g" },
    { name: "Extrait de vanille", amount: 1, unit: "càc" }
  ],

  steps: [
    { 
      title: "Crémage", 
      text: "Mélanger le beurre pommade avec le sucre glace et la poudre d'amande jusqu'à obtenir une texture crémeuse." 
    },
    { 
      title: "Oeufs", 
      text: "Incorporer les œufs un par un en émulsionnant bien entre chaque ajout." 
    },
    { 
      title: "Poudres et Liquide", 
      text: "Ajouter la farine tamisée avec la levure, puis détendre avec la crème liquide." 
    },
    { 
      title: "Séparation", 
      text: "Diviser la pâte en deux (2/3 nature, 1/3 cacao). Ajouter la vanille dans la partie nature, et le cacao tamisé dans l'autre." 
    },
    { 
      title: "Marbrage", 
      text: "Dans un moule beurré, alterner les couches de pâte ou pocher des boudins. Passer la lame d'un couteau pour créer le marbrage." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire à 160°C pendant environ 45 à 50 minutes." 
    }
  ],

  // Données des onglets (Tabs)
  advices: [
    "Préparez un sirop léger (eau + sucre) parfumé à la vanille et imbibez le cake dès la sortie du four pour qu'il reste ultra-moelleux.",
    "Pour obtenir la belle fissure caractéristique sur le dessus, pochez un filet de beurre pommade au centre du cake sur toute la longueur avant d'enfourner.",
    "Assurez-vous que tous les ingrédients soient à température ambiante pour éviter que l'appareil ne tranche."
  ],
  chefQuote: "La clé d'un marbré réussi réside dans l'équilibre des textures. Ne travaillez pas trop la pâte une fois la farine ajoutée, sinon votre cake sera élastique et sec.",
  equipment: [
    "Moule à cake",
    "Cul de poule x2",
    "Fouet",
    "Poches à douille (opt)"
  ]
};

export default cakeMarbre;