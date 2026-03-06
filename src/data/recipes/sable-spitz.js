const sableSpitz = {
  id: "sable-spitz",
  title: "Sablé Spitz",
  category: "Pâtisserie",
  subCategory: ["Petits Fours Secs"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "15 MIN",
  difficulty: "MOYEN",
  description: "Des sablés viennois (Spritz) fondants et friables, souvent trempés dans le chocolat, idéals pour le goûter.",
  image: "https://empreintesucree.fr/wp-content/uploads/2021/10/2-sables-viennois-spritz-recette-empreinte-sucree.jpg",
  baseServings: 24, // portions
  
  ingredients: [
    { name: "Beurre pommade", amount: 190, unit: "g" },
    { name: "Sucre glace", amount: 75, unit: "g" },
    { name: "Blanc d'œuf", amount: 30, unit: "g" },
    { name: "Farine", amount: 225, unit: "g" },
    { name: "Vanille", amount: 1, unit: "c.à.c" },
    { name: "Chocolat noir (glaçage)", amount: 150, unit: "g" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Crémer le beurre pommade avec le sucre glace et la vanille jusqu'à obtenir une texture onctueuse." 
    },
    { 
      title: "EMULSION", 
      text: "Ajouter le blanc d'œuf et fouetter vivement pour émulsionner le tout." 
    },
    { 
      title: "FARINE", 
      text: "Incorporer la farine tamisée délicatement à la maryse sans trop travailler la pâte." 
    },
    { 
      title: "POCHAGE", 
      text: "Mettre la pâte dans une poche munie d'une douille cannelée. Dresser des formes de 'W' ou de bâtonnets sur une plaque." 
    },
    { 
      title: "CUISSON", 
      text: "Cuire à 170°C pendant 12 à 15 minutes jusqu'à ce qu'ils soient dorés." 
    },
    { 
      title: "FINITION", 
      text: "Une fois refroidis, tremper la moitié des biscuits dans le chocolat fondu." 
    }
  ],

  advices: ["Pochez la pâte dès qu'elle est prête, sinon le beurre va figer et la pâte sera impossible à dresser à la douille."],
  chefQuote: "L'émulsion entre le beurre pommade et le blanc d'œuf est primordiale pour obtenir cette texture si friable caractéristique du Spritz.",
  equipment: ["Poche à douille", "Douille cannelée large", "Batteur"]
};

export default sableSpitz;