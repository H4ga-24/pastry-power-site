const langueDeChat = {
  id: "langue-de-chat",
  title: "Langue de chat",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "TRÈS FACILE",
  description: "Le biscuit idéal pour utiliser des restes de blancs d'œufs. Fin, croquant et délicat.",
  image: "https://assets.afcdn.com/recipe/20130924/63477_w1024h576c1cx1868cy1296.jpg",
  baseServings: 30, // biscuits
  
  ingredients: [
    { name: "Beurre mou", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Farine", amount: 100, unit: "g" },
    { name: "Blancs d'œufs", amount: 100, unit: "g" },
    { name: "Vanille", amount: 1, unit: "cc" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Travailler le beurre mou avec le sucre glace jusqu'à obtenir une pommade." 
    },
    { 
      title: "FARINE", 
      text: "Ajouter la farine tamisée et la vanille." 
    },
    { 
      title: "BLANCS", 
      text: "Incorporer les blancs d'œufs petit à petit en fouettant bien pour obtenir une pâte lisse." 
    },
    { 
      title: "POCHAGE", 
      text: "Dresser des bâtonnets de 6cm de long, bien espacés, à la poche à douille lisse (n°8)." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 8 à 10 minutes. Les bords doivent être bien dorés et le centre pâle." 
    }
  ],

  advices: ["Surveillez bien la cuisson, elles colorent très vite sur les bords."],
  chefQuote: "Elles durcissent en refroidissant, ne les manipulez pas à la sortie du four.",
  equipment: ["Poche à douille", "Douille unie n°8", "Plaque de cuisson"]
};

export default langueDeChat;