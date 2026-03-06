const lesFlorentin = {
  id: "les-florentin",
  title: "Les florentin",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "12 MIN",
  difficulty: "MOYEN",
  description: "Des disques croustillants aux amandes, fruits confits et caramel, dont une face est enduite de chocolat.",
  image: "https://www.delscookingtwist.com/wp-content/uploads/2018/12/Chocolate-Florentines.jpg",
  baseServings: 12,
  
  ingredients: [
    { name: "Sucre", amount: 100, unit: "g" },
    { name: "Miel", amount: 30, unit: "g" },
    { name: "Crème liquide", amount: 80, unit: "g" },
    { name: "Beurre", amount: 30, unit: "g" },
    { name: "Amandes effilées", amount: 100, unit: "g" },
    { name: "Fruits confits (orange/cerise)", amount: 50, unit: "g" },
    { name: "Chocolat noir (finition)", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "SIROP", 
      text: "Cuire le sucre, le miel, la crème et le beurre à 118°C." 
    },
    { 
      title: "GARNITURE", 
      text: "Ajouter les amandes et les fruits confits. Mélanger." 
    },
    { 
      title: "DRESSAGE", 
      text: "Déposer des petits tas dans des cercles beurrés ou moules flexipan (le mélange s'étale)." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 170°C pendant 10 à 12 minutes jusqu'à coloration caramel." 
    },
    { 
      title: "FINITION", 
      text: "Après refroidissement, badigeonner la face plate de chocolat fondu et faire des stries avec une fourchette." 
    }
  ],

  advices: ["Le sirop doit être assez cuit pour que le florentin tienne, mais pas trop pour ne pas être dur."],
  chefQuote: "L'amande effilée est la reine ici, ne la remplacez pas par de la poudre.",
  equipment: ["Casserole", "Moules flexipan plats", "Spatule"]
};

export default lesFlorentin;