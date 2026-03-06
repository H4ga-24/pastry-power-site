const biscuitAuMarron = {
  id: "biscuit-au-marron",
  title: "Biscuit au Marron",
  category: "Pâtisserie",
  subCategory: ["Biscuits", "Gâteaux de Voyage"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "30 MIN",
  difficulty: "FACILE",
  description: "Un gâteau de voyage au goût automnal profond. Sa texture est exceptionnellement moelleuse grâce à l'utilisation de pâte de marrons.",
  image: "https://empreintesucree.fr/wp-content/uploads/2019/11/1-gateau-moelleux-marrons-recette-patisserie-empreinte-sucree.jpg", // J'ai ajouté une image par défaut au cas où
  baseServings: 6,
  
  ingredients: [
    { name: "Pâte ou crème de marrons sucrée", amount: 300, unit: "g" },
    { name: "Oeufs", amount: 3, unit: "pièces" },
    { name: "Beurre fondu", amount: 60, unit: "g" },
    { name: "Farine", amount: 50, unit: "g" },
    { name: "Levure chimique", amount: 3, unit: "g" }
  ],

  steps: [
    { title: "MÉLANGE", text: "Dans un cul-de-poule, détendre la crème de marron avec le beurre fondu." },
    { title: "OEUFS", text: "Séparer les blancs des jaunes. Incorporer les jaunes d'oeufs un par un dans le mélange à la crème de marron." },
    { title: "POUDRES", text: "Tamiser la farine avec la levure chimique. Ajouter ce mélange à la préparation précédente et mélanger sans trop travailler la pâte." },
    { title: "BLANCS", text: "Monter les blancs en neige ferme (avec une pincée de sel). Incorporer délicatement les blancs à la préparation à l'aide d'une maryse, en soulevant la masse pour ne pas les casser." },
    { title: "CUISSON", text: "Verser dans un moule beurré et fariné (20-22cm). Cuire à 180°C pendant 30 à 35 minutes. La lame d'un couteau doit ressortir sèche." }
  ],

  advices: [
    "La crème de marron est lourde : si vous mélangez trop vite les blancs, ils vont retomber et le gâteau sera compact. Soyez très délicat.",
    "Ce gâteau est encore meilleur le lendemain, quand les arômes de marron se sont diffusés."
  ],
  chefQuote: "C'est le gâteau réconfortant par excellence. Pour une version dessert, servez-le avec une crème anglaise vanillée peu sucrée pour balancer le sucre du marron.",
  equipment: [
    "Moule à manqué 20cm",
    "Batteur électrique",
    "Maryse",
    "Tamis"
  ]
};

export default biscuitAuMarron;