const cremeMarrons = {
  id: "creme-marrons",
  title: "Crème Légère aux Marrons",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une mousse onctueuse aux marrons (type Mont-Blanc), réalisée sur une base de pâte à bombe pour une texture aérienne et riche.",
  image: "https://assets.afcdn.com/recipe/20160916/10796_w1024h1024c1cx1500cy1000.webp",
  baseServings: 1, // Pour environ 600g
  
  ingredients: [
    { name: "Pâte de marrons", amount: 200, unit: "g" },
    { name: "Crème de marrons", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 40, unit: "g" },
    { name: "Eau", amount: 30, unit: "g" },
    { name: "Beurre pommade", amount: 100, unit: "g" },
    { name: "Rhum ambré", amount: 10, unit: "g", note: "Facultatif" }
  ],

  steps: [
    { 
      title: "Le mélange marrons", 
      text: "À la feuille ou à la spatule, détendre la pâte de marrons avec la crème de marrons et le rhum. Le mélange doit être parfaitement lisse et homogène." 
    },
    { 
      title: "La pâte à bombe", 
      text: "Cuire l'eau et le sucre à 118°C. Verser sur les jaunes d'œufs mousseux tout en fouettant jusqu'à refroidissement complet (le mélange doit blanchir et tripler de volume)." 
    },
    { 
      title: "L'émulsion au beurre", 
      text: "Incorporer le beurre pommade dans la pâte à bombe refroidie en fouettant pour obtenir une crème au beurre légère." 
    },
    { 
      title: "L'assemblage", 
      text: "Ajouter délicatement le mélange aux marrons dans la crème au beurre légère. Fouetter un court instant pour homogénéiser." 
    }
  ],

  advices: [
    "Si vous ne trouvez pas de pâte de marrons (souvent réservée aux pros), utilisez de la purée de marrons sucrée, mais réduisez le sucre du sirop."
  ],
  chefQuote: "Pochez cette crème avec une douille à nid pour réaliser le visuel classique du Mont-Blanc.",
  equipment: [
    "Robot pâtissier",
    "Thermomètre sucre",
    "Poche à douille (douille nid)"
  ]
};

export default cremeMarrons;