const chouxCreme = {
  id: "choux-creme",
  title: "Choux à la Crème & Craquelin",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"],
  isVip: false,
  prepTime: "45 MIN",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "Le chou moderne, recouvert d'un craquelin croustillant et garni d'une crème légère (Diplomate ou Chantilly Mascarpone).",
  image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/7d0a6d533f4d3e9d29b33c1a24aed322/Derivates/e2d49242fce10af2266dd38cb72860b5dbfccc55.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Pâte à choux", amount: 400, unit: "g" },
    { name: "Beurre doux", amount: 80, unit: "g", note: "Craquelin" },
    { name: "Cassonade", amount: 100, unit: "g", note: "Craquelin" },
    { name: "Farine", amount: 100, unit: "g", note: "Craquelin" },
    { name: "Crème liquide 35%", amount: 400, unit: "g", note: "Chantilly" },
    { name: "Mascarpone", amount: 100, unit: "g", note: "Chantilly" },
    { name: "Sucre glace", amount: 50, unit: "g", note: "Chantilly" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "Le Craquelin", 
      text: "Mélanger beurre pommade, cassonade et farine. Étaler finement (2mm) entre deux feuilles guitare. Congeler. Détailler des disques." 
    },
    { 
      title: "Cuisson", 
      text: "Dresser les choux. Poser un disque de craquelin congelé dessus. Cuire 30 min à 170°C. Le craquelin va envelopper le chou." 
    },
    { 
      title: "La Chantilly", 
      text: "Monter la crème, le mascarpone, le sucre glace et la vanille en chantilly ferme." 
    },
    { 
      title: "Montage", 
      text: "Couper le chapeau des choux refroidis. Garnir généreusement de crème à la poche (douille cannelée). Reposer le chapeau." 
    }
  ],

  advices: [
    "Le craquelin permet au chou de gonfler de manière très régulière et apporte du croustillant."
  ],
  chefQuote: "Le mascarpone dans la chantilly assure une tenue parfaite de la garniture, même après quelques heures.",
  equipment: [
    "Poche à douille",
    "Emporte-pièce rond",
    "Batteur"
  ]
};

export default chouxCreme;