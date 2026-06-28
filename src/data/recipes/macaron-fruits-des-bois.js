const macaronFruitsDesBois = {
  id: "macaron-fruits-des-bois",
  title: "Macaron Fruits des Bois",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "Une explosion fruitée : une confiture maison intense (framboises, mûres, myrtilles) protégée par une coque violette.",
  image: "/images/recipes/macaron-fruits-des-bois.png",
  baseServings: 70,
  
  ingredients: [
    { name: "Tant pour tant", amount: 500, unit: "g", note: "Coques" },
    { name: "Mélange colorants", amount: 1, unit: "dose", note: "Coques (Bleu + Rouge pour le violet)" },
    { name: "Fruits des bois mélangés", amount: 500, unit: "g", note: "Garniture (frais ou surgelés)" },
    { name: "Sucre semoule", amount: 180, unit: "g", note: "Garniture" },
    { name: "Pectine NH ou Jaune", amount: 10, unit: "g", note: "Garniture (pour gélifier)" },
    { name: "Jus de citron", amount: 1, unit: "c.à.s", note: "Garniture (active la pectine)" }
  ],

  steps: [
    { 
      title: "Coques Violettes", 
      text: "Réalisez vos coques selon la méthode habituelle en ajoutant le colorant violet dans les blancs montés. Cuisez 14 min à 150°C." 
    },
    { 
      title: "Cuisson du fourrage fruit", 
      text: "Mixez grossièrement les fruits. Chauffez-les dans une casserole avec la majeure partie du sucre. À 40°C, ajoutez le reste du sucre mélangé à la pectine (cela évite les grumeaux). Portez à ébullition pendant 2 minutes." 
    },
    { 
      title: "Gélification", 
      text: "Ajoutez le jus de citron en fin de cuisson, mélangez bien et versez dans un plat plat pour refroidir rapidement. La préparation va figer en refroidissant." 
    },
    { 
      title: "Montage", 
      text: "Une fois le confit de fruits bien froid, fouettez-le légèrement pour le détendre, mettez-le en poche et garnissez vos macarons." 
    }
  ],
  advices: ["La pectine est cruciale ici : sans elle, le jus des fruits va détremper vos macarons en une heure."],
  chefQuote: "Vous pouvez varier les plaisirs en utilisant uniquement de la framboise ou du cassis pour un goût plus typé.",
  equipment: ["Casserole", "Mixeur", "Poche à douille"]
};

export default macaronFruitsDesBois;