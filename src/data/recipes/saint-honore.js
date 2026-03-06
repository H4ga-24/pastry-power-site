const saintHonore = {
  id: "saint-honore",
  title: "Saint-Honoré",
  category: "Pâtisserie",
  subCategory: ["Entremets"], // Mis à jour comme dans le commentaire de ton code
  isVip: false,
  prepTime: "2H",
  cookTime: "40 MIN",
  difficulty: "AVANCÉ",
  description: "Le patron des boulangers. Une base de feuilletage, une couronne de choux caramélisés et une crème Chiboust (ou Chantilly) dressée à la douille spécifique.",
  image: "https://www.patisserie-et-gourmandise.com/wp-content/uploads/2018/03/saint-honore-2.jpg",
  baseServings: 6, // parts
  
  ingredients: [
    { name: "Pâte feuilletée", amount: 250, unit: "g" },
    { name: "Pâte à choux", amount: 200, unit: "g" },
    { name: "Sucre (Caramel)", amount: 200, unit: "g" },
    { name: "Eau (Caramel)", amount: 60, unit: "g" },
    { name: "Glucose (Caramel)", amount: 40, unit: "g" },
    { name: "Crème pâtissière", amount: 300, unit: "g", note: "Pour la Chiboust" },
    { name: "Blancs d'œufs", amount: 150, unit: "g", note: "Pour la meringue italienne" },
    { name: "Sucre", amount: 150, unit: "g", note: "Pour la meringue italienne" },
    { name: "Gélatine", amount: 4, unit: "g", note: "Pour la Chiboust" }
  ],

  steps: [
    { 
      title: "La Base", 
      text: "Détaillez un disque de pâte feuilletée de 22cm. Piquez-le. Dressez une couronne de pâte à choux sur le bord du disque, et une spirale au centre. Dressez à côté une vingtaine de petits choux individuels. Enfournez 30-40 min à 180°C." 
    },
    { 
      title: "Le Caramel", 
      text: "Faites cuire le sucre, l'eau et le glucose jusqu'à obtention d'un caramel blond soutenu (160°C). Arrêtez la cuisson en trempant le fond de la casserole dans l'eau froide." 
    },
    { 
      title: "Glaçage et Collage", 
      text: "Trempez le sommet des petits choux dans le caramel (attention aux brûlures). Laissez refroidir. Trempez ensuite la base des choux dans le caramel et collez-les sur la couronne de pâte à choux du fond." 
    },
    { 
      title: "Crème Chiboust", 
      text: "Incorporez la gélatine ramollie dans la crème pâtissière chaude. Réalisez une meringue italienne avec les blancs et le sucre cuit à 121°C. Incorporez délicatement la meringue à la crème pâtissière tiède." 
    },
    { 
      title: "Dressage", 
      text: "Avec une douille à Saint-Honoré, dressez la crème Chiboust au centre du gâteau en formant des chevrons réguliers. Réservez au frais." 
    }
  ],

  advices: ["Travaillez rapidement le caramel avant qu'il ne durcisse. Prévoyez un bol d'eau froide à proximité en cas de brûlure.", "Si vous n'aimez pas la Chiboust, une crème Chantilly vanillée bien ferme fonctionne aussi."],
  chefQuote: "Le Saint-Honoré est le gâteau technique par excellence. Il allie le croquant du caramel, le croustillant du feuilletage et la légèreté de la crème.",
  equipment: ["Douille à Saint-Honoré", "Thermomètre à sucre", "Casserole fond épais"]
};

export default saintHonore;