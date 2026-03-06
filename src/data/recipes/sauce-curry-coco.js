const sauceCurryCoco = {
  id: "sauce-curry-coco",
  title: "La Sauce Curry Coco",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Une sauce d'inspiration indienne, onctueuse et parfumée. Très rapide à réaliser, elle transforme un simple blanc de poulet ou des crevettes en un plat exotique.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f9a7f35f28f0b226c9c48be83f28e751.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Oignon", amount: 1, unit: "pce" },
    { name: "Gousses d'ail", amount: 2, unit: "pcs" },
    { name: "Huile d'olive", amount: 2, unit: "c.à.s" },
    { name: "Poudre de Curry", amount: 1, unit: "c.à.s" },
    { name: "Farine", amount: 1, unit: "c.à.s" },
    { name: "Lait de coco", amount: 400, unit: "ml" },
    { name: "Sel et Poivre noir", amount: 1, unit: "Q.S.P" }
  ],

  steps: [
    { 
      title: "La Base Aromatique", 
      text: "Épluchez et hachez finement l'oignon et les gousses d'ail. Dans une poêle, faites chauffer l'huile d'olive. Ajoutez le hachis et faites suer pendant 5 minutes." 
    },
    { 
      title: "La Torréfaction (Le Roux épicé)", 
      text: "Ajoutez la poudre de curry et la farine directement dans la poêle. Mélangez bien pendant 1 à 2 minutes pour cuire la farine et torréfier le curry." 
    },
    { 
      title: "Le Mouillage", 
      text: "Versez le lait de coco progressivement dans la poêle tout en remuant constamment avec un fouet ou une cuillère en bois." 
    },
    { 
      title: "La Liaison", 
      text: "Continuez de remuer jusqu'à ce que la sauce épaississe et atteigne une consistance nappante et crémeuse. Assaisonnez et servez chaud." 
    }
  ],

  advices: ["Secouez bien la boîte de lait de coco avant de l'ouvrir pour mélanger la crème (épaisse) et l'eau de coco."],
  chefQuote: "La torréfaction des épices est indispensable : un curry non torréfié laisse une sensation poudreuse en bouche.",
  equipment: ["Poêle ou sauteuse", "Fouet"]
};

export default sauceCurryCoco;