const pralineSec = {
  id: "praline-sec",
  title: "Le praliné à sec",
  category: "Confiserie",
  subCategory: ["confiseries diverses"], // Adapté
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "20 MIN",
  difficulty: "MOYEN",
  description: "La technique traditionnelle du praliné où le caramel est réalisé séparément des fruits secs pour un goût de caramel plus prononcé et une texture intense.",
  image: "https://perleensucre.com/wp-content/uploads/2019/11/pate-de-praline.jpg",
  baseServings: 600, // g
  
  ingredients: [
    { name: "Noisettes entières", amount: 200, unit: "g" },
    { name: "Amandes entières", amount: 200, unit: "g" },
    { name: "Sucre semoule", amount: 250, unit: "g" },
    { name: "Fleur de sel", amount: 2, unit: "g" },
    { name: "Vanille", amount: 0.5, unit: "gousse", note: "optionnel" }
  ],

  steps: [
    { 
      title: "TORRÉFACTION", 
      text: "Torréfier les amandes et noisettes au four à 150°C pendant 20 minutes. Émonder (frotter) les noisettes pour enlever la peau. Les garder chaudes." 
    },
    { 
      title: "CARAMEL À SEC", 
      text: "Dans une casserole bien propre, verser un tiers du sucre. Laisser fondre et caraméliser sans remuer (juste en inclinant la casserole). Ajouter le deuxième tiers, puis le dernier tiers. Obtenir un caramel blond foncé." 
    },
    { 
      title: "MÉLANGE", 
      text: "Ajouter les fruits secs chauds, le sel et la vanille dans le caramel. Mélanger rapidement pour bien enrober. Verser immédiatement sur une plaque recouverte de papier cuisson ou un tapis silicone. Étaler et laisser refroidir." 
    },
    { 
      title: "MIXAGE", 
      text: "Casser la plaque de caramel aux fruits secs en morceaux. Mixer dans un robot coupe puissant en faisant des pauses (pour ne pas surchauffer le moteur et l'huile des fruits) jusqu'à obtenir une pâte fluide et lisse." 
    }
  ],

  advices: ["Les fruits secs doivent être chauds quand vous les mettez dans le caramel, sinon le caramel va figer instantanément (choc thermique)."],
  chefQuote: "Le praliné à sec a un goût de caramel plus marqué que le praliné sablé, il est parfait pour les mousses.",
  equipment: ["Casserole", "Robot coupe", "Plaque silicone"]
};

export default pralineSec;