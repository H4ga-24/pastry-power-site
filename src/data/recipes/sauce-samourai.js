const sauceSamourai = {
  id: "sauce-samourai",
  title: "La Sauce Samouraï",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "30 MIN (Repos)",
  difficulty: "TRÈS FACILE",
  description: "L'incontournable des friteries belges. Une sauce mayonnaise épicée, onctueuse et légèrement sucrée pour contrebalancer le feu du piment.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/7a4553917837540ebc6acbee58944c6e.jpg",
  baseServings: 1, // bol
  
  ingredients: [
    { name: "Mayonnaise", amount: 0.5, unit: "tasse" },
    { name: "Ketchup", amount: 0.25, unit: "tasse" },
    { name: "Sauce Piquante (Harissa/Sriracha)", amount: 1, unit: "c.à.s" },
    { name: "Moutarde", amount: 1, unit: "c.à.c" },
    { name: "Sauce Soja", amount: 1, unit: "c.à.s" },
    { name: "Miel ou Sucre", amount: 1, unit: "c.à.c" },
    { name: "Sel et Poivre", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "La Base", 
      text: "Dans un bol, mélangez la mayonnaise avec la moutarde et le ketchup jusqu'à obtenir une couleur homogène orangée." 
    },
    { 
      title: "La Montée en Chaleur", 
      text: "Ajoutez la sauce piquante progressivement. Goûtez au fur et à mesure pour ajuster le niveau d'épice selon votre tolérance." 
    },
    { 
      title: "L'Assaisonnement", 
      text: "Incorporez la sauce soja et le miel (ou le sucre). Mélangez bien pour dissoudre le sucre. Salez et poivrez." 
    },
    { 
      title: "Le Repos (Crucial)", 
      text: "Laissez reposer au réfrigérateur pendant au moins 30 minutes pour que les arômes du piment se diffusent dans le gras de la mayonnaise." 
    }
  ],

  advices: ["Utilisez une mayonnaise bien ferme, car l'ajout des liquides (soja, ketchup) va la détendre."],
  chefQuote: "Le secret d'une Samouraï équilibrée est la pointe de sucre qui tapisse le palais avant que le piment ne frappe.",
  equipment: ["Bol", "Fouet à main"]
};

export default sauceSamourai;