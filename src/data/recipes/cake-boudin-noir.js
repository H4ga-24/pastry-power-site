const cakeBoudinNoir = {
  id: "cake-boudin-noir",
  title: "Cake Boudin Noir & Pomme",
  category: "Pâtisserie",
  subCategory: ["Cakes Salés"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "45 MIN",
  difficulty: "FACILE",
  description: "L'alliance classique et sucrée-salée du boudin noir et de la pomme dans un cake moelleux.",
  image: "https://www.delicimo.fr/wp-content/uploads/2017/06/IMG_1830.jpg",
  baseServings: 8, 
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine T55", amount: 150, unit: "g" },
    { name: "Levure chimique", amount: 10, unit: "g" },
    { name: "Huile végétale", amount: 100, unit: "g" },
    { name: "Lait entier", amount: 125, unit: "g" },
    { name: "Gruyère râpé", amount: 100, unit: "g" },
    { name: "Boudin noir", amount: 200, unit: "g" },
    { name: "Pomme reinette", amount: 1, unit: "pièce" },
    { name: "Beurre", amount: 20, unit: "g" },
    { name: "Crème fraîche", amount: 15, unit: "g" },
    { name: "Eau", amount: 50, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" },
    { name: "Poivre", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "La garniture", 
      text: "Éplucher et couper la pomme en dés. Enlever la peau du boudin et couper en rondelles. Faire revenir le tout dans le beurre à la poêle." 
    },
    { 
      title: "L'appareil", 
      text: "Mélanger farine et levure. Ajouter les œufs, l'huile, le lait, l'eau et la crème fraîche. Mélanger pour lisser." 
    },
    { 
      title: "Le mélange", 
      text: "Incorporez le gruyère et le mélange boudin/pommes refroidi. Assaisonner." 
    },
    { 
      title: "Cuisson", 
      text: "Verser dans un moule à cake. Cuire 45 min à 180°C." 
    }
  ],

  advices: [
    "Choisissez une pomme qui tient à la cuisson (type Reinette ou Golden) pour garder des morceaux fondants."
  ],
  chefQuote: "Un mariage de terroir parfait pour l'automne.",
  equipment: [
    "Poêle",
    "Moule à cake"
  ]
};

export default cakeBoudinNoir;