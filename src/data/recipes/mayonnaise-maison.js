const mayonnaiseMaison = {
  id: "mayonnaise-maison",
  title: "Mayonnaise Maison",
  category: "cuisine", // "Cuisine" est la catégorie la plus adaptée pour les sauces
  subCategory: ["Sauces"], // Catégorie adaptée (Cuisine -> Bases)
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "0 MIN",
  difficulty: "MOYEN",
  description: "Le grand classique indispensable. Une émulsion froide stable qui sert de base à de nombreuses autres sauces (Cocktail, Tartare, Andalouse...).",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/4bab0dd2583c8929df512f3d8fce6e78.jpg",
  baseServings: 1, // Bol
  
  ingredients: [
    { name: "Huile de tournesol", amount: 250, unit: "ml", note: "(ou arachide, huile neutre)" },
    { name: "Jaune d'œuf", amount: 1, unit: "pièce", note: "(température ambiante)" },
    { name: "Moutarde", amount: 15, unit: "g" },
    { name: "Vinaigre", amount: 1, unit: "c.à.s", note: "(blanc ou cidre)" },
    { name: "Sel", amount: 1, unit: "Q.S.P" }
  ],

  steps: [
    { 
      title: "1. La Base (Le Noyau)", 
      text: "Dans un bol ou un cul-de-poule, mettez le jaune d'œuf, la moutarde, une pincée de sel et la moitié du vinaigre. Mélangez ces ingrédients au fouet pour obtenir une base homogène. Laissez reposer 1 minute." 
    },
    { 
      title: "2. Le Départ de l'Émulsion", 
      text: "Commencez à fouetter énergiquement le mélange tout en incorporant l'huile très doucement (en filet fin ou goutte à goutte au début). C'est l'étape critique." 
    },
    { 
      title: "3. La Montée", 
      text: "Une fois que la sauce commence à épaissir et que l'émulsion est stable, vous pouvez verser le reste de l'huile plus rapidement, sans cesser de fouetter vigoureusement. La mayonnaise doit devenir ferme." 
    },
    { 
      title: "4. La Finition (Le Blanchiment)", 
      text: "Pour terminer, ajoutez le reste du vinaigre tout en fouettant. Cela va légèrement 'blanchir' la mayonnaise et détendre un peu sa texture." 
    }
  ],

  advices: ["Tous les ingrédients doivent être à la même température (ambiante) pour réussir l'émulsion."],
  chefQuote: "Si votre mayonnaise tranche (l'huile se sépare), recommencez dans un autre bol avec une cuillère d'eau chaude et incorporez petit à petit la mayonnaise ratée en fouettant.",
  equipment: ["Fouet", "Cul-de-poule", "Torchon (pour caler le bol)"]
};

export default mayonnaiseMaison;