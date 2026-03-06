const biscuitAmandes = {
  id: "biscuit-amandes",
  title: "Biscuit aux Amandes",
  category: "Pâtisserie",
  subCategory: ["Biscuits"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Un biscuit d'une grande onctuosité grâce à la pâte d'amande. Sa texture souple en fait une base idéale pour le montage de vos entremets et cadres.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/07/biscuit-aux-amandes.png",
  baseServings: 1, // 1 dose
  
  ingredients: [
    { name: "Jaunes d'oeufs", amount: 220, unit: "g" },
    { name: "Sucre semoule", amount: 150, unit: "g" },
    { name: "Pâte d'amande 50%", amount: 200, unit: "g" },
    { name: "Blancs d'oeuf", amount: 350, unit: "g" },
    { name: "Farine T55", amount: 100, unit: "g" },
    { name: "Fécule de pomme de terre", amount: 100, unit: "g" }
  ],

  steps: [
    { title: "Détendre la pâte d'amande", text: "Dans la cuve du robot munie de la feuille, détendre la pâte d'amande avec une petite partie des blancs d'œufs non montés pour lisser la masse." },
    { title: "Monter l'appareil", text: "Monter les jaunes d'œufs avec le sucre semoule au ruban. Parallèlement, monter le reste des blancs d'œufs (pas trop fermes)." },
    { title: "Mélange", text: "Incorporer l'appareil jaunes/sucre à la masse d'amande détendue à l'aide d'une maryse. Ajouter ensuite les blancs montés délicatement." },
    { title: "Finition de la pâte", text: "Incorporer en pluie le mélange farine et fécule préalablement tamisé. Mélanger doucement pour garder un maximum d'air." },
    { title: "Cuisson", text: "Étaler régulièrement sur une plaque recouverte de papier sulfurisé. Cuire à 180°C pendant environ 10 minutes. Le biscuit doit rester souple et clair." }
  ]
};

export default biscuitAmandes;