const tarteBourdaloue = {
  id: "tarte-bourdaloue",
  title: "Tarte Bourdaloue",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "30 MIN",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "Un grand classique parisien : une pâte sucrée, une crème d'amande moelleuse parfumée au rhum et des demi-poires pochées disposées en rosace.",
  image: "https://empreintesucree.fr/wp-content/uploads/2018/10/1-tarte-bourdaloue-poire-amande-recette-patisserie-empreinte-sucree.jpg", // Note: fallback image added
  baseServings: 6, // 1 tarte 22-24cm
  
  ingredients: [
    { name: "Pâte sucrée", amount: 300, unit: "g" },
    { name: "Beurre pommade", amount: 100, unit: "g", note: "Crème d'amande" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Crème d'amande" },
    { name: "Poudre d'amande", amount: 100, unit: "g", note: "Crème d'amande" },
    { name: "Oeufs", amount: 2, unit: "pc", note: "Crème d'amande" },
    { name: "Rhum ambré", amount: 1, unit: "c.à.s", note: "Crème d'amande" },
    { name: "Poires au sirop (demi)", amount: 5, unit: "pcs" },
    { name: "Amandes effilées", amount: 20, unit: "g", note: "Décor" }
  ],

  steps: [
    { 
      title: "Fonçage", 
      text: "Foncer un cercle à tarte de 22-24cm avec la pâte sucrée. Piquer le fond et réserver au frais 30 minutes." 
    },
    { 
      title: "Crème d'amande", 
      text: "Crémer le beurre pommade avec le sucre. Ajouter la poudre d'amande. Incorporer les œufs un par un, puis le rhum. Mélanger sans émulsionner excessivement pour éviter que la crème ne gonfle trop et ne déborde à la cuisson." 
    },
    { 
      title: "Garnissage", 
      text: "Étaler la crème d'amande uniformément sur le fond de tarte cru." 
    },
    { 
      title: "Disposition des fruits", 
      text: "Trancher finement les demi-poires (sans aller jusqu'au bout pour les garder en un seul bloc si possible). Les disposer en rosace, pointe vers le centre, sur la crème d'amande. Appuyer légèrement." 
    },
    { 
      title: "Finition et Cuisson", 
      text: "Parsemer d'amandes effilées dans les espaces vides. Enfourner à 180°C pendant 35 à 40 minutes. La crème d'amande doit être bien dorée et gonflée autour des poires." 
    }
  ],

  advices: ["Épongez bien vos poires au sirop sur du papier absorbant avant de les mettre sur la tarte, sinon elles vont détremper la crème."],
  chefQuote: "L'erreur classique est de trop fouetter la crème d'amande. Elle doit être mélangée doucement à la maryse ou à la feuille du batteur.",
  equipment: ["Cercle à tarte", "Maryse"]
};

export default tarteBourdaloue;