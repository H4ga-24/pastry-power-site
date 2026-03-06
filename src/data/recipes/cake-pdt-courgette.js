const cakePdtCourgette = {
  id: "cake-pdt-courgette",
  title: "Cake P. de Terre & Courgette",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "1H 30",
  difficulty: "MOYEN",
  description: "Un cake très riche et fondant, cuit au bain-marie pour une texture proche du flan ou de la terrine de légumes.",
  image: "https://static.comment-economiser.fr/images/photos_astuces/cake-courgette-pdt-6609.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 8, unit: "pièces" },
    { name: "Crème épaisse", amount: 500, unit: "g" },
    { name: "Beurre", amount: 50, unit: "g" },
    { name: "Farine", amount: 100, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Pommes de terre", amount: 2, unit: "pièces" },
    { name: "Courgettes", amount: 2, unit: "pièces" },
    { name: "Huile d'olive", amount: 30, unit: "g" },
    { name: "Muscade", amount: 1, unit: "pincée" },
    { name: "Persil et cerfeuil", amount: 2, unit: "branches" },
    { name: "Sel", amount: 2, unit: "pincées" },
    { name: "Poivre", amount: 2, unit: "pincées" }
  ],

  steps: [
    { 
      title: "Les légumes", 
      text: "Éplucher les pommes de terre, laver les courgettes. Couper le tout en petits dés. Faire revenir à la poêle dans l'huile d'olive et le beurre. Assaisonner." 
    },
    { 
      title: "L'appareil à flan", 
      text: "Dans un grand bol, battre les œufs avec la crème fraîche et la farine tamisée. Ajouter la muscade, le sel, le poivre et les herbes ciselées." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporer les légumes tiédis et le gruyère râpé à l'appareil liquide." 
    },
    { 
      title: "La cuisson bain-marie", 
      text: "Verser dans un moule à cake beurré. Placer ce moule dans un grand plat rempli d'eau chaude (bain-marie). Enfourner pour 1h30 à 180°C." 
    }
  ],

  advices: [
    "La cuisson au bain-marie est essentielle pour obtenir cette texture fondante sans dessécher les bords."
  ],
  chefQuote: "C'est plus une terrine qu'un cake classique, délicieux servi tiède avec une salade verte.",
  equipment: [
    "Plat à bain-marie",
    "Moule à cake",
    "Poêle"
  ]
};

export default cakePdtCourgette;