const bonbonMouleCaramelMangue = {
  id: "bonbon-moule-caramel-mangue",
  title: "Bonbon MoulÃ© Caramel Mangue",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "2H + 2H (Repos)",
  cookTime: "30 MIN",
  difficulty: "INTERMÃ‰DIAIRE",
  description: "Une coque fine en chocolat au lait renfermant un cÅ“ur coulant de caramel exotique Ã  la mangue. L'alliance parfaite entre la douceur lactÃ©e et le fruitÃ© acidulÃ©.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8c854e72d9bd134985b3024ad0d26079.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Caramel" },
    { name: "Sirop de glucose", amount: 25, unit: "g", note: "Caramel" },
    { name: "PurÃ©e de mangue", amount: 85, unit: "g", note: "Chaude" },
    { name: "CrÃ¨me fleurette 35%", amount: 45, unit: "g", note: "Chaude" },
    { name: "Beurre doux", amount: 25, unit: "g", note: "Finition" },
    { name: "Couverture Lait 40%", amount: 500, unit: "g", note: "Moulage" }
  ],

  steps: [
    { 
      title: "Le Caramel Mangue", 
      text: "Chauffer la crÃ¨me et la purÃ©e de mangue ensemble (sans bouillir). RÃ©aliser un caramel Ã  sec (couleur blonde) avec le sucre et le glucose. Ne pas trop pousser la couleur pour prÃ©server le goÃ»t du fruit." 
    },
    { 
      title: "Le DÃ©glaÃ§age", 
      text: "DÃ©glacer le caramel avec le mÃ©lange crÃ¨me/mangue chaud (attention aux projections). Cuire le tout jusqu'Ã  106Â°C prÃ©cisÃ©ment." 
    },
    { 
      title: "L'Emulsion", 
      text: "Hors du feu, attendre que la tempÃ©rature redescende vers 45Â°C, puis incorporer le beurre coupÃ© en dÃ©s et Ã©mulsionner au mixeur plongeant. Laisser refroidir Ã  27-28Â°C." 
    },
    { 
      title: "Le Moulage", 
      text: "Mouler les coques en chocolat lait. Laisser cristalliser." 
    },
    { 
      title: "Garnissage et Obturation", 
      text: "Pocher le caramel dans les coques (laisser 2mm). Laisser croÃ»ter 2h. Obturer avec du chocolat lait tempÃ©rÃ©." 
    }
  ],

  advices: [
    "La tempÃ©rature de 106Â°C est critique : en dessous, le caramel sera trop liquide ; au-dessus, trop dur."
  ],
  chefQuote: "La mangue apporte une onctuositÃ© naturelle. Chauffez toujours le liquide avant de dÃ©glacer pour Ã©viter le choc thermique.",
  equipment: [
    "Moule Polycarbonate",
    "ThermomÃ¨tre",
    "Mixeur"
  ]
};

export default bonbonMouleCaramelMangue;
