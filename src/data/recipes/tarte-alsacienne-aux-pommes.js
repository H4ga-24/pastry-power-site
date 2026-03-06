const tarteAlsacienneAuxPommes = {
  id: "tarte-alsacienne-aux-pommes",
  title: "Tarte Alsacienne aux Pommes",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "La fameuse tarte aux pommes de grand-mère, composée d'un fond de pâte brisée, de gros quartiers de pommes fondants et d'une migaine (flan) généreuse à la crème.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/bad3001aad2812d6d1a17d2dd4ed0f6f.jpg",
  baseServings: 6, // 1 tarte 24cm
  
  ingredients: [
    { name: "Pâte brisée", amount: 300, unit: "g" },
    { name: "Pommes (Boskoop ou Golden)", amount: 4, unit: "pc" },
    { name: "Oeufs", amount: 3, unit: "pc" },
    { name: "Crème fraîche épaisse", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 80, unit: "g" },
    { name: "Sucre vanillé", amount: 1, unit: "sachet" },
    { name: "Cannelle", amount: 1, unit: "pincée", note: "facultatif" }
  ],

  steps: [
    { 
      title: "Préparation du fond", 
      text: "Foncer un cercle à tarte de 24-26cm avec la pâte brisée. Piquer le fond et réserver au frais." 
    },
    { 
      title: "Préparation des pommes", 
      text: "Éplucher, évider et couper les pommes en gros quartiers (4 à 6 par pomme). Disposer les quartiers harmonieusement sur le fond de tarte, face bombée vers le haut." 
    },
    { 
      title: "Première cuisson", 
      text: "Enfourner la tarte avec les pommes seules pendant 20 minutes à 180°C. Les pommes doivent commencer à cuire." 
    },
    { 
      title: "L'appareil à flan (Migaine)", 
      text: "Pendant la pré-cuisson, fouetter les œufs avec le sucre, le sucre vanillé, la cannelle et la crème fraîche jusqu'à obtenir un mélange homogène." 
    },
    { 
      title: "Cuisson finale", 
      text: "Sortir la tarte, verser l'appareil à flan sur les pommes précuites. Remettre au four pour 20 à 25 minutes supplémentaires. Le flan doit être pris et doré." 
    }
  ],

  advices: ["La pré-cuisson des pommes évite que l'appareil à flan (liquide) ne détrempe la pâte crue."],
  chefQuote: "Une vraie tarte alsacienne se fait avec une crème épaisse (30% MG), pas de lait, pour une texture flan riche et onctueuse.",
  equipment: ["Moule à tarte", "Fouet", "Économe"]
};

export default tarteAlsacienneAuxPommes;