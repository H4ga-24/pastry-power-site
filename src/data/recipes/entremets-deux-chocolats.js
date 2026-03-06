const entremetsDeuxChocolats = {
  id: "entremets-deux-chocolats",
  title: "Entremets Deux Chocolats",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false,
  prepTime: "2H 30",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "L'alliance parfaite de deux chocolats. Un insert fondant au chocolat noir caché dans une mousse bavaroise au chocolat au lait, sur une dacquoise moelleuse. Un grand classique.",
  image: "https://images.unsplash.com/photo-1713274782299-0b97a3e435f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  baseServings: 1, // 1 Entremets de 20 cm
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 125, unit: "g", note: "Insert Noir" },
    { name: "Lait entier", amount: 125, unit: "g", note: "Insert Noir" },
    { name: "Jaunes d'oeufs", amount: 50, unit: "g", note: "Insert Noir" },
    { name: "Sucre semoule", amount: 30, unit: "g", note: "Insert Noir" },
    { name: "Chocolat noir 65%", amount: 120, unit: "g", note: "Insert Noir" },
    { name: "Blancs d'oeufs", amount: 100, unit: "g", note: "Dacquoise" },
    { name: "Sucre semoule", amount: 30, unit: "g", note: "Dacquoise" },
    { name: "Poudre d'amande", amount: 80, unit: "g", note: "Dacquoise" },
    { name: "Sucre glace", amount: 80, unit: "g", note: "Dacquoise" },
    { name: "Farine", amount: 20, unit: "g", note: "Dacquoise" },
    { name: "Lait entier", amount: 250, unit: "g", note: "Bavaroise Lait" },
    { name: "Jaunes d'oeufs", amount: 60, unit: "g", note: "Bavaroise Lait" },
    { name: "Sucre semoule", amount: 40, unit: "g", note: "Bavaroise Lait" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g", note: "Bavaroise Lait" },
    { name: "Chocolat au lait 40%", amount: 250, unit: "g", note: "Bavaroise Lait" },
    { name: "Crème fouettée", amount: 350, unit: "g", note: "Bavaroise Lait" },
    { name: "Eau", amount: 100, unit: "g", note: "Glaçage" },
    { name: "Sucre semoule", amount: 180, unit: "g", note: "Glaçage" },
    { name: "Cacao en poudre", amount: 60, unit: "g", note: "Glaçage" },
    { name: "Crème liquide", amount: 130, unit: "g", note: "Glaçage" },
    { name: "Gélatine (feuilles)", amount: 8, unit: "g", note: "Glaçage" },
    { name: "Chocolat tempéré", amount: 100, unit: "g", note: "Finition" },
    { name: "Fruits secs", amount: 50, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "J-1 : Insert Crémeux Chocolat Noir", 
      text: "Réaliser une crème anglaise : chauffer lait et crème. Blanchir jaunes et sucre. Cuire l'ensemble à la nappe (83°C). Verser sur le chocolat noir haché. Mixer pour lisser. Couler dans un cercle de 16cm filmé. Congeler." 
    },
    { 
      title: "J-1 : Biscuit Dacquoise", 
      text: "Monter les blancs en neige, serrer avec le sucre semoule. Incorporer délicatement les poudres tamisées (amande, sucre glace, farine). Dresser un disque de 18cm. Cuire à 180°C environ 12-15 min. Laisser refroidir." 
    },
    { 
      title: "J-1 : Mousse Bavaroise Chocolat au Lait", 
      text: "Hydrater la gélatine. Réaliser une crème anglaise avec le lait, les jaunes et le sucre (cuisson 83°C). Ajouter la gélatine hors du feu. Verser sur le chocolat au lait. Emulsionner. Laisser refroidir à 30/35°C. Incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "J-1 : Montage à l'envers", 
      text: "Dans un cercle de 20cm filmé et chemisé de rhodoïd : couler une partie de la mousse bavaroise. Déposer l'insert crémeux congelé (centré). Recouvrir du reste de mousse. Terminer par le disque de dacquoise (appuyer légèrement pour que la mousse remonte sur les bords). Lisser. Congeler à cœur (minimum 4h, idéalement une nuit)." 
    },
    { 
      title: "Jour J : Glaçage Noir Brillant", 
      text: "Hydrater la gélatine. Porter à ébullition l'eau, le sucre, le cacao et la crème (103°C). Ajouter la gélatine hors du feu. Mixer sans incorporer d'air. Utiliser à 30/35°C sur l'entremets congelé et décerclé." 
    },
    { 
      title: "Finition et Décor", 
      text: "Déposer l'entremets glacé sur un carton or ou un plat. Réaliser des disques ou formes en chocolat tempéré, y coller des fruits secs pour l'effet 'mendiant'. Disposer harmonieusement sur l'entremets. Laisser décongeler 4h au réfrigérateur avant dégustation." 
    }
  ],

  advices: [
    "Attention à la température du glaçage : trop chaud il coule trop vite et fait fondre la mousse, trop froid il fige trop vite et fait des paquets."
  ],
  chefQuote: "Pour un brillant parfait, mixez longuement votre glaçage sans sortir le pied du mixeur pour ne pas incorporer d'air.",
  equipment: [
    "Cercle 20cm",
    "Cercle 16cm",
    "Mixeur plongeant",
    "Thermomètre"
  ]
};

export default entremetsDeuxChocolats;