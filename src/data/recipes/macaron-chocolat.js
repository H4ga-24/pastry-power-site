const macaronChocolat = {
  id: "macaron-chocolat",
  title: "Macaron Chocolat",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "1H 30",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "L'alliance parfaite d'une coque croquante au cacao et d'une ganache intense au chocolat noir 70%.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/84cdb85e2de66b4be54b6127281c2272.png",
  baseServings: 70, // coques
  
  ingredients: [
    { name: "Tant pour tant amandes", amount: 475, unit: "g", note: "Coques (50% amande/50% sucre glace)" },
    { name: "Poudre de cacao", amount: 25, unit: "g", note: "Coques" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Pulpe d'abricots", amount: 10, unit: "g", note: "Coques (secret moelleux)" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques" },
    { name: "Colorant rouge", amount: 5, unit: "gouttes", note: "Coques" },
    { name: "Crème liquide", amount: 270, unit: "g", note: "Garniture" },
    { name: "Lait", amount: 100, unit: "g", note: "Garniture" },
    { name: "Sucre inverti", amount: 20, unit: "g", note: "Garniture" },
    { name: "Beurre", amount: 40, unit: "g", note: "Garniture" },
    { name: "Chocolat noir Ultime 70%", amount: 350, unit: "g", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques Chocolat", 
      text: "Au cutter, affiner le tant pour tant, le sucre glace, le cacao et la pulpe d'abricot. Tamiser. Monter les blancs avec la crème de tartre et 10% du sucre. Ajouter le colorant. Serrer avec le reste du sucre. Incorporer les poudres. Macaronner. Dresser. Cuire à 150°C (4-5 min tirage fermé, puis 12-14 min tirage ouvert)." 
    },
    { 
      title: "Ganache Chocolat", 
      text: "Chauffer crème, lait et sucre inverti à 85°C. Verser sur le chocolat haché. Mixer pour émulsionner. Ajouter le beurre à 40°C. Mixer à nouveau. Laisser cristalliser." 
    },
    { 
      title: "Montage", 
      text: "Garnir les coques froides avec la ganache. Réserver 24h au frais." 
    }
  ],

  advices: ["La pulpe d'abricot dans la coque est une astuce de chef pour garder le moelleux malgré le cacao qui assèche."],
  chefQuote: "Le cacao en poudre remplace une partie du tant pour tant, attention à ne pas trop macaronner car le cacao graisse la pâte.",
  equipment: ["Robot coupe", "Poche à douille", "Plaque de cuisson"]
};

export default macaronChocolat;