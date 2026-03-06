const cremeMascarpone = {
  id: "creme-mascarpone",
  title: "Crème Mascarpone (Chantilly)",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "0 MIN",
  difficulty: "TRÈS FACILE",
  description: "Une crème riche, ferme et veloutée. Parfaite pour le tiramisu, ou comme base de chantilly mascarpone pour garnir des cupcakes ou lisser un gâteau.",
  image: "https://cuisinedaubery.com/wp-content/uploads/2023/11/creme-mascarpone-pab_ALTERN07.jpg",
  baseServings: 1, // Pour environ 400g
  
  ingredients: [
    { name: "Mascarpone", amount: 250, unit: "g" },
    { name: "Crème liquide 35% MG", amount: 150, unit: "g" },
    { name: "Sucre glace", amount: 40, unit: "g" },
    { name: "Extrait de vanille", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "La détente", 
      text: "Dans la cuve du robot froide, mettre le mascarpone froid et le fouetter quelques secondes pour le détendre." 
    },
    { 
      title: "L'ajout", 
      text: "Verser la crème liquide très froide, le sucre glace et la vanille sur le mascarpone." 
    },
    { 
      title: "Le montage", 
      text: "Fouetter le tout, d'abord doucement pour mélanger, puis augmenter la vitesse progressivement." 
    },
    { 
      title: "La consistance", 
      text: "Continuer de fouetter jusqu'à obtenir une crème montée ferme qui tient bien au fouet (bec d'oiseau ferme). Attention à ne pas transformer en beurre !" 
    }
  ],

  advices: [
    "Le secret est que tous les ingrédients (y compris le bol) soient bien froids. Le mascarpone chaud ne monte pas, il tranche."
  ],
  chefQuote: "C'est la crème idéale pour le pochage décoratif car elle a une tenue exceptionnelle grâce au gras du mascarpone.",
  equipment: [
    "Robot pâtissier",
    "Fouet"
  ]
};

export default cremeMascarpone;