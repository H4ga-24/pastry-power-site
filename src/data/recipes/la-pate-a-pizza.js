const laPateAPizza = {
  id: "la-pate-a-pizza",
  title: "La pâte à pizza",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "20 MIN + Repos",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "La base incontournable de la cuisine italienne. Une pâte fine, croustillante à l'extérieur et moelleuse à l'intérieur, avec une belle corniche.",
  image: "https://odelices.ouest-france.fr/images/recettes/2015/pate_a_pizza.jpg",
  baseServings: 4, // "4 Pizzas"
  
  ingredients: [
    { name: "Farine T55 (ou T00)", amount: 500, unit: "g" },
    { name: "Eau tiède", amount: 300, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 15, unit: "g" },
    { name: "Huile d'olive", amount: 30, unit: "g" }
  ],

  steps: [
    { 
      title: "MÉLANGE", 
      text: "Dans le bol du robot, verser la farine et le sel d'un côté. Émietter la levure de l'autre. Ajouter l'eau et l'huile d'olive." 
    },
    { 
      title: "PÉTRISSAGE", 
      text: "Pétrir au crochet à vitesse lente pendant 10 minutes. La pâte doit devenir lisse, élastique et se décoller des parois." 
    },
    { 
      title: "POINTAGE (1ère Pousse)", 
      text: "Former une boule, la huiler légèrement, couvrir d'un linge humide et laisser lever 1h à 2h à température ambiante (elle doit doubler de volume)." 
    },
    { 
      title: "DIVISION ET BOULAGE", 
      text: "Diviser la pâte en pâtons de 200-220g. Les bouler (leur donner une forme ronde et lisse). Laisser reposer 30 min couverts." 
    },
    { 
      title: "FAÇONNAGE", 
      text: "Étaler chaque pâton à la main sur un plan fariné, en chassant l'air du centre vers les bords pour former le trottoir (la croûte)." 
    },
    { 
      title: "GARNITURE ET CUISSON", 
      text: "Garnir selon vos envies. Cuire dans un four préchauffé au maximum (250°C-270°C) pendant 8 à 12 minutes, idéalement sur une pierre à pizza chaude." 
    }
  ],

  advices: ["Laissez la pâte maturer 24h au frigo pour encore plus de goût et de digestibilité."],
  chefQuote: "N'utilisez jamais de rouleau à pâtisserie, vous écraseriez les bulles d'air.",
  equipment: ["Robot pétrisseur (crochet)", "Pierre à pizza (idéalement)"]
};

export default laPateAPizza;