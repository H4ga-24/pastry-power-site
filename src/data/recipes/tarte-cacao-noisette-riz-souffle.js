const tarteCacaoNoisetteRizSouffle = {
  id: "tarte-cacao-noisette-riz-souffle",
  title: "Tarte Cacao, Noisette & Riz Soufflé",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "40 MIN",
  cookTime: "20 MIN",
  difficulty: "MOYEN",
  description: "Une tarte qui joue sur les textures : une pâte cacaotée, une couche de praliné croustillant au riz soufflé et une ganache chocolat noir onctueuse.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/tarte-chocolat-de-paques/tarte-chocolat-de-paques-1200.jpg",
  baseServings: 6, // 1 tarte 22cm
  
  ingredients: [
    { name: "Pâte sucrée cacao", amount: 300, unit: "g" },
    { name: "Praliné noisette", amount: 150, unit: "g", note: "Croustillant" },
    { name: "Riz soufflé", amount: 50, unit: "g", note: "Croustillant" },
    { name: "Chocolat au lait 40%", amount: 100, unit: "g", note: "Croustillant" },
    { name: "Crème liquide entière", amount: 200, unit: "g", note: "Ganache" },
    { name: "Chocolat noir 65%", amount: 150, unit: "g", note: "Ganache" },
    { name: "Beurre", amount: 30, unit: "g", note: "Ganache" },
    { name: "Noisettes torréfiées", amount: 50, unit: "g", note: "Décor" }
  ],

  steps: [
    { 
      title: "Fond de tarte", 
      text: "Foncer un cercle à tarte de 22cm avec la pâte sucrée cacao. Piquer le fond. Cuire à blanc à 170°C pendant 15 à 20 minutes. Laisser refroidir." 
    },
    { 
      title: "Croustillant Riz Soufflé", 
      text: "Fondre le chocolat au lait (45°C) et le mélanger avec le praliné. Ajouter le riz soufflé et mélanger délicatement pour bien enrober les grains. Étaler ce croustillant dans le fond de tarte refroidi. Laisser figer au frais." 
    },
    { 
      title: "Ganache Chocolat Noir", 
      text: "Porter la crème liquide à ébullition. Verser sur le chocolat noir haché en 3 fois, en créant une émulsion à la maryse. Ajouter le beurre quand la ganache est à 40°C et mixer pour lisser." 
    },
    { 
      title: "Montage", 
      text: "Couler la ganache chocolat sur le croustillant figé jusqu'à ras bord de la pâte. Laisser cristalliser à température ambiante puis au frais." 
    },
    { 
      title: "Décor", 
      text: "Disposer les noisettes torréfiées coupées en deux sur le pourtour ou en décor central." 
    }
  ],

  advices: ["Il faut impérativement bien enrober le riz soufflé de chocolat/praliné, sinon l'humidité de la ganache va le ramollir."],
  chefQuote: "C'est l'esprit d'une barre chocolatée célèbre mais revisité en pâtisserie fine.",
  equipment: ["Cercle à tarte perforé", "Maryse", "Mixeur plongeant"]
};

export default tarteCacaoNoisetteRizSouffle;