const macaronCitronVert = {
  id: "macaron-citron-vert",
  title: "Macaron Citron Vert",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "La fraîcheur acidulée du citron vert capturée dans une crème onctueuse, nichée entre deux coques tendres et croquantes.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/d19ff6df5fa5adf008867b48b0007ff0.jpg",
  baseServings: 70,
  
  ingredients: [
    { name: "Tant pour tant", amount: 500, unit: "g", note: "Coques (50% amande / 50% sucre glace)" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques (en plus du tant pour tant)" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Zestes de citron vert", amount: 2, unit: "pièces", note: "Coques (très fins)" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques (stabilisant)" },
    { name: "Colorants (Jaune/Bleu)", amount: 2, unit: "pincées", note: "Coques (pour obtenir un vert frais)" },
    { name: "Jus de citron vert", amount: 150, unit: "g", note: "Garniture" },
    { name: "Sucre semoule", amount: 300, unit: "g", note: "Garniture" },
    { name: "Beurre doux", amount: 200, unit: "g", note: "Garniture (température ambiante)" },
    { name: "Œufs entiers", amount: 300, unit: "g", note: "Garniture" },
    { name: "Gélatine", amount: 4, unit: "g", note: "Garniture (environ 2 feuilles)" }
  ],

  steps: [
    { 
      title: "Préparation des poudres", 
      text: "Mixez finement le tant pour tant et le sucre glace au robot. Tamisez le tout dans un grand récipient. Ajoutez les zestes de citron vert finement râpés." 
    },
    { 
      title: "Meringue et Macaronnage", 
      text: "Montez les blancs avec la crème de tartre. Ajoutez les colorants jaune et bleu pour créer le vert. Serrez les blancs avec le sucre semoule jusqu'à obtenir un bec d'oiseau ferme. Incorporez les poudres à la meringue en mélangeant délicatement à la maryse (macaronner) jusqu'à ce que la pâte fasse un ruban." 
    },
    { 
      title: "Cuisson des coques", 
      text: "Dressez des cercles de 3,5cm. Enfournez à 150°C. Cuisez 4-5 min porte fermée, puis 12 min supplémentaires en entrouvrant légèrement la porte du four pour évacuer l'humidité." 
    },
    { 
      title: "La crème Citron Vert", 
      text: "Faites tremper la gélatine dans l'eau froide. Dans une casserole, mélangez le jus de citron, le sucre et les œufs. Cuisez à feu doux en remuant constamment jusqu'à ce que le mélange épaississe (83°C au thermomètre). Ne faites surtout pas bouillir." 
    },
    { 
      title: "Émulsion finale", 
      text: "Hors du feu, ajoutez la gélatine essorée. Laissez refroidir jusqu'à 40°C, puis ajoutez le beurre en dés. Mixez longuement au mixeur plongeant pour rendre la crème lisse et brillante. Filmez au contact et réservez au frais." 
    },
    { 
      title: "Montage", 
      text: "Garnissez une coque sur deux avec la crème bien froide et refermez. Laissez reposer 24h au frigo." 
    }
  ],
  advices: ["Ne zappez pas le temps de repos de 24h, c'est là que le citron vert parfume vraiment la coque."],
  chefQuote: "Pour un goût encore plus punchy, zestez vos citrons directement dans le sucre de la crème une heure avant de cuisiner.",
  equipment: ["Robot coupe", "Thermomètre", "Mixeur plongeant", "Poche à douille"]
};

export default macaronCitronVert;