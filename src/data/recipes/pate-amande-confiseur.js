const pateAmandeConfiseur = {
  id: "pate-amande-confiseur",
  title: "Pâte d'amande confiseur",
  category: "Confiserie",
  subCategory: ["Pâtes de Fruits & Pâtes d'Amande"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "15 MIN",
  difficulty: "TECHNIQUE",
  description: "La véritable recette de la pâte d'amande confiseur cuite, bien supérieure à la pâte d'amande crue en termes de texture et de conservation.",
  image: "https://axelle.me/wp-content/uploads/2022/12/20221220_134842-1140x855.jpg",
  baseServings: 600,
  
  ingredients: [
    { name: "Amandes blanches entières", amount: 250, unit: "g" },
    { name: "Sucre semoule", amount: 250, unit: "g" },
    { name: "Eau", amount: 80, unit: "g" },
    { name: "Glucose", amount: 35, unit: "g" },
    { name: "Sucre inverti (Trimoline)", amount: 20, unit: "g" }
  ],

  steps: [
    { title: "BROYAGE", text: "Broyer finement les amandes et le sucre ensemble (tant pour tant) jusqu'à obtenir une poudre fine." },
    { title: "SIROP", text: "Cuire l'eau, le glucose et le sucre inverti à 118°C (petit boulé)." },
    { title: "CUISSON", text: "Verser le sirop sur la poudre d'amande/sucre. Mélanger vigoureusement (au batteur feuille ou à la spatule) pour dessécher la pâte comme une pâte à choux, jusqu'à ce qu'elle ne colle plus aux doigts." },
    { title: "REFROIDISSEMENT", text: "Débarrasser sur un marbre ou une feuille, filmer au contact et laisser refroidir complètement avant utilisation." }
  ],

  advices: ["Le broyage doit être assez fin, mais attention à ne pas faire ressortir l'huile des amandes."],
  chefQuote: "Cette pâte est parfaite pour le modelage ou l'intérieur de bonbons chocolat.",
  equipment: ["Robot coupe", "Casserole", "Thermomètre à sucre"]
};

export default pateAmandeConfiseur;