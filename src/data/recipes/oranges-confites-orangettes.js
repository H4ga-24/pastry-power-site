const orangesConfitesOrangettes = {
  id: "oranges-confites-orangettes",
  title: "Oranges Confites & Orangettes",
  category: "Confiserie",
  subCategory: ["Confiseries diverses"],
  isVip: false,
  prepTime: "8 Jours + 24H (Séchage)",
  cookTime: "30 MIN / Jour",
  difficulty: "EXPERT",
  description: "L'art du confisage traditionnel. Des écorces d'oranges gorgées de sirop pendant 8 jours pour une texture tendre et translucide, enrobées d'une fine couche de chocolat noir croquant.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7e694ad1cc3c3fc50e9cfc869a0609db.png",
  baseServings: 2000, // g (écorces départ)
  
  ingredients: [
    { name: "Écorces d'oranges (quartiers)", amount: 2000, unit: "g" },
    { name: "Eau de blanchiment", amount: 5, unit: "L" },
    { name: "Sel fin", amount: 10, unit: "g", note: "Dernier bain" },
    { name: "Eau (Départ Sirop)", amount: 2000, unit: "g" },
    { name: "Sucre Semoule (Total)", amount: 2500, unit: "g", note: "Ajouts progressifs" },
    { name: "Glucose Cristal", amount: 400, unit: "g", note: "Fin de process" },
    { name: "Couverture Noire 65-70%", amount: 1500, unit: "g", note: "Enrobage" },
    { name: "Poudre d'amande torréfiée", amount: 300, unit: "g", note: "Opt." }
  ],

  steps: [
    { 
      title: "1. Préparation & Blanchiment", 
      text: "Lever les écorces en quartiers. Les blanchir 3 fois départ eau froide (porter à ébullition, égoutter, rafraîchir). Ajouter le sel dans le dernier bain pour enlever l'amertume." 
    },
    { 
      title: "2. Confisage (Jours 1 à 8)", 
      text: "Préparer un sirop léger (eau + partie du sucre). Plonger les écorces. Porter à ébullition. Laisser reposer 24h. Chaque jour, égoutter, ajouter du sucre au sirop, bouillir, verser sur les fruits. La densité du sirop doit augmenter progressivement (de 18°B à 32°B environ). Ajouter le glucose vers la fin." 
    },
    { 
      title: "3. Séchage", 
      text: "Égoutter les écorces sur grille. Laisser sécher 24h à 48h à l'air libre (ou étuve douce) jusqu'à ce qu'elles ne collent plus aux doigts." 
    },
    { 
      title: "4. Finition Orangettes", 
      text: "Détailler en bâtonnets. Tremper dans la couverture noire tempérée. Déposer sur feuille guitare." 
    }
  ],

  advices: ["Le confisage est une osmose lente : ne brûlez pas les étapes sinon le sucre cristallisera à l'intérieur."],
  chefQuote: "Une orangette réussie est tendre à l'intérieur, sans être sirupeuse, et craquante à l'extérieur.",
  equipment: ["Grande casserole", "Pèse-sirop (densimètre)", "Grille"]
};

export default orangesConfitesOrangettes;