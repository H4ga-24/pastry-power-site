const tabletteFourrePistache = {
  id: "tablette-fourre-pistache",
  title: "Tablette fourrée pistache",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "1H + 2H (Repos)",
  cookTime: "15 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une tablette ultra-gourmande enrobée de chocolat blanc, révélant un cœur coulant au praliné pistache et du riz soufflé croustillant.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6ac9773ded84387d8e7634f08574e034.jpg",
  baseServings: 3, // Tablettes
  
  ingredients: [
    { name: "Crème 35%", amount: 54, unit: "g", note: "Ganache pistache" },
    { name: "Couverture blanche", amount: 108, unit: "g", note: "Ganache pistache" },
    { name: "Praliné pistache", amount: 40, unit: "g", note: "Ganache pistache" },
    { name: "Pistaches émondées", amount: 1, unit: "QS", note: "Garniture" },
    { name: "Riz soufflé", amount: 1, unit: "QS", note: "Garniture" },
    { name: "Couverture blanche", amount: 500, unit: "g", note: "Coque moulage" }
  ],

  steps: [
    { 
      title: "Préparation de la ganache pistache", 
      text: "Faire bouillir la crème liquide. Verser la crème bouillante sur la couverture blanche en trois fois (réaliser une émulsion). Ajouter le praliné pistache et mélanger soigneusement pour obtenir une texture homogène. Laisser refroidir à température ambiante jusqu'à une texture pochable (environ 25-27°C)." 
    },
    { 
      title: "Moulage des coques", 
      text: "Mettre au point la couverture blanche. Remplir le moule, tapoter, retourner pour vider l'excédent et ébarber. Laisser cristalliser la coque blanche." 
    },
    { 
      title: "Garnissage", 
      text: "Déposer un peu de riz soufflé et quelques éclats de pistaches au fond des coques. Couler la ganache pistache par-dessus (en laissant la marge d'obturation). Laisser croûter 2h au frais." 
    },
    { 
      title: "Obturation", 
      text: "Fermer les tablettes avec le reste de couverture blanche tempérée. Ébarber proprement et laisser cristalliser." 
    }
  ],

  advices: ["Le chocolat blanc est très sensible à la chaleur lors du tempérage, ne dépassez pas 40°C à la fonte."],
  chefQuote: "Le riz soufflé apporte une mâche légère qui contraste à merveille avec la richesse de la ganache pistache.",
  equipment: ["Moule à tablette", "Thermomètre", "Maryse"]
};

export default tabletteFourrePistache;