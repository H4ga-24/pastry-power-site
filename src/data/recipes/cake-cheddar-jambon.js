const cakeCheddarJambon = {
  id: "cake-cheddar-jambon",
  title: "Cake Cheddar, Jambon & Bière",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "Un cake aux accents anglo-saxons (ou du Nord !) où la bière apporte légèreté et caractère à la pâte.",
  image: "https://www.femmeactuelle.fr/imgre/fit/~1~fac~2018~07~30~b5ecf743-2674-48fb-b9fb-d7087a682fe6.jpeg/1200x900/focusPoint/50%2C50/cake-au-cheddar-au-jambon-a-la-biere-et-a-la-moutarde.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 3, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Jambon blanc", amount: 150, unit: "g" },
    { name: "Cheddar", amount: 50, unit: "g" },
    { name: "Moutarde", amount: 15, unit: "g" },
    { name: "Bière blonde", amount: 30, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "Garniture", 
      text: "Couper le jambon et le cheddar en petits dés." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine, levure et œufs. Incorporer l'huile, le lait tiède, la bière et la moutarde. Mélanger vigoureusement." 
    },
    { 
      title: "Mélange", 
      text: "Ajouter le gruyère, le jambon et le cheddar. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "La bière agit comme un agent levant supplémentaire grâce aux bulles, rendant le cake plus aéré."
  ],
  chefQuote: "Utilisez un cheddar vieux (mature) pour plus de goût, le cheddar jeune fondra sans laisser beaucoup d'arôme.",
  equipment: [
    "Moule à cake",
    "Cul-de-poule"
  ]
};

export default cakeCheddarJambon;