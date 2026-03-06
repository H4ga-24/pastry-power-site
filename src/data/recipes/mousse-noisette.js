const mousseNoisette = {
  id: "mousse-noisette",
  title: "Mousse Noisette",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse pralinée intense, parfaite pour garnir un Paris-Brest revisité ou des entremets.",
  image: "https://kissmychef.com/wp-content/uploads/2022/11/mousse-500x500.png",
  baseServings: 4, // personnes (selon baseServings du fichier)
  
  ingredients: [
    { name: "Praliné noisette", amount: 150, unit: "g" },
    { name: "Crème liquide 35% (pour fondre)", amount: 50, unit: "ml" },
    { name: "Crème liquide 35% (froide)", amount: 250, unit: "ml" },
    { name: "Gélatine", amount: 2, unit: "feuilles" },
    { name: "Mascarpone", amount: 50, unit: "g", note: "facultatif" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine dans l'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer les 50ml de crème liquide. Y faire fondre la gélatine essorée." 
    },
    { 
      title: "ÉMULSION", 
      text: "Verser la crème chaude sur le praliné en 3 fois, en frictionnant pour créer une émulsion élastique et brillante." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème liquide froide (et le mascarpone si utilisé) en chantilly souple." 
    },
    { 
      title: "MÉLANGE", 
      text: "Quand le mélange praliné est tiède (35°C), incorporer délicatement la chantilly." 
    },
    { 
      title: "UTILISATION", 
      text: "Utiliser de suite pour garnir ou mettre en verrines." 
    }
  ],

  advices: ["Le mascarpone aide à stabiliser la mousse et la rend plus onctueuse."],
  chefQuote: "Pour un goût plus corsé, ajoutez une cuillère de pâte de noisette pure.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseNoisette;