const entremetsBavaroisVanille = {
  id: "entremets-bavarois-vanille",
  title: "Entremets Bavarois Vanille & Cœur Chocolat",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false,
  prepTime: "2H 30",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "Un classique indémodable du CAP Pâtissier. Une mousse bavaroise onctueuse à la vanille qui cache un cœur fondant de crémeux chocolat, le tout entouré d'une cartouchière de biscuit à la cuillère moelleux.",
  image: "https://www.maspatule.com/blog/wp-content/uploads/2023/05/IMG_4440-03-1440x811.jpeg",
  baseServings: 1, // 1 Entremets de 20 cm
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 125, unit: "g", note: "Insert Crémeux" },
    { name: "Lait entier", amount: 125, unit: "g", note: "Insert Crémeux" },
    { name: "Jaunes d'oeufs", amount: 50, unit: "g", note: "Insert Crémeux" },
    { name: "Sucre semoule", amount: 30, unit: "g", note: "Insert Crémeux" },
    { name: "Chocolat noir 65%", amount: 120, unit: "g", note: "Insert Crémeux" },
    { name: "Blancs d'oeufs", amount: 120, unit: "g", note: "Biscuit Cuillère" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Biscuit Cuillère" },
    { name: "Jaunes d'oeufs", amount: 80, unit: "g", note: "Biscuit Cuillère" },
    { name: "Farine T55", amount: 100, unit: "g", note: "Biscuit Cuillère" },
    { name: "Sucre glace", amount: 50, unit: "g", note: "Poudrage" },
    { name: "Lait entier", amount: 250, unit: "g", note: "Bavaroise" },
    { name: "Gousse de vanille", amount: 1, unit: "pc", note: "Bavaroise" },
    { name: "Jaunes d'oeufs", amount: 60, unit: "g", note: "Bavaroise" },
    { name: "Sucre semoule", amount: 60, unit: "g", note: "Bavaroise" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g", note: "Bavaroise" },
    { name: "Crème liquide 35% montée", amount: 250, unit: "g", note: "Bavaroise" },
    { name: "Eau", amount: 50, unit: "g", note: "Sirop" },
    { name: "Sucre", amount: 50, unit: "g", note: "Sirop" },
    { name: "Vanille liquide", amount: 5, unit: "g", note: "Sirop" },
    { name: "Eau", amount: 50, unit: "g", note: "Glaçage (Optionnel)" },
    { name: "Sucre", amount: 60, unit: "g", note: "Glaçage (Optionnel)" },
    { name: "Cacao", amount: 20, unit: "g", note: "Glaçage (Optionnel)" },
    { name: "Crème", amount: 35, unit: "g", note: "Glaçage (Optionnel)" },
    { name: "Gélatine", amount: 2, unit: "g", note: "Glaçage (Optionnel)" }
  ],

  steps: [
    { 
      title: "J-1 : Insert Crémeux Chocolat", 
      text: "Réaliser une crème anglaise (cuire lait+crème+jaunes+sucre à 85°C). Verser sur le chocolat en 3 fois (émulsion). Couler dans un cercle de 16cm filmé. Congeler." 
    },
    { 
      title: "Biscuit Cuillère", 
      text: "Monter les blancs, serrer avec le sucre. Ajouter les jaunes délicatement. Incorporer la farine tamisée. Dresser 2 disques de 16cm et une bande cartouchière. Saupoudrer de sucre glace. Cuire 10-12 min à 180°C." 
    },
    { 
      title: "Bavaroise Vanille", 
      text: "Réaliser une crème anglaise collée à la gélatine. Refroidir à 25°C. Incorporer la crème montée mousseuse." 
    },
    { 
      title: "Montage", 
      text: "Disposer la cartouchière dans le cercle de 20cm. Poser un disque de biscuit au fond. Imbiber. Couler une partie de la mousse. Poser l'insert congelé. Recouvrir de mousse. Poser le 2nd disque de biscuit. Lisser." 
    },
    { 
      title: "Finition", 
      text: "Décorer avec des fruits frais, du nappage neutre ou un glaçage." 
    }
  ],

  advices: [
    "Pour une cartouchière bien nette, dressez vos biscuits collés les uns aux autres et coupez la base droite après cuisson."
  ],
  chefQuote: "Le secret de la bavaroise est la température du mélange avant d'incorporer la crème : trop chaud, ça retombe ; trop froid, ça graine.",
  equipment: [
    "Cercle 20cm",
    "Cercle 16cm",
    "Poche à douille",
    "Thermomètre"
  ]
};

export default entremetsBavaroisVanille;