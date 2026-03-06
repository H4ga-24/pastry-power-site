const macaronVanille = {
  id: "macaron-vanille",
  title: "Macaron Vanille Intense",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "1H 45",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "L'élégance absolue : une coque parsemée de grains de vanille et une ganache onctueuse infusée aux gousses de Madagascar.",
  image: "https://images.pexels.com/photos/26774587/pexels-photo-26774587.jpeg?_gl=1*1ayh36l*_ga*MzUxODE3MDM0LjE3NDAyMzEzMDM.*_ga_8JE65Q40S6*czE3NzA1MDI4MDgkbzckZzEkdDE3NzA1MDI4NzYkajU5JGwwJGgw",
  baseServings: 70, // coques
  
  ingredients: [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "Coques (50% amande/50% sucre glace)" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques" },
    { name: "Gousses de vanille", amount: 2, unit: "p", note: "Coques (grattées)" },
    { name: "Crème fleurette", amount: 200, unit: "g", note: "Garniture" },
    { name: "Gousses de Vanille", amount: 3, unit: "p", note: "Garniture" },
    { name: "Trimoline (sucre inverti)", amount: 20, unit: "g", note: "Garniture" },
    { name: "Glucose", amount: 20, unit: "g", note: "Garniture" },
    { name: "Couverture ivoire 35%", amount: 340, unit: "g", note: "Garniture" },
    { name: "Beurre de cacao Mycryo", amount: 10, unit: "g", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques Vanille", 
      text: "Au robot-coupe, affiner le tant pour tant avec le sucre glace. Ajouter les graines des 2 gousses de vanille directement dans les poudres. Tamiser finement. Monter les blancs d'œufs et la crème de tartre avec un dixième du sucre semoule. Serrer avec le reste du sucre (meringue bec d'oiseau). Incorporer les poudres vanillées à la maryse (macaronnage). Dresser à la douille n°10. Cuire à 150°C (5 min fermé, 12-14 min ouvert)." 
    },
    { 
      title: "Ganache Ivoire Vanille", 
      text: "Chauffer la crème avec le glucose, la trimoline et les 3 gousses de vanille grattées. Laisser infuser 10 min. Réchauffer si besoin, chinoiser sur la couverture ivoire et le beurre de cacao Mycryo. Émulsionner au mixeur plongeant. Laisser cristalliser au frais jusqu'à texture pochable." 
    },
    { 
      title: "Montage", 
      text: "Garnir généreusement les coques avec la ganache. Réserver 24h au frais pour la maturation." 
    }
  ],

  advices: ["Le beurre de cacao Mycryo aide à stabiliser la ganache montée sans ajouter trop de gras."],
  chefQuote: "Ne jetez pas les gousses épuisées, faites-les sécher pour faire du sucre vanillé maison.",
  equipment: ["Robot coupe", "Poche à douille", "Mixeur plongeant"]
};

export default macaronVanille;