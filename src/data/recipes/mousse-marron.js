const mousseMarron = {
  id: "mousse-marron",
  title: "Mousse Marron",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "Une mousse riche et réconfortante à la saveur d'automne, parfaite pour les bûches.",
  image: "https://ellemijotequelquechose.com/wp-content/uploads/2020/12/Mousse-a-la-creme-de-marrons-500x500.jpg",
  baseServings: 1, // Pour 1 cercle
  
  ingredients: [
    { name: "Pâte de marron", amount: 150, unit: "g" },
    { name: "Crème de marron", amount: 150, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Rhum (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Réhydrater la gélatine." 
    },
    { 
      title: "MÉLANGE", 
      text: "Détendre la pâte de marron avec la crème de marron et le rhum. Chauffer légèrement une petite partie pour fondre la gélatine." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine fondue au mélange de marrons." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly." 
    },
    { 
      title: "FINITION", 
      text: "Mélanger délicatement les deux masses." 
    },
    { 
      title: "DRESSAGE", 
      text: "Pocher ou couler." 
    }
  ],

  advices: ["Le mélange pâte + crème de marron permet d'avoir à la fois la tenue et le goût sucré."],
  chefQuote: "Des brisures de marrons glacés ajoutées à la fin apportent une texture luxueuse.",
  equipment: ["Batteur", "Cul-de-poule", "Maryse"]
};

export default mousseMarron;