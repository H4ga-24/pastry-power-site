const mousseCoco = {
  id: "mousse-coco",
  title: "Mousse Coco",
  category: "Pâtisserie",
  subCategory: ["Mousses"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "5 MIN",
  difficulty: "FACILE",
  description: "Une mousse blanche immaculée au goût doux et lacté de noix de coco.",
  image: "https://images.ctfassets.net/1p5r6txvlxu4/33vykH1ToCmfKRgQj8ouoK/a912ddfe3574c7a41a88dd0202653a85/Mousse-noix-de-coco.jpg",
  baseServings: 1, // "Pour 1 cercle (20cm)"
  
  ingredients: [
    { name: "Purée de noix de coco", amount: 300, unit: "g" },
    { name: "Sucre glace", amount: 30, unit: "g" },
    { name: "Gélatine (feuilles)", amount: 5, unit: "g" },
    { name: "Crème liquide 35%", amount: 300, unit: "ml" },
    { name: "Malibu (facultatif)", amount: 10, unit: "ml" }
  ],

  steps: [
    { 
      title: "GÉLATINE", 
      text: "Faire tremper la gélatine dans l'eau froide." 
    },
    { 
      title: "CHAUFFE", 
      text: "Chauffer une partie de la purée de coco." 
    },
    { 
      title: "COLLAGE", 
      text: "Incorporer la gélatine essorée dans la purée chaude. Mélanger avec le reste de purée froide et la liqueur." 
    },
    { 
      title: "MONTAGE", 
      text: "Monter la crème en chantilly souple." 
    },
    { 
      title: "MÉLANGE", 
      text: "Incorporer délicatement la crème montée à la purée gélifiée refroidie." 
    },
    { 
      title: "FINITION", 
      text: "Utiliser immédiatement." 
    }
  ],

  advices: ["Attention, la purée de coco contient du gras, elle fige plus vite au froid."],
  chefQuote: "Pour plus de texture, ajoutez de la noix de coco râpée torréfiée dans la mousse.",
  equipment: ["Casserole", "Batteur", "Maryse"]
};

export default mousseCoco;