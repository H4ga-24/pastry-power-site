const tabletteFourreFraise = {
  id: "tablette-fourre-fraise",
  title: "Tablette fourré fraise",
  category: "Chocolaterie",
  subCategory: [], // Nouvelle catégorie possible, ou "Confiserie"
  isVip: false,
  prepTime: "1H + 2H (Repos)",
  cookTime: "15 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une tablette au cœur tendre : une ganache fraise onctueuse et fruitée, enrobée d'une fine couche de chocolat au lait craquante pour une douceur régressive.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/86ac6c00469a996ab61449d88227b045.png",
  baseServings: 3, // Tablettes
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 45, unit: "g", note: "Ganache" },
    { name: "Couverture Lait 40%", amount: 140, unit: "g", note: "Ganache" },
    { name: "Fraises (mixées)", amount: 70, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 20, unit: "g", note: "Ganache" },
    { name: "Couverture Lait 40%", amount: 500, unit: "g", note: "Coque moulage" }
  ],

  steps: [
    { 
      title: "Préparation de la ganache fraise", 
      text: "Porter la crème liquide à ébullition. Verser la crème chaude sur la couverture lait partiellement fondue. Ajouter le beurre en dés et les fraises préalablement mixées et passées au chinois étamine (pour retirer les akènes). Mixer l'ensemble au mixeur plongeant sans incorporer d'air, puis chinoiser une nouvelle fois si nécessaire. Laisser refroidir la ganache 2h (viser 28°C environ pour le pochage)." 
    },
    { 
      title: "Montage tablettes (Moulage)", 
      text: "Mettre au point la couverture lait (500g). Remplir les moules à tablettes à ras bord. Tapoter énergiquement pour chasser les bulles d'air. Attendre une minute, puis retourner le moule pour vider l'excédent. Racler proprement pour enlever l'excédent de couverture et laisser cristalliser." 
    },
    { 
      title: "Garnissage", 
      text: "Garnir les coques en chocolat avec la ganache fraise en laissant 2mm de bord libre pour l'obturation. Laisser figer au frais pendant 2 heures (la ganache doit former une peau suffisamment résistante)." 
    },
    { 
      title: "Obturation", 
      text: "Obturer (fermer) les tablettes avec de la couverture lait tempérée. Lisser soigneusement à la spatule. Laisser cristalliser complètement (environ 2h) avant de procéder au démoulage." 
    }
  ],

  advices: ["Pour la ganache, ne dépassez pas 30°C lors du pochage dans les coques, sinon la chaleur va faire fondre le moulage en chocolat."],
  chefQuote: "Chinoiser la purée de fraise garantit une texture soyeuse en bouche et évite les petits grains désagréables dans une ganache.",
  equipment: ["Moule à tablette polycarbonate", "Thermomètre", "Mixeur plongeant", "Spatule à chocolat"]
};

export default tabletteFourreFraise;