const laTeurgoule = {
  id: "la-teurgoule",
  title: "La Teurgoule (Normandie)",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "5H à 6H",
  difficulty: "TRÈS FACILE",
  description: "Le célèbre riz au lait normand à la cannelle, cuit très lentement au four dans une terrine en grès. Les grains de riz fondent littéralement dans le lait pour créer une texture crémeuse sous une croûte dorée.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/30be3f25abc534e5a963ef9e583d5c0f.jpg",
  baseServings: 8, // "Terrine familiale"
  
  ingredients: [
    { name: "Lait entier", amount: 2, unit: "L" },
    { name: "Riz rond (dessert)", amount: 150, unit: "g" },
    { name: "Sucre en poudre", amount: 170, unit: "g" },
    { name: "Cannelle en poudre", amount: 2, unit: "cc" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Préchauffez votre four à 110°C ou 120°C (th. 3-4). La chaleur doit être douce." 
    },
    { 
      title: "L'Assemblage", 
      text: "Dans la terrine en grès, versez le riz rond (non rincé), le sucre, le sel et la cannelle en poudre. Mélangez ces ingrédients secs directement au fond du plat." 
    },
    { 
      title: "Le Mouillage", 
      text: "Versez les 2 litres de lait entier froid progressivement sur le mélange, tout en remuant doucement avec une cuillère en bois ou un fouet pour bien dissoudre le sucre et répartir la cannelle." 
    },
    { 
      title: "La Cuisson Longue", 
      text: "Enfournez la terrine à mi-hauteur. Laissez cuire pendant 5 à 6 heures. Le lait va réduire très lentement. Une croûte brune, épaisse et caramélisée va se former sur le dessus : ne la percez pas, ne remuez pas." 
    },
    { 
      title: "Vérification", 
      text: "La Teurgoule est cuite quand elle n'est plus liquide (elle ne doit plus trembloter comme de l'eau, mais avoir une consistance de crème prise). Le riz doit avoir absorbé la quasi-totalité du lait." 
    },
    { 
      title: "Service", 
      text: "Sortez du four et laissez tiédir ou refroidir complètement dans la terrine. La Teurgoule se déguste traditionnellement tiède ou froide, avec un verre de cidre." 
    }
  ],

  advices: ["Utilisez impérativement du lait entier, c'est le gras qui donne l'onctuosité."],
  chefQuote: "La terrine en grès (la 'gatte') est essentielle pour une cuisson homogène et la formation de la croûte.",
  equipment: ["Terrine en grès", "Cuillère en bois"]
};

export default laTeurgoule;