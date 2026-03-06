const religieuse = {
  id: "religieuse",
  title: "Religieuse",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Adapté de "Classiques" pour plus de précision
  isVip: false,
  prepTime: "1H 45",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "L'élégance à la française. Deux choux superposés garnis de crème pâtissière, glacés au fondant et décorés d'une collerette de crème au beurre.",
  image: "https://www.paul-reygrobellet.fr/WORDPRESS/wp-content/uploads/2019/04/patissier-religieuse-tradition-reygrobellet.jpg",
  baseServings: 4, // pièces
  
  ingredients: [
    { name: "Pâte à choux", amount: 300, unit: "g" },
    { name: "Crème pâtissière", amount: 500, unit: "g" },
    { name: "Arôme (Café ou Chocolat)", amount: 20, unit: "g" },
    { name: "Fondant pâtissier", amount: 300, unit: "g" },
    { name: "Beurre pommade", amount: 100, unit: "g", note: "pour la crème au beurre" },
    { name: "Sucre glace", amount: 50, unit: "g", note: "pour la crème au beurre" }
  ],

  steps: [
    { 
      title: "Cuisson des corps", 
      text: "Dressez des gros choux de 5-6 cm (le corps) et des petits choux de 3 cm (la tête). Enfournez 25-35 min à 170°C. Séchez bien les choux." 
    },
    { 
      title: "Garniture", 
      text: "Aromatisez votre crème pâtissière au café ou au chocolat. Percez le fond des choux. Garnissez généreusement les gros et les petits choux." 
    },
    { 
      title: "Glaçage", 
      text: "Mettez au point le fondant (35°C) coloré selon le parfum. Trempez le dessus des gros et des petits choux. Laissez figer le glaçage." 
    },
    { 
      title: "Crème au beurre", 
      text: "Fouettez le beurre pommade avec le sucre glace (et un peu d'arôme) jusqu'à blanchiment. Mettez en poche avec une petite douille cannelée." 
    },
    { 
      title: "Montage", 
      text: "Déposez le petit chou sur le gros chou (le fondant permet parfois de coller, sinon une pointe de crème au beurre). Pochez des petites flammes de crème au beurre tout autour de la jonction pour former la collerette." 
    }
  ],

  advices: ["Le fondant ne doit jamais dépasser 37°C, sinon il perd sa brillance et devient terne en séchant."],
  chefQuote: "La collerette en crème au beurre sert de ciment entre les deux choux tout en apportant de la gourmandise.",
  equipment: ["Poche à douille", "Douille cannelée fine", "Casserole (bain-marie)"]
};
 
export default religieuse;