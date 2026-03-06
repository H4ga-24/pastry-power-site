const laPateAFoncer = {
  id: "la-pate-a-foncer",
  title: "La pâte à foncer",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "20 MIN + Repos",
  cookTime: "25 MIN",
  difficulty: "FACILE",
  description: "La pâte à foncer est une pâte intermédiaire entre la pâte brisée et la pâte sucrée. Elle est idéale pour les tartes aux fruits juteux, les flans pâtissiers ou les quiches salées grâce à sa bonne tenue.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/pate-a-foncer.jpg",
  baseServings: 1, // "1 Tarte de 24cm"
  
  ingredients: [
    { name: "Farine T55", amount: 250, unit: "g" },
    { name: "Beurre froid", amount: 125, unit: "g" },
    { name: "Sel fin", amount: 5, unit: "g" },
    { name: "Sucre semoule", amount: 10, unit: "g" },
    { name: "Jaune d'œuf", amount: 20, unit: "g" },
    { name: "Eau froide", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "SABLAGE", 
      text: "Sur le plan de travail ou dans la cuve du batteur, mélanger la farine, le sel et le sucre. Ajouter le beurre froid coupé en dés. Sabler le mélange (frotter entre les mains ou à la feuille) jusqu'à obtenir une texture de sable grossier." 
    },
    { 
      title: "CRÉATION DU PUITS", 
      text: "Faire un puits (une fontaine) au centre du mélange sableux." 
    },
    { 
      title: "AJOUT DES LIQUIDES", 
      text: "Mélanger le jaune d'œuf et l'eau froide. Verser ce liquide au centre du puits." 
    },
    { 
      title: "FRASAGE", 
      text: "Incorporer progressivement le sable aux liquides du bout des doigts ou à la corne. Écraser la pâte avec la paume de la main (fraser) 2 ou 3 fois pour homogénéiser sans trop pétrir (pour éviter qu'elle ne devienne élastique)." 
    },
    { 
      title: "REPOS", 
      text: "Former une boule aplatie, filmer au contact et laisser reposer au réfrigérateur au moins 1 heure (idéalement 2h) pour que le beurre raffermisse et que la pâte se détende." 
    },
    { 
      title: "FONÇAGE", 
      text: "Abaisser la pâte sur un plan de travail fariné à 3mm d'épaisseur. Foncer un cercle à tarte beurré. Piquer le fond si nécessaire." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à blanc à 170°C-180°C pendant environ 20-25 minutes, ou garnir selon la recette choisie." 
    }
  ],

  advices: ["Ne travaillez pas trop la pâte une fois mouillée, sinon elle rétrécira à la cuisson."],
  chefQuote: "Le frasage permet d'obtenir une pâte homogène sans activer le gluten.",
  equipment: ["Corne", "Rouleau à pâtisserie", "Cercle à tarte"]
};

export default laPateAFoncer;