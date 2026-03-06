const cremeBavaroiseNoisette = {
  id: "creme-bavaroise-noisette",
  title: "Crème Bavaroise Noisette",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: true,
  prepTime: "25 MIN",
  restTime: "2 HEURES",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "Une bavaroise gourmande enrichie au praliné noisette, parfaite pour les desserts d'automne ou les entremets chocolat-noisette.",
  image: "https://img.cuisineaz.com/1024x1024/2017/02/02/i119550-bavarois-aux-noisettes.jpeg",
  baseServings: 1, 
  
  ingredients: [
    { name: "Lait entier", amount: 250, unit: "g" },
    { name: "Praliné noisette", amount: 100, unit: "g" },
    { name: "Jaunes d'œufs", amount: 60, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Gélatine (feuille)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "L'anglaise", 
      text: "Réaliser une crème anglaise classique avec le lait, les jaunes et le peu de sucre." 
    },
    { 
      title: "Le praliné", 
      text: "Incorporer le praliné noisette et la gélatine réhydratée dans la crème anglaise chaude. Mixer au plongeant pour une émulsion parfaite." 
    },
    { 
      title: "Refroidissement", 
      text: "Laisser refroidir à 25°C." 
    },
    { 
      title: "Finition", 
      text: "Incorporer la crème montée mousseuse." 
    }
  ],

  advices: [
    "Le mixeur plongeant est indispensable pour bien incorporer le praliné qui est gras à la base aqueuse de l'anglaise."
  ],
  chefQuote: "Si vous trouvez cela trop sucré, remplacez le praliné par de la pâte pure de noisette.",
  equipment: [
    "Mixeur plongeant",
    "Casserole",
    "Maryse"
  ]
};

export default cremeBavaroiseNoisette;