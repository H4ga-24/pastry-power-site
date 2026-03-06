const cremeuxFruits = {
  id: "cremeux-fruits",
  title: "Les Crémeux aux Fruits (Tableau)",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Un tableau complet de proportions pour réaliser des crémeux onctueux avec une large variété de fruits. La technique reste identique, seuls les dosages s'adaptent à l'acidité du fruit.",
  image: "https://lapetitecolin.fr/wp-content/uploads/2023/05/IMG_20230311_092339-1024x768.jpg",
  baseServings: 1, 
  
  // Note: Comme c'est un tableau, je mets une recette 'type' et je liste les variations en conseil ou note
  ingredients: [
    { name: "Purée de fruit (voir tableau)", amount: 1000, unit: "g" },
    { name: "Jaunes d'œufs", amount: 160, unit: "g", note: "Moyenne" },
    { name: "Œufs entiers", amount: 220, unit: "g", note: "Moyenne" },
    { name: "Sucre semoule", amount: 200, unit: "g", note: "Moyenne" },
    { name: "Gélatine (feuille)", amount: 12, unit: "g", note: "Moyenne" },
    { name: "Beurre doux", amount: 350, unit: "g", note: "Moyenne" }
  ],

  steps: [
    { 
      title: "La base", 
      text: "Hydrater la gélatine. Chauffer la purée de fruit." 
    },
    { 
      title: "La cuisson", 
      text: "Mélanger œufs, jaunes et sucre. Cuire avec la purée à la nappe (83°C)." 
    },
    { 
      title: "Le collage", 
      text: "Ajouter la gélatine essorée hors du feu. Laisser tiédir à 40°C." 
    },
    { 
      title: "L'émulsion", 
      text: "Ajouter le beurre et mixer longuement." 
    }
  ],

  advices: [
    "Tableau des proportions pour 1kg de purée :",
    "- Citron : 220g jaunes, 300g œufs, 350g sucre, 15g gélatine, 500g beurre",
    "- Framboise : 190g jaunes, 240g œufs, 240g sucre, 12g gélatine, 400g beurre",
    "- Passion : 220g jaunes, 280g œufs, 320g sucre, 14g gélatine, 500g beurre",
    "- Abricot : 160g jaunes, 220g œufs, 180g sucre, 10g gélatine, 350g beurre"
  ],
  chefQuote: "Adaptez toujours la quantité de sucre et de gélatine selon l'acidité et la teneur en eau du fruit utilisé.",
  equipment: [
    "Casserole",
    "Mixeur plongeant",
    "Balance précise"
  ]
};

export default cremeuxFruits;