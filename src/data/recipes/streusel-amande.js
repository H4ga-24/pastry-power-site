const streuselAmande = {
  id: "streusel-amande",
  title: "Streusel amande",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Le streusel est un mélange de beurre, farine fine et/ou chapelure et sucre que l'on parsème sur certaines pâtisseries avant de les passer au four.",
  image: "https://www.myparisiankitchen.com/wp-content/uploads/2018/11/pate-a-streusel_MPK_01-500x374.jpg",
  baseServings: 10,
  
  ingredients: [
    { name: "Beurre", amount: 270, unit: "g" },
    { name: "Sucre cassonade", amount: 270, unit: "g" },
    { name: "Sel fin", amount: 2, unit: "g" },
    { name: "Farine courante", amount: 270, unit: "g" },
    { name: "Poudre d'amande", amount: 350, unit: "g" }
  ],

  steps: [
    { 
      title: "PESÉES", 
      text: "Réaliser les pesées de tous les ingrédients avec précision." 
    },
    { 
      title: "SABLAGE", 
      text: "Dans la cuve du batteur munie de la feuille, sabler ensemble : le beurre froid coupé en dés, le sucre cassonade, le sel, la farine et la poudre d'amande." 
    },
    { 
      title: "TEXTURE", 
      text: "Mélanger jusqu'à l'obtention d'une texture granuleuse régulière (gros grains de sable). Ne pas pétrir pour éviter de former une pâte compacte." 
    },
    { 
      title: "CUISSON OU UTILISATION", 
      text: "Disposer sur la tarte ou le cake et cuire. Cette préparation peut être congelée et déposée sur les tartes ou tartelettes à la demande. Cuisson généralement à 160°C - 170°C jusqu'à coloration dorée." 
    }
  ],

  advices: ["Il faut absolument travailler avec un beurre bien froid pour obtenir les 'grumeaux' caractéristiques du crumble/streusel."],
  chefQuote: "Contrairement à la pâte sablée, le streusel n'a aucun liquide (ni œuf ni eau). C'est ce qui le rend ultra croustillant.",
  equipment: ["Batteur (feuille)"]
};

export default streuselAmande;