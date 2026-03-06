const dentelleAmandeOrange = {
  id: "dentelle-amande-orange",
  title: "Dentelle Amande à l'Orange",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "8 MIN",
  difficulty: "MOYEN",
  description: "Des biscuits d'une finesse extrême, au bon goût d'orange et de caramel. Très fragiles et élégants.",
  image: "https://static.750g.com/images/640-440/b1feec3f4b5e06242eb9a57c5cd092d2/tuilesdentelles.jpg",
  baseServings: 16, 
  
  ingredients: [
    { name: "Beurre doux", amount: 65, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Amandes hachées fin", amount: 50, unit: "g" },
    { name: "Farine T55", amount: 40, unit: "g" },
    { name: "Jus d'orange", amount: 50, unit: "ml" },
    { name: "Zeste d'orange", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "La fusion", 
      text: "Dans une casserole, porter à ébullition le beurre, le sucre et le jus d'orange." 
    },
    { 
      title: "Le mélange", 
      text: "Hors du feu, ajouter la farine tamisée, les amandes hachées et le zeste. Bien mélanger." 
    },
    { 
      title: "Le dressage", 
      text: "Déposer des tout petits tas très espacés sur une plaque chemisée (le mélange s'étale énormément à la cuisson)." 
    },
    { 
      title: "La cuisson", 
      text: "Cuire à 180°C pendant 6 à 8 minutes. Le mélange va bouillir et former une dentelle caramel. Laisser durcir avant de manipuler." 
    }
  ],

  advices: [
    "Surveillez la cuisson comme le lait sur le feu ! Quelques secondes de trop et c'est brûlé."
  ],
  chefQuote: "Vous pouvez mouler ces dentelles sur un rouleau à pâtisserie dès la sortie du four pour leur donner une forme incurvée.",
  equipment: [
    "Casserole",
    "Plaque de cuisson"
  ]
};

export default dentelleAmandeOrange;