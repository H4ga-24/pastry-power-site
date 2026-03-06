const tarteFramboise = {
  id: "tarte-framboise",
  title: "Tarte aux Framboises",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "35 MIN",
  difficulty: "MOYEN",
  description: "La tarte aux framboises façon boutique : un fond de pâte sucrée, une crème d'amande moelleuse, une fine couche de pâtissière et des framboises fraîches garnies de confit.",
  image: "https://ateliersdeludo.fr/wp-content/uploads/2022/08/Tarte-Framboise-Cyril-Lignac.jpg",
  baseServings: 6, // 1 tarte 22cm
  
  ingredients: [
    { name: "Pâte sucrée", amount: 300, unit: "g" },
    { name: "Crème d'amande", amount: 150, unit: "g" },
    { name: "Crème pâtissière", amount: 250, unit: "g" },
    { name: "Framboises fraîches", amount: 500, unit: "g" },
    { name: "Confit de framboise", amount: 100, unit: "g" },
    { name: "Sucre glace (décor)", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "Fond de tarte", 
      text: "Foncer un cercle de 22cm avec la pâte sucrée. Cuire à blanc à 170°C pendant 15 minutes." 
    },
    { 
      title: "Crème d'amande", 
      text: "Garnir le fond précuit avec la crème d'amande. Remettre au four 15 à 20 minutes jusqu'à ce que la crème soit dorée. Laisser refroidir." 
    },
    { 
      title: "Montage", 
      text: "Lisser la crème pâtissière froide au fouet. L'étaler en fine couche sur le fond de crème d'amande (cette couche sert à 'coller' les fruits et apporter de l'onctuosité)." 
    },
    { 
      title: "Dressage", 
      text: "Disposer les framboises tête en bas de manière régulière et serrée. Garnir le cœur creux de chaque framboise avec le confit de framboise à l'aide d'une petite poche à douille." 
    },
    { 
      title: "Finition", 
      text: "Saupoudrer légèrement de sucre glace ou napper les framboises pour la brillance." 
    }
  ],

  advices: ["Ne lavez pas les framboises, elles se gorgeraient d'eau. Frottez-les délicatement avec un pinceau si nécessaire."],
  chefQuote: "Le petit point de confit dans la framboise est la signature des grands chefs pour une explosion de fruit en bouche.",
  equipment: ["Cercle à tarte", "Poche à douille (petite ouverture)"]
};

export default tarteFramboise;