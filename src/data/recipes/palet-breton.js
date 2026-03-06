const paletBreton = {
  id: "palet-breton",
  title: "Palet Breton",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Le palet breton est un biscuit sablé emblématique, riche en beurre demi-sel et friable à souhait. Une base parfaite aussi pour des entremets.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/11/palets-bretons.jpg",
  baseServings: 10,
  
  ingredients: [
    { name: "Beurre demi-sel", amount: 160, unit: "g" },
    { name: "Sucre glace", amount: 120, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 40, unit: "g" },
    { name: "Farine courante", amount: 200, unit: "g" },
    { name: "Levure Chimique", amount: 6, unit: "g" },
    { name: "Vanille liquide", amount: 5, unit: "g" }
  ],

  steps: [
    { 
      title: "RÉALISATION DE LA PÂTE", 
      text: "Dans la cuve du batteur, crémer le beurre pommade avec le sucre glace. Ajouter les jaunes tempérés et émulsionner. Ajouter la vanille. Enfin, incorporer délicatement la farine tamisée avec la levure chimique. Fraser sans corser la pâte." 
    },
    { 
      title: "REPOS AU FRAIS", 
      text: "Filmer la pâte au contact et la placer au frais (réfrigérateur) pendant au moins 2 heures pour qu'elle raffermisse." 
    },
    { 
      title: "DÉTAILLAGE", 
      text: "Beurrer des cercles de 6cm de diamètre. Étaler la pâte entre deux règles à environ 5mm ou 1cm d'épaisseur selon le résultat souhaité. Détailler des disques à l'emporte-pièce et les placer dans les cercles beurrés." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire au four à sol ou ventilé à 200°C pendant environ 15 minutes. Les palets doivent être bien dorés. Démouler sur plaque et laisser refroidir." 
    }
  ],

  advices: ["La cuisson en cercles est indispensable, sinon la pâte s'étale trop à la cuisson."],
  chefQuote: "Le beurre demi-sel est l'âme de ce biscuit, n'utilisez surtout pas de beurre doux !",
  equipment: ["Cercles à tartelettes (6cm)", "Batteur", "Rouleau à pâtisserie"]
};  

export default paletBreton;     