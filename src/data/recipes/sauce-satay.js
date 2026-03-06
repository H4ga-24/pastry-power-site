const sauceSatay = {
  id: "sauce-satay",
  title: "La Sauce Satay (Cacahuète)",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "7 MIN",
  difficulty: "FACILE",
  description: "La célèbre sauce asiatique riche et gourmande au beurre de cacahuète, parfaite en trempette pour des brochettes de poulet ou des rouleaux de printemps.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7f8d7e6c0ed7ce8b391f5fe6ab897b30.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Beurre de cacahuètes (non sucré)", amount: 120, unit: "g" },
    { name: "Lait de coco", amount: 200, unit: "ml" },
    { name: "Sauce soja", amount: 2, unit: "c.à.s" },
    { name: "Jus de citron", amount: 1, unit: "c.à.s" },
    { name: "Sucre brun", amount: 2, unit: "c.à.c" },
    { name: "Ail (pressé)", amount: 1, unit: "gousse" },
    { name: "Curry (Pâte ou Poudre)", amount: 1, unit: "c.à.c" },
    { name: "Huile de sésame", amount: 1, unit: "c.à.c", note: "facultatif" }
  ],

  steps: [
    { 
      title: "L'Assemblage", 
      text: "Dans une casserole à feu moyen, versez le beurre de cacahuètes, le lait de coco, la sauce soja, le jus de citron, le sucre brun, l'ail et le curry. Mélangez vigoureusement." 
    },
    { 
      title: "La Cuisson (Mijotage)", 
      text: "Laissez mijoter la sauce à feu doux pendant 5 à 7 minutes. Remuez fréquemment pour éviter que le beurre de cacahuètes n'attache au fond. La sauce va s'épaissir." 
    },
    { 
      title: "L'Assaisonnement", 
      text: "Goûtez. Ajoutez l'huile de sésame. Équilibrez : si trop salé, ajoutez du sucre, si trop lourd, ajoutez du citron." 
    },
    { 
      title: "Le Service", 
      text: "Retirez du feu. La sauce va encore s'épaissir en refroidissant. Servez tiède en nappage ou en dip." 
    }
  ],

  advices: ["Privilégiez un beurre de cacahuète 'crunchy' (avec morceaux) pour apporter de la mâche à votre sauce."],
  chefQuote: "C'est l'équilibre Sucré / Salé / Acide (citron) qui fait toute la différence dans cette sauce.",
  equipment: ["Casserole", "Fouet"]
};

export default sauceSatay;