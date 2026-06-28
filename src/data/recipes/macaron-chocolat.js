const macaronChocolat = {
  id: "macaron-chocolat",
  title: "Macaron Chocolat",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "1H 30",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "L'alliance parfaite d'une coque croquante au cacao et d'une ganache intense au chocolat noir 70%. Une recette détaillée pas à pas pour la réussir à coup sûr.",
  image: "/images/recipes/macaron-chocolat.png",
  baseServings: 70, // coques
  
  ingredients: [
    // --- COQUES ---
    { name: "Tant pour tant", amount: 475, unit: "g", note: "Coques (Mélange 50% poudre d'amande / 50% sucre glace)" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques (à rajouter au tant pour tant)" },
    { name: "Poudre de cacao", amount: 25, unit: "g", note: "Coques (cacao amer non sucré)" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques (idéalement à température ambiante)" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques (pour serrer les blancs)" },
    { name: "Purée d'abricots", amount: 10, unit: "g", note: "Coques (Le secret du moelleux)" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques (ou un trait de jus de citron)" },
    { name: "Colorant rouge", amount: 5, unit: "gouttes", note: "Coques (pour intensifier la couleur du cacao)" },
    
    // --- GANACHE ---
    { name: "Chocolat noir 70%", amount: 350, unit: "g", note: "Ganache (idéalement chocolat de couverture)" },
    { name: "Crème liquide entière", amount: 270, unit: "g", note: "Ganache (30% ou 35% MG)" },
    { name: "Lait entier", amount: 100, unit: "g", note: "Ganache" },
    { name: "Sucre inverti", amount: 20, unit: "g", note: "Ganache (ou miel neutre type acacia)" },
    { name: "Beurre doux", amount: 40, unit: "g", note: "Ganache (coupé en dés, à température ambiante)" }
  ],

  steps: [
    { 
      title: "Préparation des poudres (Coques)", 
      text: "Dans un mixeur (robot-coupe), versez le tant pour tant, le sucre glace supplémentaire, la poudre de cacao et la purée d'abricot. Mixez brièvement pour affiner l'ensemble, puis passez ce mélange au tamis fin pour éviter les grumeaux." 
    },
    { 
      title: "La meringue française (Coques)", 
      text: "Dans la cuve de votre batteur, commencez à monter les blancs d'œufs avec la crème de tartre (ou le citron) et environ 10% du sucre semoule. Quand ils commencent à mousser, ajoutez le colorant rouge. Une fois les blancs bien montés, ajoutez le reste du sucre semoule et fouettez pour les 'serrer' et les rendre bien brillants." 
    },
    { 
      title: "Le macaronnage (Coques)", 
      text: "Incorporez le mélange de poudres tamisées dans la meringue en plusieurs fois. Mélangez délicatement avec une maryse en raclant le fond et en rabattant sur le dessus (c'est le macaronnage). Arrêtez-vous dès que la pâte forme un 'ruban' continu en retombant de la spatule." 
    },
    { 
      title: "Pochage et cuisson (Coques)", 
      text: "Pochez des ronds réguliers sur une plaque recouverte de papier cuisson. Enfournez à 150°C. Cuisez 4 à 5 minutes avec la porte du four fermée, puis poursuivez la cuisson 12 à 14 minutes en entrouvrant très légèrement la porte du four (glissez le manche d'une cuillère en bois) pour laisser l'humidité s'échapper." 
    },
    { 
      title: "Création de la ganache", 
      text: "Dans une casserole, portez la crème liquide, le lait et le sucre inverti (ou miel) à 85°C. Versez ce liquide chaud en 3 fois sur le chocolat noir préalablement haché. Mélangez vivement au centre avec une maryse pour créer un noyau élastique et brillant (une émulsion)." 
    },
    { 
      title: "Finition de la ganache", 
      text: "Quand la ganache redescend à environ 40°C, ajoutez le beurre en petits morceaux. Mixez le tout avec un mixeur plongeant (en restant bien au fond pour ne pas faire de bulles d'air). Filmez au contact et laissez cristalliser au réfrigérateur." 
    },
    { 
      title: "Le montage final", 
      text: "Une fois la ganache durcie, mettez-la en poche. Garnissez généreusement la moitié de vos coques refroidies, puis refermez avec l'autre moitié. Placez les macarons dans une boîte hermétique au réfrigérateur pendant 24h avant dégustation pour que l'humidité de la ganache imprègne bien la coque." 
    }
  ],

  advices: ["La purée d'abricot dans la coque est une véritable astuce de chef : le cacao a tendance à dessécher les coques, l'abricot permet de garder un cœur parfaitement moelleux !"],
  chefQuote: "Attention lors du macaronnage : le cacao en poudre contient de la matière grasse qui va faire retomber vos blancs plus vite que pour un macaron classique. Ayez la main légère !",
  equipment: ["Mixeur", "Batteur électrique ou robot", "Poche à douille unie (8 ou 10mm)", "Tamis fin", "Thermomètre"]
};

export default macaronChocolat;