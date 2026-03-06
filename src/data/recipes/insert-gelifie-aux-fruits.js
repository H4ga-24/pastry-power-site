const insertGelifieAuxFruits = {
  id: "insert-gelifie-aux-fruits",
  title: "Insert Gélifié aux Fruits",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "Un insert pur fruit, frais et acidulé, idéal pour apporter de la légèreté à un entremets mousseux.",
  image: "https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~fbb3df99-166b-46b7-b9e9-1b936bcc6fcf.jpeg/400x400/quality/80/crop-from/center/bavarois-leger-aux-fruits-rouges.jpeg",
  baseServings: 6,
  
  ingredients: [
    { name: "Purée de fruits rouges", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Jus de citron", amount: 10, unit: "g" },
    { name: "Gélatine", amount: 4, unit: "g" }
  ],

  steps: [
    { 
      title: "HYDRATATION", 
      text: "Faire tremper la gélatine dans un grand volume d'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée de fruits avec le sucre jusqu'à dissolution." 
    },
    { 
      title: "INCORPORATION", 
      text: "Hors du feu, ajouter la gélatine essorée et mélanger." 
    },
    { 
      title: "MÉLANGE", 
      text: "Verser ce mélange sur le reste de purée froide et le jus de citron. Mélanger." 
    },
    { 
      title: "COULAGE", 
      text: "Couler dans le moule insert et bloquer au grand froid (congélateur)." 
    }
  ],

  advices: ["Le fait de ne chauffer qu'une partie de la purée préserve le goût du fruit frais."],
  chefQuote: "Ajoutez quelques fruits entiers dans l'insert pour plus de texture.",
  equipment: ["Casserole", "Fouet", "Moule insert"]
};

export default insertGelifieAuxFruits;