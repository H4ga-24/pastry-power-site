const appareilCremePriseSalee = {
  id: "appareil-creme-prise-salee",
  title: "Appareil à Crème Prise Salée",
  category: "Cuisine", 
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "40 MIN",
  difficulty: "TRÈS FACILE",
  description: "La base indispensable et inratable pour toutes vos quiches, tartes salées et flans de légumes. Une texture soyeuse et un équilibre parfait.",
  image: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_1500,q_auto,w_1500/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/15/appareil-a-creme-prise-sale-0.jpg",
  baseServings: 450, // mL
  
  ingredients: [
    { name: "Oeufs entiers", amount: 150, unit: "g" },
    { name: "Crème liquide 35%", amount: 150, unit: "g" },
    { name: "Lait entier", amount: 150, unit: "g" },
    { name: "Sel fin", amount: 4, unit: "g" },
    { name: "Poivre du moulin", amount: 1, unit: "pincée" },
    { name: "Noix de muscade", amount: 1, unit: "pincée" }
  ],

  steps: [
    {
      title: "Préparation des œufs",
      text: "Dans un cul-de-poule, casser les œufs. Les battre légèrement à la fourchette ou au fouet pour les lier sans chercher à incorporer de l'air."
    },
    {
      title: "Mélange des liquides",
      text: "Ajouter la crème liquide et le lait entier. Mélanger doucement jusqu'à l'obtention d'un liquide homogène."
    },
    {
      title: "Assaisonnement",
      text: "Ajouter le sel, le poivre et la noix de muscade fraîchement râpée. C'est le secret d'une quiche savoureuse."
    },
    {
      title: "Utilisation & Cuisson",
      text: "Verser l'appareil sur votre fond de tarte déjà garni. Cuire à 180°C pendant 35 à 45 minutes. L'appareil doit être figé et légèrement doré."
    }
  ],

  advices: [
    "Pour une quiche plus légère, remplacez une partie de la crème par du lait. Pour une version \"Traiteur\" très riche, n'utilisez que de la crème 35%."
  ],
  chefQuote: "Ne lésinez pas sur la noix de muscade, c'est elle qui donne l'identité à cet appareil. Si vous utilisez des garnitures déjà salées (lardons, fromage), réduisez légèrement la dose de sel."
};

export default appareilCremePriseSalee;