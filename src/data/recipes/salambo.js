const salambo = {
  id: "salambo",
  title: "Salambo",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Adapté de "Classiques" pour être consistant
  isVip: false,
  prepTime: "1H",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "Aussi appelé 'Gland', ce chou de forme oblongue est garni d'une crème pâtissière parfumée au Kirsch et glacé d'un fondant vert pâle, avec une extrémité au chocolat.",
  image: "https://www.jullien-patisserie.fr/images/products_images/34/vO1Fr-FMzDo.jpeg",
  baseServings: 6, // pièces
  
  ingredients: [
    { name: "Pâte à choux", amount: 350, unit: "g" },
    { name: "Crème pâtissière", amount: 450, unit: "g" },
    { name: "Kirsch", amount: 25, unit: "g" },
    { name: "Fondant pâtissier", amount: 250, unit: "g" },
    { name: "Colorant vert", amount: 1, unit: "trait" },
    { name: "Vermicelles chocolat", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Dressage", 
      text: "Avec une douille unie de 14mm, dressez des choux en forme d'œuf ou de gland (environ 7-8 cm de long, plus court et trapu qu'un éclair). Dorez à l'œuf." 
    },
    { 
      title: "Cuisson", 
      text: "Enfournez à 180°C pendant 30 minutes environ. Les Salambos doivent être bien développés et dorés." 
    },
    { 
      title: "Garniture", 
      text: "Lissez la crème pâtissière froide au fouet et incorporez le Kirsch (selon goût). Percez le dessous des choux et garnissez-les généreusement." 
    },
    { 
      title: "Glaçage", 
      text: "Chauffez le fondant à 35°C et colorez-le en vert très pâle (couleur traditionnelle). Trempez le dessus du Salambo." 
    },
    { 
      title: "Finition", 
      text: "Avant que le fondant ne fige complètement, trempez l'extrémité la plus large du chou dans les vermicelles en chocolat pour imiter la cupule du gland." 
    }
  ],

  advices: ["Le chocolat vermicelle doit être appliqué immédiatement après le trempage dans le fondant, avant qu'il ne fige.", "Si vous n'aimez pas le Kirsch, vous pouvez le faire au Grand Marnier (glaçage rose)."],
  chefQuote: "Le Salambo est un classique un peu oublié qui mérite sa place en vitrine. L'alliance Kirsch et crème pâtissière est un marqueur fort de la tradition française.",
  equipment: ["Poche à douille", "Douille unie 14mm", "Casserole pour bain-marie"]
};

export default salambo;