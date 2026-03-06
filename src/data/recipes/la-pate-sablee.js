const laPateSablee = {
  id: "la-pate-sablee",
  title: "La pâte sablée",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "La pâte sablée est friable et fondante. Elle est plus fragile que la pâte sucrée mais offre une texture incomparable.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/50e093126b2f472de47af55426b80bcc.jpg",
  baseServings: 10,
  
  ingredients: [
    { name: "Farine type 55", amount: 250, unit: "g" },
    { name: "Poudre d'amande", amount: 40, unit: "g" },
    { name: "Sucre cassonade", amount: 120, unit: "g" },
    { name: "Sel fin", amount: 1, unit: "g" },
    { name: "Beurre", amount: 100, unit: "g" },
    { name: "Oeuf", amount: 40, unit: "g" },
    { name: "Beurre allégé (ou beurre)", amount: 40, unit: "g" } // Note: "Beurre allégé" original, peut-être une spécificité de la source, je garde tel quel.
  ],

  steps: [
    { 
      title: "MÉLANGE SEC", 
      text: "Dans la cuve du batteur, mélanger la farine, la poudre d'amande, le sucre cassonade et le sel." 
    },
    { 
      title: "SABLAGE", 
      text: "Ajouter les beurres froids coupés en dés et sabler le mélange à la feuille (vitesse lente) jusqu'à obtenir une texture sableuse." 
    },
    { 
      title: "LIANT", 
      text: "Ajouter l'oeuf et mélanger brièvement jusqu'à ce que la pâte s'agglomère." 
    },
    { 
      title: "FRAISAGE", 
      text: "Fraser légèrement la pâte sur le plan de travail pour homogénéiser sans donner de corps." 
    },
    { 
      title: "REPOS", 
      text: "Laisser reposer 1 heure au frais filmé au contact." 
    },
    { 
      title: "UTILISATION", 
      text: "Étaler et utiliser selon votre recette. Réserver au froid une heure avant cuisson." 
    }
  ],

  advices: ["Étalez la pâte entre deux feuilles de papier cuisson pour éviter de rajouter de la farine."],
  chefQuote: "La texture sablée vient de l'enrobage de la farine par le gras avant l'ajout de l'œuf.",
  equipment: ["Robot pâtissier (feuille)", "Rouleau à pâtisserie"]
};

export default laPateSablee;