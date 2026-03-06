const mousseGianduja = {
  id: "mousse-gianduja",
  title: "Mousse Gianduja",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse onctueuse au goût intense de noisette et de chocolat, parfaite pour les amateurs de praliné.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKjGuMbPfsDlzNUmPed-q6zEE78CIh_QoGH5wckN6Ov1mAefsKfGtQozWkkSNA1aC2ZswPYUs5R4uHflgMa5s7Wf_HtYDLKZsyaokqiitAvBdXvt390153nsWGdSN2Yt_YT_De692MGPyh/s660/creme-gianduja.jpg",
  baseServings: 1, // Pour 1 entremets
  
  ingredients: [
    { name: "Gianduja (chocolat noisette)", amount: 250, unit: "g" },
    { name: "Crème liquide (pour fondre)", amount: 100, unit: "ml" },
    { name: "Crème liquide 35% (pour monter)", amount: 300, unit: "ml" },
    { name: "Gélatine", amount: 2, unit: "g", note: "facultatif" }
  ],

  steps: [
    { 
      title: "FONTE", 
      text: "Faire fondre le Gianduja avec les 100ml de crème chaude." 
    },
    { 
      title: "GÉLATINE", 
      text: "Si utilisation en entremets, ajouter la gélatine hydratée dans le mélange chaud." 
    },
    { 
      title: "REFROIDISSEMENT", 
      text: "Laisser tiédir le mélange autour de 30°C-35°C." 
    },
    { 
      title: "CRÈME FOUETTÉE", 
      text: "Monter les 300ml de crème liquide en chantilly mousseuse." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la chantilly au mélange Gianduja." 
    },
    { 
      title: "DRESSAGE", 
      text: "Couler en cercle ou en verrines et laisser prendre au froid." 
    }
  ],

  advices: ["Le Gianduja est sucré et gras, il n'est pas nécessaire d'ajouter du sucre dans la chantilly."],
  chefQuote: "Une noisette torréfiée entière cachée au milieu surprendra agréablement à la dégustation.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseGianduja;