const tabletteFourreFramboise = {
  id: "tablette-fourre-framboise",
  title: "Tablette fourrée framboise",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "1H + 2H (Repos)",
  cookTime: "15 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une tablette de chocolat noir intense qui renferme un cœur coulant et fruité à la framboise. Le contraste chocolat noir et framboise est un classique indémodable.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f61c275f373852b21c27e5cf272ba26b.jpg",
  baseServings: 3, // Tablettes
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 45, unit: "g", note: "Ganache framboise" },
    { name: "Couverture Lait 40%", amount: 140, unit: "g", note: "Ganache framboise" },
    { name: "Framboises (mixées)", amount: 70, unit: "g", note: "Ganache framboise" },
    { name: "Beurre doux", amount: 20, unit: "g", note: "Ganache framboise" },
    { name: "Couverture Noire 65%", amount: 500, unit: "g", note: "Coque moulage" }
  ],

  steps: [
    { 
      title: "Préparation de la ganache framboise", 
      text: "Porter la crème liquide à ébullition. Verser la crème chaude sur la couverture lait partiellement fondue. Ajouter le beurre en dés et les framboises préalablement mixées et passées au tamis (pour retirer les pépins). Mixer l'ensemble au mixeur plongeant sans incorporer d'air, puis chinoiser si nécessaire. Laisser refroidir la ganache 2 heures à température ambiante (viser 28°C environ pour le pochage)." 
    },
    { 
      title: "Moulage des coques", 
      text: "Mettre au point la couverture noire. Remplir les moules à tablettes, tapoter pour retirer l'air, vider l'excédent et racler proprement. Laisser cristalliser." 
    },
    { 
      title: "Garnissage", 
      text: "Pocher la ganache framboise (à 28°C max) dans les coques cristallisées. Laisser 2mm de marge pour fermer la tablette. Laisser figer au frais pendant 2h." 
    },
    { 
      title: "Obturation", 
      text: "Fermer les tablettes avec de la couverture noire tempérée. Lisser avec une spatule large. Laisser cristalliser 2h avant démoulage." 
    }
  ],

  advices: ["Le tamisage des framboises est crucial, la sensation des pépins dans une ganache lisse est très désagréable."],
  chefQuote: "L'utilisation d'une base chocolat au lait pour la ganache permet d'adoucir l'acidité de la framboise avant de l'enrober de chocolat noir.",
  equipment: ["Moule à tablette", "Tamis", "Mixeur plongeant"]
};

export default tabletteFourreFramboise;