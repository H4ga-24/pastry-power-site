const lesPancakes = {
  id: "les-pancakes",
  title: "Les pancakes",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "15 MIN",
  difficulty: "FACILE",
  description: "Le pancake est une crêpe d'aspect et de saveur très différents à la crêpe européenne (diamètre plus faible, plus épaisse). L'épaisseur provient de la consistance de la pâte et de l'usage d'un agent levant.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2021/08/Pancake.jpg",
  baseServings: 9, // "9 Nombre de pièces"
  
  ingredients: [
    { name: "Farine type 55", amount: 250, unit: "g" },
    { name: "Levure Chimique", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 40, unit: "g" },
    { name: "Sel fin", amount: 2, unit: "g" },
    { name: "Lait demi-écrémé", amount: 380, unit: "g" },
    { name: "Oeufs", amount: 100, unit: "g" },
    { name: "Beurre fondu froid", amount: 50, unit: "g" },
    { name: "Vanille gousse", amount: 0.5, unit: "pc" }
  ],

  steps: [
    { 
      title: "PRÉPARATION DE LA PÂTE", 
      text: "Faire fondre le beurre et le laisser refroidir. Dans un cul de poule, tamiser ensemble la farine et la levure chimique. Ajouter le sucre et le sel. Mélanger les poudres." 
    },
    { 
      title: "MÉLANGE LIQUIDE", 
      text: "Dans un autre récipient, battre les oeufs avec le lait et les graines de la gousse de vanille." 
    },
    { 
      title: "ASSEMBLAGE", 
      text: "Verser le mélange liquide sur les poudres. Fouetter délicatement en partant du centre pour incorporer la farine progressivement et éviter les grumeaux. Ne pas trop travailler la pâte une fois la farine mouillée." 
    },
    { 
      title: "FINITION", 
      text: "Incorporer le beurre fondu refroidi. Mélanger pour lisser la pâte." 
    },
    { 
      title: "REPOS", 
      text: "Laisser reposer la pâte 30 minutes au réfrigérateur (ou à température ambiante si utilisation rapide) pour permettre à la levure d'agir légèrement et au gluten de se détendre." 
    },
    { 
      title: "CUISSON", 
      text: "Dans une poêle chaude et légèrement huilée, verser une petite louche de pâte. Cuire à feu moyen. Lorsque des bulles apparaissent à la surface et éclatent, retourner le pancake et cuire l'autre face environ 1 minute." 
    }
  ],

  advices: ["Ne retournez qu'une seule fois le pancake pour garder son moelleux."],
  chefQuote: "Si vous trop travaillez la pâte, les pancakes seront caoutchouteux au lieu d'être aériens.",
  equipment: ["Poêle antiadhésive", "Fouet", "Louche"]
};

export default lesPancakes;