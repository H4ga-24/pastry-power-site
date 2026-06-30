const macaronVanille = {
  id: "macaron-vanille",
  title: "Macaron Vanille Intense",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "1H 45",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "L'élégance absolue : une coque parsemée de grains de vanille et une ganache onctueuse infusée aux gousses de Madagascar.",
  image: "/images/recipes/macaron-vanille.png",
  baseServings: 70,
  
  ingredients: [
    { name: "Tant pour tant", amount: 500, unit: "g", note: "Coques" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Gousses de vanille", amount: 2, unit: "p", note: "Coques (les grains)" },
    { name: "Chocolat blanc", amount: 340, unit: "g", note: "Garniture (couverture 35%)" },
    { name: "Crème liquide entière", amount: 200, unit: "g", note: "Garniture" },
    { name: "Gousses de vanille", amount: 3, unit: "p", note: "Garniture (infusion)" },
    { name: "Miel ou Sucre inverti", amount: 20, unit: "g", note: "Garniture" },
    { name: "Beurre de cacao", amount: 10, unit: "g", note: "Garniture (optionnel, pour la tenue)" }
  ],

  steps: [
    { 
      title: "Coques Vanillées", 
      text: "Mixez le tant pour tant et le sucre glace avec les grains de 2 gousses de vanille. Tamisez. Préparez votre meringue française classique, macaronnez et dressez. Cuisez à 150°C pendant 14 min." 
    },
    { 
      title: "Infusion Puissante", 
      text: "Faites chauffer la crème avec le miel et les 3 gousses grattées. Couvrez la casserole et laissez infuser au moins 15 minutes hors du feu pour extraire tous les arômes." 
    },
    { 
      title: "Création de la Ganache", 
      text: "Retirez les gousses, réchauffez la crème et versez-la sur le chocolat blanc haché. Émulsionnez au mixeur plongeant. Filmez au contact et laissez prendre au réfrigérateur jusqu'à ce qu'elle soit assez ferme pour être pochée." 
    },
    { 
      title: "Assemblage", 
      text: "Garnissez généreusement. Le blanc immaculé des coques avec les points noirs de vanille est le signe d'un macaron de haute qualité." 
    }
  ],
  advices: ["Utilisez des gousses charnues pour un maximum de grains visibles dans la coque."],
  chefQuote: "Ne jetez jamais vos gousses vides ! Placez-les dans un pot de sucre pour créer votre propre sucre vanillé.",
  equipment: ["Mixeur", "Tamis", "Mixeur plongeant"]
};

export default macaronVanille;