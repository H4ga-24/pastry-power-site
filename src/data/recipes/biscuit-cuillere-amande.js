const biscuitCuillereAmande = {
  id: "biscuit-cuillere-amande",
  title: "Biscuit Cuillère Amande",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "12-15 MIN",
  difficulty: "MOYEN",
  description: "Une variante plus riche et parfumée du biscuit cuillère traditionnel, apportant la rondeur et le moelleux de l'amande douce. Parfait pour des entremets fruités ou pralinés.",
  image: "https://www.mapatisserie.fr/wp-content/uploads/2019/08/recette-biscuit-cuillere-10.jpg",
  baseServings: 1, // 1 plaque
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 150, unit: "g" },
    { name: "Sucre semoule", amount: 125, unit: "g" },
    { name: "Jaunes d'œufs", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 50, unit: "g" },
    { name: "Fécule de pomme de terre", amount: 50, unit: "g" },
    { name: "Poudre d'amandes", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Les Poudres", 
      text: "Tamiser ensemble la farine et la fécule de pomme de terre. Ajouter la poudre d'amande et bien mélanger le tout." 
    },
    { 
      title: "La Meringue", 
      text: "Monter les blancs d'œufs au batteur. Les serrer en ajoutant progressivement le sucre semoule jusqu'à obtenir une meringue ferme." 
    },
    { 
      title: "L'Émulsion", 
      text: "Baisser la vitesse du batteur au minimum, verser les jaunes d'œufs d'un seul coup et stopper immédiatement l'appareil (les jaunes ne doivent être qu'à peine mélangés)." 
    },
    { 
      title: "Le Mélange", 
      text: "Incorporer délicatement le mélange des poudres (farine/fécule/amande) en pluie à l'aide d'une maryse." 
    },
    { 
      title: "Le Dressage et Cuisson", 
      text: "Dresser à la poche à douille sur une plaque recouverte de papier sulfurisé. Cuire dans un four préchauffé à 190°C pendant 12 à 15 minutes." 
    }
  ],

  // Les 3 catégories obligatoires standardisées
  advices: [
    "Pour un goût encore plus corsé et automnal, vous pouvez remplacer 10% ou 20% de la poudre d'amandes par de la poudre de noisettes torréfiées."
  ],
  chefQuote: "La présence de la fécule n'est pas là par hasard : elle apporte une légèreté indispensable qui vient compenser le poids et le gras de la poudre d'amandes. Ne la supprimez pas au profit d'un 100% farine !",
  equipment: [
    "Poche à douille",
    "Douille unie 10mm",
    "Maryse",
    "Tamis"
  ]
};

export default biscuitCuillereAmande;