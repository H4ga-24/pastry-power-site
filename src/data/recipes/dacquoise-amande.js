const dacquoiseAmande = {
  id: "dacquoise-amande",
  title: "Dacquoise Amande",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Un biscuit meringué aux amandes, croustillant à l'extérieur et moelleux à l'intérieur. La base de nombreux entremets.",
  image: "https://assets.afcdn.com/recipe/20170321/3841_w1024h1024c1cx1773cy2660.jpg",
  baseServings: 3, // 3 disques de 18-20cm
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 180, unit: "g" },
    { name: "Sucre semoule", amount: 105, unit: "g" },
    { name: "Poudre d'amande", amount: 105, unit: "g" },
    { name: "Sucre glace", amount: 75, unit: "g" },
    { name: "Farine T55", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "La meringue", 
      text: "Monter les blancs d'œufs. Quand ils moussent, ajouter le sucre semoule en 3 fois pour les serrer et obtenir une meringue ferme." 
    },
    { 
      title: "Le mélange", 
      text: "Tamiser ensemble la poudre d'amande, le sucre glace et la farine. Incorporer délicatement ce mélange aux blancs montés à l'aide d'une maryse." 
    },
    { 
      title: "Le dressage", 
      text: "Dresser à la poche (douille 10mm) en spirale sur papier cuisson selon la forme désirée." 
    },
    { 
      title: "La cuisson", 
      text: "Saupoudrer de sucre glace (pour perler). Cuire à 180°C pendant 15 minutes. Le biscuit doit être blond." 
    }
  ],

  advices: [
    "Ne faites pas trop retomber l'appareil en mélangeant, sinon votre dacquoise sera plate et caoutchouteuse."
  ],
  chefQuote: "Ajoutez quelques noisettes concassées sur le dessus avant cuisson pour apporter du croquant.",
  equipment: [
    "Poche à douille",
    "Batteur",
    "Tamis"
  ]
};

export default dacquoiseAmande;