const tarteAuChocolat = {
  id: "tarte-au-chocolat",
  title: "Tarte au Chocolat",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Le summum de la gourmandise : une pâte sablée cacaotée ultra-croustillante garnie d'une ganache noire intense, fondante et brillante.",
  image: "https://empreintesucree.fr/wp-content/uploads/2020/05/1-tarte-chocolat-recette-empreinte-sucree-1.jpg",
  baseServings: 6, // 1 tarte 22cm
  
  ingredients: [
    { name: "Pâte sucrée cacao", amount: 300, unit: "g" },
    { name: "Chocolat noir 65-70%", amount: 300, unit: "g" },
    { name: "Crème liquide entière", amount: 250, unit: "g" },
    { name: "Lait entier", amount: 50, unit: "g" },
    { name: "Beurre doux", amount: 40, unit: "g" },
    { name: "Miel ou Glucose", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "Cuisson du fond", 
      text: "Foncer un cercle à tarte de 22-24cm avec la pâte sucrée cacao. Piquer le fond. Cuire à blanc à 160°C pendant 20 à 25 minutes. La pâte doit être bien sèche et cuite à cœur. Laisser refroidir." 
    },
    { 
      title: "Préparation de la ganache", 
      text: "Hacher le chocolat finement. Dans une casserole, porter à ébullition la crème, le lait et le miel." 
    },
    { 
      title: "Émulsion", 
      text: "Verser le liquide bouillant sur le chocolat en 3 fois. À chaque ajout, mélanger vivement à la maryse en décrivant de petits cercles au centre pour créer une émulsion élastique et brillante." 
    },
    { 
      title: "Finition de la ganache", 
      text: "Lorsque la ganache atteint 35-40°C, ajouter le beurre coupé en dés. Mixer au mixeur plongeant sans incorporer d'air pour lisser parfaitement." 
    },
    { 
      title: "Montage", 
      text: "Couler immédiatement la ganache dans le fond de tarte refroidi. Tapoter légèrement pour lisser la surface et faire remonter les bulles d'air. Laisser cristalliser 2h à température ambiante (20°C) puis mettre au frais." 
    }
  ],

  advices: ["Sortez la tarte du frigo 20 minutes avant la dégustation pour que la ganache retrouve son fondant parfait."],
  chefQuote: "Le miel (sucre inverti) permet à la ganache de ne pas fendre au froid et lui donne une brillance miroir exceptionnelle.",
  equipment: ["Cercle à tarte perforé", "Maryse", "Mixeur plongeant"]
};

export default tarteAuChocolat; 