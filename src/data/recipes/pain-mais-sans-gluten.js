const painMaisSansGluten = {
  id: "pain-mais-sans-gluten",
  title: "Pain au Maïs (Sans Gluten)",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "35 MIN",
  difficulty: "FACILE",
  description: "Un pain doré à la mie serrée mais moelleuse, réalisé sans farine de blé pour les intolérants au gluten.",
  image: "https://images.unsplash.com/photo-1603279126476-93ce8278312c?q=80&w=1470&auto=format&fit=crop",
  baseServings: 2, // "Pour 2 petits pains"

  ingredients: [
    { name: "Farine de Maïs", amount: 250, unit: "g" },
    { name: "Fécule de Maïs (Maïzena)", amount: 100, unit: "g" },
    { name: "Farine de Riz complet", amount: 150, unit: "g" },
    { name: "Psyllium (liant)", amount: 15, unit: "g" },
    { name: "Eau tiède", amount: 450, unit: "g" },
    { name: "Levure boulangère sèche (GF)", amount: 7, unit: "g" },
    { name: "Sel", amount: 8, unit: "g" },
    { name: "Huile d'olive", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "MÉLANGE SEC", 
      text: "Dans un cul-de-poule, mélanger toutes les farines, la fécule, le sel et le psyllium." 
    },
    { 
      title: "HYDRATATION", 
      text: "Délayer la levure dans un peu d'eau tiède. Ajouter l'eau et l'huile aux poudres. Mélanger vigoureusement." 
    },
    { 
      title: "POUSSE", 
      text: "Verser la pâte dans des moules à cake graissés. Laisser lever 45 min à 1h dans un endroit tiède et humide." 
    },
    { 
      title: "CUISSON", 
      text: "Enfourner à 220°C pendant 35 à 40 minutes. Démouler et laisser refroidir sur grille." 
    }
  ],

  advices: ["Le psyllium est essentiel : il crée le gel qui remplace le rôle élastique du gluten."],
  chefQuote: "La farine de maïs apporte une magnifique couleur dorée et une saveur douce.",
  equipment: ["Cul de poule", "Moule à cake", "Fouet"]
};

export default painMaisSansGluten;
