const glacageChataigne = {
  id: "glacage-chataigne",
  title: "Glaçage Châtaigne",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: true,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Un glaçage original et gourmand à la teinte marron douce, idéal pour les entremets d'automne, le Mont-Blanc ou les bûches de Noël.",
  image: "https://www.alicedelice.com/79952-product_main/glacage-miroir-pret-a-lemploi-coloris-marron.jpg",
  baseServings: 600, // g
  
  ingredients: [
    { name: "Eau", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Sirop de glucose", amount: 100, unit: "g" },
    { name: "Lait concentré sucré", amount: 70, unit: "g" },
    { name: "Pâte de marron", amount: 80, unit: "g" },
    { name: "Chocolat blanc", amount: 100, unit: "g" },
    { name: "Gélatine (200 bloom)", amount: 8, unit: "g" },
    { name: "Eau d'hydratation", amount: 48, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Hydrater la gélatine dans l'eau froide. Détendre la pâte de marron pour qu'elle soit souple." 
    },
    { 
      title: "SIROP", 
      text: "Dans une casserole, porter à ébullition l'eau, le sucre et le sirop de glucose. Cuire à 103°C." 
    },
    { 
      title: "MÉLANGE", 
      text: "Verser le sirop chaud sur le mélange chocolat blanc, lait concentré et pâte de marron disposé dans un pichet." 
    },
    { 
      title: "LIAISON", 
      text: "Ajouter la gélatine hydratée. Mixer au mixeur plongeant en prenant soin de ne pas incorporer d'air pour obtenir un mélange lisse." 
    },
    { 
      title: "REPOS", 
      text: "Filmer au contact et laisser reposer 24h au frais. Utiliser à 30-32°C." 
    }
  ],

  advices: ["Si la pâte de marron a des grains, passez le glaçage au chinois fin après mixage."],
  chefQuote: "Ce glaçage est très couvrant grâce à la pâte de marron.",
  equipment: ["Casserole", "Pichet haut", "Mixeur plongeant"]
};

export default glacageChataigne;