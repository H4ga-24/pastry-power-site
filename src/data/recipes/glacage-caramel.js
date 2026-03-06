const glacageCaramel = {
  id: "glacage-caramel",
  title: "Glaçage Caramel",
  category: "Pâtisserie",
  subCategory: ["Glaçages"],
  isVip: true,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "DIFFICILE",
  description: "Un glaçage miroir à la belle couleur ambrée et au goût intense de caramel, sans ajout de colorant.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-eqIfKBoUlQoiQklMz7y88kWMFXvLOPpjjIjHEia4PWPkpDSKx8YS4_UruOGnr5Lkj4XjQIrJ6-8rr5Pn98nMRWY8BF3PINvneIxiIC4VpoObmHSLdOKirG7TonP_bqNUWm3pd9VORkKv/s1600/MNFW5mHDSXOycUJiuTP4rg_thumb_6287.jpg",
  baseServings: 600, // g
  
  ingredients: [
    { name: "Sucre semoule", amount: 250, unit: "g" },
    { name: "Eau (pour le sirop)", amount: 250, unit: "g" },
    { name: "Crème liquide 35% MG", amount: 250, unit: "g" },
    { name: "Fécule de maïs (Maïzena)", amount: 20, unit: "g" },
    { name: "Gélatine feuille (200 bloom)", amount: 10, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Hydrater la gélatine dans un grand bol d'eau froide. Mélanger la fécule avec un peu d'eau froide prélevée sur la recette." 
    },
    { 
      title: "CARAMEL", 
      text: "Réaliser un caramel à sec avec le sucre jusqu'à obtenir une couleur ambrée foncée (mais pas brûlée)." 
    },
    { 
      title: "DÉCUIRE", 
      text: "Décuire le caramel en versant l'eau chaude petit à petit (attention aux projections), puis la crème liquide chaude." 
    },
    { 
      title: "LIAISON", 
      text: "Ajouter la fécule diluée et porter à ébullition pendant 1 minute pour épaissir légèrement le mélange." 
    },
    { 
      title: "FINITION", 
      text: "Hors du feu, ajouter la gélatine essorée. Mixer au mixeur plongeant sans faire de bulles. Chinoiser et laisser cristalliser 24h." 
    }
  ],

  advices: ["Utilisez de l'eau chaude pour décuire le caramel, cela limite les éclaboussures et la cristallisation."],
  chefQuote: "La fécule apporte du liant et évite que le glaçage ne soit trop translucide.",
  equipment: ["Casserole haute", "Fouet", "Mixeur plongeant"]
};

export default glacageCaramel;