const mousseFraise = {
  id: "mousse-fraise",
  title: "Mousse Fraise",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse printanière au bon goût de fraise fraîche.",
  image: "https://assets.afcdn.com/recipe/20221013/136048_w1024h1024c1cx1608cy1072cxt0cyt0cxb3216cyb2144.webp",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Purée de fraise", amount: 300, unit: "g" },
    { name: "Sucre", amount: 40, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Jus de citron", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer un tiers de la purée de fraise avec le sucre." 
    },
    { 
      title: "COLLAGE", 
      text: "Ajouter la gélatine essorée hors du feu. Ajouter le reste de purée froide et le citron." 
    },
    { 
      title: "MONTAGE", 
      text: "Fouetter la crème en chantilly mousseuse." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer la crème à la purée gélifiée refroidie (20-25°C)." 
    },
    { 
      title: "FINITION", 
      text: "Garnir votre entremets ou verrines." 
    }
  ],

  advices: ["Choisissez des fraises très parfumées (Mara des bois, Gariguette) si vous faites votre purée maison."],
  chefQuote: "Le jus de citron est un exhausteur de goût naturel pour la fraise.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseFraise;