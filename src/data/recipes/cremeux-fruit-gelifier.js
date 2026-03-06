const cremeuxFruitGelifier = {
  id: "cremeux-fruit-gelifier",
  title: "Crémeux aux Fruits (Haute Tenue)",
  category: "Pâtisserie",
  subCategory: ["Crémeux"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une variante de crémeux aux fruits mettant l'accent sur la tenue et la texture (plus gélifiée), idéale pour les pochages nets et les entremets hauts.",
  image: "https://img.cuisineaz.com/1024x576/2015/07/07/i27035-chantilly-aux-fruits-rouges.webp",
  baseServings: 6, 
  
  ingredients: [
    { name: "Purée de fruit (au choix)", amount: 250, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Œufs entiers", amount: 75, unit: "g" },
    { name: "Sucre semoule", amount: 65, unit: "g" },
    { name: "Gélatine (feuille)", amount: 5, unit: "g" },
    { name: "Beurre doux", amount: 90, unit: "g" }
  ],

  steps: [
    { 
      title: "La cuisson", 
      text: "Chauffer la purée. Mélanger œufs, jaunes et sucre. Cuire à la nappe (83°C)." 
    },
    { 
      title: "Le collage renforcé", 
      text: "Ajouter la gélatine essorée hors du feu (quantité plus importante ici pour la tenue). Chinoiser." 
    },
    { 
      title: "L'émulsion", 
      text: "Refroidir à 35-40°C. Incorporer le beurre et mixer longuement pour lisser." 
    },
    { 
      title: "La prise", 
      text: "Laisser cristalliser au frais au moins 6h avant de pocher." 
    }
  ],

  advices: [
    "Cette base fonctionne avec presque tous les fruits (fraise, abricot, cassis...). Ajustez le sucre selon l'acidité du fruit."
  ],
  chefQuote: "C'est la recette 'tout-terrain' des pâtissiers pour avoir un crémeux fruit qui ne s'affaisse pas à la coupe.",
  equipment: [
    "Mixeur plongeant",
    "Poche à douille",
    "Casserole"
  ]
};

export default cremeuxFruitGelifier;