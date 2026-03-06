const laPateAChoux = {
  id: "la-pate-a-choux",
  title: "La Pâte à Choux",
  category: "Pâtisserie",
  subCategory: ["Gâteaux"], // Selon ton fichier, mais "Pâte à Choux" serait mieux. Je garde "Gâteaux" pour respecter l'extraction.
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "La recette mère indispensable. Une pâte précuite sur le feu (desséchée) puis hydratée aux œufs, qui gonfle grâce à la vapeur emprisonnée lors de la cuisson.",
  image: "https://gourmantissimes.com/wp-content/uploads/2013/07/2013-07-06-IMG-4465.jpg",
  baseServings: 500, // g
  
  ingredients: [
    { name: "Eau", amount: 125, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Beurre doux", amount: 100, unit: "g" },
    { name: "Sel fin", amount: 4, unit: "g" },
    { name: "Sucre semoule", amount: 5, unit: "g" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Oeufs entiers", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "Ébullition des liquides", 
      text: "Dans une casserole à fond épais, versez l'eau, le lait, le sel, le sucre et le beurre coupé en petits dés. Portez le mélange à franche ébullition. Le beurre doit être totalement fondu avant que l'ébullition ne soit trop forte pour éviter l'évaporation excessive." 
    },
    { 
      title: "La Panade", 
      text: "Hors du feu, jetez la farine tamisée en une seule fois dans le liquide bouillant. Mélangez vivement à la spatule jusqu'à ce qu'il n'y ait plus de farine sèche visible." 
    },
    { 
      title: "Le Desséchage", 
      text: "Remettez la casserole sur feu moyen. Remuez sans cesse avec la spatule en écrasant la pâte contre les parois et le fond. La pâte doit se décoller des parois et former une boule lisse. Une fine pellicule doit se former au fond de la casserole (2 à 3 minutes)." 
    },
    { 
      title: "Incorporation des œufs", 
      text: "Débarrassez la panade dans un cul-de-poule (ou la cuve du robot avec la feuille). Laissez tiédir quelques instants. Incorporez les œufs battus en 4 ou 5 fois, en mélangeant énergiquement entre chaque ajout. Attendez que l'œuf soit absorbé avant d'en rajouter." 
    },
    { 
      title: "Le contrôle de texture", 
      text: "La pâte est prête lorsqu'elle est lisse, brillante et forme un 'bec d'oiseau' ou un ruban cassant lorsqu'on soulève la spatule. Tracez un sillon dans la pâte avec le doigt : il doit se refermer doucement." 
    },
    { 
      title: "Dressage et Cuisson", 
      text: "Mettez en poche à douille immédiatement. Dressez sur plaque graissée ou tapis silicone. Enfournez à 180°C (four statique de préférence) pour 25 à 40 min selon la taille. N'ouvrez jamais la porte du four pendant les 20 premières minutes." 
    }
  ],

  advices: ["Si la pâte est trop sèche, ajoutez un peu d'œuf battu chaud. Si elle est trop liquide, c'est fichu (ne rajoutez jamais de farine crue !)."],
  chefQuote: "Pour des choux réguliers, dorez-les légèrement et rayez-les avec une fourchette trempée dans l'eau.",
  equipment: ["Casserole", "Spatule rigide", "Poche à douille"]
};

export default laPateAChoux;