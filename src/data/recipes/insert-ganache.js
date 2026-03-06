const insertGanache = {
  id: "insert-ganache",
  title: "Insert Ganache",
  category: "Pâtisserie",
  subCategory: ["Inserts"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "5 MIN",
  difficulty: "TRÈS FACILE",
  description: "Un insert riche et fondant au chocolat, apportant une intensité cacao au cœur de votre dessert.",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB3SLcdHg_smuwc3zbuyTP8_g8CGxi5XTxSQEH36E7JkZSazvhYvA49bPRI1008aZgTFm9dIRinQ2A72ZarD1aeYgemYUTqYYKQbhW8_8V1_eHEsCrIvpoF1pQye_ABUoxK2rZci8wKQ5Z/s2048/CAKE+VANILLE+INSERT+CHOC+2.jpeg",
  baseServings: 6,
  
  ingredients: [
    { name: "Chocolat noir 70%", amount: 150, unit: "g" },
    { name: "Crème liquide entière", amount: 150, unit: "ml" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Miel", amount: 15, unit: "g" }
  ],

  steps: [
    { 
      title: "FONTE", 
      text: "Hacher le chocolat finement et le placer dans un bol." 
    },
    { 
      title: "ÉBULLITION", 
      text: "Porter la crème et le miel à ébullition." 
    },
    { 
      title: "EMULSION", 
      text: "Verser la crème chaude sur le chocolat en 3 fois, en créant une émulsion élastique à la maryse." 
    },
    { 
      title: "FINITION", 
      text: "Ajouter le beurre en morceaux quand la ganache est à 40°C. Lisser. Couler dans des moules à insert." 
    }
  ],

  advices: ["Le miel apporte du moelleux et aide à conserver la texture fondante même après congélation."],
  chefQuote: "Une bonne émulsion doit être brillante et lisse, signe que le gras et l'eau sont bien liés.",
  equipment: ["Casserole", "Maryse", "Moule insert"]
};

export default insertGanache;