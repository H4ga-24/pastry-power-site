const truffesChocolatWhisky = {
  id: "truffes-chocolat-whisky",
  title: "Truffes Chocolat & Whisky",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "2H + 24H (Repos)",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "La truffe de tradition : une ganache noire corsée au whisky tourbé, roulée dans un cacao pur pour une amertume élégante.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/79c549535c907e074738d632777d0154.png",
  baseServings: 100, // pièces (environ)
  
  ingredients: [
    { name: "Crème liquide 35%", amount: 350, unit: "g", note: "Ganache" },
    { name: "Sucre inverti (Trimoline)", amount: 40, unit: "g", note: "Ganache" },
    { name: "Sorbitol poudre", amount: 30, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 64%", amount: 480, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 60, unit: "g", note: "Ganache" },
    { name: "Whisky (Tourbé ou Single Malt)", amount: 40, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 64%", amount: 500, unit: "g", note: "Enrobage" },
    { name: "Cacao poudre Plein Arôme", amount: 200, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "La Ganache", 
      text: "Porter à ébullition la crème liquide avec le sucre inverti et le sorbitol. Verser sur le chocolat noir. Laisser reposer 1 min. Émulsionner à la maryse puis au mixeur plongeant. À 35°C-40°C, ajouter le beurre en parcelles, mixer. Ajouter enfin le Whisky, mixer une dernière fois sans incorporer d'air." 
    },
    { 
      title: "Façonnage", 
      text: "Couler la ganache dans un bac, filmer au contact et laisser cristalliser 24h à 16°C. Dresser des boules régulières (environ 10g) à la poche à douille lisse sur feuille guitare. Laisser cristalliser. Rouler rapidement entre les paumes des mains pour les rendre sphériques." 
    },
    { 
      title: "Pré-enrobage / Chablonnage Main", 
      text: "Mettre une noisette de chocolat tempéré dans le creux de la main (gantée). Rouler 2 ou 3 truffes à la fois pour les recouvrir d'une pellicule très fine. Déposer et laisser figer. (Ceci garantit l'hermétisme)." 
    },
    { 
      title: "Enrobage et Finition", 
      text: "Mettre au point la couverture noire. Tremper chaque truffe à la fourchette, tapoter pour retirer l'excédent. Déposer délicatement dans un bac rempli de cacao. Recouvrir immédiatement de cacao. Laisser figer quelques minutes avant de tamiser." 
    }
  ],

  advices: ["Une fois la truffe trempée, vous avez environ 25 secondes avant que le chocolat ne fige. Si elle n'est pas roulée dans le cacao avant, elle aura des taches brillantes disgracieuses."],
  chefQuote: "L'alcool est ajouté à 35°C pour ne pas évaporer les arômes volatils. Le whisky n'est pas là pour alcooliser le bonbon, mais pour apporter ses notes boisées.",
  equipment: ["Mixeur plongeant", "Fourchette à tremper ronde", "Tamis"]
};

export default truffesChocolatWhisky;