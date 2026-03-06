const gougere = {
  id: "gougere",
  title: "Gougère au Comté",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"], // Catégorie adaptée (Apéritif -> Pâte à Choux)
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "30 MIN",
  difficulty: "FACILE",
  description: "Une pâte à choux salée, enrichie de Comté affiné et parfumée à la muscade. Un classique bourguignon parfait pour l'apéritif.",
  image: "https://www.saveursfrance.com/wp-content/uploads/2025/11/hassan8524_closeup_zoomed-in_amateur_photo_from_pinterest_style_316e9e48-ab0f-45b8-91d4-335f307516bf-1.webp",
  baseServings: 6,
  
  ingredients: [
    { name: "Eau", amount: 125, unit: "g" },
    { name: "Lait", amount: 125, unit: "g" },
    { name: "Beurre", amount: 100, unit: "g" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Oeufs", amount: 250, unit: "g" },
    { name: "Comté râpé (vieux)", amount: 150, unit: "g" },
    { name: "Sel fin", amount: 5, unit: "g" },
    { name: "Noix de muscade", amount: 1, unit: "pincée" },
    { name: "Poivre noir", amount: 2, unit: "tours" }
  ],

  steps: [
    { 
      title: "Réalisation de la pâte", 
      text: "Dans une casserole, portez à ébullition l'eau, le lait, le sel, le poivre et le beurre. Hors du feu, ajoutez la farine. Desséchez sur le feu 2 minutes. Débarrassez et incorporez les œufs un par un." 
    },
    { 
      title: "Assaisonnement", 
      text: "Lorsque la pâte est lisse, ajoutez la muscade râpée et les 3/4 du Comté râpé. Mélangez bien à la spatule pour répartir le fromage uniformément." 
    },
    { 
      title: "Dressage", 
      text: "Dressez des choux moyens sur plaque. Parsemer du reste de Comté râpé sur le dessus." 
    },
    { 
      title: "Cuisson", 
      text: "Cuire à 180°C pendant 25 à 30 minutes. N'ouvrez pas le four avant la fin. Laisser refroidir sur grille." 
    }
  ],

  advices: ["Le Comté vieux a moins d'humidité et plus de goût, c'est l'idéal pour ne pas détremper la pâte."],
  chefQuote: "Elles se congèlent très bien crues. Il suffira de les cuire un peu plus longtemps sans décongélation.",
  equipment: ["Casserole", "Spatule", "Poche à douille"]
};

export default gougere;