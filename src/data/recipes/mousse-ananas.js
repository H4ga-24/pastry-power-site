const mousseAnanas = {
  id: "mousse-ananas",
  title: "Mousse Ananas",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse exotique et fraîche. Attention à l'ananas frais qui contient une enzyme empêchant la gélatine de prendre ; il faut le cuire !",
  image: "https://www.markal.fr/application/files/medias_markal/recettes/1484-recette-mousse-ananas.jpg",
  baseServings: 1, // pour 1 entremets
  
  ingredients: [
    { name: "Purée d'ananas (cuite)", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 7, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Rhum (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans l'eau froide." 
    },
    { 
      title: "CUISSON", 
      text: "Si vous utilisez de l'ananas frais mixé, portez-le à ébullition 2 minutes pour neutraliser la broméline." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter le sucre et la gélatine essorée dans la purée chaude. Ajouter le rhum." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser refroidir jusqu'à ce que le mélange commence à épaissir légèrement." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly et l'incorporer délicatement à la purée gélifiée." 
    },
    { 
      title: "FINITION", 
      text: "Couler en cercles ou verrines." 
    }
  ],

  advices: ["La broméline de l'ananas cru détruit la gélatine. Utilisez de la purée pasteurisée ou cuisez vos fruits."],
  chefQuote: "Quelques dés d'ananas rôtis au fond de la verrine apportent de la mâche.",
  equipment: ["Casserole", "Batteur", "Chinois (si ananas frais mixé)"]
};

export default mousseAnanas;