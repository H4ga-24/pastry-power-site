const tarteletteCitronMeringuee = {
  id: "tartelette-citron-meringuee",
  title: "Tartelette Citron Meringuée",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "40 MIN",
  cookTime: "20 MIN",
  difficulty: "MOYEN",
  description: "Un grand classique : l'équilibre parfait entre l'acidité vive du crémeux citron et la douceur nuageuse de la meringue italienne.",
  image: "https://tout-gourmand.fr/media/cache/voir_recette/media/images/recettes/26444-tout-gourmand-tartelettes-au-citron-meringuee.webp",
  baseServings: 6, // tartelettes
  
  ingredients: [
    { name: "Pâte sucrée", amount: 300, unit: "g" },
    { name: "Jus de citron jaune", amount: 150, unit: "g", note: "Crémeux" },
    { name: "Zestes de citron", amount: 2, unit: "pcs", note: "Crémeux" },
    { name: "Sucre semoule", amount: 150, unit: "g", note: "Crémeux" },
    { name: "Oeufs entiers", amount: 3, unit: "pcs", note: "Crémeux" },
    { name: "Beurre doux", amount: 180, unit: "g", note: "Crémeux" },
    { name: "Blancs d'œufs", amount: 100, unit: "g", note: "Meringue" },
    { name: "Sucre", amount: 200, unit: "g", note: "Meringue" },
    { name: "Eau", amount: 70, unit: "g", note: "Meringue" }
  ],

  steps: [
    { 
      title: "Fonds de tarte", 
      text: "Foncer les cercles à tartelette avec la pâte sucrée. Cuire à blanc à 170°C pendant 15-20 min jusqu'à coloration dorée. Laisser refroidir." 
    },
    { 
      title: "Crémeux Citron (Base)", 
      text: "Dans un cul-de-poule, mélanger le jus de citron, les zestes, le sucre et les œufs. Cuire au bain-marie en fouettant jusqu'à épaississement (83-84°C), comme une crème anglaise." 
    },
    { 
      title: "Emulsion du Crémeux", 
      text: "Laisser refroidir la crème à 45°C. Ajouter le beurre coupé en dés et mixer longuement au mixeur plongeant pour lisser et émulsionner. Laisser cristalliser au frais 2h." 
    },
    { 
      title: "Meringue Italienne", 
      text: "Cuire le sucre et l'eau à 121°C. Verser en filet sur les blancs montés mousseux. Fouetter à vitesse moyenne jusqu'à complet refroidissement." 
    },
    { 
      title: "Montage & Finition", 
      text: "Garnir les fonds de tartelette avec le crémeux citron lissé (dôme ou à ras). Pocher la meringue italienne (douille Saint-Honoré ou unie). Brûler légèrement au chalumeau." 
    }
  ],

  advices: ["Ne faites pas bouillir le crémeux citron, sinon les œufs vont coaguler (omelette au citron)."],
  chefQuote: "L'émulsion au beurre à 45°C est le secret des grands chefs pour une crème au citron soyeuse qui ne fige pas comme un bloc de plâtre.",
  equipment: ["Mixeur plongeant", "Thermomètre", "Chalumeau"]
};

export default tarteletteCitronMeringuee;