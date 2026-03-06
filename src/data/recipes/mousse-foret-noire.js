const mousseForetNoire = {
  id: "mousse-foret-noire",
  title: "Mousse pour Forêt Noire",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "5 MIN",
  difficulty: "MOYEN",
  description: "Une mousse au chocolat légère (souvent une ganache montée ou Chantilly chocolatée) idéale pour garnir une Forêt Noire revisitée.",
  image: "https://www.lactalisfoodservice.fr/app/uploads/2022/07/lactalisfoodservice-inspiration-foret-noire-1200x675.png",
  baseServings: 1, // Pour 1 gâteau
  
  ingredients: [
    { name: "Chocolat noir 55%", amount: 150, unit: "g" },
    { name: "Crème liquide 35% (chaude)", amount: 150, unit: "ml" },
    { name: "Crème liquide 35% (froide)", amount: 300, unit: "ml" },
    { name: "Kirsch (facultatif)", amount: 1, unit: "c.à.s" }
  ],

  steps: [
    { 
      title: "GANACHE BASE", 
      text: "Verser la crème chaude sur le chocolat haché et émulsionner." 
    },
    { 
      title: "AJOUT CRÈME FROIDE", 
      text: "Ajouter la crème froide et le Kirsch, mélanger." 
    },
    { 
      title: "REPOS", 
      text: "Filmer au contact et laisser reposer au frais au moins 6h (idéalement une nuit)." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter le mélange bien froid au batteur comme une Chantilly jusqu'à texture onctueuse et ferme." 
    },
    { 
      title: "UTILISATION", 
      text: "Garnir immédiatement le gâteau." 
    }
  ],

  advices: ["C'est une ganache montée, elle doit être très froide pour monter."],
  chefQuote: "Le chocolat à 55% est idéal pour ne pas masquer le goût des cerises.",
  equipment: ["Casserole", "Mixeur plongeant", "Batteur"]
};

export default mousseForetNoire;