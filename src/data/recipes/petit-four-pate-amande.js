const petitFourPateAmande = {
  id: "petit-four-pate-amande",
  title: "Petit four poche pâte d'amande 50%",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "10 MIN",
  difficulty: "DIFFICILE",
  description: "Des petits fours traditionnels à base de pâte d'amande riche, dressés à la poche pour des formes élégantes.",
  image: "https://img.over-blog.com/500x375/3/18/00/24/patiss-25/cafe-gourmand-2.JPG",
  baseServings: 20, // pièces
  
  ingredients: [
    { name: "Pâte d'amande 50%", amount: 300, unit: "g" },
    { name: "Blancs d'œufs", amount: 60, unit: "g" },
    { name: "Sucre glace", amount: 20, unit: "g", note: "facultatif" },
    { name: "Fruits confits (décor)", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "ASSOUPLISSEMENT", 
      text: "Ramollir légèrement la pâte d'amande au batteur avec la feuille ou à la main." 
    },
    { 
      title: "INCORPORATION", 
      text: "Ajouter les blancs d'œufs très progressivement (presque goutte à goutte) tout en battant pour détendre la pâte sans la rendre liquide." 
    },
    { 
      title: "CONSISTANCE", 
      text: "La pâte doit être souple mais tenir sa forme (bec d'oiseau ferme)." 
    },
    { 
      title: "DRESSAGE", 
      text: "Pocher avec une douille cannelée sur une plaque doublée." 
    },
    { 
      title: "DÉCOR", 
      text: "Ajouter un morceau de fruit confit sur le dessus." 
    },
    { 
      title: "SÉCHAGE", 
      text: "Laisser croûter 1h à température ambiante." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à four très chaud (220°C) pendant 5 à 8 minutes. Ils doivent juste dorer sur les arêtes." 
    }
  ],

  advices: ["Le croûtage (séchage avant cuisson) permet aux petits fours de garder leurs jolies stries à la cuisson."],
  chefQuote: "Un grand classique des mignardises qui demande un vrai coup de main à la poche.",
  equipment: ["Poche à douille", "Douille cannelée", "Batteur (feuille)"]
};

export default petitFourPateAmande;