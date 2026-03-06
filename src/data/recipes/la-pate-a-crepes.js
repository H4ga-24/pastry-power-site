const laPateACrepes = {
  id: "la-pate-a-crepes",
  title: "La pâte à crêpes",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "10 MIN + Repos",
  cookTime: "20 MIN",
  difficulty: "FACILE",
  description: "Un grand classique de la cuisine française. Cette recette garantit des crêpes fines, légères, parfumées et moelleuses.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/07/crepe-1-1300x975.jpg",
  baseServings: 15, // "15 Crêpes"
  
  ingredients: [
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Sucre semoule", amount: 30, unit: "g" },
    { name: "Sel fin", amount: 3, unit: "g" },
    { name: "Œufs entiers", amount: 200, unit: "g" },
    { name: "Lait entier", amount: 500, unit: "g" },
    { name: "Beurre fondu (noisette)", amount: 50, unit: "g" },
    { name: "Arôme (Rhum ou Vanille)", amount: 10, unit: "g" }
  ],

  steps: [
    { 
      title: "MÉLANGE DES POUDRES", 
      text: "Dans un cul de poule, tamiser la farine. Ajouter le sucre et le sel. Mélanger et creuser un puits au centre." 
    },
    { 
      title: "INCORPORATION DES OEUFS", 
      text: "Casser les œufs au centre du puits. Commencer à mélanger doucement au fouet depuis le centre, en incorporant petit à petit la farine des bords." 
    },
    { 
      title: "DÉTENTE", 
      text: "Lorsque le mélange devient épais et difficile à travailler, ajouter un peu de lait froid pour détendre la pâte. Continuer à fouetter vigoureusement pour éviter les grumeaux." 
    },
    { 
      title: "AJOUT DU LAIT", 
      text: "Verser le reste du lait progressivement tout en remuant." 
    },
    { 
      title: "FINITION", 
      text: "Préparer un beurre noisette (beurre cuit jusqu'à coloration ambrée et odeur de noisette). Le laisser tiédir et l'incorporer à la pâte, ainsi que l'arôme choisi. Filtrer au chinois si nécessaire." 
    },
    { 
      title: "REPOS", 
      text: "Laisser reposer la pâte au moins 30 minutes à 1 heure. Ce repos permet au gluten de se relâcher et à la farine de bien s'hydrater." 
    },
    { 
      title: "CUISSON", 
      text: "Graisser légèrement une crêpière chaude. Verser une louche, répartir rapidement. Cuire environ 1 min sur la première face (dorée), retourner et cuire quelques secondes sur la seconde face." 
    }
  ],

  advices: ["Si vous avez des grumeaux, un petit coup de mixeur plongeant et c'est réglé !"],
  chefQuote: "Le beurre noisette apporte ce petit goût de 'reviens-y' incomparable.",
  equipment: ["Crêpière", "Fouet", "Louche"]
};

export default laPateACrepes;