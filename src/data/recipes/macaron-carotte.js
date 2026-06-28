const macaronCarotte = {
  id: "macaron-carotte",
  title: "Macaron Carotte & Cannelle",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: true,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "Une création audacieuse inspirée du Carrot Cake : une coque orange vibrante et une ganache onctueuse au jus de carotte réduit et cannelle.",
  image: "/images/macaron-carotte.jpg",
  baseServings: 70,
  
  ingredients: [
    { name: "Tant pour tant", amount: 500, unit: "g", note: "Coques" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Colorant Orange", amount: 2, unit: "g", note: "Coques (poudre ou gel)" },
    { name: "Jus de carotte frais", amount: 200, unit: "g", note: "Garniture (à réduire)" },
    { name: "Chocolat blanc", amount: 350, unit: "g", note: "Garniture (couverture type Ivoire)" },
    { name: "Crème liquide 35%", amount: 80, unit: "g", note: "Garniture" },
    { name: "Beurre", amount: 40, unit: "g", note: "Garniture" },
    { name: "Miel d'acacia", amount: 20, unit: "g", note: "Garniture" },
    { name: "Cannelle", amount: 1, unit: "pincée", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques Orange", 
      text: "Mixez et tamisez le tant pour tant et le sucre glace. Montez les blancs en ajoutant le colorant orange. Serrez avec le sucre semoule. Incorporez les poudres à la maryse. Dressez et laissez reposer (croûter) 30 min à l'air libre avant de cuire 14 min à 150°C." 
    },
    { 
      title: "Réduction du jus de carotte", 
      text: "Faites chauffer le jus de carotte dans une casserole à feu doux. Laissez-le réduire de moitié jusqu'à obtenir environ 100g de liquide très concentré et sirupeux. C'est le secret du goût !" 
    },
    { 
      title: "Ganache Carotte", 
      text: "Faites chauffer la crème avec le miel. Versez sur le chocolat blanc fondu. Ajoutez la réduction de jus de carotte, la cannelle et le beurre. Mixez au mixeur plongeant pour lisser la ganache. Laissez durcir au froid 4h minimum." 
    },
    { 
      title: "Finition", 
      text: "Garnissez les coques refroidies et laissez maturer 24h au frais." 
    }
  ],
  advices: ["La réduction du jus est obligatoire : si vous mettez le jus tel quel, la ganache sera trop liquide et détrempera le macaron."],
  chefQuote: "Le mariage carotte-cannelle-chocolat blanc est surprenant, il rappelle la douceur du Carrot Cake américain.",
  equipment: ["Robot coupe", "Casserole", "Mixeur plongeant"]
};

export default macaronCarotte;