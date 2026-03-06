const pralineCroustillantNoisetteIntense = {
  id: "praline-croustillant-noisette-intense",
  title: "Praliné Croustillant Noisette Intense",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "1H + 24H (Cristallisation)",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "Un bonbon texturé à la puissance aromatique intense. Un praliné noisette croustillant enrichi de Royaltine, surmonté d'une noisette entière torréfiée pour un relief gourmand sous une fine couche de chocolat lait.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/b5d042ecdd3b83e40ed2c330fce9affc.jpg",
  baseServings: 160, // bonbons
  
  ingredients: [
    { name: "Praliné Noisette 60% (Fruits)", amount: 1000, unit: "g", note: "Masse" },
    { name: "Couverture Lait 40%", amount: 300, unit: "g", note: "Masse" },
    { name: "Beurre de cacao", amount: 50, unit: "g", note: "Masse" },
    { name: "Pailleté Feuilletine (Royaltine)", amount: 350, unit: "g", note: "Masse" },
    { name: "Couverture Lait (mise au point)", amount: 100, unit: "g", note: "Chablonnage" },
    { name: "Noisettes entières torréfiées", amount: 160, unit: "pce", note: "Décors" },
    { name: "Chocolat tempéré (collage)", amount: 50, unit: "g", note: "Décors" },
    { name: "Couverture Lait 40%", amount: 1500, unit: "g", note: "Enrobage" }
  ],

  steps: [
    { 
      title: "1. Masse Praliné Croustillant", 
      text: "Fondre la couverture lait et le beurre de cacao à 45°C. Mélanger avec le praliné tempéré à 25°C. Incorporer délicatement la feuilletine. Cadrer la masse (épaisseur selon le bonbon désiré). Laisser cristalliser 24h à 17°C (hygrométrie contrôlée)." 
    },
    { 
      title: "2. Chablonnage", 
      text: "Mettre au point la couverture lait (100g). Étaler une fine couche sur la masse cristallisée avec une palette pour créer la base du bonbon (socle). Laisser figer." 
    },
    { 
      title: "3. Découpe et Décors", 
      text: "Retourner le cadre (chablonnage en dessous). Détailler à la guitare à la taille souhaitée. Coller une noisette torréfiée sur chaque intérieur avec une pointe de chocolat." 
    },
    { 
      title: "4. Enrobage", 
      text: "Mettre au point la couverture lait (1500g). Enrober les intérieurs à la fourchette en veillant à bien marquer le relief de la noisette. Poser sur feuille guitare ou papier cuisson." 
    }
  ],

  advices: ["La feuilletine craint l'humidité, assurez-vous que votre praliné et chocolat l'enrobent parfaitement."],
  chefQuote: "Le contraste entre le socle lisse, l'intérieur croustillant et la noisette croquante est la signature de ce bonbon.",
  equipment: ["Cadre à ganache", "Guitare", "Fourchettes à tremper"]
};

export default pralineCroustillantNoisetteIntense;