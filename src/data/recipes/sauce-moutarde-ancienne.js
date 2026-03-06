const sauceMoutardeAncienne = {
  id: "sauce-moutarde-ancienne",
  title: "La Sauce Moutarde à l'Ancienne",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "5 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Une sauce de caractère, à la fois crémeuse et relevée. L'équilibre entre la douceur de la crème et l'acidité du vinaigre et de la moutarde en fait le compagnon idéal des viandes blanches.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/173d8a186fceaa9eb1c081e757a2d213.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Échalotes", amount: 2, unit: "pcs" },
    { name: "Vinaigre de Xérès", amount: 5, unit: "cl" },
    { name: "Crème liquide 30%", amount: 40, unit: "cl" },
    { name: "Moutarde de Dijon", amount: 10, unit: "g" },
    { name: "Moutarde à l'ancienne", amount: 1, unit: "c.à.s" },
    { name: "Piment d'Espelette", amount: 1, unit: "pincée" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "La Réduction (Gastrique)", 
      text: "Ciselez finement les échalotes. Dans une casserole, mettez les échalotes et le vinaigre de Xérès. Portez à ébullition et laissez réduire à sec (plus de liquide)." 
    },
    { 
      title: "Le Crémage", 
      text: "Versez la crème liquide sur la réduction. Laissez mijoter à feu moyen. La crème doit réduire et s'épaissir. Ajoutez le piment d'Espelette." 
    },
    { 
      title: "La Finition", 
      text: "Retirez du feu. Incorporez la moutarde de Dijon et la moutarde à l'ancienne en fouettant doucement. Ne faites plus bouillir." 
    },
    { 
      title: "Rectification", 
      text: "Goûtez, salez si nécessaire (la moutarde est déjà très salée) et servez immédiatement." 
    }
  ],

  advices: ["La moutarde ne doit jamais bouillir, sinon elle perd sa force et libère de l'amertume."],
  chefQuote: "La réduction de vinaigre et d'échalote (gastrique) apporte la structure acide indispensable pour couper le gras de la crème.",
  equipment: ["Casserole", "Fouet"]
};

export default sauceMoutardeAncienne;