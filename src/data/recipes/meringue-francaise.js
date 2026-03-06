const meringueFrancaise = {
  id: "meringue-francaise",
  title: "Meringue Française",
  category: "Pâtisserie",
  subCategory: ["Mousses"], // Ou "Bases" ou "Meringues"
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "1H30",
  difficulty: "FACILE",
  description: "La technique la plus simple pour réaliser des meringues sèches, croustillantes et légères.",
  image: "https://files.meilleurduchef.com/mdc/photo/recette/meringue-francaise/meringue-francaise-etape-13-480.jpg",
  baseServings: 10, // meringues
  
  ingredients: [
    { name: "Blancs d'oeufs", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" }
  ],

  steps: [
    { 
      title: "PRÉPARATION", 
      text: "Commencer à fouetter les blancs d'oeufs à vitesse moyenne." 
    },
    { 
      title: "SERRAGE 1", 
      text: "Dès que les blancs moussent, ajouter un tiers du sucre semoule." 
    },
    { 
      title: "SERRAGE 2", 
      text: "Continuer de fouetter et ajouter le reste du sucre semoule progressivement pour obtenir un 'bec d'oiseau'." 
    },
    { 
      title: "INCORPORATION", 
      text: "Incorporer délicatement le sucre glace tamisé à la maryse." 
    },
    { 
      title: "CUISSON", 
      text: "Dresser sur plaque et cuire à 90°C - 100°C pendant 1h30 à 2h pour les dessécher." 
    }
  ],

  advices: ["Ne dépassez pas 100°C, sinon la meringue va brunir (réaction de Maillard)."],
  chefQuote: "Le sucre glace apporte de la finesse et aide à avoir une texture bien lisse.",
  equipment: ["Batteur", "Poche à douille", "Tapis de cuisson"]
};

export default meringueFrancaise;