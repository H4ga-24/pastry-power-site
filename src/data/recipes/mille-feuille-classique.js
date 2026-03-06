const milleFeuilleClassique = {
  id: "mille-feuille-classique",
  title: "Mille-feuille Classique (Vanille & Marbrage)",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "2H 00",
  cookTime: "40 MIN",
  difficulty: "AVANCÉ",
  description: "Le summum de la texture : un feuilletage caramélisé croustillant qui contraste avec l'onctuosité d'une crème pâtissière vanille, le tout couronné par le mythique glaçage marbré.",
  image: "https://img.cuisineaz.com/660x660/2022/09/30/i188300-sans-titre-2022-09-30t115159-287.png",
  baseServings: 1, // "1 Mille-feuille (4 à 6 personnes)"
  
  ingredients: [
    { name: "Pâte feuilletée", amount: 500, unit: "g", note: "Feuilletage" },
    { name: "Sucre glace", amount: 50, unit: "g", note: "Feuilletage (caramélisation)" },
    { name: "Lait entier", amount: 500, unit: "g", note: "Crème Pâtissière" },
    { name: "Gousse de vanille", amount: 1, unit: "pc", note: "Crème Pâtissière" },
    { name: "Jaunes d'oeufs", amount: 80, unit: "g", note: "Crème Pâtissière" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Crème Pâtissière" },
    { name: "Maïzena (Fécule de maïs)", amount: 50, unit: "g", note: "Crème Pâtissière" },
    { name: "Beurre doux (froid)", amount: 50, unit: "g", note: "Crème Pâtissière" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Glaçage" },
    { name: "Eau (ou blanc d'oeuf)", amount: 30, unit: "g", note: "Glaçage" },
    { name: "Chocolat noir fondue", amount: 30, unit: "g", note: "Glaçage" },
    { name: "Nappage neutre", amount: 10, unit: "g", note: "Glaçage (facultatif)" }
  ],

  steps: [
    { 
      title: "Cuisson du Feuilletage", 
      text: "Étaler la pâte feuilletée sur une plaque de cuisson recouverte de papier sulfurisé (épaisseur 2-3mm). Piquer généreusement la pâte avec une fourchette. Poser une seconde feuille de papier sulfurisé et une seconde plaque par-dessus pour empêcher la pâte de trop gonfler. Cuire à 200°C pendant 20 min. Retirer la plaque du dessus, saupoudrer de sucre glace, et remettre au four (sans la plaque du dessus) à 230°C quelques minutes pour caraméliser (surveillance constante !). Laisser refroidir sur grille." 
    },
    { 
      title: "La Crème Pâtissière", 
      text: "Faire bouillir le lait avec la gousse de vanille grattée. Fouetter les jaunes et le sucre jusqu'à blanchiment, puis ajouter la Maïzena. Verser le lait bouillant sur le mélange en fouettant. Reverser le tout dans la casserole et cuire à ébullition 2 minutes sans cesser de fouetter. Hors du feu, incorporer le beurre froid en dés. Filmer au contact et refroidir complètement." 
    },
    { 
      title: "Montage", 
      text: "Détailler le feuilletage en 3 rectangles identiques. Fouetter la crème pâtissière froide pour la lisser. Garnir le premier rectangle de crème (poche à douille). Poser le second rectangle. Garnir de crème. Poser le troisième rectangle (côté lisse vers le haut)." 
    },
    { 
      title: "Glaçage", 
      text: "Mélanger le sucre glace et l'eau pour obtenir un fondant blanc assez épais. Étaler sur le dessus du mille-feuille. Tracer immédiatement des lignes de chocolat fondu (cornet). Rayer avec la pointe d'un couteau (aller-retour) pour créer le marbrage." 
    }
  ],

  advices: ["Montez votre mille-feuille au dernier moment si possible pour garder le croustillant."],
  chefQuote: "Pour une coupe nette, utilisez un couteau scie sans appuyer, en faisant un mouvement de va-et-vient.",
  equipment: ["Plaque de cuisson", "Casserole", "Couteau scie"]
};

export default milleFeuilleClassique;