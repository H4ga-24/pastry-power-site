const lesSablesAuBeurre = {
  id: "les-sables-au-beurre",
  title: "Les sablés au beurre",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "12 MIN",
  difficulty: "FACILE",
  description: "Le biscuit classique par excellence, fondant et friable, au bon goût de beurre frais.",
  image: "https://assets.afcdn.com/recipe/20190704/94701_w1024h768c1cx1500cy998cxt0cyt0cxb3000cyb1996.jpg",
  baseServings: 30,
  
  ingredients: [
    { name: "Beurre doux", amount: 250, unit: "g" },
    { name: "Sucre glace", amount: 125, unit: "g" },
    { name: "Sel fin", amount: 2, unit: "g" },
    { name: "Jaunes d'œufs", amount: 40, unit: "g" },
    { name: "Farine T55", amount: 300, unit: "g" },
    { name: "Zeste de citron", amount: 1, unit: "pc", note: "facultatif" }
  ],

  steps: [
    { 
      title: "SABLAGE", 
      text: "Mélanger le beurre coupé en dés avec la farine et le sel du bout des doigts jusqu'à obtenir une texture sableuse." 
    },
    { 
      title: "SUCRE", 
      text: "Ajouter le sucre glace (et le zeste) et mélanger." 
    },
    { 
      title: "LIANT", 
      text: "Incorporer les jaunes d'œufs et fraiser la pâte pour l'homogénéiser sans la corser." 
    },
    { 
      title: "REPOS", 
      text: "Former une boule aplatie, filmer et laisser reposer 1h au frais." 
    },
    { 
      title: "ABAISSE", 
      text: "Étaler la pâte sur 4mm d'épaisseur sur un plan de travail fariné." 
    },
    { 
      title: "DÉTAILLAGE", 
      text: "Découper des formes à l'emporte-pièce." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 180°C pendant 10 à 12 minutes. Les bords doivent à peine colorer." 
    }
  ],

  advices: ["Le sucre glace donne une texture plus fine que le sucre semoule."],
  chefQuote: "Un bon sablé doit être friable ('sableux') en bouche, d'où l'importance de ne pas travailler le gluten.",
  equipment: ["Emporte-pièces", "Rouleau à pâtisserie", "Plaque de cuisson"]
};

export default lesSablesAuBeurre;