const lesCigarettes = {
  id: "les-cigarettes",
  title: "Les cigarettes",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Des biscuits fins et croustillants, roulés à la sortie du four pour former des tubes élégants.",
  image: "https://assets.afcdn.com/recipe/20131121/12662_w1024h1024c1cx300cy200.webp",
  baseServings: 20,
  
  ingredients: [
    { name: "Beurre pommade", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Blancs d'œufs", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Travailler le beurre pommade avec le sucre glace jusqu'à obtenir un mélange crémeux." 
    },
    { 
      title: "LIQUIDES", 
      text: "Incorporer les blancs d'œufs (non montés) petit à petit, puis la vanille." 
    },
    { 
      title: "FARINE", 
      text: "Ajouter la farine tamisée et mélanger juste assez pour l'incorporer." 
    },
    { 
      title: "DRESSAGE", 
      text: "Étaler la pâte très finement sur une plaque beurrée ou un tapis silicone en formant des disques ou des ovales." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 200°C pendant 5 à 7 minutes. Les bords doivent être dorés." 
    },
    { 
      title: "ROULAGE", 
      text: "Dès la sortie du four, alors qu'ils sont encore chauds et mous, rouler immédiatement les disques autour d'un manche de cuillère en bois ou d'un crayon." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser refroidir complètement pour qu'ils durcissent." 
    }
  ],

  advices: ["Cuisez-les par petite quantité (4 ou 6) pour avoir le temps de les rouler avant qu'ils ne durcissent."],
  chefQuote: "Attention aux brûlures, il faut des doigts de fée insensibles à la chaleur !",
  equipment: ["Spatule coudée", "Crayon ou manche rond", "Plaque de cuisson"]
};

export default lesCigarettes;